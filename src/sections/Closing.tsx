import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { Logo } from '../components/Logo'
import { rise, scaleIn, stagger } from '../lib/anim'

type Props = { active: boolean }

const container = stagger(0.12, 0.1)

export function Closing({ active }: Props) {
  const animate = active ? 'active' : 'initial'
  return (
    <SectionShell active={active}>
      <motion.div
        variants={container}
        initial="initial"
        animate={animate}
        className="relative flex h-full w-full flex-col px-8 py-14 md:px-20 md:py-20"
      >
        <motion.p
          variants={rise}
          className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base"
        >
          08 — 끝
        </motion.p>

        <motion.h2
          variants={rise}
          className="my-auto text-display font-semibold leading-[0.95] tracking-tightest text-ink"
        >
          <span className="text-brand">그리디</span>
          <br />
          화이팅!
        </motion.h2>

        <motion.div
          variants={rise}
          className="flex items-end justify-between gap-4"
        >
          <motion.span
            variants={scaleIn}
            className="text-lg text-sub md:text-2xl"
          >
            감사합니다.
          </motion.span>
          <motion.div variants={scaleIn}>
            <Logo className="h-14 w-14 md:h-20 md:w-20" />
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionShell>
  )
}
