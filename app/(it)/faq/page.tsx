import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { hreflangForIt } from '@/lib/hreflang';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Domande frequenti (FAQ) | La Montecchia Green',
  description:
    'Risposte alle domande frequenti su La Montecchia Green: orari, prezzi, prenotazioni, eventi, matrimoni, location, parcheggio, accessibilità e come arrivare a Selvazzano Dentro (PD).',
  alternates: hreflangForIt('/faq'),
};

const faqRistorante = [
  {
    q: 'Il ristorante La Montecchia Green è aperto solo ai soci del golf?',
    a: 'No, La Montecchia Green è aperto a tutti: golfisti, famiglie, turisti, aziende e privati. Non è necessario essere soci del Golf della Montecchia per pranzare, cenare o organizzare un evento.',
  },
  {
    q: 'Che tipo di cucina offre La Montecchia Green?',
    a: 'La Montecchia Green propone cucina italiana contemporanea a cura dello chef Enrico Ruggin. I piatti sono preparati con ingredienti locali e stagionali, incluse verdure dell\u2019orto proprio, pasta fatta in casa e dessert artigianali. I vini sono selezionati da un sommelier, con etichette della Tenuta Emo Capodilista.',
  },
  {
    q: 'Qual è il prezzo medio al ristorante La Montecchia Green?',
    a: 'Il prezzo medio è nella fascia \u20AC\u20AC: qualità alta con ingredienti locali e stagionali, pasta fatta in casa e vini selezionati, in un contesto esclusivo ma con prezzi accessibili. Pranzo completo indicativamente tra 25\u201340\u00A0\u20AC a persona.',
  },
  {
    q: 'Quali sono gli orari di apertura de La Montecchia Green?',
    a: 'Pranzo tutti i giorni dalle 12:00 alle 15:00. Cena venerdì e sabato sera su prenotazione dalle 19:30 alle 23:00. Lo snack bar e l\u2019aperitivo sono disponibili durante il giorno sulla terrazza e sul green.',
  },
  {
    q: 'Come prenotare un tavolo al ristorante?',
    a: 'Il modo più rapido è via WhatsApp al +39 334 677 4483. In alternativa si può telefonare al +39 049 805 8464 o compilare il form di prenotazione sul sito lamontecchiagreen.it/prenota.',
  },
  {
    q: 'Quali vini serve La Montecchia Green?',
    a: 'La Montecchia Green propone una selezione curata dal sommelier, con particolare attenzione ai vini della Tenuta Emo Capodilista, una delle cantine più prestigiose dei Colli Euganei DOC. Sono disponibili anche etichette nazionali e internazionali.',
  },
  {
    q: 'La Montecchia Green è accessibile per persone con disabilità?',
    a: 'Sì, La Montecchia Green è accessibile in sedia a rotelle. La struttura si trova al piano terra della Club House del Golf della Montecchia ed è dotata di accessi facilitati.',
  },
];

