"use client";
import { useState } from 'react';

/**
 * NewsletterForm — sits in the right half of the footer kicker (Omai pattern).
 *
 * Sangeetha and Sathya can attach this to their email-list provider later
 * (Mailchimp / Buttondown / ConvertKit). For now the submit handler
 * gracefully simulates success on the client so the form is fully
 * interactive in the meantime — no broken POST to nowhere.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | submitting | success | error
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setState('error');
      setMessage('Please enter a valid email.');
      return;
    }
    setState('submitting');
    setMessage('');
    try {
      // Optional: forward to our /api/events endpoint so the address is
      // captured in the studio's event log until a real provider is wired.
      await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter_signup', email }),
      }).catch(() => {});
      setState('success');
      setMessage('Thank you. We will write soon.');
      setEmail('');
    } catch {
      setState('error');
      setMessage('Could not save. Please try again.');
    }
  }

  if (state === 'success') {
    return (
      <p className="font-body text-[14px] md:text-[15px] text-ivory/85 text-center">
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[420px]">
      <div className="flex items-stretch border-b border-ivory/35 focus-within:border-ivory transition-colors">
        <label htmlFor="footer-email" className="sr-only">Email</label>
        <input
          id="footer-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="flex-1 bg-transparent text-ivory placeholder:text-ivory/45 font-body text-[14px] md:text-[15px] py-3 outline-none"
          disabled={state === 'submitting'}
        />
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="px-6 py-3 font-body text-[12px] uppercase tracking-[0.16em] text-ivory hover:text-terracotta transition-colors disabled:opacity-60"
        >
          {state === 'submitting' ? 'Sending' : 'Join'}
        </button>
      </div>
      {state === 'error' && message && (
        <p className="font-body text-[12px] text-terracotta mt-3">{message}</p>
      )}
    </form>
  );
}
