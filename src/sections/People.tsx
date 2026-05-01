import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { SectionShell } from '../components/SectionShell'
import { people } from '../data/sections'
import type { Person } from '../data/sections'
import { rise, scaleIn, stagger } from '../lib/anim'

type Props = { active: boolean }

const reviewers = people.filter((p) => p.role === 'reviewer')
const leads = people.filter((p) => p.role === 'lead')
const members = people.filter((p) => p.role === 'member')

const headerStagger = stagger(0.08, 0.05)
const reviewerGroup = stagger(0.1, 0.3)
const leadGroup = stagger(0.07, 0.6)
const memberGroup = stagger(0.07, 0.95)

function GroupHeader({
  title,
  count,
  note,
}: {
  title: string
  count: number
  note?: ReactNode
}) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-3 md:mb-6">
      <div className="flex items-baseline gap-3">
        <h3 className="text-lg font-semibold text-ink md:text-xl">{title}</h3>
        <span className="font-mono text-sm text-muted md:text-base">
          / {count}
        </span>
      </div>
      {note && (
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:text-xs">
          {note}
        </span>
      )}
    </div>
  )
}

function Avatar({
  p,
  size,
}: {
  p: Person
  size: 'lg' | 'md'
}) {
  const dim =
    size === 'lg'
      ? 'h-24 w-24 md:h-32 md:w-32'
      : 'h-16 w-16 md:h-20 md:w-20'
  const nameSize =
    size === 'lg'
      ? 'text-base md:text-lg'
      : 'text-sm md:text-base'

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      data-no-advance
      className="group flex flex-col items-center"
    >
      <div className="relative">
        <img
          src={p.avatar}
          alt={p.name}
          draggable={false}
          className={`block ${dim} rounded-full object-cover ring-[3px] ring-bg shadow-[0_8px_28px_-10px_rgba(0,0,0,0.55)]`}
          onError={(e) => {
            ;(e.currentTarget as HTMLImageElement).style.visibility = 'hidden'
          }}
        />
        {p.reviewing && (
          <span className="absolute -right-1 -top-1 z-10 flex h-5 items-center rounded-full bg-brand px-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-bg shadow-[0_4px_10px_-2px_rgba(31,180,132,0.5)] md:-right-1.5 md:-top-1.5 md:h-6 md:px-2 md:text-[10px]">
            리뷰
          </span>
        )}
      </div>
      <p className={`mt-3 font-semibold text-ink ${nameSize}`}>{p.name}</p>
    </a>
  )
}

export function People({ active }: Props) {
  const animate = active ? 'active' : 'initial'
  return (
    <SectionShell active={active}>
      <motion.div
        variants={headerStagger}
        initial="initial"
        animate={animate}
        className="flex h-full w-full flex-col px-8 py-10 md:px-20 md:py-12"
      >
        <motion.div variants={rise}>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base">
            07 — 사람들
          </p>
          <h2 className="mt-3 text-big font-semibold leading-[1.05] tracking-tightest text-ink">
            스터디를 함께하는 <span className="text-brand">사람들</span>.
          </h2>
        </motion.div>

        <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <motion.div
            variants={reviewerGroup}
            initial="initial"
            animate={animate}
            className="flex flex-col rounded-md border border-line bg-card/30 p-5 md:p-6"
          >
            <motion.div variants={rise}>
              <GroupHeader title="고정 리뷰어" count={reviewers.length} />
            </motion.div>
            <div className="mt-6 grid grid-cols-3 gap-3 md:mt-8 md:gap-4">
              {reviewers.map((p) => (
                <motion.div
                  key={p.handle}
                  variants={scaleIn}
                  className="flex justify-center"
                >
                  <Avatar p={p} size="md" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={leadGroup}
            initial="initial"
            animate={animate}
            className="flex flex-col rounded-md border border-line bg-card/30 p-5 md:p-6"
          >
            <motion.div variants={rise}>
              <GroupHeader
                title="스터디 리드"
                count={leads.length}
                note={
                  <>
                    <span className="text-brand">리뷰</span> = 로테이션
                  </>
                }
              />
            </motion.div>
            <div className="mt-6 grid grid-cols-3 gap-3 md:mt-8 md:gap-4">
              {leads.map((p) => (
                <motion.div
                  key={p.handle}
                  variants={scaleIn}
                  className="flex justify-center"
                >
                  <Avatar p={p} size="md" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={memberGroup}
            initial="initial"
            animate={animate}
            className="flex flex-col rounded-md border border-line bg-card/30 p-5 md:p-6"
          >
            <motion.div variants={rise}>
              <GroupHeader title="4기 멤버" count={members.length} />
            </motion.div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4">
              {members.map((p) => (
                <motion.div
                  key={p.handle}
                  variants={scaleIn}
                  className="flex justify-center"
                >
                  <Avatar p={p} size="md" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionShell>
  )
}
