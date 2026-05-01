import { useState } from 'react'

type Props = {
  className?: string
  alt?: string
}

/**
 * Renders /logo.svg from the public folder. If the file is missing or fails to
 * load, the component renders nothing — so it is safe to drop into layouts even
 * before the logo file has been added.
 */
export function Logo({ className = '', alt = 'Greedy' }: Props) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <img
      src="./logo.png"
      alt={alt}
      onError={() => setFailed(true)}
      draggable={false}
      className={`select-none rounded-full ${className}`}
    />
  )
}
