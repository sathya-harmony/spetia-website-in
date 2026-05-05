"use client";
import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function LoadingScreen() {
  const [phase, setPhase] = useState('mount');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only run the loading sequence on the very first page load of a session.
    // Subsequent navigations (router transitions) skip the splash.
    const alreadyShown =
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('spetia-loaded') === '1';

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (alreadyShown || reduced) {
      setPhase('done');
      document.documentElement.classList.add('content-ready');
      return;
    }

    document.documentElement.classList.add('is-loading');

    const t1 = setTimeout(() => setPhase('reveal'), 60);
    const t2 = setTimeout(() => setPhase('exit'), 1100);
    const t3 = setTimeout(() => {
      setPhase('done');
      document.documentElement.classList.remove('is-loading');
      document.documentElement.classList.add('content-ready');
      try { sessionStorage.setItem('spetia-loaded', '1'); } catch {}
    }, 1700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.documentElement.classList.remove('is-loading');
      document.documentElement.classList.add('content-ready');
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ivory flex items-center justify-center pointer-events-none transition-opacity duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-8">
        <div
          className={`transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === 'mount'
              ? 'opacity-0 translate-y-2'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <Logo color="ink" size={140} />
        </div>
        <div
          className="h-px bg-terracotta transition-[width] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: phase === 'mount' ? '0px' : '64px' }}
        />
      </div>
    </div>
  );
}
