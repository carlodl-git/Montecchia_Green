import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { PAGE_HERO_IMAGES } from '@/lib/site-images';
import InfoBox from '@/components/InfoBox';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import { hreflangForEn } from '@/lib/hreflang';
import SchemaOrg from '@/components/SchemaOrg';
import Breadcrumb from '@/components/Breadcrumb';
import { CONTACT } from '@/lib/contact';

export const metadata = {
  title: 'Menu La Montecchia Green: seasonal cuisine in Selvazzano Dentro',
  description:
    'La Montecchia Green seasonal menu: appetizers, homemade pasta, selected main courses, summer pizzas and handmade desserts. Inside Golf della Montecchia, Selvazzano Dentro (PD).',
  alternates: hreflangForEn('/en/menu'),
  openGraph: {
    images: [{ url: '/images/tagliatelle-funghi.jpg', width: 1200, height: 630 }],
  },
};

const menuSections: { title: string; items: { name: string; description: string; price: string; allergens?: string }[] }[] = [
  {
    title: 'Pasta & Soups',
    items: [
      { name: 'Pappardelle al Nero di Seppia', description: 'Squid ink pappardelle with baby squid and breadcrumbs', price: '18€', allergens: '1,2,3,4,9,14' },
      { name: 'Handmade Tortellini', description: 'Cream and Parmigiano Reggiano 24 months', price: '16€', allergens: '1,3,7' },
      { name: 'Maccheroncino alla Carbonara', description: 'Carbonara sauce foam, Amatrice guanciale and black pepper', price: '15€', allergens: '1,3,7,12' },
      { name: 'Pasta', description: 'Three tomatoes sauce / Bolognese ragù', price: '12€', allergens: '1,3,7,9' },
      { name: 'Pasta e Fasoi (warm)', description: 'Traditional Venetian bean and pasta soup', price: '12€', allergens: '1,6,9' },
    ],
  },
  {
    title: 'From the Grill',
    items: [
      { name: 'Octopus', description: 'Chickpea hummus, CBT octopus tentacle, pimiento de padron, black sesame', price: '18€', allergens: '4,11' },
      { name: 'Beef Burger 200g', description: 'Cheddar, bacon, salad, sliced tomato, caramelised onion, BBQ sauce and fries', price: '16€', allergens: '1,6,7,10,12' },
      { name: 'Veggy Burger', description: 'Artisan pumpkin buns, veggy burger, caprese and basil mayo', price: '14€', allergens: '1,3,6,7,10' },
      { name: 'Beef Fillet 250g', description: 'Roasted potatoes and crème fraîche', price: '30€', allergens: '7' },
    ],
  },
  {
    title: 'Salads',
    items: [
      { name: 'Caesar Salad', description: 'Chicken breast, Iceberg, Grana, Croutons, Caesar dressing', price: '12€', allergens: '1,3,7,8,10,12' },
      { name: 'La Proteica', description: 'Mixed greens, feta, curry shrimp, strawberries and sliced almonds', price: '15€', allergens: '2,7,4,8' },
      { name: 'Seasonal Raw & Cooked', description: 'Mixed greens, cucumbers, fennel, radishes, corn and puffed quinoa', price: '13€' },
    ],
  },
  {
    title: 'World Flavours',
    items: [
      { name: 'Avocado Toast', description: 'Multigrain bread, Guacamole, Salmon, Egg, Sesame seeds', price: '12€', allergens: '1,3,4,11' },
      { name: 'Guinea Fowl Milanese', description: 'Coleslaw and french fries', price: '15€', allergens: '1,3' },
      { name: 'Lobster Roll', description: 'Artisan brioche, Lobster, flavoured mayo', price: '16€', allergens: '1,2,3,6,7,10' },
      { name: 'Basmati Rice', description: 'Stir-fried vegetables, Teriyaki chicken', price: '16€', allergens: '6,11' },
      { name: 'Black Rice Poké', description: 'Salmon tartare, mango, edamame, cherry tomatoes, purple cabbage and Ponzu sauce', price: '18€', allergens: '4,6' },
      { name: 'Radicchio from our Garden', description: 'Radicchio in saor, pine nuts and raisins', price: '10€', allergens: '6,8' },
    ],
  },
  {
    title: 'To Share',
    items: [
      { name: 'Patatas Bravas', description: 'Traditional Spanish sauce with homemade mayo and sweet paprika', price: '6€', allergens: '1,3' },
      { name: 'Bao', description: 'Bao, pulled turkey, ponzu sauce, chimichurri mayo', price: '12€', allergens: '1,3,7,6' },
      { name: 'Tacos', description: 'Tacos, beef, sweet sauce, pico de gallo, caramelised onion', price: '13€', allergens: '1,6' },
      { name: 'Jamon Croquettes', description: 'Iberian Jamon and Asiago black crust croquettes', price: '8€', allergens: '1,3,7' },
      { name: 'Patanegra Board', description: 'Patanegra and savoury churros', price: '20/30€', allergens: '1,3,7' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Tiramisù', description: 'Classic recipe', price: '6€', allergens: '1,3,7' },
      { name: 'Salted Chocolate Crumble', description: 'White chocolate mousse and mango coulis', price: '6€', allergens: '1,7,8' },
      { name: 'Cheesecake in a Glass', description: 'Fresh strawberries from Basilicata', price: '8€', allergens: '1,7,8' },
      { name: 'Fresh Fruit Cup', description: 'With artisan vanilla ice cream', price: '8€', allergens: '7' },
    ],
  },
];

export default function EnMenuPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-6">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/en' },
            { name: 'Menu', href: '/en/menu' },
          ]}
        />
      </section>
      <section className="relative min-h-[42vh]">
        <div className="absolute inset-0">
          <Image
            src={PAGE_HERO_IMAGES.menu}
            alt="Tagliatelle with mushrooms at La Montecchia Green"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-cream/95" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-warm-white/85">
                Menu
              </span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-warm-white md:text-5xl lg:text-6xl">
              Seasonal cuisine in Selvazzano Dentro
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="grid gap-8">
            <Reveal>
              <p className="text-base leading-relaxed text-text-mid">
                La Montecchia Green offers contemporary Italian cuisine with local and seasonal ingredients. We use
                our garden products, homemade pasta and handmade desserts. Our sommelier curates the wine selection,
                including Tenuta Emo Capodilista wines.
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
                              <p className="text-xs text-text-mid/60 mt-0.5">Allergens: ({item.allergens})</p>
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
                  Cover charge & information
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  Cover charge: 2€ per person. Vegan options available upon request. Gluten-free pasta available.
                </p>
                <p className="mt-1 text-xs leading-relaxed text-text-mid/85">
                  Allergen guide: (1) Gluten, (2) Crustaceans, (3) Eggs, (4) Fish, (5) Peanuts, (6) Soy, (7) Milk, (8) Tree nuts, (9) Celery, (10) Mustard, (11) Sesame, (12) Sulphites, (13) Lupin, (14) Molluscs.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-2xl border border-green-mid/30 bg-green-mid/10 p-5">
                <div className="text-sm font-semibold text-green-dark uppercase tracking-wider">
                  Book your table
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-mid">
                  The menu may vary based on seasonal ingredient availability. Please inform us of any allergies or dietary requirements when booking.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="bg-green-dark text-warm-white hover:bg-green-mid">
                    <Link href="/en/prenota">Book a table</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/en/contatti">Ask for information</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="hidden lg:block">
            <Reveal>
              <InfoBox title="At a glance">
                <div className="space-y-2">
                  <div>
                    Cuisine: <span className="font-semibold">contemporary Italian</span>
                  </div>
                  <div>
                    Ingredients: <span className="font-semibold">local and seasonal</span>
                  </div>
                  <div>
                    Signature: <span className="font-semibold">homemade pasta</span>
                  </div>
                  <div className="text-xs text-text-mid/80">Curated wines with sommelier, including Emo Capodilista.</div>
                </div>
              </InfoBox>
            </Reveal>
          </aside>
        </div>
      </section>

      <SchemaOrg variant="breadcrumb" breadcrumbItems={[
        { name: 'Home', url: `${CONTACT.site}/en` },
        { name: 'Menu', url: `${CONTACT.site}/en/menu` },
      ]} />
      <SchemaOrg
        variant="menu"
        lang="en"
        menuSections={menuSections.map((s) => ({
          name: s.title,
          items: s.items.map((it) => ({
            name: it.name,
            description: it.description,
            price: parseFloat(it.price.replace(',', '.').replace(/[^\d.]/g, '')) || undefined,
          })),
        }))}
      />
    </div>
  );
}

