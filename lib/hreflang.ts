// Helper per generare le entry hreflang di ogni pagina del sito.
// Single source of truth per la mappa IT ↔ EN. Sincronizzarla con
// next-sitemap.config.js (pathMap) se si aggiungono route.

import { CONTACT } from '@/lib/contact';

const SITE = CONTACT.site;

/** Mappa delle pagine IT verso le loro controparti EN. Le chiavi sono sempre
 *  i path IT (senza trailing slash, '/' per la home). */
export const IT_TO_EN: Record<string, string> = {
  '/': '/en',
  '/chi-siamo': '/en/about',
  '/ristorante': '/en/restaurant',
  '/menu': '/en/menu',
  '/matrimoni': '/en/weddings',
  '/eventi-aziendali': '/en/corporate-events',
  '/eventi': '/en/events',
  '/prenota': '/en/book',
  '/faq': '/en/faq',
  '/contatti': '/en/contact',
  '/blog': '/en/blog',
  '/blog/aperitivo-colli-euganei': '/en/blog/aperitivo-euganean-hills',
  '/blog/team-building-padova': '/en/blog/team-building-padua',
  '/blog/location-matrimonio-padova': '/en/blog/wedding-venue-padua',
  '/blog/cena-romantica-colli-euganei': '/en/blog/romantic-dinner-euganean-hills',
  '/blog/cosa-mangiare-selvazzano-dentro': '/en/blog/where-to-eat-selvazzano-dentro',
  '/blog/guida-vini-emo-capodilista': '/en/blog/guide-emo-capodilista-wines',
};

export const EN_TO_IT: Record<string, string> = Object.fromEntries(
  Object.entries(IT_TO_EN).map(([it, en]) => [en, it]),
);

/** Mappa dei vecchi slug EN (basati su italiano) verso i nuovi slug EN.
 *  Usata in next.config.js per i 301 e come fallback dopo il rename. */
export const LEGACY_EN_REDIRECTS: Record<string, string> = {
  '/en/chi-siamo': '/en/about',
  '/en/ristorante': '/en/restaurant',
  '/en/matrimoni': '/en/weddings',
  '/en/eventi-aziendali': '/en/corporate-events',
  '/en/eventi': '/en/events',
  '/en/prenota': '/en/book',
  '/en/contatti': '/en/contact',
};

/** Costruisce l'URL assoluto, gestendo la home che si scrive come '' in
 *  canonical (senza trailing slash). */
function toAbs(path: string): string {
  if (path === '/') return SITE;
  return `${SITE}${path}`;
}

export type Alternates = {
  canonical: string;
  languages: {
    it: string;
    en: string;
    'x-default': string;
  };
};

/** Dato un path IT (es. '/matrimoni' o '/blog/team-building-padova'),
 *  ritorna l'oggetto `alternates` pronto da spreddare in `metadata`. */
export function hreflangForIt(itPath: string): Alternates {
  const enPath = IT_TO_EN[itPath];
  if (!enPath) {
    throw new Error(
      `hreflangForIt: path IT non mappato: ${itPath}. Aggiungi la entry in IT_TO_EN.`,
    );
  }
  return {
    canonical: toAbs(itPath),
    languages: {
      it: toAbs(itPath),
      en: toAbs(enPath),
      'x-default': toAbs(itPath),
    },
  };
}

/** Dato un path EN (es. '/en/weddings'), ritorna l'oggetto alternates. */
export function hreflangForEn(enPath: string): Alternates {
  const itPath = EN_TO_IT[enPath];
  if (!itPath) {
    throw new Error(
      `hreflangForEn: path EN non mappato: ${enPath}. Aggiungi la entry in IT_TO_EN.`,
    );
  }
  return {
    canonical: toAbs(enPath),
    languages: {
      it: toAbs(itPath),
      en: toAbs(enPath),
      'x-default': toAbs(itPath),
    },
  };
}
