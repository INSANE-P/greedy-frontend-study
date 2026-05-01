import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { rise, slideRight, stagger } from '../lib/anim'

type Props = { active: boolean }

const cycle = [
  { step: '미션 진행', detail: '한 주 동안 각자 코딩' },
  { step: '리뷰', detail: 'PR 위에서 코드 리뷰' },
  { step: '티키타카', detail: '리뷰 댓글로 의견 주고받기' },
  { step: '스터디', detail: '리뷰 베스트 + 미션 핵심 정리' },
]

const container = stagger(0.1, 0.05)
const stepStagger = stagger(0.18, 0.3)

export function Process({ active }: Props) {
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
          05 — 진행 방식
        </motion.p>

        <motion.p
          variants={rise}
          className="mt-6 text-lg text-sub md:text-2xl"
        >
          한 주에 한 사이클로,
        </motion.p>

        {/* 계단식 시퀀스 — 좌상단에서 우하단으로 흘러감 */}
        <motion.ol
          variants={stepStagger}
          className="my-auto flex flex-col gap-3 md:gap-5"
        >
          {cycle.map((c, i) => (
            <motion.li
              key={c.step}
              variants={slideRight}
              className="flex items-baseline gap-4 md:gap-6"
              style={{ marginLeft: `clamp(0px, ${i * 4}vw, ${i * 5}rem)` }}
            >
              <span className="font-mono text-sm text-muted md:text-base">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-big font-semibold leading-[1.1] tracking-tightest text-ink md:text-huge">
                {c.step}
              </span>
              <span className="hidden text-base text-sub md:inline md:text-lg">
                — {c.detail}
              </span>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          variants={rise}
          className="mt-10 flex flex-col items-end gap-2 border-t border-line pt-8 md:flex-row md:items-baseline md:justify-between"
        >
          <p className="text-base text-sub md:text-lg">
            거기에 <span className="text-ink">모각코</span> 주 1회.
          </p>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted md:text-base">
            weekly cycle
          </p>
        </motion.div>
      </motion.div>
    </SectionShell>
  )
}
