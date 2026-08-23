---
name: content-reuse
description: Check the content index for an equivalent existing asset before creating new content, and map how one source can become multiple derivative assets. Use before commissioning any new content or social asset.
---

# SKILL: CONTENT_REUSE

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Не регенерировать то, что уже существует; выжимать больше ценности из одного источника.

## INPUT

Запрос на новый контент + `01_KNOWLEDGE/00_INDEX/content_index.json`.

## OUTPUT

Либо ссылка на существующий пригодный актив, либо карта деривативов (PROJECT → CASE STUDY → INSTAGRAM → FACEBOOK → TIKTOK → STORIES → FAQ → SEO ARTICLE).

## RULES

- Сначала проверить индекс контента.
- Создавать производные только когда это реально полезно, не для галочки.

## STOP CONDITION

Найден переиспользуемый актив ИЛИ построена обоснованная карта деривативов.
