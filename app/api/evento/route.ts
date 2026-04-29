import { z } from 'zod';
import nodemailer from 'nodemailer';

const eventSchema = z.object({
  nome: z.string().min(2).max(120),
  email: z.string().email().optional(),
  telefono: z.string().min(7).max(20),
  tipo: z.enum(['Matrimonio', 'Evento aziendale', 'Compleanno', 'Altro']),
  persone: z.number().int().min(1).max(600),
  data: z.string().optional(),
  messaggio: z.string().optional(),
  privacy: z.literal(true, { message: 'Consenso privacy obbligatorio.' }),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = eventSchema.safeParse(json);

  if (!parsed.success) {
    return Response.json(
      { ok: false, message: 'Dati non validi. Verifica i campi del form.' },
      { status: 400 }
    );
  }

  const values = parsed.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, EVENTI_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    console.warn('[evento] SMTP non configurato, modalità test.');
    return Response.json({
      ok: true,
      message:
        'Richiesta ricevuta. In questa modalità demo non inviamo email, ma puoi comunque testare il flusso.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const to = EVENTI_TO_EMAIL || 'eventimontecchia@golfmontecchia.it';
  const subject = `Richiesta evento - ${values.tipo} (${values.nome})`;
  const text = [
    `Nome: ${values.nome}`,
    `Telefono: ${values.telefono}`,
    `Email: ${values.email || '-'}`,
    `Tipo evento: ${values.tipo}`,
    `Persone: ${values.persone}`,
    `Data: ${values.data || '-'}`,
    `Messaggio: ${values.messaggio || '-'}`,
  ].join('\n');

  await transporter.sendMail({
    from: SMTP_FROM,
    to,
    subject,
    text,
  });

  return Response.json({ ok: true, message: 'Richiesta eventi inviata con successo.' });
}

