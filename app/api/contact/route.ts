import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  hasPlot?: string;
  budget?: string;
  message?: string;
  company?: string; // honeypot
  locale?: 'uk' | 'ru' | 'en' | 'es';
};

const messages = {
  uk: { invalid:'Некоректні дані запиту.', name:'Вкажіть коректне ім’я.', phone:'Вкажіть коректний номер телефону.', email:'Вкажіть коректну електронну адресу.', required:'Заповніть усі обов’язкові поля.', long:'Повідомлення надто довге.', rate:'Забагато запитів. Спробуйте пізніше.', unavailable:'Форма тимчасово недоступна. Зв’яжіться з нами телефоном, через WhatsApp, Telegram, Viber або електронною поштою.' },
  ru: { invalid:'Некорректные данные запроса.', name:'Укажите корректное имя.', phone:'Укажите корректный номер телефона.', email:'Укажите корректный адрес электронной почты.', required:'Заполните все обязательные поля.', long:'Сообщение слишком длинное.', rate:'Слишком много запросов. Попробуйте позже.', unavailable:'Форма временно недоступна. Свяжитесь с нами по телефону, через WhatsApp, Telegram, Viber или электронную почту.' },
  en: { invalid:'Invalid request body.', name:'Please provide a valid name.', phone:'Please provide a valid phone number.', email:'Please provide a valid email.', required:'Please complete all required fields.', long:'Message is too long.', rate:'Too many requests. Please try again later.', unavailable:'The contact form is temporarily unavailable. Please contact us by phone, WhatsApp, Telegram, Viber or email.' },
  es: { invalid:'Los datos de la solicitud no son válidos.', name:'Introduce un nombre válido.', phone:'Introduce un número de teléfono válido.', email:'Introduce un correo electrónico válido.', required:'Completa todos los campos obligatorios.', long:'El mensaje es demasiado largo.', rate:'Demasiadas solicitudes. Inténtalo de nuevo más tarde.', unavailable:'El formulario no está disponible temporalmente. Contacta con nosotros por teléfono, WhatsApp, Telegram, Viber o correo electrónico.' },
};

// Very small in-memory rate limiter (per server instance). For production at
// scale, prefer Cloudflare rate limiting or a shared store (e.g. Redis).
const submissionLog = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function unavailableResponse(locale: keyof typeof messages = 'uk') {
  return NextResponse.json(
    {
      message: messages[locale].unavailable,
    },
    { status: 503 }
  );
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ message: messages.uk.invalid }, { status: 400 });
  }
  const locale = payload.locale && payload.locale in messages ? payload.locale : 'uk';
  const copy = messages[locale];

  // Honeypot: bots tend to fill every field.
  if (payload.company) {
    return NextResponse.json({ ok: true }); // silently accept, do nothing
  }

  const name = (payload.name || '').trim();
  const phone = (payload.phone || '').trim();
  const email = (payload.email || '').trim();
  const hasPlot = (payload.hasPlot || '').trim();
  const budget = (payload.budget || '').trim();
  const message = (payload.message || '').trim();

  if (!name || name.length > 120) {
    return NextResponse.json(
      { message: copy.name },
      { status: 400 }
    );
  }
  if (!phone || phone.length > 40) {
    return NextResponse.json(
      { message: copy.phone },
      { status: 400 }
    );
  }
  if (!email || !isValidEmail(email) || email.length > 160) {
    return NextResponse.json(
      { message: copy.email },
      { status: 400 }
    );
  }
  if (!hasPlot || !budget) {
    return NextResponse.json(
      { message: copy.required },
      { status: 400 }
    );
  }
  if (message.length > 2000) {
    return NextResponse.json({ message: copy.long }, { status: 400 });
  }

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: copy.rate },
      { status: 429 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const inbox = process.env.CONTACT_INBOX_EMAIL || '780443k4@gmail.com';

  if (!resendApiKey || !from) return unavailableResponse(locale);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [inbox],
        reply_to: email,
        subject: `New SKYLINE villa enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Phone / WhatsApp: ${phone}`,
          `Email: ${email}`,
          `Has a plot: ${hasPlot}`,
          `Budget: ${budget}`,
          `Message: ${message || '(not provided)'}`,
        ].join('\n'),
      }),
    });

    if (!response.ok) {
      console.error('Lead email delivery failed:', response.status);
      return unavailableResponse(locale);
    }
  } catch {
    console.error('Lead email delivery failed due to a network error.');
    return unavailableResponse(locale);
  }

  return NextResponse.json({ ok: true });
}
