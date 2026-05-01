import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { rise, scaleIn, stagger } from '../lib/anim'

type Props = { active: boolean }

const container = stagger(0.12, 0.05)

export function Operations({ active }: Props) {
  const animate = active ? 'active' : 'initial'
  return (
    <SectionShell active={active}>
      <motion.div
        variants={container}
        initial="initial"
        animate={animate}
        className="flex h-full w-full flex-col px-8 py-14 md:px-20"
      >
        <motion.p
          variants={rise}
          className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base"
        >
          06 — 운영
        </motion.p>

        <div className="my-auto grid grid-cols-12 gap-10 md:gap-16">
          <motion.div
            variants={scaleIn}
            className="col-span-12 md:col-span-5"
          >
            <p className="text-lg text-sub md:text-2xl">스터디 리드</p>
            <h2 className="mt-4 text-display font-semibold leading-none tracking-tightest text-ink">
              <span className="text-brand">5</span>
              <span className="text-sub text-huge">명</span>
            </h2>
          </motion.div>

          <div className="col-span-12 flex flex-col gap-6 md:col-span-7 md:gap-7">
            <motion.div variants={rise}>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base">
                한 스터디
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                리드 <span className="text-brand">2</span>명씩 번갈아 들어감
              </p>
            </motion.div>

            <motion.div
              variants={rise}
              className="border-t border-line pt-6 md:pt-7"
            >
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base">
                4기 멤버 × 리뷰어
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                <span className="text-brand">1:1</span> 매칭으로 티키타카
              </p>
            </motion.div>

            <motion.div
              variants={rise}
              className="border-t border-line pt-6 md:pt-7"
            >
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base">
                스터디 자료
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
                들어가는 둘이 <span className="text-brand">비동기</span>로 제작
              </p>
              <p className="mt-3 text-base leading-relaxed text-sub md:text-lg">
                전 회차 리뷰 베스트 + 이번 미션 핵심을 직접 정리.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  )
}
