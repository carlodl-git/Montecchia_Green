import * as CookieConsent from 'vanilla-cookieconsent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const syncGtagConsent = () => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  const analyticsAccepted = CookieConsent.acceptedCategory('analytics');
  const functionalAccepted = CookieConsent.acceptedCategory('functional');
  window.gtag('consent', 'update', {
    analytics_storage: analyticsAccepted ? 'granted' : 'denied',
    functionality_storage: functionalAccepted ? 'granted' : 'denied',
    personalization_storage: functionalAccepted ? 'granted' : 'denied',
  });
};

export const cookieConsentConfig: Parameters<typeof CookieConsent.run>[0] = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onConsent: syncGtagConsent,
  onChange: syncGtagConsent,

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          { name: /^_ga/ },
          { name: '_gid' },
          { name: /^_gat/ },
        ],
      },
      services: {
        ga4: {
          label: 'Google Analytics 4',
          cookies: [
            { name: /^_ga/ },
            { name: '_gid' },
          ],
        },
      },
    },
    functional: {
      services: {
        googleMaps: {
          label: 'Google Maps',
        },
      },
    },
  },

  language: {
    default: 'it',
    autoDetect: 'document',
    translations: {
      it: {
        consentModal: {
          title: 'Rispettiamo la tua privacy',
          description:
            'Usiamo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso usiamo anche cookie di analisi (Google Analytics) e funzionali (mappa Google Maps incorporata nella pagina contatti). Puoi accettare, rifiutare o personalizzare le tue scelte. Per saperne di più consulta la nostra <a href="/cookie-policy">Cookie Policy</a>.',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          showPreferencesBtn: 'Gestisci preferenze',
          closeIconLabel: 'Chiudi',
          footer:
            '<a href="/privacy-policy">Privacy Policy</a> &middot; <a href="/cookie-policy">Cookie Policy</a>',
        },
        preferencesModal: {
          title: 'Preferenze cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          serviceCounterLabel: 'Servizi',
          sections: [
            {
              title: 'Uso dei cookie',
              description:
                'Utilizziamo cookie per garantire il funzionamento del sito e, con il tuo consenso, per analisi e servizi di terze parti come Google Maps. Puoi modificare le tue scelte in qualsiasi momento da questa pagina.',
            },
            {
              title: 'Cookie strettamente necessari',
              description:
                'Indispensabili al funzionamento del sito (sessione, sicurezza, preferenze di consenso). Non richiedono il tuo consenso ai sensi della normativa vigente.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookie analitici',
              description:
                'Ci aiutano a capire come gli utenti utilizzano il sito (Google Analytics 4) per migliorarlo. I dati sono raccolti in forma aggregata e anonimizzata.',
              linkedCategory: 'analytics',
              cookieTable: {
                caption: 'Tabella cookie analitici',
                headers: {
                  name: 'Cookie',
                  domain: 'Dominio',
                  desc: 'Descrizione',
                  exp: 'Scadenza',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'lamontecchiagreen.it',
                    desc: 'Google Analytics &mdash; distingue gli utenti unici',
                    exp: '2 anni',
                  },
                  {
                    name: '_ga_*',
                    domain: 'lamontecchiagreen.it',
                    desc: 'Google Analytics &mdash; mantiene lo stato della sessione',
                    exp: '2 anni',
                  },
                ],
              },
            },
            {
              title: 'Cookie funzionali',
              description:
                'Servizi di terze parti incorporati nelle pagine, come la mappa di Google Maps presente nella pagina contatti. Senza il tuo consenso la mappa non viene caricata.',
              linkedCategory: 'functional',
              cookieTable: {
                caption: 'Tabella cookie funzionali',
                headers: {
                  name: 'Cookie',
                  domain: 'Dominio',
                  desc: 'Descrizione',
                  exp: 'Scadenza',
                },
                body: [
                  {
                    name: 'NID',
                    domain: 'google.com',
                    desc: 'Google &mdash; preferenze e funzionamento delle mappe',
                    exp: '6 mesi',
                  },
                ],
              },
            },
            {
              title: 'Maggiori informazioni',
              description:
                'Per qualsiasi domanda sull&apos;uso dei cookie consulta la nostra <a href="/cookie-policy">Cookie Policy</a> e la <a href="/privacy-policy">Privacy Policy</a>.',
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: 'We respect your privacy',
          description:
            'We use technical cookies necessary for the site to work. With your consent we also use analytics cookies (Google Analytics) and functional cookies (Google Maps embed on the contact page). You can accept, reject or customise your choices. Read more in our <a href="/en/cookie-policy">Cookie Policy</a>.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          closeIconLabel: 'Close',
          footer:
            '<a href="/en/privacy-policy">Privacy Policy</a> &middot; <a href="/en/cookie-policy">Cookie Policy</a>',
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          serviceCounterLabel: 'Services',
          sections: [
            {
              title: 'Use of cookies',
              description:
                'We use cookies to make the site work and, with your consent, for analytics and third-party services such as Google Maps. You can change your choices at any time on this page.',
            },
            {
              title: 'Strictly necessary cookies',
              description:
                'Required for the website to function (session, security, consent preferences). No consent is required under applicable law.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics cookies',
              description:
                'These help us understand how users interact with the website (Google Analytics 4) so we can improve it. Data is collected in aggregated and anonymised form.',
              linkedCategory: 'analytics',
              cookieTable: {
                caption: 'Analytics cookies table',
                headers: {
                  name: 'Cookie',
                  domain: 'Domain',
                  desc: 'Description',
                  exp: 'Expiration',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'lamontecchiagreen.it',
                    desc: 'Google Analytics &mdash; distinguishes unique users',
                    exp: '2 years',
                  },
                  {
                    name: '_ga_*',
                    domain: 'lamontecchiagreen.it',
                    desc: 'Google Analytics &mdash; keeps the session state',
                    exp: '2 years',
                  },
                ],
              },
            },
            {
              title: 'Functional cookies',
              description:
                'Third-party services embedded in the pages, such as the Google Maps embed on the contact page. The map is not loaded without your consent.',
              linkedCategory: 'functional',
              cookieTable: {
                caption: 'Functional cookies table',
                headers: {
                  name: 'Cookie',
                  domain: 'Domain',
                  desc: 'Description',
                  exp: 'Expiration',
                },
                body: [
                  {
                    name: 'NID',
                    domain: 'google.com',
                    desc: 'Google &mdash; Maps preferences and functionality',
                    exp: '6 months',
                  },
                ],
              },
            },
            {
              title: 'More information',
              description:
                'For any question about the use of cookies, please read our <a href="/en/cookie-policy">Cookie Policy</a> and <a href="/en/privacy-policy">Privacy Policy</a>.',
            },
          ],
        },
      },
    },
  },
};
