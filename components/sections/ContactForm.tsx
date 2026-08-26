'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { trackEvent } from '@/lib/analytics';

const budgetOptions = ['€400–600K', '€600–900K', '€900K–1.5M', '€1.5M+'];

export default function ContactForm() {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form).entries()), locale };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || t.form.error);
      }

      setStatus('success');
      trackEvent('generate_lead', { form_name: 'villa_consultation', locale });
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : t.form.error);
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-line p-10 text-center">
        <h3 className="font-display text-3xl mb-3">{t.form.thanks}</h3>
        <p className="text-graphite/75">
          {t.form.thanksText}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for basic spam protection */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label={t.form.name} name="name" required autoComplete="name" />
        <Field
          label={t.form.phone}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </div>

      <Field label={t.form.email} name="email" type="email" required autoComplete="email" />

      <div>
        <label className="block text-xs tracking-widest2 uppercase text-graphite/70 mb-3">
          {t.form.plot}
        </label>
        <div className="flex flex-wrap gap-3">
          {t.form.plotOptions.map((opt: string) => (
            <label
              key={opt}
              className="border border-line px-4 py-2 text-sm cursor-pointer has-[:checked]:border-skyline has-[:checked]:text-skyline"
            >
              <input
                type="radio"
                name="hasPlot"
                value={opt}
                className="sr-only"
                required
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-widest2 uppercase text-graphite/70 mb-3">
          {t.form.budget}
        </label>
        <div className="flex flex-wrap gap-3">
          {budgetOptions.map((opt) => (
            <label
              key={opt}
              className="border border-line px-4 py-2 text-sm cursor-pointer has-[:checked]:border-skyline has-[:checked]:text-skyline"
            >
              <input
                type="radio"
                name="budget"
                value={opt}
                className="sr-only"
                required
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-widest2 uppercase text-graphite/70 mb-2"
        >
          {t.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-line bg-transparent px-4 py-3 text-sm focus:outline-none"
        />
      </div>

      {status === 'error' && <p className="text-sm text-skyline">{error}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto bg-ink text-warmwhite px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-skyline transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? t.form.sending : t.form.send}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs tracking-widest2 uppercase text-graphite/70 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-line bg-transparent px-4 py-3 text-sm focus:outline-none"
      />
    </div>
  );
}
