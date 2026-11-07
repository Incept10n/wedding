import cornerLeft from '../assets/img/corner-left.webp'
import cornerRight from '../assets/img/corner-right.webp'
import mPhotoLeft from '../assets/img/m-photo-left.webp'
import mClusterRight from '../assets/img/m-cluster-right.webp'
import mClusterLeft from '../assets/img/m-cluster-left.webp'

import palaceDesktop from '../assets/img/venue-palace.webp'
import vinityDesktop from '../assets/img/venue-vinity.webp'
import palaceMobile from '../assets/img/m-venue-palace.webp'
import vinityMobile from '../assets/img/m-venue-vinity.webp'

export function Venue() {
  return (
    <section className="sec venue">
      <picture>
        <source media="(max-width: 900px)" srcSet={mPhotoLeft} />
        <img
          className="sec__decor venue__decor-left"
          src={cornerLeft}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <picture>
        <source media="(max-width: 900px)" srcSet={mClusterRight} />
        <img
          className="sec__decor venue__decor-right"
          src={cornerRight}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <img
        className="sec__decor venue__decor-extra"
        src={mClusterLeft}
        alt=""
        aria-hidden="true"
      />

      <div className="sec__layer">
        <h2 className="h-script venue__head">Место проведения</h2>

        <picture>
          <source media="(max-width: 900px)" srcSet={palaceMobile} />
          <img
            className="venue__photo venue__photo--palace"
            src={palaceDesktop}
            alt="Дворец бракосочетания № 2 на Фурштатской, 52"
            loading="lazy"
          />
        </picture>

        <p className="lnk-caption venue__caption venue__caption--palace">
          Дворец бракосочетания № 2 на Фурштатской, 52
        </p>

        <picture>
          <source media="(max-width: 900px)" srcSet={vinityMobile} />
          <img
            className="venue__photo venue__photo--vinity"
            src={vinityDesktop}
            alt="Ресторан Vinity на Фурштатской, 52А"
            loading="lazy"
          />
        </picture>

        <p className="lnk-caption venue__caption venue__caption--vinity">
          Ресторан Vinity на Фурштатской, 52А
        </p>
      </div>
    </section>
  )
}
