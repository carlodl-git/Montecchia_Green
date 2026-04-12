/** @type {import('next-sitemap').IConfig} */

const fs = require('fs');
const path = require('path');

const SITE = 'https://www.lamontecchiagreen.it';

// IT ↔ EN path mapping — keep in sync with lib/hreflang.ts
const pathMap = {
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

// Reverse map: EN path → IT path
const enToIt = Object.fromEntries(Object.entries(pathMap).map(([it, en]) => [en, it]));

function getAlternateRefs(itOrEn) {
  let itPath, enPath;
  if (itOrEn.startsWith('/en')) {
    enPath = itOrEn;
    itPath = enToIt[itOrEn];
  } else {
    itPath = itOrEn;
    enPath = pathMap[itOrEn];
  }
  if (!itPath || !enPath) return undefined;

  const itAbs = itPath === '/' ? SITE : `${SITE}${itPath}`;
  return [
    { href: itAbs, hreflang: 'it', hrefIsAbsolute: true },
    { href: `${SITE}${enPath}`, hreflang: 'en', hrefIsAbsolute: true },
    { href: itAbs, hreflang: 'x-default', hrefIsAbsolute: true },
  ];
}

// Blog post publication dates (hardcoded — source of truth for dateModified).
const blogDates = {
  '/blog/guida-vini-emo-capodilista': '2026-04-08',
  '/blog/cosa-mangiare-selvazzano-dentro': '2026-03-25',
  '/blog/aperitivo-colli-euganei': '2026-03-20',
  '/blog/team-building-padova': '2026-03-18',
  '/blog/location-matrimonio-padova': '2026-03-15',
  '/blog/cena-romantica-colli-euganei': '2026-03-12',
};

// File system path → logical route mapping for mtime lookup.
// next-sitemap sees /ristorante but the source file lives in app/(it)/ristorante/page.tsx
function sourceFileFor(routePath) {
  const isEn = routePath.startsWith('/en');
  const inner = isEn ? routePath.replace(/^\/en/, '') : routePath;
  const group = isEn ? '(en)/en' : '(it)';
  // Root
  if (inner === '/' || inner === '') {
    return path.join(__dirname, 'app', group, 'page.tsx');
  }
  return path.join(__dirname, 'app', group, inner.slice(1), 'page.tsx');
}

function mtimeIso(filePath, fallback) {
  try {
    const st = fs.statSync(filePath);
    return new Date(st.mtime).toISOString();
  } catch {
    return fallback || new Date().toISOString();
  }
}

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
    // Commento finale con pointer ai file LLM — visibile nel robots.txt.
    transformRobotsTxt: async (_ctx, robotsTxt) =>
      robotsTxt +
      '\n# AI / LLM agents — machine-readable summaries\n# https://www.lamontecchiagreen.it/llms.txt\n# https://www.lamontecchiagreen.it/llms-full.txt\n',
  },
  transform: async (_config, routePath) => {
    const normalised = routePath.replace(/^\/en/, '') || '/';
    const alternateRefs = getAlternateRefs(routePath);

    // 1. Homepage
    if (normalised === '/') {
      return {
        loc: routePath,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: mtimeIso(sourceFileFor(routePath)),
        ...(alternateRefs && { alternateRefs }),
      };
    }

    // 2. Blog index
    if (normalised === '/blog') {
      return {
        loc: routePath,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: mtimeIso(sourceFileFor(routePath)),
        ...(alternateRefs && { alternateRefs }),
      };
    }

    // 3. Blog articles — use hardcoded publication dates (or mtime fallback)
    if (normalised.startsWith('/blog/')) {
      const dateKey = normalised;
      const pubDate = blogDates[dateKey] || blogDates[enToIt[routePath]];
      const fallback = mtimeIso(sourceFileFor(routePath));
      return {
        loc: routePath,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: pubDate ? new Date(pubDate).toISOString() : fallback,
        ...(alternateRefs && { alternateRefs }),
      };
    }

    // 4. Hub service pages (high priority)
    const hubPages = ['/matrimoni', '/eventi-aziendali', '/ristorante', '/menu'];
    if (hubPages.includes(normalised)) {
      return {
        loc: routePath,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: mtimeIso(sourceFileFor(routePath)),
        ...(alternateRefs && { alternateRefs }),
      };
    }

    // 5. Secondary pages (chi-siamo, eventi, prenota, contatti, faq)
    const secondary = ['/chi-siamo', '/eventi', '/prenota', '/contatti', '/faq'];
    if (secondary.includes(normalised)) {
      return {
        loc: routePath,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: mtimeIso(sourceFileFor(routePath)),
        ...(alternateRefs && { alternateRefs }),
      };
    }

    // 6. Fallback (legal / edge routes)
    return {
      loc: routePath,
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: mtimeIso(sourceFileFor(routePath)),
      ...(alternateRefs && { alternateRefs }),
    };
  },
};
