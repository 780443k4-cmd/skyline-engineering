---
name: sales-impact
description: Estimate the sales/lead impact of a proposed action before it is prioritized. Use when scoring any marketing, SEO, or social action for the task board.
---

# SKILL: SALES_IMPACT

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Держать систему сфокусированной на квалифицированных лидах, а не на активности ради активности.

## INPUT

Предлагаемое действие.

## OUTPUT

Оценка PRIORITY = BUSINESS_IMPACT × URGENCY × CONFIDENCE ÷ COST, нормализованная 1-10, с явным указанием, что это оценка.

## RULES

- Первичный KPI — QUALIFIED LEADS, не тщеславные метрики.
- P0 (production/security/data loss) > P1 (high-value sales/SEO) > P2 (planned growth) > P3 (optimization) > P4 (nice-to-have).
- TOKEN_GUARDIAN может отложить P3/P4 при нагрузке на ресурсы.

## STOP CONDITION

Оценка выставлена и передана в очередь задач (`02_TASKS/`).
