import { Cormorant_Garamond, Manrope } from 'next/font/google';
import '../globals.css';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { site } from '@/data/site';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { isLocale, locales } from '@/data/seo';

const display = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const organizationId = `${site.url}#organization`;
const founderId = `${site.url}#founder-denys-druz`;
const websiteId = `${site.url}#website`;

// Single canonical business entity (GeneralContractor is a more specific subtype of
// Organization/LocalBusiness) referenced by @id everywhere else, instead of two separate
// top-level nodes describing the same real-world entity. All values below are sourced from
// already-published, owner-confirmed facts (site.ts / legal notice / about page) — no new
// portfolio content is introduced here.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'GeneralContractor',
      '@id': organizationId,
      name: 'Skyline Engineering',
      legalName: site.legal.companyName,
      alternateName: [site.shortName, site.legal.companyName],
      slogan: site.descriptor,
      url: site.url,
      logo: `${site.url}/images/logo/skyline-logo-full.png`,
      image: `${site.url}/images/og-cover.jpg`,
      description:
        'Skyline Engineering is a turnkey villa construction company based in Finestrat, Alicante, building private villas in Benidorm, Finestrat and across the Costa Blanca, Spain.',
      taxID: site.legal.nif,
      email: site.email,
      telephone: site.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cl. Segovia, 35, Pta. 14, Esc. 3',
        postalCode: '03509',
        addressLocality: 'Finestrat',
        addressRegion: 'Alicante',
        addressCountry: 'ES',
      },
      areaServed: site.locations.map((name) => ({ '@type': 'City', name })),
      sameAs: site.social.map((social) => social.href),
      founder: { '@id': founderId },
    },
    {
      '@type': 'Person',
      '@id': founderId,
      name: 'Denys Druz',
      jobTitle: 'Architect · Civil Engineer',
      image: `${site.url}/images/team/denys-druz.jpg`,
      description:
        'Architect and civil engineer with 25+ years of experience in construction and engineering design; founder of SKYLINE Engineering.',
      worksFor: { '@id': organizationId },
    },
    {
      '@type': 'Service',
      name: 'Turnkey Villa Construction — Benidorm, Finestrat & Costa Blanca',
      serviceType: 'Turnkey villa design and construction',
      provider: { '@id': organizationId },
      areaServed: site.locations.map((name) => ({ '@type': 'City', name })),
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: 'SKYLINE Engineering',
      url: site.url,
      publisher: { '@id': organizationId },
    },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider initialLocale={locale}>
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <GoogleAnalytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
