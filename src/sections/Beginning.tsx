import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { rise, stagger } from '../lib/anim'

type Props = { active: boolean }

const container = stagger(0.18, 0.1)

export function Beginning({ active }: Props) {
  const animate = active ? 'active' : 'initial'
  return (
    <SectionShell active={active}>
      <motion.div
        variants={container}
        initial="initial"
        animate={animate}
        className="relative flex h-full w-full flex-col px-8 py-14 md:px-20"
      >
        <motion.p
          variants={rise}
          className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base"
        >
          02 — 시작 계기
        </motion.p>

        <div className="my-auto max-w-5xl">
          <motion.p
            variants={rise}
            className="mb-8 text-lg text-sub md:mb-12 md:text-2xl"
          >
            특별한 이유가 있었던 건 아니에요.
          </motion.p>
          <motion.h2
            variants={rise}
            className="text-huge font-semibold leading-[1.1] tracking-tightest text-ink"
          >
            <span className="text-brand">그리디</span>의 좋은 사람들이랑
            <br />
            함께하면 재밌게
            <br />
            할 수 있겠다 싶었어요.
          </motion.h2>
        </div>
      </motion.div>
    </SectionShell>
  )
}
