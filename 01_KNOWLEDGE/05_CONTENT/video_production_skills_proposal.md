# Предложение: набор skills для продакшена видео/Reels SKYLINE (2026-08-25)

**Статус: ПРЕДЛОЖЕНИЕ. Ничего не установлено.** Жду сообщения «устанавливай».

Изучены 3 репозитория по прямому запросу владельца:

1. `github.com/runwayml/skills` — официальные skills Runway (генерация через API).
2. `github.com/social-media-skills/skills` — уже частично установлен (42 из 106 скиллов, см. `social_media_skills_catalog.md`).
3. `github.com/calesthio/generative-media-skills` — 153 скилла: провайдеры (API-адаптеры) + продакшен (режиссура/раскадровка/QA/права). Новый, отдельно изучен в этот раз.

Запрошенный процесс: бриф → сценарий → раскадровка → референс/стартовое изображение → промпты Runway image-to-video → тест-генерация → визуальная проверка → финальная генерация → монтаж → текст/субтитры → экспорт под 4 площадки → публикация только после подтверждения владельца.

---

## Итог одной строкой

Из 15 названных владельцем кандидатов: **12 уже установлены** (ничего делать не надо), **3 не установлены и предлагаются к установке** (`Runway`-генерация, `capcut`, мини-скилл `runway` от social-media-skills — по нему отдельная рекомендация НЕ ставить, см. ниже). Плюс нахожу **6 дополнений** из `generative-media-skills`, которых не хватает в текущем наборе именно для стадий раскадровки/референса/проверки/титров/прав/экспорта. Итоговый минимальный набор к установке — **11 новых скиллов**.

---

## Часть 1 — 15 кандидатов владельца

