import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomePage from '@/components/pages/HomePage';
import VillasPage from '@/components/pages/VillasPage';
import ProcessPage from '@/components/pages/ProcessPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import CookiePolicyPage from '@/components/pages/CookiePolicyPage';
import LegalNoticePage from '@/components/pages/LegalNoticePage';
import { buildMetadata, isLocale, isPagePath, type PagePath } from '@/data/seo';

type Props = {
  params: Promise<{ locale: string; slug?: string[] }>;
};

function resolvePath(slug?: string[]): PagePath | null {
  const path = slug?.length ? `/${slug.join('/')}` : '';
  return isPagePath(path) ? path : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const path = resolvePath(slug);
  if (!isLocale(locale) || path === null) return {};
  return buildMetadata(locale, path);
}

export default async function LocalizedPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const path = resolvePath(slug);
  if (path === null) notFound();

  const pages: Record<PagePath, React.ComponentType> = {
    '': HomePage,
    '/villas': VillasPage,
    '/process': ProcessPage,
    '/about': AboutPage,
    '/contact': ContactPage,
    '/privacy-policy': PrivacyPolicyPage,
    '/cookie-policy': CookiePolicyPage,
    '/legal-notice': LegalNoticePage,
  };
  const Page = pages[path];
  return <Page />;
}
