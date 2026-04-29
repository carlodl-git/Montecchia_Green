'use client';

import { useEffect, useState } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import { MapPin, ExternalLink } from 'lucide-react';

type Lang = 'it' | 'en';

const COPY: Record<Lang, {
  title: string;
  description: string;
  accept: string;
  open: string;
}> = {
  it: {
    title: 'Mappa Google &mdash; consenso necessario',
    description:
      'Per mostrare la mappa incorporata da Google ci serve il tuo consenso ai cookie funzionali. Caricando la mappa, Google imposta cookie di terze parti sul dominio google.com.',
    accept: 'Accetta cookie funzionali e mostra mappa',
    open: 'Apri su Google Maps',
  },
  en: {
    title: 'Google Map &mdash; consent required',
    description:
      'To display the map embedded from Google we need your consent for functional cookies. When the map is loaded, Google sets third-party cookies on the google.com domain.',
    accept: 'Accept functional cookies and show map',
    open: 'Open on Google Maps',
  },
};

const EXTERNAL_URL =
  'https://www.google.com/maps/search/?api=1&query=La+Montecchia+Green%2C+Via+Montecchia+12%2C+Selvazzano+Dentro+PD';

export default function MapsEmbed({ src, lang = 'it' }: { src: string; lang?: Lang }) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const update = () => setAccepted(CookieConsent.acceptedCategory('functional'));
    update();
    window.addEventListener('cc:onConsent', update);
    window.addEventListener('cc:onChange', update);
    return () => {
      window.removeEventListener('cc:onConsent', update);
      window.removeEventListener('cc:onChange', update);
    };
  }, []);

  if (accepted) {
    return (
      <iframe
        title="Google Maps - La Montecchia Green"
        src={src}
        width="100%"
        height="420"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    );
  }

  const t = COPY[lang];

  const handleAccept = () => {
    CookieConsent.acceptCategory(['necessary', 'functional']);
  };

  return (
    <div className="flex h-[420px] w-full flex-col items-center justify-center gap-4 bg-cream/60 p-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-dark/10">
        <MapPin className="h-6 w-6 text-green-dark" aria-hidden="true" />
      </div>
      <div>
        <div
          className="font-serif text-lg font-semibold text-green-dark"
          dangerouslySetInnerHTML={{ __html: t.title }}
        />
        <p className="mt-2 max-w-md text-sm text-text-mid">{t.description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-full bg-green-dark px-5 py-2.5 text-sm font-semibold text-warm-white transition-colors hover:bg-green-mid"
        >
          {t.accept}
        </button>
        <a
          href={EXTERNAL_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-green-dark/30 px-5 py-2.5 text-sm font-semibold text-green-dark transition-colors hover:bg-green-dark/5"
        >
          {t.open}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
