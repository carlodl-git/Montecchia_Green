import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForEn } from '@/lib/hreflang';

export const metadata = {
  title: 'How to Choose a Wedding Venue in Padua | La Montecchia Green',
  description:
    'A complete guide to choosing a wedding venue in Padua: atmosphere, capacity, cuisine, logistics and budget. Discover the five key criteria for finding the perfect reception location among historic villas, agriturismos and unique venues at the foot of the Euganean Hills.',
  alternates: hreflangForEn('/en/blog/wedding-venue-padua'),
};

export default function WeddingVenuePaduaPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        lang="en"
        blogPost={{
          title: 'How to Choose a Wedding Venue in Padua',
          description:
            'A complete guide to choosing a wedding venue in Padua: atmosphere, capacity, cuisine, logistics and budget. The five key criteria for finding the perfect reception location.',
          url: 'https://www.lamontecchiagreen.it/en/blog/wedding-venue-padua',
          datePublished: '2026-03-15',
          dateModified: '2026-03-15',
          image: 'https://www.lamontecchiagreen.it/images/Sala-Ristorante-eventi.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        lang="en"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it/en' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/en/blog' },
          { name: 'How to Choose a Wedding Venue in Padua', url: 'https://www.lamontecchiagreen.it/en/blog/wedding-venue-padua' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Event hall set up for weddings at Golf della Montecchia, Selvazzano Dentro"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-warm-white max-w-3xl">
              How to Choose a Wedding Venue in Padua
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/70">
              <time dateTime="2026-03-15">March 15, 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Choosing a venue is one of the most important decisions when planning a wedding. The
              location where you celebrate your reception sets the tone for the entire day, influences
              the menu, the logistics, and even the memories your guests will carry with them. In the
              province of Padua the options are plentiful: Venetian villas, agriturismos among the
              Euganean Hills, restaurants with gardens, hotels with banquet halls and more original
              venues such as golf clubs and restored historic buildings. But how do you decide? In this
              article we analyse five key criteria that will help you find the perfect place for your
              special day.
            </p>
          </Reveal>

          {/* ── Criterion 1 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              1. Atmosphere and Setting
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The first element to consider is the kind of atmosphere you want to create. A city
              wedding offers practicality and an elegant urban setting, but often lacks greenery and
              privacy. A historic villa provides charm and heritage, yet can be rigid when it comes to
              decorations and layout. Venues set in nature &mdash; such as those at the foot of the
              Euganean Hills &mdash; combine the best of both worlds: an extraordinary landscape with
              the convenience of modern facilities.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Think about how you want your guests to feel when they arrive. A tree-lined drive, a
              panorama over the hills, the scent of freshly cut grass: these details create a sensory
              experience that no floral arrangement can replace. Look for a venue that already
              possesses its own natural beauty, so you can reduce decoration costs and make every
              photograph unforgettable.
            </p>
          </Reveal>

          {/* ── Criterion 2 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              2. Capacity and Flexible Spaces
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The number of guests you plan to invite has a huge influence on your choice. A venue that
              is too small feels cramped; one that is too large appears empty and impersonal. Our
              advice is to visit spaces with a near-final guest list in hand and imagine the table
              layout, the dance floor, the bar area and the buffet zone.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              An often-overlooked aspect is indoor/outdoor flexibility. In the Veneto region, spring
              and summer weather can be unpredictable: the ideal venue offers both covered rooms and
              outdoor areas, with the possibility of moving the reception indoors if it rains without
              compromising the experience. Rooms of different sizes also allow you to separate the
              moments of the day: aperitivo outdoors, dinner in the main hall, evening party in a
              dedicated area.
            </p>
          </Reveal>

          {/* ── Criterion 3 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              3. Cuisine and Service
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The menu is the heart of any wedding reception. Carefully assess whether the venue has an
              in-house kitchen with a dedicated chef or relies on external catering. In the first case
              you gain greater control over quality and consistency of service; in the second, more
              freedom in choosing your provider but also more logistical complexity.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              A personalised menu is a sign of care for your guests. The best venues offer
              pre-wedding tastings, adapt dishes to intolerances and preferences, and propose wine
              pairings curated by a sommelier. The quality of ingredients &mdash; local, seasonal,
              ideally zero-kilometre &mdash; makes the difference between an ordinary banquet and a
              true gastronomic experience. Do not forget to ask about the wine list: a professional
              sommelier service featuring local wines greatly elevates the overall perception of the
              reception.
            </p>
          </Reveal>

          {/* ── Criterion 4 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              4. Logistics and Accessibility
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              A wedding involves dozens or hundreds of people who need to reach the venue, park, and
              move around comfortably. Check the availability of free parking (a detail guests truly
              appreciate), the distance from major urban centres, and ease of access for guests with
              reduced mobility.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Proximity to Padua is a significant logistical advantage: many guests come from the city
              or its immediate surroundings. A venue just 10 to 15 minutes from the city centre
              reduces travel time and simplifies transport arrangements. If you have guests travelling
              from outside the region, also consider proximity to hotels and accommodation such as the
              thermal spas of Abano and Montegrotto, just a few minutes from the Euganean Hills.
            </p>
          </Reveal>

          {/* ── Criterion 5 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              5. Budget and Transparency
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Budget is often the decisive factor. The most professional venues offer detailed and
              transparent quotes from the very first meeting, with no hidden costs that surface a few
              weeks before the wedding. Be wary of proposals that are too vague or &ldquo;all-inclusive&rdquo;
              packages that do not specify exactly what is and is not included.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Always compare at least three quotes and pay attention to items that are frequently
              overlooked: room hire, corkage fees for wines, decoration costs, extra music hours,
              cleaning service. A venue that includes many of these services in its base price will
              simplify your life and allow you to plan with peace of mind.
            </p>
          </Reveal>

          {/* ── La Montecchia Green mention ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              A Venue That Ticks Every Box: La Montecchia Green
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Among wedding venues in the province of Padua, La Montecchia Green stands out as a
              choice that meets each of the five criteria described above. Located inside the Club
              House of Golf della Montecchia, in a restored former tobacco-drying building at the foot
              of the Euganean Hills, it offers a unique atmosphere that blends historic elegance with
              unspoilt nature. Modular event spaces accommodate from 20 to 400 guests, with the
              option to use the panoramic terrace overlooking the green, outdoor areas and the
              swimming pool.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The kitchen is led by chef Enrico Ruggin, who creates personalised menus using local and
              seasonal ingredients, while wines from the Tenuta Emo Capodilista estate are selected by
              the in-house sommelier. Just 10 minutes from Padua city centre and 5 from Abano Terme,
              the venue offers ample free parking and is fully accessible. A dedicated team
              accompanies every couple from the planning stage to the big day, with clear and detailed
              quotes.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Looking for the perfect wedding venue in Padua? Discover all the details about
                  spaces, menus and services on our{' '}
                  <Link href="/en/matrimoni" className="font-medium text-green-dark underline">
                    weddings page
                  </Link>
                  , or get in touch to arrange a visit.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          {/* ── Back link ── */}
          <Reveal>
            <div className="mt-10">
              <Link href="/en/blog" className="text-sm font-medium text-green-dark hover:underline">
                &larr; Back to blog
              </Link>
            </div>
          </Reveal>
        </article>
      </section>
    </div>
  );
}
