import React from 'react';

import { CONTACT } from '@/lib/contact';

type SchemaVariant = 'restaurant' | 'eventVenue' | 'faq' | 'aperitivo' | 'breadcrumb' | 'blogPosting' | 'customFaq' | 'itemList' | 'webSite' | 'menu';

interface FaqItem {
  question: string;
  answer: string;
}

interface MenuItemData {
  name: string;
  description?: string;
  price?: number | string;
}

interface MenuSectionData {
  name: string;
  items: MenuItemData[];
}

interface SchemaOrgProps {
  variant: SchemaVariant;
  lang?: 'it' | 'en';
  breadcrumbItems?: { name: string; url: string }[];
  blogPost?: {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
    image?: string;
  };
  faqItems?: FaqItem[];
  listItems?: { name: string; url: string }[];
  menuSections?: MenuSectionData[];
}

const sharedAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Via Montecchia 12',
  addressLocality: 'Selvazzano Dentro',
  addressRegion: 'PD',
  postalCode: '35030',
  addressCountry: 'IT',
};

const sharedGeo = { '@type': 'GeoCoordinates', latitude: '45.3667', longitude: '11.7833' };

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'FoodEstablishment', 'EventVenue', 'BarOrPub'],
  name: 'La Montecchia Green',
  alternateName: ['La Montecchia Green – Bistrot & Eventi', 'Montecchia Green', 'Green Bistrot Golf Montecchia'],
  description:
    'Bistrot, ristorante e location per eventi privati e aziendali al Golf della Montecchia, in un ex tabacchificio restaurato ai piedi dei Colli Euganei. Cucina italiana con ingredienti locali e stagionali, aperitivo sul green, matrimoni, team building e cene aziendali. A 10 minuti da Padova, aperto a tutti.',
  url: CONTACT.site,
  telephone: CONTACT.phones.landline.tel,
  email: CONTACT.emails.booking,
  hasMenu: `${CONTACT.site}/menu`,
  address: sharedAddress,
  geo: sharedGeo,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '15:00',
      description: 'Pranzo tutti i giorni',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '19:30',
      closes: '23:00',
      description: 'Cena venerdì e sabato su prenotazione',
    },
  ],
  servesCuisine: ['Italiana', 'Stagionale', 'Locale', 'Veneta', 'Italiana Contemporanea'],
  priceRange: '€€',
  hasMap: 'https://maps.google.com/?q=Via+Montecchia+12+Selvazzano+Dentro',
  // aggregateRating rimosso volontariamente: i dati on-page (testimonial)
  // non sono verificabili e servirebbero review reali con autore+data.
  // Lasciare un rating non referenziato nella pagina è policy violation Google.
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Parcheggio gratuito', value: true },
    { '@type': 'LocationFeatureSpecification', name: "Terrazza panoramica all'aperto", value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Accessibile in sedia a rotelle', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sala per eventi privati', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sala per eventi aziendali', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Location per matrimoni', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Aperitivo sul green', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vista panoramica sui Colli Euganei', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Piscina outdoor', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Servizio sommelier', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Menu personalizzato per eventi', value: true },
  ],
  sameAs: [
    'https://www.golfmontecchia.it/en/golf-club/restaurant-la-montecchia',
    'https://www.facebook.com/p/La-Montecchia-Green-100064785711603/',
    'https://www.instagram.com/lamontecchiagreen/',
    'https://restaurantguru.it/La-Montecchia-Selvazzano-Dentro',
    'https://www.tripadvisor.com/Restaurant_Review-g1967181-d27689734-Reviews-La_Montecchia_Green-Selvazzano_Dentro_Province_of_Padua_Veneto.html',
    'https://www.matrimonio.com/ristoranti-ricevimenti/la-montecchia--e37909',
  ],
  containedInPlace: {
    '@type': 'SportsClub',
    name: 'Golf della Montecchia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Montecchia 12',
      addressLocality: 'Selvazzano Dentro',
    },
  },
  knowsAbout: [
    'matrimoni Padova',
    'eventi aziendali Padova',
    'aperitivo Padova',
    'location suggestiva Padova',
    'team building Padova',
    'cena aziendale Padova',
    'ristorante Colli Euganei',
    'location eventi Selvazzano Dentro',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi La Montecchia Green',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Pranzo al ristorante',
        description: 'Pranzo tutti i giorni con cucina italiana stagionale, pasta fatta in casa, vini della Tenuta Emo Capodilista',
      },
      {
        '@type': 'Offer',
        name: 'Cena venerdì e sabato',
        description: 'Cena elegante venerdì e sabato su prenotazione con menu degustazione e selezione vini',
      },
      {
        '@type': 'Offer',
        name: 'Aperitivo sul green',
        description: 'Aperitivo sulla terrazza panoramica con vista sul campo da golf e sui Colli Euganei. Cocktail, vini locali, taglieri e stuzzichini.',
      },
      {
        '@type': 'Offer',
        name: 'Location per matrimoni',
        description: 'Organizzazione matrimoni con spazi fino a 300 persone, menu personalizzato, sommelier, terrazza e spazi outdoor',
      },
      {
        '@type': 'Offer',
        name: 'Location per eventi aziendali',
        description: 'Pranzi aziendali, team building sul green, convention, cene di fine anno per aziende vicino a Padova',
      },
    ],
  },
};

