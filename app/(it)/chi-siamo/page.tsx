import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { hreflangForIt } from '@/lib/hreflang';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Chi Siamo — La Montecchia Green, Bistrot & Eventi a Padova',
  description:
    'Scopri la storia de La Montecchia Green: un ex tabacchificio restaurato nella Club House del Golf della Montecchia a Selvazzano Dentro (PD). Cucina km 0, chef Enrico Ruggin, vini della Tenuta Emo Capodilista, eventi privati e aziendali. A 10 minuti da Padova.',
  alternates: hreflangForIt('/chi-siamo'),
  openGraph: {
    images: [{ url: '/images/chef-preparing-a-dish.jpg', width: 1200, height: 630 }],
  },
};

export default function ChiSiamoPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Chi siamo', href: '/chi-siamo' },
          ]}
        />
      </section>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Lo chef Enrico Ruggin in cucina de La Montecchia Green"
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
              Chi Siamo — La nostra storia, la nostra cucina
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── LA NOSTRA STORIA ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Da tabacchificio storico a bistrot contemporaneo
              </h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green nasce all&apos;interno di un ex tabacchificio del Novecento, sapientemente
                restaurato e trasformato nella Club House del Golf della Montecchia, a Selvazzano Dentro, alle porte
                di Padova. Quello che un tempo era un edificio dedicato alla lavorazione del tabacco oggi ospita un
                bistrot elegante ma informale, dove la tradizione architettonica si fonde con un&apos;atmosfera moderna
                e accogliente.
              </p>
            </Reveal>
            <Reveal delayMs={110}>
              <p className="text-base leading-relaxed text-text-mid">
                L&apos;edificio conserva il fascino industriale delle sue origini: muri in mattoni a vista, grandi
                vetrate che inondano gli spazi di luce naturale e soffitti alti che regalano un senso di ampiezza.
                Attorno, il paesaggio si apre su 18 buche di golf immerse nel verde dei Colli Euganei, creando una
                cornice unica per pranzi, cene e aperitivi all&apos;aperto. Non serve essere golfisti per venire a
                trovarci: La Montecchia Green e aperta a tutti, famiglie, coppie, turisti e professionisti in cerca
                di un&apos;esperienza diversa dal solito.
              </p>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="text-base leading-relaxed text-text-mid">
                La posizione e strategica: a soli 10 minuti dal centro di Padova, a breve distanza dalla celebre
                Villa Emo Capodilista e nel cuore del Parco Regionale dei Colli Euganei. Un luogo dove natura,
                storia e gastronomia si incontrano, lontano dal traffico cittadino ma facilmente raggiungibile,
                con ampio parcheggio gratuito.
              </p>
            </Reveal>

            {/* ── FILOSOFIA ──────────────────────────────── */}
            <Reveal delayMs={210}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                La nostra filosofia: cucina a km 0
              </h2>
            </Reveal>
            <Reveal delayMs={250}>
              <p className="text-base leading-relaxed text-text-mid">
                Al centro della nostra proposta gastronomica c&apos;e una convinzione semplice: i piatti migliori
                nascono da ingredienti eccellenti, raccolti al momento giusto e lavorati con rispetto. Per questo
                coltiviamo un orto proprio all&apos;interno della tenuta, dal quale attingiamo erbe aromatiche,
                verdure di stagione e ortaggi freschi che arrivano in cucina a pochi passi dal campo.
              </p>
            </Reveal>
            <Reveal delayMs={290}>
              <p className="text-base leading-relaxed text-text-mid">
                Lavoriamo esclusivamente con fornitori locali selezionati, privilegiando le filiere corte e i
                produttori artigianali del territorio veneto. Ogni ingrediente viene scelto per qualita, provenienza
                e stagionalita. Il menu cambia seguendo il ritmo delle stagioni, proponendo piatti che raccontano
                il territorio e le sue tradizioni in chiave contemporanea.
              </p>
            </Reveal>

            {/* ── CHEF ENRICO RUGGIN ─────────────────────── */}
            <Reveal delayMs={330}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Lo chef Enrico Ruggin
              </h2>
            </Reveal>
            <Reveal delayMs={370}>
              <p className="text-base leading-relaxed text-text-mid">
                La cucina de La Montecchia Green e affidata allo chef Enrico Ruggin, che interpreta la tradizione
                italiana con uno sguardo contemporaneo. La sua proposta si distingue per l&apos;attenzione
                maniacale alla materia prima, la cura nella presentazione e la capacita di trasformare ingredienti
                semplici in piatti di grande equilibrio e sapore.
              </p>
            </Reveal>
            <Reveal delayMs={410}>
              <p className="text-base leading-relaxed text-text-mid">
                Il cuore della cucina e la pasta fatta in casa ogni giorno: tagliatelle, ravioli, gnocchi e formati
                speciali che cambiano con le stagioni. Accanto alla pasta, i dessert artigianali rappresentano un
                altro punto di forza: dolci preparati interamente nel nostro laboratorio, con ingredienti freschi e
                tecniche di pasticceria classica rivisitata. Ogni piatto viene pensato per offrire un&apos;esperienza
                completa, dal primo assaggio all&apos;ultimo cucchiaio.
              </p>
            </Reveal>

            {/* ── IL SOMMELIER E I VINI ──────────────────── */}
            <Reveal delayMs={450}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Il sommelier e i vini della Tenuta
              </h2>
            </Reveal>
            <Reveal delayMs={490}>
              <p className="text-base leading-relaxed text-text-mid">
                La carta dei vini e curata dal nostro sommelier, che seleziona etichette italiane e internazionali
                con un&apos;attenzione particolare ai vini del territorio. Protagonisti assoluti sono i vini della
                Tenuta Emo Capodilista, prodotti nelle vigne che circondano il golf club: bianchi freschi, rossi
                strutturati e bollicine dei Colli Euganei DOC. Ogni calice racconta la stessa terra da cui
                provengono gli ingredienti dei nostri piatti, creando un legame profondo tra cibo e vino.
              </p>
            </Reveal>
            <Reveal delayMs={530}>
              <p className="text-base leading-relaxed text-text-mid">
                Per chi desidera approfondire, il sommelier propone abbinamenti personalizzati e degustazioni
                guidate, ideali per scoprire le eccellenze enologiche dei Colli Euganei in un contesto unico e
                rilassato.
              </p>
            </Reveal>

            {/* ── IL TEAM ────────────────────────────────── */}
            <Reveal delayMs={570}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Il nostro team
              </h2>
            </Reveal>
            <Reveal delayMs={610}>
              <p className="text-base leading-relaxed text-text-mid">
                Dietro a La Montecchia Green c&apos;e un team affiatato e appassionato, dedicato a offrire
                un&apos;esperienza impeccabile in ogni occasione. Dalla sala alla cucina, dall&apos;organizzazione
                degli eventi al servizio bar, ogni membro del nostro staff lavora con l&apos;obiettivo di far
                sentire ogni ospite benvenuto e a proprio agio. Che si tratti di un pranzo di lavoro, una cena
                romantica, un aperitivo con gli amici o un evento aziendale, il nostro personale e pronto ad
                accogliervi con professionalita e calore.
              </p>
            </Reveal>

            {/* ── PRODOTTI DI ECCELLENZA ─────────────────── */}
            <Reveal delayMs={650}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Prodotti di eccellenza
              </h2>
            </Reveal>
            <Reveal delayMs={690}>
              <p className="text-base leading-relaxed text-text-mid">
                La qualita dei nostri piatti parte dalla scelta dei migliori ingredienti. Ecco alcune delle
                eccellenze che trovate nella nostra cucina:
              </p>
            </Reveal>
            <Reveal delayMs={720}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Pasta Monograno Felicetti — semole di grani antichi italiani',
                  'Miele Millebuche — prodotto dalle api che vivono nel campo da golf',
                  'Vini della Tenuta Emo Capodilista — Colli Euganei DOC',
                  'Specialita Cipriani — eccellenze della tradizione veneta',
                  'Ortaggi e erbe aromatiche dal nostro orto',
                  'Formaggi e salumi di produttori locali selezionati',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-mid">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* ── IL CONTESTO ────────────────────────────── */}
            <Reveal delayMs={760}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Il contesto: Golf, natura e storia
              </h2>
            </Reveal>
            <Reveal delayMs={800}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green e parte del complesso del Golf della Montecchia, uno dei campi da golf piu
                prestigiosi del Veneto, progettato dall&apos;architetto inglese John Harris e inaugurato nel 1988.
                Il percorso a 18 buche si snoda tra colline dolci, alberi secolari e specchi d&apos;acqua,
                offrendo un paesaggio di rara bellezza. A pochi passi sorge Villa Emo Capodilista, dimora storica
                cinquecentesca che arricchisce ulteriormente il fascino del luogo.
              </p>
            </Reveal>
            <Reveal delayMs={840}>
              <p className="text-base leading-relaxed text-text-mid">
                Il Parco Regionale dei Colli Euganei fa da sfondo a tutto: colline vulcaniche coperte di boschi,
                vigneti e borghi storici. La posizione a Selvazzano Dentro consente di raggiungere il centro di
                Padova in appena 10 minuti, rendendo La Montecchia Green il punto di incontro ideale tra la
                tranquillita della campagna e la vivacita della citta.
              </p>
            </Reveal>

            {/* ── CTA ────────────────────────────────────── */}
            <Reveal delayMs={880}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                  <Link href="/ristorante">Scopri il ristorante</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/menu">Consulta il menu</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/eventi">Organizza un evento</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ── SIDEBAR ──────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="grid gap-6">
              <Reveal>
                <InfoBox title="In breve">
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold">Dove siamo:</span> Club House del Golf della Montecchia, Via Montecchia 12, Selvazzano Dentro (PD)
                    </div>
                    <div>
                      <span className="font-semibold">Aperto a tutti:</span> golfisti, famiglie, turisti, aziende
                    </div>
                    <div>
                      <span className="font-semibold">A 10 minuti da Padova</span>
                    </div>
                    <div>
                      <span className="font-semibold">Telefono:</span> +39 049 805 8464
                    </div>
                  </div>
                </InfoBox>
              </Reveal>
              <Reveal delayMs={100}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-semibold text-green-dark mb-2">I nostri punti di forza</h3>
                    <ul className="space-y-1.5">
                      {[
                        'Cucina km 0 con orto proprio',
                        'Pasta fatta in casa ogni giorno',
                        'Dessert artigianali',
                        'Vini della Tenuta Emo Capodilista',
                        'Sommelier dedicato',
                        'Terrazza panoramica sul green',
                        'Location per eventi privati',
                        'Parcheggio gratuito',
                      ].map((item) => (
                        <li key={item} className="flex gap-2 text-xs leading-relaxed text-text-mid">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-mid" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </aside>
        </div>

        <SchemaOrg
          variant="breadcrumb"
          breadcrumbItems={[
            { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
            { name: 'Chi Siamo', url: 'https://www.lamontecchiagreen.it/chi-siamo' },
          ]}
        />
      </section>
    </div>
  );
}
