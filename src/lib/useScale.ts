import { useEffect } from 'react'

/**
 * Макет свёрстан в координатах Figma (десктоп 1440px, мобильный 390px)
 * и масштабируется целиком через переменную --u.
 *
 * Считаем её от `clientWidth` (без ширины скроллбара), иначе на десктопе
 * `100vw` даёт лишние ~15px и постер уезжает вправо.
 */
export function useScale() {
  useEffect(() => {
    const root = document.documentElement

    const update = () => {
      root.style.setProperty('--vw', `${root.clientWidth}px`)
    }

    update()

    let frame = 0
    const onResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('orientationchange', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
      root.style.removeProperty('--vw')
    }
  }, [])
}
