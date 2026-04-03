import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Menu La Montecchia Green — Cucina stagionale a Selvazzano Dentro',
  description:
    "Menu stagionale de La Montecchia Green: antipasti, primi e pasta fatta in casa, secondi selezionati, pizze estive e dessert artigianali. Al Golf della Montecchia, Selvazzano Dentro (PD).",
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/menu',
    languages: { 'it': 'https://www.lamontecchiagreen.it/menu', 'en': 'https://www.lamontecchiagreen.it/en/menu' },
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

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Antipasti</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tartare</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Bruschette</span>
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
                        <span>Pasta fatta in casa (es. pappardelle con cavolo nero)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Risotto stagionale</span>
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
                        <span>Carni selezionate</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Pesce del giorno</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={160}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Pizze</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Periodo estivo</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Alta lievitazione</span>
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
                        <span>Millefoglie</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Dolci artigianali</span>
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
                        <span>Selezione Emo Capodilista</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Carta vini del sommelier</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

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
    </div>
  );
}

