import Image from 'next/image';
import Link from 'next/link';
import { Building2, Users, UtensilsCrossed, MapPin, Car, TreePine, Award, Leaf, Phone } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Eventi Aziendali Padova — Pranzi, Team Building, Convention | La Montecchia Green',
  description:
    'Organizza il tuo evento aziendale al Golf della Montecchia: pranzi aziendali, team building sul green, convention, cene di fine anno, presentazioni prodotto e retreat. Sale fino a 300 persone, menu personalizzato, parcheggio gratuito. A 10 minuti da Padova.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/eventi-aziendali',
    languages: {
      'it': 'https://www.lamontecchiagreen.it/eventi-aziendali',
      'en': 'https://www.lamontecchiagreen.it/en/eventi-aziendali',
    },
  },
  openGraph: {
    images: [{ url: '/images/Sala-Ristorante-eventi.jpg', width: 1200, height: 630 }],
  },
};

const eventiAziendaliFaq = [
  { question: 'Quanto costa organizzare un pranzo aziendale a La Montecchia Green?', answer: 'Il costo dipende dal numero di partecipanti, dal tipo di menu e dai servizi richiesti. Indicativamente, un pranzo aziendale parte da circa 35-50€ a persona per un menu completo con vini inclusi. Contattaci per un preventivo personalizzato.' },
  { question: 'Avete proiettore e impianto audio per presentazioni?', answer: 'Sì, le sale possono essere attrezzate con proiettore, schermo, impianto audio e microfoni. Il nostro staff coordina l\'allestimento tecnico in base alle esigenze dell\'evento.' },
  { question: 'Quante persone possono partecipare a un team building sul green?', answer: 'Il team building sul green è flessibile e può coinvolgere gruppi da 10 a 100+ persone. Le attività si svolgono all\'aperto nel contesto del Golf della Montecchia e possono essere personalizzate in base alla dimensione del gruppo.' },
  { question: 'Le sale sono adatte per convention e assemblee?', answer: 'Sì, la Sala Petrarca ospita da 100 a 300 persone ed è configurabile con disposizione a teatro, tavolo imperiale o tavoli rotondi. La Sala Foscolo (30-80 persone) e la Sala Ruzante (20-40 persone) sono ideali per meeting più ristretti.' },
  { question: 'È possibile organizzare una cena di fine anno per l\'azienda?', answer: 'Sì, le cene di fine anno sono tra gli eventi più richiesti. La Sala Petrarca è perfetta per grandi gruppi, con menu personalizzato, servizio sommelier e possibilità di musica e intrattenimento.' },
  { question: 'Offrite opzioni per diete speciali e intolleranze?', answer: 'Sì, lo chef prepara menu per celiaci, intolleranti al lattosio, vegetariani e vegani. È possibile anche una consulenza nutrizionale tramite il Montecchia Performance Center per eventi particolari.' },
  { question: 'C\'è il parcheggio per tutti i partecipanti?', answer: 'Sì, l\'ampio parcheggio gratuito all\'interno del Golf della Montecchia è sufficiente per eventi anche con molti partecipanti. Non c\'è problema di parcheggio in zona.' },
  { question: 'Quanto dista La Montecchia Green da Padova?', answer: 'La Montecchia Green è a soli 10 minuti da Padova centro, 5 minuti da Abano Terme e meno di 10 minuti dall\'uscita autostradale Padova Ovest (A4/A13). Facilmente raggiungibile da tutto il Nord-Est.' },
  { question: 'Si possono fare riunioni di lavoro durante la mattina?', answer: 'Sì, le sale sono disponibili anche in mattinata per meeting, workshop e sessioni di lavoro. Il servizio include coffee break, colazione di lavoro o light lunch a seconda delle esigenze.' },
  { question: 'Come si prenota un evento aziendale?', answer: 'Contattare via WhatsApp al +39 334 677 4483 (risposta rapida), email a eventimontecchia@golfmontecchia.it, oppure telefonare al +39 334 677 4483. Lo staff risponde entro 24-48 ore lavorative con una proposta personalizzata.' },
  { question: 'È possibile organizzare un retreat aziendale di più giorni?', answer: 'Sì, La Montecchia Green è ideale per retreat aziendali. La vicinanza a strutture ricettive come gli hotel termali di Abano e Montegrotto Terme consente soggiorni di più giorni, combinando sessioni di lavoro, attività sul green e momenti di relax.' },
  { question: 'La location è accessibile per persone con disabilità?', answer: 'Sì, la struttura si trova al piano terra della Club House del Golf della Montecchia ed è dotata di accessi facilitati per persone in sedia a rotelle.' },
];

