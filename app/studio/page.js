import Placeholder from '../components/Placeholder';
import HeroHeadline from '../components/HeroHeadline';

export const metadata = {
  title: 'The Studio — Studio Spetia, Bangalore',
  description:
    'A mother-and-son architect-engineer practice in Bangalore. Twenty years of work. Eighty homes designed. Master builder tradition.',
};

export default function StudioPage() {
  const personSchemaSangeetha = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://studiospetia.in/#sangeetha',
    name: 'Sangeetha',
    jobTitle: 'Principal Architect',
    knowsAbout: ['Residential architecture', 'Bangalore architecture', 'Master builder tradition'],
  };

  const personSchemaSathya = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://studiospetia.in/#sathya',
    name: 'Sathya',
    jobTitle: 'Engineer and Co-founder',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'National Institute of Technology Karnataka',
      alternateName: 'NIT Karnataka',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaSangeetha) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaSathya) }} />

      {/* HERO — Sangeetha + Sathya on-site, full-bleed.
          Inner wrapper carries `min-h-[100svh]` so the hero is at least
          viewport-tall on normal screens but grows on short viewports;
          `pt-[120px] md:pt-[160px]` keeps the eyebrow below the fixed header. */}
      <section
        data-header-theme="dark"
        className="relative w-full overflow-hidden bg-ink"
      >
        {/* Photograph slot — replace with <Image src="/photos/studio-hero-onsite.jpg" />.
            §10.4 #2 — Sangeetha and Sathya at a Bangalore site mid-construction.
            Visible scaffolding, slab, masons in background. 16:9 full-bleed. */}
        <div
          className="absolute inset-0 hero-scrim"
          aria-hidden="true"
          style={{
            backgroundColor: '#1A1A1A',
            backgroundImage:
              'radial-gradient(ellipse at 30% 20%, rgba(63, 74, 58, 0.25) 0%, transparent 65%)',
          }}
        />
        <div className="absolute top-[120px] md:top-[140px] right-5 md:right-10 z-20 text-right pointer-events-none">
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-ivory/55 mb-1">Photograph · §10.4 #2</p>
          <p className="font-display text-[14px] md:text-[15px] text-ivory/80">studio-hero-onsite.jpg</p>
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-ivory/55">Shot ratio 16:9 full-bleed</p>
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-ivory/45">Export 2880×1620 min source</p>
        </div>
        <div className="relative z-10 min-h-[100svh] container-wide flex flex-col justify-end pt-[120px] md:pt-[160px] pb-24 md:pb-32">
          <p
            className="eyebrow eyebrow--light mb-8"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}
          >
            The studio
          </p>
          <HeroHeadline
            text="Sangeetha and Sathya."
            className="type-hero text-ivory mb-10 max-w-[18ch]"
          />
          <p
            className="type-lede text-ivory/85 max-w-[44ch]"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 1100ms both' }}
          >
            A mother-and-son architect-engineer practice in Bangalore. Twenty years of work. Eighty homes.
          </p>
        </div>
        <div className="scroll-indicator text-ivory">
          <span className="scroll-indicator__label">Scroll for more</span>
          <span className="scroll-indicator__line" aria-hidden="true" />
        </div>
      </section>

      {/* On-site photograph — full-bleed below the hero */}
      <section data-header-theme="light" className="w-full bg-ivory">
        <div className="w-full h-[60vh] md:h-[80vh] relative bg-stone/20">
          <Placeholder
            filename="studio-hero-onsite-detail.jpg"
            aspect="16:9 · 2880×1620"
            description="§10.4 #2 (alt) — Sangeetha pointing at structural detail, Sathya beside her with clipboard. Late afternoon site light."
            className="h-full"
          />
        </div>
      </section>

      {/* The studio's work model */}
      <section data-header-theme="light" className="section-padded bg-ivory">
        <div className="container-narrow">
          <p data-reveal className="eyebrow mb-12">A return to one role</p>
          <h2 data-reveal data-reveal-delay="1" className="type-h1 text-ink mb-12">
            We are not an architecture firm. We are not a construction company.
          </h2>
          <div data-reveal data-reveal-delay="2" className="w-12 h-px bg-ink mb-16" aria-hidden="true" />
          <div className="flex flex-col gap-6 type-body" style={{ fontSize: '17px' }}>
            <p>
              There used to be a single role for the person who designed a building and oversaw it being built. The Florentines called it <em>capomastro</em>. The Vijayanagar masters called it <em>sthapati</em>. Brunelleschi solved the dome of Florence Cathedral by inventing the hoist that lifted the bricks. Christopher Wren walked St Paul's site daily for thirty-five years. The drawing and the wall were made by the same hand.
            </p>
            <p>
              In nineteenth-century Europe, the role split. The architect drew. The contractor built. India inherited the split reluctantly. For most of the twentieth century, the master builder tradition continued informally — the village <em>mestri</em>, the family architect, the single trusted person who took the project from sketch to handover.
            </p>
            <p className="end-mark">
              Studio Spetia is a return to that older arrangement, scaled for a 2026 Bangalore home. Sangeetha designs every project. Sangeetha walks every site. Sathya runs the build. There is no contractor handoff. The drawing and the wall come from the same studio.
            </p>
          </div>
        </div>
      </section>

      {/* Sangeetha's biography — Mysore Stone block */}
      <section data-header-theme="light" className="section-padded bg-stone">
        <div className="container-narrow">
          <div data-reveal className="aspect-[4/5] w-full max-w-[480px] mx-auto relative mb-16">
             <Placeholder
               filename="studio-portrait-sangeetha.jpg"
               aspect="4:5 · 1440×1800"
               description="§10.4 #3 — B&W portrait of Sangeetha alone, in studio with drawings or models in soft focus behind. Looking off-frame."
               className="h-full"
             />
          </div>
          <p data-reveal className="eyebrow mb-8">Principal Architect</p>
          <h2 data-reveal data-reveal-delay="1" className="type-h1 text-ink mb-12">
            Sangeetha.
          </h2>
          <div className="flex flex-col gap-6 type-body" style={{ fontSize: '17px' }}>
            <p data-reveal>
              Sangeetha is the principal architect of Studio Spetia. She has been designing houses in Bangalore for twenty years. Eighty of them are built and lived in — across Indiranagar, Jayanagar, HSR, Whitefield, and the older lanes of Basavanagudi where she grew up.
            </p>
            <p data-reveal>
              In the last two years, twenty of those houses were also built under her direct site supervision, without a separate contractor. That is the practice that became Studio Spetia.
            </p>
            <p data-reveal>
              She walks every site. She still draws by hand for the first iteration of every house, and only moves to CAD when the proportions are settled. She lives in Bangalore with her family. She does not believe the architect should ever leave the site.
            </p>
          </div>
        </div>
      </section>

      {/* Sathya's biography */}
      <section data-header-theme="light" className="section-padded bg-ivory">
        <div className="container-narrow">
          <div data-reveal className="aspect-[4/5] w-full max-w-[480px] mx-auto relative mb-16">
             <Placeholder
               filename="studio-portrait-sathya.jpg"
               aspect="4:5 · 1440×1800"
               description="§10.4 #4 — B&W portrait of Sathya alone, on-site or in studio. Looking off-frame."
               className="h-full"
             />
          </div>
          <p data-reveal className="eyebrow mb-8">Engineer</p>
          <h2 data-reveal data-reveal-delay="1" className="type-h1 text-ink mb-12">
            Sathya.
          </h2>
          <div className="flex flex-col gap-6 type-body" style={{ fontSize: '17px' }}>
            <p data-reveal>
              Sathya is the engineer of Studio Spetia. NIT Karnataka, mechanical engineering. He grew up in Bangalore with an architect for a mother and an early eye for how buildings come together.
            </p>
            <p data-reveal>
              He runs the studio's operations and the build. The site engineer reports to him. He is on site every working day. The structural calculations, the material flow, the BIM workflow, the procurement — all of it runs through him.
            </p>
            <p data-reveal>
              Sangeetha designs. Sathya builds. Together they hold the studio.
            </p>
          </div>
        </div>
      </section>

      {/* Mother-son photograph — full bleed */}
      <section data-header-theme="light" className="w-full bg-ivory">
        <div className="w-full h-[60vh] md:h-[80vh] relative bg-stone/20">
          <Placeholder
            filename="studio-mother-son-portrait.jpg"
            aspect="16:9 · 2880×1620"
            description="§10.4 #5 — Full-bleed B&W portrait of mother and son together. Studio setting. Not posed. Single image. No caption."
            className="h-full"
          />
        </div>
      </section>
    </>
  );
}
