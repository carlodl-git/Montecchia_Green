import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent } from '@/components/ui/Card';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import { hreflangForIt } from '@/lib/hreflang';

export const metadata = {
  title: 'I migliori aperitivi con vista sui Colli Euganei | La Montecchia Green',
  description:
    'Dove fare aperitivo con vista sui Colli Euganei: terrazze panoramiche, vini locali, taglieri e tramonti indimenticabili a pochi minuti da Padova. Guida ai migliori luoghi per un aperitivo diverso dal solito nella zona euganea.',
  alternates: hreflangForIt('/blog/aperitivo-colli-euganei'),
};

export default function AperitivoColliEuganeiPage() {
  return (
    <div>
      <SchemaOrg
        variant="blogPosting"
        blogPost={{
          title: 'I migliori aperitivi con vista sui Colli Euganei',
          description:
            'Dove fare aperitivo con vista sui Colli Euganei: terrazze panoramiche, vini locali, taglieri e tramonti indimenticabili a pochi minuti da Padova.',
          url: 'https://www.lamontecchiagreen.it/blog/aperitivo-colli-euganei',
          datePublished: '2026-03-20',
          dateModified: '2026-03-20',
          image: 'https://www.lamontecchiagreen.it/images/chef-preparing-a-dish.jpg',
        }}
      />
      <SchemaOrg
        variant="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Blog', url: 'https://www.lamontecchiagreen.it/blog' },
          { name: 'I migliori aperitivi con vista sui Colli Euganei', url: 'https://www.lamontecchiagreen.it/blog/aperitivo-colli-euganei' },
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[52vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Aperitivo sulla terrazza del Golf della Montecchia con vista sui Colli Euganei"
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
              I migliori aperitivi con vista sui Colli Euganei
            </h1>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-text-mid/70">
              <time dateTime="2026-03-20">20 marzo 2026</time>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              I Colli Euganei sono uno dei paesaggi piu suggestivi del Veneto: colline vulcaniche
              ricoperte di vigneti, borghi medievali e una luce che al tramonto diventa dorata. Non
              sorprende che questa zona sia diventata una delle mete preferite per chi cerca un
              aperitivo diverso dal solito, lontano dal caos della citta ma a pochissimi minuti da
              Padova. In questo articolo esploriamo cosa rende un aperitivo sui Colli Euganei davvero
              speciale e dove trovare le esperienze migliori.
            </p>
          </Reveal>

          {/* ── Cosa rende speciale un aperitivo ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Cosa rende speciale un aperitivo
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Un aperitivo non e solo un drink prima di cena. E un rituale sociale, un momento di
              pausa in cui il tempo rallenta e la conversazione scorre libera. Ma perche un aperitivo
              diventi un&apos;esperienza memorabile servono tre ingredienti: un luogo che sorprenda, una
              proposta di qualita e un&apos;atmosfera che faccia dimenticare il quotidiano.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              La vista e il primo fattore. Guardare il sole che scende dietro le colline euganee
              mentre si sorseggia un calice di Fior d&apos;Arancio o un Moscato dei Colli Euganei
              DOC e un piacere che va oltre il gusto. Il secondo fattore e la qualita di cio che si
              beve e si mangia: vini del territorio, cocktail preparati con cura, taglieri di
              formaggi e salumi locali, bruschette con prodotti dell&apos;orto. Il terzo e l&apos;ambiente:
              un giardino silenzioso, una terrazza affacciata sul verde, l&apos;assenza di traffico e
              rumore.
            </p>
          </Reveal>

          {/* ── Tipologie di locali ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Tipologie di locali per l&apos;aperitivo sui Colli
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              La zona euganea offre diverse tipologie di locali dove fare aperitivo, ognuna con le sue
              caratteristiche. Le enoteche e wine bar dei borghi collinari propongono degustazioni di
              vini locali in ambienti intimi e raccolti, spesso con una selezione di stuzzichini
              abbinati. Gli agriturismi con terrazza offrono un&apos;esperienza piu rustica e
              autentica, con prodotti a chilometro zero e un contatto diretto con la campagna veneta.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              I ristoranti con dehors panoramico sono ideali per chi cerca un aperitivo che puo
              trasformarsi in cena, con una proposta gastronomica piu strutturata e un servizio
              curato. Infine, una categoria meno scontata ma estremamente affascinante: i club house
              dei golf club e le strutture sportive immerse nel verde, che offrono terrazze ampie,
              prati curati e una sensazione di esclusivita senza la formalita di un locale in citta.
            </p>
          </Reveal>

          {/* ── La Montecchia Green ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Aperitivo sul green: l&apos;esperienza alla Montecchia Green
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Tra le esperienze piu apprezzate della zona c&apos;e l&apos;aperitivo sulla terrazza
              panoramica de La Montecchia Green, all&apos;interno del Golf della Montecchia a Selvazzano
              Dentro. Qui il panorama si apre sul campo da golf e sui Colli Euganei, creando
              un&apos;atmosfera che unisce relax e bellezza naturale. Non e necessario essere soci del
              golf: la terrazza e il bistrot sono aperti a tutti.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              La proposta per l&apos;aperitivo include i vini della Tenuta Emo Capodilista &mdash; una delle
              cantine piu prestigiose dei Colli Euganei DOC &mdash; selezionati dal sommelier della
              struttura, accompagnati da taglieri di salumi e formaggi del territorio, bruschette e
              stuzzichini preparati dalla cucina dello chef Enrico Ruggin. In estate, il momento
              ideale e dalle 18 alle 20, quando la luce radente del tramonto colora il green e le
              colline di tonalita calde e dorate.
            </p>
          </Reveal>

          {/* ── Il tramonto ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              L&apos;esperienza del tramonto sul green
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Chi ha provato un aperitivo al tramonto ai piedi dei Colli Euganei sa che e
              un&apos;esperienza difficile da descrivere a parole. Il silenzio del campo da golf, rotto
              solo dal canto degli uccelli, crea un contrasto sorprendente con la vicinanza alla
              citta. Padova e a soli 10 minuti di auto, eppure sembra di trovarsi in un altro mondo.
              E proprio questo contrasto &mdash; natura incontaminata a portata di mano &mdash; che
              rende l&apos;aperitivo sui Colli cosi speciale.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Per le coppie che cercano un&apos;idea romantica, per i gruppi di amici che vogliono
              staccare dalla routine, per i colleghi che desiderano un after-work diverso: un
              aperitivo con vista sulle colline euganee e un appuntamento da segnare in agenda,
              soprattutto nei mesi da aprile a ottobre quando le giornate si allungano e il clima
              invita a stare all&apos;aperto.
            </p>
          </Reveal>

          {/* ── Vantaggi pratici ── */}
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark mt-10 mb-4">
              Aspetti pratici da considerare
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid">
              Quando scegliete dove fare aperitivo nella zona dei Colli Euganei, considerate alcuni
              aspetti pratici che fanno la differenza. Il parcheggio gratuito e un vantaggio concreto,
              soprattutto se vi spostate in gruppo. La distanza da Padova centro e importante: i
              locali a 10-15 minuti dalla citta sono raggiungibili anche dopo una giornata di lavoro
              senza stress.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-text-mid mt-4">
              Il silenzio e la natura sono elementi che spesso si danno per scontati, ma che diventano
              preziosi quando si esce dal traffico cittadino. Un luogo immerso nel verde, lontano dai
              rumori della strada, permette di rilassarsi davvero e di apprezzare ogni sorso e ogni
              conversazione. Infine, se l&apos;aperitivo si prolunga, e comodo sapere di poter cenare
              nello stesso posto, magari con un menu che valorizza le stesse materie prime del
              territorio.
            </p>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal>
            <Card className="mt-10 border-green-dark/20 bg-cream/50">
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-text-mid">
                  Vuoi provare un aperitivo con vista sui Colli Euganei? Scopri la nostra proposta
                  sulla{' '}
                  <Link href="/ristorante" className="font-medium text-green-dark underline">
                    pagina del ristorante
                  </Link>
                  , oppure passa a trovarci sulla terrazza del Golf della Montecchia.
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
