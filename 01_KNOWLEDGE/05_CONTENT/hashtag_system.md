# Система хештегов — Villas / Costa Blanca

Владелец: SOCIAL_CONTENT / SOCIAL_STRATEGIST. Источник: файл пользователя
`статьи/Пул хештегов для продвижения вилл на Коста-Бланке.xlsx` (получен 2026-08-24).
SOURCE_TYPE: PRIMARY (готовая система от пользователя), STATUS: VERIFIED — заменяет
все ad-hoc хештеги, которые SOCIAL_CONTENT подбирал вручную в черновиках A/B/C/D
(они были прикидкой, не системой; теперь — эта).

Оригинал сохранён: `09_SOURCE_DOCUMENTS/Пул хештегов для продвижения вилл на Коста-Бланке.xlsx`.

## 0. Тег аккаунта — ОТМЕНЁН как обязательный хештег (решение 2026-08-25, исправление)

Владелец сначала попросил добавлять тег своего же аккаунта в каждый пост
(см. правило ниже, было обязательным несколько часов), затем — увидев, что
лимит тегов жёсткий (особенно Facebook: 1–3) — отменил это: "хештег, который
ведёт просто на нас, он нам глобально нафиг не надо... нам надо, чтобы посты
имели максимальный охват и находились при поиске." Логика верная: тег
собственного аккаунта не помогает discoverability (по нему и так ищут только
тех, кто уже знает бренд) и отнимает слот у тега, который реально приводит
новую аудиторию через поиск. **Тег аккаунта в хештег-блок больше не
добавляется.** Освободившийся слот отдаётся под максимально релевантный тег
именно под намерение "купить виллу в Бенидорме/Коста-Бланке" — как правило,
`#BuyVillaSpain` (пул "Покупка недвижимости", §2) в связке с гео-тегами.

Реальные аккаунты по платформам (справочно, для публикации/упоминаний в
описании, НЕ как хештег — проверено напрямую через API подключённых
интеграций):

| Платформа | Публикуется через | Реальный аккаунт (проверено API) |
|---|---|---|
| Instagram | Zapier `InstagramBusinessCLIAPI` → `publish_video` | @skyline_engineering_sl ("SKYLINE ENGINEERING, S.L.", business account id `17841447583026501`) |
| Facebook | Zapier `FacebookV2CLIAPI` → `page_video` | Страница "Skyline Benidorm", @SKYLINEBenidorm (page id `266272910582436`) |
| TikTok | Buffer → Zapier `BufferCLIAPI` | @skyline_benidorm (Buffer-канал "skyline_benidorm TikTok Account") |

Правило теперь: весь тег-бюджет площадки (IG до 5 / TikTok 5 / FB 1–3) идёт
на максимально релевантные теги по содержанию + намерению покупателя + гео —
приоритет: 1 тег покупательского намерения (`#BuyVillaSpain` и т.п., §2) + 1-2
гео-тега (`#Benidorm`, при необходимости `#CostaBlanca`) + продукт/тип
контента из готовых наборов §3. Не пропускать ни в одной публикации — см.
также обязательный чек-лист публикации в `creative_director_playbook.md` §6b
(пункт про хештеги остаётся, пункт про обязательный тег аккаунта из него
убран).

## 1. Инструкция агенту

- Цель: привлекать клиентов, которые хотят купить/построить индивидуальную виллу в Испании —
  прежде всего Коста-Бланка / Benidorm.
- Главный принцип: НЕ использовать один блок под все посты — теги по теме конкретного контента.
- Instagram: до 5 тщательно подобранных хештегов.
- TikTok: 5 релевантных хештегов (проверять тренды через Creative Center еженедельно).
- Facebook: 1–3 максимально релевантных тега — хештеги вторичны, важнее контент/реакции.
- Язык: основной пул EN + ES (международный + локальный покупатель). Русский — только для
  русскоязычного контента (для украиноязычного — по аналогии, эта система его не покрывает
  отдельно, но EN/ES теги остаются универсальными для discoverability вне зависимости от языка
  подписи).
- География: минимум один точный гео-тег в локальном посте — #CostaBlanca / #Benidorm /
  #Alicante или конкретный населённый пункт.
