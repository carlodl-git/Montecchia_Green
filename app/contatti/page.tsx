import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Contatti e come arrivare — La Montecchia Green',
  description:
    'Come raggiungere La Montecchia Green in Via Montecchia 12, Selvazzano Dentro (PD). Pin su Google Maps, indicazioni stradali da Padova e Abano Terme, parcheggio gratuito e contatti.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/contatti',
    languages: { 'it': 'https://www.lamontecchiagreen.it/contatti', 'en': 'https://www.lamontecchiagreen.it/en/contatti' },
  },
  openGraph: {
    images: [{ url: '/images/terrazza-from-outside.jpg', width: 1200, height: 630 }],
  },
};

export default function ContattiPage() {
  const mapSrc =
    'https://www.google.com/maps?q=La%20Montecchia%20Green%2C%20Via%20Montecchia%2C%2012%2C%2035030%20Selvazzano%20Dentro%20PD%2C%20Italia&output=embed&hl=it';

  return (
    <div>
      <section className="relative min-h-[42vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.contatti}
            alt="Terrazza e vista esterna de La Montecchia Green"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-warm-white">
              Come raggiungere La Montecchia Green — Via Montecchia 12, Selvazzano Dentro
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="grid gap-6">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-warm-white/70">
                <iframe
                  title="Google Maps - La Montecchia Green"
                  src={mapSrc}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Indicazioni stradali
                  </div>
                  <div className="mt-3 space-y-3 text-sm text-text-mid/95">
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Da Padova centro: 10 minuti</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Da Abano Terme: 5 minuti</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Da Venezia (casello Padova Ovest): 30 minuti</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Parcheggio gratuito disponibile</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Contatti completi">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Indirizzo:</span> Via Montecchia, 12, 35030 Selvazzano Dentro PD, Italia
                  </div>
                  <div>
                    <span className="font-semibold">Telefono prenotazioni:</span>{' '}
                    <a className="hover:text-green-dark transition-colors" href="tel:+390498058464">
                      +39 049 805 8464
                    </a>
                    {' / '}
                    <a className="hover:text-green-dark transition-colors" href="tel:+393346774483">
                      +39 334 677 4483
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span>{' '}
                    <a
                      className="hover:text-green-dark transition-colors"
                      href="mailto:lamontecchiagreen@gmail.com"
                    >
                      lamontecchiagreen@gmail.com
                    </a>
                  </div>
                  <div className="pt-3 text-xs text-text-mid/80">
                    Email eventi: eventimontecchia@golfmontecchia.it
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                    <Link
                      href="https://wa.me/393346774483?text=Ciao%20La%20Montecchia%20Green%2C%20vorrei%20informazioni%20su%20come%20arrivare."
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="mailto:lamontecchiagreen@gmail.com">Invia una email</Link>
                  </Button>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <Reveal>
          <Card className="bg-warm-white/70">
            <CardContent className="p-6">
              <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Dove si trova</div>
              <p className="mt-3 text-base leading-relaxed text-text-mid/95">
                La Montecchia Green è nella Club House del Golf della Montecchia (ex tabacchificio restaurato), immersa
                nel verde ai piedi dei Colli Euganei, a pochi minuti da Padova e vicino a Villa Emo Capodilista.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <SchemaOrg
        variant="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Contatti', url: 'https://www.lamontecchiagreen.it/contatti' },
        ]}
      />
    </div>
  );
}

