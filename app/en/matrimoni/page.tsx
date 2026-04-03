import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Users, Heart, UtensilsCrossed, Wine, TreePine, Car, Building2 } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import TestimonialCard from '@/components/TestimonialCard';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Weddings at Golf della Montecchia — Wedding venue near Padua, Italy',
  description:
    'Wedding venue at Golf della Montecchia, Selvazzano Dentro (Padua). Restored tobacco warehouse at the foot of the Euganean Hills: halls up to 300 guests, panoramic terrace, pool, tailored menu by chef Enrico Ruggin, Tenuta Emo Capodilista wines. 10 minutes from Padua.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/matrimoni',
    languages: { 'it': 'https://www.lamontecchiagreen.it/matrimoni', 'en': 'https://www.lamontecchiagreen.it/en/matrimoni' },
  },
};

export default function EnMatrimoniPage() {
  return (
    <div>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Hall set up for weddings at Golf della Montecchia, Selvazzano Dentro"
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
              Your wedding at Golf della Montecchia — Padua, Italy
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        {/* ── INTRO + SIDEBAR ──────────────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                A unique venue for the most important day
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green is one of the most sought-after wedding venues in the province of Padua.
                Located inside the Club House of Golf della Montecchia, in a beautifully restored former tobacco
                warehouse at the foot of the Euganean Hills, it combines historic elegance with a lush natural
                setting. Just 10 minutes from the centre of Padua and 5 minutes from Abano Terme, the venue is
                easy to reach and offers ample free parking.
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="text-base leading-relaxed text-text-mid">
                Whether you are looking for an intimate reception or a grand celebration for up to 300 guests,
                La Montecchia Green will guide you from the planning stage to the big day with a dedicated team,
                a bespoke menu and meticulous attention to detail that turns every wedding into an unforgettable
                experience.
              </p>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Wedding contacts">
                <div className="space-y-2">
                  <div>
                    Email: <span className="font-semibold">eventimontecchia@golfmontecchia.it</span>
                  </div>
                  <div>
                    WhatsApp: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div>
                    Phone: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Reply within 24-48 business hours.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        {/* ── SPACES ────────────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Spaces for your reception
            </h2>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              La Montecchia Green offers flexible halls and outdoor areas that adapt to every type of
              celebration: from civil ceremonies to evening receptions, from poolside aperitifs to dinner
              under the stars.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: 'Sala Petrarca',
                sub: 'The main hall: 100 to 300 guests, ideal for receptions and gala dinners.',
                icon: <Users className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Sala Foscolo',
                sub: '30 to 80 guests: perfect for private dinners, intimate ceremonies and cocktails.',
                icon: <Heart className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Sala Ruzante',
                sub: '20 to 40 guests: ideal for civil ceremonies, bridal brunches and small gatherings.',
                icon: <Building2 className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Panoramic terrace',
                sub: 'Open views over the green and the Euganean Hills: perfect for aperitifs and cocktail parties.',
                icon: <TreePine className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Pool & outdoor areas',
                sub: 'Poolside area and gardens for an outdoor reception with a relaxed atmosphere.',
                icon: <Wine className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Free parking',
                sub: 'Large car park inside Golf della Montecchia, convenient for all your guests.',
                icon: <Car className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
            ].map((item, idx) => (
              <Reveal key={item.label} delayMs={idx * 60}>
                <div className="card-lift flex items-start gap-4 rounded-2xl border border-green-dark/8 bg-warm-white p-5 shadow-sm">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-dark" aria-hidden="true">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-text-dark">{item.label}</div>
                    <div className="mt-0.5 text-xs text-text-mid/80">{item.sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── SERVICES ──────────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Cuisine, wines and bespoke services
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              Every wedding at La Montecchia Green is a culinary experience crafted down to the finest detail.
              Chef Enrico Ruggin creates a bespoke menu with you, built on local and seasonal ingredients,
              handmade pasta and artisan desserts. The sommelier curates the wine selection with a focus on
              labels from Tenuta Emo Capodilista, one of the most prestigious wineries in the Colli Euganei DOC
              appellation.
            </p>
          </Reveal>

          <Reveal delayMs={140}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <InfoBox title="Cuisine & menu">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Bespoke menu by chef Enrico Ruggin, designed together with the couple.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Local and seasonal ingredients, handmade pasta, artisan desserts.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Menus for allergies and intolerances, vegetarian and vegan options.</div>
                  </div>
                </div>
              </InfoBox>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Included services
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Sommelier with Tenuta Emo Capodilista wines</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Personalised setup and decorations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Dedicated staff for event management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Coordination with photographers, florists and musicians</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Pre-wedding tasting for the couple</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>

        {/* ── WHY CHOOSE US ─────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Why choose La Montecchia Green for your wedding
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              The venue is housed in a carefully restored former tobacco warehouse that preserves the charm of
              the original architecture while blending seamlessly with the golf course greenery and panoramic
              views of the Euganean Hills. This is not a standard banquet hall: it is a place with character,
              history and a natural backdrop that makes every photo and every moment truly special.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Restored tobacco warehouse', sub: 'Historic architecture and authentic charm, not a generic hall.' },
              { label: 'Euganean Hills views', sub: 'A natural panorama as the backdrop for every moment of the day.' },
              { label: '10 minutes from Padua', sub: 'Easy to reach from the city centre and major roads.' },
              { label: '5 minutes from Abano Terme', sub: 'Ideal for guests staying at the nearby thermal resorts.' },
              { label: 'Open to everyone', sub: 'No golf membership required: the venue welcomes all couples.' },
              { label: 'Free parking', sub: 'Large internal car park, convenient and secure for your guests.' },
            ].map((item, idx) => (
              <Reveal key={item.label} delayMs={idx * 60}>
                <div className="card-lift flex items-start gap-4 rounded-2xl border border-green-dark/8 bg-warm-white p-5 shadow-sm">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-dark" aria-hidden="true">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-text-dark">{item.label}</div>
                    <div className="mt-0.5 text-xs text-text-mid/80">{item.sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── TESTIMONIAL + FAQ ─────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:items-start">
            <div className="grid gap-4">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                  What our couples say
                </h2>
              </Reveal>
              <Reveal delayMs={80}>
                <TestimonialCard
                  name="Giulia R."
                  title="A wedding tailored to us"
                  text="La Montecchia Green was the perfect venue for our wedding: the golf course greenery, the terrace overlooking the Hills, outstanding food and a team that followed every detail. Everything ran smoothly from the first site visit to the last dance."
                />
              </Reveal>
            </div>

            <div className="grid gap-4">
              <Reveal>
                <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                  Frequently asked questions
                </h2>
              </Reveal>
              <Reveal delayMs={80}>
                <div className="grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
                  {[
                    {
                      q: 'How many guests can La Montecchia Green accommodate for a wedding?',
                      a: 'Sala Petrarca holds 100 to 300 guests. For more intimate receptions, Sala Foscolo (30-80 guests) and Sala Ruzante (20-40 guests) are available. The terrace and pool extend the outdoor capacity.',
                    },
                    {
                      q: 'Can we hold a civil ceremony at the venue?',
                      a: 'Yes. Sala Ruzante and the terrace are ideal settings for civil ceremonies. The staff coordinates every detail with the relevant municipality.',
                    },
                    {
                      q: 'How does menu customisation work?',
                      a: 'Chef Enrico Ruggin designs the menu together with the couple during a dedicated meeting, with the option of a tasting. Menus for intolerances, allergies, vegetarian and vegan guests are always available.',
                    },
                    {
                      q: 'Which wines are offered for the reception?',
                      a: 'The sommelier curates a selection featuring wines from Tenuta Emo Capodilista, one of the most renowned wineries in the Colli Euganei DOC area. National and international labels are also available.',
                    },
                    {
                      q: 'Is the venue easy to reach?',
                      a: 'Yes. La Montecchia Green is 10 minutes from Padua centre, 5 minutes from Abano Terme and 30 minutes from Venice. Free parking is available inside Golf della Montecchia.',
                    },
                    {
                      q: 'How do we book a visit to the venue?',
                      a: 'Contact us via WhatsApp at +39 334 677 4483, email eventimontecchia@golfmontecchia.it or call +39 334 677 4483. The team replies within 24-48 business hours to arrange a site visit.',
                    },
                  ].map((item, idx) => (
                    <div key={item.q}>
                      <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                      <p className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</p>
                      {idx !== 5 ? <div className="mt-4 border-t border-black/5" /> : null}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── SCHEMA ────────────────────────────────────── */}
        <SchemaOrg variant="eventVenue" />
        <SchemaOrg variant="faq" />
        <SchemaOrg
          variant="breadcrumb"
          breadcrumbItems={[
            { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
            { name: 'Weddings', url: 'https://www.lamontecchiagreen.it/en/matrimoni' },
          ]}
        />

        {/* ── CTA ───────────────────────────────────────── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Let&apos;s start planning your wedding
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-mid">
              Every wedding at La Montecchia Green is unique. Contact us for a complimentary site visit, a
              personalised proposal and a menu tasting. We are available via WhatsApp, email or phone.
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
                    href="https://wa.me/393346774483?text=Hi%20La%20Montecchia%20Green%2C%20I%20would%20like%20information%20about%20a%20wedding."
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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/en/prenota">Request an appointment</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/en/eventi">All events</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={150}>
              <InfoBox title="Key information">
                <div className="space-y-2">
                  <div>
                    Capacity: <span className="font-semibold">20 to 300 guests</span>
                  </div>
                  <div>
                    Location: <span className="font-semibold">Selvazzano Dentro (PD)</span> — 10 min from Padua
                  </div>
                  <div>
                    Parking: <span className="font-semibold">free</span>
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
