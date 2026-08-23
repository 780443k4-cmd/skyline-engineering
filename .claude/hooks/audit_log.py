#!/usr/bin/env python3
"""
SKYLINE_LOCAL hook: AUDIT_LOG (installation_spec.md, разделы 38, 39, 64)

Детерминированный PostToolUse-хук. Дописывает одну строку JSON в локальный event log
за каждый значимый вызов инструмента. Никогда не отправляет ничего в облако, никогда не
пишет значения секретов (полный текст содержимого не сохраняется — только метаданные).
"""
import json
import os
import re
import sys
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LOG_DIR = os.path.join(ROOT, "08_AUDIT", "agent_logs")
LOG_FILE = os.path.join(LOG_DIR, "events.jsonl")

REDACT_KEYS = {"content", "new_string", "old_string"}
MAX_SNIPPET = 120


def redact(tool_input: dict) -> dict:
    out = {}
    for k, v in (tool_input or {}).items():
        if k in REDACT_KEYS and isinstance(v, str):
            out[k] = f"<{len(v)} chars omitted>"
        elif isinstance(v, str) and len(v) > MAX_SNIPPET:
            out[k] = v[:MAX_SNIPPET] + "…"
        else:
            out[k] = v
    return out


def main() -> int:
    try:
        event = json.load(sys.stdin)
    except Exception:
        return 0

    os.makedirs(LOG_DIR, exist_ok=True)

    record = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "tool_name": event.get("tool_name"),
        "tool_input": redact(event.get("tool_input", {})),
        "session_id": event.get("session_id"),
        "cwd": event.get("cwd"),
    }

    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")

    return 0


if __name__ == "__main__":
    sys.exit(main())
