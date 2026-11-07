import { Button } from '../components/Button'

export const RSVP_URL = 'https://forms.yandex.ru/u/6aeb1a302c4f89a301edb553'

export function Rsvp() {
  return (
    <section className="sec rsvp">
      <div className="sec__layer">
        <h2 className="h-script rsvp__head">Анкета гостя</h2>

        <p className="t-body rsvp__text">
          Нам важно знать о ваших пожеланиях
          <br />
          Пожалуйста, заполните анкету гостя — это поможет нам создать для вас
          максимально комфортную атмосферу. Будем благодарны!
        </p>
      </div>

      <div className="btn-wrap--rsvp">
        <Button variant="form" href={RSVP_URL}>
          Анкета гостя
        </Button>
      </div>
    </section>
  )
}
