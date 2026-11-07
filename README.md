# wedding

Свадебный сайт-визитка: https://wedding.inceptech.ru

Статический фронтенд (Vite + React + TypeScript), собранный в nginx-образ.

## Стек

- Vite 8 + React 19 + TypeScript
- Изображения лежат прямо в репозитории (`src/assets/` или `public/`)
- Прод — nginx внутри контейнера, TLS терминируется на edge-прокси

## Локальная разработка

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # сборка в dist/
npm run preview  # проверить прод-сборку
```

## Деплой

1. Push в `master` → GitHub Actions собирает образ и пушит `incept1on/wedding:front`
   (workflow `.github/workflows/ci-front.yml`).
2. Rollout в кластере — вручную:

```bash
kubectl rollout restart deployment frontend -n wedding
kubectl rollout status deployment frontend -n wedding
```

Секреты репозитория, без которых CI не отработает:

| secret | зачем |
|---|---|
| `DOCKER_USERNAME` | логин в Docker Hub |
| `DOCKER_PASSWORD` | пароль/токен Docker Hub |

Инфраструктура (Namespace, Deployment, Service, Certificate, edge-nginx)
находится в репозитории [Incept10n/inceptech](https://github.com/Incept10n/inceptech):
`apps/wedding/`, `apps/wedding.yaml`, `apps/nginx-load-balancer/wedding-certificate.yaml`.

DNS: A-запись `wedding.inceptech.ru` → IP ingress/edge-балансировщика
(управляется вручную в reg.ru).
