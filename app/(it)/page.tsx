import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, CalendarClock, UtensilsCrossed, Star, Sparkles, MessageCircle, ChevronDown } from 'lucide-react';
import { hreflangForIt } from '@/lib/hreflang';
import { telUrl, mailtoUrl, whatsappUrl } from '@/lib/contact';

import Reveal from '@/components/Reveal';
import { HOME_GALLERY, PAGE_HERO_IMAGES } from '@/lib/site-images';
import { Button } from '@/components/ui/Button';
import TestimonialCard from '@/components/TestimonialCard';

// Title lasciato al default del layout (la home mostra il title completo
// "La Montecchia Green — Bistrot & Eventi a Selvazzano Dentro, Padova").
// La description sotto è < 155 char con CTA WhatsApp esplicita.
export const metadata = {
  description:
    'Bistrot & eventi nel verde del Golf della Montecchia, 10 min da Padova. Cucina italiana, matrimoni, aperitivo. Prenota su WhatsApp.',
  alternates: hreflangForIt('/'),
};

const pillars = [
  {
    icon: UtensilsCrossed,
    title: 'Pranzo e cena',
    text: 'Cucina italiana stagionale ogni giorno a pranzo, venerdì e sabato sera su prenotazione.',
  },
  {
    icon: Sparkles,
    title: 'Snack bar',
    text: 'Aperitivi, spuntini e colazioni raffinate direttamente sul green.',
  },
  {
    icon: Star,
    title: 'Eventi',
    text: 'Matrimoni, feste private e team building con spazi modulabili fino a 300 persone.',
  },
];

const features = [
  { label: 'Verde e natura', sub: 'Vista sul golf e atmosfera rilassata' },
  { label: 'Ingredienti locali', sub: "Stagionali, con prodotti dell'orto" },
  { label: 'Chef stellato', sub: 'Esperienze di alto livello in cucina' },
  { label: 'Spazi modulabili', sub: 'Per eventi privati e aziendali' },
  { label: 'A 10 minuti da Padova', sub: 'Facile da raggiungere, lontano dal caos' },
  { label: 'Vini della Tenuta', sub: 'Selezione Emo Capodilista' },
];

