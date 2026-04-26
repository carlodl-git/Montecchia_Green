import Image from 'next/image';
import Link from 'next/link';
import { Building2, Users, UtensilsCrossed, MapPin, Car, TreePine, Award, Leaf, Phone } from 'lucide-react';
import { hreflangForIt } from '@/lib/hreflang';
import { telUrl, mailtoUrl, whatsappUrl } from '@/lib/contact';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import SchemaOrg from '@/components/SchemaOrg';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CONTACT } from '@/lib/contact';

export const metadata = {
  title: 'Eventi Aziendali Padova: Pranzi, Team Building, Convention | La Montecchia Green',
  description:
    'Organizza il tuo evento aziendale al Golf della Montecchia: pranzi aziendali, team building sul green, convention, cene di fine anno, presentazioni prodotto e retreat. Sale fino a 400 persone, menu personalizzato, parcheggio gratuito. A 10 minuti da Padova.',
  alternates: hreflangForIt('/eventi-aziendali'),
  openGraph: {
    images: [{ url: '/images/Sala-Ristorante-eventi.jpg', width: 1200, height: 630 }],
  },
};

// Max 5 FAQ visibili+schema, scelte per volume PAA su intent B2B.
const eventiAziendaliFaq = [
  {
    question: 'Quanto costa organizzare un pranzo aziendale a La Montecchia Green?',
    answer:
      'Il costo dipende dal numero di partecipanti, dal menu e dai servizi. Indicativamente un pranzo aziendale parte da 35-50€ a persona per un menu completo con vini inclusi. Inviamo un preventivo personalizzato entro 48 ore lavorative.',
  },
  {
    question: 'Le sale sono adatte a convention, meeting e team building?',
    answer:
      'Sì. Sala Petrarca (100-300 persone) è configurabile a teatro, tavolo imperiale o tavoli rotondi e si può combinare con la terrazza per eventi fino a 400 invitati. Foscolo (30-80) e Ruzante (20-40) per meeting ristretti. Il team building sul green coinvolge gruppi da 10 a 100+ persone.',
  },
  {
    question: 'Avete proiettore, schermo e impianto audio?',
    answer:
      'Sì, tutte le sale possono essere attrezzate con proiettore, schermo, impianto audio e microfoni. Lo staff coordina l\'allestimento tecnico in base alle esigenze dell\'evento e del numero di partecipanti.',
  },
  {
    question: 'C’è parcheggio gratuito per tutti i partecipanti?',
    answer:
      'Sì, l\'ampio parcheggio gratuito all\'interno del Golf della Montecchia è sufficiente anche per eventi con centinaia di partecipanti. La location è a 10 minuti da Padova e 10 minuti dall\'uscita Padova Ovest.',
  },
  {
    question: 'Gestite cene di fine anno e retreat di più giorni?',
    answer:
      'Sì. Le cene di fine anno usano tipicamente la Sala Petrarca con menu personalizzato e intrattenimento. Per retreat di più giorni lavoriamo con gli hotel termali di Abano e Montegrotto per sessioni di lavoro combinate a relax.',
  },
];

export default function EventiAziendaliPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Eventi aziendali', href: '/eventi-aziendali' },
          ]}
        />
      </section>
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
              Eventi Aziendali al Golf della Montecchia: Padova
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
                    Telefono: <span className="font-semibold">+39 049 805 8464</span>
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
                desc: 'Chiudi l\'anno con il tuo team in grande stile. La location ospita fino a 400 persone per cene di gala, con menu dedicato, servizio sommelier e la possibilita di estendere la serata sulla terrazza panoramica.',
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
              adatte a gruppi da 20 a 400 persone. Il nostro staff ti aiutera a scegliere la configurazione
              ideale per il tuo formato.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <InfoBox title="Sala Petrarca: 100 / 300 persone">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>La sala principale, ideale per convention, cene di gala e grandi eventi aziendali. Configurazione flessibile con possibilita di palco e proiezione.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={60}>
              <InfoBox title="Sala Foscolo: 30 / 80 persone">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Perfetta per pranzi e cene aziendali di medie dimensioni, presentazioni prodotto e riunioni con clienti. Ambiente riservato e curato.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={120}>
              <InfoBox title="Sala Ruzante: 20 / 40 persone">
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
              FAQ: domande frequenti sugli eventi aziendali
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
              {eventiAziendaliFaq.map((item, idx) => (
                <div key={item.question}>
                  <h3 className="text-sm font-semibold text-text-dark">{item.question}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.answer}</p>
                  {idx !== eventiAziendaliFaq.length - 1 ? <div className="mt-4 border-t border-black/5" /> : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Cross-link blog ── */}
        <div className="mt-8 rounded-2xl border border-green-dark/10 bg-warm-white p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-green-dark/60">
            Leggi anche
          </div>
          <p className="mt-2 text-sm leading-relaxed text-text-mid">
            Scopri come organizzare un{' '}
            <Link
              href="/blog/team-building-padova"
              className="font-semibold text-green-dark underline decoration-green-mid/40 underline-offset-2 hover:decoration-green-dark"
            >
              team building a Padova
            </Link>{' '}
            con attività immersive nel verde del Golf, oppure sfoglia il nostro{' '}
            <Link
              href="/menu"
              className="font-semibold text-green-dark underline decoration-green-mid/40 underline-offset-2 hover:decoration-green-dark"
            >
              menu stagionale
            </Link>
            .
          </p>
        </div>

        {/* ── Schema.org ── */}
        <SchemaOrg variant="eventVenue" />
        <SchemaOrg
          variant="breadcrumb"
          breadcrumbItems={[
            { name: 'Home', url: `${CONTACT.site}/` },
            { name: 'Eventi Aziendali', url: `${CONTACT.site}/eventi-aziendali` },
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
                    href={whatsappUrl('events', 'it')}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={mailtoUrl('events', 'it')}>Email</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href={telUrl('landline')}>Chiama</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <InfoBox title="Informazioni essenziali">
                <div className="space-y-2">
                  <div>
                    Capacita: <span className="font-semibold">da 20 a 400 persone</span>
                  </div>
                  <div>
                    Area: <span className="font-semibold">Selvazzano Dentro (PD)</span>, 10 min da Padova
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
