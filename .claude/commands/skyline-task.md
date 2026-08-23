---
description: Создать новую задачу Skyline и провести её через TASK_ROUTING. Аргумент: описание задачи.
---

Задача пользователя: $ARGUMENTS

Примени скилл `task-routing`: определи владеющего агента по ролевой матрице
(`00_SYSTEM/permissions.md`), оцени приоритет через `sales-impact`, запиши задачу в
`SKYLINE_LOCAL/02_TASKS/queued/` в формате из раздела 37 спецификации (task_id, title, agent,
status, priority, created_at, token_budget...). Не выполняй саму задачу — только поставь её
в очередь и покажи, кому она назначена и почему.
