import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';
import Breadcrumb from '@/components/Breadcrumb';
import { hreflangForIt } from '@/lib/hreflang';
import { CONTACT } from '@/lib/contact';

// Max 5 FAQ visibili + schema per ottimizzare PAA targeting.
const menuFaq = [
  { question: 'Il menu cambia con le stagioni?', answer: 'Sì, il menu de La Montecchia Green cambia ogni stagione. Lo chef Enrico Ruggin adatta i piatti in base alla disponibilità di ingredienti locali e stagionali, incluse le verdure dell\'orto proprio.' },
  { question: 'Avete opzioni per celiaci e intolleranze alimentari?', answer: 'Sì, è disponibile pasta senza glutine e su richiesta prodotti vegani. La cucina può adattare i piatti per esigenze alimentari specifiche: basta comunicarlo al momento della prenotazione.' },
  { question: 'Quali sono i prezzi indicativi del menu?', answer: 'I primi vanno da 12 a 18 euro, i piatti dalla piastra da 14 a 30 euro, le insalate da 12 a 15 euro e i dessert da 6 a 8 euro. Il coperto è di 2 euro a persona.' },
  { question: 'Avete menu vegetariani o vegani?', answer: 'Sì, sono disponibili su richiesta prodotti vegani. Molti piatti del menu includono già opzioni a base vegetale, come l\'insalata Stagionale Cotta e Cruda, le Patatas Bravas e la Pasta e Fasoi.' },
  { question: 'Che vini serve La Montecchia Green?', answer: 'La carta vini è curata da un sommelier e privilegia le etichette della Tenuta Emo Capodilista (Colli Euganei DOC). Sono disponibili anche etichette nazionali e internazionali. Un calice parte da circa 5–8 euro.' },
];

type MenuItem = { name: string; description: string; price: string; allergens?: string };

