import Link from 'next/link';
import CtaPrimary from '../../components/CtaPrimary';
import Placeholder from '../../components/Placeholder';
import { localAreas, projects, site } from '../../lib/content';

export function generateStaticParams() {
  return localAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }) {
  const { area: areaSlug } = await params;
  const area = localAreas.find((item) => item.slug === areaSlug);

  if (!area) {
    return {
      title: 'Bangalore Homes',
    };
  }

  return {
    title: `Homes in ${area.name}, Bangalore`,
    description: `Studio Spetia designs and builds homes in ${area.name}, Bangalore. Architecture, approvals, interiors, and construction are held by one studio.`,
    alternates: {
      canonical: `${site.url}/work/${area.slug}`,
    },
  };
}

export default async function LocalWorkPage({ params }) {
  const { area: areaSlug } = await params;
  const area = localAreas.find((item) => item.slug === areaSlug);
  const areaName = area?.name || 'Bangalore';
  const matchingProjects = projects.filter((project) => project.location.toLowerCase() === areaName.toLowerCase());
  const representativeProject = matchingProjects[0];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Work',
        item: `${site.url}/work`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: areaName,
        item: `${site.url}/work/${area?.slug || areaSlug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Home design and build in ${areaName}`,
    provider: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: 'Studio Spetia',
    },
    serviceType: 'Residential architecture and construction',
    areaServed: {
      '@type': 'Place',
      name: `${areaName}, Bangalore`,
    },
    description: `Studio Spetia designs and builds plotted homes in ${areaName}, Bangalore, with architecture and construction held by one studio.`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section data-header-theme="light" className="bg-ivory section-padded pt-40 md:pt-48">
        <div className="container-narrow">
          <Link href="/work" className="link-accent mb-12 inline-block">
            ← Back to all work
          </Link>
          <p className="eyebrow mb-8">{areaName}</p>
          <h1 className="type-hero text-ink mb-10 max-w-[16ch]">
            Homes in {areaName}, Bangalore.
          </h1>
          <p className="type-lede text-ink/85 max-w-[44ch] mb-12">
            Studio Spetia designs and builds plotted homes in {areaName}. Sangeetha leads the architecture. Sathya runs the build.
          </p>
          <div className="hairline-terracotta mb-12" aria-hidden="true" />
          <p className="type-body text-ink/90 max-w-[58ch]" style={{ fontSize: '17px' }}>
            These pages are kept quiet on the site, but indexed for families searching by neighbourhood. The work remains the proof: site response, approvals, structure, interiors, and construction handled through one Studio Spetia contract.
          </p>
        </div>
      </section>

      <section data-header-theme="light" className="bg-stone section-padded-sm">
        <div className="container-default grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="img-mask aspect-[4/5] relative w-full">
            <Placeholder
              filename={`work-${area?.slug || areaSlug}-home.jpg`}
              aspect="4:5 · 1440×1800"
              description={`Finished Studio Spetia home in ${areaName}. Golden-hour exterior, atmospheric, no people. Replace with a real project photograph when available.`}
              className="h-full"
            />
          </div>
          <div>
            <p className="eyebrow mb-8">Local proof</p>
            <h2 className="type-h1 text-ink mb-8 max-w-[16ch]">
              A Bangalore home, held from first sketch to handover.
            </h2>
            <p className="type-body text-ink/90 mb-10 max-w-[52ch]" style={{ fontSize: '17px' }}>
              {representativeProject
                ? `${representativeProject.name} is a ${representativeProject.tier} home in ${representativeProject.location}. ${representativeProject.duration}.`
                : `This ${areaName} page is ready for the first photographed Studio Spetia project in the neighbourhood.`}
            </p>
            <CtaPrimary page="work" className="w-full sm:w-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
