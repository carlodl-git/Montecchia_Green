import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Users, Heart, UtensilsCrossed, Wine, TreePine, Car, Building2 } from 'lucide-react';
import { hreflangForIt } from '@/lib/hreflang';
import { telUrl, mailtoUrl, whatsappUrl } from '@/lib/contact';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import TestimonialCard from '@/components/TestimonialCard';
import SchemaOrg from '@/components/SchemaOrg';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CONTACT } from '@/lib/contact';

// FAQ specifiche matrimoni — 5 domande ad alto volume PAA.
const weddingFaq = [
  {
    question: 'Quanti invitati può ospitare La Montecchia Green per un matrimonio?',
    answer:
      'La Sala Petrarca ospita da 100 a 300 invitati. Per matrimoni intimi sono disponibili la Sala Foscolo (30-80 persone) e la Sala Ruzante (20-40 persone), oltre alla terrazza panoramica sul green per cerimonie e aperitivi.',
  },
  {
    question: 'È possibile celebrare la cerimonia civile in loco?',
    answer:
      'Sì, la Sala Ruzante può essere allestita come sala cerimonia per rito civile o simbolico. In alternativa organizziamo la cerimonia all’aperto sulla terrazza con vista sul golf e sui Colli Euganei.',
  },
  {
    question: 'Offrite menu personalizzati e degustazioni?',
    answer:
      'Sì, lo chef Enrico Ruggin costruisce un menu su misura in base ai gusti degli sposi e alla stagione. Prima del matrimonio è prevista una degustazione gratuita dei piatti principali.',
  },
  {
    question: 'Avete un wedding planner di riferimento?',
    answer:
      'Il nostro staff interno coordina l’intera organizzazione: menu, allestimenti, fornitori esterni (fiori, musica, foto). Possiamo anche lavorare con il wedding planner scelto dagli sposi.',
  },
  {
    question: 'Quanto costa sposarsi a La Montecchia Green?',
    answer:
      'Il costo varia in base al numero di invitati, al menu e agli allestimenti. Su richiesta inviamo un preventivo personalizzato entro 48 ore lavorative. Scrivici via WhatsApp al +39 334 677 4483 per un sopralluogo gratuito.',
  },
];

export const metadata = {
  title: 'Matrimoni al Golf della Montecchia: location per matrimoni vicino a Padova',
  description:
    'Location per matrimoni al Golf della Montecchia, Selvazzano Dentro (PD). Ex tabacchificio restaurato ai piedi dei Colli Euganei: sale fino a 400 persone, terrazza panoramica, piscina, menu personalizzato dallo chef Enrico Ruggin, vini Tenuta Emo Capodilista. A 10 minuti da Padova.',
  alternates: hreflangForIt('/matrimoni'),
  openGraph: {
    images: [{ url: '/images/Sala-Ristorante-eventi.jpg', width: 1200, height: 630 }],
  },
};