- Запрет: не добавлять #fyp #viral #explorepage и подобные массовые теги автоматически.

## 2. Общий пул (по категориям)

- **Бренд**: #SkylineEngineering #SkylineEngineeringES #CustomVilla #VillaBuilder #CustomHomeBuilder
- **Costa Blanca**: #CostaBlanca #CostaBlancaSpain #CostaBlancaLife #CostaBlancaLiving #CostaBlancaProperty #CostaBlancaRealEstate #CostaBlancaVillas #CostaBlancaHomes #Alicante #AlicanteSpain #AlicanteProperty #AlicanteRealEstate
- **Benidorm**: #Benidorm #BenidormSpain #BenidormLife #BenidormLiving #BenidormProperty #BenidormRealEstate #BenidormVillas #BenidormHomes
- **Покупка недвижимости**: #SpainProperty #SpainRealEstate #SpanishProperty #SpanishRealEstate #PropertyInSpain #RealEstateSpain #BuyPropertySpain #PropertyForSaleSpain #HomesInSpain #HouseInSpain #VillaForSaleSpain #BuyVillaSpain #BuyAHouseInSpain #InvestInSpainProperty
- **Виллы**: #VillaSpain #VillasInSpain #SpanishVilla #LuxuryVilla #LuxuryVillas #ModernVilla #ModernVillas #ContemporaryVilla #DreamVilla #DreamHome #PrivateVilla #NewBuildVilla #NewBuildHome
- **Строительство**: #VillaConstruction #HouseConstruction #HomeConstruction #ConstructionSpain #BuildingInSpain #BuildInSpain #BuildYourHome #BuildYourDreamHome #CustomBuild #CustomHome #CustomHouse #TurnkeyConstruction #TurnkeyHome
- **Архитектура**: #VillaArchitecture #ArchitectureSpain #SpanishArchitecture #ModernArchitecture #ContemporaryArchitecture #ResidentialArchitecture #HomeArchitecture #ArchitectureDesign #ArchitecturalDesign #CustomArchitecture
- **Дизайн**: #VillaDesign #HouseDesign #HomeDesign #InteriorDesign #ExteriorDesign #ModernHomeDesign #LuxuryHomeDesign #MediterraneanDesign #MediterraneanArchitecture #ModernMediterranean #SpanishDesign
- **Lifestyle**: #SpainLifestyle #SpanishLifestyle #MediterraneanLifestyle #CostaBlancaLifestyle #MediterraneanLiving #LifeInSpain #LivingInSpain #MoveToSpain #RelocateToSpain #SpainDream #LiveByTheSea #CoastalLiving
- **Море/климат**: #SeaViewVilla #SeaViewHome #VillaByTheSea #HouseByTheSea #MediterraneanSea #MediterraneanHome #MediterraneanVilla #BeachHouse #CoastalHome #SunnySpain
- **Намерение покупателя**: #DreamHomeSpain #BuildYourDreamHome #OwnAHomeInSpain #YourHomeInSpain #PropertyInvestmentSpain #SecondHomeSpain #SecondHomeInSpain #HolidayHomeSpain #FamilyHomeSpain
- **Испанские**: #VillasEnEspaña #CasasEnEspaña #VillaEnEspaña #ComprarCasaEnEspaña #ComprarVilla #ConstruirCasa #ConstruirVilla #CasaAmedida #ViviendaNueva #InmobiliariaEspaña #ArquitecturaEspaña #DiseñoDeCasas #VidaEnEspaña #VivirEnEspaña #CasasDeLujo #VillasDeLujo

## 3. Готовые наборы

