import { useEffect } from 'react'

export function useAutoHideCursor(active: boolean, idleMs = 2500) {
  useEffect(() => {
    if (!active) {
      document.body.style.cursor = ''
      return
    }

    let timer: number | undefined
    const arm = () => {
      document.body.style.cursor = ''
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        document.body.style.cursor = 'none'
      }, idleMs)
    }

    arm()
    window.addEventListener('mousemove', arm)
    return () => {
      window.removeEventListener('mousemove', arm)
      window.clearTimeout(timer)
      document.body.style.cursor = ''
    }
  }, [active, idleMs])
}
