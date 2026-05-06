import WorkFilters from '../components/WorkFilters';
import HeroHeadline from '../components/HeroHeadline';
import { projects } from '../lib/content';

export const metadata = {
  title: 'Selected Work — Studio Spetia, Bangalore Architects',
  description:
    'Recently completed homes across Sarjapura, Whitefield, Indiranagar, Koramangala, Yelahanka. Architecture and construction by Studio Spetia.',
};

export default function WorkPage() {
  return (
    <>
      {/* Editorial hero */}
      <section
        data-header-theme="dark"
        className="relative w-full h-[80svh] min-h-[520px] overflow-hidden bg-ink"
      >
        {/* Hero photograph slot — replace with <Image src="/photos/work-page-hero.jpg" />.
            §10.4 (Tier 2 #7 alt): A signature Atelier exterior at golden hour, no people. */}
        <div
          className="absolute inset-0 hero-scrim"
          aria-hidden="true"
          style={{
            backgroundColor: '#1A1A1A',
            backgroundImage:
              'radial-gradient(ellipse at 80% 30%, rgba(199, 185, 161, 0.10) 0%, transparent 60%)',
          }}
        />
        <div className="absolute top-[120px] md:top-[140px] right-5 md:right-10 z-20 text-right pointer-events-none">
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-ivory/55 mb-1">Photograph · §10.4 #7</p>
          <p className="font-display text-[14px] md:text-[15px] text-ivory/80">work-page-hero.jpg</p>
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-ivory/45">16:10 · 2880×1800</p>
        </div>
        <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-24 md:pb-32">
          <p
            className="eyebrow eyebrow--light mb-8"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}
          >
            Selected work
          </p>
          <HeroHeadline
            text="Recently completed Bangalore homes."
            className="type-hero text-ivory mb-8 max-w-[18ch]"
          />
          <p
            className="type-lede text-ivory/85 max-w-[44ch]"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 1100ms both' }}
          >
            Each home is design, structure, interiors, and construction under one Studio Spetia contract.
          </p>
        </div>
      </section>

      {/* Filters and project list */}
      <section data-header-theme="light" className="bg-ivory pt-20 md:pt-28 pb-32 md:pb-40">
        <WorkFilters projects={projects} />
      </section>
      {/* No per-page bottom CTA — the global Footer kicker carries the conversion. */}
    </>
  );
}
