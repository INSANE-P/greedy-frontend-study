import type { Variants } from 'framer-motion'

const ease = [0.22, 0.61, 0.36, 1] as const

export const stagger = (
  staggerChildren = 0.08,
  delayChildren = 0.05,
): Variants => ({
  initial: {},
  active: {
    transition: { staggerChildren, delayChildren },
  },
})

export const rise: Variants = {
  initial: { opacity: 0, y: 16 },
  active: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

export const riseSm: Variants = {
  initial: { opacity: 0, y: 8 },
  active: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

export const fade: Variants = {
  initial: { opacity: 0 },
  active: { opacity: 1, transition: { duration: 0.6, ease } },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.92 },
  active: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
}

export const slideRight: Variants = {
  initial: { opacity: 0, x: -24 },
  active: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
}

export const slideLeft: Variants = {
  initial: { opacity: 0, x: 24 },
  active: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
}

// 14칸 주차 바가 좌→우로 채워지는 효과
export const fillBar: Variants = {
  initial: { opacity: 0, scaleX: 0 },
  active: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease },
  },
}
