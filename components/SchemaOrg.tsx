import React from 'react';

type SchemaVariant = 'restaurant' | 'eventVenue' | 'faq' | 'aperitivo' | 'breadcrumb';

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
        text: 'La Montecchia Green può ospitare da 100 a 300 persone nella Sala Petrarca. Sono disponibili anche la Sala Foscolo, la Sala Ruzante, la terrazza panoramica sul green e spazi all\'aperto con piscina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Il ristorante La Montecchia Green è aperto solo ai soci del golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, La Montecchia Green è aperto a tutti: golfisti, famiglie, turisti, aziende e privati. Non è necessario essere soci del Golf della Montecchia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Organizzate matrimoni e ricevimenti vicino a Padova?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green è una delle location preferite per matrimoni nella provincia di Padova. Lo staff organizza eventi su misura con menu personalizzato, servizio sommelier e allestimenti. Spazi fino a 300 persone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Organizzate eventi aziendali vicino a Padova?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, La Montecchia Green offre pranzi e cene aziendali, team building sul green, convention e cene di fine anno per aziende della provincia di Padova e del Nord-Est. Ampio parcheggio gratuito e spazi modulabili.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dove si può fare aperitivo vicino a Padova in un posto suggestivo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Montecchia Green offre aperitivo sulla terrazza panoramica del Golf della Montecchia, con vista sui Colli Euganei. Cocktail, vini locali, taglieri e stuzzichini in un\'atmosfera immersa nel verde, a 10 minuti da Padova.',
      },
    },
    {
      '@type': 'Question',
      name: 'Come si prenota un evento privato a La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contattare via WhatsApp al +39 334 677 4483 (risposta rapida), email a eventimontecchia@golfmontecchia.it, oppure chiamare il +39 334 677 4483.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dove si trova La Montecchia Green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Montecchia Green si trova in Via Montecchia 12, Selvazzano Dentro (PD), all\'interno della Club House del Golf della Montecchia, ai piedi dei Colli Euganei. È a circa 10 minuti da Padova centro e 5 minuti da Abano Terme.',
      },
    },
  ],
};

export default function SchemaOrg({ variant }: { variant: SchemaVariant }) {
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
        return null;
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

