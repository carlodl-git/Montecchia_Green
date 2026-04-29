import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import { hreflangForIt } from '@/lib/hreflang';

export const metadata = {
  title: 'Privacy Policy | La Montecchia Green',
  description:
    'Informativa sul trattamento dei dati personali del sito lamontecchiagreen.it ai sensi del Regolamento UE 2016/679 (GDPR).',
  alternates: hreflangForIt('/privacy-policy'),
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
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
              Privacy Policy
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-4 max-w-2xl text-sm text-text-mid/80">
              Ultimo aggiornamento: 28 aprile 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="prose-content space-y-8 text-base leading-relaxed text-text-mid">

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Titolare del trattamento</h2>
            <p className="mt-3">
              Il Titolare del trattamento dei dati è <strong>Montecchia Servizi S.r.l.</strong>, con sede legale
              in Via Montecchia 12, 35030 Selvazzano Dentro (PD) &mdash; Italia.<br />
              P.IVA / Codice Fiscale: 05326460283.<br />
              Email: <a className="text-green-dark hover:underline" href="mailto:eventimontecchia@golfmontecchia.it">eventimontecchia@golfmontecchia.it</a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Tipologie di dati raccolti</h2>
            <p className="mt-3">
              Tra i dati personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono: nome,
              cognome, indirizzo email, numero di telefono, contenuto dei messaggi inviati tramite i moduli di
              prenotazione e contatto, dati di navigazione (cookie tecnici, indirizzo IP, browser, sistema operativo).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Finalità del trattamento</h2>
            <p className="mt-3">I dati raccolti vengono trattati per le seguenti finalità:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>Gestione delle richieste di prenotazione tavoli, eventi e informazioni inviate tramite i moduli, telefono, email o WhatsApp.</li>
              <li>Adempimento degli obblighi contrattuali, fiscali e di legge.</li>
              <li>Analisi anonima e aggregata della navigazione del sito per finalità statistiche.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Base giuridica</h2>
            <p className="mt-3">
              Il trattamento si fonda sul consenso dell&apos;interessato (art. 6 par. 1 lett. a GDPR), sull&apos;esecuzione
              di misure precontrattuali o contrattuali (art. 6 par. 1 lett. b GDPR) e sull&apos;adempimento di obblighi
              di legge (art. 6 par. 1 lett. c GDPR).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Modalità e periodo di conservazione</h2>
            <p className="mt-3">
              I dati sono trattati con strumenti elettronici e cartacei, adottando misure di sicurezza adeguate.
              Vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti e,
              comunque, nel rispetto degli obblighi di legge.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Diritti dell&apos;interessato</h2>
            <p className="mt-3">
              In ogni momento l&apos;interessato può esercitare, ai sensi degli artt. 15 e seguenti del Regolamento UE
              2016/679, i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei
              dati, nonché il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali
              (<a className="text-green-dark hover:underline" href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">www.garanteprivacy.it</a>).
              Per esercitare tali diritti è sufficiente scrivere a{' '}
              <a className="text-green-dark hover:underline" href="mailto:eventimontecchia@golfmontecchia.it">eventimontecchia@golfmontecchia.it</a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cookie</h2>
            <p className="mt-3">
              Per informazioni sull&apos;uso dei cookie consulta la{' '}
              <Link className="text-green-dark hover:underline" href="/cookie-policy">Cookie Policy</Link> dedicata.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
