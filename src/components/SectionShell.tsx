import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  active: boolean
  children: ReactNode
  className?: string
}

export function SectionShell({ active, children, className = '' }: Props) {
  return (
    <motion.div
      initial={false}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
      className={`h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  )
}
