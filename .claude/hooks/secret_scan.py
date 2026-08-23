#!/usr/bin/env python3
"""
SKYLINE_LOCAL hook: SECRET PROTECTION (installation_spec.md, раздел 9 и 64)

Детерминированный PreToolUse-хук. Не вызывает модель. Сканирует контент, который агент
собирается записать (Write/Edit), на признаки секретов, и БЛОКИРУЕТ запись, если находит
похожее на пароль/ключ/токен/приватный ключ.

Claude Code передаёт JSON события в stdin. Ожидаемые поля: tool_name, tool_input
(с полями вроде file_path/content/new_string в зависимости от инструмента).

Exit code 0  -> разрешить.
Exit code 2  -> заблокировать (Claude Code показывает stderr агенту как причину блокировки).
"""
import json
import re
import sys

SECRET_PATTERNS = [
    (r"-----BEGIN [A-Z ]*PRIVATE KEY-----", "приватный ключ (PEM)"),
    (r"(?i)api[_-]?key\s*[:=]\s*['\"][A-Za-z0-9_\-]{16,}['\"]", "API key literal"),
    (r"(?i)secret[_-]?(key|token)\s*[:=]\s*['\"][A-Za-z0-9_\-]{16,}['\"]", "secret/token literal"),
    (r"sk-[A-Za-z0-9]{20,}", "похоже на секретный API-токен (sk-...)"),
    (r"(?i)password\s*[:=]\s*['\"][^'\"]{6,}['\"]", "пароль literal"),
    (r"AKIA[0-9A-Z]{16}", "AWS access key id"),
    (r"(?i)bearer\s+[A-Za-z0-9_\-\.]{20,}", "Bearer token literal"),
]


def extract_text(tool_input: dict) -> str:
    parts = []
    for key in ("content", "new_string", "old_string", "command", "file_text"):
        val = tool_input.get(key)
        if isinstance(val, str):
            parts.append(val)
    return "\n".join(parts)


def main() -> int:
    try:
        event = json.load(sys.stdin)
    except Exception:
        # Не удалось разобрать событие — не блокируем работу системы из-за самого хука.
        return 0

    tool_input = event.get("tool_input", {}) or {}
    text = extract_text(tool_input)
    if not text:
        return 0

    hits = []
    for pattern, label in SECRET_PATTERNS:
        if re.search(pattern, text):
            hits.append(label)

    if hits:
        sys.stderr.write(
            "SKYLINE SECRET_SCAN: запись заблокирована — похоже на секрет в содержимом: "
            + ", ".join(hits)
            + ". Секреты храните в переменных окружения / локальном хранилище секретов, "
              "не в файлах SKYLINE_LOCAL или промптах агентов (раздел 9 спецификации)."
        )
        return 2

    return 0


if __name__ == "__main__":
    sys.exit(main())
