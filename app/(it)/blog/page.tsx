import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { hreflangForIt } from '@/lib/hreflang';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Blog — Matrimoni, eventi e gastronomia',
  description:
    'Articoli e approfondimenti su matrimoni, eventi, gastronomia e aperitivi vicino a Padova. Scopri i Colli Euganei, le location per eventi e i consigli dello staff de La Montecchia Green.',
  alternates: hreflangForIt('/blog'),
};

const articles = [
  {
    slug: 'guida-vini-emo-capodilista',
    title: 'Guida ai vini della Tenuta Emo Capodilista',
    excerpt:
      'Alla scoperta dei vini dei Colli Euganei DOC: Fior d\'Arancio, Rosso della Montecchia, Moscato Passito e gli abbinamenti consigliati dal sommelier.',
    date: '8 aprile 2026',
    image: '/images/aperl-spritz.jpg',
  },
  {
    slug: 'cosa-mangiare-selvazzano-dentro',
    title: 'Cosa mangiare a Selvazzano Dentro: guida gastronomica',
    excerpt:
      'Tradizione veneta, ingredienti km 0 e cucina contemporanea: dove mangiare bene a Selvazzano Dentro, tra i Colli Euganei e Padova.',
    date: '5 aprile 2026',
    image: '/images/tagliatelle-funghi.jpg',
  },
  {
    slug: 'cena-romantica-colli-euganei',
    title: 'Cena romantica ai Colli Euganei: dove e come scegliere',
    excerpt:
      'Vista panoramica, cucina d\'autore e atmosfera intima: i criteri per trovare il ristorante perfetto per una cena romantica ai piedi dei Colli Euganei.',
    date: '2 aprile 2026',
    image: '/images/chef-preparing-a-dish.jpg',
  },
  {
    slug: 'team-building-padova',
    title: 'Team building a Padova: idee e location per aziende',
    excerpt:
      'Perché scegliere un team building all\'aperto, le attività più efficaci e le location migliori nella provincia di Padova per eventi aziendali.',
    date: '28 marzo 2026',
    image: '/images/Sala-Ristorante-eventi.jpg',
  },
  {
    slug: 'aperitivo-colli-euganei',
    title: 'I migliori aperitivi con vista sui Colli Euganei',
    excerpt:
      'Dove fare aperitivo tra le colline euganee: terrazze panoramiche, vini locali e tramonti indimenticabili a pochi minuti da Padova.',
    date: '20 marzo 2026',
    image: '/images/terrazza-from-outside.jpg',
  },
  {
    slug: 'location-matrimonio-padova',
    title: 'Come scegliere la location per un matrimonio a Padova',
    excerpt:
      'Atmosfera, capienza, cucina, logistica e budget: i cinque criteri fondamentali per trovare la location perfetta per il vostro matrimonio nella provincia di Padova.',
    date: '15 marzo 2026',
    image: '/images/Sala-Ristorante-eventi.jpg',
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-4 lg:pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
          ]}
        />
      </section>
      <SchemaOrg
        variant="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/blog' },
        ]}
      />
      <SchemaOrg
        variant="itemList"
        listItems={articles.map((a) => ({
          name: a.title,
          url: `https://www.lamontecchiagreen.it/blog/${a.slug}`,
        }))}
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
