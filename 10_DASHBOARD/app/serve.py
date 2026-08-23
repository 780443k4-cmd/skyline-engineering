#!/usr/bin/env python3
"""
SKYLINE_LOCAL — локальный дашборд (installation_spec.md, раздел 35-37, 70).

Только localhost (127.0.0.1), никогда не биндится на публичный интерфейс.
Не требует установки зависимостей — только стандартная библиотека Python.

Запуск:
    python3 serve.py
    (или дважды кликнуть start_dashboard.bat из папки SKYLINE_LOCAL/10_DASHBOARD)

Дашборд откроется на http://127.0.0.1:8787/app/index.html
"""
import http.server
import os
import socket
import sys
import webbrowser

HOST = "127.0.0.1"
DASHBOARD_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # .../10_DASHBOARD


def find_free_port(start=8787, tries=20):
    for port in range(start, start + tries):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex((HOST, port)) != 0:
                return port
    return start


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DASHBOARD_ROOT, **kwargs)

    def log_message(self, fmt, *args):
        sys.stderr.write("[skyline-dashboard] " + (fmt % args) + "\n")


def main():
    port = find_free_port()
    url = f"http://{HOST}:{port}/app/index.html"
    httpd = http.server.HTTPServer((HOST, port), Handler)
    print(f"SKYLINE_LOCAL dashboard: {url}")
    print("Только этот компьютер (127.0.0.1). Ctrl+C для остановки.")
    try:
        webbrowser.open(url)
    except Exception:
        pass
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
