import heart from '../assets/icons/heart-red-small.svg'

/** Апрель 2027. Понедельник — первая колонка, 1 апреля — четверг. */
const OFFSET = 3
const DAYS = 30
const HIGHLIGHT = 21

const cells: Array<number | null> = [
  ...Array.from({ length: OFFSET }, () => null),
  ...Array.from({ length: DAYS }, (_, i) => i + 1),
  null,
  null,
]

export function Calendar() {
  return (
    <div className="cal">
      <div className="cal__head">
        <span className="cal__title">Апрель 2027</span>
      </div>

      <div className="cal__grid">
        {cells.map((day, index) => (
          <div
            className={day === HIGHLIGHT ? 'cal__cell cal__cell--day' : 'cal__cell'}
            key={index}
          >
            {day === HIGHLIGHT && (
              <img className="cal__heart" src={heart} alt="" aria-hidden="true" />
            )}
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}
