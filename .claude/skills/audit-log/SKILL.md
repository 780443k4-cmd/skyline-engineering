---
name: audit-log
description: Append a structured event to the local audit trail for any significant action (task change, content decision, published action). Use after any action worth remembering — this is deterministic local logging, not a model call.
---

# SKILL: AUDIT_LOG

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Обеспечить полную прослеживаемость: кто, что, почему, с каким результатом.

## INPUT

Событие: TIMESTAMP/TASK_ID/AGENT/ACTION/REASON/INPUT_REFERENCE/OUTPUT_REFERENCE/STATUS.

## OUTPUT

Строка/запись в `08_AUDIT/agent_logs/` (и в `08_AUDIT/publications/` для внешних публикаций: ACTION_ID/AGENT/TIME/PLATFORM/OBJECT/OLD_STATE/NEW_STATE/APPROVAL/RESULT).

## RULES

- Логи только локальные, никогда не загружаются в облако.
- Никогда не записывать значения секретов.

## STOP CONDITION

Событие записано.
