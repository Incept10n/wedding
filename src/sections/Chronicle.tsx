import petalsLeft from '../assets/img/petals-left.webp'
import petalsRight from '../assets/img/petals-chronicle.webp'
import waveDesktop from '../assets/icons/wavy-desktop.svg'
import waveMobile from '../assets/icons/wavy-mobile.svg'
import car from '../assets/icons/car-red.svg'
import rings from '../assets/icons/rings-red.svg'
import cocktail from '../assets/icons/cocktail-red.svg'
import heart from '../assets/icons/heart-red.svg'

const items = [
  { icon: car, time: '11:30', label: 'Сбор гостей', mod: 'tl--1' },
  { icon: rings, time: '12:00', label: 'Регистрация', mod: 'tl--2' },
  { icon: cocktail, time: '12:30', label: 'Банкет', mod: 'tl--3' },
  { icon: heart, time: '17:30', label: 'Завершение', mod: 'tl--4', break: true },
]

export function Chronicle() {
  return (
    <section className="sec chronicle">
      <img
        className="sec__decor chronicle__petals-left"
        src={petalsLeft}
        alt=""
        aria-hidden="true"
      />

      <img
        className="sec__decor chronicle__petals"
        src={petalsRight}
        alt=""
        aria-hidden="true"
      />

      <div className="sec__layer">
        <h2 className="h-script chronicle__head">Хроника праздника</h2>

        <picture>
          <source media="(max-width: 900px)" srcSet={waveMobile} />
          <img
            className="chronicle__wave"
            src={waveDesktop}
            alt=""
            aria-hidden="true"
          />
        </picture>

        {items.map((item) => (
          <div className={`tl ${item.mod}`} key={item.time}>
            <img className="tl__icon" src={item.icon} alt="" aria-hidden="true" />
            <p className="tl__time">{item.time}</p>
            <p className="tl__label">
              {item.label}
              {item.break && <br className="only-mobile" />}
              {item.break && ' праздника'}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
