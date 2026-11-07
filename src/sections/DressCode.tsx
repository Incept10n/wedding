const SWATCHES = [
  '#7e90a4',
  '#536b83',
  '#364b60',
  '#162d44',
  '#4b3327',
  '#8b5a3c',
  '#b5865a',
  '#a98d75',
]

export function DressCode() {
  return (
    <section className="sec dress">
      <div className="sec__layer">
        <h2 className="h-script dress__head">Дресс-код</h2>

        <p className="t-body dress__text">
          Пожалуйста, отдайте предпочтение классическому дресс-коду: костюмы и
          элегантные платья. Будем благодарны за поддержку.
          <br />
          <br />
          Ниже — цвета, которые помогут создать атмосферу нашего дня. Нам будет
          приятно, если вы поддержите палитру нашего праздника.
        </p>

        <div className="dress__swatches">
          {SWATCHES.map((color) => (
            <span
              className="dress__swatch"
              key={color}
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
