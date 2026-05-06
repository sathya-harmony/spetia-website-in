import { getWhatsappHref } from '../lib/content';

export default function CtaPrimary({ 
  page = 'home', 
  projectSlug = null, 
  className = '', 
  variant = 'dark',
  children = 'MESSAGE STUDIO SPETIA' 
}) {
  const href = getWhatsappHref(page, projectSlug);

  const variantStyles = {
    dark: {
      backgroundColor: '#9A4A2E', // Terracotta default for vibrancy
      color: '#F1ECE2',
      borderColor: '#9A4A2E',
    },
    light: {
      backgroundColor: '#F1ECE2',
      color: '#1A1A1A',
      borderColor: '#F1ECE2',
    },
    ivory: {
      backgroundColor: '#F1ECE2',
      color: '#1A1A1A',
      borderColor: '#F1ECE2',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#1A1A1A',
      borderColor: '#1A1A1A',
    },
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-primary group inline-flex items-center justify-center gap-3 px-8 py-4 font-body font-medium text-[15px] uppercase tracking-[0.12em] no-underline rounded-sm border transition-all duration-300 ease-out cursor-pointer hover:!bg-ink hover:!border-ink hover:!text-ivory focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-4 ${className}`}
      style={variantStyles[variant]}
      data-utm-source="website"
      data-utm-page={page}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}
