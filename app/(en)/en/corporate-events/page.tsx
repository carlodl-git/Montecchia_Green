import Image from 'next/image';
import Link from 'next/link';
import { Building2, Users, UtensilsCrossed, MapPin, Car, TreePine, Award, Leaf } from 'lucide-react';
import { hreflangForEn } from '@/lib/hreflang';
import { mailtoUrl, whatsappUrl } from '@/lib/contact';
import Breadcrumb from '@/components/Breadcrumb';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import EventForm from '@/components/EventForm';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Corporate Events Padua: Business Lunches, Team Building, Conventions | La Montecchia Green',
  description:
    'Host your corporate event at Golf della Montecchia: business lunches, team building on the green, conventions, year-end dinners, product launches and company retreats. Venues up to 400 guests, tailored menus, free parking. 10 minutes from Padua.',
  alternates: hreflangForEn('/en/corporate-events'),
  openGraph: {
    images: [{ url: '/images/Sala-Ristorante-eventi.jpg', width: 1200, height: 630 }],
  },
};

const corporateEventsFaq = [
  { question: 'How much does a corporate lunch cost at La Montecchia Green?', answer: 'The cost depends on the number of participants, menu type and services requested. A corporate lunch starts from approximately €35-50 per person for a full menu with wines included. Contact us for a tailored quote.' },
  { question: 'Do you have projector and audio equipment for presentations?', answer: 'Yes, the rooms can be equipped with projector, screen, audio system and microphones. Our staff coordinates the technical setup based on your event requirements.' },
  { question: 'How many people can participate in team building on the green?', answer: 'Team building on the green is flexible and can involve groups from 10 to 100+ people. Activities take place outdoors in the Golf della Montecchia setting and can be customised for your group size.' },
  { question: 'Are the rooms suitable for conventions and assemblies?', answer: 'Yes, Sala Petrarca hosts 100 to 300 people and can be configured theatre-style, with an imperial table or round tables; combined with the terrace it can welcome up to 400 guests. Sala Foscolo (30-80 people) and Sala Ruzante (20-40 people) are ideal for smaller meetings.' },
  { question: 'Can we organize a year-end dinner for our company?', answer: 'Yes, year-end dinners are among our most requested events. Sala Petrarca is perfect for large groups, with a custom menu, sommelier service and the option of music and entertainment.' },
  { question: 'Do you offer options for special diets and intolerances?', answer: 'Yes, the chef prepares menus for coeliac, lactose intolerant, vegetarian and vegan guests. Nutritional consultancy through the Montecchia Performance Center is also available for special events.' },
  { question: 'Is there parking for all participants?', answer: 'Yes, the ample free parking inside Golf della Montecchia is sufficient even for large events. There are no parking issues in the area.' },
  { question: 'How far is La Montecchia Green from Padua?', answer: 'La Montecchia Green is just 10 minutes from Padua centre, 5 minutes from Abano Terme and less than 10 minutes from the Padova Ovest motorway exit (A4/A13). Easily reachable from the entire North-East.' },
  { question: 'Can we hold morning meetings?', answer: 'Yes, the rooms are available in the morning for meetings, workshops and work sessions. Service includes coffee breaks, working breakfast or light lunch depending on your needs.' },
  { question: 'How do we book a corporate event?', answer: 'Contact us via WhatsApp at +39 334 677 4483 (fast response), email eventimontecchia@golfmontecchia.it, or call +39 049 805 8464. Staff responds within 24-48 business hours with a tailored proposal.' },
  { question: 'Can we organize a multi-day corporate retreat?', answer: 'Yes, La Montecchia Green is ideal for corporate retreats. The proximity to hotels such as the thermal spas of Abano and Montegrotto Terme allows multi-day stays, combining work sessions, activities on the green and relaxation.' },
  { question: 'Is the venue accessible for people with disabilities?', answer: 'Yes, the venue is on the ground floor of the Club House of Golf della Montecchia with facilitated wheelchair access.' },
];

