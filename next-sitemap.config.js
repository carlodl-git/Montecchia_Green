/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.lamontecchiagreen.it',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
  },
  alternateRefs: [
    { href: 'https://www.lamontecchiagreen.it', hreflang: 'it' },
    { href: 'https://www.lamontecchiagreen.it/en', hreflang: 'en' },
  ],
  transform: async (config, path) => {
    // Strip /en prefix for matching purposes
    const normalised = path.replace(/^\/en/, '') || '/';

    // Homepage
    if (normalised === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
    }

    // Blog index
    if (normalised === '/blog') {
      return { loc: path, changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() };
    }

    // Individual blog articles
    if (normalised.startsWith('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() };
    }

    // Static service pages
    const staticPages = [
      '/ristorante', '/matrimoni', '/eventi-aziendali', '/menu',
      '/chi-siamo', '/faq', '/contatti', '/prenota', '/eventi',
    ];
    if (staticPages.includes(normalised)) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }

    // Fallback for any other pages
    return { loc: path, changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() };
  },
};
