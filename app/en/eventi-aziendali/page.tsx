import Image from 'next/image';
import Link from 'next/link';
import { Building2, Users, UtensilsCrossed, MapPin, Car, TreePine, Award, Leaf, Phone } from 'lucide-react';

import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Corporate Events Padua — Business Lunches, Team Building, Conventions | La Montecchia Green',
  description:
    'Host your corporate event at Golf della Montecchia: business lunches, team building on the green, conventions, year-end dinners, product launches and company retreats. Venues up to 300 guests, tailored menus, free parking. 10 minutes from Padua.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/eventi-aziendali',
    languages: {
      'it': 'https://www.lamontecchiagreen.it/eventi-aziendali',
      'en': 'https://www.lamontecchiagreen.it/en/eventi-aziendali',
    },
  },
};

export default function EnEventiAziendaliPage() {
  return (
    <div>
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
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold tracking-tight text-warm-white">
              Corporate Events at Golf della Montecchia — Padua
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
                    Phone: <span className="font-semibold">+39 334 677 4483</span>
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
                desc: 'Close the year with your team in style. The Sala Petrarca hosts up to 300 guests for gala dinners, with a dedicated menu, sommelier service and the option to extend the evening on the panoramic terrace.',
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
              suitable for groups from 20 to 300 guests. Our staff will help you choose the ideal configuration
              for your format.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <InfoBox title="Sala Petrarca — 100 / 300 guests">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>The main hall, ideal for conventions, gala dinners and large corporate events. Flexible configuration with options for staging and projection.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={60}>
              <InfoBox title="Sala Foscolo — 30 / 80 guests">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 mt-0.5 text-green-mid" aria-hidden="true" />
                    <div>Perfect for medium-sized business lunches and dinners, product presentations and client meetings. A private and refined environment.</div>
                  </div>
                </div>
              </InfoBox>
            </Reveal>
            <Reveal delayMs={120}>
              <InfoBox title="Sala Ruzante — 20 / 40 guests">
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

        {/* ── Schema.org ── */}
        <SchemaOrg variant="eventVenue" />
        <SchemaOrg
          variant="breadcrumb"
          breadcrumbItems={[
            { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
            { name: 'Corporate Events', url: 'https://www.lamontecchiagreen.it/en/eventi-aziendali' },
          ]}
        />

        {/* ── CTA ── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <Reveal>
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
              Organize your corporate event
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-mid">
              Contact us for a tailored proposal for your event. Our staff will guide you through
              the choice of spaces, menu and every detail. Guaranteed reply within 24-48 business hours.
            </p>
          </Reveal>

          <div className="grid gap-4">
            <Reveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-dark text-warm-white hover:bg-green-mid"
                >
                  <Link
                    href="https://wa.me/393346774483?text=Hi%20La%20Montecchia%20Green%2C%20I%20would%20like%20information%20about%20a%20corporate%20event."
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="mailto:eventimontecchia@golfmontecchia.it">Email</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="tel:+393346774483">Call</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <InfoBox title="Key information">
                <div className="space-y-2">
                  <div>
                    Capacity: <span className="font-semibold">from 20 to 300 guests</span>
                  </div>
                  <div>
                    Area: <span className="font-semibold">Selvazzano Dentro (PD)</span> — 10 min from Padua
                  </div>
                  <div>
                    Parking: <span className="font-semibold">free</span> inside the golf grounds
                  </div>
                  <div className="text-xs text-text-mid/80">Open to all companies — no golf membership required.</div>
                </div>
              </InfoBox>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
