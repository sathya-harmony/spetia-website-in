/**
 * Placeholder — visual stand-in for a photograph that has not been shot yet.
 *
 * Two ways to call:
 *   1. Legacy:   <Placeholder text="Free-form description" />
 *   2. Briefed:  <Placeholder filename="home-hero-founders.jpg" aspect="4:5"
 *                             description="..." />
 *
 * The "briefed" form formats the brief like a photographer's call sheet so
 * Sangeetha and Sathya can hand the live page to Shamanth Patil and have
 * every shot pre-specified by filename and aspect — no ambiguity about
 * what goes where. See design_v2.md §10.4 for the canonical shot list.
 */
export default function Placeholder({
  text,
  filename,
  aspect,
  description,
  className = "aspect-[4/5]",
}) {
  const [frameLabel, uploadLabel] = aspect
    ? aspect.split('·').map((part) => part.trim())
    : [];

  // Backwards-compatible single-text mode
  if (text && !filename) {
    return (
      <div
        className={`w-full bg-stone flex items-center justify-center p-8 text-center text-ink/70 font-body text-[13px] leading-[1.55] ${className}`}
        role="img"
        aria-label={`Photograph placeholder: ${text}`}
      >
        {text}
      </div>
    );
  }

  // Briefed mode — structured call-sheet rendering
  return (
    <div
      className={`w-full bg-stone flex items-center justify-center p-6 md:p-10 text-ink ${className}`}
      role="img"
      aria-label={`Photograph placeholder for ${filename}: ${description}`}
    >
      <div className="max-w-[44ch] flex flex-col items-center text-center">
        <span className="font-body text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
          Photograph slot · §10.4
        </span>
        <span className="font-display italic text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.25] text-ink mb-4">
          {filename}
        </span>
        {frameLabel && (
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-ink/60 mb-2">
            Shot ratio {frameLabel}
          </span>
        )}
        {uploadLabel && (
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-ink/60 mb-5">
            Export {uploadLabel} min source
          </span>
        )}
        <span className="block w-8 h-px bg-ink/30 mb-5" />
        <span className="font-body text-[12px] md:text-[13px] leading-[1.6] text-ink/70">
          {description}
        </span>
      </div>
    </div>
  );
}
