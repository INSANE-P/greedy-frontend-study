import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { MissionIcon } from '../components/MissionIcon'
import { missions, people } from '../data/sections'
import type { Person } from '../data/sections'
import { rise, scaleIn, stagger } from '../lib/anim'

type Props = { active: boolean }

const container = stagger(0.07, 0.05)
const listContainer = stagger(0.08, 0.3)
const contributorContainer = stagger(0.06, 0.7)

const contributorHandles = [
  'Songhyejeong',
  'gxuoo',
  'Indigochi1d',
  'INSANE-P',
] as const

export function MissionRework({ active }: Props) {
  const reworked = missions.filter((m) => m.reworked)
  const contributors = contributorHandles
    .map((h) => people.find((p) => p.handle === h))
    .filter((p): p is Person => Boolean(p))
  const animate = active ? 'active' : 'initial'

  return (
    <SectionShell active={active}>
      <motion.div
        variants={container}
        initial="initial"
        animate={animate}
        className="flex h-full w-full flex-col px-8 py-10 md:px-20 md:py-12"
      >
        <motion.p
          variants={rise}
          className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base"
        >
          04 — 미션 리뉴얼
        </motion.p>

        {/* Hero statement */}
        <div className="mt-3 grid grid-cols-12 items-end gap-4 md:gap-8">
          <motion.div variants={rise} className="col-span-12 md:col-span-8">
            <p className="text-lg text-sub md:text-2xl">방학 동안,</p>
            <h2 className="mt-3 text-huge font-semibold leading-[1.05] tracking-tightest text-ink">
              <span className="text-brand">{reworked.length}개 미션</span>을
              새로 만들었습니다.
            </h2>
          </motion.div>
          <motion.p
            variants={rise}
            className="col-span-12 max-w-md font-mono text-sm uppercase tracking-[0.18em] text-muted md:col-span-4 md:text-right md:text-sm"
          >
            이전 기수 피드백 기반
          </motion.p>
        </div>

        {/* Mission grid + Contributors — 가운데 정렬로 빈공간을 위·아래로 분산 */}
        <div className="my-auto w-full">
          <motion.ul
            variants={listContainer}
            initial="initial"
            animate={animate}
            className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4"
          >
            {reworked.map((m) => (
              <motion.li key={m.title} variants={scaleIn}>
                <div className="flex flex-col gap-4 border border-line bg-card/60 p-5 md:p-6">
                  <MissionIcon
                    variant={m.icon}
                    className="text-brand"
                    width={36}
                    height={36}
                  />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted md:text-xs">
                      {m.track}
                    </p>
                    <p className="mt-1.5 text-base font-semibold leading-tight text-ink md:text-lg">
                      {m.title}
                    </p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-sub md:text-sm">
                    {m.weeks}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Contributors footer — 컴팩트 한 줄 */}
          <motion.div
            variants={contributorContainer}
            initial="initial"
            animate={animate}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 md:mt-6 md:gap-x-7"
          >
            <motion.p
              variants={rise}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted md:text-xs"
            >
              기획 · 제작
            </motion.p>
            {contributors.map((p) => (
              <motion.a
                key={p.handle}
                variants={scaleIn}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-no-advance
                className="flex items-center gap-2"
              >
                <img
                  src={p.avatar}
                  alt={p.name}
                  draggable={false}
                  className="block h-7 w-7 rounded-full object-cover ring-[1.5px] ring-bg md:h-8 md:w-8"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.visibility =
                      'hidden'
                  }}
                />
                <span className="text-sm text-sub md:text-base">{p.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SectionShell>
  )
}