export default function HomePage() {
  const testimonials = [
    {
      name: 'Giulia R.',
      title: 'Matrimonio su misura',
      text: 'La Montecchia Green è stata la location perfetta: atmosfera verde, cucina curata e servizio davvero attento. Tutto è filato liscio dal primo contatto.',
    },
    {
      name: 'Marco L.',
      title: 'Cucina italiana contemporanea',
      text: 'Ingredienti locali e stagionali con piatti che sanno sorprendere. Pasta fatta in casa e dessert artigianali: torneremo sicuramente.',
    },
    {
      name: 'Sara & Luca',
      title: 'Accoglienza e vista sul green',
      text: 'Abbiamo cenato sul green: silenzio, natura e un vino selezionato dal sommelier. Un posto elegante ma informale, davvero "a misura di persone".',
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — immagine piena a schermo intero
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-dvh min-h-[600px]">

        {/* Immagine di sfondo */}
        <Image
          src={PAGE_HERO_IMAGES.home}
          alt="Facciata storica della Club House del Golf della Montecchia con terrazza e dehors al tramonto — La Montecchia Green, Selvazzano Dentro (PD)"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay leggero: solo un velo scuro in basso per leggibilità testo,
            lascio l'immagine molto visibile nella parte alta */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

        {/* Contenuto centrato */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">

          {/* Badge */}
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-warm-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-light" />
              Aperto a tutti — non serve essere soci
            </div>
          </Reveal>

          {/* Titolo */}
          <Reveal delayMs={80}>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-warm-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl lg:text-8xl">
              La Montecchia Green
            </h1>
          </Reveal>

          {/* Sottotitolo */}
          <Reveal delayMs={160}>
            <p className="mt-4 max-w-xl text-base text-warm-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:text-lg md:text-xl">
              Bistrot &amp; Eventi immersi nel verde del Golf,<br className="hidden sm:block" />
              ai piedi dei Colli Euganei
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delayMs={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/prenota"
                className="rounded-full bg-green-dark px-8 py-3.5 text-sm font-semibold text-warm-white shadow-lg transition-colors hover:bg-green-mid"
              >
                Prenota un tavolo
              </Link>
              <Link
                href={whatsappUrl('booking', 'it')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll-down indicator */}
        <Reveal delayMs={500}>
          <a
            href="#intro"
            aria-label="Scorri verso il basso"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-warm-white/70 transition-colors hover:text-warm-white"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scopri</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════
          INFO RAPIDE — sotto il fold
      ══════════════════════════════════════════════════════ */}
      <section id="intro" className="border-b border-green-dark/8 bg-green-dark">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-3">

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MapPin className="h-4 w-4 text-green-light" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-green-light/70">Dove siamo</div>
                <div className="mt-1 text-sm font-medium text-warm-white">Club House Golf Montecchia</div>
                <div className="text-xs text-warm-white/60">Via Montecchia 12, Selvazzano Dentro (PD)</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <CalendarClock className="h-4 w-4 text-green-light" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-green-light/70">Orari</div>
                <div className="mt-1 text-sm font-medium text-warm-white">Pranzo: tutti i giorni</div>
                <div className="text-xs text-warm-white/60">Cena: ven e sab su prenotazione</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Phone className="h-4 w-4 text-green-light" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-green-light/70">Contatti</div>
                <a href={telUrl('mobile')} className="mt-1 block text-sm font-medium text-warm-white hover:text-green-light transition-colors">
                  +39 334 677 4483
                </a>
                <a href={mailtoUrl('booking', 'it')} className="text-xs text-warm-white/60 hover:text-green-light transition-colors">
                  lamontecchiagreen@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <span className="divider-gold mb-5" />
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark md:text-4xl">
            Bistrot informale nel verde del Golf
          </h2>
        </Reveal>
        <Reveal delayMs={70}>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
            La Montecchia Green è un bistrot e ristorante aperto a tutti: golfisti, famiglie, amici, turisti e aziende.
            È una cucina italiana contemporanea, con ingredienti locali e stagionali, prodotti dell&apos;orto e pasta
            fatta in casa. La sera venerdì e sabato (su prenotazione) diventa ancora più speciale, con selezione vini e
            dessert artigianali.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delayMs={idx * 90}>
                <div className="card-lift group h-full rounded-2xl border border-green-dark/8 bg-warm-white p-6 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-dark/6 ring-1 ring-green-dark/10 transition-colors group-hover:bg-green-dark group-hover:ring-green-dark">
                    <Icon className="h-5 w-5 text-green-dark transition-colors group-hover:text-warm-white" />
                  </div>
                  <div className="font-serif text-xl font-semibold text-text-dark">{pillar.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-text-mid/90">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════════════════ */}
      <section className="border-y border-green-dark/8 bg-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark md:text-4xl">
              Perché scegliere La Montecchia Green
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, idx) => (
              <Reveal key={f.label} delayMs={idx * 60}>
                <div className="card-lift flex items-start gap-4 rounded-2xl border border-green-dark/8 bg-cream/60 p-5 shadow-sm">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-dark"
                    aria-hidden="true"
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-text-dark">{f.label}</div>
                    <div className="mt-0.5 text-xs text-text-mid/80">{f.sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <span className="divider-gold mb-5" />
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark md:text-4xl">
            Una galleria che racconta il luogo
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_GALLERY.map((img, idx) => (
            <Reveal key={img.src} delayMs={idx * 50}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/6 shadow-sm">
                <Image
                  src={img.src}
                  alt={img.altIt}
                  fill
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="gallery-img object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════════════════════ */}
      <section className="border-y border-green-dark/8 bg-warm-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark md:text-4xl">
              Cosa dicono di noi
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delayMs={idx * 90}>
                <TestimonialCard name={t.name} title={t.title} text={t.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-green-dark p-8 text-warm-white shadow-xl md:p-12">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-mid/40 blur-2xl" />
              <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-green-mid/20 blur-2xl" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              />
            </div>

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-green-light">
                  Contattaci
                </span>
                <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                  Hai un evento in mente?<br />Parliamone.
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-warm-white/85">
                  Matrimonio, festa privata o evento aziendale: proposte su misura
                  con spazi modulabili fino a 300 persone.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:min-w-[200px]">
                <Link
                  href={whatsappUrl('events', 'it')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Link>
                <a
                  href={telUrl('mobile')}
                  className="flex items-center justify-center gap-2 rounded-xl border border-warm-white/25 bg-warm-white/10 px-6 py-3.5 text-sm font-semibold text-warm-white backdrop-blur-sm transition-colors hover:bg-warm-white/20"
                >
                  <Phone className="h-4 w-4" />
                  Chiama
                </a>
                <a
                  href={mailtoUrl('events', 'it')}
                  className="flex items-center justify-center gap-2 rounded-xl border border-warm-white/25 bg-warm-white/10 px-6 py-3.5 text-sm font-semibold text-warm-white backdrop-blur-sm transition-colors hover:bg-warm-white/20"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
