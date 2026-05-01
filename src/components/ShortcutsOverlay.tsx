import { useEffect } from 'react'
import { motion } from 'framer-motion'

type Props = {
  open: boolean
  onClose: () => void
}

const shortcuts: { keys: string; action: string }[] = [
  { keys: '↓ → Space PageDown', action: '다음 슬라이드' },
  { keys: '↑ ← PageUp', action: '이전 슬라이드' },
  { keys: 'Home / End', action: '처음 / 마지막 슬라이드' },
  { keys: 'O', action: '슬라이드 오버뷰 토글' },
  { keys: 'N', action: '발표자 노트 토글' },
  { keys: 'B / W', action: '블랙 / 화이트 스크린' },
  { keys: '?', action: '단축키 안내 토글' },
  { keys: 'Esc', action: '오버레이 닫기 / 발표 모드 종료' },
]

export function ShortcutsOverlay({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === '?' || e.key === '/') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 px-8 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md border border-line bg-card p-6 md:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-sub md:text-sm">
          단축키
        </p>
        <ul className="mt-5 space-y-3 md:mt-6 md:space-y-3.5">
          {shortcuts.map(({ keys, action }) => (
            <li
              key={keys}
              className="flex items-baseline justify-between gap-6"
            >
              <span className="shrink-0 font-mono text-sm text-ink md:text-base">
                {keys}
              </span>
              <span className="text-right text-sm text-sub md:text-base">
                {action}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
