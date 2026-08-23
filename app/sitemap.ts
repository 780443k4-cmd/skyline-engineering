import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/villas',
    '/process',
    '/about',
    '/contact',
    '/privacy-policy',
    '/cookie-policy',
    '/legal-notice',
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : route.includes('policy') || route.includes('legal') ? 0.3 : 0.8,
  }));
}
