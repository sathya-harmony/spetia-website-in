import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';
import Reveal from './components/Reveal';
import HeaderTheme from './components/HeaderTheme';

// GT Sectra Display Light — the locked headline face per design_v2.md §8.2.
// Self-hosted woff2 from /Fonts/. The Display Light cut is a true display
// face: hairlines render thin, terminals are wedge-shaped, and the optical
// sizing assumes very-large rendering. To avoid the "spindly / jagged"
// effect Sangeetha noticed earlier, we (a) only use it at hero/h1/h2 sizes,
// (b) disable faux-light synthesis, (c) force optimizeLegibility +
// geometricPrecision rendering, (d) preload it so it lands before paint.
const displayFont = localFont({
  src: './fonts/GT-Sectra-Display-Light.woff2',
  variable: '--font-display',
  weight: '300',
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

const bodyFont = localFont({
  src: './fonts/ITFMierB-Book.woff2',
  variable: '--font-body',
  weight: '400',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
});

const siteUrl = 'https://studiospetia.in';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Studio Spetia — Bangalore Architect and Build Studio',
    template: '%s | Studio Spetia',
  },
  description:
    'A Bangalore design and build studio led by Sangeetha (architect, 20 years, 80 homes) and Sathya (engineer, NIT Karnataka). Six homes a year. Atelier, Bespoke, Estate.',
  openGraph: {
    title: 'Studio Spetia — Bangalore Architect and Build Studio',
    description:
      'A Bangalore design and build studio led by Sangeetha (architect, 20 years, 80 homes) and Sathya (engineer, NIT Karnataka).',
    url: siteUrl,
    siteName: 'Studio Spetia',
    images: [
      {
        url: '/images/work-samples/4.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Spetia independent home in Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Spetia — Bangalore Architect and Build Studio',
    description:
      'A Bangalore design and build studio led by Sangeetha (architect, 20 years, 80 homes) and Sathya (engineer, NIT Karnataka).',
    images: ['/images/work-samples/4.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteUrl}/#organization`,
    name: 'Studio Spetia',
    alternateName: 'Studio SPETIA',
    description: 'Bangalore residential design and build studio led by Architect Sangeetha and Engineer Sathya.',
    url: siteUrl,
    telephone: '+91-96115-24249',
    email: 'hello@studiospetia.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
    founder: [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#sangeetha`,
        name: 'Sangeetha',
        jobTitle: 'Principal Architect',
        knowsAbout: ['Residential architecture', 'Bangalore architecture', 'Master builder tradition'],
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#sathya`,
        name: 'Sathya',
        jobTitle: 'Engineer and Co-founder',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'National Institute of Technology Karnataka',
          alternateName: 'NIT Karnataka',
        },
      },
    ],
    foundingDate: '2024',
    knowsAbout: [
      'Residential architecture in Bangalore',
      'Design and build services',
      'BBMP plan approval',
      'BDA plan approval',
      'Custom home construction',
      'Master builder tradition',
    ],
  };

  return (
    <html lang="en-IN" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-ivory text-ink font-body antialiased selection:bg-ink selection:text-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <LoadingScreen />
        <SmoothScroll />
        <Reveal />
        <HeaderTheme />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-ink focus:text-ivory focus:px-4 focus:py-2 focus:font-body focus:text-[12px] focus:tracking-[0.12em] focus:uppercase focus:rounded-sm"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
