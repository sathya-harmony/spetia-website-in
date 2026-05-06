import Link from 'next/link';
import Logo from './Logo';
import { contact, getWhatsappHref } from '../lib/content';
import NewsletterForm from './NewsletterForm';

/**
 * Footer — Omai pattern.
 *
 * One continuous section, sitting on a single full-bleed photograph
 * (slot — see §10.4 #20). The section contains, top to bottom:
 *   1. KICKER — two columns separated by a vertical hairline:
 *        a) "Begin a Studio Spetia commission." + MESSAGE STUDIO SPETIA CTA
 *        b) "Stay close to the studio."        + email signup
 *   2. INFO — three columns: Studio · Reach us · Read (per design_v2.md §9.1)
 *   3. BOTTOM STRIP — © + trademark notice (per design_v2.md §9.1)
 *
 * The same Footer is rendered on every page via the root layout, so the
 * close of every funnel is identical — Omai's defining trick.
 */
export default function Footer() {
  return (
    <footer
      data-header-theme="dark"
      className="relative bg-ink text-ivory overflow-hidden"
      aria-label="Studio Spetia — close of page"
    >
      {/* Full-bleed footer background — custom texture (palette-adjacent deep green).
          Asset: /public/images/footer-texture.png */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footer-texture.png')" }}
      />
      {/* Hairline veil: keeps ivory type readable if the PNG has lighter patches */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/25 pointer-events-none"
      />

      {/* ============================== */}
      {/* KICKER — dual CTAs (Omai pattern) */}
      {/* ============================== */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-16 md:divide-x md:divide-ivory/15 items-center text-center">
          {/* Left half — Begin a commission */}
          <div className="flex flex-col items-center md:px-12">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.012em] text-ivory mb-10 max-w-[18ch]">
              Begin a Studio Spetia commission.
            </h2>
            <a
              href={getWhatsappHref('home')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-ivory text-ink hover:bg-terracotta hover:text-ivory transition-colors duration-300 px-10 py-4 font-body text-[12px] md:text-[13px] uppercase tracking-[0.16em]"
            >
              <span>Message Studio Spetia</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right half — Stay close (newsletter) */}
          <div className="flex flex-col items-center md:px-12">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.012em] text-ivory mb-10 max-w-[18ch]">
              Stay close to the studio.
            </h2>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ============================== */}
      {/* INFO — design_v2.md §9.1 Section 9 */}
      {/* ============================== */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-12 md:pb-16 border-t border-ivory/12">
        {/* Centered to match the fixed header wordmark — one narrow band, not edge-to-edge. */}
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 lg:gap-16 text-center">
            {/* Column 1 — Studio */}
            <div className="flex flex-col gap-6 items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity inline-flex" aria-label="Studio Spetia — home">
                <Logo color="ivory" size={120} />
              </Link>
              <p className="font-body text-[14px] md:text-[15px] leading-[1.65] text-ivory/70 max-w-[280px] mx-auto">
                Bangalore. An architect-engineer led design and build studio.
              </p>
            </div>

            {/* Column 2 — Reach us */}
            <div className="flex flex-col gap-3 items-center">
              <p className="font-body text-[10px] uppercase tracking-[0.18em] text-ivory/50 mb-2">
                Reach us
              </p>
              <a
                href={`https://wa.me/${contact.phoneDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[14px] md:text-[15px] text-ivory/85 hover:text-terracotta transition-colors"
              >
                WhatsApp {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="font-body text-[14px] md:text-[15px] text-ivory/85 hover:text-terracotta transition-colors"
              >
                {contact.email}
              </a>
              <span className="font-body text-[14px] md:text-[15px] text-ivory/85">
                Bangalore, India.
              </span>
            </div>

            {/* Column 3 — Read */}
            <div className="flex flex-col gap-3 items-center">
              <p className="font-body text-[10px] uppercase tracking-[0.18em] text-ivory/50 mb-2">
                Read
              </p>
              <Link href="/work" className="font-body text-[14px] md:text-[15px] text-ivory/85 hover:text-terracotta transition-colors">Work</Link>
              <Link href="/studio" className="font-body text-[14px] md:text-[15px] text-ivory/85 hover:text-terracotta transition-colors">Studio</Link>
              <Link href="/approach" className="font-body text-[14px] md:text-[15px] text-ivory/85 hover:text-terracotta transition-colors">Approach</Link>
              <Link href="/contact" className="font-body text-[14px] md:text-[15px] text-ivory/85 hover:text-terracotta transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============================== */}
      {/* BOTTOM STRIP */}
      {/* ============================== */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pb-8">
        <div className="pt-6 border-t border-ivory/12 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 text-center font-body text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-ivory/45">
          <div>© 2026 Studio Spetia. A studio of the Spetia parent practice.</div>
          <div>Trademark filing pending.</div>
        </div>
      </div>
    </footer>
  );
}
