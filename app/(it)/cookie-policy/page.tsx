import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import { hreflangForIt } from '@/lib/hreflang';

export const metadata = {
  title: 'Cookie Policy | La Montecchia Green',
  description:
    'Informativa sull&apos;uso dei cookie del sito lamontecchiagreen.it: cookie tecnici, analitici e di terze parti.',
  alternates: hreflangForIt('/cookie-policy'),
  robots: { index: true, follow: true },
};

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
            <p className="mt-4 max-w-2xl text-sm text-text-mid/80">Ultimo aggiornamento: 28 aprile 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-8 text-base leading-relaxed text-text-mid">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cosa sono i cookie</h2>
            <p className="mt-3">
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente, dove
              vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. Servono a far
              funzionare correttamente il sito, a migliorare l&apos;esperienza di navigazione e a raccogliere
              informazioni statistiche in forma anonima.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cookie utilizzati</h2>
            <p className="mt-3">
              Il sito <strong>lamontecchiagreen.it</strong> utilizza esclusivamente cookie tecnici, necessari al
              corretto funzionamento delle pagine e dei moduli di prenotazione e contatto. Per questi cookie non è
              richiesto il consenso dell&apos;utente, ai sensi della normativa vigente.
            </p>
            <p className="mt-3">
              Possono essere presenti cookie di terze parti generati dai servizi di mappe (Google Maps), video
              (YouTube/Vimeo) o widget social embeddati nelle pagine; in tal caso si rimanda alle informative
              privacy dei rispettivi fornitori.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Gestione dei cookie</h2>
            <p className="mt-3">
              L&apos;utente può in qualsiasi momento disabilitare i cookie attraverso le impostazioni del proprio
              browser. La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del
              sito.
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
