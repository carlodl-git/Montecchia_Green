import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import SchemaOrg from '@/components/SchemaOrg';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Bistrot, Cucina & Aperitivo — La Montecchia Green, Padova',
  description:
    "Ristorante, bistrot e aperitivo sul green al Golf della Montecchia, Selvazzano Dentro (PD). Cucina italiana stagionale, pasta fatta in casa, vini selezionati. Terrazza panoramica sui Colli Euganei. A 10 minuti da Padova.",
  alternates: {
    canonical: 'https://www.lamontecchiagreen.it/ristorante',
    languages: { 'it': 'https://www.lamontecchiagreen.it/ristorante', 'en': 'https://www.lamontecchiagreen.it/en/ristorante' },
  },
  openGraph: {
    images: [{ url: '/images/chef-preparing-a-dish.jpg', width: 1200, height: 630 }],
  },
};

const ristoranteFaq = [
  { question: 'Serve prenotare per pranzo a La Montecchia Green?', answer: 'La prenotazione non è obbligatoria per il pranzo, ma è fortemente consigliata soprattutto nei weekend e nei giorni festivi. Il modo più rapido per prenotare è WhatsApp al +39 334 677 4483.' },
  { question: 'Avete un menu per celiaci o intolleranze alimentari?', answer: 'Sì, La Montecchia Green può preparare piatti per celiaci, intolleranti al lattosio e altre esigenze alimentari. Lo chef Enrico Ruggin adatta il menu su richiesta. Basta comunicarlo al momento della prenotazione.' },
  { question: 'Posso portare il cane al ristorante La Montecchia Green?', answer: 'I cani di piccola taglia sono ammessi nella zona terrazza esterna. Per cani di taglia media o grande, consigliamo di contattarci in anticipo per verificare la disponibilità.' },
  { question: 'La Montecchia Green è aperta solo ai soci del golf?', answer: 'No, il ristorante è aperto a tutti: famiglie, turisti, aziende e privati. Non è necessario essere soci del Golf della Montecchia.' },
  { question: 'Quali sono gli orari del ristorante?', answer: 'Pranzo tutti i giorni dalle 12:00 alle 15:00. Cena venerdì e sabato sera su prenotazione dalle 19:30 alle 23:00. Lo snack bar e l\'aperitivo sono disponibili durante il giorno.' },
  { question: 'Qual è il prezzo medio di un pranzo?', answer: 'Il pranzo completo è nella fascia €€, indicativamente tra 25 e 40 euro a persona, con cucina italiana stagionale, pasta fatta in casa e vini selezionati dal sommelier.' },
  { question: 'Avete un menu degustazione?', answer: 'Sì, su prenotazione lo chef Enrico Ruggin prepara un percorso degustazione con piatti stagionali e abbinamento vini della Tenuta Emo Capodilista. Il menu degustazione è disponibile soprattutto per le cene del venerdì e sabato.' },
  { question: 'Da dove provengono gli ingredienti del ristorante?', answer: 'La Montecchia Green utilizza ingredienti locali e stagionali. Verdure ed erbe aromatiche provengono dall\'orto proprio, coltivato nel terreno del Golf. La pasta è fatta in casa, i dessert artigianali. I vini sono della Tenuta Emo Capodilista e di cantine selezionate.' },
  { question: 'Come si raggiunge il ristorante?', answer: 'La Montecchia Green si trova in Via Montecchia 12, Selvazzano Dentro (PD), a 10 minuti da Padova centro e 5 da Abano Terme. Ampio parcheggio gratuito all\'interno del Golf della Montecchia.' },
  { question: 'Il ristorante ha la terrazza esterna?', answer: 'Sì, la terrazza panoramica affacciata sul campo da golf è uno dei punti di forza de La Montecchia Green. È disponibile per pranzi, aperitivi e cene estive, con vista aperta sui Colli Euganei.' },
];

