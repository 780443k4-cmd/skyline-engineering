import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { locales, pagePaths, localizedPath } from '@/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => pagePaths.map((route) => ({
    url: `${site.url}${localizedPath(locale, route)}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : route.includes('policy') || route.includes('legal') ? 0.3 : 0.8,
  })));
}
