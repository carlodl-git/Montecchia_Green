import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForEn } from '@/lib/hreflang';

export const metadata = {
  title: 'A Guide to Tenuta Emo Capodilista Wines: Colli Euganei DOC | La Montecchia Green',
  description:
    'Discover the wines of Tenuta Emo Capodilista: Fior d\'Arancio, Moscato, reds and whites from the Colli Euganei DOC. History, grape varieties, food pairings and where to taste them near Padua.',
  alternates: hreflangForEn('/en/blog/guide-emo-capodilista-wines'),
};

export default function GuideEmoCapodilistaWinesPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        lang="en"
        blogPost={{
          title: 'A Guide to Tenuta Emo Capodilista Wines: Colli Euganei DOC',
          description:
            'Discover the wines of Tenuta Emo Capodilista: Fior d\'Arancio, Moscato, reds and whites from the Colli Euganei DOC. History, grape varieties, food pairings and where to taste them.',
          url: 'https://www.lamontecchiagreen.it/en/blog/guide-emo-capodilista-wines',
          datePublished: '2026-04-08',
          dateModified: '2026-04-08',
          image: 'https://www.lamontecchiagreen.it/images/chef-preparing-a-dish.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        lang="en"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it/en' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/en/blog' },
          { name: 'Guide to Emo Capodilista Wines', url: 'https://www.lamontecchiagreen.it/en/blog/guide-emo-capodilista-wines' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Wine tasting of Emo Capodilista wines on the terrace at La Montecchia Green"
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
              A Guide to Tenuta Emo Capodilista Wines
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/70">
              <time dateTime="2026-04-08">April 8, 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Tenuta Emo Capodilista is one of the most fascinating wine estates in the Euganean Hills,
              with a history rooted in centuries of Venetian aristocratic tradition. Its wines are the
              authentic expression of a terroir that is unique in the world: hills of volcanic origin, a
              Mediterranean microclimate and indigenous grape varieties that find ideal conditions here
              to express their very best. In this guide we explore the history of the estate, the main
              grape varieties, the wines to know and the best food pairings with the local cuisine.
            </p>
          </Reveal>

          {/* ── History ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              The History of Tenuta Emo Capodilista
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The Emo Capodilista family has been connected to this land for generations. The estate
              sits in the heart of the Euganean Hills, in a landscape of gentle slopes covered in
              vineyards and woodland, where viticulture has a thousand-year tradition. The name itself
              evokes Venetian nobility and a deep bond with the territory, which translates into a
              production philosophy based on respect for the land and uncompromising quality.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The estate extends across dozens of hectares of vineyards cultivated using sustainable
              methods, where biodiversity is nurtured and the volcanic soil gives the wines a distinctive
              minerality. Every bottle tells the story of this land: the eruptions that millions of
              years ago shaped the hills, the centuries of cultivation that selected the finest grape
              varieties, and the passion of a family that has made wine its mission.
            </p>
          </Reveal>

          {/* ── Colli Euganei DOC ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Colli Euganei DOC: a Unique Terroir
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The Colli Euganei DOC designation has protected wines produced in this area since 1969,
              guaranteeing their origin and quality. The terroir of the Euganean Hills is unique in
              Italy and perhaps in the world: the volcanic soil, rich in minerals and trace elements,
              gives the wines an unmistakable complexity and personality. The microclimate, influenced
              by the proximity to the Venetian lagoon and sheltered by the hills, creates ideal
              conditions for the slow, balanced ripening of the grapes.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The temperature range between day and night encourages the development of aromas, while
              the aspect of the hillsides ensures optimal sun exposure for the vineyards. This is a
              territory where indigenous grape varieties find their fullest expression, but where
              international varieties also manage to develop original and surprising characteristics.
            </p>
          </Reveal>

          {/* ── Grape varieties ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Key Grape Varieties: from Fior d&apos;Arancio to Fine Reds
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Fior d&apos;Arancio is the flagship grape of the Euganean Hills. It is a local variant of
              Moscato Giallo that takes its name from the characteristic scent of orange blossom it
              releases in the glass. It is vinified in dry, sweet and sparkling versions, and is a wine
              that surprises with its versatility: fresh and aromatic as an aperitif, structured and
              complex when accompanying elaborate dishes, sweet and enveloping at the end of a meal.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Moscato dei Colli Euganei, in its various expressions, is another jewel of local
              production. The dry version maintains an elegant aromatic quality without being cloying,
              while the passito version achieves an extraordinary concentration of flavours, ideal for
              pairing with aged cheeses and desserts. Among the whites, Garganega and Tai Bianco
              produce fresh, mineral wines perfect for summer and for accompanying fish and vegetable
              dishes.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The reds of the Euganean Hills are a revelation for many wine enthusiasts. Merlot and
              Cabernet Sauvignon, grown on volcanic soil, develop remarkable structure and complexity,
              with elegant tannins and a long, mineral finish. The riserva versions, after ageing in
              wood, reach a depth that rivals the finest Italian reds. Tenuta Emo Capodilista produces
              reds of great character that deserve to be known well beyond the regional borders.
            </p>
          </Reveal>

          {/* ── Key wines ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              The Estate Wines to Know
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The Tenuta Emo Capodilista range spans from fresh, approachable whites to complex,
              structured reds. The dry Fior d&apos;Arancio is the perfect wine to begin your discovery:
              on the nose it offers floral and fruity notes, on the palate it is fresh and sapid with a
              pleasantly aromatic finish. The white based on Tai and Garganega is ideal as an
              all-course wine, its minerality pairing naturally with Veneto cuisine.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Among the reds, the barrique-aged Merlot and Cabernet blend impresses with the elegance
              of its tannins and the complexity of its bouquet, where one detects ripe red fruits, sweet
              spices and an underlying mineral note. The Fior d&apos;Arancio passito, finally, is a
              meditation wine that ideally closes a dinner: golden, enveloping, with notes of apricot,
              honey and orange blossom that linger long on the palate.
            </p>
          </Reveal>

          {/* ── Food pairings ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Food and Wine Pairings: Practical Suggestions
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Food and wine pairing is an art that elevates both the plate and the glass. With Tenuta
              Emo Capodilista wines, the best pairings follow the principle of territoriality: wines
              from the territory with dishes from the territory. The dry Fior d&apos;Arancio pairs
              beautifully with a board of local cured meats and cheeses or with a garden-herb risotto.
              The mineral white is an ideal companion for creamed baccala and freshwater fish dishes.
              The structured reds find their perfect match in bigoli with ragu, grilled meats and aged
              cheeses from the Hills. The passito closes magnificently with a traditional tiramisu or
              with blue-veined cheeses.
            </p>
          </Reveal>

          {/* ── Where to taste ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Where to Taste Emo Capodilista Wines
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              The best way to appreciate the wines of Tenuta Emo Capodilista is to taste them in their
              own territory, surrounded by the landscape that created them. La Montecchia Green, located
              inside Golf della Montecchia in Selvazzano Dentro, offers a complete selection of the
              estate&apos;s wines, curated by the in-house sommelier. On the panoramic terrace, with views
              of the Euganean Hills and the golf course, every glass takes on a special meaning: you
              drink the wine while looking at the very hills where it was born.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              The sommelier service at La Montecchia Green goes beyond simply pouring wine: it tells the
              story of each label, suggests the best pairings with chef Enrico Ruggin&apos;s dishes and
              guides guests on a journey of sensory discovery. Whether it is a sunset aperitivo, an
              informal lunch or a special dinner, the wines of Tenuta Emo Capodilista enrich every
              moment with their personality and elegance.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Want to discover the wines of Tenuta Emo Capodilista? Come and taste them on our
                  panoramic terrace. Find out more on the{' '}
                  <Link href="/en/ristorante" className="font-medium text-green-dark underline">
                    restaurant page
                  </Link>
                  .
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
