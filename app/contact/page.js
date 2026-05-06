import CtaPrimary from '../components/CtaPrimary';
import ContactForm from '../components/ContactForm';
import { contact, site } from '../lib/content';

export const metadata = {
  title: 'Contact Studio Spetia',
  description:
    'Tell us about your plot. Sangeetha or Sathya replies on WhatsApp within two working days.',
  alternates: {
    canonical: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I contact Studio Spetia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Send a WhatsApp message through the Studio Spetia website. Sangeetha or Sathya replies personally within two working days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Studio Spetia work in Bangalore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Studio Spetia designs and builds homes in Bangalore and nearby plotted neighbourhoods.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who replies to a Studio Spetia enquiry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Studio Spetia enquiry is read by Sangeetha or Sathya. There is no sales team.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

          <div className="w-full mt-24 text-left">
            <p className="eyebrow mb-8 text-center">Before you message</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-t border-ink/25 pt-6">
                <h2 className="font-body font-medium text-[15px] text-ink mb-3">What should I send?</h2>
                <p className="font-body text-[15px] leading-[1.65] text-ink/85">
                  Plot location, approximate size, and when you hope to start. A short note is enough.
                </p>
              </div>
              <div className="border-t border-ink/25 pt-6">
                <h2 className="font-body font-medium text-[15px] text-ink mb-3">Who replies?</h2>
                <p className="font-body text-[15px] leading-[1.65] text-ink/85">
                  Sangeetha or Sathya reads the message. There is no sales team between you and the studio.
                </p>
              </div>
              <div className="border-t border-ink/25 pt-6">
                <h2 className="font-body font-medium text-[15px] text-ink mb-3">Where do you work?</h2>
                <p className="font-body text-[15px] leading-[1.65] text-ink/85">
                  Studio Spetia works on plotted homes in Bangalore and nearby neighbourhoods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
