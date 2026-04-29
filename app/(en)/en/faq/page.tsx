import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { hreflangForEn } from '@/lib/hreflang';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Frequently asked questions (FAQ) | La Montecchia Green',
  description:
    'Answers to frequently asked questions about La Montecchia Green: opening hours, prices, reservations, events, weddings, venue, parking, accessibility and directions to Selvazzano Dentro (PD).',
  alternates: hreflangForEn('/en/faq'),
};

const faqRestaurant = [
  {
    q: 'Is La Montecchia Green restaurant open only to golf club members?',
    a: 'No, La Montecchia Green is open to everyone: golfers, families, tourists, businesses and private guests. You do not need to be a member of Golf della Montecchia to dine or host an event.',
  },
  {
    q: 'What type of cuisine does La Montecchia Green offer?',
    a: 'La Montecchia Green serves contemporary Italian cuisine prepared by chef Enrico Ruggin. Dishes are made with local, seasonal ingredients including vegetables from our own garden, handmade pasta and artisan desserts. Wines are selected by a sommelier, featuring labels from Tenuta Emo Capodilista.',
  },
  {
    q: 'What is the average price at La Montecchia Green restaurant?',
    a: 'The average price falls in the \u20AC\u20AC range: high quality with local and seasonal ingredients, handmade pasta and selected wines in an exclusive setting at accessible prices. A full lunch is approximately 25\u201340\u00A0\u20AC per person.',
  },
  {
    q: 'What are the opening hours of La Montecchia Green?',
    a: 'Lunch every day from 12:00 to 15:00. Dinner on Friday and Saturday evenings by reservation from 19:30 to 23:00. The snack bar and aperitivo are available during the day on the terrace and on the green.',
  },
  {
    q: 'How can I book a table at the restaurant?',
    a: 'The quickest way is via WhatsApp at +39 334 677 4483. Alternatively you can call +39 049 805 8464 or fill in the booking form at lamontecchiagreen.it/prenota.',
  },
  {
    q: 'What wines does La Montecchia Green serve?',
    a: 'La Montecchia Green offers a selection curated by the sommelier, with a focus on wines from Tenuta Emo Capodilista, one of the most prestigious wineries in the Colli Euganei DOC area. National and international labels are also available.',
  },
  {
    q: 'Is La Montecchia Green accessible for people with disabilities?',
    a: 'Yes, La Montecchia Green is wheelchair accessible. The venue is located on the ground floor of the Golf della Montecchia Club House and features accessible entrances.',
  },
];

const faqEvents = [
  {
    q: 'How many guests can La Montecchia Green host for an event?',
    a: 'La Montecchia Green can host up to 400 guests, with the Sala Petrarca seating 100 to 300. Additional spaces include Sala Foscolo (30\u201380 guests), Sala Ruzante (20\u201340 guests), the panoramic terrace on the green and outdoor areas with a swimming pool.',
  },
  {
    q: 'Do you organise weddings and receptions near Padua?',
    a: 'Yes, La Montecchia Green is one of the most popular wedding venues in the province of Padua. Our staff organises bespoke events with a personalised menu by chef Enrico Ruggin, sommelier service with wines from Tenuta Emo Capodilista and tailored decorations. Spaces for up to 400 guests, panoramic terrace and outdoor areas with a swimming pool.',
  },
  {
    q: 'Do you organise corporate events near Padua?',
    a: 'Yes, La Montecchia Green offers corporate lunches and dinners, team building on the green, conventions, meetings and end-of-year dinners for companies in the Padua province and north-east Italy. Free parking, modular spaces for up to 400 guests and dedicated staff.',
  },
  {
    q: 'Can I organise birthday parties and private celebrations at La Montecchia Green?',
    a: 'Yes, La Montecchia Green is perfect for birthdays, anniversaries, confirmations, christenings and any private celebration. Our rooms are modular from 20 to 400 guests, with a personalised menu and dedicated staff.',
  },
  {
    q: 'What rooms are available for events at La Montecchia Green?',
    a: 'The available rooms are: Sala Petrarca (100\u2013300 guests, ideal for weddings and large events), Sala Foscolo (30\u201380 guests, private dinners and mid-size events), Sala Ruzante (20\u201340 guests, meetings and civil ceremonies), panoramic terrace (aperitivi and cocktail parties) and outdoor areas with a swimming pool.',
  },
  {
    q: 'How do I book a private event at La Montecchia Green?',
    a: 'Contact us via WhatsApp at +39 334 677 4483 (quick response), email eventimontecchia@golfmontecchia.it, or call +39 049 805 8464. Our staff responds within 24\u201348 business hours.',
  },
  {
    q: 'What is team building on the green at La Montecchia Green?',
    a: 'Team building on the green is a corporate activity that combines the natural setting of Golf della Montecchia with outdoor group experiences. It takes place surrounded by the greenery of the Euganean Hills, followed by lunch or aperitivo with a personalised menu. Ideal for companies seeking an alternative to traditional conference centres.',
  },
];

