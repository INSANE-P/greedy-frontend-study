import { useEffect, useRef, useState, useCallback } from 'react'

export function useSectionNav(total: number, disabled = false) {
  const [active, setActive] = useState(0)
  const lockRef = useRef(false)
  const disabledRef = useRef(disabled)

  useEffect(() => {
    disabledRef.current = disabled
  }, [disabled])

  const goTo = useCallback(
    (idx: number) => {
      const root = document.getElementById('root')
      if (!root) return
      const clamped = Math.max(0, Math.min(total - 1, idx))
      if (lockRef.current) return
      lockRef.current = true
      root.scrollTo({ top: clamped * window.innerHeight, behavior: 'smooth' })
      window.setTimeout(() => {
        lockRef.current = false
      }, 450)
      setActive(clamped)
    },
    [total],
  )

  useEffect(() => {
    const root = document.getElementById('root')
    if (!root) return

    const onScroll = () => {
      const idx = Math.round(root.scrollTop / window.innerHeight)
      setActive((prev) => (prev === idx ? prev : idx))
    }
    root.addEventListener('scroll', onScroll, { passive: true })

    const onKey = (e: KeyboardEvent) => {
      if (disabledRef.current) return
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA') return
      }
      const cur = Math.round(root.scrollTop / window.innerHeight)
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          goTo(cur + 1)
          break
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          goTo(cur - 1)
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(total - 1)
          break
      }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      root.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [total, goTo])

  return { active, goTo }
}
