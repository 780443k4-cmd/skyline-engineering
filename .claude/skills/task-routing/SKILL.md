---
name: task-routing
description: Route an incoming task to the correct owning agent(s) per the role matrix, and set its board state and priority. Use whenever a new task enters the inbox.
---

# SKILL: TASK_ROUTING

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Гарантировать, что задачу решает правильный агент по правильной цене.

## INPUT

Новая задача (заголовок, описание, источник).

## OUTPUT

Запись задачи с TASK_ID/OWNER_AGENT/PRIORITY/STATUS, помещённая в `02_TASKS/queued/`.

## RULES

- Сверяться со строгой ролевой матрицей (`00_SYSTEM/permissions.md`) — ни один агент не берёт на себя чужую роль.
- Присвоить приоритет через SALES_IMPACT.
- Определить минимальный workflow (не задействовать лишних агентов).

## STOP CONDITION

Задача поставлена в очередь с owner и priority.
