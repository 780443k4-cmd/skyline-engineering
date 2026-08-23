# Контентные столпы

Владелец: KNOWLEDGE_MANAGER (см. `00_SYSTEM/permissions.md`)
Статус документа: PENDING_CONNECTION (реальные данные компании ещё не предоставлены)

## Как это работает

Каждый факт в этом файле должен иметь обязательные поля:

| Поле | Значение |
|---|---|
| FACT_ID | уникальный идентификатор, напр. PILLAR-001 |
| VALUE | сам факт |
| SOURCE | конкретная ссылка/документ/человек |
| SOURCE_TYPE | PRIMARY / OFFICIAL / THIRD_PARTY / INTERVIEW |
| DATE_ADDED | дата добавления |
| LAST_VERIFIED | дата последней проверки |
| STATUS | VERIFIED / PROVISIONAL / FACT_PENDING / OUTDATED / REJECTED |
| CONFIDENCE | HIGH / MEDIUM / LOW |
| OWNER | KNOWLEDGE_MANAGER |

Факт без источника **не может** иметь статус VERIFIED (раздел 3 спецификации).

## Текущие факты

_Фактов пока нет. Ниже — заготовка первой записи, которую KNOWLEDGE_MANAGER заполнит,
как только будут предоставлены реальные материалы (сайт, брендбук, презентации,
интервью с владельцем Skyline Engineering ES)._

```json
{
  "fact_id": "PILLAR-001",
  "value": null,
  "source": null,
  "source_type": null,
  "date_added": "2026-08-23",
  "last_verified": null,
  "status": "FACT_PENDING",
  "confidence": "LOW",
  "owner": "KNOWLEDGE_MANAGER"
}
```

## Как заполнить

Добавьте документы в `01_KNOWLEDGE/09_SOURCE_DOCUMENTS/` (PDF/DOCX/XLSX/CSV/TXT/MD) или
опишите факты прямо в чате — KNOWLEDGE_MANAGER проведёт их через конвейер:

```
LOCAL FILE → HASH → DUPLICATE CHECK → EXTRACT → CLASSIFY → INDEX → FACT EXTRACTION → SOURCE RECORD → KNOWLEDGE LIBRARY
```
