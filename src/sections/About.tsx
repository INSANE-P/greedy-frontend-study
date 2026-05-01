import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { rise, scaleIn, slideRight, stagger } from '../lib/anim'

type Props = { active: boolean }

const container = stagger(0.1, 0.05)

export function About({ active }: Props) {
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
          01 — 소개
        </motion.p>

        <div className="my-auto grid grid-cols-12 items-center gap-10 md:gap-20">
          <motion.div
            variants={scaleIn}
            className="col-span-12 sm:col-span-5 md:col-span-5"
          >
            <div className="translate-y-2 md:translate-y-6">
              <img
                src="./avatars/INSANE-P.png"
                alt="박찬빈 (INSANE-P)"
                draggable={false}
                className="block aspect-square w-52 rounded-full object-cover shadow-[0_18px_50px_-10px_rgba(31,180,132,0.5)] ring-[3px] ring-bg md:w-72 lg:w-80"
              />
            </div>
          </motion.div>

          <div className="col-span-12 sm:col-span-7 md:col-span-7 md:-translate-y-4">
            <motion.p
              variants={slideRight}
              className="font-mono text-sm uppercase tracking-[0.2em] text-sub md:text-base"
            >
              Greedy &nbsp;·&nbsp; Frontend Study Lead
            </motion.p>
            <motion.h2
              variants={rise}
              className="mt-5 text-display font-semibold leading-[0.92] tracking-tightest text-ink"
            >
              박찬빈
            </motion.h2>
            <motion.p
              variants={rise}
              className="mt-8 text-xl leading-relaxed text-sub md:text-2xl"
            >
              Greedy <span className="text-ink">2기</span> 프론트엔드로 들어와,
              <br />
              지금은 <span className="text-ink">3·4기 리드</span>를 함께 맡고 있습니다.
            </motion.p>
            <motion.a
              variants={rise}
              href="https://github.com/INSANE-P"
              target="_blank"
              rel="noopener noreferrer"
              data-no-advance
              className="mt-10 inline-block border-b border-line pb-1 font-mono text-base text-sub md:text-lg"
            >
              github.com/INSANE-P
            </motion.a>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  )
}
