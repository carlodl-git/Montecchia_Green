import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import { hreflangForEn } from '@/lib/hreflang';

export const metadata = {
  title: 'Cookie Policy | La Montecchia Green',
  description:
    'Information on the use of cookies on lamontecchiagreen.it: technical, analytics and third-party cookies.',
  alternates: hreflangForEn('/en/cookie-policy'),
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'Cookie Policy', href: '/en/cookie-policy' },
          ]}
        />
      </section>

      <section className="border-b border-green-dark/8 bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-green-dark/70">
                Legal
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-green-dark md:text-5xl">
              Cookie Policy
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-4 max-w-2xl text-sm text-text-mid/80">Last updated: 28 April 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-8 text-base leading-relaxed text-text-mid">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">What cookies are</h2>
            <p className="mt-3">
              Cookies are small text files that visited websites send to the user&apos;s device, where they are stored
              and re-transmitted to the same sites on the next visit. They allow the website to function correctly,
              improve the browsing experience and collect statistical information in anonymous form.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cookies used on this site</h2>
            <p className="mt-3">
              The website <strong>lamontecchiagreen.it</strong> only uses technical cookies, necessary for the proper
              functioning of the pages and of the booking and contact forms. No consent is required for these
              cookies under the applicable regulations.
            </p>
            <p className="mt-3">
              Third-party cookies may be set by embedded services (Google Maps, YouTube/Vimeo videos, social
              widgets); in such cases, please refer to the privacy policies of the respective providers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Managing cookies</h2>
            <p className="mt-3">
              The user may disable cookies at any time through their browser settings. Disabling technical cookies
              may impair the proper functioning of the website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Data controller</h2>
            <p className="mt-3">
              <strong>Montecchia Servizi S.r.l.</strong> &mdash; Via Montecchia 12, 35030 Selvazzano Dentro (PD),
              Italy. VAT 05326460283. More information in the{' '}
              <Link className="text-green-dark hover:underline" href="/en/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
