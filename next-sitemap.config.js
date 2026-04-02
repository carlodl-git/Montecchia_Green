/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.lamontecchiagreen.it',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

