import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForIt } from '@/lib/hreflang';

export const metadata = {
  title: 'Come scegliere la location per un matrimonio a Padova | La Montecchia Green',
  description:
    'Guida completa alla scelta della location per matrimoni a Padova: atmosfera, capienza, cucina, logistica e budget. Scopri i criteri fondamentali per trovare il luogo perfetto per il tuo ricevimento tra ville storiche, agriturismi e location uniche ai piedi dei Colli Euganei.',
  alternates: hreflangForIt('/blog/location-matrimonio-padova'),
};

export default function LocationMatrimonioPadovaPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        blogPost={{
          title: 'Come scegliere la location per un matrimonio a Padova',
          description:
            'Guida completa alla scelta della location per matrimoni a Padova: atmosfera, capienza, cucina, logistica e budget. I cinque criteri fondamentali per trovare il luogo perfetto per il vostro ricevimento.',
          url: 'https://www.lamontecchiagreen.it/blog/location-matrimonio-padova',
          datePublished: '2026-03-15',
          dateModified: '2026-03-15',
          image: 'https://www.lamontecchiagreen.it/images/Sala-Ristorante-eventi.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/blog' },
          { name: 'Come scegliere la location per un matrimonio a Padova', url: 'https://www.lamontecchiagreen.it/blog/location-matrimonio-padova' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.eventi}
            alt="Sala allestita per matrimoni al Golf della Montecchia, Selvazzano Dentro"
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
              Come scegliere la location per un matrimonio a Padova
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/70">
              <time dateTime="2026-03-15">15 marzo 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La scelta della location e una delle decisioni piu importanti nell&apos;organizzazione di
              un matrimonio. Il luogo in cui si celebra il ricevimento definisce l&apos;atmosfera
              dell&apos;intera giornata, influenza il menu, la logistica e persino il ricordo che gli
              ospiti porteranno con se. Nella provincia di Padova le opzioni sono numerose: ville
              venete, agriturismi tra i Colli Euganei, ristoranti con giardino, hotel con sale
              banchetti e location piu originali come golf club e dimore storiche restaurate. Ma come
              orientarsi? In questo articolo analizziamo cinque criteri fondamentali che vi aiuteranno
              a trovare il luogo perfetto per il vostro giorno speciale.
            </p>
          </Reveal>

          {/* ── Criterio 1 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              1. Atmosfera e contesto
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Il primo elemento da valutare e il tipo di atmosfera che desiderate. Un matrimonio in
              citta offre praticita e un contesto urbano elegante, ma spesso manca di verde e
              riservatezza. Una villa storica regala fascino e storia, tuttavia puo risultare rigida
              negli allestimenti. Le location immerse nella natura &mdash; come quelle ai piedi dei
              Colli Euganei &mdash; combinano il meglio di entrambi i mondi: un paesaggio
              straordinario con la comodita di strutture moderne.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Pensate a come volete che i vostri ospiti si sentano quando arrivano. Un viale alberato,
              un panorama sulle colline, il profumo dell&apos;erba appena tagliata: questi dettagli
              creano un&apos;esperienza sensoriale che nessun allestimento floreale puo sostituire.
              Cercate una location che abbia gia una propria bellezza naturale, cosi da ridurre i
              costi di decorazione e rendere ogni foto indimenticabile.
            </p>
          </Reveal>

          {/* ── Criterio 2 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              2. Capienza e flessibilita degli spazi
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Il numero di invitati condiziona enormemente la scelta. Una location troppo piccola
              risulta soffocante, una troppo grande appare vuota e dispersiva. Il consiglio e di
              visitare gli spazi con una lista invitati quasi definitiva e immaginare la disposizione
              dei tavoli, la pista da ballo, l&apos;angolo bar e la zona buffet.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Un aspetto spesso sottovalutato e la flessibilita indoor/outdoor. In Veneto il meteo
              primaverile e estivo puo essere imprevedibile: la location ideale offre sia spazi
              coperti sia aree all&apos;aperto, con la possibilita di spostare il ricevimento al chiuso in
              caso di pioggia senza compromettere l&apos;esperienza. Sale di diverse dimensioni
              permettono anche di separare i momenti della giornata: aperitivo all&apos;aperto, cena in
              sala, festa serale in un ambiente dedicato.
            </p>
          </Reveal>

          {/* ── Criterio 3 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              3. Cucina e servizio
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Il menu e il cuore del ricevimento. Valutate attentamente se la location dispone di una
              cucina interna con uno chef dedicato oppure se si affida a un catering esterno. Nel
              primo caso avrete maggiore controllo sulla qualita e sulla coerenza del servizio; nel
              secondo, piu liberta nella scelta del fornitore ma anche piu complessita logistica.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Un menu personalizzato e un segno di attenzione verso gli ospiti. Le migliori location
              offrono degustazioni pre-matrimonio, permettono di adattare i piatti a intolleranze e
              preferenze e propongono abbinamenti enologici curati da un sommelier. La qualita degli
              ingredienti &mdash; locali, stagionali, possibilmente a chilometro zero &mdash; fa la
              differenza tra un banchetto ordinario e un&apos;esperienza gastronomica. Non dimenticate di
              chiedere informazioni sulla carta dei vini: un buon servizio di sommelier con vini del
              territorio eleva enormemente la percezione complessiva del ricevimento.
            </p>
          </Reveal>

          {/* ── Criterio 4 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              4. Logistica e accessibilita
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Un matrimonio coinvolge decine o centinaia di persone che devono raggiungere la location,
              parcheggiare e muoversi agevolmente. Verificate la disponibilita di parcheggio gratuito
              (un dettaglio che gli ospiti apprezzano enormemente), la distanza dai principali centri
              urbani e la facilita di accesso per persone con mobilita ridotta.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              La vicinanza a Padova e un vantaggio logistico notevole: molti invitati provengono dal
              capoluogo o dalla sua prima cintura. Una location a 10-15 minuti dal centro citta riduce
              i tempi di spostamento e semplifica l&apos;organizzazione del trasporto. Se avete ospiti da
              fuori regione, considerate anche la vicinanza a hotel e strutture ricettive come le
              terme di Abano e Montegrotto, distanti pochi minuti dai Colli Euganei.
            </p>
          </Reveal>

          {/* ── Criterio 5 ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              5. Budget e trasparenza
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Il budget e spesso il fattore decisivo. Le location piu serie offrono preventivi
              dettagliati e trasparenti fin dal primo incontro, senza costi nascosti che emergono a
              poche settimane dal matrimonio. Diffidate delle proposte troppo vaghe o dei pacchetti
              &ldquo;tutto incluso&rdquo; che non specificano nel dettaglio cosa e incluso e cosa no.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Confrontate sempre almeno tre preventivi e fate attenzione alle voci che spesso vengono
              trascurate: affitto della sala, corkage fee per i vini, costo degli allestimenti, ore
              extra di musica, servizio di pulizia. Una location che include molti di questi servizi
              nel prezzo base vi semplifichera la vita e vi permettera di pianificare con serenita.
            </p>
          </Reveal>

          {/* ── Menzione La Montecchia Green ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Una location che unisce tutti i criteri: La Montecchia Green
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Tra le location per matrimoni nella provincia di Padova, La Montecchia Green rappresenta
              una scelta che soddisfa ciascuno dei cinque criteri descritti sopra. Situata all&apos;interno
              della Club House del Golf della Montecchia, in un ex tabacchificio restaurato ai piedi
              dei Colli Euganei, offre un&apos;atmosfera unica che mescola eleganza storica e natura
              incontaminata. Le sale modulabili ospitano da 20 a 300 persone, con la possibilita di
              sfruttare la terrazza panoramica sul green, gli spazi all&apos;aperto e la piscina.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              La cucina e affidata allo chef Enrico Ruggin, che prepara menu personalizzati con
              ingredienti locali e stagionali, mentre i vini della Tenuta Emo Capodilista sono
              selezionati dal sommelier della struttura. A soli 10 minuti da Padova centro e 5 da
              Abano Terme, la location dispone di ampio parcheggio gratuito ed e completamente
              accessibile. Lo staff dedicato accompagna ogni coppia dalla pianificazione al giorno del
              si, con preventivi chiari e dettagliati.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Stai cercando la location perfetta per il tuo matrimonio a Padova? Scopri tutti i
                  dettagli su spazi, menu e servizi nella nostra{' '}
                  <Link href="/matrimoni" className="font-medium text-green-dark underline">
                    pagina dedicata ai matrimoni
                  </Link>
                  , oppure contattaci per organizzare una visita alla struttura.
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
