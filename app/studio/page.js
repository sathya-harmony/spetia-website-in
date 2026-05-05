import Image from 'next/image';
import CtaPrimary from '../components/CtaPrimary';
import Placeholder from '../components/Placeholder';

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
    knowsAbout: ['Residential architecture', 'Bangalore architecture', 'Master builder tradition']
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
      alternateName: 'NIT Karnataka'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaSangeetha) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaSathya) }} />
      <section className="py-24 bg-ivory">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <p className="font-body text-[13px] uppercase tracking-[0.12em] text-ink-quiet mb-6">
            THE STUDIO
          </p>
          <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05] text-ink mb-6">
            Sangeetha and Sathya.
          </h1>
          <p className="font-body text-[clamp(1rem,2vw,1.125rem)] text-ink-soft max-w-[480px] mx-auto">
            A mother-and-son architect-engineer practice in Bangalore. Twenty years of work. Eighty homes.
          </p>
        </div>
      </section>

      {/* Hero photograph */}
      <section className="w-full">
        <div className="w-full h-[60vh] md:h-[80vh] relative bg-stone/20">
          <Placeholder text="Sangeetha and Sathya at a Bangalore site mid-construction. Visible scaffolding, slab, masons in background. Sangeetha pointing at structural detail, Sathya beside her with clipboard. 16:9 full-bleed." className="h-full" />
        </div>
      </section>

      {/* The studio's work model */}
      <section className="py-32 bg-ivory">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-12">
            We are not an architecture firm. We are not a construction company.
          </h2>
          
          <div className="flex flex-col gap-6 font-body text-[16px] leading-[1.65] text-ink-soft">
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

      {/* Sangeetha's biography */}
      <section className="py-32 bg-stone">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="aspect-[4/5] w-full max-w-[480px] mx-auto relative bg-ivory/20 mb-16">
             <Placeholder text="B&W portrait of Sangeetha alone. In studio, drawings or models in soft focus behind. Looking off-frame. 4:5." className="h-full" />
          </div>
          
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-12">
            Sangeetha — Principal Architect
          </h2>
          
          <div className="flex flex-col gap-6 font-body text-[16px] leading-[1.65] text-ink-soft/90">
            <p>
              Sangeetha is the principal architect of Studio Spetia. She has been designing houses in Bangalore for twenty years. Eighty of them are built and lived in — across Indiranagar, Jayanagar, HSR, Whitefield, and the older lanes of Basavanagudi where she grew up.
            </p>
            <p>
              In the last two years, twenty of those houses were also built under her direct site supervision, without a separate contractor. That is the practice that became Studio Spetia.
            </p>
            <p>
              She walks every site. She still draws by hand for the first iteration of every house, and only moves to CAD when the proportions are settled. She lives in Bangalore with her family. She does not believe the architect should ever leave the site.
            </p>
          </div>
        </div>
      </section>

      {/* Sathya's biography */}
      <section className="py-32 bg-ivory">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="aspect-[4/5] w-full max-w-[480px] mx-auto relative bg-stone/20 mb-16">
             <Placeholder text="B&W portrait of Sathya alone. On-site or in studio. Looking off-frame. 4:5." className="h-full" />
          </div>
          
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-12">
            Sathya — Engineer
          </h2>
          
          <div className="flex flex-col gap-6 font-body text-[16px] leading-[1.65] text-ink-soft">
            <p>
              Sathya is the engineer of Studio Spetia. NIT Karnataka, mechanical engineering. He grew up in Bangalore with an architect for a mother and an early eye for how buildings come together.
            </p>
            <p>
              He runs the studio's operations and the build. The site engineer reports to him. He is on site every working day. The structural calculations, the material flow, the BIM workflow, the procurement — all of it runs through him.
            </p>
            <p>
              Sangeetha designs. Sathya builds. Together they hold the studio.
            </p>
          </div>
        </div>
      </section>

      {/* Mother-son photograph */}
      <section className="w-full">
        <div className="w-full h-[60vh] md:h-[80vh] relative bg-stone/20">
          <Placeholder text="Full-bleed B&W portrait of mother and son together. Studio setting. Not posed. Single image. No caption. 16:9 full-bleed." className="h-full" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-ivory">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <CtaPrimary page="studio" />
        </div>
      </section>
    </>
  );
}
