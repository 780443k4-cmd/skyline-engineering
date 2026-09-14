import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/pages/ProjectDetailPage';
import { isLocale, locales, localizedPath } from '@/data/seo';
import { site } from '@/data/site';
import { projects } from '@/data/projects';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const path = `/projects/${slug}`;
  const canonical = localizedPath(locale, path);
  const languages = Object.fromEntries(locales.map((language) => [language, localizedPath(language, path)]));
  const title = `${project.name} — ${project.location} | SKYLINE Engineering`;

  return {
    metadataBase: new URL(site.url),
    title: { absolute: title },
    description: project.summary,
    alternates: { canonical, languages: { ...languages, 'x-default': localizedPath('en', path) } },
    openGraph: { title, description: project.summary, url: canonical, siteName: 'SKYLINE Engineering', type: 'website' },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!projects.some((project) => project.slug === slug)) notFound();
  return <ProjectDetailPage slug={slug} />;
}
