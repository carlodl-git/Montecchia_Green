'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';

const bookingSchema = z.object({
  nome: z.string().trim().min(2, 'Inserisci il tuo nome').max(120),
  telefono: z.string().trim().min(7, 'Inserisci un numero di telefono').max(20),
  email: z
    .union([z.string().trim().email(), z.literal('')]),
  persone: z.coerce.number().int().min(1).max(200),
  data: z.string().optional(),
  orario: z.string().optional(),
  note: z.string().optional(),
});

export default function BookingForm() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const [status, setStatus] = React.useState<{ ok: boolean; message: string } | null>(null);

  const form = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      nome: '',
      telefono: '',
      email: '',
      persone: 2,
      data: '',
      orario: '',
      note: '',
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

      const res = await fetch('/api/prenota', {
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
          message: data?.message || 'Si è verificato un errore durante l’invio della richiesta.',
        });
        return;
      }

      setStatus({
        ok: true,
        message:
          data?.message ||
          'Richiesta inviata. Ti contatteremo a breve per confermare la disponibilità.',
      });
      form.reset();
    } catch {
      setStatus({
        ok: false,
        message: 'Impossibile inviare la richiesta. Riprova più tardi.',
      });
    }
  }

  return (
    <div className="max-w-2xl">
      <form
        className="grid gap-5 rounded-2xl border border-green-dark/10 bg-warm-white p-6 shadow-[0_4px_28px_-6px_rgba(45,74,62,0.14)] md:p-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="border-b border-black/5 pb-4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-green-dark md:text-[1.65rem]">
            {isEn ? 'Booking request' : 'Richiesta di prenotazione'}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-text-mid">
            {isEn
              ? 'Fill in the form: we will get back to you to confirm availability and time.'
              : 'Compila il modulo: ti ricontattiamo per confermare disponibilità e orario.'}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2.5">
            <Label htmlFor="nome">{isEn ? 'Full name' : 'Nome e cognome'}</Label>
            <Input id="nome" autoComplete="name" {...form.register('nome')} />
            {form.formState.errors.nome ? (
              <p className="text-xs text-red-700">{form.formState.errors.nome.message}</p>
            ) : null}
          </div>

          <div className="grid gap-2.5">
            <Label htmlFor="telefono">{isEn ? 'Phone' : 'Telefono'}</Label>
            <Input id="telefono" autoComplete="tel" {...form.register('telefono')} />
            {form.formState.errors.telefono ? (
              <p className="text-xs text-red-700">{form.formState.errors.telefono.message}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2.5">
            <Label htmlFor="email">{isEn ? 'Email (optional)' : 'Email (opzionale)'}</Label>
            <Input id="email" autoComplete="email" inputMode="email" {...form.register('email')} />
          </div>

          <div className="grid gap-2.5">
            <Label htmlFor="persone">{isEn ? 'Guests' : 'Persone'}</Label>
            <Input
              id="persone"
              type="number"
              min={1}
              max={200}
              {...form.register('persone')}
            />
            {form.formState.errors.persone ? (
              <p className="text-xs text-red-700">{form.formState.errors.persone.message}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2.5">
            <Label htmlFor="data">{isEn ? 'Date (optional)' : 'Data (opzionale)'}</Label>
            <Input id="data" type="date" {...form.register('data')} />
          </div>
          <div className="grid gap-2.5">
            <Label htmlFor="orario">{isEn ? 'Preferred time (optional)' : 'Orario preferito (opzionale)'}</Label>
            <Input id="orario" type="time" {...form.register('orario')} />
          </div>
        </div>

        <div className="grid gap-2.5">
          <Label htmlFor="note">{isEn ? 'Notes (optional)' : 'Note (opzionale)'}</Label>
          <Textarea
            id="note"
            placeholder={isEn ? 'Allergies, preferences, occasion…' : 'Allergie, preferenze, occasioni...'}
            {...form.register('note')}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-black/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="min-w-[200px]">
            {form.formState.isSubmitting
              ? isEn
                ? 'Sending…'
                : 'Invio...'
              : isEn
                ? 'Send request'
                : 'Invia richiesta'}
          </Button>
          <p className="text-xs leading-relaxed text-text-mid/85 sm:max-w-[220px] sm:text-right">
            {isEn
              ? 'We reply as soon as possible to confirm availability and time.'
              : 'Ti rispondiamo al più presto per confermare disponibilità e orario.'}
          </p>
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
    </div>
  );
}