| # | Название | GitHub | Роль в процессе | Зависимость / доступ | Команда установки для Claude Code | Риск / ограничение |
|---|----------|--------|------------------|----------------------|-----------------------------------|---------------------|
| 1 | **Runway — генерация видео через API** (`rw-generate-video`, `rw-generate-image`) | github.com/runwayml/skills | Единственный узел, который реально ДЕЛАЕТ image-to-video: запускает Python-скрипт, дергает API Runway, ждёт (poll), скачивает результат. `rw-generate-image` — то же для стартового изображения/референса. | Аккаунт dev.runwayml.com с предоплатой от $10; `uv` (Python runner) в контейнере; env-переменная `RUNWAYML_API_SECRET`. | `git clone --depth 1 https://github.com/runwayml/skills /tmp/runway_skills && cp -r /tmp/runway_skills/skills/rw-generate-video /tmp/runway_skills/skills/rw-generate-image .claude/skills/` (ручное копирование — так же, как ставили social-media-skills; официальный путь через `claude plugin marketplace add anthropics/claude-plugins-community && claude plugin install runway-api-skills@claude-community` тоже работает, но ставит ВСЕ 14 скиллов пакета разом, без выборочности) | Платный API, деньги списываются за каждый запуск (5–40 кредитов/сек в зависимости от модели) — нужен контроль бюджета (`rw-check-org-details`, см. ниже). Ключ API — секрет, никогда не передаётся как CLI-флаг. |
| 2 | `reels-script` | social-media-skills | Сценарий Reels: хук за 3 сек, retention, sound-off. | Нет внешних — чистый advisory-скилл. | Уже установлен | — |
| 3 | `story-writer` | social-media-skills | Сценарии Stories (для доп. охвата вокруг Reels). | Нет внешних. | Уже установлен | — |
| 4 | `short-form-video-script` | social-media-skills | Мастер-крафт коротких вертикальных сценариев (общий слой над reels-script). | Нет внешних. | Уже установлен | — |
| 5 | `scripting-and-storyboarding` | social-media-skills | Препродакшен: AV-скрипт, шот-лист, paper edit — для съёмок с людьми/локациями. | Нет внешних. | Уже установлен | Не заточен под AI-генерацию (промпт-план для Runway) — для этого нужен доп. скилл, см. Часть 2. |
| 6 | `caption-writer` | social-media-skills | Подпись поста (текст, который видит зритель под Reel). | Нет внешних. | Уже установлен | — |
| 7 | `instagram-seo` | social-media-skills | IG-поиск/ключевые слова в подписи и профиле (не хештеги). | Нет внешних. | Уже установлен | — |
| 8 | `cross-platform-repurposing` | social-media-skills | Один ролик → адаптация под IG/TikTok/FB/YouTube без copy-paste. | Нет внешних. | Уже установлен | — |
| 9 | **`captions-and-clipping`** | social-media-skills | Авто-субтитры / нарезка длинного видео на короткие. | Нет внешних (советует инструменты типа Opus Clip/CapCut/Submagic). | Уже установлен | Это advisory-слой, реального наложения текста не делает — см. `title-kinetic-typography` в Части 2 для профессиональной раскладки титров. |
| 10 | `ai-music-and-sound` | social-media-skills | Какую музыку/звук использовать, что безопасно по правам (trending sound, лицензии). | Нет внешних. | Уже установлен | Advisory только — не генерирует звук сам. |
| 11 | `platform-specs-and-validation` | social-media-skills | Технические требования площадок + validate-before-publish перед фан-аутом. | Нет внешних. | Уже установлен | — |
| 12 | `instagram-reels-publishing` | social-media-skills | Механика паблиша конкретно в IG Reels: обложка, safe zone, настройки. | Нет внешних. | Уже установлен | — |
| 13 | `scheduling-and-queue` | social-media-skills | Мост «готовый контент → реальная публикация» через WoopSocial. | **Требует платный аккаунт WoopSocial + новое OAuth-подключение соцсетей** (см. `creative_director_playbook.md` §6c). | Уже установлен | Ключевой открытый вопрос — именно этот скилл единственный путь к публикации внутри этой библиотеки, и он завязан на WoopSocial, а не на наш текущий Zapier-мост. Решение отдельно, не входит в этот запрос. |
| 14 | `capcut` | social-media-skills | Крафт монтажа именно в CapCut: темп нарезки, авто-титры, синхронизация со звуком, экспорт — покрывает шаг «монтаж» + частично «наложение текста». | Нет API/MCP у CapCut — скилл только планирует (cut-план, caption-спец, sound-план), монтирует человек в приложении. | `git clone --depth 1 https://github.com/social-media-skills/skills /tmp/smskills && cp -r /tmp/smskills/skills/capcut .claude/skills/capcut` | Не автоматизация — только план для человека-монтажёра. Не путать с автоматическим монтажом. |
| 15 | `runway` (мини-скилл social-media-skills, **не путать с #1**) | social-media-skills | Промпт-гайд «как формулировать запрос к Runway» под соцсети (какую модель выбрать под бюджет/тип ролика). | Нет внешних (просто советует). | **Не рекомендую ставить** — см. обоснование ниже | Дублирует то, что уже покрывают `rw-generate-video`/`rw-generate-image` (у которых есть собственные секции по промптингу и выбору модели) + уже установленный справочный файл `tools/integrations/runway.md`. Ставить — лишний скилл без новой функции. |

---

## Часть 2 — необходимые дополнения из `generative-media-skills`

Разрыв в текущем наборе: всё из social-media-skills сделано под уже готовый ролик и его публикацию в соцсетях, но **ничего не покрывает саму режиссуру AI-генерации** (раскадровка под промпты, работа с референсом, профессиональная проверка сгенерированного, права на сгенерированный контент, титры как отдельный этап, техническое финиширование экспортов). Это ровно то, что просил владелец отдельным этапом протокола («без текста внутри генерации Runway», «отдельный этап наложения титров», «проверка прав»).

| Название | GitHub | Роль в процессе | Зависимость / доступ | Команда установки для Claude Code | Риск / ограничение |
|---|---|---|---|---|---|
| `storyboard-previsualization` | github.com/calesthio/generative-media-skills (`skills/production/creative-direction/`) | Раскадровка именно как **generation-ready prompt plan** — по шоту: кадр, движение камеры, длительность, звук — прямой вход для коротких точных промптов Runway. | Нет внешних. | `git clone --depth 1 https://github.com/calesthio/generative-media-skills /tmp/genmedia_skills && cp -r /tmp/genmedia_skills/skills/production/creative-direction/storyboard-previsualization .claude/skills/` | Только `SKILL.md` (+ `references/`/`scripts/`/`assets/` если есть) — репозиторий явно требует НЕ копировать `EVAL.md` и `tests/` (это скрытые проверочные файлы автора, не для продакшена). |
| `reference-media-analysis` | calesthio/generative-media-skills (`production/governance-delivery/`) | Разбор референса/брендбука/фото Photodron в «безопасное для генерации» направление — переводит референс в промпт-инструкции, не копируя чужую работу 1-в-1. Прямой вход для «создания качественного стартового изображения». | Нет внешних. | `cp -r /tmp/genmedia_skills/skills/production/governance-delivery/reference-media-analysis .claude/skills/` | Не даёт юридических гарантий сама по себе — только продакшен-триаж, эскалация к владельцу при спорных случаях (лица, товарные знаки). |
| `generated-media-qa` | calesthio/generative-media-skills (`production/governance-delivery/`) | Формальная визуальная проверка и тестовой, и финальной генерации против брифа/спеки площадки — ровно шаг «визуальная проверка» из процесса владельца. | Нет внешних. | `cp -r /tmp/genmedia_skills/skills/production/governance-delivery/generated-media-qa .claude/skills/` | Не заменяет живой просмотр видео человеком — это чек-лист и протокол принятия решения, финальное «ОК» всё равно у владельца. |
| `title-kinetic-typography` | calesthio/generative-media-skills (`production/post-production/`) | Отдельный профессиональный этап наложения титров/субтитров: safe zones, читаемость, тайминг, WCAG-ограничения на мигание — именно то, что владелец просил держать ОТДЕЛЬНО от самой генерации Runway. | Нет внешних. | `cp -r /tmp/genmedia_skills/skills/production/post-production/title-kinetic-typography .claude/skills/` | Provider-independent (не привязан к CapCut/AfterEffects) — конкретную реализацию всё равно делает человек в CapCut. |
| `media-provenance-rights` | calesthio/generative-media-skills (`production/governance-delivery/`) | Проверка прав: музыка, референс-фото, авторские права на сгенерированный контент, C2PA/маркировка AI-контента — прямой ответ на пункт владельца «проверка... музыки и авторских прав». | Нет внешних. | `cp -r /tmp/genmedia_skills/skills/production/governance-delivery/media-provenance-rights .claude/skills/` | **Явно не юридическая консультация** (сам скилл это подчёркивает) — при спорных случаях эскалация к реальному юристу/владельцу, а не финальное решение агента. |
| `ffmpeg-media-finishing` | calesthio/generative-media-skills (`production/runtime-assembly/`) | Финальный технический экспорт под 4 площадки (кодек, битрейт, faststart, safe specs) — то же самое, с чем мы вручную возились при подготовке Reel #001 (H264 High@4.2, CRF26, AAC 48kHz) — этот скилл формализует и воспроизводимо повторяет такие решения. | Требует `ffmpeg`/`ffprobe` в контейнере (уже используются в проекте). | `cp -r /tmp/genmedia_skills/skills/production/runtime-assembly/ffmpeg-media-finishing .claude/skills/` | Кодеки/фильтры зависят от конкретной сборки ffmpeg — скилл требует сначала `ffprobe`, не гадать на глаз. |

### Рассмотрено, но НЕ включено в минимальный набор (опционально, по запросу)

- `cinematic-shot-direction`, `precise-video-description` (calesthio) — глубже, чем нужно для 12-секундных Reels про недвижимость; пригодится, если начнём делать более постановочные ролики.
- `media-qc-delivery`, `editing-montage`, `social-short-production` (calesthio) — заметно пересекаются с уже установленными `platform-specs-and-validation` + `capcut` + `short-form-video-script`; ставить сейчас — дублирование.
- `rw-generate-audio`, `rw-check-org-details`, `rw-setup-api-key`, `rw-api-reference` (runwayml/skills) — полезны, но не «минимум»: `ai-music-and-sound` уже покрывает решения по звуку на advisory-уровне; настройка ключа и бюджетный контроль — разовые/вспомогательные действия, включу по факту первого реального запуска генерации, если понадобится.

---

## Что делать дальше

Ничего не устанавливаю. Жду явного «**устанавливай**» — после этого:

1. Ставлю ровно 11 новых скиллов (1 Runway generation family × 2 + `capcut` + 6 из `generative-media-skills`).
2. Проверяю, что Claude Code видит каждый (листинг `.claude/skills/`).
3. Собираю единый рабочий протокол премиальных Reels SKYLINE: без текста внутри генерации Runway → отдельный этап титров/субтитров → чек-лист финальной проверки (9:16, safe zones, читаемость, контакты, музыка, авторские права) — по требованию из исходного запроса.
