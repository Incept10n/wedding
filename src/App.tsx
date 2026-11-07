import { useScale } from './lib/useScale'
import { Hero } from './sections/Hero'
import { Greeting } from './sections/Greeting'
import { Venue } from './sections/Venue'
import { Chronicle } from './sections/Chronicle'
import { DressCode } from './sections/DressCode'
import { Gifts } from './sections/Gifts'
import { Rsvp } from './sections/Rsvp'
import { Closing } from './sections/Closing'

export default function App() {
  useScale()

  return (
    <main className="page">
      <Hero />
      <Greeting />
      <Venue />
      <Chronicle />
      <DressCode />
      <Gifts />
      <Rsvp />
      <Closing />
    </main>
  )
}
