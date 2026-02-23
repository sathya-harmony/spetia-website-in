// Simple in-memory rate limiter (resets when serverless function cold starts)
// For production, consider using Vercel KV or Upstash Redis
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3; // 3 submissions per hour per IP

// List of disposable email domains to block
const DISPOSABLE_EMAIL_DOMAINS = [
    'tempmail.com', 'temp-mail.org', 'guerrillamail.com', 'guerrillamail.org',
    'mailinator.com', 'throwaway.email', 'fakeinbox.com', 'getnada.com',
    'yopmail.com', 'trashmail.com', '10minutemail.com', 'tempmailo.com',
    'disposablemail.com', 'mailnesia.com', 'maildrop.cc', 'sharklasers.com',
    'spam4.me', 'grr.la', 'guerrillamailblock.com', 'pokemail.net',
    'spamgourmet.com', 'mytrashmail.com', 'mt2009.com', 'thankyou2010.com',
    'trash2009.com', 'mt2014.com', 'tempail.com', 'dispostable.com'
];

function isRateLimited(ip) {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    // Reset if window has passed
    if (now - record.firstRequest > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    // Check if over limit
    if (record.count >= MAX_REQUESTS) {
        return true;
    }

    // Increment count
    record.count++;
    rateLimitMap.set(ip, record);
    return false;
}

function isDisposableEmail(email) {
    const domain = email.split('@')[1]?.toLowerCase();
    return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
}

function detectSpamContent(message, name, subject) {
    const combined = `${name} ${subject} ${message}`.toLowerCase();

    // Check for excessive links (more than 2)
    const linkCount = (combined.match(/https?:\/\//g) || []).length;
    if (linkCount > 2) {
        return 'Message contains too many links';
    }

    // Check for repeated characters (spammy behavior)
    if (/(.)\1{9,}/.test(combined)) {
        return 'Message contains suspicious repeated characters';
    }

    // Check for common spam keywords
    const spamKeywords = [
        'cialis', 'viagra', 'casino', 'lottery', 'winner', 'crypto giveaway',
        'bitcoin doubler', 'earn money fast', 'work from home', 'click here now',
        'act now', 'limited time', 'free money', 'guaranteed income'
    ];

    for (const keyword of spamKeywords) {
        if (combined.includes(keyword)) {
            return 'Message flagged as potential spam';
        }
    }

    // Check for all caps (shouting/spam)
    const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
    if (message.length > 50 && capsRatio > 0.7) {
        return 'Please avoid using excessive capital letters';
    }

    return null; // No spam detected
}

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress || 'unknown';

        // 0. Rate limiting check
        if (isRateLimited(clientIP)) {
            return res.status(429).json({
                error: 'Too many submissions. Please try again in an hour.'
            });
        }

        const { name, email, phone, subject, message, recaptchaToken, honeypot } = req.body;

        // 1. Honeypot check - if filled, it's a bot
        if (honeypot) {
            // Silently succeed to not alert the bot
            return res.status(200).json({ success: true });
        }

        // 2. Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Please fill in all required fields' });
        }

        // Name validation
        if (name.trim().length < 2) {
            return res.status(400).json({ error: 'Please enter your full name' });
        }

        // Email format validation (more strict)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Please enter a valid email address (e.g., name@company.com)'
            });
        }

        // Check for disposable email
        if (isDisposableEmail(email)) {
            return res.status(400).json({
                error: 'Please use a valid business or personal email address'
            });
        }

        // Subject validation
        if (subject.trim().length < 3) {
            return res.status(400).json({ error: 'Please provide a valid inquiry type' });
        }

        // Message length validation
        if (message.length < 10) {
            return res.status(400).json({ error: 'Message too short (minimum 10 characters)' });
        }

        if (message.length > 5000) {
            return res.status(400).json({ error: 'Message too long (maximum 5000 characters)' });
        }

        // 3. Spam content detection
        const spamResult = detectSpamContent(message, name, subject);
        if (spamResult) {
            return res.status(400).json({ error: spamResult });
        }

        // 4. reCAPTCHA verification
        if (!recaptchaToken) {
            return res.status(400).json({ error: 'Security verification required. Please refresh and try again.' });
        }

        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
            }
        );

        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success || recaptchaData.score < 0.5) {
            return res.status(400).json({
                error: 'Security verification failed. Please try again or contact us directly.'
            });
        }

        // 5. Sanitize inputs (XSS prevention)
        const sanitize = (str) => str
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;');

        const sanitizedData = {
            name: sanitize(name.trim()),
            email: sanitize(email.trim().toLowerCase()),
            phone: sanitize((phone || '').trim()),
            subject: sanitize(subject.trim()),
            message: sanitize(message.trim())
        };

        // 6. Send email via Resend
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        const contactEmail = process.env.CONTACT_EMAIL || 'contact@spetia.com';

        const { data, error } = await resend.emails.send({
            from: 'Spetia India <noreply@spetia.in>',
            to: [contactEmail],
            replyTo: sanitizedData.email,
            subject: `[spetia.in Inquiry] ${sanitizedData.subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #1a1a1a; padding: 20px; text-align: center;">
                        <h1 style="color: #f97316; margin: 0;">New Contact Form Submission</h1>
                        <p style="color: #888; margin: 5px 0 0 0; font-size: 12px;">via spetia.in</p>
                    </div>
                    <div style="padding: 30px; background: #f9f9f9;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedData.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                                    <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedData.phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedData.subject}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px;">
                            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                            <div style="background: white; padding: 20px; border-left: 4px solid #f97316; white-space: pre-wrap;">
${sanitizedData.message}
                            </div>
                        </div>
                    </div>
                    <div style="background: #1a1a1a; padding: 15px; text-align: center; color: #888; font-size: 12px;">
                        <p style="margin: 0;">reCAPTCHA Score: ${recaptchaData.score.toFixed(2)} | IP: ${clientIP}</p>
                    </div>
                </div>
            `
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: 'Failed to send email. Please try again.' });
        }

        // 7. Success
        return res.status(200).json({
            success: true,
            message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
    }
}
