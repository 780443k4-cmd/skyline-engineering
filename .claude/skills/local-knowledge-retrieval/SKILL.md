---
name: local-knowledge-retrieval
description: Retrieve relevant facts and documents from the local SKYLINE_LOCAL Knowledge Library before considering any external/cloud lookup. Use whenever an agent needs company facts, prior research, or context for a task.
---

# SKILL: LOCAL_KNOWLEDGE_RETRIEVAL

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Отвечать на вопросы локальными знаниями раньше, чем облаком/интернетом.

## INPUT

Запрос (QUERY) и тип нужных данных (факт/документ/сводка).

## OUTPUT

RELEVANT DOCUMENTS → RELEVANT FACTS → короткий CONTEXT PACK (не вся библиотека).

## RULES

- Порядок: точный файл → локальный индекс (`00_INDEX/*.json`) → структурированная БД → полнотекстовый локальный поиск → векторный поиск (если есть) → внешний поиск только если реально необходимо.
- Модели передаются только релевантные выдержки, не вся библиотека.
- Если факт найден, но STATUS не VERIFIED — явно пометить его как PROVISIONAL/FACT_PENDING в ответе.

## STOP CONDITION

Как только собран достаточный context pack для ответа на задачу — не продолжать поиск ради полноты.
