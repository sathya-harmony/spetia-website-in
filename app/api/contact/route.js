import { NextResponse } from 'next/server';

function clean(value) {
  return String(value || '').trim().slice(0, 2000);
}

function isIndianMobile(value) {
  // Rough validation for 10 digits starting with 6-9
  return /^[6-9]\d{9}$/.test(value.replace(/\D/g, ''));
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot check: If the hidden 'website' field is filled, drop silently
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name);
    const phone = clean(body.phone);
    const plot = clean(body.plot).slice(0, 200);
    const message = clean(body.message).slice(0, 1000);

    if (!name) {
      return NextResponse.json({ error: 'Please enter your name.', field: 'name' }, { status: 400 });
    }

    if (!phone || !isIndianMobile(phone)) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit Indian mobile number.', field: 'phone' }, { status: 400 });
    }

    if (!plot) {
      return NextResponse.json({ error: 'Please enter your plot location and approximate size.', field: 'plot' }, { status: 400 });
    }

    // In a real implementation, you would append to a Google Sheet
    // and fire the AiSensy webhook here.
    // For this boilerplate, we'll just log and return ok: true.

    console.info('Studio Spetia contact form submission:', {
      name, phone, plot, message,
      source: body.source || '/contact',
      ts: new Date().toISOString()
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'The form could not be sent. Please message us on WhatsApp instead.' }, { status: 500 });
  }
}
