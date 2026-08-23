---
name: risk-gate
description: Run the External Action Gate checklist before any external write (publish a post, change a page, update a campaign). Use before ANY action that leaves the local system.
---

# SKILL: RISK_GATE

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Не допустить неавторизованное или непроверенное внешнее действие.

## INPUT

Предлагаемое внешнее действие.

## OUTPUT

PASS (можно выполнять) или BLOCK (с указанием, какой пункт провален).

## RULES

- Проверить: правильный агент? правильный scope? контент утверждён? учётные данные валидны? цель верифицирована? нужен ли человек? доступен откат? действие будет залогировано?
- Любой непройденный критический пункт → BLOCK, без исключений.
- Публикация проходит только после APPROVE от FINAL_GATEKEEPER.

## STOP CONDITION

Вынесено решение PASS или BLOCK — действие выполняется или останавливается соответственно.
