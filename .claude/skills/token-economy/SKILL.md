---
name: token-economy
description: Decide the cheapest viable execution path for a task before calling a model or a web tool: local script, local search, cheap model, standard model, or premium model. Use before ANY agent action that might call a model, web search, or external API.
---

# SKILL: TOKEN_ECONOMY

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Не тратить облачные вызовы/токены там, где хватает детерминированного кода или уже известных данных.

## INPUT

Описание задачи + доступные данные (локальные файлы, кэш, индекс).

## OUTPUT

Выбранный путь исполнения: NO_LLM / LOCAL_SCRIPT / LOCAL_SEARCH / CHEAP_MODEL / STANDARD_MODEL / PREMIUM_MODEL + обоснование в одну строку.

## RULES

- Иерархия: NO_LLM → LOCAL SCRIPT → LOCAL SEARCH → CHEAP MODEL → STANDARD MODEL → PREMIUM MODEL.
- Задать 6 вопросов из `00_SYSTEM/token_policy.md` перед выбором.
- Премиальная модель — только по явной эскалации SKYLINE_MASTER для P0/P1 задачи.
- MAX_TURNS=3, MAX_TOOL_CALLS=5, MAX_WEB_RESEARCH_CALLS=3 на задачу, если не расширено явно.

## STOP CONDITION

Как только найден самый дешёвый путь, дающий приемлемый результат — использовать его, не оптимизировать дальше.
