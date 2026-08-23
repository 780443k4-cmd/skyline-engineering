---
description: Работа с локальной библиотекой знаний: показать факты, добавить документ, проверить статус.
---

Запрос: $ARGUMENTS

Делегируй `knowledge-manager`. Используй индекс `01_KNOWLEDGE/00_INDEX/fact_index.json` и
`library_index.json`. Если пользователь прикладывает новый документ — проведи его через
конвейер ingestion (HASH → DUPLICATE CHECK → EXTRACT → CLASSIFY → INDEX → FACT EXTRACTION →
SOURCE RECORD).
