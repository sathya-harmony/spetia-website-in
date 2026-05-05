"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navItems, getWhatsappHref } from '../lib/content';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only hide on mobile (< 768px); desktop is sticky as per §9.1.1
      const isMobile = window.innerWidth < 768;
      if (isMobile && currentScrollY > lastScrollY && currentScrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageMap = {
    '/': 'home',
    '/work': 'work',
    '/studio': 'studio',
    '/approach': 'approach',
    '/contact': 'contact',
  };
  const currentPage = pageMap[pathname] || 'home';
  const isContactPage = pathname === '/contact';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-ivory border-b border-ink/15 transition-transform duration-300 ${hidden ? '-translate-y-full' : ''}`}
      >
        <div className="relative h-[64px] md:h-[80px] flex items-center px-5 md:px-10">
          {/* Left: = MENU */}
          <button
            className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-ink hover:text-terracotta transition-colors z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "× CLOSE" : "= MENU"}
          </button>

          {/* Center: Wordmark */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Studio Spetia — home"
          >
            <Logo color="ink" size={100} className="md:w-[130px]" />
          </Link>

          {/* Right: MESSAGE STUDIO SPETIA */}
          <div className="ml-auto z-10">
            {!isContactPage ? (
              <a
                href={getWhatsappHref(currentPage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-ink hover:text-terracotta transition-colors"
              >
                <span className="hidden md:inline">MESSAGE STUDIO SPETIA</span>
                <span className="md:hidden">ENQUIRE</span>
              </a>
            ) : (
              <span className="invisible">.</span>
            )}
          </div>
        </div>

        {/* Sub-navigation row (desktop only) — sentence case per §9.1.1 line 551 */}
        <nav className="hidden md:flex justify-center items-center h-[44px] gap-12 border-t border-ink/15">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-[14px] transition-colors hover:text-terracotta ${pathname === item.href ? 'text-terracotta' : 'text-ink'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ivory pt-[64px] md:pt-[80px] px-6">
          <div className="flex flex-col gap-8 mt-16">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-4xl md:text-5xl font-light ${pathname === item.href ? 'text-terracotta' : 'text-ink'}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-ink/20 pt-8 mt-8">
              <a
                href={getWhatsappHref(currentPage)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[12px] uppercase tracking-[0.12em] text-ink hover:text-terracotta transition-colors"
              >
                MESSAGE STUDIO SPETIA →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
