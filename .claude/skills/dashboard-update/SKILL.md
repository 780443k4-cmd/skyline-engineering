---
name: dashboard-update
description: Write the current state of tasks, social, SEO, sales, and token/cloud usage into the local dashboard data files. Use after any state change that the dashboard should reflect (task moved, content published, metrics refreshed). Purely deterministic — never calls a model.
---

# SKILL: DASHBOARD_UPDATE

Часть общего набора из 15 переиспользуемых скиллов SKYLINE_LOCAL (раздел 62 спецификации).
Скиллы не считаются отдельными агентами и доступны всем 15 агентам в рамках их роли.

## PURPOSE

Держать локальный дашборд синхронизированным с реальным состоянием системы без обращения к модели.

## INPUT

Изменившееся состояние (задача/факт/метрика).

## OUTPUT

Обновлённые JSON-файлы в `10_DASHBOARD/data/`.

## RULES

- Чисто детерминированная операция — не вызывает LLM.
- Состояние дашборда никогда не отправляется в облако.
- Секреты никогда не пишутся в файлы дашборда.

## STOP CONDITION

Файлы данных дашборда записаны и отражают текущее состояние.
