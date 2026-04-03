import React from 'react';

type SchemaVariant = 'restaurant' | 'eventVenue' | 'faq' | 'aperitivo' | 'breadcrumb' | 'blogPosting';

interface SchemaOrgProps {
  variant: SchemaVariant;
  breadcrumbItems?: { name: string; url: string }[];
  blogPost?: {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
    image?: string;
  };
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
  url: 'https://www.lamontecchiagreen.it',
  telephone: '+390498058464',
  email: 'lamontecchiagreen@gmail.com',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '50',
    bestRating: '5',
  },
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
    'https://www.instagram.com/lamontecchiagreen/',
    'https://www.facebook.com/p/La-Montecchia-Green-100064785711603/',
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

export default function SchemaOrg({ variant, breadcrumbItems, blogPost }: SchemaOrgProps) {
  const json = (() => {
    switch (variant) {
      case 'restaurant':
        return restaurantSchema;
      case 'eventVenue':
        return eventVenueSchema;
      case 'aperitivo':
        return aperitivoSchema;
      case 'faq':
        return faqSchema;
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
      case 'blogPosting':
        if (!blogPost) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
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
              url: 'https://www.lamontecchiagreen.it/images/logo-montecchia-green.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': blogPost.url,
          },
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

