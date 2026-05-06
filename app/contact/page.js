import CtaPrimary from '../components/CtaPrimary';
import ContactForm from '../components/ContactForm';
import { contact } from '../lib/content';

export const metadata = {
  title: 'Contact',
  description:
    'Tell us about your plot. Sangeetha or Sathya replies on WhatsApp within two working days.',
};

export default function ContactPage() {
  return (
    <section data-header-theme="light" className="bg-stone section-padded pt-40 md:pt-48">
      <div className="container-narrow flex flex-col items-center">
        <p className="eyebrow mb-8 text-center">Contact</p>
        <h1 className="type-hero text-ink mb-8 text-center max-w-[18ch]">
          Tell us about your plot.
        </h1>
        <p className="type-lede text-ink/85 text-center max-w-[480px] mb-4">
          A short message is enough. Sangeetha or Sathya will reply on WhatsApp within two working days, in Bangalore time.
        </p>
        <p className="font-body text-[13px] leading-[1.6] text-ink/70 text-center max-w-[480px] mb-16">
          Sangeetha and Sathya reply in English, Kannada, or Hindi.
        </p>

        {/* Path 1: WhatsApp (primary) */}
        <div className="w-full flex flex-col items-center mb-24">
          <CtaPrimary page="contact" className="w-full md:max-w-[320px] justify-center" />
          <p className="font-body text-[13px] text-ink/80 mt-4 text-center">
            Opens WhatsApp · pre-filled with a starter message
          </p>
        </div>

        {/* Path 2: Form (fallback) */}
        <div className="w-full max-w-[480px]">
          <h3 className="type-h2 text-ink mb-8">Or send a form.</h3>
          <ContactForm />
        </div>

        {/* Contact details */}
        <div className="w-full mt-24">
          <div className="w-full h-px bg-ink/30 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <a
              href={`https://wa.me/${contact.phoneDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[16px] text-ink hover:text-terracotta transition-colors"
            >
              {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="font-body text-[16px] text-ink hover:text-terracotta transition-colors"
            >
              {contact.email}
            </a>
            <div className="font-body text-[16px] text-ink">{contact.city}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
