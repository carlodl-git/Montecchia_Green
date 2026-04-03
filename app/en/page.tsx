import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, CalendarClock } from 'lucide-react';

import Reveal from '@/components/Reveal';
import InfoBox from '@/components/InfoBox';
import { HOME_GALLERY, PAGE_HERO_IMAGES } from '@/lib/site-images';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata = {
  title: 'La Montecchia Green — Bistrot & Events in Selvazzano Dentro',
  description:
    'La Montecchia Green is a bistrot & restaurant inside the Golf della Montecchia in Selvazzano Dentro (PD). Italian cuisine with local seasonal ingredients and spaces for private and corporate events near Padua.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en',
    languages: { 'it': 'https://www.lamontecchiagreen.it', 'en': 'https://www.lamontecchiagreen.it/en', 'x-default': 'https://www.lamontecchiagreen.it' },
  },
};

export default function EnHomePage() {
  const testimonials = [
    {
      name: 'Giulia R.',
      title: 'A wedding tailored to us',
      text: 'The Montecchia Green was the perfect venue: a green atmosphere, great food and attentive service. Everything went smoothly from the first call.',
    },
    {
      name: 'Marco L.',
      title: 'Contemporary Italian cuisine',
      text: 'Local, seasonal ingredients with dishes that surprise. Fresh homemade pasta and handmade desserts — we will come back.',
    },
    {
      name: 'Sara & Luca',
      title: 'Welcoming and overlooking the green',
      text: 'We had dinner with a view of the green: calm, nature and a wine selection suggested by the sommelier. Elegant but not exclusive.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[92vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.home}
            alt="Terrace and golf green at La Montecchia Green"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-cream" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-20 md:pt-24">
          <div className="rounded-2xl border border-white/15 bg-black/40 p-6 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md md:p-8">
            <div className="flex flex-col gap-6">
              <Reveal>
                <div className="inline-flex w-fit items-center rounded-full border border-white/20 bg-black/35 px-4 py-2 text-sm font-semibold text-warm-white shadow-sm">
                  Open to everyone — no golf membership required
                </div>
              </Reveal>

              <Reveal delayMs={80}>
                <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-warm-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl">
                  La Montecchia Green — Bistrot &amp; Events in Selvazzano Dentro
                </h1>
              </Reveal>

              <Reveal delayMs={140}>
                <p className="max-w-2xl text-base leading-relaxed text-warm-white/95 md:text-lg">
                  A culinary experience immersed in the green of the Golf della Montecchia, at the foot of the Colli
                  Euganei. Open to everyone.
                </p>
              </Reveal>

              <Reveal delayMs={220}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white shadow-md hover:bg-green-mid">
                    <Link href="/en/prenota">Book a table</Link>
                  </Button>
                  <Button variant="secondary" asChild size="lg" className="border-white/25 bg-warm-white/95 text-text-dark hover:bg-warm-white">
                    <Link href="/en/eventi">Explore events</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Reveal delayMs={260} className="md:col-span-1">
              <InfoBox title="Quick info">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                  <div>
                    Inside the Golf Club House
                    <div className="text-xs text-text-mid/75">Via Montecchia 12, Selvazzano Dentro (PD)</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={300} className="md:col-span-1">
              <InfoBox title="Opening hours">
                <div className="space-y-1">
                  <div className="flex items-start gap-3">
                    <CalendarClock className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Lunch: every day</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarClock className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Dinner: Friday &amp; Saturday on reservation</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={340} className="md:col-span-1">
              <InfoBox title="Contacts">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                  <div>
                    +39 049 805 8464 / +39 334 677 4483
                    <div className="text-xs text-text-mid/75">lamontecchiagreen@gmail.com</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-green-dark">
            A relaxed bistrot in the golf green
          </h2>
        </Reveal>
        <Reveal delayMs={70}>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
            La Montecchia Green is open to everyone: golfers, families, friends, tourists and companies. It offers
            contemporary Italian cuisine with local seasonal ingredients, products from our garden, homemade pasta and
            handmade desserts. Every Friday and Saturday evening, on reservation, dinner becomes even more special with
            curated wine pairings.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Lunch & dinner',
              text: 'Seasonal Italian cuisine every day for lunch, and dinner Friday & Saturday on reservation.',
            },
            {
              title: 'Snack bar',
              text: 'Aperitifs, snacks and refined breakfasts right on the green.',
            },
            {
              title: 'Events',
              text: 'Weddings, private celebrations and corporate team building in flexible spaces up to 300 people.',
            },
          ].map((card, idx) => (
            <Reveal key={card.title} delayMs={idx * 90}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Pillar {idx + 1}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-text-dark font-serif">{card.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-text-mid/95">{card.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-green-dark/10 bg-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-green-dark">
              Why choose La Montecchia Green
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Green nature and views over the golf',
              'Local seasonal ingredients and our garden products',
              'Chef Enrico Ruggin: refined contemporary style',
              'Flexible spaces for private and corporate events',
              '10 minutes from Padua — easy to reach',
              'Wines from Tenuta Emo Capodilista selected by our sommelier',
            ].map((f, idx) => (
              <Reveal key={f} delayMs={idx * 60}>
                <Card className="bg-warm-white/80">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-green-mid" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-text-mid/95">{f}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-green-dark">
            A gallery that tells the place
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_GALLERY.map((img, idx) => (
            <Reveal key={img.src} delayMs={idx * 50}>
              <div className="relative overflow-hidden rounded-2xl border border-black/5">
                <Image
                  src={img.src}
                  alt={img.altEn}
                  width={900}
                  height={620}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-green-dark/10 bg-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-green-dark">
              Reviews
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delayMs={idx * 90}>
                <TestimonialCard name={t.name} title={t.title} text={t.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-green-dark p-8 text-warm-white shadow-lg">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-mid/40" aria-hidden="true" />
            <div className="absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-green-mid/25" aria-hidden="true" />

            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-3xl font-serif font-semibold tracking-tight">Have an event in mind?</h2>
                <p className="mt-2 text-sm leading-relaxed text-warm-white/90 max-w-xl">
                  Tell us about your wedding, private celebration or corporate event. We create tailored proposals with
                  flexible spaces up to 300 guests.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button asChild size="lg" className="bg-warm-white text-green-dark hover:bg-warm-white/95">
                  <Link
                    href="https://wa.me/393346774483?text=Hi%20La%20Montecchia%20Green%2C%20I%20would%20like%20to%20talk%20about%20an%20event."
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="mailto:eventimontecchia@golfmontecchia.it">Email</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

