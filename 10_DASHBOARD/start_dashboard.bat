@echo off
REM SKYLINE_LOCAL — запуск локального дашборда (только 127.0.0.1)
cd /d "%~dp0"
python app\serve.py
IF ERRORLEVEL 1 (
  echo.
  echo Python не найден в PATH. Установите Python 3 (python.org) и запустите снова,
  echo либо выполните вручную: py app\serve.py
  pause
)
