#!/usr/bin/env python3
"""
SKYLINE_LOCAL: обработка ошибок (installation_spec.md, раздел 60)

Утилита (не хук в строгом смысле, вызывается агентами через Bash) для переноса задачи в
02_TASKS/failed/ с записью ошибки — без бесконечных повторов. Использование:

    python3 .claude/hooks/failed_task_capture.py <task_id> <error_message> [--retry-used]

Правило: повторить не более 1 раза, если ошибка временная (transient); иначе сразу BLOCKED.
"""
import json
import os
import sys
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TASKS_DIR = os.path.join(ROOT, "02_TASKS")
ERROR_DIR = os.path.join(ROOT, "08_AUDIT", "errors")


def find_task_file(task_id: str):
    for col in ("running", "queued", "blocked", "review"):
        path = os.path.join(TASKS_DIR, col, f"{task_id}.json")
        if os.path.exists(path):
            return path, col
    return None, None


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 1

    task_id = sys.argv[1]
    error_message = sys.argv[2]
    retry_used = "--retry-used" in sys.argv[3:]

    os.makedirs(ERROR_DIR, exist_ok=True)
    os.makedirs(os.path.join(TASKS_DIR, "failed"), exist_ok=True)
    os.makedirs(os.path.join(TASKS_DIR, "blocked"), exist_ok=True)

    src_path, col = find_task_file(task_id)
    now = datetime.now(timezone.utc).isoformat()

    error_record = {
        "task_id": task_id,
        "error": error_message,
        "timestamp": now,
        "retry_used": retry_used,
    }
    with open(os.path.join(ERROR_DIR, f"{task_id}.json"), "w", encoding="utf-8") as f:
        json.dump(error_record, f, ensure_ascii=False, indent=2)

    if src_path:
        with open(src_path, encoding="utf-8") as f:
            task = json.load(f)
        task["status"] = "FAILED" if retry_used else "BLOCKED"
        task["error"] = error_message
        task["updated_at"] = now
        dest_col = "failed" if retry_used else "blocked"
        dest_path = os.path.join(TASKS_DIR, dest_col, f"{task_id}.json")
        with open(dest_path, "w", encoding="utf-8") as f:
            json.dump(task, f, ensure_ascii=False, indent=2)
        os.remove(src_path)
        print(f"Task {task_id} moved {col} -> {dest_col}")
    else:
        print(f"Task {task_id} file not found in active columns; error recorded only.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
