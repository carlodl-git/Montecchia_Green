import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForEn } from '@/lib/hreflang';

export const metadata = {
  title: 'The Best Aperitivos with a View of the Euganean Hills | La Montecchia Green',
  description:
    'Where to enjoy an aperitivo with a view of the Euganean Hills: panoramic terraces, local wines, cheese boards and unforgettable sunsets just minutes from Padua. A guide to the best spots for a unique aperitivo experience in the Euganean area.',
  alternates: hreflangForEn('/en/blog/aperitivo-euganean-hills'),
};

export default function AperitivoEuganeanHillsPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        lang="en"
        blogPost={{
          title: 'The Best Aperitivos with a View of the Euganean Hills',
          description:
            'Where to enjoy an aperitivo with a view of the Euganean Hills: panoramic terraces, local wines, cheese boards and unforgettable sunsets just minutes from Padua.',
          url: 'https://www.lamontecchiagreen.it/en/blog/aperitivo-euganean-hills',
          datePublished: '2026-03-20',
          dateModified: '2026-03-20',
          image: 'https://www.lamontecchiagreen.it/images/chef-preparing-a-dish.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        lang="en"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it/en' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/en/blog' },
          { name: 'The Best Aperitivos with a View of the Euganean Hills', url: 'https://www.lamontecchiagreen.it/en/blog/aperitivo-euganean-hills' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Aperitivo on the terrace at Golf della Montecchia with Euganean Hills view"
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
              The Best Aperitivos with a View of the Euganean Hills
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/85">
              <time dateTime="2026-03-20">March 20, 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The Euganean Hills are one of the most striking landscapes in the Veneto region:
              volcanic hills blanketed with vineyards, medieval villages, and a light that turns
              golden at sunset. It is no surprise that this area has become one of the favourite
              destinations for anyone seeking an aperitivo that goes beyond the ordinary, far from the
              hustle of the city yet just minutes from Padua. In this article we explore what makes an
              aperitivo in the Euganean Hills truly special and where to find the best experiences.
            </p>
          </Reveal>

          {/* ── What makes a great aperitivo ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              What Makes an Aperitivo Special
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              An aperitivo is more than just a drink before dinner. It is a social ritual, a pause
              in which time slows down and conversation flows freely. But for an aperitivo to become
              a memorable experience, three ingredients are needed: a setting that surprises, a
              quality offering, and an atmosphere that lets you forget the everyday.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The view is the first factor. Watching the sun dip behind the Euganean Hills while
              sipping a glass of Fior d&apos;Arancio or a Moscato dei Colli Euganei DOC is a pleasure
              that goes beyond taste. The second factor is the quality of what you drink and eat:
              local wines, carefully crafted cocktails, boards of regional cheeses and cured meats,
              bruschetta made with garden-fresh produce. The third is the environment: a quiet garden,
              a terrace overlooking greenery, the absence of traffic and noise.
            </p>
          </Reveal>

          {/* ── Types of venues ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Types of Aperitivo Venues in the Hills
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The Euganean area offers several types of venues for an aperitivo, each with its own
              character. Wine bars in the hilltop villages offer tastings of local wines in intimate,
              cosy settings, often with a selection of paired snacks. Agriturismos with terraces
              provide a more rustic and authentic experience, featuring zero-kilometre produce and
              direct contact with the Veneto countryside.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Restaurants with panoramic outdoor dining are ideal for those who want an aperitivo
              that can turn into dinner, with a more refined gastronomic offering and attentive
              service. Finally, a less obvious but extremely appealing category: golf club houses and
              sports facilities set in green surroundings, which offer spacious terraces, manicured
              lawns and a sense of exclusivity without the formality of a city bar.
            </p>
          </Reveal>

          {/* ── La Montecchia Green ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Aperitivo on the Green: The La Montecchia Green Experience
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              One of the most popular experiences in the area is the aperitivo on the panoramic
              terrace at La Montecchia Green, inside Golf della Montecchia in Selvazzano Dentro. Here
              the view opens out over the golf course and the Euganean Hills, creating an atmosphere
              that blends relaxation with natural beauty. You do not need to be a golf club member:
              the terrace and restaurant are open to everyone.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The aperitivo offering includes wines from the Tenuta Emo Capodilista estate &mdash; one
              of the most prestigious wineries in the Colli Euganei DOC area &mdash; selected by the
              in-house sommelier, accompanied by boards of local cured meats and cheeses, bruschetta
              and snacks prepared by chef Enrico Ruggin&apos;s kitchen. In summer, the ideal time is
              between 6 and 8 pm, when the warm, golden light of sunset bathes the green and the
              surrounding hills.
            </p>
          </Reveal>

          {/* ── The sunset experience ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              The Sunset Experience on the Green
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Anyone who has enjoyed a sunset aperitivo at the foot of the Euganean Hills knows it is
              an experience that is hard to put into words. The silence of the golf course, broken
              only by birdsong, creates a striking contrast with how close you are to the city. Padua
              is just 10 minutes away by car, yet it feels like another world entirely. It is
              precisely this contrast &mdash; untouched nature within arm&apos;s reach &mdash; that makes an
              aperitivo in the Hills so special.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              For couples looking for a romantic idea, groups of friends wanting to break from
              routine, or colleagues after a different kind of after-work: an aperitivo with a view of
              the Euganean Hills is a date to put in your diary, especially from April to October when
              the days are long and the weather invites you to stay outdoors.
            </p>
          </Reveal>

          {/* ── Practical tips ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Practical Considerations
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              When choosing where to have an aperitivo in the Euganean Hills area, a few practical
              details can make all the difference. Free parking is a real advantage, especially if you
              are going as a group. The distance from Padua city centre matters: venues 10 to 15
              minutes from the city are easy to reach even after a working day, with no stress.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Silence and nature are things we often take for granted, but they become precious the
              moment you leave city traffic behind. A place surrounded by greenery, far from road
              noise, allows you to truly relax and savour every sip and every conversation. Finally,
              if your aperitivo stretches on, it is convenient to know you can stay for dinner in the
              same place, perhaps with a menu that showcases the very same local produce.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Want to try an aperitivo with a view of the Euganean Hills? Discover our offering
                  on the{' '}
                  <Link href="/en/ristorante" className="font-medium text-green-dark underline">
                    restaurant page
                  </Link>
                  , or simply drop by the terrace at Golf della Montecchia.
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