const eventVenueSchema = {
  '@context': 'https://schema.org',
  '@type': ['EventVenue', 'WeddingVenue'],
  name: 'La Montecchia Green — Location per eventi matrimoni e aziendali',
  description:
    'Location esclusiva per matrimoni, feste private e eventi aziendali al Golf della Montecchia, ai piedi dei Colli Euganei. Ex tabacchificio restaurato con spazi modulabili fino a 300 persone, terrazza panoramica sul green, catering personalizzato con chef, sommelier e staff dedicato. A 10 minuti da Padova.',
  maximumAttendeeCapacity: 300,
  address: sharedAddress,
  geo: sharedGeo,
  telephone: '+393346774483',
  email: 'eventimontecchia@golfmontecchia.it',
  url: 'https://www.lamontecchiagreen.it/eventi',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Sala Petrarca (100–300 persone)', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sala Foscolo', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sala Ruzante', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Terrazza panoramica sul green', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Piscina outdoor', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parcheggio gratuito', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Catering personalizzato', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Servizio sommelier', value: true },
  ],
};

const aperitivoSchema = {
  '@context': 'https://schema.org',
  '@type': ['BarOrPub', 'FoodEstablishment'],
  name: 'La Montecchia Green — Aperitivo sul green a Padova',
  description:
    'Aperitivo e snack bar sulla terrazza panoramica del Golf della Montecchia, con vista sui Colli Euganei. Cocktail, vini della Tenuta Emo Capodilista, taglieri e stuzzichini. Un aperitivo diverso dal solito a 10 minuti da Padova.',
  address: sharedAddress,
  geo: sharedGeo,
  url: 'https://www.lamontecchiagreen.it/ristorante',
  telephone: '+390498058464',
  servesCuisine: ['Italiana', 'Aperitivo', 'Snack'],
  hasMenu: 'https://www.lamontecchiagreen.it/menu',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Terrazza panoramica sul green', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vista sui Colli Euganei', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parcheggio gratuito', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vini locali Tenuta Emo Capodilista', value: true },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quante persone può ospitare La Montecchia Green per un evento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Montecchia Green può ospitare da 100 a 300 persone nella Sala Petrarca. Sono disponibili anche la Sala Foscolo (30-80 persone), la Sala Ruzante (20-40 persone), la terrazza panoramica sul green e spazi all\'aperto con piscina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Il ristorante La Montecchia Green è aperto solo ai soci del golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, La Montecchia Green è aperto a tutti: golfisti, famiglie, turisti, aziende e privati. Non è necessario essere soci del Golf della Montecchia per pranzare, cenare o organizzare un evento.',
      },
    },
    {
      '@type': 'Question',
      name: 'Organizzate matrimoni e ricevimenti vicino a Padova?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green è una delle location preferite per matrimoni nella provincia di Padova. Lo staff organizza eventi su misura con menu personalizzato dallo chef Enrico Ruggin, servizio sommelier con vini della Tenuta Emo Capodilista e allestimenti curati. Spazi fino a 300 persone, terrazza panoramica e spazi outdoor con piscina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Organizzate eventi aziendali vicino a Padova?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green offre pranzi e cene aziendali, team building sul green, convention, meeting e cene di fine anno per aziende della provincia di Padova e del Nord-Est. Ampio parcheggio gratuito, spazi modulabili fino a 300 persone e staff dedicato.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dove si può fare aperitivo vicino a Padova in un posto suggestivo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Montecchia Green offre aperitivo sulla terrazza panoramica del Golf della Montecchia, con vista sui Colli Euganei. Cocktail, vini locali della Tenuta Emo Capodilista, taglieri e stuzzichini in un\'atmosfera immersa nel verde, a soli 10 minuti da Padova centro. Parcheggio gratuito.',
      },
    },
    {
      '@type': 'Question',
      name: 'Come si prenota un evento privato a La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contattare via WhatsApp al +39 334 677 4483 (risposta rapida), email a eventimontecchia@golfmontecchia.it, oppure chiamare il +39 334 677 4483. Lo staff risponde entro 24-48 ore lavorative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dove si trova La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Montecchia Green si trova in Via Montecchia 12, Selvazzano Dentro (PD), all\'interno della Club House del Golf della Montecchia, ai piedi dei Colli Euganei. È a circa 10 minuti da Padova centro, 5 minuti da Abano Terme e 30 minuti da Venezia.',
      },
    },
    {
      '@type': 'Question',
      name: 'C\'è il parcheggio a La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green dispone di un ampio parcheggio gratuito all\'interno del Golf della Montecchia, comodo per tutti gli ospiti e i partecipanti a eventi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual è il prezzo medio al ristorante La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il prezzo medio è nella fascia €€: qualità alta con ingredienti locali e stagionali, pasta fatta in casa e vini selezionati, in un contesto esclusivo ma con prezzi accessibili. Pranzo completo indicativamente tra 25-40€ a persona.',
      },
    },
    {
      '@type': 'Question',
      name: 'Che tipo di cucina offre La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Montecchia Green propone cucina italiana contemporanea a cura dello chef Enrico Ruggin. I piatti sono preparati con ingredienti locali e stagionali, incluse verdure dell\'orto proprio, pasta fatta in casa e dessert artigianali. I vini sono selezionati da un sommelier, con etichette della Tenuta Emo Capodilista.',
      },
    },
    {
      '@type': 'Question',
      name: 'La Montecchia Green è accessibile per persone con disabilità?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green è accessibile in sedia a rotelle. La struttura si trova al piano terra della Club House del Golf della Montecchia ed è dotata di accessi facilitati.',
      },
    },
    {
      '@type': 'Question',
      name: 'Come prenotare un tavolo al ristorante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il modo più rapido è via WhatsApp al +39 334 677 4483. In alternativa si può telefonare al +39 049 805 8464, inviare una email a lamontecchiagreen@gmail.com o compilare il form di prenotazione sul sito lamontecchiagreen.it/prenota.',
      },
    },
    {
      '@type': 'Question',
      name: 'Si possono organizzare feste di compleanno e ricorrenze a La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green è perfetta per compleanni, anniversari, cresime, battesimi e qualsiasi ricorrenza privata. Le sale sono modulabili da 20 a 300 persone, con menu personalizzato e staff dedicato.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quali sale sono disponibili per eventi a La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le sale disponibili sono: Sala Petrarca (100-300 persone, ideale per matrimoni e grandi eventi), Sala Foscolo (30-80 persone, cene private e eventi medi), Sala Ruzante (20-40 persone, meeting e cerimonie civili), terrazza panoramica (aperitivi e cocktail party) e spazi outdoor con piscina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cos\'è il team building sul green a La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Il team building sul green è un\'attività aziendale che combina il contesto naturale del Golf della Montecchia con esperienze di gruppo all\'aria aperta. Si svolge immersi nel verde dei Colli Euganei, seguito da pranzo o aperitivo con menu personalizzato. Ideale per aziende che cercano un\'alternativa ai classici centri congressi.',
      },
    },
    {
      '@type': 'Question',
      name: 'La Montecchia Green è vicina ad Abano Terme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green dista solo 5 minuti in auto da Abano Terme e circa 10 minuti da Montegrotto Terme. È una scelta ideale per chi soggiorna alle terme e cerca un ristorante suggestivo o una location per eventi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quali vini serve La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Montecchia Green propone una selezione curata dal sommelier, con particolare attenzione ai vini della Tenuta Emo Capodilista, una delle cantine più prestigiose dei Colli Euganei DOC. Sono disponibili anche etichette nazionali e internazionali.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quali sono gli orari di apertura de La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pranzo tutti i giorni dalle 12:00 alle 15:00. Cena venerdì e sabato sera su prenotazione dalle 19:30 alle 23:00. Lo snack bar e l\'aperitivo sono disponibili durante il giorno sulla terrazza e sul green.',
      },
    },
  ],
};

