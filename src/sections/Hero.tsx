import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { Logo } from '../components/Logo'
import { rise, scaleIn, stagger } from '../lib/anim'

type Props = { active: boolean }

const container = stagger(0.12, 0.1)

export function Hero({ active }: Props) {
  const animate = active ? 'active' : 'initial'
  return (
    <SectionShell active={active}>
      <motion.div
        variants={container}
        initial="initial"
        animate={animate}
        className="relative flex h-full w-full flex-col px-8 py-14 md:px-20 md:py-20"
      >
        <motion.div
          variants={scaleIn}
          className="flex items-center gap-4 md:gap-5"
        >
          <Logo className="h-20 w-20 md:h-28 md:w-28" />
          <span className="text-base leading-tight text-sub md:text-lg">
            그리디 프론트엔드 스터디
          </span>
        </motion.div>

        <motion.h1
          variants={rise}
          className="my-auto text-display font-semibold leading-[0.95] tracking-tightest text-ink"
        >
          Frontend
          <br />
          Study
        </motion.h1>

        <motion.p
          variants={rise}
          className="self-end text-base text-sub md:text-lg"
        >
          그리디 프론트엔드 2기{' '}
          <span className="text-ink">박찬빈</span>
        </motion.p>
      </motion.div>
    </SectionShell>
  )
}