const faqEventi = [
  {
    q: 'Quante persone può ospitare La Montecchia Green per un evento?',
    a: 'La Montecchia Green può ospitare fino a 400 persone. La Sala Petrarca accoglie 100–300 invitati, la Sala Foscolo (30\u201380 persone), la Sala Ruzante (20\u201340 persone), la terrazza panoramica sul green e spazi all\u2019aperto con piscina.',
  },
  {
    q: 'Organizzate matrimoni e ricevimenti vicino a Padova?',
    a: 'Sì, La Montecchia Green è una delle location preferite per matrimoni nella provincia di Padova. Lo staff organizza eventi su misura con menu personalizzato dallo chef Enrico Ruggin, servizio sommelier con vini della Tenuta Emo Capodilista e allestimenti curati. Spazi fino a 400 persone, terrazza panoramica e spazi outdoor con piscina.',
  },
  {
    q: 'Organizzate eventi aziendali vicino a Padova?',
    a: 'Sì, La Montecchia Green offre pranzi e cene aziendali, team building sul green, convention, meeting e cene di fine anno per aziende della provincia di Padova e del Nord-Est. Ampio parcheggio gratuito, spazi modulabili fino a 400 persone e staff dedicato.',
  },
  {
    q: 'Si possono organizzare feste di compleanno e ricorrenze a La Montecchia Green?',
    a: 'Sì, La Montecchia Green è perfetta per compleanni, anniversari, cresime, battesimi e qualsiasi ricorrenza privata. Le sale sono modulabili da 20 a 400 persone, con menu personalizzato e staff dedicato.',
  },
  {
    q: 'Quali sale sono disponibili per eventi a La Montecchia Green?',
    a: 'Le sale disponibili sono: Sala Petrarca (100\u2013300 persone, ideale per matrimoni e grandi eventi), Sala Foscolo (30\u201380 persone, cene private e eventi medi), Sala Ruzante (20\u201340 persone, meeting e cerimonie civili), terrazza panoramica (aperitivi e cocktail party) e spazi outdoor con piscina.',
  },
  {
    q: 'Come si prenota un evento privato a La Montecchia Green?',
    a: 'Contattare via WhatsApp al +39 334 677 4483 (risposta rapida), email a eventimontecchia@golfmontecchia.it, oppure chiamare il +39 334 677 4483. Lo staff risponde entro 24\u201348 ore lavorative.',
  },
  {
    q: 'Cos\u2019è il team building sul green a La Montecchia Green?',
    a: 'Il team building sul green è un\u2019attività aziendale che combina il contesto naturale del Golf della Montecchia con esperienze di gruppo all\u2019aria aperta. Si svolge immersi nel verde dei Colli Euganei, seguito da pranzo o aperitivo con menu personalizzato. Ideale per aziende che cercano un\u2019alternativa ai classici centri congressi.',
  },
];

const faqLocation = [
  {
    q: 'Dove si trova La Montecchia Green?',
    a: 'La Montecchia Green si trova in Via Montecchia 12, Selvazzano Dentro (PD), all\u2019interno della Club House del Golf della Montecchia, ai piedi dei Colli Euganei. È a circa 10 minuti da Padova centro, 5 minuti da Abano Terme e 30 minuti da Venezia.',
  },
  {
    q: 'C\u2019è il parcheggio a La Montecchia Green?',
    a: 'Sì, La Montecchia Green dispone di un ampio parcheggio gratuito all\u2019interno del Golf della Montecchia, comodo per tutti gli ospiti e i partecipanti a eventi.',
  },
  {
    q: 'La Montecchia Green è vicina ad Abano Terme?',
    a: 'Sì, La Montecchia Green dista solo 5 minuti in auto da Abano Terme e circa 10 minuti da Montegrotto Terme. È una scelta ideale per chi soggiorna alle terme e cerca un ristorante suggestivo o una location per eventi.',
  },
  {
    q: 'Si può fare aperitivo a La Montecchia Green?',
    a: 'Sì, La Montecchia Green offre aperitivo sulla terrazza panoramica del Golf della Montecchia, con vista sui Colli Euganei. Cocktail, vini locali della Tenuta Emo Capodilista, taglieri e stuzzichini in un\u2019atmosfera immersa nel verde. Parcheggio gratuito.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
  { name: 'FAQ', url: 'https://www.lamontecchiagreen.it/faq' },
];

export default function FaqPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'FAQ', href: '/faq' },
          ]}
        />
      </section>
      <SchemaOrg variant="faq" />
      <SchemaOrg variant="breadcrumb" breadcrumbItems={breadcrumbItems} />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-green-dark">
              Domande frequenti
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-mid/95">
              Tutto quello che c&apos;è da sapere su La Montecchia Green: ristorante, eventi, location e come raggiungerci.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ristorante */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
            Ristorante
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
          {faqRistorante.map((item, i) => (
            <Reveal key={i} delayMs={i * 40}>
              <div>
                <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                <div className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</div>
              </div>
              {i < faqRistorante.length - 1 && <div className="mt-4 border-t border-black/5" />}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Eventi */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
            Eventi
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
          {faqEventi.map((item, i) => (
            <Reveal key={i} delayMs={i * 40}>
              <div>
                <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                <div className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</div>
              </div>
              {i < faqEventi.length - 1 && <div className="mt-4 border-t border-black/5" />}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location e Logistica */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
            Location e logistica
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
          {faqLocation.map((item, i) => (
            <Reveal key={i} delayMs={i * 40}>
              <div>
                <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                <div className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</div>
              </div>
              {i < faqLocation.length - 1 && <div className="mt-4 border-t border-black/5" />}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
