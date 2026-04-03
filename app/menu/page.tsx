import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';

const menuFaq = [
  { question: 'Il menu cambia con le stagioni?', answer: 'Sì, il menu de La Montecchia Green cambia ogni stagione. Lo chef Enrico Ruggin adatta i piatti in base alla disponibilità di ingredienti locali e stagionali, incluse le verdure dell\'orto proprio.' },
  { question: 'Avete opzioni per celiaci e intolleranze alimentari?', answer: 'Sì, la cucina può preparare piatti senza glutine, senza lattosio e per altre esigenze alimentari. Basta comunicarlo al momento della prenotazione e lo chef adatterà il menu.' },
  { question: 'È disponibile un menu degustazione?', answer: 'Sì, su prenotazione è disponibile un percorso degustazione con piatti stagionali e abbinamento vini della Tenuta Emo Capodilista. Il menu degustazione è particolarmente indicato per le cene del venerdì e sabato.' },
  { question: 'Quali sono i prezzi indicativi del menu?', answer: 'Il pranzo completo è nella fascia €€, indicativamente tra 25 e 40 euro a persona. I piatti principali vanno dai 12 ai 22 euro. I dessert artigianali dai 7 ai 10 euro. I prezzi possono variare in base alla stagione e alla disponibilità.' },
  { question: 'Il ristorante offre menu per bambini?', answer: 'Sì, su richiesta la cucina può preparare piatti adatti ai più piccoli, con porzioni ridotte e ingredienti semplici. Pasta, secondi leggeri e dessert sono le proposte più comuni per i bambini.' },
  { question: 'I vini sono inclusi nel prezzo?', answer: 'I vini non sono inclusi nel prezzo dei piatti ma sono selezionati dal sommelier. La carta vini privilegia le etichette della Tenuta Emo Capodilista (Colli Euganei DOC). Un calice parte da circa 5-8 euro.' },
  { question: 'Avete menu vegetariani o vegani?', answer: 'Sì, lo chef può preparare un percorso completamente vegetariano o vegano. Molti piatti del menu sono già a base vegetale, grazie alle verdure dell\'orto proprio e ai prodotti locali.' },
  { question: 'Come posso vedere il menu aggiornato?', answer: 'Il menu cambia frequentemente in base alla stagione. Per il menu aggiornato, contattaci via WhatsApp al +39 334 677 4483 o scrivi a lamontecchiagreen@gmail.com.' },
];

export const metadata = {
  title: 'Menu La Montecchia Green — Cucina stagionale a Selvazzano Dentro',
  description:
    "Menu stagionale de La Montecchia Green: antipasti, primi e pasta fatta in casa, secondi selezionati, pizze estive e dessert artigianali. Al Golf della Montecchia, Selvazzano Dentro (PD).",
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/menu',
    languages: { 'it': 'https://www.lamontecchiagreen.it/menu', 'en': 'https://www.lamontecchiagreen.it/en/menu' },
  },
  openGraph: {
    images: [{ url: '/images/tagliatelle-funghi.jpg', width: 1200, height: 630 }],
  },
};

export default function MenuPage() {
  return (
    <div>
      <section className="relative min-h-[42vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.menu}
            alt="Tagliatelle ai funghi — cucina de La Montecchia Green"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-warm-white">
              Menu La Montecchia Green — Cucina stagionale a Selvazzano Dentro
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green è una cucina italiana contemporanea, con ingredienti locali e stagionali.
                Utilizziamo prodotti dell’orto, pasta fatta in casa e dessert artigianali. I vini sono selezionati dal
                sommelier, inclusi quelli della Tenuta Emo Capodilista.
              </p>
            </Reveal>

            <Reveal delayMs={60}>
              <div className="rounded-2xl border border-green-mid/30 bg-green-mid/10 p-5 mb-8">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  La nostra filosofia
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  La cucina de La Montecchia Green è costruita attorno a tre pilastri: stagionalità, territorio e artigianalità.
                  Ogni piatto nasce dagli ingredienti che la terra offre in quel momento — dall&apos;orto proprio del Golf della
                  Montecchia, dai produttori locali dei Colli Euganei e dalle eccellenze italiane selezionate dallo chef
                  Enrico Ruggin. La pasta è fatta in casa ogni giorno, i dessert sono artigianali, e i vini sono curati
                  dal sommelier con particolare attenzione alla Tenuta Emo Capodilista.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Antipasti</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tartare di manzo con maionese al lime e capperi</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Carpaccio di gamberi con agrumi e misticanza</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Bruschette stagionali con verdure dell&apos;orto</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tagliere di salumi e formaggi del territorio</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={80}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Primi</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Pappardelle fatte in casa con ragù di selvaggina</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Risotto stagionale (es. carciofi e fonduta di Asiago)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tagliatelle ai funghi porcini</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Spaghetti Monograno Felicetti con vongole e bottarga</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={120}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Secondi</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Filetto di manzo con riduzione al rosso della Montecchia</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Pesce del giorno con verdure dell&apos;orto</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tagliata di vitello con rucola e grana padano</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Baccalà mantecato con polenta croccante</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={160}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Pizze (periodo estivo)</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Margherita con mozzarella di bufala</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Stagionale con verdure dell&apos;orto</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Alta lievitazione, impasto 72 ore</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Dessert</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tiramisù alla grappa euganea</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Millefoglie con crema alla vaniglia</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Semifreddo al cioccolato fondente</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Selezione di sorbetti artigianali</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={80}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Vini</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Fior d&apos;Arancio — Tenuta Emo Capodilista</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Rosso della Montecchia DOC</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Moscato Passito dei Colli Euganei</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Selezione di etichette venete e nazionali</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <Reveal delayMs={100}>
              <div className="rounded-2xl border border-green-mid/30 bg-green-mid/10 p-5">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  Prezzi indicativi
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  Antipasti: €10–16 | Primi: €12–18 | Secondi: €16–24 | Pizze: €8–14 | Dessert: €7–10
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-mid">
                  Menu degustazione (su prenotazione): €45–65 con abbinamento vini
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-green-mid/30 bg-green-mid/10 p-5">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  Nota importante
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  Il menu cambia ogni stagione. Contattaci per il menu aggiornato e per eventuali alternative per
                  intolleranze/allergie.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                    <Link href="/prenota">Prenota un tavolo</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contatti">Chiedi informazioni</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="A colpo d’occhio">
                <div className="space-y-2">
                  <div>
                    Cucina: <span className="font-semibold">italiana contemporanea</span>
                  </div>
                  <div>
                    Prodotti: <span className="font-semibold">locali e stagionali</span>
                  </div>
                  <div>
                    Specialità: <span className="font-semibold">pasta fatta in casa</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Vini selezionati da sommelier, inclusi Emo Capodilista.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark mb-6">
            Domande frequenti sul menu
          </h2>
        </Reveal>
        <div className="grid gap-4">
          {menuFaq.map((faq, idx) => (
            <Reveal key={idx} delayMs={idx * 40}>
              <div className="rounded-2xl border border-green-mid/20 bg-warm-white/70 p-5">
                <h3 className="text-sm font-semibold text-green-dark">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SchemaOrg variant="breadcrumb" breadcrumbItems={[
        { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
        { name: 'Menu', url: 'https://www.lamontecchiagreen.it/menu' },
      ]} />
      <SchemaOrg variant="customFaq" faqItems={menuFaq} />
    </div>
  );
}

