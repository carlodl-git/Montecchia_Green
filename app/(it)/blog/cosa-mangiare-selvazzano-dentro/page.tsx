import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForIt } from '@/lib/hreflang';

export const metadata = {
  title: 'Cosa Mangiare a Selvazzano Dentro: guida ai piatti e ristoranti migliori | La Montecchia Green',
  description:
    'Guida completa su cosa mangiare a Selvazzano Dentro: piatti tipici veneti, bigoli, baccala, risotto, tiramisu e i migliori ristoranti con cucina km0. Scopri la tradizione gastronomica locale.',
  alternates: hreflangForIt('/blog/cosa-mangiare-selvazzano-dentro'),
};

export default function CosaMangiareSelvazzanoPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        blogPost={{
          title: 'Cosa Mangiare a Selvazzano Dentro: guida ai piatti e ristoranti migliori',
          description:
            'Guida completa su cosa mangiare a Selvazzano Dentro: piatti tipici veneti, bigoli, baccala, risotto, tiramisu e i migliori ristoranti con cucina km0.',
          url: 'https://www.lamontecchiagreen.it/blog/cosa-mangiare-selvazzano-dentro',
          datePublished: '2026-04-05',
          dateModified: '2026-04-05',
          image: 'https://www.lamontecchiagreen.it/images/chef-preparing-a-dish.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/blog' },
          { name: 'Cosa Mangiare a Selvazzano Dentro', url: 'https://www.lamontecchiagreen.it/blog/cosa-mangiare-selvazzano-dentro' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.menu}
            alt="Piatti della tradizione veneta a Selvazzano Dentro"
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
              Cosa Mangiare a Selvazzano Dentro: guida ai piatti e ristoranti migliori
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/70">
              <time dateTime="2026-03-25">25 marzo 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Selvazzano Dentro e un comune alle porte di Padova che nasconde una ricchezza
              gastronomica sorprendente. Situato tra la citta e i primi rilievi dei Colli Euganei, questo
              territorio unisce la tradizione culinaria veneta alla freschezza dei prodotti locali,
              offrendo esperienze gastronomiche che vanno dalla trattoria casalinga al ristorante
              gourmet. In questa guida esploriamo i piatti tipici da non perdere, le specialita del
              territorio e i luoghi migliori dove assaporare la cucina locale.
            </p>
          </Reveal>

          {/* ── Tradizione veneta ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              La tradizione culinaria veneta a Selvazzano
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La cucina veneta e una delle piu ricche e variegate d&apos;Italia, e Selvazzano Dentro ne
              rappresenta un esempio perfetto. La vicinanza ai Colli Euganei garantisce l&apos;accesso a
              prodotti freschi e genuini: verdure dell&apos;orto, erbe aromatiche, olio extravergine di
              oliva delle colline, formaggi di malga e salumi artigianali. La tradizione gastronomica
              di questa zona si fonda su ingredienti semplici, lavorati con sapienza e rispetto per le
              stagioni.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              La cucina locale riflette secoli di storia contadina, dove ogni piatto racconta il
              rapporto tra la terra e chi la coltiva. Non e una cucina di lusso ostentato, ma di
              sostanza e sapore: piatti che riscaldano il cuore e che si tramandano di generazione in
              generazione. E proprio questa autenticita che rende la gastronomia di Selvazzano Dentro
              cosi apprezzata da chi cerca un&apos;esperienza culinaria vera, lontana dalle mode
              passeggere.
            </p>
          </Reveal>

          {/* ── Specialita locali ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              I piatti tipici da non perdere
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              I bigoli sono forse il piatto piu iconico della tradizione padovana: una pasta lunga e
              spessa, fatta con farina integrale e spesso trafilata al torchio, servita con ragu d&apos;anatra
              o con le sarde in saor. La consistenza ruvida dei bigoli trattiene il sugo in modo
              perfetto, creando un equilibrio di sapori che e impossibile replicare con la pasta
              industriale. A Selvazzano si trovano ancora ristoranti che li preparano a mano, seguendo
              la ricetta originale.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Il baccala alla vicentina e un altro classico imprescindibile: stoccafisso cotto a lungo
              nel latte con cipolle, acciughe e Parmigiano, servito con polenta morbida. E un piatto
              che richiede pazienza e maestria, e che nei ristoranti migliori raggiunge una cremosita e
              una profondita di sapore straordinarie. Il risotto, declinato in mille varianti &mdash;
              con gli asparagi bianchi di Bassano, con i funghi dei Colli, con il radicchio rosso
              &mdash; e un altro pilastro della cucina locale.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Non si puo parlare di gastronomia veneta senza menzionare il tiramisu, il dessert italiano
              piu famoso al mondo, che secondo molte fonti ha origini proprio in Veneto. La versione
              tradizionale, con savoiardi inzuppati nel caffe, crema al mascarpone e cacao amaro, e
              un finale perfetto per qualsiasi pasto. I migliori ristoranti della zona lo preparano
              ancora secondo la ricetta classica, senza varianti eccessive.
            </p>
          </Reveal>

          {/* ── Dove mangiare ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Dove mangiare a Selvazzano Dentro
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              L&apos;offerta gastronomica di Selvazzano Dentro e sorprendentemente varia. Le trattorie
              storiche del centro propongono menu fissi a pranzo con piatti della tradizione, ideali per
              chi cerca un pasto genuino e conveniente. Le pizzerie artigianali offrono un&apos;alternativa
              informale con impasti a lunga lievitazione e ingredienti di qualita. Per chi cerca
              un&apos;esperienza piu ricercata, diversi ristoranti della zona propongono menu degustazione
              che reinterpretano la cucina veneta in chiave contemporanea.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Un aspetto che distingue i ristoranti migliori di Selvazzano e l&apos;attenzione alla
              provenienza delle materie prime. La filosofia del chilometro zero non e una moda
              passeggera, ma una scelta consapevole che garantisce freschezza, sapore e sostenibilita.
              I ristoranti che collaborano direttamente con produttori locali, orti e caseifici del
              territorio offrono piatti che hanno un sapore diverso &mdash; piu vero, piu intenso, piu
              legato alla stagione.
            </p>
          </Reveal>

          {/* ── La Montecchia Green ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              La cucina della Montecchia Green
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Tra le proposte gastronomiche piu interessanti di Selvazzano Dentro c&apos;e il ristorante
              de La Montecchia Green, all&apos;interno del Golf della Montecchia. Lo chef Enrico Ruggin ha
              costruito un menu che e un omaggio al territorio: piatti che partono dalla tradizione
              veneta e la arricchiscono con tecniche moderne e presentazioni curate, senza mai perdere
              di vista la sostanza e il sapore.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              La cucina della Montecchia Green si fonda sulla filosofia del km0: le verdure provengono
              dall&apos;orto della tenuta, i formaggi dai caseifici dei Colli Euganei, le carni da
              allevamenti locali selezionati. Ogni piatto riflette la stagionalita dei prodotti, con un
              menu che cambia per seguire il ritmo della natura. Il risotto con le erbe dell&apos;orto, il
              baccala mantecato con polenta croccante, i bigoli con ragu di cortile sono solo alcuni
              esempi di una proposta che celebra la tradizione con eleganza.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Il contesto aggiunge valore all&apos;esperienza gastronomica: la terrazza panoramica con
              vista sui Colli Euganei e sul campo da golf, il verde curato della tenuta, il silenzio
              della campagna creano un ambiente dove il cibo si gusta con tutti i sensi. Per il pranzo
              il ristorante offre una formula lounge bar accessibile e informale, mentre le cene del
              venerdi e sabato sera propongono un&apos;esperienza piu strutturata e raffinata.
            </p>
          </Reveal>

          {/* ── Prodotti locali ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              I prodotti locali da scoprire
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Oltre ai piatti, Selvazzano Dentro e la zona dei Colli Euganei offrono una serie di
              prodotti locali che meritano di essere scoperti. L&apos;olio extravergine di oliva dei Colli
              Euganei DOP e un prodotto di eccellenza, con un sapore delicato e un profumo fruttato che
              lo rende perfetto per condire piatti di pesce e verdure. I vini della Tenuta Emo
              Capodilista &mdash; dal Fior d&apos;Arancio al Moscato, dai rossi ai bianchi &mdash;
              accompagnano idealmente la cucina del territorio. Il miele dei Colli, i formaggi di malga
              stagionati, le confetture artigianali e il pane cotto nel forno a legna completano un
              panorama gastronomico ricco e autentico.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Vuoi scoprire la cucina del territorio? Consulta il nostro{' '}
                  <Link href="/menu" className="font-medium text-green-dark underline">
                    menu
                  </Link>{' '}
                  e lasciati ispirare dai piatti dello chef Enrico Ruggin alla Montecchia Green.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          {/* ── Back link ── */}
          <Reveal>
            <div className="mt-10">
              <Link href="/blog" className="text-sm font-medium text-green-dark hover:underline">
                &larr; Torna al blog
              </Link>
            </div>
          </Reveal>
        </article>
      </section>
    </div>
  );
}
