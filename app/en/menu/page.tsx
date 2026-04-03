import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Menu La Montecchia Green — Seasonal cuisine in Selvazzano Dentro',
  description:
    'La Montecchia Green seasonal menu: appetizers, homemade pasta, selected main courses, summer pizzas and handmade desserts. Inside Golf della Montecchia, Selvazzano Dentro (PD).',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/menu',
    languages: { 'it': 'https://www.lamontecchiagreen.it/menu', 'en': 'https://www.lamontecchiagreen.it/en/menu' },
  },
  openGraph: {
    images: [{ url: '/images/tagliatelle-funghi.jpg', width: 1200, height: 630 }],
  },
};

export default function EnMenuPage() {
  return (
    <div>
      <section className="relative min-h-[42vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.menu}
            alt="Tagliatelle with mushrooms at La Montecchia Green"
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
              Menu La Montecchia Green — Seasonal cuisine in Selvazzano Dentro
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green offers contemporary Italian cuisine with local and seasonal ingredients. We use
                our garden products, homemade pasta and handmade desserts. Our sommelier curates the wine selection,
                including Tenuta Emo Capodilista wines.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Starters</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tartare</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Bruschetta</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={80}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">First courses</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Homemade pasta (e.g. pappardelle with black cabbage)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Seasonal risotto</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={120}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Main courses</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Selected meats</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Fresh fish of the day</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={160}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Pizzas</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Summer season</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>High-leavening dough</span>
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
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Desserts</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>“Millefoglie”</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Handmade desserts</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delayMs={80}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Wines</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Emo Capodilista selection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Sommelier wine list</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-green-mid/30 bg-green-mid/10 p-5">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  Important note
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  The menu changes every season. Contact us for the updated menu and for dietary requirements /
                  allergies.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                    <Link href="/en/prenota">Book a table</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/en/contatti">Ask for information</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="At a glance">
                <div className="space-y-2">
                  <div>
                    Cuisine: <span className="font-semibold">contemporary Italian</span>
                  </div>
                  <div>
                    Ingredients: <span className="font-semibold">local and seasonal</span>
                  </div>
                  <div>
                    Signature: <span className="font-semibold">homemade pasta</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Curated wines with sommelier, including Emo Capodilista.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}

