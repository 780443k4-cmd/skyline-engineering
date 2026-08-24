# Technical SEO audit: SKYLINE Engineering ES

- **Date:** 2026-08-24
- **Project:** custom Next.js 16 / TypeScript / Vercel
- **Scope:** `/`, `/villas`, `/about`, `/process`, `/contact`, `robots.txt`, `sitemap.xml`, structured data, headings, images, internal links, and deploy/runtime constraints
- **CMS check:** Not applicable. The repository contains a custom Next.js app and no WordPress/CMS database, widget store, or menu database.

## Findings and actions

| Area | Finding | Action | Status |
| --- | --- | --- | --- |
| Metadata | Only the root layout supplied title, description, and canonical metadata, so commercial routes could share the same document metadata. | Added route layouts with unique title, description, and canonical for `/villas`, `/about`, `/process`, and `/contact`. | Fixed |
| Canonicals | Root canonical was present; child route canonicals were not explicit. | Added route-specific canonicals based on `metadataBase`. | Fixed |
| Robots | `/api/` is disallowed and sitemap is declared. | Kept the safe existing rule; no change required. | Pass |
| Sitemap | `lastModified: new Date()` changed every generated sitemap response even when content had not changed. | Removed the unstable timestamp; route URLs, monthly frequency, and priorities remain. | Fixed |
| Structured data | The business entity was marked as generic `LocalBusiness`. Social profiles were not linked in structured data. | Changed the business node to `GeneralContractor`, added stable `@id`, image, description, and `sameAs` from the existing social links. | Fixed |
| H1/H2 | Main commercial routes have one page H1. Shared section headings provide H2s on content-heavy routes; contact is a focused lead page without a required secondary H2. | No heading rewrite required. | Pass |
| Images and alt text | Meaningful hero, villa, and founder images use descriptive alt text. Logo and contact icons are decorative and use empty alt text. | Added lazy loading to external contact icons; preserved decorative empty alt text. | Fixed |
| Internal linking | Navbar and repeated CTA links connect the five main routes; footer links legal pages and social profiles. | No change required. | Pass |
| Speed signals | `next/image` is used for local images; hero image is priority; non-hero images are lazy where applicable. | No risky optimization or dependency added. | Pass with runtime caveat |

## Live/runtime checks

The public site and generated routes were available during the review. Local production build completed successfully after the changes. No Search Console, Analytics, CMS, or Vercel API credentials are connected, so crawl statistics, Core Web Vitals history, and indexed-page coverage cannot be verified from this workspace.

## Open questions / blockers

- Organic performance cannot be measured until Google Search Console and Analytics are connected.
- Language alternates/hreflang are not added because language switching is client-side and there are no distinct localized URL routes. This needs a content/architecture decision before implementation.
- The `25+ years` and `3+ years in Spain` claims remain outside new content recommendations until independently verified in the Knowledge Library.
- No paid Meta advertising was proposed or configured, per `00_SYSTEM/integrations.md`.