// ── EN translations ──────────────────────────────────────────────

const restaurantSchemaEn = {
  ...restaurantSchema,
  description:
    'Bistrot, restaurant and event venue at Golf della Montecchia, in a restored tobacco factory at the foot of the Euganean Hills. Italian cuisine with local seasonal ingredients, aperitivo on the green, weddings, team building and corporate dinners. 10 minutes from Padua, open to everyone.',
  openingHoursSpecification: [
    { ...restaurantSchema.openingHoursSpecification[0], description: 'Lunch every day' },
    { ...restaurantSchema.openingHoursSpecification[1], description: 'Dinner Friday and Saturday by reservation' },
  ],
  servesCuisine: ['Italian', 'Seasonal', 'Local', 'Venetian', 'Contemporary Italian'],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Panoramic outdoor terrace', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair accessible', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private event room', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Corporate event room', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wedding venue', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Aperitivo on the green', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Panoramic view of the Euganean Hills', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Outdoor swimming pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sommelier service', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Custom event menus', value: true },
  ],
  knowsAbout: [
    'weddings Padua', 'corporate events Padua', 'aperitivo Padua', 'scenic venue Padua',
    'team building Padua', 'corporate dinner Padua', 'restaurant Euganean Hills', 'event venue Selvazzano Dentro',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'La Montecchia Green Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Restaurant lunch', description: 'Daily lunch with seasonal Italian cuisine, homemade pasta, wines from Tenuta Emo Capodilista' },
      { '@type': 'Offer', name: 'Friday & Saturday dinner', description: 'Elegant dinner Friday and Saturday by reservation with tasting menu and wine selection' },
      { '@type': 'Offer', name: 'Aperitivo on the green', description: 'Aperitivo on the panoramic terrace overlooking the golf course and Euganean Hills. Cocktails, local wines, charcuterie boards.' },
      { '@type': 'Offer', name: 'Wedding venue', description: 'Wedding planning with spaces up to 300 guests, custom menu, sommelier, terrace and outdoor areas' },
      { '@type': 'Offer', name: 'Corporate event venue', description: 'Corporate lunches, team building on the green, conventions, year-end dinners for companies near Padua' },
    ],
  },
};

