'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { BRAND_LOGO_ALT_EN, BRAND_LOGO_ALT_IT, BRAND_LOGO_SRC } from '@/lib/site-images';

export default function Navbar() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const [open, setOpen] = useState(false);

  const year = useMemo(() => new Date().getFullYear(), []);
  const prefix = isEn ? '/en' : '';

  const navItems = [
    { href: `${prefix}/chi-siamo`, label: isEn ? 'About' : 'Chi siamo' },
    { href: `${prefix}/ristorante`, label: isEn ? 'Restaurant' : 'Ristorante' },
    { href: `${prefix}/menu`, label: 'Menu' },
    { href: `${prefix}/matrimoni`, label: isEn ? 'Weddings' : 'Matrimoni' },
    { href: `${prefix}/eventi-aziendali`, label: isEn ? 'Corporate' : 'Aziende' },
    { href: `${prefix}/prenota`, label: isEn ? 'Book a table' : 'Prenota' },
  ];

  function isActive(href: string) {
    if (!pathname) return false;
    if (pathname === href) return true;
    return pathname.startsWith(href + '/');
  }

  return (
    <header className="sticky top-0 z-[50]">
      <div className="border-b border-green-dark/12 bg-warm-white shadow-[0_1px_0_rgba(45,74,62,0.06)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:py-4">
          <Link
            href={isEn ? '/en' : '/'}
            className="flex shrink-0 items-center rounded-lg p-1 no-underline transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid/50"
            aria-label="La Montecchia Green — Home"
            onClick={() => setOpen(false)}
          >
            <Image
              src={BRAND_LOGO_SRC}
              alt={isEn ? BRAND_LOGO_ALT_EN : BRAND_LOGO_ALT_IT}
              width={320}
              height={115}
              priority
              sizes="(max-width: 768px) 240px, 280px"
              className="h-12 w-auto sm:h-14 md:h-[3.75rem]"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:gap-6 md:flex" aria-label="Navigazione principale">
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm lg:text-base font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'text-green-dark'
                    : 'text-text-dark/85 hover:text-green-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={`${prefix}/prenota`}
              className="rounded-full bg-green-dark px-5 py-2.5 text-sm lg:text-base font-semibold text-warm-white shadow-sm transition-colors hover:bg-green-mid"
            >
              {isEn ? 'Book' : 'Prenota'}
            </Link>

            <Link
              href={isEn ? '/' : '/en'}
              className="text-sm lg:text-base font-semibold text-text-dark/85 hover:text-green-dark transition-colors"
              aria-label={isEn ? 'Versione italiana' : 'English version'}
            >
              {isEn ? 'IT' : 'EN'}
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-green-dark/15 bg-warm-white text-text-dark shadow-sm hover:bg-cream/80"
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" strokeWidth={2.25} /> : <Menu className="h-6 w-6" strokeWidth={2.25} />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden border-t border-green-dark/10 bg-warm-white">
            <div className="mx-auto max-w-6xl px-4 py-5">
              <div className="flex flex-col gap-4">
                {navItems.slice(0, -1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-semibold transition-colors ${
                      isActive(item.href) ? 'text-green-dark' : 'text-text-dark/90 hover:text-green-dark'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={`${prefix}/prenota`}
                  className="rounded-full bg-green-dark px-5 py-3 text-center text-lg font-semibold text-warm-white shadow-sm transition-colors hover:bg-green-mid"
                  onClick={() => setOpen(false)}
                >
                  {isEn ? 'Book' : 'Prenota'}
                </Link>
                <div className="pt-1 text-sm text-text-mid">
                  © {year} La Montecchia Green
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

