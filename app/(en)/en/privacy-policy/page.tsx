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
            <p className="mt-4 max-w-2xl text-sm text-text-mid/80">Last updated: 29 April 2026</p>
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
              <li>Anonymous, aggregated analysis of website navigation for statistical purposes (only with prior consent).</li>
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
              for the time periods listed below or, if different, for the time required by specific legal obligations:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong>Booking and contact requests</strong> (forms, email, WhatsApp): up to 24 months from the
                last interaction, unless otherwise requested by the data subject.
              </li>
              <li>
                <strong>Accounting and tax documents</strong> (invoices, receipts): 10 years, pursuant to art. 2220 of
                the Italian Civil Code and DPR 600/1973.
              </li>
              <li>
                <strong>Web server access logs</strong>: maximum 6 months, in line with the Italian DPA decision of
                27 November 2008.
              </li>
              <li>
                <strong>Consent cookies</strong> (banner preferences): 6 months.
              </li>
              <li>
                <strong>Analytics cookies</strong> (Google Analytics 4, only with prior consent): 14 months.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">
              Categories of recipients and external processors
            </h2>
            <p className="mt-3">
              Data may be communicated to the following categories of recipients, appointed as Data Processors under
              Art. 28 GDPR where applicable:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>
                <strong>Hosting and infrastructure provider</strong>: Vercel Inc. (United States), for publishing and
                running the website.
              </li>
              <li>
                <strong>Email service provider</strong>: Aruba S.p.A. (Italy), SMTP server used to deliver requests
                submitted through the website forms to the Data Controller.
              </li>
              <li>
                <strong>Interactive maps services</strong>: Google LLC (United States), for the Google Maps embed on
                the contact page (loaded only after consent).
              </li>
              <li>
                <strong>Website analytics services</strong>: Google LLC (United States), for Google Analytics 4
                (active only after consent).
              </li>
              <li>
                <strong>Messaging services</strong>: WhatsApp Ireland Ltd (Meta Platforms group), only if the user
                chooses to contact us via WhatsApp.
              </li>
              <li>
                <strong>Public authorities</strong> (Italian Revenue Agency, judicial authorities) where required by law.
              </li>
            </ul>
            <p className="mt-3">
              Data is not disseminated nor sold to third parties for commercial purposes under any circumstances.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Transfers outside the EU</h2>
            <p className="mt-3">
              Some of the providers listed above (Vercel Inc., Google LLC) are based in the United States. Personal
              data transfers outside the European Economic Area are based on the <strong>Standard Contractual
              Clauses</strong> (SCC) approved by the European Commission with Decision 2021/914/EU and within the
              framework of the <strong>EU-US Data Privacy Framework</strong>, where applicable. A copy of the
              safeguards adopted may be obtained on request by writing to the Data Controller.
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
