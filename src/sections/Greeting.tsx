import decorLeft from '../assets/img/side-left.webp'
import decorRight from '../assets/img/side-right.webp'
import mSideLeft from '../assets/img/m-side-left.webp'
import mSideRight from '../assets/img/m-side-right.webp'
import { Calendar } from '../components/Calendar'

export function Greeting() {
  return (
    <section className="sec greet">
      <picture>
        <source media="(max-width: 900px)" srcSet={mSideLeft} />
        <img
          className="sec__decor greet__decor-left"
          src={decorLeft}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <picture>
        <source media="(max-width: 900px)" srcSet={mSideRight} />
        <img
          className="sec__decor greet__decor-right"
          src={decorRight}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <div className="sec__layer">
        <h2 className="h-script greet__head">Дорогие родные<br />и друзья!</h2>

        <p className="t-body greet__text">
          Совсем скоро мы сделаем самый важный шаг в нашей жизни.
          <br />
          Нам очень хочется разделить радость этого особенного дня с вами!
        </p>

        <div className="greet__cal">
          <Calendar />
        </div>
      </div>
    </section>
  )
}
