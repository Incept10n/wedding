# AGENTS.md

Статический свадебный сайт: https://wedding.inceptech.ru

## Что это

Vite + React + TypeScript, собирается в nginx-образ. Бэкенда нет.

## Структура

```
src/
  App.tsx           # секции страницы
  main.tsx          # точка входа
  index.css         # глобальные стили, дизайн-токены в :root
  assets/           # изображения (импортируются из кода)
public/             # статика, отдаётся как есть (favicon и т.п.)
```

Изображения храним в репозитории (`src/assets/` для того, что проходит через
бандлер, `public/` — для того, что должно лежать по фиксированному URL).
Оптимизируем перед коммитом: фото — WebP/AVIF, до ~300 КБ на кадр.

## Команды

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Деплой

`.github/workflows/ci-front.yml`: push в `master` → сборка → `incept1on/wedding:front`
в Docker Hub. Rollout в кластере — вручную (`kubectl rollout restart deployment
frontend -n wedding`); в CI kubectl нет намеренно.

Инфраструктура — в `Incept10n/inceptech`, `apps/wedding/`.

## Готчи

- **Vite 8 не использовать.** В этом окружении `vite build` (rolldown native
  binding) падает с `Bus error (core dumped)`. Проект закреплён на Vite 7 +
  `@vitejs/plugin-react@5`. Не «обновляй» без локальной проверки сборки.
- Тег образа мутабельный (`:front`), поэтому без rollout restart новые поды
  не появятся, даже при `imagePullPolicy: Always`.
- В контейнере nginx слушает 80; TLS терминируется на edge-прокси
  (`nginx-inceptech-loadblalancer`), контейнер про сертификаты не знает.
