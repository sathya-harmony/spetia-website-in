import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/home/home-b', destination: '/', permanent: true },
      { source: '/about', destination: '/studio', permanent: true },
      { source: '/services', destination: '/approach', permanent: true },
      { source: '/services/:path*', destination: '/approach', permanent: true },
      { source: '/process', destination: '/approach', permanent: true },
      { source: '/project/projects-a', destination: '/work', permanent: true },
      { source: '/faq', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