const eventVenueSchemaEn = {
  ...eventVenueSchema,
  name: 'La Montecchia Green — Venue for weddings and corporate events',
  description:
    'Exclusive venue for weddings, private celebrations and corporate events at Golf della Montecchia, at the foot of the Euganean Hills. Restored tobacco factory with modular spaces up to 300 guests, panoramic terrace on the green, customized catering with chef, sommelier and dedicated staff. 10 minutes from Padua.',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Sala Petrarca (100–300 guests)', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sala Foscolo', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sala Ruzante', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Panoramic terrace on the green', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Outdoor swimming pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Customized catering', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Sommelier service', value: true },
  ],
};

const aperitivoSchemaEn = {
  ...aperitivoSchema,
  name: 'La Montecchia Green — Aperitivo on the green near Padua',
  description:
    'Aperitivo and snack bar on the panoramic terrace of Golf della Montecchia, overlooking the Euganean Hills. Cocktails, wines from Tenuta Emo Capodilista, charcuterie boards and snacks. A unique aperitivo experience 10 minutes from Padua.',
  servesCuisine: ['Italian', 'Aperitivo', 'Snack'],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Panoramic terrace on the green', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'View of the Euganean Hills', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Local wines from Tenuta Emo Capodilista', value: true },
  ],
};

const faqSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSchema.mainEntity.map((q) => {
    const translations: Record<string, { name: string; text: string }> = {
      'Quante persone può ospitare La Montecchia Green per un evento?': { name: 'How many guests can La Montecchia Green host for an event?', text: 'La Montecchia Green can host 100 to 300 guests in Sala Petrarca. Sala Foscolo (30-80 guests), Sala Ruzante (20-40 guests), the panoramic terrace on the green and outdoor areas with pool are also available.' },
      'Il ristorante La Montecchia Green è aperto solo ai soci del golf?': { name: 'Is La Montecchia Green restaurant open only to golf club members?', text: 'No, La Montecchia Green is open to everyone: golfers, families, tourists, companies and individuals. You do not need to be a member of Golf della Montecchia to dine or host an event.' },
      'Organizzate matrimoni e ricevimenti vicino a Padova?': { name: 'Do you organize weddings and receptions near Padua?', text: 'Yes, La Montecchia Green is one of the most popular wedding venues in the province of Padua. Our staff organizes bespoke events with a custom menu by chef Enrico Ruggin, sommelier service with Tenuta Emo Capodilista wines, and curated decorations. Spaces up to 300 guests, panoramic terrace and outdoor areas with pool.' },
      'Organizzate eventi aziendali vicino a Padova?': { name: 'Do you host corporate events near Padua?', text: 'Yes, La Montecchia Green offers corporate lunches and dinners, team building on the green, conventions, meetings and year-end dinners for companies in the Padua province and the entire North-East. Ample free parking, modular spaces up to 300 people and dedicated staff.' },
      'Dove si può fare aperitivo vicino a Padova in un posto suggestivo?': { name: 'Where can you have a scenic aperitivo near Padua?', text: 'La Montecchia Green offers aperitivo on the panoramic terrace of Golf della Montecchia, overlooking the Euganean Hills. Cocktails, local wines from Tenuta Emo Capodilista, charcuterie boards and snacks in a green setting, just 10 minutes from Padua centre. Free parking.' },
      'Come si prenota un evento privato a La Montecchia Green?': { name: 'How do you book a private event at La Montecchia Green?', text: 'Contact us via WhatsApp at +39 334 677 4483 (fast response), email eventimontecchia@golfmontecchia.it, or call +39 334 677 4483. Staff responds within 24-48 business hours.' },
      'Dove si trova La Montecchia Green?': { name: 'Where is La Montecchia Green located?', text: 'La Montecchia Green is at Via Montecchia 12, Selvazzano Dentro (PD), inside the Club House of Golf della Montecchia, at the foot of the Euganean Hills. About 10 minutes from Padua centre, 5 minutes from Abano Terme and 30 minutes from Venice.' },
      "C'è il parcheggio a La Montecchia Green?": { name: 'Is there parking at La Montecchia Green?', text: 'Yes, La Montecchia Green has ample free parking inside Golf della Montecchia, convenient for all guests and event attendees.' },
      'Qual è il prezzo medio al ristorante La Montecchia Green?': { name: 'What is the average price at La Montecchia Green restaurant?', text: 'The average price is in the €€ range: high quality with local seasonal ingredients, homemade pasta and selected wines, in an exclusive setting at accessible prices. A full lunch is approximately €25-40 per person.' },
      'Che tipo di cucina offre La Montecchia Green?': { name: 'What type of cuisine does La Montecchia Green offer?', text: 'La Montecchia Green serves contemporary Italian cuisine by chef Enrico Ruggin. Dishes are prepared with local seasonal ingredients, including vegetables from their own garden, homemade pasta and artisan desserts. Wines are curated by a sommelier, featuring labels from Tenuta Emo Capodilista.' },
      'La Montecchia Green è accessibile per persone con disabilità?': { name: 'Is La Montecchia Green accessible for people with disabilities?', text: 'Yes, La Montecchia Green is wheelchair accessible. The venue is on the ground floor of the Club House of Golf della Montecchia with facilitated access.' },
      'Come prenotare un tavolo al ristorante?': { name: 'How do you book a table at the restaurant?', text: 'The fastest way is via WhatsApp at +39 334 677 4483. Alternatively, call +39 049 805 8464, email lamontecchiagreen@gmail.com or fill in the booking form at lamontecchiagreen.it/en/prenota.' },
      'Si possono organizzare feste di compleanno e ricorrenze a La Montecchia Green?': { name: 'Can you organize birthday parties and celebrations at La Montecchia Green?', text: 'Yes, La Montecchia Green is perfect for birthdays, anniversaries, christenings and any private celebration. Rooms are modular from 20 to 300 guests, with a custom menu and dedicated staff.' },
      'Quali sale sono disponibili per eventi a La Montecchia Green?': { name: 'Which rooms are available for events at La Montecchia Green?', text: 'Available rooms: Sala Petrarca (100-300 guests, ideal for weddings and large events), Sala Foscolo (30-80 guests, private dinners and medium events), Sala Ruzante (20-40 guests, meetings and civil ceremonies), panoramic terrace (aperitivos and cocktail parties) and outdoor areas with pool.' },
      "Cos'è il team building sul green a La Montecchia Green?": { name: 'What is team building on the green at La Montecchia Green?', text: 'Team building on the green is a corporate activity that combines the natural setting of Golf della Montecchia with outdoor group experiences. It takes place surrounded by the greenery of the Euganean Hills, followed by lunch or aperitivo with a custom menu. Ideal for companies seeking an alternative to conventional conference centres.' },
      'La Montecchia Green è vicina ad Abano Terme?': { name: 'Is La Montecchia Green close to Abano Terme?', text: 'Yes, La Montecchia Green is just 5 minutes by car from Abano Terme and about 10 minutes from Montegrotto Terme. It is an ideal choice for spa guests looking for a scenic restaurant or event venue.' },
      'Quali vini serve La Montecchia Green?': { name: 'What wines does La Montecchia Green serve?', text: 'La Montecchia Green offers a curated selection by the sommelier, with special focus on wines from Tenuta Emo Capodilista, one of the most prestigious wineries of the Colli Euganei DOC. National and international labels are also available.' },
      'Quali sono gli orari di apertura de La Montecchia Green?': { name: 'What are the opening hours of La Montecchia Green?', text: 'Lunch every day from 12:00 to 15:00. Dinner Friday and Saturday evening by reservation from 19:30 to 23:00. The snack bar and aperitivo are available during the day on the terrace and green.' },
    };
    const t = translations[q.name];
    if (t) return { '@type': 'Question', name: t.name, acceptedAnswer: { '@type': 'Answer', text: t.text } };
    return q;
  }),
};