| Платформа / тип | Набор |
|---|---|
| IG — готовая вилла | #CostaBlancaVillas #VillaSpain #ModernVilla #CostaBlanca #Benidorm |
| IG — строительство | #VillaConstruction #BuildInSpain #CustomVilla #CostaBlanca #VillaBuilder |
| IG — архитектура | #VillaArchitecture #ModernArchitecture #SpanishArchitecture #CostaBlanca #VillaDesign |
| IG — дизайн | #VillaDesign #ModernHomeDesign #MediterraneanDesign #CostaBlanca #CustomHome |
| IG — lifestyle | #CostaBlancaLife #MediterraneanLifestyle #LifeInSpain #LiveByTheSea #CostaBlanca |
| IG — покупка | #BuyVillaSpain #VillaForSaleSpain #PropertyInSpain #CostaBlancaProperty #CostaBlanca |
| TikTok — строительство | #VillaConstruction #BuildInSpain #CustomVilla #CostaBlanca #Benidorm |
| TikTok — обзор виллы | #VillaSpain #ModernVilla #CostaBlancaVillas #Benidorm #DreamHome |
| TikTok — архитектура | #VillaArchitecture #ModernArchitecture #VillaDesign #CostaBlanca #SpanishArchitecture |
| TikTok — lifestyle | #CostaBlancaLife #LifeInSpain #MediterraneanLifestyle #BenidormLife #CoastalLiving |
| TikTok — покупка/строительство | #BuyVillaSpain #BuildYourDreamHome #PropertyInSpain #CostaBlancaProperty #CustomVilla |
| FB — готовая вилла | #CostaBlanca #VillaSpain #Benidorm |
| FB — строительство | #VillaConstruction #BuildInSpain #CostaBlanca |
| FB — архитектура | #VillaArchitecture #CostaBlanca #VillaDesign |
| FB — покупка | #PropertyInSpain #BuyVillaSpain #CostaBlanca |

## 4a. Гео-тег — выбор по реальному охвату (решение 2026-08-25, временное правило)

Владелец: заметил, что при выборе геолокации в форме публикации площадки
показывают собственные варианты гео-хештегов с числом постов (пример из
TikTok: `#costablancahomes` 886 постов, `#costablancasouth` 517,
`#costablancaspaines` 390, `#costablancarestaurants` 177 — вместо того тега,
что стоял в подписи по умолчанию). Решение: **для гео-части хештег-блока не
использовать фиксированный тег из §2/§3 вслепую** — на этапе публикации
смотреть, какие варианты предлагает сама площадка (поле геолокации/хештег
автокомплит), и выбирать тот, где реально максимум постов/реакций среди
релевантных вариантов Costa Blanca / Benidorm. Это не отменяет правило §4.6
("релевантность важнее популярности") — variants здесь все одинаково
релевантны (все про один и тот же регион), поэтому выбор по охвату внутри
них не противоречит правилу, а уточняет его для этого конкретного случая.
Статус: **временное правило, пока не проработано глубже** — владелец: "пока
что так, дальше к этому вернёмся".

**Гео-локация (поле Location) по умолчанию** — Бенидорм на всех площадках,
пока нет решения по конкретному объекту в другом районе Коста-Бланки (см.
`publishing_protocol_browser.md`, открытый вопрос 5).

## 4. Правила агента (алгоритм подбора)

1. Определи цель поста: продажа / строительство / архитектура / дизайн / lifestyle / процесс / готовый объект.
2. Определи географию: точный региональный тег — по умолчанию Benidorm; гео-часть
   хештег-блока подбирать по правилу §4a (максимальный охват среди предложенных
   площадкой вариантов), а не фиксированным списком.
3. Добавь продукт: 1–2 тега, прямо описывающих виллу/дом/строительство.
4. Добавь намерение: #BuyVillaSpain, #BuildInSpain, #PropertyInSpain и т.п.
5. Не копируй один блок под все публикации — набор меняется по содержанию.
6. Релевантность важнее популярности — не гнаться за миллионниками.
7. Для TikTok — еженедельно проверять тренды (Creative Center).
8. Не использовать нерелевантные viral-теги (#fyp #viral #explore).
9. Язык: международный контент — английский; локальный — испанский; русский — только для
   русскоязычной аудитории.
10. Фиксировать использованный набор и сравнивать охват/переходы/лиды.
11. TikTok — ориентир 5 тегов + ключевые слова в подписи/контенте.
12. Instagram — до 5 точных тегов, не превращать подпись в каталог.
13. Facebook — не переносить блок Instagram целиком; 1–3 самых точных тега.
