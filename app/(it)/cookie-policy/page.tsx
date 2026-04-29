import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import { hreflangForIt } from '@/lib/hreflang';

export const metadata = {
  title: 'Cookie Policy | La Montecchia Green',
  description:
    'Informativa sull’uso dei cookie del sito lamontecchiagreen.it: cookie tecnici, analitici e di terze parti. Gestione del consenso ai sensi del Regolamento UE 2016/679 e del Provvedimento Garante 10/6/2021.',
  alternates: hreflangForIt('/cookie-policy'),
  robots: { index: true, follow: true },
};

const analyticsCookies = [
  { name: '_ga', domain: 'lamontecchiagreen.it', desc: 'Google Analytics — distingue gli utenti unici', exp: '2 anni' },
  { name: '_ga_*', domain: 'lamontecchiagreen.it', desc: 'Google Analytics — mantiene lo stato della sessione', exp: '2 anni' },
];

const functionalCookies = [
  { name: 'NID', domain: 'google.com', desc: 'Google — preferenze e funzionamento delle mappe (Google Maps)', exp: '6 mesi' },
];

const technicalCookies = [
  { name: 'cc_cookie', domain: 'lamontecchiagreen.it', desc: 'Memorizza le preferenze di consenso ai cookie', exp: '6 mesi' },
];

export default function CookiePolicyPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Cookie Policy', href: '/cookie-policy' },
          ]}
        />
      </section>

      <section className="border-b border-green-dark/8 bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-green-dark/70">
                Informativa
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-green-dark md:text-5xl">
              Cookie Policy
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-4 max-w-2xl text-sm text-text-mid/80">Ultimo aggiornamento: 29 aprile 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-10 text-base leading-relaxed text-text-mid">

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cosa sono i cookie</h2>
            <p className="mt-3">
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente, dove
              vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Servono a far
              funzionare correttamente il sito, a migliorare l&apos;esperienza di navigazione e a raccogliere
              informazioni statistiche.
            </p>
            <p className="mt-3">
              Il sito <strong>lamontecchiagreen.it</strong> utilizza cookie tecnici e, previo consenso, cookie
              analitici e funzionali di terze parti. Trovi maggiori informazioni qui sotto e puoi modificare le tue
              preferenze in qualsiasi momento.
            </p>
            <div className="mt-5">
              <button
                type="button"
                data-cc="show-preferencesModal"
                className="inline-flex items-center gap-2 rounded-full bg-green-dark px-5 py-2.5 text-sm font-semibold text-warm-white transition-colors hover:bg-green-mid"
              >
                Gestisci preferenze cookie
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">
              Riferimenti normativi
            </h2>
            <p className="mt-3">
              La presente policy è redatta ai sensi del Regolamento UE 2016/679 (GDPR), della Direttiva
              2002/58/CE come modificata dalla Direttiva 2009/136/CE, del D.Lgs. 196/2003 e successive modifiche, e
              tiene conto delle Linee guida del Garante per la Protezione dei Dati Personali del 10 giugno 2021.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cookie tecnici</h2>
            <p className="mt-3">
              Strettamente necessari al funzionamento del sito. Per questi cookie non è richiesto il consenso
              dell&apos;utente.
            </p>
            <CookieTable rows={technicalCookies} />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cookie analitici</h2>
            <p className="mt-3">
              Utilizziamo Google Analytics 4 in modalità configurata con Google Consent Mode v2: i cookie analitici
              vengono attivati solo dopo il tuo consenso esplicito tramite il banner. I dati sono raccolti in forma
              aggregata per finalità statistiche e di miglioramento del sito.
            </p>
            <CookieTable rows={analyticsCookies} />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cookie funzionali di terze parti</h2>
            <p className="mt-3">
              Nella pagina contatti è incorporata una mappa di Google Maps. La mappa viene caricata solo dopo il
              tuo consenso ai cookie funzionali; in mancanza di consenso, viene mostrato un placeholder con un link
              per aprire Google Maps in una nuova scheda.
            </p>
            <CookieTable rows={functionalCookies} />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">
              Trasferimenti extra-UE
            </h2>
            <p className="mt-3">
              Google LLC (fornitore di Google Analytics e Google Maps) e Vercel Inc. (hosting del sito) hanno sede
              negli Stati Uniti. Il trasferimento dei dati avviene sulla base di Clausole Contrattuali Standard
              approvate dalla Commissione Europea e nell&apos;ambito del EU-US Data Privacy Framework.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Gestione e revoca del consenso</h2>
            <p className="mt-3">
              Puoi modificare o revocare in qualsiasi momento il tuo consenso utilizzando il pulsante
              &ldquo;Preferenze cookie&rdquo; presente nel footer di ogni pagina, oppure cliccando il pulsante qui sopra.
              In aggiunta, puoi gestire e cancellare i cookie direttamente dalle impostazioni del tuo browser
              (Chrome, Firefox, Safari, Edge).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Titolare del trattamento</h2>
            <p className="mt-3">
              <strong>Montecchia Servizi S.r.l.</strong> &mdash; Via Montecchia 12, 35030 Selvazzano Dentro (PD),
              Italia. P.IVA 05326460283. Maggiori informazioni nella{' '}
              <Link className="text-green-dark hover:underline" href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

function CookieTable({ rows }: { rows: { name: string; domain: string; desc: string; exp: string }[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-green-dark/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-cream/60">
          <tr className="text-xs uppercase tracking-wider text-text-mid/80">
            <th className="px-4 py-3 font-semibold">Cookie</th>
            <th className="px-4 py-3 font-semibold">Dominio</th>
            <th className="px-4 py-3 font-semibold">Descrizione</th>
            <th className="px-4 py-3 font-semibold">Scadenza</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.name} className="border-t border-green-dark/8">
              <td className="px-4 py-3 font-mono text-xs text-text-dark">{c.name}</td>
              <td className="px-4 py-3 text-text-mid">{c.domain}</td>
              <td className="px-4 py-3 text-text-mid">{c.desc}</td>
              <td className="px-4 py-3 text-text-mid whitespace-nowrap">{c.exp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
