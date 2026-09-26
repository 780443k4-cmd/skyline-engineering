import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { locales, pagePaths, localizedPath } from '@/data/seo';
import { projects } from '@/data/projects';

// Builds the { en: '...', es: '...', ... , 'x-default': '...' } map Next.js
// sitemap entries expect under `alternates.languages`, mirroring the same
// hreflang set already emitted per-page in data/seo.ts buildMetadata() —
// low-priority polish (hreflang is already correct in each page's <head>),
// but keeps the sitemap self-describing too.
function languageAlternates(path: string) {
  const languages = Object.fromEntries(
    locales.map((language) => [language, `${site.url}${localizedPath(language, path)}`])
  );
  return { ...languages, 'x-default': `${site.url}${localizedPath('uk', path)}` };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = locales.flatMap((locale) => pagePaths.map((route) => ({
    url: `${site.url}${localizedPath(locale, route)}`,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route.includes('policy') || route.includes('legal') ? 0.3 : 0.8,
    alternates: { languages: languageAlternates(route) },
  })));

  // Individual project pages aren't in `pagePaths` (they're dynamic, served
  // from app/[locale]/projects/[slug]/page.tsx) — list them from the same
  // data source that drives generateStaticParams there.
  const projectPages = locales.flatMap((locale) => projects.map((project) => ({
    url: `${site.url}${localizedPath(locale, `/projects/${project.slug}`)}`,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: { languages: languageAlternates(`/projects/${project.slug}`) },
  })));

  return [...staticPages, ...projectPages];
}
