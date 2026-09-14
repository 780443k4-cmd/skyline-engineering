import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectsPage from '@/components/pages/ProjectsPage';
import { buildMetadata, isLocale, locales } from '@/data/seo';

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, '/projects');
}

export default async function Projects({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ProjectsPage />;
}
