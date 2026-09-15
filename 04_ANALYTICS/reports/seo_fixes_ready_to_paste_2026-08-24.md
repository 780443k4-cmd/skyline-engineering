# SEO — готовые правки для вставки на сайт (2026-08-24)

Владелец: SEO_TECH. Собрано из VERIFIED-фактов `01_COMPANY/company.md` (COMP-001/004/005/008)
и аудита `01_KNOWLEDGE/04_SEO/technical_seo.md` (TSEO-002..006). У меня нет прямого доступа
к репозиторию/Vercel — вставить это должны вы (или ваш разработчик) через VS Code, как и
любые другие правки на сайте (см. `00_SYSTEM/integrations.md`).

## 1. Schema.org / JSON-LD — вставить в `<head>` главной страницы (и в идеале на каждой)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Skyline Engineering, S.L.",
  "url": "https://skylineengineering.es/",
  "telephone": "+34643895440",
  "email": "780443k4@gmail.com",
  "taxID": "B21976220",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cl. Segovia, 35, Pta. 14, Esc. 3",
    "postalCode": "03509",
    "addressLocality": "Finestrat",
    "addressRegion": "Alicante",
    "addressCountry": "ES"
  },
  "areaServed": ["Benidorm", "Costa Blanca", "Alicante"],
  "founder": {
    "@type": "Person",
    "name": "Denys Druz",
    "jobTitle": "Engineer, Architect"
  },
  "sameAs": [
    "https://www.instagram.com/skyline_engineering_sl/",
    "https://www.tiktok.com/@skyline_benidorm",
    "https://www.facebook.com/SKYLINEBenidorm"
  ]
}
</script>
```

Проверить после вставки: https://search.google.com/test/rich-results (вставить URL страницы).

Отдельно — на странице FAQ (если появится, см. п.4 ниже) добавить `FAQPage` schema с
вопросами и ответами прямо из текста страницы.

## 2. hreflang — вставить в `<head>` каждой языковой версии

Украинский — как primary/x-default (это подтверждённый пользователем приоритетный рынок,
см. `01_COMPANY/target_audiences.md` AUD-002):

```html
<link rel="alternate" hreflang="uk" href="https://skylineengineering.es/" />
<link rel="alternate" hreflang="ru" href="https://skylineengineering.es/ru/" />
<link rel="alternate" hreflang="en" href="https://skylineengineering.es/en/" />
<link rel="alternate" hreflang="es" href="https://skylineengineering.es/es/" />
<link rel="alternate" hreflang="x-default" href="https://skylineengineering.es/" />
```

⚠ Точные URL языковых версий (`/ru/`, `/en/`, `/es/`) — предположение по стандартной
схеме, не проверено напрямую по структуре сайта. Перед вставкой проверьте реальные пути
языковых версий (или пришлите — проверю).

## 3. Google Business Profile — не техническая правка, а отдельное действие

Самый быстрый бесплатный рычаг для локальной видимости и цитируемости в ChatGPT/Perplexity
(см. TSEO-006). Завести/подтвердить может только владелец — нужна физическая верификация
адреса от Google. Рекомендация: начать сегодня, процесс верификации занимает от нескольких
дней. Адрес для регистрации — тот же, что в юр. данных (COMP-005), если это подходящий
публичный адрес для карточки бизнеса (уточнить у вас — юридический адрес не всегда годится
для GBP, если это не место приёма клиентов).

## 4. FAQ-контент (следующий шаг после первых трёх)

Короткие ответы на реальные вопросы покупателей, начиная с прямого ответа в первом
предложении (это то, что лучше всего цитируют AI-движки) — темы: разрешения на
строительство (уже есть сценарий Reel 1), сроки строительства, что входит в "одна точка
контакта", разница между покупкой готовой виллы и строительством под заказ (пересекается
с постом F). Отдельная задача, не входит в этот файл.
