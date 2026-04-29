'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import InfoBox from '@/components/InfoBox';

const eventSchema = z.object({
  nome: z.string().trim().min(2, 'Inserisci il tuo nome').max(120),
  email: z
    .union([z.string().trim().email(), z.literal('')]),
  telefono: z.string().trim().min(7, 'Inserisci un numero di telefono').max(20),
  tipo: z.enum(['Matrimonio', 'Evento aziendale', 'Compleanno', 'Altro']),
  persone: z.coerce.number().int().min(1).max(600),
  data: z.string().optional(),
  messaggio: z.string().optional(),
  privacy: z.boolean().refine((v) => v === true, {
    message: 'Devi accettare l’informativa privacy per inviare la richiesta.',
  }),
});

export default function EventForm() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const [status, setStatus] = React.useState<{ ok: boolean; message: string } | null>(null);

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefono: '',
      tipo: 'Matrimonio' as const,
      persone: 120,
      data: '',
      messaggio: '',
      privacy: false,
    },
    mode: 'onSubmit',
  });

  async function onSubmit(values: any) {
    setStatus(null);
    try {
      const payload = {
        ...values,
        email: values.email === '' ? undefined : values.email,
      };

      const res = await fetch('/api/evento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!res.ok) {
        setStatus({
          ok: false,
          message: data?.message || (isEn
            ? 'An error occurred while sending the request.'
            : 'Si è verificato un errore durante l’invio della richiesta.'),
        });
        return;
      }

      setStatus({
        ok: true,
        message:
          data?.message ||
          (isEn
            ? 'Request received. We will reply with a tailored proposal.'
            : 'Richiesta inviata. Ti contatteremo a breve con una proposta personalizzata.'),
      });
      form.reset();
    } catch {
      setStatus({
        ok: false,
        message: isEn
          ? 'Unable to send the request. Please try again later.'
          : 'Impossibile inviare la richiesta. Riprova più tardi.',
      });
    }
  }

  const eventTypes = isEn
    ? [
        { value: 'Matrimonio', label: 'Wedding' },
        { value: 'Evento aziendale', label: 'Corporate event' },
        { value: 'Compleanno', label: 'Birthday' },
        { value: 'Altro', label: 'Other' },
      ]
    : [
        { value: 'Matrimonio', label: 'Matrimonio' },
        { value: 'Evento aziendale', label: 'Evento aziendale' },
        { value: 'Compleanno', label: 'Compleanno' },
        { value: 'Altro', label: 'Altro' },
      ];

  const privacyHref = isEn ? '/en/privacy-policy' : '/privacy-policy';
  const privacyError = form.formState.errors.privacy?.message as string | undefined;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
      <form
        className="grid gap-4 rounded-2xl border border-black/10 bg-warm-white/80 p-5 shadow-sm"
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="nome">{isEn ? 'Name' : 'Nome'}</Label>
            <Input id="nome" autoComplete="name" {...form.register('nome')} />
            {form.formState.errors.nome ? (
              <p className="text-xs text-red-700">{form.formState.errors.nome.message}</p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="telefono">{isEn ? 'Phone' : 'Telefono'}</Label>
            <Input id="telefono" autoComplete="tel" {...form.register('telefono')} />
            {form.formState.errors.telefono ? (
              <p className="text-xs text-red-700">{form.formState.errors.telefono.message}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">{isEn ? 'Email (optional)' : 'Email (opzionale)'}</Label>
            <Input id="email" autoComplete="email" inputMode="email" {...form.register('email')} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="tipo">{isEn ? 'Event type' : 'Tipo evento'}</Label>
            <select
              id="tipo"
              className="flex h-10 w-full rounded-md border border-black/10 bg-warm-white px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid"
              {...form.register('tipo')}
            >
              {eventTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="persone">{isEn ? 'Guests' : 'Numero persone'}</Label>
            <Input id="persone" type="number" min={1} max={600} {...form.register('persone')} />
            {form.formState.errors.persone ? (
              <p className="text-xs text-red-700">{form.formState.errors.persone.message}</p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="data">{isEn ? 'Date (optional)' : 'Data (opzionale)'}</Label>
            <Input id="data" type="date" {...form.register('data')} />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="messaggio">{isEn ? 'Details (optional)' : 'Dettagli (opzionale)'}</Label>
          <Textarea
            id="messaggio"
            placeholder={isEn
              ? 'E.g. menu preferences, decor, corporate needs…'
              : 'Es. preferenze menu, allestimenti, esigenze aziendali...'}
            {...form.register('messaggio')}
          />
        </div>

        <div className="grid gap-2 border-t border-black/5 pt-4">
          <label className="flex items-start gap-2.5 text-sm leading-relaxed text-text-mid">
            <input
              id="privacy"
              type="checkbox"
              {...form.register('privacy')}
              aria-invalid={!!privacyError}
              aria-describedby={privacyError ? 'privacy-error' : undefined}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-green-dark/30 text-green-dark focus:ring-2 focus:ring-green-mid focus:ring-offset-0"
            />
            <span>
              {isEn ? (
                <>
                  I have read the{' '}
                  <Link href={privacyHref} className="text-green-dark underline hover:no-underline">
                    Privacy Policy
                  </Link>{' '}
                  and consent to the processing of my data to manage this request.
                </>
              ) : (
                <>
                  Ho letto la{' '}
                  <Link href={privacyHref} className="text-green-dark underline hover:no-underline">
                    Privacy Policy
                  </Link>{' '}
                  e acconsento al trattamento dei miei dati per gestire questa richiesta.
                </>
              )}
            </span>
          </label>
          {privacyError ? (
            <p id="privacy-error" className="text-xs text-red-700">
              {isEn
                ? 'You must accept the Privacy Policy to send the request.'
                : privacyError}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting
              ? isEn ? 'Sending…' : 'Invio...'
              : isEn ? 'Send event request' : 'Invia richiesta eventi'}
          </Button>
          <div className="text-xs text-text-mid/80">
            {isEn ? 'Reply within 24–48 business hours.' : 'Risposta entro 24–48 ore lavorative.'}
          </div>
        </div>

        {status ? (
          <div
            role="status"
            className={`rounded-xl border px-4 py-3 text-sm ${
              status.ok ? 'border-green-mid/40 bg-green-mid/10' : 'border-red-700/30 bg-red-700/10'
            }`}
          >
            {status.message}
          </div>
        ) : null}
      </form>

      <aside className="hidden lg:block">
        <InfoBox title={isEn ? 'Essential info' : 'Informazioni essenziali'}>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">{isEn ? 'Capacity:' : 'Capienza:'}</span>{' '}
              {isEn
                ? 'up to 400 guests, with Sala Petrarca for 100–300.'
                : 'fino a 400 persone, con la Sala Petrarca per 100-300 invitati.'}
            </div>
            <div>
              <span className="font-semibold">{isEn ? 'Events contacts:' : 'Contatti eventi:'}</span>{' '}
              eventimontecchia@golfmontecchia.it
            </div>
            <div>
              <span className="font-semibold">WhatsApp:</span> +39 334 677 4483
            </div>
          </div>
        </InfoBox>
      </aside>
    </div>
  );
}
