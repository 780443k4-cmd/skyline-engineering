import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/pages/ProjectDetailPage';
import { isLocale, locales, localizedPath } from '@/data/seo';
import { site } from '@/data/site';
import { projects } from '@/data/projects';
import { dictionaries } from '@/data/translations';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) return {};
  const summary = dictionaries[locale].projects[projectIndex].summary as string;

  const path = `/projects/${slug}`;
  const canonical = localizedPath(locale, path);
  const languages = Object.fromEntries(locales.map((language) => [language, localizedPath(language, path)]));
  const title = `${project.name} — ${project.location} | SKYLINE Engineering`;

  return {
    metadataBase: new URL(site.url),
    title: { absolute: title },
    description: summary,
    // AUD-002: Ukrainian is the site's primary language — x-default points at /uk.
    alternates: { canonical, languages: { ...languages, 'x-default': localizedPath('uk', path) } },
    openGraph: { title, description: summary, url: canonical, siteName: 'SKYLINE Engineering', type: 'website' },
    // AUD-audit: previously unset here (relied on the Next.js default, which
    // is index/follow but emits no explicit <meta name="robots"> tag). Every
    // entry in data/projects.ts is, by that file's own contract, already a
    // verified real project meant to be public — there is no draft/private
    // status field to gate on — so every project page is explicitly indexable.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!projects.some((project) => project.slug === slug)) notFound();
  return <ProjectDetailPage slug={slug} />;
}
