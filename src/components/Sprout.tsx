type Props = {
  className?: string
}

export function Sprout({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 32 26"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M 16 26 L 16 16"
        stroke="#15803D"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 16 17 C 10 18, 3 13, 4 5 C 11 5, 16 11, 16 17 Z"
        fill="#86EFAC"
        stroke="#15803D"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M 16 17 C 22 18, 29 13, 28 5 C 21 5, 16 11, 16 17 Z"
        fill="#86EFAC"
        stroke="#15803D"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <ellipse cx="8" cy="8" rx="1.6" ry="0.9" fill="#DCFCE7" opacity="0.75" />
      <ellipse cx="24" cy="8" rx="1.6" ry="0.9" fill="#DCFCE7" opacity="0.75" />
    </svg>
  )
}
