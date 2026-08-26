import type { Metadata } from 'next';
import type { Locale } from '@/data/translations';
import { site } from '@/data/site';

export const locales: Locale[] = ['uk', 'ru', 'en', 'es'];

export const pagePaths = [
  '',
  '/villas',
  '/process',
  '/about',
  '/contact',
  '/privacy-policy',
  '/cookie-policy',
  '/legal-notice',
] as const;

export type PagePath = (typeof pagePaths)[number];

const content: Record<Locale, Record<PagePath, { title: string; description: string }>> = {
  uk: {
    '': { title: 'Будівництво вілл під ключ на Коста-Бланці | SKYLINE Engineering', description: 'Проєктування та будівництво вілл під ключ у Бенідормі й на Коста-Бланці: ділянка, архітектура, дозволи, будівництво та дизайн.' },
    '/villas': { title: 'Проєкти та концепції вілл на Коста-Бланці | SKYLINE', description: 'Концепції сучасних вілл SKYLINE Engineering для Бенідорма та Коста-Бланки з орієнтовною комплектацією й бюджетом.' },
    '/process': { title: 'Процес будівництва вілли в Іспанії | SKYLINE', description: 'Повний процес будівництва вілли: аналіз ділянки, архітектура, інженерія, дозволи, будівництво, дизайн і передача ключів.' },
    '/about': { title: 'Про SKYLINE Engineering | Будівництво вілл в Іспанії', description: 'Команда SKYLINE Engineering та інженерний підхід до проєктування й будівництва приватних вілл на Коста-Бланці.' },
    '/contact': { title: 'Обговорити будівництво вілли | SKYLINE Engineering', description: 'Зв’яжіться з SKYLINE Engineering, щоб обговорити ділянку, проєкт, бюджет або ідею вілли на Коста-Бланці.' },
    '/privacy-policy': { title: 'Політика конфіденційності | SKYLINE Engineering', description: 'Інформація про обробку та захист персональних даних на сайті SKYLINE Engineering.' },
    '/cookie-policy': { title: 'Політика cookie | SKYLINE Engineering', description: 'Інформація про необхідні та аналітичні технології на сайті SKYLINE Engineering.' },
    '/legal-notice': { title: 'Правова інформація | SKYLINE Engineering', description: 'Юридичні відомості про SKYLINE ENGINEERING, S.L. та умови використання сайту.' },
  },
  ru: {
    '': { title: 'Строительство вилл под ключ на Коста-Бланке | SKYLINE Engineering', description: 'Проектирование и строительство вилл под ключ в Бенидорме и на Коста-Бланке: участок, архитектура, разрешения, строительство и дизайн.' },
    '/villas': { title: 'Проекты и концепции вилл на Коста-Бланке | SKYLINE', description: 'Концепции современных вилл SKYLINE Engineering для Бенидорма и Коста-Бланки с ориентировочной комплектацией и бюджетом.' },
    '/process': { title: 'Процесс строительства виллы в Испании | SKYLINE', description: 'Полный процесс строительства виллы: анализ участка, архитектура, инженерия, разрешения, строительство, дизайн и передача ключей.' },
    '/about': { title: 'О SKYLINE Engineering | Строительство вилл в Испании', description: 'Команда SKYLINE Engineering и инженерный подход к проектированию и строительству частных вилл на Коста-Бланке.' },
    '/contact': { title: 'Обсудить строительство виллы | SKYLINE Engineering', description: 'Свяжитесь с SKYLINE Engineering, чтобы обсудить участок, проект, бюджет или идею виллы на Коста-Бланке.' },
    '/privacy-policy': { title: 'Политика конфиденциальности | SKYLINE Engineering', description: 'Информация об обработке и защите персональных данных на сайте SKYLINE Engineering.' },
    '/cookie-policy': { title: 'Политика cookie | SKYLINE Engineering', description: 'Информация о необходимых и аналитических технологиях на сайте SKYLINE Engineering.' },
    '/legal-notice': { title: 'Правовая информация | SKYLINE Engineering', description: 'Юридические сведения о SKYLINE ENGINEERING, S.L. и условия использования сайта.' },
  },
  en: {
    '': { title: 'Turnkey Villa Construction Costa Blanca | SKYLINE Engineering', description: 'Design and construction of turnkey villas in Benidorm and Costa Blanca: land review, architecture, permits, construction, interiors and handover.' },
    '/villas': { title: 'Luxury Villa Designs Costa Blanca | SKYLINE Engineering', description: 'Explore contemporary villa concepts for Benidorm and Costa Blanca, with indicative specifications, sizes and construction budgets.' },
    '/process': { title: 'Villa Construction Process in Spain | SKYLINE Engineering', description: 'A coordinated path from land analysis and architecture to permits, construction, interiors and turnkey handover in Costa Blanca.' },
    '/about': { title: 'About SKYLINE Engineering | Villa Builder Costa Blanca', description: 'Meet the engineering-led team designing and building bespoke private villas in Benidorm and across Costa Blanca.' },
    '/contact': { title: 'Discuss Your Costa Blanca Villa | SKYLINE Engineering', description: 'Contact SKYLINE Engineering to discuss your plot, project, budget or idea for a turnkey villa in Costa Blanca.' },
    '/privacy-policy': { title: 'Privacy Policy | SKYLINE Engineering', description: 'How SKYLINE Engineering processes and protects personal data submitted through this website.' },
    '/cookie-policy': { title: 'Cookie Policy | SKYLINE Engineering', description: 'Information about necessary technologies and consent-based analytics used by SKYLINE Engineering.' },
    '/legal-notice': { title: 'Legal Notice | SKYLINE Engineering', description: 'Legal information about SKYLINE ENGINEERING, S.L. and the terms governing this website.' },
  },
  es: {
    '': { title: 'Construcción de villas llave en mano en Costa Blanca | SKYLINE', description: 'Diseño y construcción de villas llave en mano en Benidorm y Costa Blanca: parcela, arquitectura, licencias, obra, interiorismo y entrega.' },
    '/villas': { title: 'Diseños de villas de lujo en Costa Blanca | SKYLINE', description: 'Conceptos de villas contemporáneas para Benidorm y Costa Blanca, con superficies, calidades y presupuestos orientativos.' },
    '/process': { title: 'Proceso de construcción de una villa en España | SKYLINE', description: 'Un proceso coordinado desde el análisis de la parcela y la arquitectura hasta licencias, construcción, interiorismo y entrega.' },
    '/about': { title: 'Sobre SKYLINE Engineering | Constructor de villas Costa Blanca', description: 'Conoce al equipo técnico que diseña y construye villas privadas a medida en Benidorm y toda la Costa Blanca.' },
    '/contact': { title: 'Hablemos de tu villa en Costa Blanca | SKYLINE', description: 'Contacta con SKYLINE Engineering para hablar de tu parcela, proyecto, presupuesto o idea de villa llave en mano.' },
    '/privacy-policy': { title: 'Política de privacidad | SKYLINE Engineering', description: 'Cómo SKYLINE Engineering trata y protege los datos personales enviados a través de este sitio web.' },
    '/cookie-policy': { title: 'Política de cookies | SKYLINE Engineering', description: 'Información sobre tecnologías necesarias y analítica basada en consentimiento en el sitio de SKYLINE Engineering.' },
    '/legal-notice': { title: 'Aviso legal | SKYLINE Engineering', description: 'Información jurídica de SKYLINE ENGINEERING, S.L. y condiciones de uso de este sitio web.' },
  },
};

const ogLocales: Record<Locale, string> = {
  uk: 'uk_UA',
  ru: 'ru_RU',
  en: 'en_GB',
  es: 'es_ES',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isPagePath(value: string): value is PagePath {
  return pagePaths.includes(value as PagePath);
}

export function localizedPath(locale: Locale, path: string) {
  return `/${locale}${path === '/' ? '' : path}`;
}

export function buildMetadata(locale: Locale, path: PagePath): Metadata {
  const current = content[locale][path];
  const canonical = localizedPath(locale, path);
  const languages = Object.fromEntries(
    locales.map((language) => [language, localizedPath(language, path)])
  );

  return {
    metadataBase: new URL(site.url),
    title: { absolute: current.title },
    description: current.description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': localizedPath('en', path) },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: canonical,
      siteName: 'SKYLINE Engineering',
      locale: ogLocales[locale],
      type: 'website',
      images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: current.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: current.title,
      description: current.description,
      images: ['/images/og-cover.jpg'],
    },
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
