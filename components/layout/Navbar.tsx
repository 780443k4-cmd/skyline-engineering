'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/data/site';
import { languages, useLanguage } from '@/components/i18n/LanguageProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const nav = site.nav.map((item, index) => ({ ...item, label: t.common.nav[index] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-[background-color,border-color,padding,backdrop-filter] duration-200 ease-out ${
        scrolled
          ? 'bg-warmwhite/95 backdrop-blur border-line py-3'
          : 'bg-warmwhite/80 backdrop-blur-sm border-transparent py-5'
      }`}
    >
      <div className="container-content flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-xl md:text-2xl tracking-wide"
        >
          <Image
            src="/images/logo/skyline-mark.png"
            alt=""
            width={140}
            height={120}
            className="h-8 w-auto md:h-9"
            priority
          />
          <span className="hidden md:inline">{site.name}</span>
          <span className="md:hidden">{site.shortName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-sans text-sm tracking-wide">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-graphite hover:text-skyline transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-block border border-ink px-5 py-2.5 text-xs tracking-widest2 uppercase hover:bg-ink hover:text-warmwhite transition-colors"
          >
            {t.common.start}
          </Link>
          <label className="sr-only" htmlFor="desktop-language">Language</label>
          <select
            id="desktop-language"
            value={locale}
            onChange={(event) => setLocale(event.target.value as typeof locale)}
            className="bg-transparent border border-line px-3 py-2.5 text-xs tracking-widest2 cursor-pointer focus:outline-none focus:border-skyline"
            aria-label="Language"
          >
            {languages.map((language) => <option key={language.code} value={language.code}>{language.short}</option>)}
          </select>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <select
            value={locale}
            onChange={(event) => setLocale(event.target.value as typeof locale)}
            className="bg-transparent border border-line px-2 py-2 text-xs"
            aria-label="Language"
          >
            {languages.map((language) => <option key={language.code} value={language.code}>{language.short}</option>)}
          </select>
          <button
          aria-label={menuOpen ? t.common.close : t.common.open}
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, transform: 'scaleY(0.97)' }}
            animate={{ opacity: 1, transform: 'scaleY(1)' }}
            exit={{ opacity: 0, transform: 'scaleY(0.97)' }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="motion-surface md:hidden absolute left-0 right-0 top-full origin-top overflow-hidden border-t border-line bg-warmwhite"
          >
            <div className="container-content flex flex-col py-6 gap-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 border border-ink px-5 py-3 text-center text-xs tracking-widest2 uppercase"
              >
                {t.common.start}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
