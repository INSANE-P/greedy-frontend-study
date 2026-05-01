import { useCallback, useEffect, useState } from 'react'

type Options = {
  onStart: () => void
  onAdvance: () => void
}

export function usePresentation({ onStart, onAdvance }: Options) {
  const [presenting, setPresenting] = useState(false)

  const start = useCallback(async () => {
    onStart()
    try {
      await document.documentElement.requestFullscreen()
    } catch {
      // browser may block fullscreen — still enable presentation mode for click-advance
    }
    setPresenting(true)
  }, [onStart])

  const stop = useCallback(async () => {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen()
      } catch {
        // ignore
      }
    }
    setPresenting(false)
  }, [])

  // mirror fullscreen state — ESC, F11, etc. all funnel through fullscreenchange
  useEffect(() => {
    const onChange = () => {
      if (!document.fullscreenElement) setPresenting(false)
    }
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  // click-to-advance, but never on interactive elements
  useEffect(() => {
    if (!presenting) return
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (!t) return
      if (t.closest('a, button, [data-no-advance]')) return
      onAdvance()
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [presenting, onAdvance])

  return { presenting, start, stop }
}
