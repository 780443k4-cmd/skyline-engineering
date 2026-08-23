# SKYLINE Engineering — установка и автодеплой на Hetzner

Решение: сервер и домен остаются как есть (Hetzner `167.233.221.39`, `skylineengineering.es`, DNS, nginx, `skyline.service` — ничего из этого не трогаем). Меняется только сам процесс выкладки: вместо ручного ZIP/SSH — `git push`, а сервер обновляется сам через GitHub Actions.

Актуальный исходник сайта (со всеми правками) — в `C:\SKYLINE_LOCAL`.

## 1. Локальный запуск (проверить перед деплоем)

```powershell
cd C:\SKYLINE_LOCAL
npm install
npm run dev
```

Открыть http://localhost:3000

## 2. Разовая настройка автодеплоя

Нужно сделать один раз. Дальше — просто `git push`.

### 2.1. GitHub-репозиторий

```powershell
cd C:\SKYLINE_LOCAL
git init
git add -A
git commit -m "Initial commit: SKYLINE Engineering site"
```

На github.com → **New repository** (приватный, например `skyline-engineering`) → затем:

```powershell
git remote add origin https://github.com/<ваш-аккаунт>/skyline-engineering.git
git branch -M main
git push -u origin main
```

### 2.2. Ключ «GitHub Actions → сервер»

Этим ключом Actions будет заходить по SSH на ваш сервер, чтобы обновлять код. Выполнить локально:

```powershell
ssh-keygen -t ed25519 -f $env:USERPROFILE\.ssh\skyline_deploy -N '""'
```

Публичный ключ добавить на сервер (замените `user` на того, кем вы обычно заходите на сервер по SSH):

```powershell
type $env:USERPROFILE\.ssh\skyline_deploy.pub | ssh user@167.233.221.39 "cat >> ~/.ssh/authorized_keys"
```

Приватный ключ (`type $env:USERPROFILE\.ssh\skyline_deploy` — весь текст, включая `-----BEGIN...` и `-----END...`) добавить в GitHub: репозиторий → **Settings → Secrets and variables → Actions → New repository secret**:

- `HETZNER_SSH_KEY` = содержимое приватного ключа
- `HETZNER_SSH_HOST` = `167.233.221.39`
- `HETZNER_SSH_USER` = ваш SSH-пользователь на сервере

### 2.3. Ключ «сервер → GitHub» (чтобы сервер мог скачать приватный репозиторий)

На сервере:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/skyline_pull -N ""
cat ~/.ssh/skyline_pull.pub
```

Вывод команды добавить в GitHub: репозиторий → **Settings → Deploy keys → Add deploy key** (без права записи, только чтение).

На сервере прописать, чтобы git использовал именно этот ключ для github.com:

```bash
cat >> ~/.ssh/config << 'EOF'
Host github.com
  IdentityFile ~/.ssh/skyline_pull
  IdentitiesOnly yes
EOF
```

### 2.4. Первичная привязка папки на сервере к git

Сервер уже содержит собранный сайт в `/var/www/skyline-engineering` (из старого ручного деплоя). Разово превратить её в git-репозиторий:

```bash
cd /var/www/skyline-engineering
sudo git init
sudo git remote add origin git@github.com:<ваш-аккаунт>/skyline-engineering.git
sudo git fetch origin main
sudo git reset --hard origin/main
```

`.env.production` и другие файлы вне git (см. `.gitignore`) при этом не трогаются — `.env.production` на сервере остаётся как есть.

### 2.5. Разрешить автоматический перезапуск сервиса без пароля

Если заходите на сервер не под root:

```bash
echo "$(whoami) ALL=(ALL) NOPASSWD: /bin/systemctl restart skyline, /usr/bin/npm, /usr/bin/git" | sudo tee /etc/sudoers.d/skyline-deploy
```

## 3. Как обслуживать дальше

Любая правка — текст, фото, код — делается локально в `C:\SKYLINE_LOCAL`, затем:

```powershell
cd C:\SKYLINE_LOCAL
npm run dev        # проверить локально на localhost:3000
git add -A
git commit -m "описание правки"
git push
```

`git push` — и есть деплой. GitHub Actions сам зайдёт на сервер, обновит код, пересоберёт и перезапустит `skyline.service`. Прогресс можно посмотреть на GitHub: репозиторий → вкладка **Actions**.

## 4. Для Claude Code (продолжение работы)

- Источник правды — `C:\SKYLINE_LOCAL`. Правки вносятся туда и пушатся.
- Сервер, домен, DNS, nginx, `skyline.service` — без изменений, тот же Hetzner-хостинг, что был.
- Секреты (`RESEND_API_KEY` и т.п.) живут только в `.env.production` на сервере и в локальном `.env.local` (в `.gitignore`) — в репозитории и в GitHub Actions их нет, кроме SSH-ключей деплоя.
- Файл автодеплоя — `.github/workflows/deploy.yml`, срабатывает на каждый push в `main`, ничего дополнительно запускать не нужно.
- Регистрация/вход в GitHub — только через пользователя, пароли и создание аккаунтов от его имени не выполняются.
