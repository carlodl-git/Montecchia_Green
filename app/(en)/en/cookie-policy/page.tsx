import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Breadcrumb from '@/components/Breadcrumb';
import { hreflangForEn } from '@/lib/hreflang';

export const metadata = {
  title: 'Cookie Policy | La Montecchia Green',
  description:
    'Information on the use of cookies on lamontecchiagreen.it: technical, analytics and third-party cookies. Consent management under EU Regulation 2016/679 and the Italian DPA Guidelines of 10 June 2021.',
  alternates: hreflangForEn('/en/cookie-policy'),
  robots: { index: true, follow: true },
};

const analyticsCookies = [
  { name: '_ga', domain: 'lamontecchiagreen.it', desc: 'Google Analytics — distinguishes unique users', exp: '2 years' },
  { name: '_ga_*', domain: 'lamontecchiagreen.it', desc: 'Google Analytics — keeps the session state', exp: '2 years' },
];

const functionalCookies = [
  { name: 'NID', domain: 'google.com', desc: 'Google — Maps preferences and functionality (Google Maps embed)', exp: '6 months' },
];

const technicalCookies = [
  { name: 'cc_cookie', domain: 'lamontecchiagreen.it', desc: 'Stores cookie consent preferences', exp: '6 months' },
];

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
            <p className="mt-4 max-w-2xl text-sm text-text-mid/80">Last updated: 29 April 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-10 text-base leading-relaxed text-text-mid">

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">What cookies are</h2>
            <p className="mt-3">
              Cookies are small text files that visited websites send to the user&apos;s device, where they are stored
              and re-transmitted to the same sites on the next visit. They allow the website to function correctly,
              improve the browsing experience and collect statistical information.
            </p>
            <p className="mt-3">
              The website <strong>lamontecchiagreen.it</strong> uses technical cookies and, with your consent,
              third-party analytics and functional cookies. You can find more information below and change your
              preferences at any time.
            </p>
            <div className="mt-5">
              <button
                type="button"
                data-cc="show-preferencesModal"
                className="inline-flex items-center gap-2 rounded-full bg-green-dark px-5 py-2.5 text-sm font-semibold text-warm-white transition-colors hover:bg-green-mid"
              >
                Manage cookie preferences
              </button>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">
              Legal references
            </h2>
            <p className="mt-3">
              This policy is drafted pursuant to EU Regulation 2016/679 (GDPR), Directive 2002/58/EC as amended by
              Directive 2009/136/EC, Italian Legislative Decree 196/2003 as amended, and takes into account the
              Guidelines of the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali) of
              10 June 2021.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Strictly necessary cookies</h2>
            <p className="mt-3">
              Required for the website to function. No consent is required for these cookies.
            </p>
            <CookieTable rows={technicalCookies} />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Analytics cookies</h2>
            <p className="mt-3">
              We use Google Analytics 4 configured with Google Consent Mode v2: analytics cookies are activated only
              after your explicit consent through the banner. Data is collected in aggregated form for statistical
              purposes and to improve the website.
            </p>
            <CookieTable rows={analyticsCookies} />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Third-party functional cookies</h2>
            <p className="mt-3">
              The contact page embeds a Google Map. The map is loaded only after your consent for functional cookies;
              without consent, a placeholder is shown with a link to open Google Maps in a new tab.
            </p>
            <CookieTable rows={functionalCookies} />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">
              Transfers outside the EU
            </h2>
            <p className="mt-3">
              Google LLC (provider of Google Analytics and Google Maps) and Vercel Inc. (website hosting) are based in
              the United States. Data transfers are based on the Standard Contractual Clauses approved by the
              European Commission and within the framework of the EU-US Data Privacy Framework.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark">Managing and withdrawing consent</h2>
            <p className="mt-3">
              You can change or withdraw your consent at any time using the &ldquo;Cookie preferences&rdquo; button in
              the footer of every page, or by clicking the button above. You can also manage and delete cookies
              directly from your browser settings (Chrome, Firefox, Safari, Edge).
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

function CookieTable({ rows }: { rows: { name: string; domain: string; desc: string; exp: string }[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-green-dark/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-cream/60">
          <tr className="text-xs uppercase tracking-wider text-text-mid/80">
            <th className="px-4 py-3 font-semibold">Cookie</th>
            <th className="px-4 py-3 font-semibold">Domain</th>
            <th className="px-4 py-3 font-semibold">Description</th>
            <th className="px-4 py-3 font-semibold">Expiration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.name} className="border-t border-green-dark/8">
              <td className="px-4 py-3 font-mono text-xs text-text-dark">{c.name}</td>
              <td className="px-4 py-3 text-text-mid">{c.domain}</td>
              <td className="px-4 py-3 text-text-mid">{c.desc}</td>
              <td className="px-4 py-3 text-text-mid whitespace-nowrap">{c.exp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
