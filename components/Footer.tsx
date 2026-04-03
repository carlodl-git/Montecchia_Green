'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BRAND_LOGO_ALT_IT, BRAND_LOGO_ALT_EN, BRAND_LOGO_SRC } from '@/lib/site-images';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'La Montecchia Green – Bistrot & Eventi',
  url: 'https://www.lamontecchiagreen.it',
  email: 'lamontecchiagreen@gmail.com',
  telephone: ['+390498058464', '+393346774483'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Montecchia, 12',
    addressLocality: 'Selvazzano Dentro',
    addressRegion: 'PD',
    postalCode: '35030',
    addressCountry: 'IT',
  },
  sameAs: [
    'https://www.instagram.com/lamontecchiagreen/',
    'https://www.facebook.com/p/La-Montecchia-Green-100064785711603/',
    'https://www.tripadvisor.it/Restaurant_Review-g1967181-d27689734-Reviews-La_Montecchia_Green-Selvazzano_Dentro_Province_of_Padua_Veneto.html',
  ],
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TripAdvisorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 4.48 2 7.5c0 1.67 1.12 3.16 2.88 4.22C4.33 13.17 4 14.55 4 16c0 .34.03.67.07 1H2l2 3 2-3h-.07c.55 2.36 2.7 4 5.07 4s4.52-1.64 5.07-4H16l2 3 2-3h-2.07c.04-.33.07-.66.07-1 0-1.45-.33-2.83-.88-4.28C18.88 10.66 20 9.17 20 7.5 20 4.48 16.42 2 12 2zm-4 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const prefix = isEn ? '/en' : '';

  return (
    <footer className="border-t border-black/5 bg-warm-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href={isEn ? '/en' : '/'}
              className="inline-block rounded-lg p-1 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid/45"
            >
              <Image
                src={BRAND_LOGO_SRC}
                alt={isEn ? BRAND_LOGO_ALT_EN : BRAND_LOGO_ALT_IT}
                width={280}
                height={100}
                sizes="(max-width: 768px) 220px, 260px"
                className="h-11 w-auto sm:h-12 md:h-14"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-mid">
              {isEn
                ? <>Bistrot &amp; Events in the green of Golf della Montecchia.<br />Open to everyone.</>
                : <>Bistrot &amp; Eventi nel verde del Golf della Montecchia.<br />Aperto a tutti.</>
              }
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/lamontecchiagreen"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-dark/15 bg-cream text-text-mid transition-colors hover:border-green-dark/30 hover:text-green-dark"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/p/La-Montecchia-Green-100064785711603/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-dark/15 bg-cream text-text-mid transition-colors hover:border-green-dark/30 hover:text-green-dark"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.tripadvisor.it/Restaurant_Review-g1967181-d27689734-Reviews-La_Montecchia_Green-Selvazzano_Dentro_Province_of_Padua_Veneto.html"
                target="_blank"
                rel="noreferrer"
                aria-label="TripAdvisor"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-dark/15 bg-cream text-text-mid transition-colors hover:border-green-dark/30 hover:text-[#00AF87]"
              >
                <TripAdvisorIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/393346774483"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-dark/15 bg-cream text-text-mid transition-colors hover:border-green-dark/30 hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link rapidi */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-green-dark/60">
              {isEn ? 'Quick links' : 'Link rapidi'}
            </div>
            <div className="flex flex-col gap-2.5">
              {(isEn
                ? [
                    { href: '/en/chi-siamo', label: 'About us' },
                    { href: '/en/ristorante', label: 'Restaurant' },
                    { href: '/en/menu', label: 'Menu' },
                    { href: '/en/matrimoni', label: 'Weddings' },
                    { href: '/en/eventi-aziendali', label: 'Corporate events' },
                    { href: '/en/prenota', label: 'Book a table' },
                    { href: '/en/contatti', label: 'Contacts' },
                  ]
                : [
                    { href: '/chi-siamo', label: 'Chi siamo' },
                    { href: '/ristorante', label: 'Ristorante' },
                    { href: '/menu', label: 'Menu' },
                    { href: '/matrimoni', label: 'Matrimoni' },
                    { href: '/eventi-aziendali', label: 'Eventi aziendali' },
                    { href: '/prenota', label: 'Prenota' },
                    { href: '/contatti', label: 'Contatti' },
                  ]
              ).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-text-mid transition-colors hover:text-green-dark"
                >
                  <span className="h-px w-4 bg-green-dark/20 transition-all group-hover:w-6 group-hover:bg-green-dark" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contatti */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-green-dark/60">
              {isEn ? 'Contact' : 'Contatti'}
            </div>
            <div className="space-y-3 text-sm text-text-mid">
              <div className="leading-relaxed">
                Via Montecchia, 12<br />
                35030 Selvazzano Dentro (PD)
              </div>
              <div>
                <a className="hover:text-green-dark transition-colors" href="tel:+390498058464">
                  +39 049 805 8464
                </a>
                {' / '}
                <a className="hover:text-green-dark transition-colors" href="tel:+393346774483">
                  +39 334 677 4483
                </a>
              </div>
              <div>
                <a
                  className="hover:text-green-dark transition-colors"
                  href="mailto:lamontecchiagreen@gmail.com"
                >
                  lamontecchiagreen@gmail.com
                </a>
              </div>

              {/* CTA WhatsApp nel footer */}
              <a
                href={isEn
                  ? 'https://wa.me/393346774483?text=Hello%20La%20Montecchia%20Green%2C%20I%20would%20like%20to%20book%20or%20ask%20for%20info.'
                  : 'https://wa.me/393346774483?text=Ciao%20La%20Montecchia%20Green%2C%20vorrei%20prenotare%20o%20chiedere%20info.'
                }
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {isEn ? 'Message us on WhatsApp' : 'Scrivici su WhatsApp'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-green-dark/8 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-text-mid/70">
            © {new Date().getFullYear()} La Montecchia Green. {isEn ? 'All rights reserved.' : 'Tutti i diritti riservati.'}
          </div>
          <div className="text-xs text-text-mid/70">
            <Link className="hover:text-green-dark transition-colors" href={`${prefix}/contatti`}>
              {isEn ? 'How to get here' : 'Come arrivare'}
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </footer>
  );
}
