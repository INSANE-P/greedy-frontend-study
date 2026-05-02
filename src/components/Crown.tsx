type Variant = 'gold' | 'mint'

type Props = {
  variant: Variant
  className?: string
}

const palette: Record<Variant, { fill: string; stroke: string; jewel: string }> = {
  gold: { fill: '#FCD34D', stroke: '#B45309', jewel: '#FFF8DB' },
  mint: { fill: '#1FB484', stroke: '#0F7A5A', jewel: '#DCFCE7' },
}

export function Crown({ variant, className = '' }: Props) {
  const c = palette[variant]
  return (
    <svg
      viewBox="0 0 26 20"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 16 L5 7 L10 11 L13 3 L16 11 L21 7 L23 16 Z"
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="15"
        width="20"
        height="3"
        rx="0.6"
        fill={c.fill}
        stroke={c.stroke}
        strokeWidth="1"
      />
      <circle
        cx="5"
        cy="7"
        r="1.5"
        fill={c.jewel}
        stroke={c.stroke}
        strokeWidth="0.7"
      />
      <circle
        cx="13"
        cy="3"
        r="1.8"
        fill={c.jewel}
        stroke={c.stroke}
        strokeWidth="0.7"
      />
      <circle
        cx="21"
        cy="7"
        r="1.5"
        fill={c.jewel}
        stroke={c.stroke}
        strokeWidth="0.7"
      />
    </svg>
  )
}
