"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getWhatsappHref, contact } from '../lib/content';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when drawer is open.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close drawer on route change.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const pageMap = {
    '/': 'home',
    '/work': 'work',
    '/studio': 'studio',
    '/approach': 'approach',
    '/contact': 'contact',
  };
  const currentPage = pageMap[pathname] || 'home';
  const isContactPage = pathname === '/contact';

  // Visible top-level nav per design_v2.md §9.1 — Studio · Work · Approach · Contact.
  // Listed in funnel order: who we are → what we've made → how we work → how to engage.
  const topNav = [
    { href: '/studio', label: 'Studio' },
    { href: '/work', label: 'Work' },
    { href: '/approach', label: 'Approach' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        style={{
          color: 'var(--header-fg, #1A1A1A)',
          // Very subtle backdrop blur so the wordmark and links stay legible
          // over scrolling body text without losing the transparent feel.
          backgroundColor: 'var(--header-bg, transparent)',
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
        }}
      >
        {/* TOP ROW — ≡ MENU left | wordmark center | ENQUIRE right */}
        <div className="relative h-[64px] md:h-[72px] flex items-center px-5 md:px-10">
          {/* Mobile-only hamburger; desktop uses the visible sub-nav below */}
          <button
            type="button"
            className="md:hidden font-body text-[12px] uppercase tracking-[0.13em] hover:opacity-70 transition-opacity z-10"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <span aria-hidden="true">≡</span> MENU
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity"
            aria-label="Studio Spetia — home"
          >
            <Logo color="currentColor" size={88} className="md:w-[120px]" />
          </Link>

          <div className="ml-auto z-10">
            {!isContactPage ? (
              <a
                href={getWhatsappHref(currentPage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.13em] font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--hampi-terracotta)' }}
              >
                <span className="hidden md:inline">MESSAGE STUDIO SPETIA</span>
                <span className="md:hidden">ENQUIRE</span>
              </a>
            ) : (
              <span className="invisible">.</span>
            )}
          </div>
        </div>

        {/* SUB-NAV ROW — desktop only, hairlines above and below.
            Visible Studio · Work · Approach · Contact per spec §9.1. */}
        <nav
          aria-label="Primary"
          className="hidden md:block border-t border-b transition-colors duration-500"
          style={{ borderColor: 'var(--header-border, rgba(26, 26, 26, 0.12))' }}
        >
          <ul className="flex items-center justify-center gap-10 lg:gap-14 h-[44px]">
            {topNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative font-body text-[12px] uppercase tracking-[0.16em] transition-opacity hover:opacity-70"
                    style={{
                      opacity: active ? 1 : 0.78,
                    }}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-[14px] left-0 right-0 h-px"
                        style={{ backgroundColor: 'var(--hampi-terracotta, #9A4A2E)' }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Mobile-only side drawer (sm and below). Desktop uses the visible nav. */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-[opacity,visibility] duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
          className={`absolute inset-0 bg-ink/55 transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <aside
          className={`absolute top-0 left-0 h-full w-full sm:w-[420px] bg-ivory transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-[64px] flex items-center px-5 border-b border-ink/10">
            <button
              type="button"
              className="font-body text-[12px] uppercase tracking-[0.13em] text-ink hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span aria-hidden="true">×</span> MENU
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-8 py-12">
            <ul className="flex flex-col gap-7">
              <li>
                <Link
                  href="/"
                  className={`font-body text-[14px] uppercase tracking-[0.14em] transition-colors hover:text-terracotta ${
                    pathname === '/' ? 'text-terracotta' : 'text-ink'
                  }`}
                >
                  Home
                </Link>
              </li>
              {topNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-body text-[14px] uppercase tracking-[0.14em] transition-colors hover:text-terracotta ${
                      pathname === item.href ? 'text-terracotta' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-px bg-ink/10 my-12" />

            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-ink/70 mb-4">
              Reach us
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`https://wa.me/${contact.phoneDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] text-ink hover:text-terracotta transition-colors"
                >
                  WhatsApp {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-body text-[14px] text-ink hover:text-terracotta transition-colors"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </nav>

          <div className="px-8 py-8 border-t border-ink/10">
            <p className="font-display italic text-[clamp(1.5rem,5vw,2rem)] leading-[1.15] text-ink">
              Architecture and construction, held by one studio.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
