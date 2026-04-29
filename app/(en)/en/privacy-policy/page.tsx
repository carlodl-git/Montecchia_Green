import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import { hreflangForEn } from '@/lib/hreflang';

export const metadata = {
  title: 'Privacy Policy | La Montecchia Green',
  description:
    'Information on the processing of personal data on lamontecchiagreen.it pursuant to EU Regulation 2016/679 (GDPR).',
  alternates: hreflangForEn('/en/privacy-policy'),
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'Privacy Policy', href: '/en/privacy-policy' },
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
              Privacy Policy
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
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Data controller</h2>
            <p className="mt-3">
              The data controller is <strong>Montecchia Servizi S.r.l.</strong>, with registered office at
              Via Montecchia 12, 35030 Selvazzano Dentro (PD) &mdash; Italy.<br />
              VAT / Tax ID: 05326460283.<br />
              Email:{' '}
              <a className="text-green-dark hover:underline" href="mailto:eventimontecchia@golfmontecchia.it">
                eventimontecchia@golfmontecchia.it
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Personal data collected</h2>
            <p className="mt-3">
              The personal data collected by this website, autonomously or through third parties, may include: name,
              surname, email address, phone number, content of the messages submitted via booking and contact forms,
              navigation data (technical cookies, IP address, browser, operating system).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Purposes of processing</h2>
            <p className="mt-3">Data is processed for the following purposes:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>Handling table reservations, event enquiries and information requests submitted via the forms, phone, email or WhatsApp.</li>
              <li>Fulfilling contractual, tax and legal obligations.</li>
              <li>Anonymous, aggregated analysis of website navigation for statistical purposes.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Legal basis</h2>
            <p className="mt-3">
              Processing is based on the data subject&apos;s consent (Art. 6(1)(a) GDPR), on the performance of
              pre-contractual or contractual measures (Art. 6(1)(b) GDPR), and on compliance with legal obligations
              (Art. 6(1)(c) GDPR).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Storage and retention</h2>
            <p className="mt-3">
              Data is processed using electronic and paper tools, with appropriate security measures. It is retained
              only for the time strictly necessary for the purposes for which it was collected and in any case in
              compliance with the applicable legal obligations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Rights of the data subject</h2>
            <p className="mt-3">
              At any time, the data subject may exercise the rights of access, rectification, erasure, restriction,
              objection and data portability under Articles 15 and following of EU Regulation 2016/679, as well as
              the right to lodge a complaint with the Italian Data Protection Authority
              (<a className="text-green-dark hover:underline" href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">www.garanteprivacy.it</a>).
              To exercise these rights, please write to{' '}
              <a className="text-green-dark hover:underline" href="mailto:eventimontecchia@golfmontecchia.it">
                eventimontecchia@golfmontecchia.it
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Cookies</h2>
            <p className="mt-3">
              For information on the use of cookies, please consult the dedicated{' '}
              <Link className="text-green-dark hover:underline" href="/en/cookie-policy">Cookie Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
