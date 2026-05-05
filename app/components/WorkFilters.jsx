"use client";
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Placeholder from './Placeholder';

const TIERS = ['ALL', 'ATELIER', 'BESPOKE', 'ESTATE'];

export default function WorkFilters({ projects }) {
  const [tier, setTier] = useState('ALL');
  const [location, setLocation] = useState('ALL');

  const allLocations = useMemo(() => {
    const set = new Set(projects.map((p) => p.location.toUpperCase()));
    return ['ALL', ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const tierOk = tier === 'ALL' || p.tier.toUpperCase() === tier;
      const locOk = location === 'ALL' || p.location.toUpperCase() === location;
      return tierOk && locOk;
    });
  }, [projects, tier, location]);

  // On initial mount, honor any #slug deep link by scrolling into view after a beat.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash?.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return (
    <>
      <div className="max-w-[1080px] mx-auto px-4 mt-16 flex flex-col items-center gap-4 font-body text-[13px] uppercase tracking-[0.12em] text-ink-quiet">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {TIERS.map((t) => {
            const active = tier === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTier(t)}
                className={`pb-1 transition-colors ${active ? 'text-terracotta border-b border-terracotta' : 'hover:text-ink'}`}
                aria-pressed={active}
              >
                {t}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-[12px]">
          {allLocations.map((loc) => {
            const active = location === loc;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => setLocation(loc)}
                className={`pb-1 transition-colors ${active ? 'text-terracotta border-b border-terracotta' : 'hover:text-ink'}`}
                aria-pressed={active}
              >
                {loc}
              </button>
            );
          })}
        </div>
        <p className="font-body text-[12px] tracking-[0.08em] text-ink-quiet/80 normal-case mt-3">
          {filtered.length} of {projects.length} projects
        </p>
      </div>

      <div className="flex flex-col gap-32 pb-32 mt-24">
        {filtered.length === 0 && (
          <div className="max-w-[720px] mx-auto px-4 py-32 text-center">
            <p className="font-display text-[clamp(1.5rem,3vw,2rem)] text-ink-soft">
              No projects match this filter yet.
            </p>
            <button
              type="button"
              onClick={() => { setTier('ALL'); setLocation('ALL'); }}
              className="mt-8 font-body text-[13px] uppercase tracking-[0.12em] text-terracotta hover:text-ink transition-colors"
            >
              Show all projects →
            </button>
          </div>
        )}

        {filtered.map((project, idx) => (
          <article id={project.slug} key={project.slug} className="scroll-mt-[140px]">
            <div className="w-full h-[60vh] md:h-[80vh] relative mb-16">
              {project.imageHero ? (
                <Image
                  src={project.imageHero}
                  alt={`Exterior view of ${project.name}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={idx === 0}
                />
              ) : (
                <Placeholder
                  text={`Hero photograph for ${project.name}: finished home, golden hour exterior, atmospheric. Signature shot.`}
                  className="h-full"
                />
              )}
            </div>

            <div className="max-w-[1080px] mx-auto px-4 md:px-16 mb-12">
              {project.tags?.includes('landscape') && (
                <span className="tag-landscape mb-4">Landscape</span>
              )}
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] text-ink mb-4">
                {project.name}
              </h2>
              <p className="font-body text-[14px] text-ink-quiet uppercase tracking-[0.05em]">
                {project.location} · {project.sqft} · {project.year} · {project.tier} · {project.duration}.
              </p>
            </div>

            <div className="max-w-[720px] mx-auto px-4 mb-24">
              <p className="font-body text-[16px] leading-[1.65] text-ink-soft mb-8">
                {project.description}
              </p>
              {project.quote && (
                <p className="font-display italic text-[clamp(1.125rem,2.5vw,1.25rem)] text-ink-soft/80 pl-6 border-l border-terracotta">
                  {project.quote}
                </p>
              )}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="aspect-[3/2] relative bg-stone/20 w-full">
                {project.imageDetail ? (
                  <Image
                    src={project.imageDetail}
                    alt={`Detail view of ${project.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                ) : (
                  <Placeholder text="Interior detail shot, 3:2" className="h-full" />
                )}
              </div>
              <div className="aspect-[16/9] relative bg-stone/20 w-full mt-0 md:mt-32">
                {project.imageInterior ? (
                  <Image
                    src={project.imageInterior}
                    alt={`Interior view of ${project.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                ) : (
                  <Placeholder text="Full interior at golden hour, 16:9" className="h-full" />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
