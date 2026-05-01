import type { SVGProps } from 'react'

type Variant =
  | 'baseball'
  | 'roulette'
  | 'zombie'
  | 'react'
  | 'react-adv'
  | 'free'
  | 'pokeball'

type Props = SVGProps<SVGSVGElement> & {
  variant: Variant
}

const common = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function MissionIcon({ variant, ...rest }: Props) {
  switch (variant) {
    case 'baseball':
      return (
        <svg {...common} {...rest}>
          <circle cx="16" cy="16" r="11" />
          <path d="M7 9 Q11 16 7 23" />
          <path d="M25 9 Q21 16 25 23" />
          <path d="M9 11 l1.4 0.6 M9 15 l1.4 0.4 M9 19 l1.4 -0.2 M9 22 l1.4 -0.8" />
          <path d="M23 11 l-1.4 0.6 M23 15 l-1.4 0.4 M23 19 l-1.4 -0.2 M23 22 l-1.4 -0.8" />
        </svg>
      )
    case 'roulette':
      return (
        <svg {...common} {...rest}>
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="2.4" />
          <path d="M16 5 L16 14" />
          <path d="M16 18 L16 27" />
          <path d="M5 16 L14 16" />
          <path d="M18 16 L27 16" />
          <path d="M8.2 8.2 L13 13" />
          <path d="M19 19 L23.8 23.8" />
          <path d="M23.8 8.2 L19 13" />
          <path d="M13 19 L8.2 23.8" />
        </svg>
      )
    case 'zombie':
      return (
        <svg {...common} {...rest}>
          {/* simple ghost / pacman-ghost shape */}
          <path d="M6 16 a10 10 0 0 1 20 0 v9 l-2.5 -2 l-2.5 2 l-2.5 -2 l-2.5 2 l-2.5 -2 l-2.5 2 l-2.5 -2 l-2.5 2 z" />
          <circle cx="12" cy="14" r="1.6" fill="currentColor" />
          <circle cx="20" cy="14" r="1.6" fill="currentColor" />
          <path d="M12 19 q2 1.5 4 0 q2 -1.5 4 0" />
        </svg>
      )
    case 'react':
      return (
        <svg {...common} {...rest}>
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
          <ellipse cx="16" cy="16" rx="11" ry="4.2" />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.2"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.2"
            transform="rotate(120 16 16)"
          />
        </svg>
      )
    case 'react-adv':
      return (
        <svg {...common} {...rest}>
          <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
          <ellipse cx="16" cy="16" rx="11" ry="4.2" />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.2"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.2"
            transform="rotate(120 16 16)"
          />
          {/* extra orbiting dots */}
          <circle cx="27" cy="16" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="5" cy="16" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'free':
      return (
        <svg {...common} {...rest}>
          <rect x="5" y="5" width="22" height="22" rx="2" />
          <path d="M11.5 12.5 q0 -3.5 4.5 -3.5 q4.5 0 4.5 3.5 q0 2.5 -3 3.5 q-1.5 0.5 -1.5 2.5" />
          <circle cx="16" cy="22" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'pokeball':
      return (
        <svg {...common} {...rest}>
          <circle cx="16" cy="16" r="11" />
          <path d="M5 16 H27" />
          <circle cx="16" cy="16" r="3.2" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}
