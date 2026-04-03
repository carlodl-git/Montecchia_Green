import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';

export const metadata = {
  title: 'What to Eat in Selvazzano Dentro: a Guide to the Best Dishes and Restaurants | La Montecchia Green',
  description:
    'Complete guide to what to eat in Selvazzano Dentro: traditional Veneto dishes, bigoli, baccala, risotto, tiramisu and the best restaurants with zero-kilometre cuisine. Discover the local gastronomic tradition.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/blog/where-to-eat-selvazzano-dentro',
    languages: {
      'it': 'https://www.lamontecchiagreen.it/blog/cosa-mangiare-selvazzano-dentro',
      'en': 'https://www.lamontecchiagreen.it/en/blog/where-to-eat-selvazzano-dentro',
    },
  },
};

export default function WhereToEatSelvazzanoPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        lang="en"
        blogPost={{
          title: 'What to Eat in Selvazzano Dentro: a Guide to the Best Dishes and Restaurants',
          description:
            'Complete guide to what to eat in Selvazzano Dentro: traditional Veneto dishes, bigoli, baccala, risotto, tiramisu and the best restaurants with zero-kilometre cuisine.',
          url: 'https://www.lamontecchiagreen.it/en/blog/where-to-eat-selvazzano-dentro',
          datePublished: '2026-04-05',
          dateModified: '2026-04-05',
          image: 'https://www.lamontecchiagreen.it/images/chef-preparing-a-dish.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        lang="en"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it/en' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/en/blog' },
          { name: 'What to Eat in Selvazzano Dentro', url: 'https://www.lamontecchiagreen.it/en/blog/where-to-eat-selvazzano-dentro' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.menu}
            alt="Traditional Veneto dishes in Selvazzano Dentro"
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
              What to Eat in Selvazzano Dentro: a Guide to the Best Dishes and Restaurants
            </h1>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-4 text-sm text-text-mid/70">April 5, 2026</p>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Selvazzano Dentro is a town on the outskirts of Padua that conceals a surprising
              gastronomic richness. Situated between the city and the first foothills of the Euganean
              Hills, this area combines the Veneto culinary tradition with the freshness of local
              produce, offering dining experiences that range from homely trattorie to gourmet
              restaurants. In this guide we explore the must-try dishes, the local specialities and the
              best places to savour the area&apos;s cuisine.
            </p>
          </Reveal>

          {/* ── Veneto tradition ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              The Veneto Culinary Tradition in Selvazzano
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Veneto cuisine is one of the richest and most varied in Italy, and Selvazzano Dentro is a
              perfect example. Its proximity to the Euganean Hills guarantees access to fresh, genuine
              produce: garden vegetables, aromatic herbs, extra-virgin olive oil from the hillsides,
              alpine cheeses and artisanal cured meats. The gastronomic tradition of this area is built
              on simple ingredients, handled with skill and respect for the seasons.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The local cuisine reflects centuries of farming history, where every dish tells the story
              of the relationship between the land and those who work it. This is not a cuisine of
              ostentatious luxury, but of substance and flavour: dishes that warm the heart and are
              passed down from generation to generation. It is precisely this authenticity that makes
              the food of Selvazzano Dentro so appreciated by those seeking a genuine culinary
              experience, far from passing trends.
            </p>
          </Reveal>

          {/* ── Local specialities ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Must-Try Dishes
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Bigoli are perhaps the most iconic dish of the Paduan tradition: a long, thick pasta made
              with wholemeal flour and often extruded through a press, served with duck ragu or with
              sardines in saor. The rough texture of bigoli holds the sauce perfectly, creating a
              balance of flavours that is impossible to replicate with factory-made pasta. In Selvazzano
              you can still find restaurants that make them by hand, following the original recipe.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Baccala alla vicentina is another absolute classic: stockfish slow-cooked in milk with
              onions, anchovies and Parmigiano, served with soft polenta. It is a dish that demands
              patience and skill, and in the best restaurants it achieves an extraordinary creaminess
              and depth of flavour. Risotto, prepared in a thousand variations &mdash; with white
              asparagus from Bassano, with mushrooms from the Hills, with red radicchio &mdash; is
              another pillar of the local cuisine.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              No discussion of Veneto gastronomy is complete without mentioning tiramisu, the world&apos;s
              most famous Italian dessert, which according to many sources originated right here in the
              Veneto. The traditional version, with savoiardi biscuits soaked in coffee, mascarpone
              cream and bitter cocoa, is the perfect ending to any meal. The best restaurants in the
              area still prepare it according to the classic recipe, without excessive variations.
            </p>
          </Reveal>

          {/* ── Where to eat ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Where to Eat in Selvazzano Dentro
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The dining options in Selvazzano Dentro are surprisingly varied. Historic trattorie in
              the centre offer set lunch menus with traditional dishes, ideal for anyone seeking a
              genuine and affordable meal. Artisanal pizzerias provide an informal alternative with
              long-fermentation doughs and quality toppings. For those after a more refined experience,
              several restaurants in the area offer tasting menus that reinterpret Veneto cuisine in a
              contemporary key.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              One factor that sets the best restaurants in Selvazzano apart is their attention to the
              provenance of ingredients. The zero-kilometre philosophy is not a passing trend here, but
              a conscious choice that ensures freshness, flavour and sustainability. Restaurants that
              work directly with local producers, kitchen gardens and dairies offer dishes with a
              different taste &mdash; more genuine, more intense, more closely tied to the season.
            </p>
          </Reveal>

          {/* ── La Montecchia Green ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              The Cuisine at La Montecchia Green
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Among the most compelling dining options in Selvazzano Dentro is the restaurant at La
              Montecchia Green, inside Golf della Montecchia. Chef Enrico Ruggin has created a menu
              that is an homage to the territory: dishes that start from the Veneto tradition and enrich
              it with modern techniques and elegant presentations, without ever losing sight of substance
              and flavour.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The kitchen at La Montecchia Green is built on a zero-kilometre philosophy: vegetables come
              from the estate&apos;s own garden, cheeses from Euganean Hills dairies, meats from selected
              local farms. Every dish reflects the seasonality of the produce, with a menu that changes
              to follow the rhythm of nature. Risotto with garden herbs, creamed baccala with crispy
              polenta, and bigoli with farmyard ragu are just a few examples of an offering that
              celebrates tradition with elegance.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The setting adds value to the gastronomic experience: the panoramic terrace overlooking the
              Euganean Hills and the golf course, the manicured greenery of the estate, the silence of
              the countryside create an environment where food is enjoyed with all the senses. At lunch
              the restaurant offers an accessible and informal bistrot format, while Friday and Saturday
              evening dinners provide a more structured and refined experience.
            </p>
          </Reveal>

          {/* ── Local products ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Local Products to Discover
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Beyond the dishes, Selvazzano Dentro and the Euganean Hills area offer a range of local
              products that deserve to be discovered. Colli Euganei DOP extra-virgin olive oil is a
              product of excellence, with a delicate flavour and fruity aroma that makes it perfect for
              dressing fish and vegetable dishes. The wines of Tenuta Emo Capodilista &mdash; from Fior
              d&apos;Arancio to Moscato, from reds to whites &mdash; pair beautifully with the local
              cuisine. Honey from the Hills, aged alpine cheeses, artisanal preserves and wood-fired
              bread complete a rich and authentic gastronomic panorama.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Want to discover the local cuisine? Browse our{' '}
                  <Link href="/en/menu" className="font-medium text-green-dark underline">
                    menu
                  </Link>{' '}
                  and let chef Enrico Ruggin&apos;s dishes at La Montecchia Green inspire you.
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
