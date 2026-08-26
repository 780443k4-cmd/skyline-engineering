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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: site.legal.companyName,
      url: site.url,
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
    },
    {
      '@type': 'GeneralContractor',
      '@id': `${site.url}#general-contractor`,
      name: site.legal.companyName,
      url: site.url,
      image: `${site.url}/images/og-cover.jpg`,
      description: 'Architecture, engineering, construction and interiors for bespoke villas in Spain.',
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
    },
    {
      '@type': 'Service',
      serviceType: 'Turnkey villa design and construction',
      provider: { '@type': 'Organization', name: site.legal.companyName },
      areaServed: 'Benidorm, Spain',
    },
    {
      '@type': 'WebSite',
      name: 'SKYLINE Engineering',
      url: site.url,
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
