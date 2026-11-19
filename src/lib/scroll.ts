import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './motion'

let lenis: Lenis | null = null

/** Smooth scroll that shares GSAP's ticker, so ScrollTrigger and Lenis never drift. */
export function startSmoothScroll() {
  if (lenis) return lenis
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  const tick = (time: number) => lenis?.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  return lenis
}

export function stopSmoothScroll() {
  lenis?.destroy()
  lenis = null
}

export function scrollToTarget(target: string) {
  if (lenis) return void lenis.scrollTo(target, { offset: -16, duration: 1.4 })
  document.querySelector<HTMLElement>(target)?.scrollIntoView({ block: 'start' })
}
