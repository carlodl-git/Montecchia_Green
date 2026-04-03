import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import HtmlLang from '@/components/HtmlLang';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lamontecchiagreen.it'),
  title: {
    default: 'La Montecchia Green — Bistrot & Eventi a Selvazzano Dentro, Padova',
    template: '%s | La Montecchia Green',
  },
  description:
    "Ristorante e bistrot al Golf della Montecchia, Selvazzano Dentro (PD). Cucina italiana con ingredienti locali, aperto a tutti. Ideale per eventi privati, matrimoni e cene aziendali vicino a Padova.",
  keywords: [
    'La Montecchia Green',
    'ristorante Selvazzano Dentro',
    'bistrot golf Montecchia',
    'location matrimoni Padova',
    'location eventi aziendali Padova',
    'aperitivo Padova',
    'ristorante location suggestiva Padova',
    'ristorante Colli Euganei',
    'cena aziendale Padova',
    'team building Padova',
    'venue matrimoni Padova',
    'aperitivo sul green Padova',
    'location feste private Padova',
    'ristorante panoramico Padova',
    'eventi privati Selvazzano Dentro',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.lamontecchiagreen.it',
    siteName: 'La Montecchia Green',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it',
    languages: {
      'it': 'https://www.lamontecchiagreen.it',
      'en': 'https://www.lamontecchiagreen.it/en',
      'x-default': 'https://www.lamontecchiagreen.it',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="it" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {gaMeasurementId ? (
          <>
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
        <HtmlLang />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-warm-white focus:text-text-dark focus:px-3 focus:py-2 focus:rounded-md"
        >
          Salta al contenuto
        </a>

        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />

        {/* Schema principale per AI SEO */}
        <SchemaOrg variant="restaurant" />
      </body>
    </html>
  );
}

