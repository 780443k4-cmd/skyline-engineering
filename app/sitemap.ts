import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { locales, pagePaths, localizedPath } from '@/data/seo';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = locales.flatMap((locale) => pagePaths.map((route) => ({
    url: `${site.url}${localizedPath(locale, route)}`,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route.includes('policy') || route.includes('legal') ? 0.3 : 0.8,
  })));

  // Individual project pages aren't in `pagePaths` (they're dynamic, served
  // from app/[locale]/projects/[slug]/page.tsx) — list them from the same
  // data source that drives generateStaticParams there.
  const projectPages = locales.flatMap((locale) => projects.map((project) => ({
    url: `${site.url}${localizedPath(locale, `/projects/${project.slug}`)}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  })));

  return [...staticPages, ...projectPages];
}