export default function SchemaOrg({ variant, lang = 'it', breadcrumbItems, blogPost, faqItems, listItems, menuSections }: SchemaOrgProps) {
  const json = (() => {
    switch (variant) {
      case 'restaurant':
        return lang === 'en' ? restaurantSchemaEn : restaurantSchema;
      case 'eventVenue':
        return lang === 'en' ? eventVenueSchemaEn : eventVenueSchema;
      case 'aperitivo':
        return lang === 'en' ? aperitivoSchemaEn : aperitivoSchema;
      case 'faq':
        return lang === 'en' ? faqSchemaEn : faqSchema;
      case 'breadcrumb':
        if (!breadcrumbItems || breadcrumbItems.length === 0) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: item.url,
          })),
        };
      case 'customFaq':
        if (!faqItems || faqItems.length === 0) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        };
      case 'itemList':
        if (!listItems || listItems.length === 0) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: lang === 'en' ? 'Blog — La Montecchia Green' : 'Blog — La Montecchia Green',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: listItems.map((item, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: item.name,
              url: item.url,
            })),
          },
        };
      case 'blogPosting':
        if (!blogPost) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: blogPost.title,
          description: blogPost.description,
          url: blogPost.url,
          datePublished: blogPost.datePublished,
          dateModified: blogPost.dateModified,
          image: blogPost.image || 'https://www.lamontecchiagreen.it/og-image.jpg',
          author: {
            '@type': 'Organization',
            name: 'La Montecchia Green',
            url: 'https://www.lamontecchiagreen.it',
          },
          publisher: {
            '@type': 'Organization',
            name: 'La Montecchia Green',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.lamontecchiagreen.it/logo.png',
            },
          },
          mainEntityOfPage: blogPost.url,
        };
      case 'webSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'La Montecchia Green',
          alternateName: 'La Montecchia Green – Bistrot & Eventi',
          url: CONTACT.site,
          inLanguage: ['it', 'en'],
          publisher: {
            '@type': 'Organization',
            name: 'La Montecchia Green',
            url: CONTACT.site,
          },
          // potentialAction/SearchAction rimosso: il sito non ha search.
        };
      case 'menu':
        if (!menuSections || menuSections.length === 0) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'Menu',
          name: 'La Montecchia Green — Menu',
          url: `${CONTACT.site}${lang === 'en' ? '/en/menu' : '/menu'}`,
          inLanguage: lang === 'en' ? 'en' : 'it',
          hasMenuSection: menuSections.map((section) => ({
            '@type': 'MenuSection',
            name: section.name,
            hasMenuItem: section.items.map((it) => ({
              '@type': 'MenuItem',
              name: it.name,
              ...(it.description ? { description: it.description } : {}),
              ...(it.price
                ? {
                    offers: {
                      '@type': 'Offer',
                      price: String(it.price),
                      priceCurrency: 'EUR',
                    },
                  }
                : {}),
            })),
          })),
        };
    }
  })();

  if (!json) return null;

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

