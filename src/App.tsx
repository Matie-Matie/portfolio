import { useRef } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Profile } from './sections/Profile'
import { Loadout } from './sections/Loadout'
import { Matches } from './sections/Matches'
import { Career } from './sections/Career'
import { Trophies } from './sections/Trophies'
import { Contact } from './sections/Contact'
import { gsap, ScrollTrigger, useGSAP, reducedMotionQuery } from './lib/motion'
import { startSmoothScroll, stopSmoothScroll } from './lib/scroll'

export default function App() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(`not ${reducedMotionQuery}`, () => {
        startSmoothScroll()
        // Everything tagged data-reveal slides in once, the first time it reaches the viewport.
        ScrollTrigger.batch('[data-reveal]', {
          start: 'top 88%',
          once: true,
          onEnter: (els) =>
            gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: 'snap', stagger: 0.08, overwrite: true }),
        })
        return () => stopSmoothScroll()
      })
    },
    { scope: root },
  )

  return (
    <div ref={root}>
      <a className="skip" href="#profile">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Loadout />
        <Matches />
        <Career />
        <Trophies />
        <Contact />
      </main>
    </div>
  )
}
