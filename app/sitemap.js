const siteUrl = 'https://studiospetia.in';

export default function sitemap() {
  return ['', '/work', '/studio', '/approach', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