const menuSections: { title: string; items: MenuItem[] }[] = [
  {
    title: 'Le nostre Paste e Zuppe',
    items: [
      { name: 'Pappardelle al Nero di Seppia', description: 'Calamaretti spillo e briciole di pane', price: '18€', allergens: '1,2,3,4,9,14' },
      { name: 'Tortellini fatti a mano', description: 'Panna e Parmigiano Reggiano 24 mesi', price: '16€', allergens: '1,3,7' },
      { name: 'Maccheroncino alla Carbonara', description: 'Spuma di salsa carbonara, Guanciale di Amatrice e pepe nero', price: '15€', allergens: '1,3,7,12' },
      { name: 'Pasta', description: 'Ai tre pomodori / ragù alla Bolognese', price: '12€', allergens: '1,3,7,9' },
      { name: 'Pasta e Fasoi tiepida', description: 'Ricetta tradizionale veneta', price: '12€', allergens: '1,6,9' },
    ],
  },
  {
    title: 'Dalla Piastra',
    items: [
      { name: 'Polpo', description: 'Hummus di ceci, tentacolo di polpo CBT, pimiento de padron, sesamo nero', price: '18€', allergens: '4,11' },
      { name: 'Hamburger di Manzo 200g', description: 'Cheddar, bacon, insalata, pomodoro a fette, cipolla caramellata, salsa BBQ e patate fritte', price: '16€', allergens: '1,6,7,10,12' },
      { name: 'Veggy Burger', description: 'Buns artigianale alla zucca, veggy burger, caprese e mayo al basilico', price: '14€', allergens: '1,3,6,7,10' },
      { name: 'Filetto di Manzo 250 gr.', description: 'Patate al forno e crème fraîche', price: '30€', allergens: '7' },
    ],
  },
  {
    title: 'Le Insalate',
    items: [
      { name: 'Caesar Salad', description: 'Petto di pollo, Iceberg, Grana, Crostini, Salsa caesar', price: '12€', allergens: '1,3,7,8,10,12' },
      { name: 'La Proteica', description: 'Misticanza, feta, gamberi al curry, fragole e mandorle a lamella', price: '15€', allergens: '2,7,4,8' },
      { name: 'Stagionale Cotta e Cruda', description: 'Misticanza, cetrioli, finocchi, ravanelli, mais e quinoa soffiata', price: '13€' },
    ],
  },
  {
    title: 'Viaggiando',
    items: [
      { name: 'Avocado Toast', description: 'Pane ai cereali, Guacamole, Salmone, Uovo, Semi di sesamo', price: '12€', allergens: '1,3,4,11' },
      { name: 'Suprema di Faraona alla Milanese', description: 'Coleslaw e patate fritte', price: '15€', allergens: '1,3' },
      { name: 'Lobster Roll', description: 'Pan brioche artigianale, Astice, mayo aromatizzata', price: '16€', allergens: '1,2,3,6,7,10' },
      { name: 'Riso Basmati', description: 'Verdure spadellate, Pollo teriaky', price: '16€', allergens: '6,11' },
      { name: 'Poké Riso Nero', description: 'Tartare di salmone, mango, edamame, pomodorini, cappuccio viola e salsa Ponzu', price: '18€', allergens: '4,6' },
      { name: 'Radicchio del nostro Orto', description: 'Radicchio in saor, pinoli e uvetta', price: '10€', allergens: '6,8' },
    ],
  },
  {
    title: 'Da Condividere',
    items: [
      { name: 'Patatas Bravas', description: 'Salsa tipica spagnola con mayo fatta da noi e paprika dolce', price: '6€', allergens: '1,3' },
      { name: 'Bao', description: 'Bao, pulled di tacchino, salsa ponzu, chimichurri mayo', price: '12€', allergens: '1,3,7,6' },
      { name: 'Tacos', description: 'Tacos, manzo, sweet sauce, pico de gallo, cipolla caramellata', price: '13€', allergens: '1,6' },
      { name: 'Crocchette di Jamon', description: 'Crocchette di Jamon iberico e Asiago crosta nera', price: '8€', allergens: '1,3,7' },
      { name: 'Tagliere di Patanegra', description: 'Patanegra e churros salati', price: '20/30€', allergens: '1,3,7' },
    ],
  },
  {
    title: 'Dessert',
    items: [
      { name: 'Tiramisù', description: 'Ricetta classica', price: '6€', allergens: '1,3,7' },
      { name: 'Crumble al Cioccolato Salato', description: 'Spuma al cioccolato bianco e coulis di mango', price: '6€', allergens: '1,7,8' },
      { name: 'Cheesecake in Bicchiere', description: 'Fragole fresche della Basilicata', price: '8€', allergens: '1,7,8' },
      { name: 'Coppetta di Frutta Fresca', description: 'Accompagnata da gelato artigianale alla vaniglia', price: '8€', allergens: '7' },
    ],
  },
];

export const metadata = {
  title: 'Menu La Montecchia Green: cucina stagionale a Selvazzano Dentro',
  description:
    "Menu stagionale de La Montecchia Green: antipasti, primi e pasta fatta in casa, secondi selezionati, pizze estive e dessert artigianali. Al Golf della Montecchia, Selvazzano Dentro (PD).",
  alternates: hreflangForIt('/menu'),
  openGraph: {
    images: [{ url: '/images/tagliatelle-funghi.jpg', width: 1200, height: 630 }],
  },
};

