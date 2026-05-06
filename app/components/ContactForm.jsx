"use client";
import { useState } from 'react';
import CtaPrimary from '../components/CtaPrimary';
import { contact } from '../lib/content';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [errorField, setErrorField] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plot: '',
    message: '',
    website: '' // honeypot
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types in the error field
    if (errorField === name) {
      setErrorField('');
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    setErrorField('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: window.location.pathname
        })
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        setErrorField(data.field || '');
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again or use WhatsApp.');
    }
  };

  if (status === 'success') {
    const prefilledMessage = [
      `Hello Studio Spetia. I just submitted the contact form on your website.`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Plot: ${formData.plot}`,
      formData.message ? `Message: ${formData.message}` : null,
    ].filter(Boolean).join('\n');
    const waHref = `https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(prefilledMessage)}`;
    return (
      <div className="flex flex-col gap-8 animate-[fade-up_200ms_ease-out]">
        <p className="font-body text-[16px] leading-[1.65] text-ink">
          We have your message. Sangeetha or Sathya will reply on WhatsApp within two working days. — Studio Spetia <span className="end-mark"></span>
        </p>
        <p className="font-body text-[14px] leading-[1.65] text-ink-soft">
          To make sure your details reach us, tap below to open WhatsApp with your message pre-filled. Just hit send.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-ivory font-body font-medium text-[15px] uppercase tracking-[0.12em] w-full transition-colors hover:bg-terracotta"
        >
          OPEN WHATSAPP WITH YOUR DETAILS →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Honeypot field - hidden from real users */}
      <div className="absolute left-[-10000px] w-[1px] h-[1px] overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input 
          type="text" 
          id="website" 
          name="website" 
          tabIndex={-1} 
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="sr-only">Name</label>
        {errorField === 'name' && <span className="text-terracotta text-[14px]">{errorMsg}</span>}
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={80}
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-transparent border-b ${errorField === 'name' ? 'border-terracotta text-terracotta' : 'border-ink/30 text-ink'} py-3 px-0 font-body text-[16px] placeholder:text-ink-quiet focus:outline-none focus:border-ink transition-colors rounded-none`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="sr-only">Phone (with WhatsApp)</label>
        {errorField === 'phone' && <span className="text-terracotta text-[14px]">{errorMsg}</span>}
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Phone (with WhatsApp) *"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full bg-transparent border-b ${errorField === 'phone' ? 'border-terracotta text-terracotta' : 'border-ink/30 text-ink'} py-3 px-0 font-body text-[16px] placeholder:text-ink-quiet focus:outline-none focus:border-ink transition-colors rounded-none`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="plot" className="sr-only">Plot location and approximate size</label>
        {errorField === 'plot' && <span className="text-terracotta text-[14px]">{errorMsg}</span>}
        <input
          type="text"
          id="plot"
          name="plot"
          required
          maxLength={200}
          placeholder="Plot location and approximate size *"
          value={formData.plot}
          onChange={handleChange}
          className={`w-full bg-transparent border-b ${errorField === 'plot' ? 'border-terracotta text-terracotta' : 'border-ink/30 text-ink'} py-3 px-0 font-body text-[16px] placeholder:text-ink-quiet focus:outline-none focus:border-ink transition-colors rounded-none`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="sr-only">Message (optional)</label>
        {errorField === 'message' && <span className="text-terracotta text-[14px]">{errorMsg}</span>}
        <textarea
          id="message"
          name="message"
          maxLength={1000}
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-transparent border-b ${errorField === 'message' ? 'border-terracotta text-terracotta' : 'border-ink/30 text-ink'} py-3 px-0 font-body text-[16px] placeholder:text-ink-quiet focus:outline-none focus:border-ink transition-colors resize-none min-h-[80px] rounded-none`}
        />
      </div>

      {status === 'error' && !errorField && (
        <div className="text-terracotta text-[14px]">{errorMsg}</div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-ivory font-body font-medium text-[15px] uppercase tracking-[0.12em] transition-colors hover:bg-terracotta disabled:opacity-60 disabled:cursor-wait mt-4"
      >
        {status === 'submitting' ? 'SENDING...' : 'MESSAGE STUDIO SPETIA'}
      </button>

      <p className="font-body text-[12px] text-ink-quiet text-center mt-2">
        By messaging us, you agree to a short WhatsApp reply. We do not add you to mailing lists.
      </p>
    </form>
  );
}
