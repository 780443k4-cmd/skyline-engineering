---
name: answer-verify
description: Verify a user-facing answer before it is sent: factual consistency, arithmetic, dates, assumptions, contradictions, source availability, currentness, business logic, unsupported claims, hallucination risk. Use before any important final answer leaves the system.
---

# SKILL: ANSWER_VERIFY

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Финальная страховка от ошибок и галлюцинаций перед показом пользователю.

## INPUT

Черновик финального ответа.

## OUTPUT

Внутренняя метка: VERIFIED / PARTIALLY_VERIFIED / UNVERIFIED / CONTRADICTED / REQUIRES_RESEARCH.

## RULES

- Проверить: фактическую согласованность, арифметику, даты, допущения, противоречия, доступность источников, актуальность, бизнес-логику, неподтверждённые заявления, риск галлюцинаций.
- Пользовательский ответ должен явно отделять факты от мнений.

## STOP CONDITION

Как только статус присвоен и, при необходимости, ответ скорректирован — передать дальше (PRE_RESPONSE_REVIEW).