export default function EnEventiAziendaliPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'Corporate events', href: '/en/corporate-events' },
          ]}
        />
      </section>
      {/* ── Hero ── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Restaurant hall set up for corporate events at Golf della Montecchia"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-warm-white/85">
                Corporate events
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-warm-white md:text-5xl lg:text-6xl">
              Companies at Golf della Montecchia, near Padua
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Intro + sidebar ── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-6">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                The ideal venue for corporate events near Padua
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-base leading-relaxed text-text-mid">
                Looking for a corporate event venue near Padua that offers something different from the usual
                conference centre? La Montecchia Green is located inside the Golf della Montecchia, at Via
                Montecchia 12 in Selvazzano Dentro, just 10 minutes from the centre of Padua. A restored
                former tobacco factory at the foot of the Euganean Hills, surrounded by the greenery of a
                27-hole golf course: the perfect natural setting to elevate your corporate event.
              </p>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="text-base leading-relaxed text-text-mid">
                Whether you are planning a business lunch for your team, a convention for clients and partners,
                a team building day on the green or a year-end dinner, La Montecchia Green offers flexible
                spaces, tailored cuisine and a dedicated staff. The atmosphere blends elegance with informality,
                far from the rigidity of hotels and traditional conference centres, yet with all the professional
                service needed for a flawless event.
              </p>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Corporate events contacts">
                <div className="space-y-2">
                  <div>
                    Email: <span className="font-semibold">eventimontecchia@golfmontecchia.it</span>
                  </div>
                  <div>
                    WhatsApp: <span className="font-semibold">+39 334 677 4483</span>
                  </div>
                  <div>
                    Phone: <span className="font-semibold">+39 049 805 8464</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Reply within 24-48 business hours.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        {/* ── Event types ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Types of corporate events
            </h2>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-text-mid">
              La Montecchia Green welcomes every format of corporate event, from an informal working lunch
              to a fully structured convention. Here are the most popular options requested by companies
              in the region.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <UtensilsCrossed className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Business lunches & dinners',
                desc: 'Working lunches for internal teams, dinners with clients and partners, year-end celebrations and corporate galas. Tailored menus from the chef using local and seasonal ingredients, sommelier service with wines from Tenuta Emo Capodilista.',
              },
              {
                icon: <TreePine className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Team building on the green',
                desc: 'Outdoor team building activities in the unique setting of a 27-hole golf course. Group experiences surrounded by the greenery of the Euganean Hills, followed by lunch or aperitivo with a bespoke menu. A real alternative to traditional conference centres.',
              },
              {
                icon: <Users className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Conventions & meetings',
                desc: 'Flexible rooms for conventions, meetings, presentations and assemblies. From the Sala Petrarca for large events to the Sala Ruzante for intimate boardroom sessions, with full logistic support and integrated catering.',
              },
              {
                icon: <Award className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Product launches',
                desc: 'Launch your product or service in a distinctive setting. The spaces at La Montecchia Green offer a unique atmosphere that enhances your brand, with options for customised indoor and outdoor setups.',
              },
              {
                icon: <Building2 className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Year-end dinners',
                desc: 'Close the year with your team in style. The venue hosts up to 400 guests for gala dinners, with a dedicated menu, sommelier service and the option to extend the evening on the panoramic terrace.',
              },
              {
                icon: <Leaf className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Company retreats',
                desc: 'Days of work and inspiration immersed in nature. Combine working sessions, activities on the green and relaxation with lunch or aperitivo. Ideal for strategy workshops, brainstorming and annual planning.',
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <Card className="bg-warm-white/70 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <div className="text-sm uppercase tracking-wider text-text-dark font-semibold">
                        {item.title}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-text-mid/95">{item.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Spaces ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Rooms and spaces for your event
            </h2>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-text-mid">
              Every event has different needs. La Montecchia Green offers flexible indoor and outdoor spaces,
              suitable for groups from 20 to 400 guests. Our staff will help you choose the ideal configuration
              for your format.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <InfoBox title="Sala Petrarca: 100 / 300 guests">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>The main hall, ideal for conventions, gala dinners and large corporate events. Flexible configuration with options for staging and projection.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={60}>
              <InfoBox title="Sala Foscolo: 30 / 80 guests">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Perfect for medium-sized business lunches and dinners, product presentations and client meetings. A private and refined environment.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={120}>
              <InfoBox title="Sala Ruzante: 20 / 40 guests">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>An intimate room for small meetings, board sessions, strategy workshops and working lunches for smaller teams.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={180}>
              <InfoBox title="Terrace and outdoor spaces">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <TreePine className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Panoramic terrace overlooking the green for aperitivos and networking, open-air areas for team building and informal activities. Views of the Euganean Hills.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
          </div>
        </div>

        {/* ── Services ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Corporate event services
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Reveal>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Cuisine and catering
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Tailored menu by the chef using local and seasonal ingredients</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Nutritional consulting via the Montecchia Performance Center</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Sommelier service with wines from Tenuta Emo Capodilista</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Options for intolerances, special diets and dietary preferences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delayMs={80}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <div className="text-sm uppercase tracking-wider text-text-mid font-semibold">
                    Logistics and support
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Dedicated staff for coordination and service</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Free parking inside the Golf club grounds</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Customisable event setups and decorations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                      <span>Wheelchair accessibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* ── Why choose us ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Why choose La Montecchia Green for your corporate event
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <MapPin className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Strategic location',
                desc: '10 minutes from Padua city centre, easily reachable from across the North-East of Italy. Close to the A13 motorway and Padua ring road.',
              },
              {
                icon: <TreePine className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Unique natural setting',
                desc: 'Surrounded by the greenery of the golf course at the foot of the Euganean Hills. A genuine alternative to conference centres and hotels, for events that leave a lasting impression.',
              },
              {
                icon: <UtensilsCrossed className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Outstanding cuisine',
                desc: 'Dedicated chef using local and seasonal ingredients, vegetables from our own garden, handmade pasta. Every menu is built to measure for your event.',
              },
              {
                icon: <Car className="h-5 w-5 text-green-mid" aria-hidden="true" />,
                title: 'Simple logistics',
                desc: 'Free parking for all guests, no urban traffic issues, direct and convenient access even for large groups.',
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <Card className="bg-warm-white/70 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">{item.icon}</div>
                    <div className="text-sm font-semibold text-text-dark mb-2">{item.title}</div>
                    <p className="text-sm leading-relaxed text-text-mid/95">{item.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Location ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Where we are and how to reach us
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              La Montecchia Green is located at Via Montecchia 12, Selvazzano Dentro (PD), inside the
              Club House of Golf della Montecchia. The location is strategic for companies across the
              North-East: 10 minutes from Padua centre, 5 minutes from Abano Terme, 30 minutes from
              Venice and 50 minutes from Vicenza and Treviso. The nearest motorway exit is Padova Ovest
              (A4/A13), less than 10 minutes away. The golf club&apos;s internal car park is spacious and
              free for all event guests.
            </p>
          </Reveal>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
              FAQ: frequently asked questions about corporate events
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
              {corporateEventsFaq.map((item, idx) => (
                <div key={item.question}>
                  <div className="text-sm font-semibold text-text-dark">{item.question}</div>
                  <p className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.answer}</p>
                  {idx !== corporateEventsFaq.length - 1 ? <div className="mt-4 border-t border-black/5" /> : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Schema.org ── */}
        <SchemaOrg variant="eventVenue" lang="en" />
        <SchemaOrg
          variant="breadcrumb"
          lang="en"
          breadcrumbItems={[
            { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
            { name: 'Corporate Events', url: 'https://www.lamontecchiagreen.it/en/eventi-aziendali' },
          ]}
        />
        <SchemaOrg variant="customFaq" lang="en" faqItems={corporateEventsFaq} />

        {/* ── CTA ── */}
        <div className="mt-14">
          <Reveal>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Organize your corporate event
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-mid">
              Fill in the form to receive a tailored proposal, or contact us directly via WhatsApp or email.
              Guaranteed reply within 24-48 business hours.
            </p>
          </Reveal>

          <Reveal delayMs={70}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-green-dark text-warm-white hover:bg-green-mid"
              >
                <Link
                  href={whatsappUrl('events', 'en')}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={mailtoUrl('events', 'en')}>Email</Link>
              </Button>
            </div>
          </Reveal>

          <div className="mt-8">
            <Reveal>
              <EventForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
