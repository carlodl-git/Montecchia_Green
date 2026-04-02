import { z } from 'zod';
import nodemailer from 'nodemailer';

const bookingSchema = z.object({
  nome: z.string().min(2).max(120),
  telefono: z.string().min(7).max(20),
  email: z.string().email().optional(),
  persone: z.number().int().min(1).max(200),
  data: z.string().optional(),
  orario: z.string().optional(),
  note: z.string().optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = bookingSchema.safeParse(json);

  if (!parsed.success) {
    return Response.json(
      { ok: false, message: 'Dati non validi. Verifica i campi del form.' },
      { status: 400 }
    );
  }

  const values = parsed.data;

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    PRENOTA_TO_EMAIL,
  } = process.env;

  // Dev/preview fallback: permette testare il form senza configurare SMTP.
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    console.warn('[prenota] SMTP non configurato, modalità test.', {
      PRENOTA_TO_EMAIL,
    });
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

  const to = PRENOTA_TO_EMAIL || 'lamontecchiagreen@gmail.com';

  const subject = `Prenotazione - La Montecchia Green (${values.nome})`;
  const text = [
    `Nome: ${values.nome}`,
    `Telefono: ${values.telefono}`,
    `Email: ${values.email || '-'}`,
    `Persone: ${values.persone}`,
    `Data: ${values.data || '-'}`,
    `Orario: ${values.orario || '-'}`,
    `Note: ${values.note || '-'}`,
  ].join('\n');

  await transporter.sendMail({
    from: SMTP_FROM,
    to,
    subject,
    text,
  });

  return Response.json({ ok: true, message: 'Richiesta inviata con successo.' });
}

