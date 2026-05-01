import { useEffect, useState } from 'react'

type Props = {
  running: boolean
  visible: boolean
}

export function PresentationTimer({ running, visible }: Props) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!running) {
      setSeconds(0)
      return
    }
    const id = window.setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
    return () => window.clearInterval(id)
  }, [running])

  if (!running || !visible) return null

  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`

  return (
    <div className="pointer-events-none fixed top-6 right-6 z-30 border border-line bg-card/80 px-3 py-1.5 font-mono text-sm tabular-nums tracking-widest text-sub backdrop-blur-sm md:top-8 md:right-10 md:text-base">
      {formatted}
    </div>
  )
}
