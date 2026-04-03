import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Bistrot, Cucina & Aperitivo — La Montecchia Green, Padova',
  description:
    "Ristorante, bistrot e aperitivo sul green al Golf della Montecchia, Selvazzano Dentro (PD). Cucina italiana stagionale, pasta fatta in casa, vini selezionati. Terrazza panoramica sui Colli Euganei. A 10 minuti da Padova.",
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/ristorante',
    languages: { 'it': 'https://www.lamontecchiagreen.it/ristorante', 'en': 'https://www.lamontecchiagreen.it/en/ristorante' },
  },
};

export default function RistorantePage() {
  return (
    <div>
      <section className="relative min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Lo chef in cucina de La Montecchia Green"
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
              Bistrot La Montecchia Green — Cucina italiana nel verde di Selvazzano
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
                La storia del luogo
              </h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green si trova nella Club House del Golf della Montecchia, in un ex tabacchificio
                restaurato. È immersa nel verde ai piedi dei Colli Euganei e, grazie alla posizione a Selvazzano Dentro
                (PD), è perfetta per una pausa pranzo informale ma anche per una cena elegante.
              </p>
            </Reveal>

            <Reveal delayMs={110}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                La cucina di Enrico Ruggin
              </h3>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="text-base leading-relaxed text-text-mid">
                Enrico Ruggin guida una cucina italiana contemporanea, basata su prodotti stagionali e ingredienti
                locali. La struttura valorizza un orto proprio, la pasta fatta in casa e dessert artigianali. I vini
                sono selezionati da un sommelier, inclusi i vini della Tenuta Emo Capodilista.
              </p>
            </Reveal>

            <Reveal delayMs={210}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">Orari</h3>
            </Reveal>
            <Reveal delayMs={250}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed text-text-mid">
{`Pranzo: tutti i giorni
Cena: venerdì e sabato (su prenotazione)
Prenotazioni: +39 049 805 8464`}
                  </pre>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayMs={290}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                Prodotti di eccellenza
              </h3>
            </Reveal>
            <Reveal delayMs={330}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Pasta Monograno Felicetti',
                  'Miele Millebuche (prodotto nel campo da golf)',
                  'Vini della Tenuta Emo Capodilista',
                  'Specialità Cipriani',
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
                  <Link href="/menu">Scopri il menu stagionale</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/prenota">Prenota un tavolo</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Informazioni essenziali">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Aperto a tutti:</span> golfisti, famiglie, turisti e aziende
                  </div>
                  <div>
                    <span className="font-semibold">Indirizzo:</span> Via Montecchia 12, Selvazzano Dentro (PD)
                  </div>
                  <div>
                    <span className="font-semibold">Contatto:</span> +39 049 805 8464
                  </div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        {/* ── APERITIVO ──────────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Aperitivo a Padova — sul green, con vista
            </h2>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              Lo snack bar e l&apos;aperitivo de La Montecchia Green si svolgono sulla terrazza panoramica affacciata
              sul campo da golf, con vista aperta sui Colli Euganei. È uno dei posti più suggestivi per un aperitivo
              vicino a Padova: silenzio, natura, tramonto sul green e vini della Tenuta Emo Capodilista. Lontano dal
              caos del centro, a soli 10 minuti da Padova.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Cocktail e drink', sub: 'Selezione di cocktail classici e proposte stagionali' },
              { label: 'Vini della Tenuta', sub: 'Vini DOC Colli Euganei della Tenuta Emo Capodilista' },
              { label: 'Taglieri e stuzzichini', sub: 'Ingredienti locali e stagionali, prodotti artigianali' },
              { label: 'Terrazza panoramica', sub: 'Vista aperta sul green e sui Colli Euganei' },
              { label: 'A 10 minuti da Padova', sub: 'Parcheggio gratuito, facile da raggiungere' },
              { label: 'Atmosfera rilassata', sub: 'Elegante ma informale, aperto a tutti' },
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

          <Reveal delayMs={180}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="https://wa.me/393346774483?text=Ciao%20La%20Montecchia%20Green%2C%20vorrei%20informazioni%20sull%27aperitivo."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Chiedi info aperitivo su WhatsApp
              </Link>
              <a
                href="tel:+390498058464"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-dark/20 px-6 py-3 text-sm font-semibold text-green-dark transition-colors hover:bg-green-dark/5"
              >
                <Phone className="h-4 w-4" />
                +39 049 805 8464
              </a>
            </div>
          </Reveal>
        </div>

        <SchemaOrg variant="aperitivo" />
      </section>
    </div>
  );
}

