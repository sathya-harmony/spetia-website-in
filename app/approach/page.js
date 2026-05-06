import Placeholder from '../components/Placeholder';
import HeroHeadline from '../components/HeroHeadline';

export const metadata = {
  title: 'How We Work — Studio Spetia Approach',
  description:
    'Five stages from your plot to your keys. Site visit, drawings, BBMP/BDA approval, construction, handover. Eleven to eighteen months.',
};

export default function ApproachPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to build a home with Studio Spetia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eleven to eighteen months from agreement to keys, depending on the size of the home. Atelier projects (2,400 to 4,000 sqft) take eleven to fourteen months. Bespoke projects (4,000 to 6,500 sqft) take fourteen to sixteen months. Estate projects (6,500 sqft and above) take sixteen to eighteen months.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who designs the home at Studio Spetia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sangeetha, the principal architect, designs every Studio Spetia home. She has twenty years of practice in Bangalore and has designed eighty homes across the city. She does not delegate the design.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Studio Spetia handle BBMP and BDA approvals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Studio Spetia files BBMP, BDA, and panchayat approvals depending on the plot\'s classification. The studio handles the entire approval process so the homeowner does not need to chase a separate consultant.'
        }
      },
      {
        '@type': 'Question',
        name: 'How many homes does Studio Spetia build a year?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Studio Spetia accepts six commissions a year. This is the number that allows Sangeetha and Sathya to give each home full attention from first sketch to handover.'
        }
      },
      {
        '@type': 'Question',
        name: 'What does Studio Spetia cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing is shared in conversation on WhatsApp after a brief qualifying discussion. Studio Spetia offers three tiers — Atelier, Bespoke, and Estate — covering homes from 2,400 sqft to 6,500 sqft and above.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Editorial hero */}
      <section
        data-header-theme="dark"
        className="relative w-full h-[80svh] min-h-[520px] overflow-hidden bg-ink"
      >
        <div
          className="absolute inset-0 hero-scrim"
          aria-hidden="true"
          style={{
            backgroundColor: '#1A1A1A',
            backgroundImage:
              'radial-gradient(ellipse at 25% 70%, rgba(154, 74, 46, 0.12) 0%, transparent 60%)',
          }}
        />
        <div className="absolute top-[120px] md:top-[140px] right-5 md:right-10 z-20 text-right pointer-events-none">
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-ivory/55 mb-1">Photograph · §10.4 #2</p>
          <p className="font-display text-[14px] md:text-[15px] text-ivory/80">approach-hero.jpg</p>
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-ivory/45">16:9 · 2880×1620</p>
        </div>
        <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-24 md:pb-32">
          <p
            className="eyebrow eyebrow--light mb-8"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}
          >
            How we work
          </p>
          <HeroHeadline
            text="Five stages. Eleven to eighteen months."
            className="type-hero text-ivory mb-8 max-w-[20ch]"
          />
          <p
            className="type-lede text-ivory/85 max-w-[44ch]"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 1100ms both' }}
          >
            The architect walks every site at every stage. The build is run by the studio's engineer.
          </p>
        </div>
      </section>

      {/* The 5 Stages */}
      <section data-header-theme="light" className="section-padded bg-ivory">
        <div className="container-narrow flex flex-col gap-32">
          
          {/* Stage 1 */}
          <div>
             <div className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-terracotta mb-3">01</div>
             <h2 className="type-h1 text-ink mb-8">Site.</h2>
             <div className="flex flex-col gap-6 type-body mb-12" style={{ fontSize: '17px' }}>
               <p>
                 It starts on WhatsApp. You send your plot details — location, dimensions, an approximate budget, when you're hoping to start. Sangeetha or Sathya replies within twenty-four hours. There is no sales team. The first conversation is with the architect or the engineer who will work on your home.
               </p>
               <p>
                 Before we quote anything, Sangeetha visits your plot. She walks the boundaries. She looks at how the sun moves across the site at the time of day you're most likely to be home. She notices the trees. She talks to the neighbors. She does not quote a number until she has seen the site, because the number depends on the site. The visit takes ninety minutes. There is no charge.
               </p>
             </div>
             <div className="aspect-[4/5] w-full relative bg-stone/20">
               <Placeholder
                 filename="approach-stage-01-site.jpg"
                 aspect="4:5 · 1440×1800"
                 description="§10.4 #10 — Sangeetha on a Bangalore plot with measuring tape or notebook. Trees visible. Late afternoon."
                 className="h-full"
               />
             </div>
          </div>

          {/* Stage 2 */}
          <div>
             <div className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-terracotta mb-3">02</div>
             <h2 className="type-h1 text-ink mb-8">Drawing.</h2>
             <div className="flex flex-col gap-6 type-body mb-12" style={{ fontSize: '17px' }}>
               <p>
                 If we agree to work together, we sign a small concept-design contract — typically three to six weeks of design exploration. During this phase, Sangeetha sketches by hand. We meet two or three times.
               </p>
               <p>
                 By the end, you have a concept design, a structural skeleton, a material palette, and a fixed-price construction contract. The concept-design phase is paid; if you don't want to proceed, we part ways with the concept design as yours to take to another studio.
               </p>
             </div>
             <div className="aspect-[4/5] w-full relative bg-stone/20">
               <Placeholder
                 filename="approach-stage-02-drawing.jpg"
                 aspect="4:5 · 1440×1800"
                 description="§10.4 #11 — Sangeetha's hand on tracing paper, mid-stroke. Architectural elevation visible. Tight crop."
                 className="h-full"
               />
             </div>
          </div>

          {/* Stage 3 */}
          <div>
             <div className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-terracotta mb-3">03</div>
             <h2 className="type-h1 text-ink mb-8">Approval.</h2>
             <div className="flex flex-col gap-6 type-body mb-12" style={{ fontSize: '17px' }}>
               <p>
                 Bangalore plot approvals depend on your Khata. A-Khata under BBMP. Panchayat plots under the local authority. BDA layouts under BDA. We tell you which one applies on day one, and we file the drawings with the right office. You do not chase the approval consultant — we do.
               </p>
               <p>
                 Approvals usually take six to twelve weeks depending on the office and the season. We update you weekly on progress.
               </p>
             </div>
             
             {/* Video Placeholder */}
             <div className="aspect-video w-full relative bg-ink/10 flex items-center justify-center">
                <p className="font-body text-sm text-ink/60">[ 80-second video: How Bangalore approvals work ]</p>
             </div>
          </div>

          {/* Stage 4 */}
          <div>
             <div className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-terracotta mb-3">04</div>
             <h2 className="type-h1 text-ink mb-8">Build.</h2>
             <div className="flex flex-col gap-6 type-body mb-12" style={{ fontSize: '17px' }}>
               <p>
                 Construction takes nine to fifteen months depending on the size of the home. Sangeetha walks the site every two weeks. Sathya is on site every working day, supervising the build. The site engineer reports to him.
               </p>
               <p>
                 You get weekly photo updates on WhatsApp. We invoice on milestones, not on calendar dates — payment is tied to specific stages of completion (foundation poured, structure topped out, services rough-in done, finishes complete).
               </p>
             </div>
             <div className="aspect-[16/9] w-full relative bg-stone/20">
               <Placeholder
                 filename="approach-stage-04-build.jpg"
                 aspect="16:9 · 2880×1620"
                 description="§10.4 #12 — Mid-construction Bangalore site. Slab pour or column-marking. Documentary, not heroic."
                 className="h-full"
               />
             </div>
          </div>

          {/* Stage 5 */}
          <div>
             <div className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] text-terracotta mb-3">05</div>
             <h2 className="type-h1 text-ink mb-8">Handover and after.</h2>
             <div className="flex flex-col gap-6 type-body mb-12" style={{ fontSize: '17px' }}>
               <p>
                 When the home is ready, we walk through it together. We hand over keys and a folder containing every drawing, every approval, every warranty card, every vendor contact.
               </p>
               <p>
                 We come back at three months and at six months to fix anything that has settled, cracked, or revealed a problem. At Estate tier, we come back at twelve months as well, and the first year of post-occupancy snagging is part of the work. After that, you have our number. The relationship doesn't end at the handover.
               </p>
             </div>
             <div className="aspect-[4/5] w-full relative bg-stone/20">
               <Placeholder
                 filename="approach-stage-05-handover.jpg"
                 aspect="4:5 · 1440×1800"
                 description="§10.4 #13 — Detail shot, teak door, brass key in hand. Intimate."
                 className="h-full"
               />
             </div>
          </div>
        </div>
      </section>

      {/* The three tiers full scope */}
      <section id="tiers" data-header-theme="light" className="section-padded bg-stone">
        <div className="container-narrow mb-24">
          <h2 data-reveal className="type-h1 text-ink mb-5">
            The three tiers.
          </h2>
          <p data-reveal data-reveal-delay="1" className="type-lede">
            Studio Spetia takes commissions at three scopes. Each tier is a different kind of project, not a different quality of attention.
          </p>
        </div>

        <div className="container-default flex flex-col gap-32">
          {/* Atelier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <div>
                <p className="eyebrow mb-6">Tier one</p>
                <h3 className="type-h1 text-ink">Atelier</h3>
                <div className="hairline-terracotta" />
                <p className="font-display text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.4] text-ink mb-6">
                  Single-family Bangalore homes, 2,400 to 4,000 sqft, eleven to fourteen months.
                </p>
                <div className="flex flex-col gap-6 type-body" style={{ fontSize: '16px' }}>
                  <p>
                    The Atelier tier is the studio's foundational scope. Architecture, structure, interiors, and construction under one Studio Spetia contract. Designed by Sangeetha. Built under her direct site supervision and Sathya's daily oversight.
                  </p>
                  <p>
                    Atelier projects are typically first homes for a family — designed for the specific plot, the specific family, the specific way the family lives. The construction follows Studio Spetia's standard material specifications, refined over twenty years of Bangalore building practice.
                  </p>
                  <p>
                    Joinery is in seasoned teak or rosewood. Flooring is vitrified tile, kota stone, or polished concrete depending on the site. Interior finishes are integrated into the architecture from the first sketch — no separate 'interior design phase' pasted on later.
                  </p>
                  <p>
                    Atelier is the right tier for the family that wants a home designed and built by an architect, on a single contract, without managing a contractor separately. Pricing is shared in WhatsApp after a brief qualifying conversation.
                  </p>
                </div>
             </div>
             <div className="aspect-[16/9] md:aspect-[4/5] w-full relative bg-ivory">
               <Placeholder
                 filename="tier-atelier-hero.jpg"
                 aspect="16:9 · 2880×1620"
                 description="§10.4 #18 — Atelier-scale home, single-storey, garden visible."
                 className="h-full"
               />
             </div>
          </div>

          {/* Bespoke */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <div>
                <p className="eyebrow mb-6">Tier two</p>
                <h3 className="type-h1 text-ink">Bespoke</h3>
                <div className="hairline-terracotta" />
                <p className="font-display text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.4] text-ink mb-6">
                  Larger homes, 4,000 to 6,500 sqft, custom millwork, full landscape, named-architect involvement on every detail.
                </p>
                <div className="flex flex-col gap-6 type-body" style={{ fontSize: '16px' }}>
                  <p>
                    The Bespoke tier is for projects that need more from the studio. 4,000 to 6,500 sqft homes, typically on larger plots in Whitefield, Sarjapur, Yelahanka, or the city's outer fringes. Sangeetha is named on the contract as the design lead — every detail comes through her.
                  </p>
                  <p>
                    Bespoke includes custom millwork (designed and fabricated specifically for the home), full landscape design (planting, grading, hardscape, water features where the site allows), and lighting design (every fixture chosen, every circuit drawn). The interior is bespoke to the home — built-in furniture, custom kitchens, fitted wardrobes designed as part of the architecture rather than as a follow-up exercise.
                  </p>
                  <p>
                    Bespoke projects take fourteen to sixteen months. The fee structure includes a higher design intensity per square foot and a wider material palette. Bespoke is the right tier for the family that wants a home not just designed but designed deeply — where every detail bears the studio's hand. Pricing arrives in WhatsApp.
                  </p>
                </div>
             </div>
             <div className="aspect-[16/9] md:aspect-[4/5] w-full relative bg-ivory">
               <Placeholder
                 filename="tier-bespoke-hero.jpg"
                 aspect="16:9 · 2880×1620"
                 description="§10.4 #19 — Bespoke-scale home, double-height living, custom joinery."
                 className="h-full"
               />
             </div>
          </div>

          {/* Estate — landscape-tagged tier per §8.1: kaveri hairline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="eyebrow">Tier three</p>
                  <span className="tag-landscape">Landscape</span>
                </div>
                <h3 className="type-h1 text-ink">Estate</h3>
                <div className="hairline-kaveri" />
                <p className="font-display text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.4] text-ink mb-6">
                  Full custom villa, 6,500+ sqft, photography rights, post-occupancy snagging through Year One.
                </p>
                <div className="flex flex-col gap-6 type-body" style={{ fontSize: '16px' }}>
                  <p>
                    The Estate tier is the studio's full-scope offering. 6,500 sqft and above, on plots that allow architectural ambition — half-acre Yelahanka sites, two-acre weekend homes outside the city, the rare Indiranagar bungalow plot. Sangeetha leads from concept through handover; the project becomes the studio's primary commitment for its duration.
                  </p>
                  <p>
                    Estate includes full architectural design (every room, every transition, every threshold considered as a separate design problem), structural engineering, custom millwork, landscape, lighting, art and furniture procurement (we curate the home's first collection if you want us to), and post-occupancy snagging through the first full year of habitation. Photography rights are included — we photograph the home professionally for the studio's portfolio, with the homeowner's permission, and a copy of the photographs is yours.
                  </p>
                  <p>
                    Estate projects take sixteen to eighteen months. The studio takes one or two Estate commissions per year. The fee reflects the depth and the duration. Pricing arrives in WhatsApp.
                  </p>
                </div>
             </div>
             <div className="aspect-[16/9] md:aspect-[4/5] w-full relative bg-ivory">
               <Placeholder
                 filename="tier-estate-hero.jpg"
                 aspect="16:9 · 2880×1620"
                 description="§10.4 #20 — Estate-scale villa exterior at dusk with landscape."
                 className="h-full"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Material palette */}
      <section data-header-theme="light" className="section-padded bg-ivory">
        <div className="container-narrow mb-16">
          <p data-reveal className="eyebrow mb-8">Materials</p>
          <h2 data-reveal data-reveal-delay="1" className="type-h1 text-ink mb-12">
            What we build with.
          </h2>
          <div className="flex flex-col gap-6 type-body" style={{ fontSize: '17px' }}>
             <p>
               Studio Spetia's standard material palette is built on twenty years of Bangalore practice. We work with materials that age well in Bangalore's climate — kota stone for floors that handle the monsoon, seasoned teak for doors and frames that don't warp in humidity, polished cement for surfaces that grow more beautiful with use. We avoid materials that look impressive at handover and look tired in three years.
             </p>
             <p>
               Joinery is local. We work with carpenters in Yeshwanthpur, Hosur Road, and the old furniture quarters in Cox Town who have been making doors and windows for fifty years. We do not import joinery. We do not use particle board where we can use wood. The teak in our doors is reclaimed where possible — old houses being demolished in Malleshwaram, Basavanagudi, and Cooke Town are a regular source.
             </p>
             <p>
               Stone is from Karnataka and Andhra Pradesh — kota from Rajasthan when the site asks for it, but mostly local granite, sandstone, and the slate-blue floor stone that comes from Sira. Tiles are vitrified — we specify the brand and the dimension on the contract, no surprises at handover.
             </p>
             <p>
               For the Bespoke and Estate tiers, the palette opens up. Marble where it earns its place. Imported wood where the project asks for something the local market cannot supply. Custom-fabricated metalwork for stair railings, gates, light fixtures. The palette is always specific to the home — not a fixed list.
             </p>
          </div>
        </div>

        {/* 4-up grid for materials */}
        <div className="container-default grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           <div className="aspect-square relative bg-stone/20">
              <Placeholder
                filename="material-kota-stone.jpg"
                aspect="1:1 · 1200×1200"
                description="§10.4 #14 — Close-up polished kota stone floor."
                className="h-full"
              />
           </div>
           <div className="aspect-square relative bg-stone/20">
              <Placeholder
                filename="material-teak-door.jpg"
                aspect="1:1 · 1200×1200"
                description="§10.4 #15 — Teak door with brass pull."
                className="h-full"
              />
           </div>
           <div className="aspect-square relative bg-stone/20">
              <Placeholder
                filename="material-polished-concrete.jpg"
                aspect="1:1 · 1200×1200"
                description="§10.4 #16 — Polished concrete with brass divider strip."
                className="h-full"
              />
           </div>
           <div className="aspect-square relative bg-stone/20">
              <Placeholder
                filename="material-jaali.jpg"
                aspect="1:1 · 1200×1200"
                description="§10.4 #17 — Terracotta jaali with light through."
                className="h-full"
              />
           </div>
        </div>
      </section>

      {/* No per-page bottom CTA — the global Footer kicker carries the conversion. */}
    </>
  );
}
