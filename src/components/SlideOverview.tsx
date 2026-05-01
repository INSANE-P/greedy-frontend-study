import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { sectionMeta } from '../data/sections'

type Props = {
  open: boolean
  active: number
  onClose: () => void
  onSelect: (idx: number) => void
}

export function SlideOverview({ open, active, onClose, onSelect }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'o' || e.key === 'O') {
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
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col bg-bg/95 px-8 py-10 backdrop-blur-sm md:px-20 md:py-14"
    >
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base">
          slide overview · {sectionMeta.length}
        </p>
        <button
          onClick={onClose}
          data-no-advance
          className="font-mono text-sm uppercase tracking-[0.18em] text-muted hover:text-ink md:text-base"
        >
          esc
        </button>
      </div>

      <ul className="mt-8 grid flex-1 grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
        {sectionMeta.map((s, i) => {
          const isActive = i === active
          return (
            <li key={s.id}>
              <button
                onClick={() => {
                  onSelect(i)
                  onClose()
                }}
                data-no-advance
                className={`group flex h-full w-full flex-col items-start justify-between border p-5 text-left transition-colors md:p-6 ${
                  isActive
                    ? 'border-brand bg-card'
                    : 'border-line bg-card/30 hover:border-brand/50 hover:bg-card/60'
                }`}
              >
                <span className="font-mono text-sm text-muted md:text-base">
                  {s.label}
                </span>
                <span
                  className={`mt-auto text-xl font-semibold leading-tight tracking-tight md:text-3xl ${
                    isActive ? 'text-brand' : 'text-ink group-hover:text-brand'
                  }`}
                >
                  {s.title}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
