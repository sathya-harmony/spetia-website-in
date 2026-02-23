import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AccentIcon from '../common/CheckIcon';

// reCAPTCHA site key - replace with your own
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        honeypot: ''
    });

    const [isHovered, setIsHovered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    useEffect(() => {
        if (window.grecaptcha) {
            setRecaptchaLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = () => setRecaptchaLoaded(true);
        document.head.appendChild(script);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (submitStatus.type === 'error') {
            setSubmitStatus({ type: '', message: '' });
        }
    };

    const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ type: '', message: '' });
        setIsSubmitting(true);

        try {
            let recaptchaToken = '';
            if (window.grecaptcha && recaptchaLoaded) {
                try {
                    recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
                } catch (recaptchaError) {
                    if (process.env.NODE_ENV === 'development') console.error('reCAPTCHA error:', recaptchaError);
                    setSubmitStatus({ type: 'error', message: 'Security verification failed. Please refresh and try again.' });
                    setIsSubmitting(false);
                    return;
                }
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, recaptchaToken })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus({ type: 'success', message: data.message || 'Thank you! Your message has been sent successfully.' });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '', honeypot: '' });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            if (process.env.NODE_ENV === 'development') console.error('Form submission error:', error);
            setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-spetia-dark min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />


            {/* Technical Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10 pt-40 pb-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-spetia-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-6">
                        Start Your <span className="text-spetia-orange-500">Project</span>
                    </h1>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Ready to build your dream home or space? Connect with our team for a consultation and proposal.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left - Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 flex flex-col gap-6"
                    >
                        {/* Office Card */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-spetia-orange-500/50 transition-all duration-300 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-spetia-orange-500/10 border border-spetia-orange-500/30 flex items-center justify-center">
                                    <AccentIcon variant="location" className="text-spetia-orange-500" />
                                </div>
                                <span className="text-xs text-white/40 uppercase tracking-widest font-bold">India Head Office</span>
                            </div>
                            <p className="text-xl text-white font-bold uppercase tracking-tight group-hover:text-spetia-orange-400 transition-colors">
                                HSR Layout, Sector 2, Bangalore
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-spetia-orange-500/50 transition-all duration-300 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-spetia-orange-500/10 border border-spetia-orange-500/30 flex items-center justify-center">
                                    <AccentIcon variant="email" className="text-spetia-orange-500" />
                                </div>
                                <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Email Us</span>
                            </div>
                            <a href="mailto:contact@spetia.in" className="text-xl text-white font-bold tracking-tight group-hover:text-spetia-orange-400 transition-colors flex items-center gap-2">
                                contact@spetia.in
                                <span className="text-spetia-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-spetia-orange-500/50 transition-all duration-300 group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-spetia-orange-500/10 border border-spetia-orange-500/30 flex items-center justify-center">
                                    <AccentIcon variant="phone" className="text-spetia-orange-500" />
                                </div>
                                <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Call Us</span>
                            </div>
                            <div className="space-y-2">
                                <a href="tel:+919611524249" className="text-lg text-white font-bold tracking-tight group-hover:text-spetia-orange-400 transition-colors block">
                                    +91 9611524249
                                </a>
                            </div>
                        </div>

                        {/* Response Time Badge */}
                        <div className="flex items-center gap-4 p-4 border border-white/5 bg-black/20 rounded-sm">
                            <div className="text-3xl font-bold text-spetia-orange-500">24h</div>
                            <div>
                                <div className="text-sm font-bold text-white uppercase tracking-wider">Response Time</div>
                                <div className="text-xs text-white/40">Average inquiry response</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-8 md:p-10 relative">
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-spetia-orange-500" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-spetia-orange-500" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-spetia-orange-500" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-spetia-orange-500" />

                            {/* Form Header */}
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                                <div>
                                    <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Request a Proposal</h2>
                                    <p className="text-sm text-white/40 mt-1">Fill out the form and we'll get back to you within 24 hours</p>
                                </div>
                                <div className="hidden md:block text-right">
                                    <div className="text-xs text-white/30 uppercase tracking-widest">Form</div>
                                    <div className="text-2xl font-bold text-spetia-orange-500/30">01</div>
                                </div>
                            </div>

                            {/* Status Messages */}
                            {submitStatus.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mb-6 p-5 border-l-4 ${submitStatus.type === 'success'
                                        ? 'bg-green-500/10 border-green-500 text-green-400'
                                        : 'bg-red-500/10 border-red-500 text-red-400'
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-lg">{submitStatus.type === 'success' ? '✓' : '!'}</span>
                                        <div>
                                            <p className="font-bold uppercase text-sm tracking-wider mb-1">
                                                {submitStatus.type === 'success' ? 'Message Sent' : 'Error'}
                                            </p>
                                            <p className="text-sm opacity-90">{submitStatus.message}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Honeypot */}
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={formData.honeypot}
                                    onChange={handleChange}
                                    className="absolute -left-[9999px] opacity-0"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs text-white/50 uppercase tracking-widest font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-spetia-orange-500/50" />
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Smith"
                                            required
                                            disabled={isSubmitting}
                                            className="w-full bg-black/30 border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-black/40 transition-all placeholder:text-white/20 disabled:opacity-50"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-xs text-white/50 uppercase tracking-widest font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-spetia-orange-500/50" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            required
                                            disabled={isSubmitting}
                                            className={`w-full bg-black/30 border px-4 py-4 text-white text-sm focus:outline-none focus:bg-black/40 transition-all placeholder:text-white/20 disabled:opacity-50 ${formData.email && !isValidEmail(formData.email)
                                                ? 'border-red-500/50 focus:border-red-500'
                                                : 'border-white/10 focus:border-spetia-orange-500'
                                                }`}
                                        />
                                        {formData.email && !isValidEmail(formData.email) && (
                                            <p className="text-xs text-red-400">Please enter a valid email address</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-xs text-white/50 uppercase tracking-widest font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-white/20" />
                                            Phone (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 99999 00000"
                                            disabled={isSubmitting}
                                            className="w-full bg-black/30 border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-black/40 transition-all placeholder:text-white/20 disabled:opacity-50"
                                        />
                                    </div>

                                    {/* Service Type - Construction-relevant dropdown */}
                                    <div className="space-y-2">
                                        <label className="text-xs text-white/50 uppercase tracking-widest font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-spetia-orange-500/50" />
                                            Service Required
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full bg-black/30 border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-black/40 transition-all disabled:opacity-50 appearance-none cursor-pointer"
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f97316'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em' }}
                                        >
                                            <option value="" className="bg-spetia-dark">Select a service...</option>
                                            <option value="Residential Construction" className="bg-spetia-dark">Residential Construction</option>
                                            <option value="Commercial Construction" className="bg-spetia-dark">Commercial Construction</option>
                                            <option value="Luxury Interiors" className="bg-spetia-dark">Luxury Interiors</option>
                                            <option value="Architectural Design" className="bg-spetia-dark">Architectural Design</option>
                                            <option value="Renovation & Remodeling" className="bg-spetia-dark">Renovation & Remodeling</option>
                                            <option value="Structural Engineering" className="bg-spetia-dark">Structural Engineering</option>
                                            <option value="MEP Services" className="bg-spetia-dark">MEP Services</option>
                                            <option value="Project Management" className="bg-spetia-dark">Project Management</option>
                                            <option value="Other" className="bg-spetia-dark">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-xs text-white/50 uppercase tracking-widest font-bold flex items-center gap-2">
                                        <span className="w-2 h-2 bg-spetia-orange-500/50" />
                                        Project Details
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project — location, type, approximate area, timeline, and any specific requirements..."
                                        required
                                        disabled={isSubmitting}
                                        minLength={10}
                                        maxLength={5000}
                                        rows={5}
                                        className="w-full bg-black/30 border border-white/10 px-4 py-4 text-white text-sm focus:outline-none focus:border-spetia-orange-500 focus:bg-black/40 transition-all resize-none placeholder:text-white/20 disabled:opacity-50"
                                    />
                                    <div className="flex justify-between text-xs text-white/30">
                                        <span>Minimum 10 characters</span>
                                        <span>{formData.message.length}/5000</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting || (formData.email && !isValidEmail(formData.email))}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="w-full bg-spetia-orange-600 text-white py-5 font-bold uppercase tracking-widest text-sm relative overflow-hidden group hover:bg-white hover:text-spetia-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-spetia-orange-600 disabled:hover:text-white"
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>Processing Request...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Submit Inquiry</span>
                                                <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>→</span>
                                            </>
                                        )}
                                    </div>
                                </button>

                                {/* Security Notice */}
                                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-2 text-xs text-white/30">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Secure & Encrypted</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-white/30">
                                        <span>Protected by reCAPTCHA</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
