# SKYLINE Engineering — Website

A production-ready Next.js (App Router, TypeScript, Tailwind, Framer Motion)
marketing and lead-generation website for SKYLINE Engineering, a villa
design-and-build company in Benidorm, Spain.

Five pages: Home, Villas, Process, About, Contact. Primary goal: convert
visitors into qualified villa leads via the contact form and WhatsApp.

---

## 1. Project structure

```
app/
  layout.tsx          Root layout, fonts, global metadata, JSON-LD
  page.tsx             Home
  villas/page.tsx       Villas
  process/page.tsx      Process
  about/page.tsx        About
  contact/page.tsx      Contact
  api/contact/route.ts  Server-side lead form handler
  sitemap.ts / robots.ts
components/
  layout/     Navbar, Footer
  sections/   Hero, CTASection, ProcessTimeline, VillaGrid, ContactForm, etc.
  ui/         SectionHeading, VillaCard, WhatsAppButton
data/
  site.ts     Global site config (nav, region, WhatsApp helper)
  villas.ts   Villa concepts + price tiers
  process.ts  Process stage copy
public/
  images/     Replace placeholder folders with real assets (see checklist)
deploy/
  nginx.conf  Reverse proxy config for Hetzner + Cloudflare
```

## 2. Local development

Requires Node.js 18.18+ (20 LTS recommended).

```bash
npm install
cp .env.example .env.local   # fill in values, see below
npm run dev
```

Open http://localhost:3000

## 3. Environment variables (`.env.local`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata/sitemap/OG tags |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | International format, digits only (e.g. `34600000000`). Leave empty to hide/disable WhatsApp links until set. |
| `CONTACT_INBOX_EMAIL` | Where you want leads delivered (wire into `app/api/contact/route.ts`) |
| `CONTACT_FROM_EMAIL` | Verified sender on `skylineengineering.es` |
| `RESEND_API_KEY` | Resend secret used only by the server to deliver form submissions |
| `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_META_PIXEL_ID` | Only load these client-side after cookie consent (see §7) |

Never commit `.env.local`.

## 4. Production build

```bash
npm run build
npm run start   # runs `next start` on port 3000
```

Do not use `next dev` in production.

## 5. Deployment to Hetzner behind Nginx + Cloudflare

**Architecture:** Internet → Cloudflare → Nginx → Next.js (Node.js)

1. Provision a Hetzner VPS (Ubuntu 22.04/24.04 recommended).
2. Install Node.js 20 LTS, Nginx, and a process manager (e.g. `pm2` or a
   systemd service) to keep `next start` running and restart on crash/boot.
3. Clone the repo, `npm install --omit=dev` is not sufficient since the build
   needs devDependencies — run `npm install`, then `npm run build`.
4. Start the app: `pm2 start npm --name skyline -- start` (or a systemd unit
   running `npm run start` in the project directory with `.env.local` loaded).
5. Copy `deploy/nginx.conf` to `/etc/nginx/sites-available/`, symlink into
   `sites-enabled/`, update `server_name`, then `nginx -t && systemctl reload nginx`.
6. Point your domain's DNS to Cloudflare, then Cloudflare to your Hetzner IP
   (orange-cloud proxied).
7. In Cloudflare: set SSL/TLS mode to **Full (strict)** and install a
   Cloudflare Origin CA certificate on the server (referenced in
   `deploy/nginx.conf`). Enable "Always Use HTTPS", enable WAF/bot protection,
   and add a rate-limiting rule for `/api/contact`.
8. Verify: HTTPS loads, all 5 pages render, contact form submits successfully,
   WhatsApp button opens WhatsApp with the correct number.

## 6. Replacing placeholder images/text (checklist)

- [x] `public/images/hero/villa-hero.jpg` — approved hero visual
- [x] `public/images/concepts/villa-{aura,horizon,panorama,signature}.jpg` —
      architectural visualizations (clearly concepts, not built projects)
- [x] `public/images/team/denys-druz.jpg` — authentic founder photograph
- [x] `data/site.ts` — real phone, messaging channels, e-mail and social links
- [ ] `.env.local` — set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the real number
- [x] `app/api/contact/route.ts` — Resend delivery is implemented; production still
      requires a verified sender and `RESEND_API_KEY`
- [x] Legal pages — Privacy Policy, Cookie Policy and Legal Notice are linked
      from the footer and include the supplied company details
      (required for EU/GDPR compliance)
- [ ] Verify the "25+ years / 3+ years in Spain" stats in
      `components/sections/EngineeringStats.tsx` are accurate — do not launch
      with unverified figures

## 7. Cookies / GDPR

No non-essential cookies (analytics, Meta Pixel) are loaded by default. When
you add a consent banner, gate the GA4/Meta Pixel scripts behind consent and
only read `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_META_PIXEL_ID` after the user
opts in. Draft real Privacy Policy, Cookie Policy and Legal Notice pages
before launch — the footer currently only has placeholder labels.

## 8. SEO checklist

- [x] Per-page metadata (title, description, canonical) — see each `page.tsx`
- [x] Open Graph + Twitter metadata — `app/layout.tsx`
- [x] `sitemap.xml` — `app/sitemap.ts` (auto-generated from `NEXT_PUBLIC_SITE_URL`)
- [x] `robots.txt` — `app/robots.ts`
- [x] JSON-LD (Organization, LocalBusiness, Service, WebSite) — `app/layout.tsx`
- [x] Add real Open Graph image (`public/images/og-cover.jpg`, 1200×630) and
      reference it in `metadata.openGraph.images`
- [ ] Submit sitemap to Google Search Console once the site is live
- [ ] Confirm `NEXT_PUBLIC_SITE_URL` is set to the real production domain
      before build (metadata/canonical URLs are derived from it)

## 9. Performance notes

- Hero image uses `next/image` with `priority` — this is the LCP element, so
  keep the source file optimized (compressed JPEG/WebP, appropriately sized).
- All below-the-fold images use `next/image` with `loading="lazy"`.
- Motion respects `prefers-reduced-motion` (see `app/globals.css`).
- Run `npm run build` and check the output for bundle size warnings before
  deploying; run Lighthouse against the production build, not `next dev`.
