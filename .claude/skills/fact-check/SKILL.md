---
name: fact-check
description: Run the mandatory fact-check workflow on any substantive content draft before it goes to QUALITY_CONTROLLER. Use on every content/social/SEO draft that makes a factual claim.
---

# SKILL: FACT_CHECK

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Не допустить публикации непроверенных или выдуманных фактов.

## INPUT

Черновик контента.

## OUTPUT

Список утверждений с меткой VERIFIED / FACT_PENDING / REJECTED и ссылкой на источник для каждого VERIFIED.

## RULES

- DRAFT → FACT EXTRACTION → FACT MATCH (с `01_KNOWLEDGE/11_FACTS/`) → SOURCE CHECK → UNCERTAINTY CHECK → QC.
- Факт, который нельзя проверить → статус FACT_PENDING, никогда не 'заполнять пробел' выдумкой.
- Никогда не изобретать: цены, гарантии, сертификации, метрики, отзывы, разрешения.

## STOP CONDITION

Как только каждое фактическое утверждение промаркировано — передать в QUALITY_CONTROLLER.