export default function MenuPage() {
  return (
    <div>
      <section className="relative min-h-[42vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.menu}
            alt="Tagliatelle ai funghi, cucina de La Montecchia Green"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-warm-white">
              Menu La Montecchia Green: cucina stagionale a Selvazzano Dentro
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Menu', href: '/menu' },
          ]}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green è una cucina italiana contemporanea, con ingredienti locali e stagionali.
                Utilizziamo prodotti dell’orto, pasta fatta in casa e dessert artigianali. I vini sono selezionati dal
                sommelier, inclusi quelli della Tenuta Emo Capodilista.
              </p>
            </Reveal>

            {menuSections.map((section, sIdx) => (
              <Reveal key={section.title} delayMs={sIdx * 60}>
                <Card className="bg-warm-white/70">
                  <CardContent className="p-6">
                    <div className="text-sm uppercase tracking-wider text-text-mid font-semibold mb-4">{section.title}</div>
                    <ul className="space-y-4">
                      {section.items.map((item) => (
                        <li key={item.name} className="flex justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2">
                              <span className="font-semibold text-sm text-green-dark">{item.name}</span>
                            </div>
                            <p className="text-sm text-text-mid/80 mt-0.5">{item.description}</p>
                            {item.allergens && (
                              <p className="text-xs text-text-mid/60 mt-0.5">Allergeni: ({item.allergens})</p>
                            )}
                          </div>
                          <span className="text-sm font-semibold text-green-dark whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}

            <Reveal delayMs={100}>
              <div className="rounded-2xl border border-green-mid/30 bg-green-mid/10 p-5">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  Coperto e informazioni
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  Coperto: 2€ a persona. Disponibili su richiesta prodotti vegani. A disposizione pasta senza glutine.
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-mid/70">
                  Guida allergeni: (1) Cereali contenenti glutine, (2) Crostacei, (3) Uova, (4) Pesce, (5) Arachidi, (6) Soia, (7) Latte, (8) Frutta a guscio, (9) Sedano, (10) Senape, (11) Semi di sesamo, (12) Solfiti, (13) Lupini, (14) Molluschi.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={110}>
              <div className="rounded-2xl border border-green-dark/10 bg-warm-white p-5">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  Approfondisci
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  Scopri la nostra{' '}
                  <Link href="/blog/guida-vini-emo-capodilista" className="font-semibold text-green-dark underline decoration-green-mid/40 underline-offset-2 hover:decoration-green-dark">
                    guida ai vini della Tenuta Emo Capodilista
                  </Link>{' '}
                  oppure leggi cosa dicono di noi in{' '}
                  <Link href="/blog/cosa-mangiare-selvazzano-dentro" className="font-semibold text-green-dark underline decoration-green-mid/40 underline-offset-2 hover:decoration-green-dark">
                    cosa mangiare a Selvazzano Dentro
                  </Link>.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-green-mid/30 bg-green-mid/10 p-5">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  Prenota il tuo tavolo
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  Il menu può variare in base alla stagionalità degli ingredienti. Per allergie e intolleranze comunicale al momento della prenotazione.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                    <Link href="/prenota">Prenota un tavolo</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contatti">Chiedi informazioni</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="A colpo d’occhio">
                <div className="space-y-2">
                  <div>
                    Cucina: <span className="font-semibold">italiana contemporanea</span>
                  </div>
                  <div>
                    Prodotti: <span className="font-semibold">locali e stagionali</span>
                  </div>
                  <div>
                    Specialità: <span className="font-semibold">pasta fatta in casa</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Vini selezionati da sommelier, inclusi Emo Capodilista.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-green-dark mb-6">
            Domande frequenti sul menu
          </h2>
        </Reveal>
        <div className="grid gap-4">
          {menuFaq.map((faq, idx) => (
            <Reveal key={idx} delayMs={idx * 40}>
              <div className="rounded-2xl border border-green-mid/20 bg-warm-white/70 p-5">
                <h3 className="text-sm font-semibold text-green-dark">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SchemaOrg variant="breadcrumb" breadcrumbItems={[
        { name: 'Home', url: `${CONTACT.site}/` },
        { name: 'Menu', url: `${CONTACT.site}/menu` },
      ]} />
      <SchemaOrg variant="customFaq" faqItems={menuFaq} />
      <SchemaOrg
        variant="menu"
        lang="it"
        menuSections={menuSections.map((s) => ({
          name: s.title,
          items: s.items.map((it) => ({
            name: it.name,
            description: it.description,
            // Prezzo: prendo solo il primo numero (es. "20/30€" → 20)
            price: parseFloat(it.price.replace(',', '.').replace(/[^\d.]/g, '')) || undefined,
          })),
        }))}
      />
    </div>
  );
}

