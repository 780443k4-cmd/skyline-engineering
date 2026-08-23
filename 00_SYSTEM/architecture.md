# SKYLINE_LOCAL — Архитектура системы

Версия: 2.0 · Источник: `installation_spec.md` (загруженный сценарий SKYLINE_CLAUDE_LOCAL_INSTALLER_v2)
Компания: Skyline Engineering ES

## Принцип «local-first»

Claude Code/Cowork всё равно обращается к облачной модели Anthropic для рассуждений —
это техническое ограничение, которое сценарий признаёт явно (раздел «IMPORTANT ARCHITECTURE TRUTH»).
«Local-first» здесь означает:

- все данные, файлы, память, кэш, логи, состояние задач и дашборд хранятся **только на этом компьютере**,
  в папке `SKYLINE_LOCAL/`;
- в облако уходит **только необходимый минимум** контекста для конкретного вызова модели —
  не вся библиотека, не весь репозиторий, не вся история;
- всё, что можно посчитать/отсортировать/проверить детерминированным скриптом — считается локально,
  без обращения к модели.

## Корневая структура

```
SKYLINE_LOCAL/
  00_SYSTEM/        — политики, спецификация, агенты (описания), скрипты, install_report
  01_KNOWLEDGE/      — единый источник истины (Knowledge Library)
  02_TASKS/          — доска задач (inbox → queued → running → blocked → review → completed/failed)
  03_CONTENT/        — контент: drafts → approved → published → archive
  04_ANALYTICS/      — сырые/нормализованные данные аналитики, отчёты
  05_SOCIAL/         — соцсети: assets/drafts/scheduled/published/performance
  06_LEADS/          — лиды: raw/normalized/reports
  07_COMPETITORS/    — конкурентная разведка: current/archive
  08_AUDIT/          — журнал действий и решений (audit trail)
  09_CACHE/          — кэш исследований, сводок, API-ответов, эмбеддингов
  10_DASHBOARD/      — локальный дашборд (app + data + exports)
  11_BACKUPS/        — резервные копии конфигурации перед изменениями
  .claude/
    agents/          — 15 агентов (реальные субагенты Claude Code, если папка открыта как проект)
    skills/          — 15 переиспользуемых скиллов
    commands/        — 11 слэш-команд /skyline-*
    hooks/           — детерминированные локальные скрипты (логирование, защита секретов)
    settings.json    — конфигурация hooks
```

## Поток данных

```
ЛОКАЛЬНЫЙ ФАЙЛ → HASH → DUPLICATE CHECK → EXTRACT → CLASSIFY → INDEX → FACT EXTRACTION → SOURCE RECORD → KNOWLEDGE LIBRARY
```

```
QUERY → RELEVANT DOCUMENTS → RELEVANT FACTS → SHORT CONTEXT PACK → (только теперь) MODEL CALL
```

## Кто чем владеет

15 агентов работают по строгой ролевой матрице (см. `permissions.md`), общая память — только
`01_KNOWLEDGE/`. Ни один агент не хранит собственную копию фактов о компании.

## Известные ограничения этой установки

- Реальные факты о Skyline Engineering ES (услуги, УТП, аудитория, бренд) **не были предоставлены**
  на момент установки → все карточки Knowledge Library имеют статус `FACT_PENDING`.
- Интеграции с сайтом/CRM/соцсетями **не подключены** (нет учётных данных) → статус
  `PENDING_CONNECTION` для всех внешних систем, публикация невозможна до подключения.
- Установка выполнена в изолированной облачной рабочей области Cowork и переносится на
  диск C: пользователя через локальный мост (device bridge) сразу после получения доступа к папке.
