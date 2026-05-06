import { localAreas, site } from './lib/content';

const siteUrl = site.url;

export default function sitemap() {
  const coreRoutes = ['', '/work', '/studio', '/approach', '/contact'];
  const localRoutes = localAreas.map((area) => `/work/${area.slug}`);

  return [...coreRoutes, ...localRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith('/work/') ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/work/') ? 0.72 : 0.8,
  }));
}
