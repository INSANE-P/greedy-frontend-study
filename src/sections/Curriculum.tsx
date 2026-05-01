import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { MissionIcon } from '../components/MissionIcon'
import { missions } from '../data/sections'
import { fillBar, rise, stagger } from '../lib/anim'

type Props = { active: boolean }

const TOTAL_WEEKS = 14

const tracks = [
  { label: 'JavaScript', start: 1, end: 3 },
  { label: 'React 기초', start: 4, end: 5 },
  { label: 'React 심화', start: 6, end: 9 },
  { label: 'Project', start: 10, end: 12 },
  { label: 'SSR', start: 13, end: 14 },
]

const headerStagger = stagger(0.08, 0.05)
const trackStagger = stagger(0.1, 0.2)
const listStagger = stagger(0.05, 0.55)

const gridStyle = {
  gridTemplateColumns: `repeat(${TOTAL_WEEKS}, minmax(0, 1fr))`,
}

export function Curriculum({ active }: Props) {
  const animate = active ? 'active' : 'initial'
  return (
    <SectionShell active={active}>
      <motion.div
        variants={headerStagger}
        initial="initial"
        animate={animate}
        className="flex h-full w-full flex-col px-8 py-8 md:px-20 md:py-10"
      >
        <motion.p
          variants={rise}
          className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base"
        >
          03 — 커리큘럼
        </motion.p>

        <div className="mt-3 grid grid-cols-12 items-end gap-6">
          <motion.div variants={rise} className="col-span-12 md:col-span-5">
            <h2 className="text-big font-semibold leading-[1.05] tracking-tightest text-ink">
              <span className="text-brand">14주</span>
            </h2>
          </motion.div>
          <motion.div variants={rise} className="col-span-12 md:col-span-7">
            <p className="font-mono text-base text-sub md:text-right md:text-lg">
              JavaScript 3주 &nbsp;+&nbsp; React 11주
            </p>
          </motion.div>
        </div>

        {/* 14주 통합 타임라인 */}
        <motion.div
          variants={trackStagger}
          initial="initial"
          animate={animate}
          className="mt-6 md:mt-8"
        >
          <div
            className="grid overflow-hidden rounded-md border border-line bg-card"
            style={gridStyle}
          >
            {tracks.map((t, i) => (
              <motion.div
                key={t.label}
                variants={fillBar}
                style={{
                  gridColumn: `${t.start} / ${t.end + 1}`,
                  transformOrigin: 'left',
                }}
                className={`flex flex-col justify-center px-3 py-3.5 transition-colors duration-200 hover:bg-bg md:px-4 md:py-4 ${
                  i > 0 ? 'border-l border-line' : ''
                }`}
              >
                <span className="truncate text-sm font-semibold leading-tight text-ink md:text-base">
                  {t.label}
                </span>
                <span className="mt-1 font-mono text-xs text-sub md:text-sm">
                  {t.end - t.start + 1}주
                </span>
              </motion.div>
            ))}
          </div>

          {/* 주차 마커 */}
          <motion.div
            variants={rise}
            className="mt-2 grid"
            style={gridStyle}
          >
            {Array.from({ length: TOTAL_WEEKS }, (_, i) => (
              <span
                key={i}
                className="text-center font-mono text-[11px] text-muted md:text-xs"
              >
                {i + 1}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* 트랙별 미션 묶음 — my-auto로 수직 가운데 정렬, 행마다 무게감 있게 */}
        <motion.ul
          variants={listStagger}
          initial="initial"
          animate={animate}
          className="my-auto divide-y divide-line border-y border-line"
        >
          {tracks.map((t) => {
            const trackMissions = missions.filter((m) => m.track === t.label)
            const weekRange =
              t.start === t.end ? `${t.start}주` : `${t.start}–${t.end}주`
            return (
              <motion.li
                key={t.label}
                variants={rise}
                className="grid grid-cols-12 items-center gap-4 py-5 md:py-6"
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="text-lg font-semibold leading-tight text-ink md:text-2xl">
                    {t.label}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted md:text-sm">
                    {weekRange}
                  </p>
                </div>
                <div className="col-span-12 flex flex-wrap items-center gap-x-6 gap-y-2 md:col-span-9 md:gap-x-8">
                  {trackMissions.map((m) => (
                    <span
                      key={m.title}
                      className="flex items-center gap-2.5"
                    >
                      <MissionIcon
                        variant={m.icon}
                        className="text-brand"
                        width={22}
                        height={22}
                      />
                      <span className="text-base text-ink md:text-lg">
                        {m.title}
                      </span>
                    </span>
                  ))}
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.div>
    </SectionShell>
  )
}
