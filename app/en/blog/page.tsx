import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Blog — Weddings, events and gastronomy',
  description:
    'Articles and insights about weddings, events, gastronomy and aperitivos near Padua. Discover the Euganean Hills, event venues and tips from the La Montecchia Green staff.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/en/blog',
    languages: { 'it': 'https://www.lamontecchiagreen.it/blog', 'en': 'https://www.lamontecchiagreen.it/en/blog' },
  },
};

const articles = [
  {
    slug: 'guide-emo-capodilista-wines',
    title: 'Guide to Tenuta Emo Capodilista Wines',
    excerpt:
      'Discover the wines of Colli Euganei DOC: Fior d\'Arancio, Rosso della Montecchia, Moscato Passito and recommended food-wine pairings by the sommelier.',
    date: '8 April 2026',
    image: '/images/aperl-spritz.jpg',
  },
  {
    slug: 'where-to-eat-selvazzano-dentro',
    title: 'Where to Eat in Selvazzano Dentro: A Food Guide',
    excerpt:
      'Venetian tradition, km 0 ingredients and contemporary cuisine: where to eat well in Selvazzano Dentro, between the Euganean Hills and Padua.',
    date: '5 April 2026',
    image: '/images/tagliatelle-funghi.jpg',
  },
  {
    slug: 'romantic-dinner-euganean-hills',
    title: 'Romantic Dinner in the Euganean Hills: Where and How to Choose',
    excerpt:
      'Panoramic views, chef cuisine and intimate atmosphere: criteria for finding the perfect restaurant for a romantic dinner at the foot of the Euganean Hills.',
    date: '2 April 2026',
    image: '/images/chef-preparing-a-dish.jpg',
  },
  {
    slug: 'team-building-padua',
    title: 'Team Building in Padua: Ideas and Venues for Companies',
    excerpt:
      'Why choose outdoor team building, the most effective activities and the best venues in the Padua province for corporate events.',
    date: '28 March 2026',
    image: '/images/Sala-Ristorante-eventi.jpg',
  },
  {
    slug: 'aperitivo-euganean-hills',
    title: 'The Best Aperitivos with a View of the Euganean Hills',
    excerpt:
      'Where to enjoy an aperitivo among the Euganean Hills: panoramic terraces, local wines and unforgettable sunsets just minutes from Padua.',
    date: '20 March 2026',
    image: '/images/terrazza-from-outside.jpg',
  },
  {
    slug: 'wedding-venue-padua',
    title: 'How to Choose a Wedding Venue in Padua',
    excerpt:
      'Atmosphere, capacity, cuisine, logistics and budget: the five key criteria for finding the perfect wedding venue in the Padua province.',
    date: '15 March 2026',
    image: '/images/Sala-Ristorante-eventi.jpg',
  },
];

export default function BlogPageEN() {
  return (
    <div>
      <SchemaOrg
        variant="breadcrumb"
        lang="en"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it/en' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/en/blog' },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-green-dark">
            Blog
          </h1>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-4 text-base leading-relaxed text-text-mid max-w-2xl">
            Insights, tips and inspiration about weddings, events, gastronomy and aperitivos
            at the foot of the Euganean Hills.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {articles.map((a) => (
            <Reveal key={a.slug}>
              <Link href={`/en/blog/${a.slug}`} className="group block">
                <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="relative h-52">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width:640px) 100vw, 50vw"
                      className="object-cover transition-transform group-hover:scale-[1.03]"
                    />
                  </div>
                  <CardContent className="p-5">
                    <span className="text-sm text-text-mid/70">{a.date}</span>
                    <h2 className="mt-1 text-xl font-serif font-semibold tracking-tight text-green-dark group-hover:underline">
                      {a.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-text-mid">
                      {a.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-green-dark">
                      Read &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SchemaOrg
        variant="itemList"
        lang="en"
        listItems={articles.map((a) => ({
          name: a.title,
          url: `https://www.lamontecchiagreen.it/en/blog/${a.slug}`,
        }))}
      />
    </div>
  );
}
