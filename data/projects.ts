// Real, built/in-progress SKYLINE Engineering projects — one indexable page per
// project (app/[locale]/projects/[slug]/page.tsx). Populate this array only with
// verified, owner-confirmed facts (name, location, areas, dates, services,
// real photographs). Do NOT invent placeholder projects, specs or figures:
// an empty array renders an honest "coming soon" state on the listing page
// instead of fabricated content. See docs/photo-seo-guidelines.md for the
// filename/alt/caption convention to use once real photos are added.

export type ProjectStatus = 'planning' | 'in_progress' | 'completed';

export type ProjectGalleryImage = {
  /** e.g. /images/projects/villa-finestrat-ridge/skyline-engineering-villa-finestrat-pool-terrace-01.webp */
  src: string;
  /** Unique, descriptive alt text — never reused verbatim across images. */
  alt: string;
  caption?: string;
};

export type ProjectUpdate = {
  date: string; // ISO 8601, e.g. '2026-06-01'
  text: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  plotArea?: string;
  builtArea?: string;
  status: ProjectStatus;
  constructionStart?: string;
  expectedCompletion?: string;
  /** Which of Skyline Engineering's own services were provided on this project. */
  servicesProvided: string[];
  /** Short, factual summary — no invented claims. */
  summary: string;
  gallery: ProjectGalleryImage[];
  updates?: ProjectUpdate[];
};

// Intentionally empty until real project data is confirmed by the owner.
export const projects: Project[] = [
  {
    slug: 'lanucia-6',
    name: 'Lanucia 6',
    location: 'La Nucía',
    type: 'Gated development — 6 villas',
    builtArea: '120 m² (per villa)',
    status: 'completed',
    expectedCompletion: '2026',
    servicesProvided: [
      'Architecture & Design',
      'Building Licence',
      'Construction',
      'Engineering Systems',
      'Finishing',
      'Pool & Landscaping',
      'Handover',
    ],
    summary:
      'A gated development of six villas in La Nucía, built by Skyline Engineering and handed over to their owners in 2026. Each villa has a built area of 120 m², with 3 bedrooms, 2 bathrooms, a private 3×8 m pool, a terrace and a rooftop solarium.',
    gallery: [
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-plot-excavation.webp',
        alt: 'Excavation of the plot and pool area at the start of the Lanucia 6 villa project in La Nucía, Alicante',
        caption: 'Groundworks — the start of construction on the closed urbanization.',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-foundation-formwork.webp',
        alt: 'Foundation trench with rebar cage and formwork on the Lanucia 6 site in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-structural-columns.webp',
        alt: 'Reinforced concrete columns and AAC block walls rising on the Lanucia 6 villas in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-structural-slab.webp',
        alt: 'Reinforced concrete floor slab under construction on one of the Lanucia 6 villas in La Nucía',
        caption: 'Reinforced concrete structure being poured.',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-floor-slab-formwork.webp',
        alt: 'Formwork and shoring props supporting a first-floor slab inside a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-staircase-structure.webp',
        alt: 'Concrete staircase under construction inside a Lanucia 6 villa in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-window-door-delivery.webp',
        alt: 'Pallets of aluminium window and door frames delivered to the Lanucia 6 site in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-electrical-rough-in.webp',
        alt: 'Electrical wiring and ceiling framing rough-in inside a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-exterior-under-construction.webp',
        alt: 'Row of Lanucia 6 villas in La Nucía with glazing and roller shutters installed during construction',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-facade-roller-shutters.webp',
        alt: 'Terrace and facade of a Lanucia 6 villa in La Nucía with roller shutters fitted during construction',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-pool-installation.webp',
        alt: 'Private swimming pool being tiled on the terrace of a Lanucia 6 villa in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-rooftop-solarium-stairs.webp',
        alt: 'Rooftop solarium with spiral staircase and pergola on a Lanucia 6 villa in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-kitchen-installation.webp',
        alt: 'Kitchen cabinetry being installed inside one of the Lanucia 6 villas in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-kitchen-appliance-delivery.webp',
        alt: 'Boxed kitchen appliances delivered ahead of installation inside a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-kitchen-living-rough-in.webp',
        alt: 'Open-plan kitchen and living area during first-fix works inside a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-kitchen-cabinetry-finished.webp',
        alt: 'Finished kitchen with sage cabinetry and mosaic splashback in a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-bathroom-patterned-tile.webp',
        alt: 'Finished bathroom with patterned tiled shower wall in a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-bathroom-walk-in-shower.webp',
        alt: 'Finished bathroom with walk-in shower and floating vanity in a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-staircase-finished.webp',
        alt: 'Finished interior staircase with geometric metal balustrade in a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-living-room-finished.webp',
        alt: 'Finished open-plan living room and kitchen with wood flooring in a Lanucia 6 villa, La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-living-room-pool-view.webp',
        alt: 'Living room of a finished Lanucia 6 villa in La Nucía looking out over the private pool',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-pool-garden-aerial.webp',
        alt: 'Elevated view of a finished Lanucia 6 villa pool and landscaped garden in La Nucía',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-urbanization-driveway.webp',
        alt: 'Finished paved driveway of the gated Lanucia 6 urbanization in La Nucía, Alicante',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-exterior-facade.webp',
        alt: 'Completed two-storey facade of a Lanucia 6 villa in La Nucía with wood-slat cladding and roof terrace',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-pool-terrace.webp',
        alt: 'Completed Lanucia 6 villa in La Nucía with private 3×8 m pool, terrace and rooftop solarium staircase',
        caption: 'Finished villa — private pool, terrace and solarium access.',
      },
      {
        src: '/images/projects/lanucia-6/skyline-engineering-villa-la-nucia-urbanization-aerial-view.webp',
        alt: 'Aerial view of the gated Lanucia 6 urbanization in La Nucía showing all six villas with private pools',
        caption: 'Drone view of the finished, closed urbanization of six villas.',
      },
    ],
  },
];
