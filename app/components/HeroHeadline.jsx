"use client";
/**
 * HeroHeadline — Omai-style word-by-word reveal.
 * Each word is wrapped in a span and revealed with a stagger.
 * Triggers immediately on mount (after a tiny beat) since this is the LCP.
 */
export default function HeroHeadline({ text, className = "" }) {
  const words = text.split(' ');
  return (
    <h1 className={`hero-title ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="hero-title__word"
          style={{ '--word-index': i }}
          aria-hidden="true"
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </h1>
  );
}
