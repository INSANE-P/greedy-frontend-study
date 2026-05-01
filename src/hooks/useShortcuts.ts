import { useEffect, useRef } from 'react'

export type ShortcutHandlers = {
  onToggleNotes: () => void
  onToggleOverview: () => void
  onToggleHelp: () => void
  onBlackout: (kind: 'black' | 'white') => void
}

export function useShortcuts(handlers: ShortcutHandlers) {
  const ref = useRef(handlers)
  useEffect(() => {
    ref.current = handlers
  }, [handlers])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA') return
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return

      const h = ref.current
      switch (e.key) {
        case 'n':
        case 'N':
          e.preventDefault()
          h.onToggleNotes()
          break
        case 'o':
        case 'O':
          e.preventDefault()
          h.onToggleOverview()
          break
        case '?':
        case '/':
          e.preventDefault()
          h.onToggleHelp()
          break
        case 'b':
        case 'B':
          e.preventDefault()
          h.onBlackout('black')
          break
        case 'w':
        case 'W':
          e.preventDefault()
          h.onBlackout('white')
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}
