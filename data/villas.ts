export type VillaConcept = {
  slug: string;
  name: string;
  tier: 'Essential' | 'Signature' | 'Premium' | 'Signature Collection';
  bedrooms: string;
  size: string;
  priceFrom: string;
  description: string;
  image: string;
};

// IMPORTANT: These are architectural concepts / visualizations for illustrative
// purposes. They are not photographs of completed SKYLINE Engineering projects.
export const villaConcepts: VillaConcept[] = [
  {
    slug: 'villa-aura',
    name: 'Villa Aura',
    tier: 'Essential',
    bedrooms: '3 bedrooms',
    size: '~250 m²',
    priceFrom: 'From €400,000',
    description:
      'A compact two-storey contemporary villa with panoramic glazing, a private pool and deep sheltered terraces.',
    image: '/images/concepts/villa-aura-photo-v2.jpg',
  },
  {
    slug: 'villa-horizon',
    name: 'Villa Horizon',
    tier: 'Signature',
    bedrooms: '4 bedrooms',
    size: '~320 m²',
    priceFrom: 'From €550,000',
    description:
      'A custom-designed family villa with generous outdoor living, framed views and a layout shaped around the plot.',
    image: '/images/concepts/villa-horizon.jpg',
  },
  {
    slug: 'villa-panorama',
    name: 'Villa Panorama',
    tier: 'Premium',
    bedrooms: '4 bedrooms',
    size: '~400 m²',
    priceFrom: 'From €750,000',
    description:
      'An elevated specification villa with advanced architecture, large terraces and premium interior detailing.',
    image: '/images/concepts/villa-panorama.jpg',
  },
  {
    slug: 'villa-signature',
    name: 'Villa Signature',
    tier: 'Signature Collection',
    bedrooms: '5+ bedrooms',
    size: '500+ m²',
    priceFrom: 'Price on request',
    description:
      'A fully bespoke residence developed from a unique plot and brief, with no fixed specification ceiling.',
    image: '/images/concepts/villa-signature.jpg',
  },
];

export const priceTiers = [
  {
    name: 'ESSENTIAL',
    price: 'From €400K',
    features: ['3 bedrooms', 'Private pool', 'Terrace', 'Contemporary architecture'],
  },
  {
    name: 'SIGNATURE',
    price: 'From €550K',
    features: [
      '4 bedrooms',
      'Private pool',
      'Large outdoor areas',
      'Custom architecture',
    ],
  },
  {
    name: 'PREMIUM',
    price: 'From €750K',
    features: [
      '4–5 bedrooms',
      'Premium specifications',
      'Large terraces',
      'Advanced architecture',
    ],
  },
];
