import { useRef } from 'react'
import { hero, site } from '../content'
import { ArrowDown } from '../components/Icons'
import { gsap, SplitText, useGSAP, reducedMotionQuery } from '../lib/motion'
import { scrollToTarget } from '../lib/scroll'

/**
 * Media-day hero: the cutout stands in a red radial spotlight, the name card
 * sits over the jersey like a roster graphic, and HUD readouts frame the corners.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(`not ${reducedMotionQuery}`, () => {
        const name = SplitText.create('.hero__name-line', { type: 'chars', mask: 'chars' })

        gsap
          .timeline({ defaults: { ease: 'snap' } })
          .from('.hero__glow', { scale: 0.6, opacity: 0, duration: 1.4 })
          .from('.hero__ghost', { opacity: 0, letterSpacing: '0.4em', duration: 1.4 }, 0)
          .from('.hero__portrait', { yPercent: 12, opacity: 0, duration: 1.2 }, 0.15)
          .from(name.chars, { yPercent: 110, duration: 0.8, stagger: 0.03 }, 0.55)
          .from('.hero__role', { opacity: 0, x: -24, duration: 0.7 }, 0.9)
          .from('.hero__lede, .hero__tag', { opacity: 0, y: 12, duration: 0.7, stagger: 0.08 }, 1)
          .from('.hud-corner', { opacity: 0, scale: 0.9, duration: 0.6, stagger: 0.06 }, 1.05)
          .from('.hero__cue', { opacity: 0, duration: 0.6 }, 1.3)

        // On the way out the portrait lags behind the copy, which sells the depth.
        gsap.timeline({
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })
          .to('.hero__portrait', { yPercent: 10, ease: 'none' }, 0)
          .to('.hero__copy', { yPercent: -30, opacity: 0, ease: 'none' }, 0)
          .to('.hero__ghost', { xPercent: -8, ease: 'none' }, 0)

        return () => name.revert()
      })
    },
    { scope: root },
  )

  return (
    <section className="hero" id="top" ref={root} aria-labelledby="hero-name">
      <div className="hero__frame">
        <div className="hero__glow" aria-hidden />
        <div className="hero__scan" aria-hidden />
        <p className="hero__ghost display" aria-hidden>
          {site.name}
        </p>

        <img
          className="hero__portrait"
          src="/images/portrait.webp"
          srcSet="/images/portrait-640.webp 640w, /images/portrait.webp 1200w"
          sizes="(max-width: 700px) 92vw, 640px"
          width={1200}
          height={1213}
          alt="Reymart Edra in a red esports jersey, arms crossed, smiling"
          fetchPriority="high"
        />

        <dl className="hero__hud">
          {hero.hud.map((item, i) => (
            <div key={item.label} className={`hud-corner hud-corner--${i}`}>
              <dt className="hud">{item.label}</dt>
              <dd>
                {item.label === 'Status' && <span className="live-dot" aria-hidden />}
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="hero__copy">
          <p className="hero__tag hud">
            <span className="hero__tag-chip">{hero.tag}</span>
            {site.team}
          </p>
          <h1 className="hero__name display" id="hero-name">
            <span className="hero__name-line">{site.fullName}</span>
            <span className="hero__role">{site.title}</span>
          </h1>
          <p className="hero__lede">{hero.lede}</p>
        </div>

        <a
          className="hero__cue hud"
          href="#profile"
          onClick={(e) => {
            e.preventDefault()
            scrollToTarget('#profile')
          }}
        >
          <ArrowDown width={14} height={14} />
          Scroll to load in
        </a>
      </div>
    </section>
  )
}
