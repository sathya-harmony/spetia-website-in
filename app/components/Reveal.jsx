"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Wait one paint frame so the new route's DOM is mounted before we query.
    const raf = requestAnimationFrame(() => {
      const targets = document.querySelectorAll('[data-reveal]:not(.is-revealed)');

      if (reduced || targets.length === 0) {
        targets.forEach((el) => el.classList.add('is-revealed'));
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
      );

      targets.forEach((el) => {
        // Reveal anything already in viewport on first frame (above-the-fold).
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('is-revealed');
        } else {
          io.observe(el);
        }
      });

      // Stash the observer on the window so the next path-change cleanup can disconnect it.
      window.__spetiaRevealIO?.disconnect?.();
      window.__spetiaRevealIO = io;
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
