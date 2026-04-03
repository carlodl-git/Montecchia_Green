import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Bistrot & Kitchen — La Montecchia Green',
  description:
    'La Montecchia Green is an Italian contemporary restaurant inside the Golf della Montecchia in Selvazzano Dentro (PD). Seasonal ingredients, homemade pasta, handmade desserts and curated wines.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/ristorante',
    languages: { 'it': 'https://www.lamontecchiagreen.it/ristorante', 'en': 'https://www.lamontecchiagreen.it/en/ristorante' },
  },
};

export default function EnRistorantePage() {
  return (
    <div>
      <section className="relative min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Chef preparing food at La Montecchia Green"
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
              Bistrot La Montecchia Green — Italian cuisine in the green of Selvazzano
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">The place story</h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green is located inside the Golf della Montecchia Club House, in a restored former tobacco
                shop. It sits immersed in greenery at the foot of the Colli Euganei and is in Selvazzano Dentro (PD).
                It is perfect for an easy lunch and also for an elegant dinner.
              </p>
            </Reveal>

            <Reveal delayMs={110}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">Chef Enrico Ruggin</h3>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="text-base leading-relaxed text-text-mid">
                Chef Enrico Ruggin leads contemporary Italian cuisine based on seasonal products and local ingredients.
                We work with our own garden, homemade pasta and handmade desserts. Wines are selected by our sommelier,
                including wines from Tenuta Emo Capodilista.
              </p>
            </Reveal>

            <Reveal delayMs={210}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">Opening hours</h3>
            </Reveal>
            <Reveal delayMs={250}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed text-text-mid">
{`Lunch: every day
Dinner: Friday and Saturday (on reservation)
Bookings: +39 049 805 8464`}
                  </pre>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayMs={290}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                Signature products
              </h3>
            </Reveal>
            <Reveal delayMs={330}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Pasta Monograno Felicetti',
                  'Miele Millebuche (made in the golf field)',
                  'Wines from Tenuta Emo Capodilista',
                  'Cipriani specialties',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-mid">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={380}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <Link href="/en/menu">See the seasonal menu</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/en/prenota">Book a table</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Quick info">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Open to everyone:</span> golfers, families, tourists and companies
                  </div>
                  <div>
                    <span className="font-semibold">Address:</span> Via Montecchia 12, Selvazzano Dentro (PD)
                  </div>
                  <div>
                    <span className="font-semibold">Phone:</span> +39 049 805 8464
                  </div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}

