import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { site } from '@/data/site';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'SKYLINE Engineering | Вілли під ключ в Іспанії від €400 000',
    template: '%s | SKYLINE Engineering',
  },
  description:
    'Вілли під ключ у Бенідормі: від вибору ділянки й архітектури до дозволів, будівництва, дизайну та передачі ключів.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SKYLINE Engineering | Вілли під ключ в Іспанії',
    description:
      'Від ділянки до ключів: архітектура, інженерія, будівництво та дизайн вілл у Бенідормі.',
    url: site.url,
    siteName: 'SKYLINE Engineering',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Концепція сучасної вілли SKYLINE з видом на Середземне море',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYLINE Engineering | Вілли під ключ в Іспанії',
    description:
      'Від ділянки до ключів: архітектура, інженерія, будівництво та дизайн вілл у Бенідормі.',
    images: ['/images/og-cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      areaServed: 'Benidorm, Alicante, Spain',
    },
    {
      '@type': 'LocalBusiness',
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
      areaServed: 'Benidorm, Spain',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