const faqLocation = [
  {
    q: 'Where is La Montecchia Green located?',
    a: 'La Montecchia Green is located at Via Montecchia 12, Selvazzano Dentro (PD), inside the Golf della Montecchia Club House, at the foot of the Euganean Hills. It is approximately 10 minutes from Padua city centre, 5 minutes from Abano Terme and 30 minutes from Venice.',
  },
  {
    q: 'Is there parking at La Montecchia Green?',
    a: 'Yes, La Montecchia Green has a large free car park inside Golf della Montecchia, convenient for all guests and event attendees.',
  },
  {
    q: 'Is La Montecchia Green close to Abano Terme?',
    a: 'Yes, La Montecchia Green is only 5 minutes by car from Abano Terme and about 10 minutes from Montegrotto Terme. It is an ideal choice for spa guests looking for a charming restaurant or event venue.',
  },
  {
    q: 'Can I have an aperitivo at La Montecchia Green?',
    a: 'Yes, La Montecchia Green offers aperitivo on the panoramic terrace of Golf della Montecchia, with views of the Euganean Hills. Cocktails, local wines from Tenuta Emo Capodilista, charcuterie boards and snacks in a lush green setting. Free parking.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
  { name: 'FAQ', url: 'https://www.lamontecchiagreen.it/faq' },
];

export default function EnFaqPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'FAQ', href: '/en/faq' },
          ]}
        />
      </section>
      <SchemaOrg variant="faq" lang="en" />
      <SchemaOrg variant="breadcrumb" lang="en" breadcrumbItems={breadcrumbItems} />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-green-dark/70">
                FAQ
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-green-dark md:text-5xl lg:text-6xl">
              Frequently asked questions
            </h1>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-mid/95">
              Everything you need to know about La Montecchia Green: restaurant, events, venue and how to reach us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Restaurant */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
            Restaurant
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
          {faqRestaurant.map((item, i) => (
            <Reveal key={i} delayMs={i * 40}>
              <div>
                <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                <div className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</div>
              </div>
              {i < faqRestaurant.length - 1 && <div className="mt-4 border-t border-black/5" />}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
            Events
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
          {faqEvents.map((item, i) => (
            <Reveal key={i} delayMs={i * 40}>
              <div>
                <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                <div className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</div>
              </div>
              {i < faqEvents.length - 1 && <div className="mt-4 border-t border-black/5" />}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location & Logistics */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
            Location &amp; logistics
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
          {faqLocation.map((item, i) => (
            <Reveal key={i} delayMs={i * 40}>
              <div>
                <div className="text-sm font-semibold text-text-dark">{item.q}</div>
                <div className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.a}</div>
              </div>
              {i < faqLocation.length - 1 && <div className="mt-4 border-t border-black/5" />}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
