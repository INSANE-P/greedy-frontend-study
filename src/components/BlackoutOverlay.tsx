import { useEffect } from 'react'

export type BlackoutKind = 'off' | 'black' | 'white'

type Props = {
  kind: BlackoutKind
  onDismiss: () => void
}

export function BlackoutOverlay({ kind, onDismiss }: Props) {
  useEffect(() => {
    if (kind === 'off') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onDismiss()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [kind, onDismiss])

  if (kind === 'off') return null

  return (
    <div
      onClick={onDismiss}
      data-no-advance
      className={`fixed inset-0 z-[60] cursor-pointer ${
        kind === 'black' ? 'bg-black' : 'bg-white'
      }`}
    />
  )
}
