import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory pt-24 pb-8 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Column 1: Studio */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
              <Logo color="ivory" size={120} />
            </Link>
            <p className="text-ivory/70 text-[15px] leading-[1.65] max-w-[280px]">
              Bangalore. An architect-engineer led design and build studio.
            </p>
          </div>

          {/* Column 2: Reach us */}
          <div className="flex flex-col gap-3 text-[15px]">
            <p className="font-body text-[11px] uppercase tracking-[0.16em] text-ivory/50 mb-2">Reach us</p>
            <a href="https://wa.me/919611524249" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors text-ivory/85">
              WhatsApp +91 961 152 4249
            </a>
            <a href="mailto:hello@studiospetia.in" className="hover:text-terracotta transition-colors text-ivory/85">
              hello@studiospetia.in
            </a>
            <span className="text-ivory/85">Bangalore, India.</span>
          </div>

          {/* Column 3: Read */}
          <div className="flex flex-col gap-3 text-[15px]">
            <p className="font-body text-[11px] uppercase tracking-[0.16em] text-ivory/50 mb-2">Read</p>
            <Link href="/work" className="hover:text-terracotta transition-colors text-ivory/85">Work</Link>
            <Link href="/studio" className="hover:text-terracotta transition-colors text-ivory/85">Studio</Link>
            <Link href="/approach" className="hover:text-terracotta transition-colors text-ivory/85">Approach</Link>
            <Link href="/contact" className="hover:text-terracotta transition-colors text-ivory/85">Contact</Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-24 pt-6 border-t border-ivory/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-ivory/50 uppercase tracking-[0.12em]">
          <div>© 2026 Studio Spetia. A studio of the Spetia parent practice.</div>
          <div>Trademark filing pending.</div>
        </div>
      </div>
    </footer>
  );
}
