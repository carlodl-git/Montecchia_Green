import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { hreflangForEn } from '@/lib/hreflang';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'About Us — La Montecchia Green, Bistrot & Events near Padua',
  description:
    'Discover the story behind La Montecchia Green: a restored 20th-century tobacco factory turned contemporary bistrot inside the Golf della Montecchia club house in Selvazzano Dentro (PD). Farm-to-table cuisine, chef Enrico Ruggin, wines from Tenuta Emo Capodilista. 10 minutes from Padua.',
  alternates: hreflangForEn('/en/about'),
  openGraph: {
    images: [{ url: '/images/chef-preparing-a-dish.jpg', width: 1200, height: 630 }],
  },
};

export default function EnChiSiamoPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'About', href: '/en/about' },
          ]}
        />
      </section>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Chef Enrico Ruggin in the kitchen at La Montecchia Green"
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
              About Us — Our story, our cuisine
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                From historic tobacco factory to contemporary bistrot
              </h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green is housed inside a beautifully restored 20th-century tobacco factory that has
                been transformed into the club house of Golf della Montecchia, in Selvazzano Dentro, just outside
                Padua. What was once an industrial building dedicated to tobacco processing now hosts an elegant yet
                informal bistrot where architectural heritage meets a modern, welcoming atmosphere.
              </p>
            </Reveal>
            <Reveal delayMs={110}>
              <p className="text-base leading-relaxed text-text-mid">
                The building retains the industrial charm of its origins: exposed brick walls, large windows that
                flood the spaces with natural light, and high ceilings that create a sense of openness. Outside,
                the landscape unfolds across 18 holes of golf set among the lush greenery of the Euganean Hills,
                providing a truly unique setting for lunch, dinner, and outdoor aperitifs. You do not need to be a
                golfer to visit us: La Montecchia Green is open to everyone &mdash; families, couples, tourists, and
                professionals looking for something different.
              </p>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="text-base leading-relaxed text-text-mid">
                The location is wonderfully convenient: just 10 minutes from the centre of Padua, a short distance
                from the celebrated Villa Emo Capodilista, and at the heart of the Euganean Hills Regional Park.
                A place where nature, history, and gastronomy meet, far from city traffic yet easily accessible,
                with ample free parking.
              </p>
            </Reveal>

            {/* ── PHILOSOPHY ─────────────────────────────── */}
            <Reveal delayMs={210}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Our philosophy: farm-to-table cuisine
              </h2>
            </Reveal>
            <Reveal delayMs={250}>
              <p className="text-base leading-relaxed text-text-mid">
                At the heart of our culinary offering lies a simple conviction: the finest dishes are born from
                outstanding ingredients, harvested at the right moment and prepared with respect. That is why we
                cultivate our own kitchen garden on the estate, from which we source aromatic herbs, seasonal
                vegetables, and fresh produce that reach the kitchen just steps from the field.
              </p>
            </Reveal>
            <Reveal delayMs={290}>
              <p className="text-base leading-relaxed text-text-mid">
                We work exclusively with carefully selected local suppliers, favouring short supply chains and
                artisan producers from the Veneto region. Every ingredient is chosen for quality, provenance,
                and seasonality. The menu changes with the rhythm of the seasons, presenting dishes that tell
                the story of the land and its traditions through a contemporary lens.
              </p>
            </Reveal>

            {/* ── CHEF ENRICO RUGGIN ─────────────────────── */}
            <Reveal delayMs={330}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Chef Enrico Ruggin
              </h2>
            </Reveal>
            <Reveal delayMs={370}>
              <p className="text-base leading-relaxed text-text-mid">
                The kitchen at La Montecchia Green is led by chef Enrico Ruggin, who interprets Italian tradition
                with a contemporary eye. His cooking stands out for its meticulous attention to raw ingredients,
                thoughtful presentation, and the ability to transform simple produce into dishes of remarkable
                balance and flavour.
              </p>
            </Reveal>
            <Reveal delayMs={410}>
              <p className="text-base leading-relaxed text-text-mid">
                The heart of the kitchen is the fresh pasta made in-house every day: tagliatelle, ravioli,
                gnocchi, and special shapes that change with the seasons. Alongside the pasta, handmade desserts
                are another signature: every sweet is prepared entirely in our pastry workshop using fresh
                ingredients and classic techniques with a modern twist. Each dish is designed to deliver a
                complete experience, from the very first bite to the last spoonful.
              </p>
            </Reveal>

            {/* ── SOMMELIER & WINES ──────────────────────── */}
            <Reveal delayMs={450}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                The sommelier and estate wines
              </h2>
            </Reveal>
            <Reveal delayMs={490}>
              <p className="text-base leading-relaxed text-text-mid">
                Our wine list is curated by a dedicated sommelier who selects Italian and international labels
                with a special focus on local wines. The undisputed stars are the wines from Tenuta Emo
                Capodilista, produced in the vineyards that surround the golf club: crisp whites, structured
                reds, and sparkling wines bearing the Colli Euganei DOC designation. Every glass tells the
                story of the same land that provides the ingredients for our dishes, forging a deep connection
                between food and wine.
              </p>
            </Reveal>
            <Reveal delayMs={530}>
              <p className="text-base leading-relaxed text-text-mid">
                For those who wish to explore further, the sommelier offers personalised pairings and guided
                tastings &mdash; an ideal way to discover the finest wines of the Euganean Hills in a unique,
                relaxed setting.
              </p>
            </Reveal>

            {/* ── THE TEAM ───────────────────────────────── */}
            <Reveal delayMs={570}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Our team
              </h2>
            </Reveal>
            <Reveal delayMs={610}>
              <p className="text-base leading-relaxed text-text-mid">
                Behind La Montecchia Green is a close-knit, passionate team dedicated to delivering a flawless
                experience on every occasion. From the dining room to the kitchen, from event planning to bar
                service, every member of our staff works with one goal: making every guest feel welcome and at
                ease. Whether it is a business lunch, a romantic dinner, drinks with friends, or a corporate
                event, our team is ready to welcome you with professionalism and warmth.
              </p>
            </Reveal>

            {/* ── PREMIUM PRODUCTS ───────────────────────── */}
            <Reveal delayMs={650}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                Premium products
              </h2>
            </Reveal>
            <Reveal delayMs={690}>
              <p className="text-base leading-relaxed text-text-mid">
                The quality of our dishes starts with choosing the finest ingredients. Here are some of the
                premium products you will find in our kitchen:
              </p>
            </Reveal>
            <Reveal delayMs={720}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Pasta Monograno Felicetti — semolina from heritage Italian grains',
                  'Miele Millebuche — honey from bees living on the golf course',
                  'Wines from Tenuta Emo Capodilista — Colli Euganei DOC',
                  'Cipriani specialities — Venetian culinary heritage',
                  'Vegetables and aromatic herbs from our own garden',
                  'Cheeses and charcuterie from selected local producers',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-mid">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* ── THE SETTING ────────────────────────────── */}
            <Reveal delayMs={760}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark">
                The setting: golf, nature, and history
              </h2>
            </Reveal>
            <Reveal delayMs={800}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green is part of the Golf della Montecchia complex, one of the most prestigious
                golf courses in the Veneto region, designed by English architect John Harris and inaugurated in
                1988. The 18-hole course winds through gentle hills, centuries-old trees, and ponds, offering
                a landscape of rare beauty. Just steps away stands Villa Emo Capodilista, a 16th-century
                historic villa that adds further charm to the setting.
              </p>
            </Reveal>
            <Reveal delayMs={840}>
              <p className="text-base leading-relaxed text-text-mid">
                The Euganean Hills Regional Park provides the backdrop: volcanic hills covered in woodland,
                vineyards, and historic villages. The location in Selvazzano Dentro means you can reach the
                centre of Padua in just 10 minutes, making La Montecchia Green the perfect meeting point
                between the tranquillity of the countryside and the energy of the city.
              </p>
            </Reveal>

            {/* ── CTA ────────────────────────────────────── */}
            <Reveal delayMs={880}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                  <Link href="/en/ristorante">Discover the restaurant</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/en/menu">View the menu</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/en/eventi">Plan an event</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ── SIDEBAR ──────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="grid gap-6">
              <Reveal>
                <InfoBox title="At a glance">
                  <div className="space-y-2">
                    <div>
                      <span className="font-semibold">Location:</span> Golf della Montecchia Club House, Via Montecchia 12, Selvazzano Dentro (PD)
                    </div>
                    <div>
                      <span className="font-semibold">Open to everyone:</span> golfers, families, tourists, businesses
                    </div>
                    <div>
                      <span className="font-semibold">10 minutes from Padua</span>
                    </div>
                    <div>
                      <span className="font-semibold">Phone:</span> +39 049 805 8464
                    </div>
                  </div>
                </InfoBox>
              </Reveal>
              <Reveal delayMs={100}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-semibold text-green-dark mb-2">Our strengths</h3>
                    <ul className="space-y-1.5">
                      {[
                        'Farm-to-table with our own garden',
                        'Fresh pasta made in-house daily',
                        'Handmade desserts',
                        'Wines from Tenuta Emo Capodilista',
                        'Dedicated sommelier',
                        'Panoramic terrace on the green',
                        'Private event venue',
                        'Free parking',
                      ].map((item) => (
                        <li key={item} className="flex gap-2 text-xs leading-relaxed text-text-mid">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-mid" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </aside>
        </div>

        <SchemaOrg
          variant="breadcrumb"
          lang="en"
          breadcrumbItems={[
            { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
            { name: 'Chi Siamo', url: 'https://www.lamontecchiagreen.it/chi-siamo' },
          ]}
        />
      </section>
    </div>
  );
}
