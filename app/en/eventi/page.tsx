import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Users, Building2, UtensilsCrossed } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import EventCard from '@/components/EventCard';
import TestimonialCard from '@/components/TestimonialCard';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Organize your event — Weddings & corporate events near Padua',
  description:
    'Wedding venue, private celebrations and corporate events at Golf della Montecchia. Spaces up to 300 guests, panoramic terrace, tailored catering. Selvazzano Dentro, Padua.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/eventi',
    languages: { 'it': 'https://www.lamontecchiagreen.it/eventi', 'en': 'https://www.lamontecchiagreen.it/en/eventi' },
  },
  openGraph: {
    images: [{ url: '/images/Sala-Ristorante-eventi.jpg', width: 1200, height: 630 }],
  },
};

export default function EnEventiPage() {
  return (
    <div>
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Restaurant hall set up for events at Golf della Montecchia"
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
              Organize your event at Golf della Montecchia — Padua
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Wedding venue, private celebrations and corporate events in Selvazzano Dentro
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-base leading-relaxed text-text-mid">
                Where to organize a wedding near Padua? La Montecchia Green is a green venue inside the Golf della
                Montecchia, at Via Montecchia 12 in Selvazzano Dentro. It is also an ideal choice for corporate events in
                Padua: business lunches, dinners and team building on the green. If you are looking for a restaurant for
                private celebrations in Selvazzano, you can rely on flexible spaces and a tailored proposal.
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="grid gap-4 md:grid-cols-2">
                <InfoBox title="Spaces & capacity">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                      <div>Sala Petrarca: 100–300 guests.</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                      <div>Plus: Sala Foscolo, Sala Ruzante, terrace and outdoor areas.</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                      <div>Open to everyone, not reserved only for golf members.</div>
                    </div>
                  </div>
                </InfoBox>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">What we include</div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Tailored menu</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Sommelier service and wine selection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Setup, decor and dedicated staff</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Events contacts">
                <div className="space-y-2">
                  <div>
                    Email: <span className="font-semibold">eventimontecchia@golfmontecchia.it</span>
                  </div>
                  <div>
                    WhatsApp: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Reply in 24–48 business hours.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <EventCard
              title="Private events"
              description="Weddings, birthdays and celebrations. La Montecchia Green creates a complete experience with flexible spaces and attention to details."
              bullets={[
                'Sala Petrarca (100–300 guests), Sala Foscolo and Sala Ruzante',
                'Panoramic terrace and outdoor areas',
                'Pool and outdoor spaces for a relaxed pace',
              ]}
              icon={<Users className="h-5 w-5 text-green-mid" aria-hidden="true" />}
            />
          </Reveal>
          <Reveal delayMs={90}>
            <EventCard
              title="Corporate events"
              description="Team building on the green, business lunches/dinners and conventions/meetings with smooth logistics and professional service."
              bullets={[
                'Team building on the green with tailored activities',
                'Business lunches and dinners for teams and clients',
                'Conventions and meetings with menus supported by Montecchia Performance Center nutritionists',
              ]}
              icon={<Building2 className="h-5 w-5 text-green-mid" aria-hidden="true" />}
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-start">
          <div className="grid gap-4">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                A story from our guests
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <TestimonialCard
                name="Giulia R."
                title="A wedding tailored to us"
                text="The Montecchia Green was the perfect venue: green atmosphere, great food and attentive service. Everything went smoothly from the first call."
              />
            </Reveal>
          </div>

          <div className="grid gap-4">
            <Reveal>
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">FAQ</h2>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
                {[
                  {
                    q: 'How many people can the venue host for an event?',
                    a: 'La Montecchia Green can host from 100 to 300 people in Sala Petrarca. Sala Foscolo, Sala Ruzante, the terrace and outdoor areas are also available.',
                  },
                  {
                    q: 'Do you organize weddings at Golf della Montecchia?',
                    a: 'Yes. La Montecchia Green is one of the preferred wedding venues in Padua province. The staff organizes tailor-made events with a personalized menu, sommelier service and decor.',
                  },
                  {
                    q: 'Is the restaurant open only to golf members?',
                    a: 'No. La Montecchia Green is open to everyone: golfers, families, tourists and companies.',
                  },
                  {
                    q: 'How do I book a private event?',
                    a: 'Contact via email eventimontecchia@golfmontecchia.it, call +39 334 677 4483 or send a WhatsApp message to +39 334 677 4483.',
                  },
                ].map((item, idx) => (
                  <div key={item.q}>
                    <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                    <p className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</p>
                    {idx !== 3 ? <div className="mt-4 border-t border-black/5" /> : null}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <SchemaOrg variant="eventVenue" lang="en" />
        <SchemaOrg variant="faq" lang="en" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Contact us for your event
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-mid">
              Have a private or corporate event? Get a tailored proposal — contact us via WhatsApp, email or phone.
            </p>
          </Reveal>

          <div className="grid gap-4">
            <Reveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                  <Link
                    href="https://wa.me/393346774483?text=Hi%20La%20Montecchia%20Green%2C%20I%20would%20like%20information%20about%20an%20event."
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
                  <a href="tel:+393346774483">Call</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <InfoBox title="Quick info">
                <div className="space-y-2">
                  <div>
                    Capacity: <span className="font-semibold">up to 300 guests</span>
                  </div>
                  <div>
                    Area: <span className="font-semibold">Selvazzano Dentro (PD)</span> near Padua
                  </div>
                  <div className="text-xs text-text-mid/80">Open to everyone — no golf membership required.</div>
                </div>
              </InfoBox>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

