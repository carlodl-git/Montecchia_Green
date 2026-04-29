import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/Button';
import { hreflangForEn } from '@/lib/hreflang';
import { telUrl, mailtoUrl, whatsappUrl } from '@/lib/contact';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Book a table | La Montecchia Green',
  description:
    'Book a table at La Montecchia Green. Open to everyone inside the Golf della Montecchia in Selvazzano Dentro (PD). Lunch daily and dinner Friday & Saturday on reservation.',
  alternates: hreflangForEn('/en/book'),
};

export default function EnPrenotaPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'Book', href: '/en/book' },
          ]}
        />
      </section>
      <section className="relative min-h-[min(44vh,380px)] md:min-h-[46vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.prenota}
            alt="Dining room table at La Montecchia Green: book your table"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-cream" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-20 md:pb-14 md:pt-28">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-warm-white/85">
                Reservations
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-warm-white md:text-5xl lg:text-6xl">
              Book a table
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-4 max-w-xl text-base text-warm-white/85">
              La Montecchia Green &middot; Golf della Montecchia, Selvazzano Dentro
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <p className="text-base leading-relaxed text-text-mid md:text-[1.05rem]">
                La Montecchia Green is open to everyone. Book for daily lunch and for dinner on Friday and Saturday
                (on reservation). Fill in the form below or contact us directly via WhatsApp, email or phone.
              </p>
            </Reveal>

            <Reveal delayMs={70}>
              <BookingForm />
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Prefer to contact us directly?">
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                    <Link
                      href={whatsappUrl('booking', 'en')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href={mailtoUrl('booking', 'en')}>Email</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href={telUrl('landline')}>Call</a>
                  </Button>
                </div>
              </InfoBox>
            </Reveal>

            <Reveal delayMs={90}>
              <div className="mt-4">
                <InfoBox title="Opening hours & contacts">
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold">Lunch:</span> every day
                    </div>
                    <div>
                      <span className="font-semibold">Dinner:</span> Friday and Saturday (on reservation)
                    </div>
                    <div className="text-xs text-text-mid/80">
                      Tel: +39 049 805 8464
                    </div>
                    <div className="text-xs text-text-mid/80">
                      WhatsApp: +39 334 677 4483
                    </div>
                  </div>
                </InfoBox>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}