export default function MatrimoniPage() {
  return (
    <div>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Matrimoni', href: '/matrimoni' },
          ]}
        />
      </section>
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Sala allestita per matrimoni al Golf della Montecchia, Selvazzano Dentro"
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
                Matrimoni
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-warm-white md:text-5xl lg:text-6xl">
              Il tuo matrimonio al Golf della Montecchia
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
                Una location unica per il giorno piu importante
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green e una delle location piu apprezzate per matrimoni nella provincia di Padova.
                Situata all&apos;interno della Club House del Golf della Montecchia, in un ex tabacchificio
                restaurato ai piedi dei Colli Euganei, offre un&apos;atmosfera che unisce eleganza storica e
                natura. A soli 10 minuti dal centro di Padova e a 5 minuti da Abano Terme, la struttura e
                facilmente raggiungibile e dispone di ampio parcheggio gratuito.
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="text-base leading-relaxed text-text-mid">
                Che siate una coppia alla ricerca di un ricevimento intimo o di una grande festa fino a 400
                invitati, La Montecchia Green vi accompagna dalla pianificazione al giorno del si con uno staff
                dedicato, un menu personalizzato e una cura dei dettagli che trasforma ogni matrimonio in
                un&apos;esperienza indimenticabile.
              </p>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Contatti matrimoni">
                <div className="space-y-2">
                  <div>
                    Email: <span className="font-semibold">eventimontecchia@golfmontecchia.it</span>
                  </div>
                  <div>
                    WhatsApp: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div>
                    Telefono: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Risposta entro 24-48 ore lavorative.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        {/* ── SPAZI ─────────────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Gli spazi per il vostro ricevimento
            </h2>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              La Montecchia Green dispone di sale modulabili e spazi all&apos;aperto che si adattano a ogni tipo
              di celebrazione: dalla cerimonia civile al ricevimento serale, dall&apos;aperitivo a bordo
              piscina alla cena sotto le stelle.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: 'Sala Petrarca',
                sub: 'La sala principale: da 100 a 300 persone, ideale per ricevimenti e cene di gala.',
                icon: <Users className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Sala Foscolo',
                sub: 'Da 30 a 80 persone: perfetta per cene private, cerimonie intime e aperitivi.',
                icon: <Heart className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Sala Ruzante',
                sub: 'Da 20 a 40 persone: ideale per cerimonie civili, brunch nuziali e riunioni ristrette.',
                icon: <Building2 className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Terrazza panoramica',
                sub: 'Vista aperta sul green e sui Colli Euganei: perfetta per aperitivi e cocktail party.',
                icon: <TreePine className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Piscina e spazi outdoor',
                sub: 'Area piscina e giardini per un ricevimento all\'aperto con atmosfera rilassata.',
                icon: <Wine className="h-4 w-4 text-green-mid" aria-hidden="true" />,
              },
              {
                label: 'Parcheggio gratuito',
                sub: 'Ampio parcheggio interno al Golf della Montecchia, comodo per tutti gli invitati.',
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

        {/* ── SERVIZI ───────────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Cucina, vini e servizi su misura
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              Ogni matrimonio a La Montecchia Green e un&apos;esperienza gastronomica curata nei minimi
              dettagli. Lo chef Enrico Ruggin costruisce un menu personalizzato con voi, partendo da ingredienti
              locali e stagionali, pasta fatta in casa e dessert artigianali. Il sommelier seleziona i vini
              migliori, con particolare attenzione alle etichette della Tenuta Emo Capodilista, una delle cantine
              piu prestigiose dei Colli Euganei DOC.
            </p>
          </Reveal>

          <Reveal delayMs={140}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <InfoBox title="Cucina & menu">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Menu personalizzato dallo chef Enrico Ruggin, costruito insieme agli sposi.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Ingredienti locali e stagionali, pasta fatta in casa, dessert artigianali.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Menu per allergie e intolleranze, opzioni vegetariane e vegane.</div>
                  </div>
                </div>
              </InfoBox>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Servizi inclusi
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Sommelier con vini della Tenuta Emo Capodilista</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Allestimenti e decorazioni personalizzate</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Staff dedicato per la gestione dell&apos;evento</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Coordinamento con fotografi, fioristi e musicisti</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Degustazione menu pre-matrimonio per gli sposi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>

        {/* ── PERCHE SCEGLIERCI ────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Perche scegliere La Montecchia Green per il vostro matrimonio
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              La struttura nasce in un ex tabacchificio restaurato con cura, conservando il fascino
              dell&apos;architettura originale e integrandolo con il verde del campo da golf e la vista
              panoramica sui Colli Euganei. Non e la solita sala ricevimenti: e un luogo con carattere, storia
              e un contesto naturale che rende ogni foto e ogni momento speciale.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Ex tabacchificio restaurato', sub: 'Architettura storica e fascino autentico, non una sala generica.' },
              { label: 'Vista Colli Euganei', sub: 'Panorama naturale che fa da sfondo a ogni momento della giornata.' },
              { label: '10 minuti da Padova', sub: 'Facilmente raggiungibile dal centro citta e dalle principali arterie.' },
              { label: '5 minuti da Abano Terme', sub: 'Ideale per ospiti che soggiornano nelle strutture termali.' },
              { label: 'Aperto a tutti', sub: 'Non serve essere soci del golf: la location e per tutti.' },
              { label: 'Parcheggio gratuito', sub: 'Ampio parcheggio interno, comodo e sicuro per gli invitati.' },
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
                  La parola agli sposi
                </h2>
              </Reveal>
              <Reveal delayMs={80}>
                <TestimonialCard
                  name="Giulia R."
                  title="Matrimonio su misura"
                  text="La Montecchia Green e stata la location perfetta per il nostro matrimonio: il verde del golf, la terrazza con vista sui Colli, una cucina eccezionale e uno staff che ci ha seguiti in ogni dettaglio. Tutto e filato liscio dal primo sopralluogo fino all'ultimo ballo."
                />
              </Reveal>
            </div>

            <div className="grid gap-4">
              <Reveal>
                <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                  Domande frequenti sui matrimoni
                </h2>
              </Reveal>
              <Reveal delayMs={80}>
                <div className="grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
                  {[
                    {
                      q: 'Quanti invitati puo ospitare La Montecchia Green per un matrimonio?',
                      a: 'La Sala Petrarca ospita da 100 a 300 persone. Per ricevimenti piu intimi sono disponibili la Sala Foscolo (30-80 persone) e la Sala Ruzante (20-40 persone). Terrazza e piscina ampliano gli spazi all\'aperto.',
                    },
                    {
                      q: 'E possibile organizzare la cerimonia civile nella struttura?',
                      a: 'Si, la Sala Ruzante e la terrazza sono spazi ideali per cerimonie civili. Lo staff coordina ogni dettaglio con il Comune di riferimento.',
                    },
                    {
                      q: 'Come funziona la personalizzazione del menu?',
                      a: 'Lo chef Enrico Ruggin costruisce il menu insieme agli sposi durante un incontro dedicato, con possibilita di degustazione. Menu per intolleranze, allergie, opzioni vegetariane e vegane sono sempre disponibili.',
                    },
                    {
                      q: 'Quali vini vengono proposti per il ricevimento?',
                      a: 'Il sommelier propone una selezione curata con vini della Tenuta Emo Capodilista, tra le cantine piu rinomate dei Colli Euganei DOC. Sono disponibili anche etichette nazionali e internazionali.',
                    },
                    {
                      q: 'La location e raggiungibile facilmente?',
                      a: 'Si, La Montecchia Green si trova a 10 minuti da Padova centro, 5 minuti da Abano Terme e 30 minuti da Venezia. Ampio parcheggio gratuito all\'interno del Golf della Montecchia.',
                    },
                    {
                      q: 'Come si prenota un appuntamento per visitare la location?',
                      a: 'Contattate via WhatsApp al +39 334 677 4483, email a eventimontecchia@golfmontecchia.it oppure chiamate il +39 334 677 4483. Lo staff risponde entro 24-48 ore lavorative per fissare un sopralluogo.',
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

        {/* ── FAQ SPECIFICHE MATRIMONI ─────────────────── */}
        <div className="mt-12">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark mb-6">
              Domande frequenti sui matrimoni
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {weddingFaq.map((f, idx) => (
              <Reveal key={idx} delayMs={idx * 40}>
                <div className="rounded-2xl border border-green-mid/20 bg-warm-white/70 p-5">
                  <h3 className="text-sm font-semibold text-green-dark">{f.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-mid">{f.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── CROSS-LINK BLOG ───────────────────────────── */}
        <div className="mt-10 rounded-2xl border border-green-dark/10 bg-warm-white p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-green-dark/85">Approfondimenti</div>
          <p className="mt-2 text-sm leading-relaxed text-text-mid">
            Scopri perché siamo considerati una delle migliori{' '}
            <Link href="/blog/location-matrimonio-padova" className="font-semibold text-green-dark underline decoration-green-mid/40 underline-offset-2 hover:decoration-green-dark">
              location per matrimoni a Padova
            </Link>{' '}
            e leggi la guida alla{' '}
            <Link href="/blog/cena-romantica-colli-euganei" className="font-semibold text-green-dark underline decoration-green-mid/40 underline-offset-2 hover:decoration-green-dark">
              cena romantica sui Colli Euganei
            </Link>.
          </p>
        </div>

        {/* ── SCHEMA ────────────────────────────────────── */}
        <SchemaOrg variant="eventVenue" />
        <SchemaOrg variant="customFaq" faqItems={weddingFaq} />
        <SchemaOrg
          variant="breadcrumb"
          breadcrumbItems={[
            { name: 'Home', url: `${CONTACT.site}/` },
            { name: 'Matrimoni', url: `${CONTACT.site}/matrimoni` },
          ]}
        />

        {/* ── CTA ───────────────────────────────────────── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Iniziamo a progettare il vostro matrimonio
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-mid">
              Ogni matrimonio a La Montecchia Green e unico. Contattateci per un sopralluogo gratuito, una
              proposta personalizzata e una degustazione del menu. Siamo a disposizione via WhatsApp, email o
              telefono.
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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/prenota">Richiedi un appuntamento</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/eventi">Tutti gli eventi</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={150}>
              <InfoBox title="Informazioni essenziali">
                <div className="space-y-2">
                  <div>
                    Capacita: <span className="font-semibold">da 20 a 400 persone</span>
                  </div>
                  <div>
                    Area: <span className="font-semibold">Selvazzano Dentro (PD)</span>, 10 min da Padova
                  </div>
                  <div>
                    Parcheggio: <span className="font-semibold">gratuito</span>
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
