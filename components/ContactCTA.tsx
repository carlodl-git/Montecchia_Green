import Link from 'next/link';
import { Phone, MessageCircle, Mail } from 'lucide-react';

import { CONTACT, whatsappUrl, mailtoUrl, telUrl } from '@/lib/contact';

type Variant = 'light' | 'dark';
type Intent = 'booking' | 'events' | 'generic';

interface ContactCTAProps {
  locale?: 'it' | 'en';
  intent?: Intent;
  variant?: Variant;
  /** Quando true mostra solo i pulsanti (no titolo). Utile in-hero. */
  compact?: boolean;
  className?: string;
}

const TEXTS = {
  it: {
    whatsapp: 'WhatsApp',
    call: 'Chiama',
    email: 'Email',
  },
  en: {
    whatsapp: 'WhatsApp',
    call: 'Call',
    email: 'Email',
  },
} as const;

/**
 * CTA trio coerente in tutto il sito: WhatsApp + telefono + email.
 * Tutti i dati arrivano da lib/contact.ts — nessun hardcoding.
 * I link hanno data-cta per tracking GA/GTM.
 */
export default function ContactCTA({
  locale = 'it',
  intent = 'generic',
  variant = 'dark',
  compact = false,
  className = '',
}: ContactCTAProps) {
  const t = TEXTS[locale];
  const emailIntent = intent === 'events' ? 'events' : 'booking';
  const wrapperBase = compact
    ? 'flex flex-col gap-3 sm:flex-row'
    : 'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center';

  const lightBtn =
    'flex items-center justify-center gap-2 rounded-xl border border-green-dark/15 bg-warm-white px-6 py-3.5 text-sm font-semibold text-green-dark shadow-sm transition-colors hover:border-green-dark/30 hover:bg-cream';
  const darkBtn =
    'flex items-center justify-center gap-2 rounded-xl border border-warm-white/25 bg-warm-white/10 px-6 py-3.5 text-sm font-semibold text-warm-white backdrop-blur-sm transition-colors hover:bg-warm-white/20';
  const btnClass = variant === 'dark' ? darkBtn : lightBtn;

  return (
    <div className={`${wrapperBase} ${className}`}>
      <Link
        href={whatsappUrl(intent, locale)}
        target="_blank"
        rel="noreferrer"
        data-cta="whatsapp"
        data-intent={intent}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" />
        {t.whatsapp}
      </Link>
      <a
        href={telUrl('mobile')}
        data-cta="phone"
        data-intent={intent}
        className={btnClass}
      >
        <Phone className="h-4 w-4" />
        {t.call}&nbsp;{CONTACT.phones.mobile.display}
      </a>
      <a
        href={mailtoUrl(emailIntent, locale)}
        data-cta="email"
        data-intent={intent}
        className={btnClass}
      >
        <Mail className="h-4 w-4" />
        {t.email}
      </a>
    </div>
  );
}
