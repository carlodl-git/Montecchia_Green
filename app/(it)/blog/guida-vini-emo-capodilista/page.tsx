import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForIt } from '@/lib/hreflang';

export const metadata = {
  title: 'Guida ai Vini della Tenuta Emo Capodilista: Colli Euganei DOC | La Montecchia Green',
  description:
    'Scopri i vini della Tenuta Emo Capodilista: Fior d\'Arancio, Moscato, rossi e bianchi dei Colli Euganei DOC. Storia, vitigni, abbinamenti e dove degustarli vicino a Padova.',
  alternates: hreflangForIt('/blog/guida-vini-emo-capodilista'),
};

export default function GuidaViniEmoCapodilistaPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        blogPost={{
          title: 'Guida ai Vini della Tenuta Emo Capodilista: Colli Euganei DOC',
          description:
            'Scopri i vini della Tenuta Emo Capodilista: Fior d\'Arancio, Moscato, rossi e bianchi dei Colli Euganei DOC. Storia, vitigni, abbinamenti e dove degustarli.',
          url: 'https://www.lamontecchiagreen.it/blog/guida-vini-emo-capodilista',
          datePublished: '2026-04-08',
          dateModified: '2026-04-08',
          image: 'https://www.lamontecchiagreen.it/images/chef-preparing-a-dish.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/blog' },
          { name: 'Guida ai Vini Emo Capodilista', url: 'https://www.lamontecchiagreen.it/blog/guida-vini-emo-capodilista' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Degustazione vini Emo Capodilista sulla terrazza della Montecchia Green"
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
              Guida ai Vini della Tenuta Emo Capodilista
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/70">
              <time dateTime="2026-04-08">8 aprile 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La Tenuta Emo Capodilista e una delle realta vinicole piu affascinanti dei Colli Euganei,
              con una storia che affonda le radici in secoli di tradizione aristocratica veneta. I suoi
              vini sono l&apos;espressione autentica di un terroir unico al mondo: colline di origine
              vulcanica, microclima mediterraneo e vitigni autoctoni che qui trovano le condizioni
              ideali per esprimersi al meglio. In questa guida esploriamo la storia della tenuta, i
              vitigni principali, i vini da conoscere e i migliori abbinamenti con la cucina del
              territorio.
            </p>
          </Reveal>

          {/* ── Storia ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              La storia della Tenuta Emo Capodilista
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La famiglia Emo Capodilista e legata a questa terra da generazioni. La tenuta sorge nel
              cuore dei Colli Euganei, in un paesaggio di colline dolci ricoperte di vigneti e boschi,
              dove la viticoltura ha una tradizione millenaria. Il nome stesso evoca la nobilta veneta
              e un legame profondo con il territorio che si traduce in una filosofia produttiva basata
              sul rispetto della terra e sulla qualita senza compromessi.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              La tenuta si estende su decine di ettari di vigneti coltivati con metodi sostenibili,
              dove la biodiversita e valorizzata e il suolo vulcanico conferisce ai vini una mineralita
              distintiva. Ogni bottiglia racconta la storia di questa terra: le eruzioni che milioni di
              anni fa hanno plasmato le colline, i secoli di coltivazione che hanno selezionato i
              vitigni migliori, la passione di una famiglia che ha fatto del vino la propria missione.
            </p>
          </Reveal>

          {/* ── Colli Euganei DOC ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              I Colli Euganei DOC: un terroir unico
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La denominazione Colli Euganei DOC tutela i vini prodotti in questa zona dal 1969,
              garantendone l&apos;origine e la qualita. Il terroir dei Colli Euganei e unico in Italia e
              forse nel mondo: il suolo di origine vulcanica, ricco di minerali e oligoelementi, dona
              ai vini una complessita e una personalita inconfondibili. Il microclima, influenzato dalla
              vicinanza alla laguna veneta e protetto dalle colline, crea condizioni ideali per la
              maturazione lenta e equilibrata delle uve.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              L&apos;escursione termica tra giorno e notte favorisce lo sviluppo degli aromi, mentre
              l&apos;esposizione delle colline assicura un&apos;illuminazione ottimale dei vigneti. E un
              territorio dove i vitigni autoctoni trovano la loro massima espressione, ma dove anche
              varieta internazionali riescono a esprimere caratteri originali e sorprendenti.
            </p>
          </Reveal>

          {/* ── Vitigni ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              I vitigni principali: dal Fior d&apos;Arancio ai grandi rossi
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Il Fior d&apos;Arancio e il vitigno simbolo dei Colli Euganei. Si tratta di una variante
              locale del Moscato Giallo che prende il nome dal caratteristico profumo di fiori
              d&apos;arancio che sprigiona nel calice. Viene vinificato in versione secca, dolce e
              spumante, ed e un vino che sorprende per la sua versatilita: fresco e aromatico come
              aperitivo, strutturato e complesso quando accompagna piatti elaborati, dolce e avvolgente
              nel finale di un pasto.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Il Moscato dei Colli Euganei, nelle sue diverse declinazioni, e un altro gioiello della
              produzione locale. La versione secca mantiene un&apos;aromaticita elegante senza risultare
              stucchevole, mentre la versione passita raggiunge una concentrazione di sapori
              straordinaria, ideale per accompagnare formaggi stagionati e dessert. Tra i bianchi, la
              Garganega e il Tai Bianco offrono vini freschi e minerali, perfetti per l&apos;estate e per
              accompagnare piatti di pesce e verdure.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              I rossi dei Colli Euganei sono una scoperta per molti appassionati. Il Merlot e il
              Cabernet Sauvignon, su suolo vulcanico, sviluppano una struttura e una complessita
              notevoli, con tannini eleganti e un finale lungo e minerale. Le versioni riserva, dopo
              affinamento in legno, raggiungono una profondita che rivaleggia con i migliori rossi
              italiani. La Tenuta Emo Capodilista produce rossi di grande carattere che meritano di
              essere conosciuti al di fuori dei confini regionali.
            </p>
          </Reveal>

          {/* ── Vini principali ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              I vini da conoscere della Tenuta
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La gamma della Tenuta Emo Capodilista comprende etichette che spaziano dai bianchi freschi
              e immediati ai rossi complessi e strutturati. Il Fior d&apos;Arancio secco e il vino
              perfetto per iniziare la scoperta: al naso regala note floreali e fruttate, in bocca e
              fresco e sapido con un finale piacevolmente aromatico. Il bianco a base di Tai e
              Garganega e ideale come vino da tutto pasto, con la sua mineralita che si sposa
              naturalmente con la cucina veneta.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Tra i rossi, il blend di Merlot e Cabernet affinato in barrique colpisce per l&apos;eleganza
              dei tannini e la complessita del bouquet, dove si riconoscono frutti rossi maturi, spezie
              dolci e una nota minerale di fondo. Il Fior d&apos;Arancio passito, infine, e un vino da
              meditazione che chiude idealmente una cena: dorato, avvolgente, con note di albicocca,
              miele e fiori d&apos;arancio che persistono a lungo nel palato.
            </p>
          </Reveal>

          {/* ── Abbinamenti ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Abbinamenti cibo-vino: consigli pratici
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              L&apos;abbinamento cibo-vino e un&apos;arte che esalta sia il piatto sia il calice. Con i vini
              della Tenuta Emo Capodilista, i migliori abbinamenti seguono il principio della
              territorialita: vini del territorio con piatti del territorio. Il Fior d&apos;Arancio secco
              si abbina perfettamente a un tagliere di salumi e formaggi locali o a un risotto con le
              erbe dell&apos;orto. Il bianco minerale accompagna idealmente il baccala mantecato e i piatti
              di pesce di lago. I rossi strutturati trovano il loro compagno ideale nei bigoli con ragu,
              nelle carni alla griglia e nei formaggi stagionati dei Colli. Il passito chiude
              magnificamente con un tiramisu tradizionale o con formaggi erborinati.
            </p>
          </Reveal>

          {/* ── Dove degustarli ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Dove degustare i vini Emo Capodilista
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Il modo migliore per apprezzare i vini della Tenuta Emo Capodilista e degustarli nel loro
              territorio, circondati dal paesaggio che li ha generati. La Montecchia Green, situata
              all&apos;interno del Golf della Montecchia a Selvazzano Dentro, offre una selezione completa
              dei vini della tenuta, curata dal sommelier della struttura. Sulla terrazza panoramica,
              con vista sui Colli Euganei e sul campo da golf, ogni calice acquista un significato
              speciale: si beve il vino guardando le colline dove e nato.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Il servizio sommelier della Montecchia Green non si limita a versare il vino: racconta la
              storia di ogni etichetta, suggerisce gli abbinamenti migliori con i piatti dello chef
              Enrico Ruggin e guida il cliente in un percorso di scoperta sensoriale. Che si tratti di
              un aperitivo al tramonto, di un pranzo informale o di una cena speciale, i vini della
              Tenuta Emo Capodilista arricchiscono ogni momento con la loro personalita e la loro
              eleganza.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Vuoi scoprire i vini della Tenuta Emo Capodilista? Vieni a degustarli sulla nostra
                  terrazza panoramica. Scopri di piu sulla{' '}
                  <Link href="/ristorante" className="font-medium text-green-dark underline">
                    pagina del ristorante
                  </Link>
                  .
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
