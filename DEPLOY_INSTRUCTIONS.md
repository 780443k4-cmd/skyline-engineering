# SKYLINE Engineering — установка и деплой

Актуальный исходник сайта (со всеми правками) лежит в `C:\SKYLINE_LOCAL`.
Старая рабочая копия в `Documents\Codex\...\work\skyline-engineering` больше не используется — можно удалить или заархивировать.

## 1. Локальный запуск (проверить перед деплоем)

```powershell
cd C:\SKYLINE_LOCAL
npm install
npm run dev
```

Открыть http://localhost:3000

## 2. Деплой на Vercel (вместо VPS/SSH/nginx)

Почему Vercel: это хостинг создателей Next.js, деплой через `git push`, SSL и CDN из коробки, без ручного SSH/systemd/nginx.

### 2.1. Git + GitHub

```powershell
cd C:\SKYLINE_LOCAL
git init
git add -A
git commit -m "Initial commit: SKYLINE Engineering site"
```

Затем на github.com → **New repository** (например `skyline-engineering`, приватный) → скопировать URL репозитория и выполнить:

```powershell
git remote add origin https://github.com/<ваш-аккаунт>/skyline-engineering.git
git branch -M main
git push -u origin main
```

(GitHub попросит войти — это делаете вы сами, я пароли не ввожу.)

### 2.2. Подключить Vercel

1. vercel.com → Sign Up → **Continue with GitHub** (вход через GitHub, без пароля).
2. **Add New... → Project** → выбрать репозиторий `skyline-engineering`.
3. Vercel сам определит Next.js — просто **Deploy**.

Через минуту сайт уже живёт на временном адресе `*.vercel.app`.

### 2.3. Переменные окружения

В Vercel: Project → **Settings → Environment Variables**, добавить (значения — из вашего текущего `.env` на старом сервере, я их не знаю и не должен знать):

- `NEXT_PUBLIC_SITE_URL` = `https://skylineengineering.es`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `CONTACT_INBOX_EMAIL`
- `CONTACT_FROM_EMAIL`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA4_ID` (если используется)
- `NEXT_PUBLIC_META_PIXEL_ID` (если используется)

После добавления — **Redeploy**.

### 2.4. Подключить домен skylineengineering.es

Project → **Settings → Domains** → добавить `skylineengineering.es` и `www.skylineengineering.es`.
Vercel покажет A/CNAME записи — прописать их у регистратора домена вместо текущих записей, указывающих на VPS. SSL-сертификат Vercel выпустит сам после проверки DNS (обычно от нескольких минут до пары часов).

После подтверждения работы нового сайта на домене — старый VPS (`skyline.service`, nginx) можно выключить.

## 3. Как обслуживать дальше

Любое изменение сайта — правки текста, фото, кода — делается локально в `C:\SKYLINE_LOCAL`, затем:

```powershell
cd C:\SKYLINE_LOCAL
npm run dev        # проверить локально на localhost:3000
git add -A
git commit -m "описание правки"
git push
```

`git push` — это и есть деплой. Vercel сам собирает и выкатывает новую версию за ~1 минуту, без SSH и ручных шагов.

## 4. Для Claude Code (продолжение работы)

- Источник правды — `C:\SKYLINE_LOCAL`. Именно туда вносить правки и оттуда пушить.
- Секреты (`RESEND_API_KEY` и т.п.) не хранятся в репозитории — только в Vercel Environment Variables и в локальном `.env.local` (в `.gitignore`).
- Регистрация/вход в GitHub и Vercel — только через пользователя (OAuth), пароли и создание аккаунтов от его имени не выполняются.
- Папка `deploy/` (nginx-конфиги, `skyline.service`) — наследие старой VPS-схемы, после переезда на Vercel не нужна, оставлена только для истории.
