import heroDesktop from '../assets/img/hero-desktop.webp'
import heroMobile from '../assets/img/hero-mobile.webp'
import petals from '../assets/img/petals-hero.webp'

export function Hero() {
  return (
    <section className="sec hero">
      <picture>
        <source media="(max-width: 900px)" srcSet={heroMobile} />
        <img
          className="hero__photo"
          src={heroDesktop}
          alt="Антон и Александра"
          fetchPriority="high"
        />
      </picture>

      <img className="sec__decor hero__decor" src={petals} alt="" aria-hidden="true" />

      <div className="sec__layer">
        <p className="hero__name">
          Антон и<br className="only-desktop" /> Александра
        </p>

        <span className="hero__rule" aria-hidden="true" />

        <p className="hero__date">21<br />04<br />27</p>

        <span className="hero__rule hero__rule--bottom" aria-hidden="true" />

        <p className="hero__subtitle">Наша свадьба</p>
      </div>
    </section>
  )
}
