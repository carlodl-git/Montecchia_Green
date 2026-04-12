/** @type {import('next').NextConfig} */

// Legacy EN slug → new EN slug (keeps old Google-indexed URLs alive).
// Keep in sync with lib/hreflang.ts LEGACY_EN_REDIRECTS.
const LEGACY_EN_REDIRECTS = [
  { source: '/en/chi-siamo', destination: '/en/about', permanent: true },
  { source: '/en/chi-siamo/:path*', destination: '/en/about/:path*', permanent: true },
  { source: '/en/ristorante', destination: '/en/restaurant', permanent: true },
  { source: '/en/ristorante/:path*', destination: '/en/restaurant/:path*', permanent: true },
  { source: '/en/matrimoni', destination: '/en/weddings', permanent: true },
  { source: '/en/matrimoni/:path*', destination: '/en/weddings/:path*', permanent: true },
  { source: '/en/eventi-aziendali', destination: '/en/corporate-events', permanent: true },
  { source: '/en/eventi-aziendali/:path*', destination: '/en/corporate-events/:path*', permanent: true },
  { source: '/en/eventi', destination: '/en/events', permanent: true },
  { source: '/en/eventi/:path*', destination: '/en/events/:path*', permanent: true },
  { source: '/en/prenota', destination: '/en/book', permanent: true },
  { source: '/en/prenota/:path*', destination: '/en/book/:path*', permanent: true },
  { source: '/en/contatti', destination: '/en/contact', permanent: true },
  { source: '/en/contatti/:path*', destination: '/en/contact/:path*', permanent: true },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Canonicalize apex → www (301).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'lamontecchiagreen.it' }],
        destination: 'https://www.lamontecchiagreen.it/:path*',
        permanent: true,
      },
      // http → https is handled by Vercel at the edge, but we still define
      // a safety-net rule for any non-Vercel deploy target.
      ...LEGACY_EN_REDIRECTS,
    ];
  },
  async headers() {
    return [
      {
        // HTML pages: short cache + revalidate on each request.
        source: '/((?!_next/static|_next/image|images|fonts).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        // Long-lived cache for static images.
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Long-lived cache for next static assets (already hashed).
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
