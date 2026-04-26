// Single source of truth per tutti i contatti del sito.
// Non hardcodare numeri, email o URL WhatsApp altrove: importa da qui.

export const CONTACT = {
  // Indirizzo fisico
  address: {
    street: 'Via Montecchia 12',
    postalCode: '35030',
    city: 'Selvazzano Dentro',
    region: 'PD',
    country: 'IT',
    full: 'Via Montecchia 12, 35030 Selvazzano Dentro (PD)',
  },

  // Telefoni
  phones: {
    // Fisso ristorante — usato per prenotazioni tavoli telefoniche
    landline: {
      display: '+39 049 805 8464',
      tel: '+390498058464',
    },
    // Mobile / WhatsApp — usato per risposta rapida su prenotazioni ed eventi
    mobile: {
      display: '+39 334 677 4483',
      tel: '+393346774483',
      // formato internazionale senza +, richiesto da wa.me
      whatsapp: '393346774483',
    },
  },

  // Email
  emails: {
    // Email ristorante / prenotazioni tavoli
    booking: 'eventimontecchia@golfmontecchia.it',
    // Email eventi privati e aziendali
    events: 'eventimontecchia@golfmontecchia.it',
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/lamontecchiagreen/',
    facebook: 'https://www.facebook.com/p/La-Montecchia-Green-100064785711603/',
    tripadvisor:
      'https://www.tripadvisor.it/Restaurant_Review-g1967181-d27689734-Reviews-La_Montecchia_Green-Selvazzano_Dentro_Province_of_Padua_Veneto.html',
  },

  // URL canonico del sito (no trailing slash)
  site: 'https://www.lamontecchiagreen.it',
} as const;

// ── Helper WhatsApp ──────────────────────────────────────────────

type Locale = 'it' | 'en';
type WaIntent = 'booking' | 'events' | 'generic' | 'info';

/** Costruisce un URL wa.me con messaggio precompilato locale-aware. */
export function whatsappUrl(intent: WaIntent = 'generic', locale: Locale = 'it') {
  const messages: Record<Locale, Record<WaIntent, string>> = {
    it: {
      booking: 'Ciao La Montecchia Green, vorrei prenotare un tavolo.',
      events: 'Ciao La Montecchia Green, vorrei parlare di un evento.',
      info: 'Ciao La Montecchia Green, vorrei avere informazioni.',
      generic: 'Ciao La Montecchia Green, vorrei prenotare o chiedere info.',
    },
    en: {
      booking: 'Hello La Montecchia Green, I would like to book a table.',
      events: 'Hello La Montecchia Green, I would like to talk about an event.',
      info: 'Hello La Montecchia Green, I would like some information.',
      generic: 'Hello La Montecchia Green, I would like to book or ask for info.',
    },
  };
  const text = encodeURIComponent(messages[locale][intent]);
  return `https://wa.me/${CONTACT.phones.mobile.whatsapp}?text=${text}`;
}

/** mailto: con subject precompilato. */
export function mailtoUrl(
  intent: 'booking' | 'events' = 'booking',
  locale: Locale = 'it',
) {
  const email =
    intent === 'events' ? CONTACT.emails.events : CONTACT.emails.booking;
  const subjects = {
    it: {
      booking: 'Richiesta prenotazione tavolo',
      events: 'Richiesta informazioni evento',
    },
    en: {
      booking: 'Table reservation request',
      events: 'Event enquiry',
    },
  } as const;
  return `mailto:${email}?subject=${encodeURIComponent(subjects[locale][intent])}`;
}

/** tel: link */
export function telUrl(kind: 'landline' | 'mobile' = 'mobile') {
  return `tel:${CONTACT.phones[kind].tel}`;
}
