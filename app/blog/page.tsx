import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Blog | La Montecchia Green',
  description:
    'Articoli e approfondimenti su matrimoni, eventi, gastronomia e aperitivi vicino a Padova. Scopri i Colli Euganei, le location per eventi e i consigli dello staff de La Montecchia Green.',
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/blog',
    languages: { 'it': 'https://www.lamontecchiagreen.it/blog', 'en': 'https://www.lamontecchiagreen.it/en/blog' },
  },
};

const articles = [
  {
    slug: 'location-matrimonio-padova',
    title: 'Come scegliere la location per un matrimonio a Padova',
    excerpt:
      'Atmosfera, capienza, cucina, logistica e budget: i cinque criteri fondamentali per trovare la location perfetta per il vostro matrimonio nella provincia di Padova.',
    date: '15 marzo 2026',
    image: '/images/Sala-Ristorante-eventi.jpg',
  },
  {
    slug: 'aperitivo-colli-euganei',
    title: 'I migliori aperitivi con vista sui Colli Euganei',
    excerpt:
      'Dove fare aperitivo tra le colline euganee: terrazze panoramiche, vini locali e tramonti indimenticabili a pochi minuti da Padova.',
    date: '20 marzo 2026',
    image: '/images/chef-preparing-a-dish.jpg',
  },
];

export default function BlogPage() {
  return (
    <div>
      <SchemaOrg
        variant="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/blog' },
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
            Approfondimenti, consigli e ispirazioni su matrimoni, eventi, gastronomia e aperitivi
            ai piedi dei Colli Euganei.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {articles.map((a) => (
            <Reveal key={a.slug}>
              <Link href={`/blog/${a.slug}`} className="group block">
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
                      Leggi &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
