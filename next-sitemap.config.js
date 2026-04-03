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
};

