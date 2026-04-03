import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Book a table — La Montecchia Green',
  description:
    'Book a table at La Montecchia Green. Open to everyone inside the Golf della Montecchia in Selvazzano Dentro (PD). Lunch daily and dinner Friday & Saturday on reservation.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/prenota',
    languages: { 'it': 'https://www.lamontecchiagreen.it/prenota', 'en': 'https://www.lamontecchiagreen.it/en/prenota' },
  },
};

export default function EnPrenotaPage() {
  return (
    <div>
      <section className="relative min-h-[min(44vh,380px)] md:min-h-[46vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.prenota}
            alt="Dining room table at La Montecchia Green — book your table"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-cream" />
        </div>
        <div className="relative mx-auto flex max-w-6xl items-end px-4 pb-10 pt-16 md:pb-14 md:pt-20">
          <Reveal className="w-full">
            <div className="max-w-3xl rounded-2xl border border-white/15 bg-black/35 px-5 py-5 shadow-lg backdrop-blur-md md:px-7 md:py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/80">Reservations</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-warm-white md:text-5xl font-serif">
                Book a table
              </h1>
              <p className="mt-2 text-sm text-warm-white/90 md:text-base">
                La Montecchia Green — Golf della Montecchia, Selvazzano Dentro
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <p className="text-base leading-relaxed text-text-mid md:text-[1.05rem]">
                La Montecchia Green is open to everyone. Book for daily lunch and for dinner on Friday and Saturday
                (on reservation). If you prefer, contact us immediately via WhatsApp, email or phone.
              </p>
            </Reveal>

            <Reveal delayMs={90}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                  <Link
                    href="https://wa.me/393346774483?text=Hi%20La%20Montecchia%20Green%2C%20I%20would%20like%20to%20book%20a%20table."
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="mailto:lamontecchiagreen@gmail.com">Email</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="tel:+390498058464">Call</a>
                </Button>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Opening hours & contacts">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Lunch:</span> every day
                  </div>
                  <div>
                    <span className="font-semibold">Dinner:</span> Friday and Saturday (on reservation)
                  </div>
                  <div className="text-xs text-text-mid/80">
                    Tel: +39 049 805 8464 / +39 334 677 4483
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

