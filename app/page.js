import Link from 'next/link';
import CtaPrimary from './components/CtaPrimary';
import Placeholder from './components/Placeholder';
import HeroHeadline from './components/HeroHeadline';
import { projects, processStages, site, tiers } from './lib/content';

export const metadata = {
  alternates: {
    canonical: site.url,
  },
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* HERO — design_v2.md §9.1 Section 2 — founder-centric editorial.
          Section has no fixed height; the inner wrapper carries `min-h-[100svh]`
          so the hero is at least viewport-tall on normal screens but grows when
          the CTA stack (eyebrow + headline + lede + hairline + CtaPrimary +
          caption) exceeds the viewport. `pt-[120px] md:pt-[160px]` on the inner
          guarantees the eyebrow always sits below the 118px-tall fixed header. */}
      <section
        data-header-theme="dark"
        className="hero-section relative w-full overflow-hidden bg-ink"
      >
        {/* Photograph slot — replace with <Image src="/photos/home-hero-founders.jpg" />.
            §10.4 ITEM 1: Sangeetha and Sathya in studio at drafting table with
            hand-drawn plan, late afternoon light. 4:5 desktop / 16:9 mobile. */}
        <div
          className="hero-media hero-scrim"
          aria-hidden="true"
          style={{
            backgroundColor: '#1A1A1A',
            backgroundImage:
              'radial-gradient(ellipse at 70% 30%, rgba(154, 74, 46, 0.25) 0%, transparent 60%)',
          }}
        />
        <div className="hero-brief absolute top-[120px] md:top-[140px] right-5 md:right-10 z-20 text-right pointer-events-none">
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-ivory/55 mb-1">Photograph · §10.4 #1</p>
          <p className="font-display text-[14px] md:text-[15px] text-ivory/80">home-hero-founders.jpg</p>
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-ivory/55">Shot ratio 4:5 desktop / 16:9 mobile</p>
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-ivory/45">Export 2880×1620 + 1440×1800 crops</p>
        </div>

        <div className="hero-content relative z-10 min-h-[100svh] container-wide flex flex-col justify-end pt-[120px] md:pt-[160px] pb-24 md:pb-32">
          <p
            className="eyebrow eyebrow--light mb-8"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}
          >
            Bangalore · Design and build studio
          </p>
          <HeroHeadline
            text="An architect and an engineer build homes in Bangalore."
            className="type-hero text-ivory max-w-[18ch] mb-10"
          />
          <p
            className="type-lede text-ivory/85 max-w-[44ch]"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 1100ms both' }}
          >
            Studio Spetia is led by Sangeetha, a Bangalore architect of twenty years, and her son Sathya, an engineer trained at NIT Karnataka.
          </p>

          {/* Hero CTA — design_v2.md §9.1 Section 2.
              Sub-headline → 32px gap → 32px terracotta hairline → 24px gap → CTA → caption. */}
          <div
            className="mt-8"
            style={{ animation: 'hero-word-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) 1500ms both' }}
          >
            <div
              className="w-8 h-px mb-6"
              aria-hidden="true"
              style={{ backgroundColor: 'var(--hampi-terracotta)' }}
            />
            <CtaPrimary page="home" variant="dark" />
            <p className="font-body text-[13px] leading-[1.5] text-ivory/75 mt-4">
              Sangeetha and Sathya reply personally. Within twenty-four hours.
            </p>
          </div>
        </div>

        <div className="scroll-indicator text-ivory">
          <span className="scroll-indicator__label">Scroll for more</span>
          <span className="scroll-indicator__line" aria-hidden="true" />
        </div>
      </section>

      {/* SECTION 3 — Proposition (spec §9.1: ivory, --container-narrow, eyebrow
          WHAT WE DO, type-h1 paragraph, 1px ink hairline 48px, three-column
          scope summary). */}
      <section data-header-theme="light" className="section-padded bg-ivory">
        <div className="container-narrow">
          <p data-reveal className="eyebrow mb-12">What we do</p>
          <h2
            data-reveal
            data-reveal-delay="1"
            className="type-h1 text-ink mb-12"
          >
            We design and build homes in Bangalore. Architecture and construction held by one studio. Sangeetha walks every site. Sathya runs the build. Six commissions a year.
          </h2>
          <div data-reveal data-reveal-delay="2" className="w-12 h-px bg-ink mb-20" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div data-reveal className="border-t border-ink/25 pt-6">
              <h3 className="font-body font-medium text-[15px] text-ink mb-3">Architecture-led.</h3>
              <p className="font-body text-[15px] leading-[1.65] text-ink/90">
                Every home is designed by Sangeetha. No templates. No shared elevations.
              </p>
            </div>
            <div data-reveal data-reveal-delay="1" className="border-t border-ink/25 pt-6">
              <h3 className="font-body font-medium text-[15px] text-ink mb-3">One contract.</h3>
              <p className="font-body text-[15px] leading-[1.65] text-ink/90">
                Design, structure, interiors, and construction under one studio. One number to call.
              </p>
            </div>
            <div data-reveal data-reveal-delay="2" className="border-t border-ink/25 pt-6">
              <h3 className="font-body font-medium text-[15px] text-ink mb-3">Six a year.</h3>
              <p className="font-body text-[15px] leading-[1.65] text-ink/90">
                We start six homes a year. Each one gets the studio's full attention from first sketch to handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Selected work (spec §9.1: ivory, --container-wide, heading
          "Selected work" + sub-line, 3 cards w/ name in Mier B Medium + caption,
          italic terracotta "View all work →"). */}
      <section data-header-theme="light" className="section-padded bg-ivory">
        <div className="container-wide">
          <div className="mb-20 md:mb-24 max-w-[640px]">
            <h2 data-reveal className="type-h1 text-ink mb-5">
              Selected work.
            </h2>
            <p data-reveal data-reveal-delay="1" className="type-lede">
              Recently completed homes across Bangalore. Each one took eleven to eighteen months.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
            {featuredProjects.map((project, idx) => (
              <Link
                href={`/work#${project.slug}`}
                key={project.slug}
                data-reveal
                data-reveal-delay={String(idx)}
                className="group block"
              >
                <div className="img-mask aspect-[4/5] relative overflow-hidden mb-6 bg-stone/30">
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    <Placeholder
                      filename={`work-card-${idx + 1}-${project.slug}.jpg`}
                      aspect="4:5 · 1440×1800"
                      description={`§10.4 #7 — ${project.name}, ${project.tier}-tier finished home, golden-hour exterior, no people. Signature shot.`}
                      className="h-full w-full"
                    />
                  </div>
                </div>
                {/* Project name in body Medium per spec */}
                <h3 className="font-body font-medium text-[16px] md:text-[17px] text-ink relative inline-block">
                  {project.name}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-1 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ backgroundColor: 'var(--hampi-terracotta, #9A4A2E)' }}
                  />
                </h3>
                <p className="type-caption mt-3">
                  {project.location} · {project.sqft} · {project.year} · {project.tier}
                </p>
                {project.tags?.includes('landscape') && (
                  <span className="tag-landscape mt-3">Landscape</span>
                )}
              </Link>
            ))}
          </div>

          <Link href="/work" className="link-accent" data-reveal>View all work →</Link>
        </div>
      </section>

      {/* SECTION 5 — The studio (spec §9.1: Kaveri Green, --container-default, two-column,
          B&W mother-son photo + heading + body + accent link to /studio). */}
      <section data-header-theme="dark" className="section-padded bg-kaveri text-ivory">
        <div className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div data-reveal className="img-mask aspect-[4/5] relative w-full order-2 md:order-1">
            <Placeholder
              filename="studio-section-portrait.jpg"
              aspect="4:5 · 1440×1800"
              description="§10.4 #6 — B&W candid of Sangeetha and Sathya, mother and son, both looking at something off-frame. Soft natural light. Neither smiling at camera."
              className="h-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <p data-reveal className="eyebrow eyebrow--light mb-8">The studio</p>
            <h2 data-reveal data-reveal-delay="1" className="type-h1 text-ivory mb-10 max-w-[18ch]">
              Sangeetha and Sathya.
            </h2>
            <p data-reveal data-reveal-delay="2" className="type-body text-ivory/90 mb-10 max-w-[48ch]" style={{ fontSize: '17px' }}>
              A mother-and-son architect-engineer practice. Sangeetha is the principal architect — twenty years of practice, eighty Bangalore homes designed. Sathya is the engineer — NIT Karnataka — and he runs the studio's operations and the build.
            </p>
            <Link href="/studio" className="link-accent" data-reveal data-reveal-delay="3">
              More about the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — How a project works (spec §9.1: Mysore Stone block,
          --container-default, heading + sub, five-stage timeline, video). */}
      <section data-header-theme="light" className="section-padded bg-stone">
        <div className="container-default">
          <div className="mb-20 md:mb-24 max-w-[760px]">
            <h2 data-reveal className="type-h1 text-ink mb-5">
              How a Studio Spetia project works.
            </h2>
            <p data-reveal data-reveal-delay="1" className="type-lede">
              Five stages, eleven to eighteen months.
            </p>
          </div>

          <div className="flex flex-col">
            {processStages.map((stage, idx) => (
              <div
                key={stage.number}
                data-reveal
                data-reveal-delay={String(Math.min(idx, 3))}
                className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-t border-ink/15 first:border-t-0 first:pt-0"
              >
                <div className="font-display text-[clamp(1.25rem,2vw,1.5rem)] text-terracotta leading-none pt-2">
                  {stage.number}
                </div>
                <div>
                  <h3 className="type-h2 text-ink mb-4">
                    {stage.title}
                  </h3>
                  <p className="font-body text-[16px] md:text-[17px] leading-[1.7] text-ink/85 max-w-[640px]">
                    {stage.description.split('\n\n')[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* VIDEO placeholder per spec §9.1 / §11.1 — 60-90s founder intro */}
          <div data-reveal className="mt-20 md:mt-24">
            <div className="aspect-[16/9] w-full bg-ink/8 border border-ink/15 flex items-center justify-center text-center p-8">
              <div className="max-w-[44ch]">
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
                  Video slot · §11.1
                </p>
                <p className="font-display text-[clamp(1.05rem,1.6vw,1.375rem)] text-ink mb-3">
                  Founder introduction · 60–90 seconds
                </p>
                <p className="font-body text-[12px] md:text-[13px] leading-[1.6] text-ink/65">
                  Sangeetha and Sathya talking to camera. Sangeetha first, Sathya next, then together. B-roll: hand drawing, finished interior, site visit. 16:9, self-hosted.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Link href="/approach" className="link-accent" data-reveal>
              Read more about our approach →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — The three tiers (spec §9.1: ivory, --container-wide,
          heading + sub-line, three columns, terracotta hairline, no prices). */}
      <section data-header-theme="light" className="section-padded bg-ivory">
        <div className="container-wide">
          <div className="mb-20 md:mb-24 max-w-[640px]">
            <h2 data-reveal className="type-h1 text-ink mb-5">
              The three tiers.
            </h2>
            <p data-reveal data-reveal-delay="1" className="type-lede">
              Studio Spetia takes commissions at three scopes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {tiers.map((tier, idx) => (
              <div data-reveal data-reveal-delay={String(idx)} key={tier.name}>
                <h3 className="type-h2 text-ink mb-5">{tier.name}</h3>
                <div className={tier.name === 'Estate' ? 'hairline-kaveri' : 'hairline-terracotta'} />
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-ink/90">
                  {tier.scope}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Link href="/approach#tiers" className="link-accent" data-reveal>
              How tiers work →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Capacity (spec §9.1: Mysore Stone, --container-narrow, centered,
          eyebrow 2026 SCHEDULE, hero-scale headline, body, primary CTA). */}
      <section data-header-theme="light" className="section-padded bg-stone">
        <div className="container-narrow text-center flex flex-col items-center">
          <p data-reveal className="eyebrow mb-12">2026 schedule</p>
          <h2 data-reveal data-reveal-delay="1" className="type-hero text-ink mb-10 max-w-[16ch]">
            Three slots open for 2026 starts.
          </h2>
          <div data-reveal data-reveal-delay="2" className="hairline-terracotta mx-auto mb-10" aria-hidden="true" />
          <p data-reveal data-reveal-delay="3" className="type-body text-ink/90 mb-12 max-w-[480px]" style={{ fontSize: '17px' }}>
            We start six homes a year in Bangalore. As of May 2026, three slots remain for projects starting this year.
          </p>
          <div data-reveal data-reveal-delay="4">
            <CtaPrimary page="home" />
          </div>
        </div>
      </section>
    </>
  );
}
