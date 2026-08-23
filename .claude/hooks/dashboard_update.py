#!/usr/bin/env python3
"""
SKYLINE_LOCAL: DASHBOARD_UPDATE (installation_spec.md, разделы 35-38, 64)

Полностью детерминированный скрипт (без LLM). Пересобирает JSON-снапшоты для локального
дашборда из состояния файловой системы: доска задач, соцсети, лиды, аналитика, аудит,
токен-контроль. Можно вызывать как PostToolUse-хук или командой /skyline-dashboard,
а также вручную: `python3 .claude/hooks/dashboard_update.py`.
"""
import json
import os
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TASKS_DIR = os.path.join(ROOT, "02_TASKS")
DASHBOARD_DATA = os.path.join(ROOT, "10_DASHBOARD", "data")
AUDIT_LOG = os.path.join(ROOT, "08_AUDIT", "agent_logs", "events.jsonl")

BOARD_COLUMNS = ["inbox", "queued", "running", "blocked", "review", "completed", "failed"]

AGENTS = [
    "SKYLINE_MASTER", "TOKEN_GUARDIAN", "KNOWLEDGE_MANAGER", "SYSTEM_ADMIN",
    "SEO_STRATEGIST", "SEO_TECH", "CONTENT_ARCHITECT", "CONTENT_WRITER",
    "SOCIAL_STRATEGIST", "SOCIAL_CONTENT", "SOCIAL_ANALYST", "COMPETITOR_ANALYST",
    "LEAD_ANALYST", "QUALITY_CONTROLLER", "FINAL_GATEKEEPER",
]


def load_task_board():
    board = {}
    for col in BOARD_COLUMNS:
        col_dir = os.path.join(TASKS_DIR, col)
        tasks = []
        if os.path.isdir(col_dir):
            for fname in sorted(os.listdir(col_dir)):
                if fname.endswith(".json"):
                    try:
                        with open(os.path.join(col_dir, fname), encoding="utf-8") as f:
                            tasks.append(json.load(f))
                    except Exception:
                        pass
        board[col.upper()] = tasks
    return board


def load_audit_tail(n=50):
    if not os.path.exists(AUDIT_LOG):
        return []
    with open(AUDIT_LOG, encoding="utf-8") as f:
        lines = f.readlines()[-n:]
    out = []
    for line in lines:
        try:
            out.append(json.loads(line))
        except Exception:
            pass
    return out


def main():
    os.makedirs(DASHBOARD_DATA, exist_ok=True)
    now = datetime.now(timezone.utc).isoformat()

    board = load_task_board()
    audit_tail = load_audit_tail()

    system_status = {
        "generated": now,
        "agents": [{"name": a, "status": "CONFIGURED"} for a in AGENTS],
        "note": "status=CONFIGURED means the agent definition is installed; it has no persistent "
                "'online/offline' state between Claude Code sessions.",
    }

    task_board = {"generated": now, "columns": board}

    social_status = {
        "generated": now,
        "instagram": {"status": "PENDING_CONNECTION"},
        "facebook": {"status": "PENDING_CONNECTION"},
        "tiktok": {"status": "PENDING_CONNECTION"},
    }

    seo_sales = {
        "generated": now,
        "seo": {"status": "PENDING_DATA", "note": "No CMS/analytics connected yet."},
        "sales": {"status": "PENDING_DATA", "note": "No CRM connected yet; 06_LEADS is empty."},
    }

    activity_log = {"generated": now, "recent_events": audit_tail}

    token_control = {
        "generated": now,
        "tasks_executed": sum(len(v) for v in board.values()),
        "note": "Token/cost figures require agents to record estimates per task; none recorded yet.",
    }

    for name, obj in [
        ("system_status.json", system_status),
        ("task_board.json", task_board),
        ("social_status.json", social_status),
        ("seo_sales_status.json", seo_sales),
        ("activity_log.json", activity_log),
        ("token_control.json", token_control),
    ]:
        with open(os.path.join(DASHBOARD_DATA, name), "w", encoding="utf-8") as f:
            json.dump(obj, f, ensure_ascii=False, indent=2)

    print(f"Dashboard data refreshed at {now}")


if __name__ == "__main__":
    main()
