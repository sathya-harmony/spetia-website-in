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
    <div className="min-h-[calc(100vh-84px)] bg-[#C7B9A1]">
      <section className="py-24">
        <div className="max-w-[720px] mx-auto px-4 flex flex-col items-center">
          <p className="font-body text-[13px] uppercase tracking-[0.12em] text-ink/60 mb-6 text-center">
            CONTACT
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-ink mb-6 text-center">
            Tell us about your plot.
          </h1>
          <p className="font-body text-[17px] leading-[1.65] text-ink text-center max-w-[480px] mb-16">
            A short message is enough. Sangeetha or Sathya will reply on WhatsApp within two working days, in Bangalore time.
          </p>

          {/* Path 1: WhatsApp (primary) */}
          <div className="w-full flex flex-col items-center mb-24">
            <CtaPrimary page="contact" className="w-full md:max-w-[320px] justify-center" />
            <p className="font-body text-[14px] text-ink/60 mt-4 text-center">
              Opens WhatsApp · pre-filled with a starter message
            </p>
          </div>

          {/* Path 2: Form (fallback) */}
          <div className="w-full max-w-[480px]">
            <h3 className="font-display text-[24px] text-ink mb-8">Or send a form</h3>
            <ContactForm />
          </div>

          {/* Contact Details Footer */}
          <div className="w-full mt-24">
            <div className="w-full h-px bg-ink/40 mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-ink text-[16px] font-body">
               <a href={`https://wa.me/${contact.phoneDigits}`} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors text-[18px]">
                 {contact.phoneDisplay}
               </a>
               <a href={`mailto:${contact.email}`} className="hover:text-terracotta transition-colors">
                 {contact.email}
               </a>
               <div>{contact.city}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
