import branchLeft from '../assets/img/branch-left.webp'
import branchRight from '../assets/img/branch-right.webp'
import mArcLeft from '../assets/img/m-arc-left.webp'
import mArcRight from '../assets/img/m-arc-right.webp'

import plane from '../assets/icons/airplane-dark.svg'
import house from '../assets/icons/house-dark.svg'
import car from '../assets/icons/car-dark.svg'
import gift from '../assets/icons/gift-dark.svg'

import { Button } from '../components/Button'

export const WISHLIST_URL = 'https://followish.io/mywishlist/jdflfrajzjqrji'

export function Gifts() {
  return (
    <section className="sec gifts">
      <picture>
        <source media="(max-width: 900px)" srcSet={mArcLeft} />
        <img
          className="sec__decor gifts__decor-left"
          src={branchLeft}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <picture>
        <source media="(max-width: 900px)" srcSet={mArcRight} />
        <img
          className="sec__decor gifts__decor-right"
          src={branchRight}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <div className="sec__layer">
        <h2 className="h-script gifts__head">Подарки</h2>

        <p className="t-body gifts__text gifts__text--1">
          Нам будет очень приятно, если ваш подарок поможет нам воплотить мечты
          в жизнь. Мы с благодарностью примем ваш вклад — и обещаем
          распорядиться им с любовью и смыслом.
        </p>

        <p className="t-body gifts__text gifts__text--2">
          Если вам ближе выбрать что-то конкретное — загляните в наш вишлист или
          напишите нам лично, и мы подскажем, что нас порадует.
        </p>
      </div>

      <img
        className="gifts__icon gifts__icon--plane"
        src={plane}
        alt=""
        aria-hidden="true"
      />
      <img
        className="gifts__icon gifts__icon--house"
        src={house}
        alt=""
        aria-hidden="true"
      />
      <img
        className="gifts__icon gifts__icon--gift"
        src={gift}
        alt=""
        aria-hidden="true"
      />
      <img
        className="gifts__icon gifts__icon--car"
        src={car}
        alt=""
        aria-hidden="true"
      />

      <div className="btn-wrap--gifts">
        <Button variant="wishlist" href={WISHLIST_URL}>
          Вишлист
        </Button>
      </div>
    </section>
  )
}
