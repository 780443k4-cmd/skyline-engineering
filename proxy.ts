import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/data/seo';

function preferredLocale(request: NextRequest) {
  const accepted = request.headers.get('accept-language')?.toLowerCase() || '';
  for (const part of accepted.split(',')) {
    const language = part.trim().split(';')[0].split('-')[0];
    if (locales.includes(language as (typeof locales)[number])) return language;
  }
  // AUD-002: Ukrainian is the site's primary language (Ukrainian diaspora in
  // Europe first, Russian-speaking diaspora second) — the no-match fallback
  // must resolve to /uk, not /en, or the root redirect silently contradicts
  // that decision for every visitor whose Accept-Language doesn't match.
  return 'uk';
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ['/((?!api|_next|images|video|robots\\.txt|sitemap\\.xml|favicon\\.ico|.*\\..*).*)'],
};
