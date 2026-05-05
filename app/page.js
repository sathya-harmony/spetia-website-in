import Image from 'next/image';
import Link from 'next/link';
import CtaPrimary from './components/CtaPrimary';
import Placeholder from './components/Placeholder';
import { projects, processStages, tiers } from './lib/content';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Section 2: Hero — Asymmetric editorial (per §9.1.2) */}
      <section className="bg-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] min-h-[calc(100vh-124px)]">
          {/* Left column: text 45% */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 order-2 lg:order-1">
            <p data-reveal className="font-body text-[13px] uppercase tracking-[0.12em] text-ink-quiet mb-8">
              Bangalore · Design and build studio
            </p>
            <h1 data-reveal data-reveal-delay="1" className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05] text-ink mb-8">
              An architect and an engineer build homes in Bangalore.
            </h1>
            <p data-reveal data-reveal-delay="2" className="font-body text-[16px] md:text-[17px] leading-[1.7] text-ink-soft max-w-[480px] mb-8">
              Studio Spetia is led by Sangeetha, a Bangalore architect of twenty years, and her son Sathya, an engineer trained at NIT Karnataka. Together they design and build homes across the city.
            </p>
            <div data-reveal data-reveal-delay="3" className="hairline-terracotta mb-6" />
            <div data-reveal data-reveal-delay="3">
              <CtaPrimary page="home" />
              <p className="font-body text-[13px] md:text-[14px] text-ink-quiet mt-4">
                Sangeetha and Sathya reply personally. Within twenty-four hours.
              </p>
            </div>
          </div>

          {/* Right column: photo 55%, full-bleed to right (60vh mobile per §9.1.2 line 559) */}
          <div data-reveal className="img-mask relative w-full h-[60vh] lg:h-auto lg:min-h-full order-1 lg:order-2">
            <Placeholder
              text="Hero photograph: Sangeetha and Sathya in the studio. To be shot — see §10."
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* Section 3: The Proposition (per §9.1.3) */}
      <section className="py-32 md:py-44 bg-ivory">
        <div className="max-w-[720px] mx-auto px-6 md:px-12">
          <p data-reveal className="font-body text-[13px] uppercase tracking-[0.12em] text-ink-quiet mb-10">
            What we do
          </p>
          <p data-reveal data-reveal-delay="1" className="font-display text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[1.2] text-ink end-mark">
            We design and build homes in Bangalore. Architecture and construction held by one studio. Sangeetha walks every site. Sathya runs the build. Six commissions a year.
          </p>
          <div data-reveal data-reveal-delay="2" className="hairline-short" />
        </div>

        <div className="max-w-[1080px] mx-auto px-6 md:px-12 mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div data-reveal className="border-t border-ink/30 pt-6">
            <h3 className="font-body font-medium text-[16px] text-ink mb-3">Architecture-led.</h3>
            <p className="font-body text-[15px] leading-[1.65] text-ink-soft">
              Every home is designed by Sangeetha. No templates. No shared elevations.
            </p>
          </div>
          <div data-reveal data-reveal-delay="1" className="border-t border-ink/30 pt-6">
            <h3 className="font-body font-medium text-[16px] text-ink mb-3">One contract.</h3>
            <p className="font-body text-[15px] leading-[1.65] text-ink-soft">
              Design, structure, interiors, and construction under one studio. One number to call.
            </p>
          </div>
          <div data-reveal data-reveal-delay="2" className="border-t border-ink/30 pt-6">
            <h3 className="font-body font-medium text-[16px] text-ink mb-3">Six a year.</h3>
            <p className="font-body text-[15px] leading-[1.65] text-ink-soft">
              We start six homes a year. Each one gets the studio's full attention from first sketch to handover.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Selected Work — 3-column 4:5 card grid (per §9.1.4) */}
      <section className="py-32 md:py-44 bg-ivory">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24">
            <h2 data-reveal className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-6">
              Selected work
            </h2>
            <p data-reveal data-reveal-delay="1" className="font-body text-[16px] md:text-[17px] leading-[1.65] text-ink-soft max-w-[600px]">
              Recently completed homes across Bangalore. Each one took eleven to eighteen months.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-16">
            {featuredProjects.map((project, idx) => (
              <Link
                href={`/work#${project.slug}`}
                key={project.slug}
                data-reveal
                data-reveal-delay={String(idx + 1)}
                className="group block"
              >
                <div className="img-mask aspect-[4/5] relative overflow-hidden mb-6 bg-stone/20">
                  <Image
                    src={project.imageHero}
                    alt={`${project.name} — ${project.location}`}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority={idx === 0}
                  />
                </div>
                <div>
                  <h3 className="font-body font-medium text-[16px] text-ink relative inline-block">
                    {project.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-8" />
                  </h3>
                  <p className="font-body text-[14px] text-ink-quiet mt-3">
                    {project.location} · {project.sqft} · {project.year} · {project.tier}
                  </p>
                  {project.tags?.includes('landscape') && (
                    <span className="tag-landscape mt-3">Landscape</span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <Link
            data-reveal
            href="/work"
            className="font-display italic text-[clamp(1.125rem,2vw,1.25rem)] text-terracotta hover:opacity-80 transition-opacity"
          >
            View all work →
          </Link>
        </div>
      </section>

      {/* Section 5: The Studio (per §9.1.5) */}
      <section className="py-32 md:py-44 bg-ivory">
        <div className="max-w-[1080px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div data-reveal className="img-mask aspect-[4/5] relative w-full order-2 md:order-1">
            <Placeholder
              text="B&W candid portrait of Sangeetha and Sathya together. Mother and son, both looking at something off-frame. Soft natural light."
              className="h-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <p data-reveal className="font-body text-[13px] uppercase tracking-[0.12em] text-ink-quiet mb-8">
              The studio
            </p>
            <h2 data-reveal data-reveal-delay="1" className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] text-ink mb-8">
              Sangeetha and Sathya.
            </h2>
            <p data-reveal data-reveal-delay="2" className="font-body text-[16px] md:text-[17px] leading-[1.7] text-ink-soft mb-10">
              Studio Spetia is run by a mother and a son. Sangeetha is the principal architect — twenty years of practice, eighty Bangalore homes designed. Sathya is the engineer — NIT Karnataka, mechanical engineering — and he runs the studio's operations and the build. Together they take six commissions a year.
            </p>
            <Link
              data-reveal
              data-reveal-delay="3"
              href="/studio"
              className="font-display italic text-[clamp(1.125rem,2vw,1.25rem)] text-terracotta hover:opacity-80 transition-opacity"
            >
              More about the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: How a project works — Mysore Stone block (per §9.1.6) */}
      <section className="py-32 md:py-44 bg-stone">
        <div className="max-w-[1080px] mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20">
            <h2 data-reveal className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-6">
              How a Studio Spetia project works
            </h2>
            <p data-reveal data-reveal-delay="1" className="font-body text-[16px] md:text-[17px] text-ink-soft">
              Five stages, eleven to eighteen months.
            </p>
          </div>

          <div className="flex flex-col">
            {processStages.map((stage, idx) => (
              <div
                key={stage.number}
                data-reveal
                data-reveal-delay={String(Math.min(idx, 3))}
                className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10 py-10 md:py-14 border-t border-ink/20 first:border-t-0 first:pt-0"
              >
                <div className="font-display text-[clamp(1.5rem,3.5vw,2rem)] text-terracotta leading-none pt-1">
                  {stage.number}
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.125rem,2.5vw,1.25rem)] text-ink mb-4">
                    {stage.title}
                  </h3>
                  <p className="font-body text-[clamp(1rem,2vw,1.125rem)] leading-[1.7] text-ink/85 max-w-[640px]">
                    {stage.description.split('\n\n')[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Founder introduction video placeholder (§11.1) */}
          <div data-reveal className="mt-20 mb-12 aspect-video w-full bg-ink/10 flex items-center justify-center">
            <p className="font-body text-[13px] uppercase tracking-[0.12em] text-ink/60 text-center px-4">
              [ 60–90 second founder introduction video — see §11.1 ]
            </p>
          </div>

          <Link
            data-reveal
            href="/approach"
            className="font-display italic text-[clamp(1.125rem,2vw,1.25rem)] text-terracotta hover:opacity-80 transition-opacity"
          >
            Read more about our approach →
          </Link>
        </div>
      </section>

      {/* Section 7: The Three Tiers — ivory bg (per §9.1.7) */}
      <section className="py-32 md:py-44 bg-ivory">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20">
            <h2 data-reveal className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-6">
              The three tiers
            </h2>
            <p data-reveal data-reveal-delay="1" className="font-body text-[16px] md:text-[17px] text-ink-soft">
              Studio Spetia takes commissions at three scopes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {tiers.map((tier, idx) => (
              <div data-reveal data-reveal-delay={String(idx + 1)} key={tier.name}>
                <h3 className="font-display text-[clamp(1.5rem,3.5vw,2rem)] leading-[1.15] text-ink mb-6">
                  {tier.name}
                </h3>
                <div className="hairline-terracotta my-6" />
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-ink-soft">
                  {tier.scope}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Link
              data-reveal
              href="/approach#tiers"
              className="font-display italic text-[clamp(1.125rem,2vw,1.25rem)] text-terracotta hover:opacity-80 transition-opacity"
            >
              How tiers work →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Capacity — ivory bg, narrow centered (per §9.1.8) */}
      <section className="py-32 md:py-48 bg-ivory">
        <div className="max-w-[720px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <p data-reveal className="font-body text-[13px] uppercase tracking-[0.12em] text-ink-quiet mb-10">
            2026 schedule
          </p>
          <h2 data-reveal data-reveal-delay="1" className="font-display text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] text-ink mb-10">
            Three slots open for 2026 starts.
          </h2>
          <p data-reveal data-reveal-delay="2" className="font-body text-[16px] md:text-[18px] leading-[1.65] text-ink-soft mb-14 max-w-[480px]">
            We start six homes a year in Bangalore. As of May 2026, three slots remain for projects starting in 2026.
          </p>
          <div data-reveal data-reveal-delay="3">
            <CtaPrimary page="home" />
          </div>
        </div>
      </section>
    </>
  );
}