export default function RistorantePage() {
  return (
    <div>
      <section className="relative min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.ristorante}
            alt="Lo chef in cucina de La Montecchia Green"
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
              Bistrot La Montecchia Green — Cucina italiana nel verde di Selvazzano
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <h2 className="text-3xl font-serif font-semibold tracking-tight text-green-dark">
                La storia del luogo
              </h2>
            </Reveal>
            <Reveal delayMs={70}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green si trova nella Club House del Golf della Montecchia, in un ex tabacchificio
                restaurato. È immersa nel verde ai piedi dei Colli Euganei e, grazie alla posizione a Selvazzano Dentro
                (PD), è perfetta per una pausa pranzo informale ma anche per una cena elegante.
              </p>
            </Reveal>

            <Reveal delayMs={110}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                La cucina di Enrico Ruggin
              </h3>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="text-base leading-relaxed text-text-mid">
                Enrico Ruggin guida una cucina italiana contemporanea, basata su prodotti stagionali e ingredienti
                locali. La struttura valorizza un orto proprio, la pasta fatta in casa e dessert artigianali. I vini
                sono selezionati da un sommelier, inclusi i vini della Tenuta Emo Capodilista.
              </p>
            </Reveal>

            <Reveal delayMs={210}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">Orari</h3>
            </Reveal>
            <Reveal delayMs={250}>
              <Card className="bg-warm-white/70">
                <CardContent className="p-6">
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed text-text-mid">
{`Pranzo: tutti i giorni
Cena: venerdì e sabato (su prenotazione)
Prenotazioni: +39 049 805 8464`}
                  </pre>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayMs={290}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                Prodotti di eccellenza
              </h3>
            </Reveal>
            <Reveal delayMs={330}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Pasta Monograno Felicetti',
                  'Miele Millebuche (prodotto nel campo da golf)',
                  'Vini della Tenuta Emo Capodilista',
                  'Specialità Cipriani',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-text-mid">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={370}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                L&apos;orto e la filosofia km 0
              </h3>
            </Reveal>
            <Reveal delayMs={410}>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green coltiva un orto proprio all&apos;interno del Golf della Montecchia. Verdure, erbe
                aromatiche e ortaggi di stagione arrivano freschi ogni giorno nella cucina dello chef Enrico Ruggin.
                Questa filosofia km 0 non è solo un&apos;etichetta, ma una scelta concreta: ogni piatto riflette il
                territorio dei Colli Euganei e la stagionalità degli ingredienti. Pomodori, zucchine, basilico, salvia e
                rosmarino crescono a pochi passi dal ristorante, garantendo freschezza e sapore autentici.
              </p>
            </Reveal>

            <Reveal delayMs={450}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                I piatti signature
              </h3>
            </Reveal>
            <Reveal delayMs={490}>
              <p className="text-base leading-relaxed text-text-mid">
                La cucina de La Montecchia Green si distingue per piatti che cambiano con le stagioni ma mantengono
                un&apos;identità riconoscibile. Tra i piatti più apprezzati: le pappardelle fatte in casa con ragù di
                selvaggina, il risotto ai carciofi con fonduta di Asiago, la tartare di manzo con maionese al lime e
                capperi. I secondi spaziano dalle carni selezionate ai pesci del giorno, sempre accompagnati da verdure
                dell&apos;orto. I dessert artigianali — come il tiramisù alla grappa euganea e la millefoglie con crema
                alla vaniglia — chiudono il pasto con dolcezza.
              </p>
            </Reveal>

            <Reveal delayMs={530}>
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
                I vini della Tenuta Emo Capodilista
              </h3>
            </Reveal>
            <Reveal delayMs={570}>
              <p className="text-base leading-relaxed text-text-mid">
                Il servizio sommelier è uno dei tratti distintivi de La Montecchia Green. La carta vini è costruita
                attorno alle etichette della Tenuta Emo Capodilista, una delle cantine più prestigiose dei Colli Euganei
                DOC. Il Fior d&apos;Arancio, il Rosso della Montecchia e il Moscato Passito sono tra i vini più
                richiesti. La selezione include anche etichette venete, nazionali e internazionali. Il sommelier guida
                ogni ospite nella scelta, proponendo abbinamenti pensati per il menu del giorno.
              </p>
            </Reveal>

            <Reveal delayMs={610}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <Link href="/menu">Scopri il menu stagionale</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/prenota">Prenota un tavolo</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="Informazioni essenziali">
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Aperto a tutti:</span> golfisti, famiglie, turisti e aziende
                  </div>
                  <div>
                    <span className="font-semibold">Indirizzo:</span> Via Montecchia 12, Selvazzano Dentro (PD)
                  </div>
                  <div>
                    <span className="font-semibold">Contatto:</span> +39 049 805 8464
                  </div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>

        {/* ── APERITIVO ──────────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <span className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-green-dark">
              Aperitivo a Padova — sul green, con vista
            </h2>
          </Reveal>
          <Reveal delayMs={70}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-mid">
              Lo snack bar e l&apos;aperitivo de La Montecchia Green si svolgono sulla terrazza panoramica affacciata
              sul campo da golf, con vista aperta sui Colli Euganei. È uno dei posti più suggestivi per un aperitivo
              vicino a Padova: silenzio, natura, tramonto sul green e vini della Tenuta Emo Capodilista. Lontano dal
              caos del centro, a soli 10 minuti da Padova.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Cocktail e drink', sub: 'Selezione di cocktail classici e proposte stagionali' },
              { label: 'Vini della Tenuta', sub: 'Vini DOC Colli Euganei della Tenuta Emo Capodilista' },
              { label: 'Taglieri e stuzzichini', sub: 'Ingredienti locali e stagionali, prodotti artigianali' },
              { label: 'Terrazza panoramica', sub: 'Vista aperta sul green e sui Colli Euganei' },
              { label: 'A 10 minuti da Padova', sub: 'Parcheggio gratuito, facile da raggiungere' },
              { label: 'Atmosfera rilassata', sub: 'Elegante ma informale, aperto a tutti' },
            ].map((item, idx) => (
              <Reveal key={item.label} delayMs={idx * 60}>
                <div className="card-lift flex items-start gap-4 rounded-2xl border border-green-dark/8 bg-warm-white p-5 shadow-sm">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-dark" aria-hidden="true">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-text-dark">{item.label}</div>
                    <div className="mt-0.5 text-xs text-text-mid/80">{item.sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={180}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="https://wa.me/393346774483?text=Ciao%20La%20Montecchia%20Green%2C%20vorrei%20informazioni%20sull%27aperitivo."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Chiedi info aperitivo su WhatsApp
              </Link>
              <a
                href="tel:+390498058464"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-dark/20 px-6 py-3 text-sm font-semibold text-green-dark transition-colors hover:bg-green-dark/5"
              >
                <Phone className="h-4 w-4" />
                +39 049 805 8464
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── FAQ ──────────────────────────────────────── */}
        <div className="mt-16 border-t border-green-dark/8 pt-14">
          <Reveal>
            <h2 className="text-2xl font-serif font-semibold tracking-tight text-green-dark">
              Domande frequenti sul ristorante
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-6 grid gap-4 rounded-2xl border border-black/10 bg-warm-white/70 p-5">
              {ristoranteFaq.map((item, idx) => (
                <div key={item.question}>
                  <div className="text-sm font-semibold text-text-dark">{item.question}</div>
                  <p className="mt-1 text-sm leading-relaxed text-text-mid/95">{item.answer}</p>
                  {idx !== ristoranteFaq.length - 1 ? <div className="mt-4 border-t border-black/5" /> : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <SchemaOrg variant="aperitivo" />
        <SchemaOrg variant="breadcrumb" breadcrumbItems={[
          { name: 'Home', url: 'https://www.lamontecchiagreen.it' },
          { name: 'Ristorante', url: 'https://www.lamontecchiagreen.it/ristorante' },
        ]} />
        <SchemaOrg variant="customFaq" faqItems={ristoranteFaq} />
      </section>
    </div>
  );
}

