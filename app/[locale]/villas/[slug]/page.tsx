import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VillaDetailPage from '@/components/pages/VillaDetailPage';
import { isLocale, locales, localizedPath } from '@/data/seo';
import { site } from '@/data/site';
import { villaConcepts } from '@/data/villas';
import { dictionaries } from '@/data/translations';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => villaConcepts.map((villa) => ({ locale, slug: villa.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const index = villaConcepts.findIndex((item) => item.slug === slug);
  if (index === -1) return {};

  const t = dictionaries[locale];
  const [name, , priceFrom, , description] = t.villas[index] as string[];

  const path = `/villas/${slug}`;
  const canonical = localizedPath(locale, path);
  const languages = Object.fromEntries(locales.map((language) => [language, localizedPath(language, path)]));
  const title = `${name} — ${t.common.concept} | SKYLINE Engineering`;

  return {
    metadataBase: new URL(site.url),
    title: { absolute: title },
    description: `${priceFrom}. ${description}`,
    // AUD-002: Ukrainian is the site's primary language — x-default points at /uk.
    alternates: { canonical, languages: { ...languages, 'x-default': localizedPath('uk', path) } },
    openGraph: { title, description, url: canonical, siteName: 'SKYLINE Engineering', type: 'website' },
  };
}

export default async function VillaDetail({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!villaConcepts.some((villa) => villa.slug === slug)) notFound();
  return <VillaDetailPage slug={slug} />;
}
