import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import '../globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import { CONTACT } from '@/lib/contact';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.site),
  title: {
    default: 'La Montecchia Green | Lounge Bar Restaurant near Padua, Italy',
    template: '%s | La Montecchia Green',
  },
  description:
    'Lounge bar, restaurant & events at Golf della Montecchia, 10 min from Padua. Italian cuisine, weddings, aperitivo. Book on WhatsApp.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${CONTACT.site}/en`,
    siteName: 'La Montecchia Green',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${CONTACT.site}/en`,
    languages: {
      it: CONTACT.site,
      en: `${CONTACT.site}/en`,
      'x-default': CONTACT.site,
    },
  },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" title="LLM info" href="/llms.txt" />
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-gtag"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { page_path: window.location.pathname });
              `,
              }}
            />
          </>
        ) : null}
      </head>
      <body className="min-h-dvh bg-cream font-sans text-text-dark antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-warm-white focus:text-text-dark focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />

        {/* Schema globali (EN) */}
        <SchemaOrg variant="restaurant" lang="en" />
        <SchemaOrg variant="webSite" lang="en" />
      </body>
    </html>
  );
}
