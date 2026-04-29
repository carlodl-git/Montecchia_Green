import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Users, Building2, UtensilsCrossed } from 'lucide-react';
import { hreflangForIt } from '@/lib/hreflang';
import { telUrl, mailtoUrl, whatsappUrl } from '@/lib/contact';
import Breadcrumb from '@/components/Breadcrumb';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import EventCard from '@/components/EventCard';
import TestimonialCard from '@/components/TestimonialCard';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Organizza il tuo evento: matrimoni e eventi aziendali vicino a Padova',
  description:
    'Location esclusiva per matrimoni, feste private e eventi aziendali al Golf della Montecchia. Spazi fino a 400 persone, terrazza panoramica, catering personalizzato. Selvazzano Dentro, Padova.',
  alternates: hreflangForIt('/eventi'),
  openGraph: {
    images: [{ url: '/images/Sala-Ristorante-eventi.jpg', width: 1200, height: 630 }],
  },
};

export default function EventiPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Eventi', href: '/eventi' },
          ]}
        />
      </section>
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Sala ristorante allestita per eventi al Golf della Montecchia"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-warm-white/85">
                Eventi
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-warm-white md:text-5xl lg:text-6xl">
              Organizza il tuo evento al Golf della Montecchia
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Location per matrimoni, eventi aziendali e feste private a Selvazzano Dentro
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-base leading-relaxed text-text-mid">
                Dove organizzare un matrimonio vicino a Padova? La Montecchia Green è una location immersa nel
                verde del Golf della Montecchia, in Via Montecchia 12 a Selvazzano Dentro. È anche una scelta
                ideale per eventi aziendali Padova: pranzi, cene e team building sul green. Se cerchi un ristorante
                per feste private Selvazzano, puoi affidarti a spazi modulari e a una proposta su misura.
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="grid gap-4 md:grid-cols-2">
                <InfoBox title="Spazi & capienza">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                      <div>Sala Petrarca: 100–300 persone.</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                      <div>In più: Sala Foscolo, Sala Ruzante, terrazza e spazi outdoor.</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                      <div>Atmosfera elegante ma non esclusiva, aperta a tutti.</div>
                    </div>
                  </div>
                </InfoBox>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                      Cosa include il servizio
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Menu personalizzato</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Sommelier e selezione vini</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                        <span>Allestimenti e staff dedicato</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Contatti eventi">
                <div className="space-y-2">
                  <div>
                    Email: <span className="font-semibold">eventimontecchia@golfmontecchia.it</span>
                  </div>
                  <div>
                    WhatsApp: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Risposta entro 24–48 ore lavorative.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        {/* Event cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <EventCard
              title="Eventi Privati"
              description="Matrimoni, compleanni e feste: La Montecchia Green crea un’esperienza completa con spazi modulabili e cura dei dettagli."
              bullets={[
                'Sala Petrarca (100–300 persone), Sala Foscolo e Sala Ruzante',
                'Terrazza panoramica sul green e spazi all’aperto',
                'Piscina e ambienti outdoor per un ritmo più rilassato',
              ]}
              icon={<Users className="h-5 w-5 text-green-mid" aria-hidden="true" />}
            />
          </Reveal>
          <Reveal delayMs={90}>
            <EventCard
              title="Eventi Aziendali"
              description="Team building sul green, pranzi e cene di lavoro, convention e meeting con logistica semplice e servizio professionale."
              bullets={[
                'Team building sul green con attività su misura',
                'Pranzi e cene di lavoro per team e clienti',
                'Convention e meeting: menu con collaborazione nutrizionisti Montecchia Performance Center',
              ]}
              icon={<Building2 className="h-5 w-5 text-green-mid" aria-hidden="true" />}
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-start">
          <div className="grid gap-4">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Un’esperienza raccontata da chi l’ha vissuta
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <TestimonialCard
                name="Giulia R."
                title="Matrimonio su misura"
                text="La Montecchia Green è stata la location perfetta: atmosfera verde, cucina curata e servizio davvero attento. Tutto è filato liscio dal primo contatto."
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
                    q: 'Quante persone può ospitare il ristorante per un evento?',
                    a: 'La Sala Petrarca può ospitare da 100 a 300 persone. Sono disponibili anche la Sala Foscolo, la Sala Ruzante, la terrazza e gli spazi all’aperto.',
                  },
                  {
                    q: 'Organizzate matrimoni al Golf della Montecchia?',
                    a: 'Sì, La Montecchia Green è una delle location preferite per matrimoni nella provincia di Padova. Lo staff organizza eventi su misura con menu personalizzato, servizio sommelier e allestimenti.',
                  },
                  {
                    q: 'Il ristorante è aperto solo ai soci del golf?',
                    a: 'No, La Montecchia Green è aperto a tutti: golfisti, famiglie, turisti e aziende.',
                  },
                  {
                    q: 'Come si prenota un evento privato?',
                    a: 'Contattare via email eventimontecchia@golfmontecchia.it, chiamare il +39 049 805 8464 o mandare un messaggio su WhatsApp al +39 334 677 4483.',
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

        {/* Schema: EventVenue + FAQ LIMITATE alla pagina (4 visibili). */}
        <SchemaOrg variant="eventVenue" />
        <SchemaOrg
          variant="customFaq"
          faqItems={[
            { question: 'Quante persone può ospitare il ristorante per un evento?', answer: 'La Sala Petrarca può ospitare da 100 a 300 persone. Sono disponibili anche Sala Foscolo, Sala Ruzante, la terrazza e gli spazi outdoor con piscina.' },
            { question: 'Organizzate matrimoni al Golf della Montecchia?', answer: 'Sì, La Montecchia Green è una delle location preferite per matrimoni nella provincia di Padova. Staff dedicato, menu personalizzato, servizio sommelier e allestimenti curati.' },
            { question: 'Il ristorante è aperto solo ai soci del golf?', answer: 'No, La Montecchia Green è aperto a tutti: golfisti, famiglie, turisti e aziende. Non è necessario essere soci del Golf della Montecchia.' },
            { question: 'Come si prenota un evento privato?', answer: 'Contatta via WhatsApp al +39 334 677 4483 (risposta rapida), email a eventimontecchia@golfmontecchia.it o telefonando al +39 049 805 8464. Risposta entro 24-48 ore lavorative.' },
          ]}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Contattaci per il tuo evento
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-mid">
              Hai un evento privato o aziendale? Contattaci e ricevi una proposta su misura: WhatsApp, email o
              chiamata.
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
                    Capacità: <span className="font-semibold">fino a 400 persone</span>
                  </div>
                  <div>
                    Area: <span className="font-semibold">Selvazzano Dentro (PD)</span>, vicino a Padova
                  </div>
                  <div className="text-xs text-text-mid/80">Aperto a tutti: non serve essere soci del golf.</div>
                </div>
              </InfoBox>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

