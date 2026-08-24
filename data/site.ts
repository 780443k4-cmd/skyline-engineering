export const site = {
  name: 'SKYLINE ENGINEERING',
  shortName: 'SKYLINE',
  tagline: 'Bespoke villas in Spain.',
  region: 'Benidorm · Spain',
  startingPrice: '€400,000',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://skylineengineering.es',
  phoneNumber: '34643895440',
  phoneDisplay: '+34 643 895 440',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34643895440',
  email: '780443k4@gmail.com',
  legal: {
    companyName: 'SKYLINE ENGINEERING, S.L.',
    nif: 'B21976220',
    address: 'Cl. Segovia, 35, Pta. 14, Esc. 3 – 03509 Finestrat (Alicante), Spain',
    registry: 'Registro Mercantil de Alicante, hoja A-199037, folio electrónico, inscripción 1',
    euid: 'ES03026.000645410',
  },
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/skyline_engineering_sl/' },
    { label: 'Facebook', href: 'https://www.facebook.com/SKYLINEBenidorm/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@skyline_benidorm' },
  ],
  nav: [
    { label: 'Villas', href: '/villas' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  locations: [
    'Altea',
    'Altea Hills',
    'Finestrat',
    'Benidorm',
    'La Nucía',
    'Polop',
    'Calpe',
    'Benissa',
    'Moraira',
    'Jávea',
  ],
};

export const isWhatsAppConfigured = Boolean(site.whatsappNumber);

export function phoneHref() {
  return `tel:+${site.phoneNumber}`;
}

// Falls back to the Contact page (not an on-page anchor) when no WhatsApp
// number is configured, so the link is always valid regardless of which
// page it's rendered on.
export function whatsappHref(prefilledMessage?: string) {
  if (!site.whatsappNumber) return '/contact';
  const text = prefilledMessage ? `?text=${encodeURIComponent(prefilledMessage)}` : '';
  return `https://wa.me/${site.whatsappNumber}${text}`;
}

export function telegramHref(prefilledMessage?: string) {
  const text = prefilledMessage ? `?text=${encodeURIComponent(prefilledMessage)}` : '';
  return `https://t.me/+${site.phoneNumber}${text}`;
}

export function viberHref() {
  return `https://viber.me/${site.phoneNumber}`;
}
