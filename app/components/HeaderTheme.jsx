"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * HeaderTheme — observes sections marked with `data-header-theme` and switches
 * the global CSS variable `--header-fg` so the fixed header (transparent) stays
 * legible against whatever is currently behind it.
 *
 * Sections opt in by setting:
 *   <section data-header-theme="light">...</section>   // dark text on cream
 *   <section data-header-theme="dark">...</section>    // light text on dark / image
 *
 * Default is "light" if no section is currently in the header band.
 */
export default function HeaderTheme() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    const apply = (theme) => {
      if (theme === 'dark') {
        root.style.setProperty('--header-fg', '#F1ECE2');
        root.style.setProperty('--header-border', 'rgba(241, 236, 226, 0.18)');
        // Subtle warm-dark tint behind the frosted blur so the wordmark
        // stays legible over moving body text, without losing transparency.
        root.style.setProperty('--header-bg', 'rgba(26, 26, 26, 0.55)');
      } else {
        root.style.setProperty('--header-fg', '#1A1A1A');
        root.style.setProperty('--header-border', 'rgba(26, 26, 26, 0.12)');
        root.style.setProperty('--header-bg', 'rgba(241, 236, 226, 0.72)');
      }
    };

    // Initial default
    apply('light');

    const raf = requestAnimationFrame(() => {
      const sections = document.querySelectorAll('[data-header-theme]');
      if (sections.length === 0) return;

      // Track the topmost section currently intersecting the header strip.
      const headerHeight = 88; // small probe just under the header
      const probe = () => {
        let active = null;
        sections.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top <= headerHeight && r.bottom > headerHeight) {
            active = el.getAttribute('data-header-theme');
          }
        });
        if (active) apply(active);
      };

      probe();
      const onScroll = () => probe();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      window.__spetiaHeaderTheme = () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    });

    return () => {
      cancelAnimationFrame(raf);
      window.__spetiaHeaderTheme?.();
    };
  }, [pathname]);

  return null;
}
