# AGENTS.md

Статический свадебный сайт: https://wedding.inceptech.ru

## Что это

Vite + React + TypeScript, собирается в nginx-образ. Бэкенда нет.

## Структура

```
src/
  App.tsx               # сборка страницы из секций
  main.tsx              # точка входа
  index.css             # все стили: шрифты, токены, секции, мобильный макет
  lib/useScale.ts       # --vw / --u: масштаб макета от clientWidth
  components/           # Calendar, Button
  sections/             # Hero, Greeting, Venue, Chronicle, DressCode, Gifts, Rsvp, Closing
  assets/fonts/         # Czizh, Miama Nueva, Activists (woff2)
  assets/img/           # фото и цветочный декор (WebP, экспорт из Figma)
  assets/icons/         # иконки и волнистые линии (SVG из Figma)
public/                 # статика по фиксированному URL: favicon.svg, og.jpg
```

### Как свёрстана страница

Макет из Figma перенесён один в один по координатам, а не «на глаз».
`src/index.css` задаёт переменную `--u` = 1px макета, и все размеры в CSS —
это `calc(<px из Figma> * var(--u))`. `--u` считается от `clientWidth`
(в `useScale`), потому что `100vw` включает ширину скроллбара и постер уезжает.

- Десктопный макет — холст 1440×4216 (`Frame 4994`), мобильный — 390×3592
  (`Frame 37`), переключение на `@media (max-width: 900px)`.
- Каждая секция — `position: relative` с фиксированной высотой из макета,
  элементы внутри позиционированы абсолютно. Декор (`sec__decor`, z-index 1)
  выходит за границы секции и перекрывается контентом (`sec__layer`, z-index 2).
- Ширины текстовых блоков тоже заданы в `--u`, поэтому переносы строк
  одинаковые на любой ширине экрана. Это осознанный «постерный» подход:
  страница масштабируется целиком, а не переливается.

### Шрифты

Все три шрифта из макета лежат в репозитории (`src/assets/fonts`, woff2):

| Figma | CSS | Где используется |
|---|---|---|
| `Czizh` `Body` | `--font-body` | основной текст, имена, даты, кнопки |
| `Miama Nueva` `Medium` | `--font-display` | каллиграфические заголовки |
| *цифры календаря* | `--font-digits` | цифры календаря |

С цифрами календаря отдельная история: в макете стоит `activistka`, но самого
шрифта нет ни на машине, ни в файле Figma — он рендерится системным светлым
геометрическим sans. Поэтому `--font-digits` = **Jost 400** (Google Fonts),
подобранный по начертанию. Если появится настоящая `activistka` — меняется
одна строка в `:root` + `@font-face`.

Лицензии: Czizh — SIL OFL 1.1, Miama Nueva — свободная (LaTeX-пакет),
Jost — SIL OFL 1.1.

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
- **`npm run lint` (oxlint) падает с `Bus error (core dumped)`** на этой машине —
  та же беда с нативными бинарниками, что и у Vite 8. Типы проверяются в
  `npm run build` (`tsc -b`), им и пользуйся.
