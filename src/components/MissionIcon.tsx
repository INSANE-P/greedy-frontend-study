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
          {/* Ball */}
          <circle cx="16" cy="16" r="11" />
          {/* Stitch curves */}
          <path d="M8 9 Q11 16 8 23" />
          <path d="M24 9 Q21 16 24 23" />
          {/* Cute face */}
          <circle cx="13" cy="14.5" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="19" cy="14.5" r="1.3" fill="currentColor" stroke="none" />
          <path d="M13 19 q3 2.4 6 0" />
        </svg>
      )
    case 'roulette':
      // Slot machine — 탐욕/카지노 톤
      return (
        <svg {...common} {...rest}>
          {/* Body */}
          <rect x="5" y="7" width="22" height="20" rx="2" />
          {/* Display window */}
          <rect x="9" y="11" width="14" height="8" rx="1" />
          {/* Three reels */}
          <circle cx="12.5" cy="15" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="16" cy="15" r="1.3" />
          <circle cx="19.5" cy="15" r="1.3" fill="currentColor" stroke="none" />
          {/* Coin tray */}
          <rect x="13" y="22" width="6" height="2.5" rx="0.5" />
          {/* Lever */}
          <line x1="27" y1="13" x2="29" y2="13" />
          <circle cx="29.5" cy="13" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'zombie':
      return (
        <svg {...common} {...rest}>
          {/* Round head with wavy bottom */}
          <path d="M6 16 a10 10 0 0 1 20 0 v9 l-3 -2 l-3 2 l-3 -2 l-3 2 l-3 -2 l-3 2 z" />
          {/* X eye (left) */}
          <line x1="10" y1="12.5" x2="13" y2="15.5" />
          <line x1="13" y1="12.5" x2="10" y2="15.5" />
          {/* Open eye (right) */}
          <circle cx="20" cy="14" r="1.5" fill="currentColor" stroke="none" />
          {/* Stitched mouth */}
          <path d="M11.5 20 L20.5 20" />
          <line x1="14" y1="19" x2="14" y2="21" />
          <line x1="16.5" y1="19" x2="16.5" y2="21" />
          <line x1="19" y1="19" x2="19" y2="21" />
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
          {/* Sparkle accents — leveled up */}
          <path d="M28 6 L28 9 M26.5 7.5 L29.5 7.5" />
          <path d="M4 26 L4 28.5 M3 27.25 L5 27.25" />
        </svg>
      )
    case 'free':
      // 4-point star with sparkle — 창작 시그널
      return (
        <svg {...common} {...rest}>
          <path d="M16 4 L18.5 13.5 L28 16 L18.5 18.5 L16 28 L13.5 18.5 L4 16 L13.5 13.5 Z" />
          <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
          {/* Tiny sparkle bottom-right */}
          <path d="M26 25 L26 28 M24.5 26.5 L27.5 26.5" />
        </svg>
      )
    case 'pokeball':
      return (
        <svg {...common} {...rest}>
          <circle cx="16" cy="16" r="11" />
          <path d="M5 16 H27" />
          <circle cx="16" cy="16" r="3.2" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
          {/* Top-left shine */}
          <path d="M9 10 q1 -1.2 3 -1.7" opacity="0.6" />
        </svg>
      )
  }
}
