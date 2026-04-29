import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { hreflangForEn } from '@/lib/hreflang';
import { telUrl, mailtoUrl, whatsappUrl } from '@/lib/contact';
import Breadcrumb from '@/components/Breadcrumb';
import MapsEmbed from '@/components/MapsEmbed';

export const metadata = {
  title: 'Contacts & directions | La Montecchia Green',
  description:
    'How to reach La Montecchia Green at Via Montecchia 12, Selvazzano Dentro (PD). Google Maps pin, directions from Padua and Abano Terme, free parking and contact details.',
  alternates: hreflangForEn('/en/contact'),
  openGraph: {
    images: [{ url: '/images/terrazza-from-outside.jpg', width: 1200, height: 630 }],
  },
};

export default function EnContattiPage() {
  const mapSrc =
    'https://www.google.com/maps?q=La%20Montecchia%20Green%2C%20Via%20Montecchia%2C%2012%2C%2035030%20Selvazzano%20Dentro%20PD%2C%20Italia&output=embed&hl=it';

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'Contact', href: '/en/contact' },
          ]}
        />
      </section>
      <section className="relative min-h-[42vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.contatti}
            alt="Terrace and exterior of La Montecchia Green"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-warm-white/85">
                Contact
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-warm-white md:text-5xl lg:text-6xl">
              How to reach La Montecchia Green
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-4 max-w-xl text-base text-warm-white/80">
              Via Montecchia 12, Selvazzano Dentro (PD)
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="grid gap-6">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-warm-white/70">
                <MapsEmbed src={mapSrc} lang="en" />
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Driving directions
                  </div>
                  <div className="mt-3 space-y-3 text-sm text-text-mid/95">
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>From Padua city center: 10 minutes</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>From Abano Terme: 5 minutes</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>From Venice (Padua Ovest exit): 30 minutes</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Free parking available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Contact details">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Address:</span> Via Montecchia 12, 35030 Selvazzano Dentro (PD),
                    Italy
                  </div>
                  <div>
                    <span className="font-semibold">Reservations phone:</span>{' '}
                    <a className="hover:text-green-dark transition-colors" href={telUrl('landline')}>
                      +39 049 805 8464
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">WhatsApp:</span>{' '}
                    <a
                      className="hover:text-green-dark transition-colors"
                      href={whatsappUrl('info', 'en')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      +39 334 677 4483
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">Events email:</span>{' '}
                    <a
                      className="hover:text-green-dark transition-colors"
                      href={mailtoUrl('events', 'en')}
                    >
                      eventimontecchia@golfmontecchia.it
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                    <Link
                      href={whatsappUrl('info', 'en')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href={mailtoUrl('events', 'en')}>Send an email</Link>
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
              <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">Where we are</div>
              <p className="mt-3 text-base leading-relaxed text-text-mid/95">
                La Montecchia Green is in the Golf della Montecchia Club House (a restored former tobacco shop),
                immersed in greenery at the foot of the Colli Euganei, near Padua and close to Villa Emo Capodilista.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}

