'use client';

import * as React from 'react';
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
});

export default function EventForm() {
  const [status, setStatus] = React.useState<{ ok: boolean; message: string } | null>(null);

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefono: '',
      tipo: 'Matrimonio',
      persone: 120,
      data: '',
      messaggio: '',
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
          message: data?.message || 'Si è verificato un errore durante l’invio della richiesta.',
        });
        return;
      }

      setStatus({
        ok: true,
        message:
          data?.message ||
          'Richiesta inviata. Ti contatteremo a breve con una proposta personalizzata.',
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
    <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
      <form
        className="grid gap-4 rounded-2xl border border-black/10 bg-warm-white/80 p-5 shadow-sm"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" autoComplete="name" {...form.register('nome')} />
            {form.formState.errors.nome ? (
              <p className="text-xs text-red-700">{form.formState.errors.nome.message}</p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="telefono">Telefono</Label>
            <Input id="telefono" autoComplete="tel" {...form.register('telefono')} />
            {form.formState.errors.telefono ? (
              <p className="text-xs text-red-700">{form.formState.errors.telefono.message}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Email (opzionale)</Label>
            <Input id="email" autoComplete="email" inputMode="email" {...form.register('email')} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="tipo">Tipo evento</Label>
            <select
              id="tipo"
              className="flex h-10 w-full rounded-md border border-black/10 bg-warm-white px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid"
              {...form.register('tipo')}
            >
              <option value="Matrimonio">Matrimonio</option>
              <option value="Evento aziendale">Evento aziendale</option>
              <option value="Compleanno">Compleanno</option>
              <option value="Altro">Altro</option>
            </select>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="persone">Numero persone</Label>
            <Input id="persone" type="number" min={1} max={600} {...form.register('persone')} />
            {form.formState.errors.persone ? (
              <p className="text-xs text-red-700">{form.formState.errors.persone.message}</p>
            ) : null}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="data">Data (opzionale)</Label>
            <Input id="data" type="date" {...form.register('data')} />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="messaggio">Dettagli (opzionale)</Label>
          <Textarea
            id="messaggio"
            placeholder="Es. preferenze menu, allestimenti, esigenze aziendali..."
            {...form.register('messaggio')}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Invio...' : 'Invia richiesta eventi'}
          </Button>
          <div className="text-xs text-text-mid/80">Risposta entro 24–48 ore lavorative.</div>
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
        <InfoBox title="Informazioni essenziali">
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Capienza:</span> Sala Petrarca 100–300 persone.
            </div>
            <div>
              <span className="font-semibold">Contatti eventi:</span> eventimontecchia@golfmontecchia.it
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

