import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP)

// Fast in, hard stop: the snap of a kill-feed entry.
CustomEase.create('snap', '0.16, 1, 0.3, 1')

export { gsap, ScrollTrigger, SplitText, useGSAP }

export const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia(reducedMotionQuery).matches