export default function EventiAziendaliPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Sala ristorante allestita per eventi aziendali al Golf della Montecchia"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold tracking-tight text-warm-white">
              Eventi Aziendali al Golf della Montecchia — Padova
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Intro + sidebar ── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                La location ideale per eventi aziendali vicino a Padova
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-base leading-relaxed text-text-mid">
                Cerchi una location per eventi aziendali a Padova che offra qualcosa di diverso dal solito centro
                congressi? La Montecchia Green si trova all&apos;interno del Golf della Montecchia, in Via Montecchia 12
                a Selvazzano Dentro, a soli 10 minuti dal centro di Padova. Un ex tabacchificio restaurato ai piedi
                dei Colli Euganei, circondato dal verde di un campo da golf a 27 buche: il contesto naturale perfetto
                per dare valore al tuo evento aziendale.
              </p>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="text-base leading-relaxed text-text-mid">
                Che si tratti di un pranzo aziendale per il tuo team, di una convention per clienti e partner,
                di un team building sul green o di una cena di fine anno, La Montecchia Green mette a disposizione
                spazi modulabili, cucina personalizzata e uno staff dedicato. L&apos;ambiente unisce eleganza e
                informalita, lontano dalla rigidita degli hotel e dei centri congressi tradizionali, ma con tutto
                il servizio professionale necessario per un evento impeccabile.
              </p>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Contatti eventi aziendali">
                <div className="space-y-2">
                  <div>
                    Email: <span className="font-semibold">eventimontecchia@golfmontecchia.it</span>
                  </div>
                  <div>
                    WhatsApp: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div>
                    Telefono: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Risposta entro 24-48 ore lavorative.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        {/* ── Tipologie di eventi ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Tipologie di eventi aziendali
            </h2>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-text-mid">
              La Montecchia Green accoglie ogni formato di evento corporate, dalla colazione di lavoro informale
              alla convention strutturata. Ecco le tipologie piu richieste dalle aziende del territorio.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <UtensilsCrossed className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Pranzi e cene aziendali',
                desc: 'Pranzi di lavoro per team interni, cene con clienti e partner, cene di fine anno e celebrazioni aziendali. Menu personalizzato dallo chef con ingredienti locali e stagionali, servizio sommelier con vini della Tenuta Emo Capodilista.',
              },
              {
                icon: <TreePine className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Team building sul green',
                desc: 'Attivita di team building all&apos;aria aperta nel contesto unico del campo da golf a 27 buche. Esperienze di gruppo immersi nel verde dei Colli Euganei, seguite da pranzo o aperitivo con menu su misura. Un\'alternativa concreta ai classici centri congressi.',
              },
              {
                icon: <Users className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Convention e meeting',
                desc: 'Sale modulabili per convention, meeting, presentazioni e assemblee. Dalla Sala Petrarca per grandi eventi alla Sala Ruzante per riunioni ristrette, con supporto logistico completo e servizio catering integrato.',
              },
              {
                icon: <Award className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Presentazioni prodotto',
                desc: 'Lancia il tuo prodotto o servizio in una cornice suggestiva. Gli spazi della Montecchia Green offrono un\'atmosfera distintiva che valorizza il tuo brand, con possibilita di allestimenti personalizzati indoor e outdoor.',
              },
              {
                icon: <Building2 className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Cene di fine anno',
                desc: 'Chiudi l\'anno con il tuo team in grande stile. La Sala Petrarca ospita fino a 300 persone per cene di gala, con menu dedicato, servizio sommelier e la possibilita di estendere la serata sulla terrazza panoramica.',
              },
              {
                icon: <Leaf className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Retreat aziendali',
                desc: 'Giornate di lavoro e ispirazione immersi nella natura. Combina sessioni di lavoro, attivita sul green e momenti di relax con pranzo o aperitivo. Ideale per workshop strategici, brainstorming e planning annuale.',
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <Card className="bg-warm-white/70 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <div className="text-sm uppercase tracking-wider text-text-dark font-semibold">
                        {item.title}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-text-mid/95">{item.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Spazi disponibili ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Le sale e gli spazi per il tuo evento
            </h2>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-text-mid">
              Ogni evento ha esigenze diverse. La Montecchia Green offre sale interne ed esterne modulabili,
              adatte a gruppi da 20 a 300 persone. Il nostro staff ti aiutera a scegliere la configurazione
              ideale per il tuo formato.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <InfoBox title="Sala Petrarca — 100 / 300 persone">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>La sala principale, ideale per convention, cene di gala e grandi eventi aziendali. Configurazione flessibile con possibilita di palco e proiezione.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={60}>
              <InfoBox title="Sala Foscolo — 30 / 80 persone">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Perfetta per pranzi e cene aziendali di medie dimensioni, presentazioni prodotto e riunioni con clienti. Ambiente riservato e curato.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={120}>
              <InfoBox title="Sala Ruzante — 20 / 40 persone">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Sala intima per meeting ristretti, board meeting, workshop strategici e pranzi di lavoro per piccoli team.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={180}>
              <InfoBox title="Terrazza e spazi outdoor">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <TreePine className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Terrazza panoramica sul green per aperitivi e networking, spazi all&apos;aperto per team building e attivita informali. Vista sui Colli Euganei.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
          </div>
        </div>

        {/* ── Servizi inclusi ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Servizi per eventi aziendali
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Reveal>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Cucina e catering
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Menu personalizzato dallo chef con ingredienti locali e stagionali</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Consulenza nutrizionale tramite il Montecchia Performance Center</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Servizio sommelier con vini della Tenuta Emo Capodilista</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Opzioni per intolleranze, diete speciali e preferenze alimentari</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delayMs={80}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Logistica e supporto
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Staff dedicato per coordinamento e servizio</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Ampio parcheggio gratuito all&apos;interno del Golf</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Possibilita di allestimenti personalizzati</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Accessibilita per persone con disabilita</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* ── Perche scegliere La Montecchia Green ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Perche scegliere La Montecchia Green per il tuo evento aziendale
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <MapPin className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Posizione strategica',
                desc: 'A 10 minuti da Padova centro, facilmente raggiungibile da tutto il Nord-Est. Vicino all\'autostrada A13 e alla tangenziale di Padova.',
              },
              {
                icon: <TreePine className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Contesto naturale unico',
                desc: 'Immersi nel verde del golf ai piedi dei Colli Euganei. Un\'alternativa concreta ai centri congressi e agli hotel, per eventi che lasciano il segno.',
              },
              {
                icon: <UtensilsCrossed className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Cucina d\'eccellenza',
                desc: 'Chef dedicato con ingredienti locali e stagionali, verdure dall\'orto proprio, pasta fatta in casa. Ogni menu e costruito su misura per il tuo evento.',
              },
              {
                icon: <Car className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Logistica semplice',
                desc: 'Parcheggio gratuito per tutti gli ospiti, nessun problema di traffico urbano, accesso diretto e comodo anche per gruppi numerosi.',
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <Card className="bg-warm-white/70 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">{item.icon}</div>
                    <div className="text-sm font-semibold text-text-dark mb-2">{item.title}</div>
                    <p className="text-sm leading-relaxed text-text-mid/95">{item.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Posizione e raggiungibilita ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Dove siamo e come raggiungerci
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              La Montecchia Green si trova in Via Montecchia 12, Selvazzano Dentro (PD), all&apos;interno della
              Club House del Golf della Montecchia. La posizione e strategica per le aziende di tutto il Nord-Est:
              a 10 minuti da Padova centro, 5 minuti da Abano Terme, 30 minuti da Venezia e 50 minuti da Vicenza
              e Treviso. L&apos;uscita autostradale piu vicina e Padova Ovest (A4/A13), a meno di 10 minuti.
              Il parcheggio interno al golf e ampio e gratuito per tutti gli ospiti dell&apos;evento.
            </p>
          </Reveal>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
              FAQ — Domande frequenti sugli eventi aziendali
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
              {eventiAziendaliFaq.map((item, idx) => (
                <div key={item.question}>
                  <div className="text-sm font-semibold text-text-dark">{item.question}</div>
                  <p className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.answer}</p>
                  {idx !== eventiAziendaliFaq.length - 1 ? <div className="mt-4 border-t border-black/5" /> : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Schema.org ── */}
        <SchemaOrg variant="eventVenue" />
        <SchemaOrg
          variant="breadcrumb"
          breadcrumbItems={[
            { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
            { name: 'Eventi Aziendali', url: 'https://www.lamontecchiagreen.it/eventi-aziendali' },
          ]}
        />
        <SchemaOrg variant="customFaq" faqItems={eventiAziendaliFaq} />

        {/* ── CTA contatti ── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Organizza il tuo evento aziendale
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-mid">
              Contattaci per ricevere una proposta personalizzata per il tuo evento. Il nostro staff ti guidera
              nella scelta degli spazi, del menu e di ogni dettaglio. Risposta garantita entro 24-48 ore
              lavorative.
            </p>
          </Reveal>

          <div className="grid gap-4">
            <Reveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-dark text-warm-white hover:bg-green-mid"
                >
                  <Link
                    href="https://wa.me/393346774483?text=Ciao%20La%20Montecchia%20Green%2C%20vorrei%20informazioni%20per%20un%20evento%20aziendale."
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="mailto:eventimontecchia@golfmontecchia.it">Email</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="tel:+393346774483">Chiama</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <InfoBox title="Informazioni essenziali">
                <div className="space-y-2">
                  <div>
                    Capacita: <span className="font-semibold">da 20 a 300 persone</span>
                  </div>
                  <div>
                    Area: <span className="font-semibold">Selvazzano Dentro (PD)</span> — 10 min da Padova
                  </div>
                  <div>
                    Parcheggio: <span className="font-semibold">gratuito</span> all&apos;interno del golf
                  </div>
                  <div className="text-xs text-text-mid/80">Aperto a tutte le aziende, non serve essere soci del golf.</div>
                </div>
              </InfoBox>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
