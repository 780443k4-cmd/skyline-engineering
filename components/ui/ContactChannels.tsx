'use client';

import { phoneHref, site, telegramHref, viberHref, whatsappHref } from '@/data/site';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { trackEvent } from '@/lib/analytics';

type Channel = {
  label: string;
  value: string;
  href: string;
  eventName: string;
  direct?: boolean;
  icon?: string;
};

export default function ContactChannels({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const channels: Channel[] = [
    { label: t.common.phone, value: site.phoneDisplay, href: phoneHref(), eventName: 'phone_click', direct: true },
    { label: 'WhatsApp', value: t.common.messageUs, href: whatsappHref(t.common.waMessage), eventName: 'whatsapp_click', icon: 'https://cdn.simpleicons.org/whatsapp/25D366' },
    { label: 'Telegram', value: t.common.messageUs, href: telegramHref(t.common.waMessage), eventName: 'telegram_click', icon: 'https://cdn.simpleicons.org/telegram/26A5E4' },
    { label: 'Viber', value: t.common.messageUs, href: viberHref(), eventName: 'viber_click', icon: 'https://cdn.simpleicons.org/viber/7360F2' },
    { label: t.common.email, value: site.email, href: `mailto:${site.email}`, eventName: 'email_click', direct: true },
  ];
  return (
    <ul className={compact ? 'space-y-2 text-sm' : 'space-y-4 text-sm'}>
      {channels.map((channel) => (
        <li
          key={channel.label}
          className={compact ? '' : 'flex flex-wrap gap-x-3 gap-y-1'}
        >
          <span className="text-graphite/50">{channel.label}</span>
          <a
            href={channel.href}
            onClick={() => trackEvent(channel.eventName, { location: compact ? 'footer' : 'contact_page' })}
            aria-label={channel.icon ? `${channel.label}: ${channel.value}` : undefined}
            className="inline-flex min-h-6 items-center hover:text-skyline transition-colors underline-offset-4 hover:underline"
            {...(channel.direct
              ? {}
              : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {channel.icon ? (
              <img src={channel.icon} alt="" width="24" height="24" loading="lazy" className="contact-channel-icon h-6 w-6 transition-transform duration-150 ease-out" />
            ) : channel.value}
          </a>
        </li>
      ))}
    </ul>
  );
}
