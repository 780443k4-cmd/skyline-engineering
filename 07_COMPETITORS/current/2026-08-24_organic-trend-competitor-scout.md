# Organic Trend & Competitor Scout

**Дата:** 2026-08-24
**Агент:** COMPETITOR_ANALYST
**Scope:** локальные органические возможности Skyline Engineering; без Meta paid ads, публикации, внешних аккаунтов и изменений сайта.

## Статус доступа и проверки

- **LOCAL DATA:** использованы доступные локальные файлы проекта и исходный код сайта.
- **CONTENT REUSE:** `01_KNOWLEDGE/00_INDEX/content_index.json` прочитан; `content_assets` пуст.
- **CURRENT / DRAFTS:** ожидаемые локальные индексные/README-файлы в `07_COMPETITORS/current` и `03_CONTENT/drafts` не обнаружены через доступные локальные пути. Полного inventory файлов получить не удалось.
- **OFFICIAL WEBSITE:** доступен локальный исходный код сайта; live-fetch официального домена и внешнего competitor research в этой задаче не выполнялся.
- **EXTERNAL RESEARCH:** ограничен/не использован. Конкурентные факты, доли рынка, цены, рейтинги, поисковые объемы и трендовые цифры отсутствуют и не предполагаются.

## Подтвержденные локальные факты

1. В локальном README сайт описан как сайт SKYLINE Engineering для design-and-build вилл в Benidorm, Spain; заявлены страницы Home, Villas, Process, About и Contact. Источник: `README.md`.
2. `data/site.ts` содержит позиционирование `Bespoke villas in Spain`, регион `Benidorm · Spain` и список обслуживаемых локаций: Altea, Altea Hills, Finestrat, Benidorm, La Nucia, Polop, Calpe, Benissa, Moraira, Javea.
3. `data/process.ts` описывает сквозной процесс от land analysis и concept до architecture & engineering, licensing, construction, interiors, landscape и handover.
4. `data/villas.ts` содержит четыре villa concepts с характеристиками bedrooms, size и price-from. Комментарий в исходнике прямо указывает, что это architectural concepts/visualizations, а не фотографии завершенных проектов.
5. `app/layout.tsx` содержит metadata, canonical, Open Graph, JSON-LD Organization/LocalBusiness/Service/WebSite и украинские title/description; язык HTML установлен как `uk`.
6. В `README.md` проверка заявлений `25+ years / 3+ years in Spain` помечена незавершенной. Это нельзя использовать как подтвержденное конкурентное преимущество.

## Наблюдения и органические возможности

### O1 — Process-led organic content

- **FACT:** локальный сайт содержит подробный девятиэтапный процесс и цепочку ответственности от Land до Keys.
- **INFERENCE:** это позволяет строить органический кластер вокруг вопросов покупателя о land analysis, permits, design-and-engineering coordination и handover.
- **OPPORTUNITY:** подготовить один недублирующийся бриф на практический материал о выборе участка и последовательности turnkey villa project в Alicante/Benidorm. Сначала проверить `03_CONTENT/drafts` полным inventory.
- **Риск:** не добавлять сроки, гарантии, юридические обещания или статистику без отдельного подтверждения.

### O2 — Location-intent coverage

- **FACT:** список локаций уже присутствует в `data/site.ts`.
- **INFERENCE:** отдельные локальные поисковые намерения могут быть релевантны для Altea, Finestrat, Benidorm, Moraira и других зон.
- **OPPORTUNITY:** составить матрицу location x service и создавать страницы только там, где есть уникальный локальный материал, реальная зона работы и отличающийся search intent. Не клонировать тексты.
- **UNKNOWN:** нет локальных данных о спросе, конкурентах, выдаче и приоритетах локаций; порядок не ранжирован.

### O3 — Concept transparency as trust asset

- **FACT:** villa cards — концепты/визуализации, не completed-project photography.
- **INFERENCE:** прозрачная маркировка концептов может поддержать доверие и предотвратить смешение portfolio evidence с illustrative material.
- **OPPORTUNITY:** органический материал о том, как brief, plot constraints и engineering превращаются в concept, с явной маркировкой illustrative visuals. Не выдавать concepts за case studies.

### O4 — Metadata and language consistency review

- **FACT:** metadata и HTML language в локальном коде ориентированы на украинский язык, при этом описание проекта и часть конфигурации англоязычные.
- **INFERENCE:** перед SEO-расширением нужно проверить согласованность языковых версий, canonical и hreflang/locale-поведения.
- **OPPORTUNITY:** провести отдельный локальный technical/content review существующих языковых маршрутов; это наблюдение, а не предложение менять сайт в рамках scout.

### O5 — Evidence gate for trust claims

- **FACT:** README требует проверить `25+ years / 3+ years in Spain` до запуска.
- **RECOMMENDATION:** исключить эти claims из organic briefs и competitor comparisons до получения VERIFIED источника. Аналогично не заявлять completed projects, client outcomes, certifications или rankings без доказательств.

## Конкурентная картина

**UNKNOWN / INSUFFICIENT DATA:** локальных competitor dossiers, внешней выдачи, официально подтвержденных competitor claims и сравнительных метрик в доступных данных не найдено. Поэтому этот scout не утверждает, кто конкуренты, какие у них цены/позиционирование или какие темы дают им трафик.

## Приоритет следующего локального шага

1. Получить полный локальный inventory `07_COMPETITORS/current` и `03_CONTENT/drafts`.
2. Утвердить один process-led или location-led бриф после проверки дублей.
3. Отдельно проверить доказательства trust claims и языковую SEO-структуру.

**Итоговый статус:** COMPLETE — внутренний scout-файл создан; публикация, paid ads, внешние аккаунты и изменения сайта не выполнялись. Данные о конкурентах и внешних трендах: NOT AVAILABLE / NOT CLAIMED.
