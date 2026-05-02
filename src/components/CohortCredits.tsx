import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

type Cohort = {
  label: string
  reviewer: string[]
  lead: string[]
  member: string[]
}

const cohorts: Cohort[] = [
  {
    label: '1기',
    reviewer: ['의천'],
    lead: ['범수'],
    member: ['혜정', '준수'],
  },
  {
    label: '2기',
    reviewer: ['혜정', '범수', '민석', '의천'],
    lead: ['혜정', '범수'],
    member: ['동현', '창우', '지훈', '규영', '찬빈', '지우'],
  },
  {
    label: '3기',
    reviewer: ['수영', '의천', '혜령', '민석'],
    lead: ['혜정', '규영', '지우', '찬빈'],
    member: ['혁', '재홍', '예령', '건'],
  },
  {
    label: '4기',
    reviewer: ['혜정', '규영', '의천'],
    lead: ['범수', '혁', '재홍', '찬빈'],
    member: ['규민', '동현', '동건', '의민'],
  },
]

const fadeMask =
  'linear-gradient(to bottom, transparent, black 6%, black 94%, transparent)'

const ENTRANCE_DURATION = 14
const ROLL_DURATION = 28

function Row({ label, names }: { label: string; names: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted md:text-[11px]">
        {label}
      </p>
      <p className="mt-0.5 text-sm leading-snug text-ink md:text-base">
        {names.join(' · ')}
      </p>
    </div>
  )
}

function CohortBlock({ cohort }: { cohort: Cohort }) {
  return (
    <div>
      <p className="font-mono text-base font-semibold text-brand md:text-lg">
        {cohort.label}
      </p>
      <div className="mt-3 space-y-2.5 md:mt-4">
        <Row label="REVIEWER" names={cohort.reviewer} />
        <Row label="LEAD" names={cohort.lead} />
        <Row label="MEMBER" names={cohort.member} />
      </div>
    </div>
  )
}

export function CohortCredits({ active }: { active: boolean }) {
  const controls = useAnimation()

  useEffect(() => {
    if (!active) {
      controls.set({ y: '100%' })
      return
    }
    let cancelled = false
    const run = async () => {
      await controls.start({
        y: '0%',
        transition: { duration: ENTRANCE_DURATION, ease: 'linear' },
      })
      if (cancelled) return
      controls.start({
        y: '-50%',
        transition: {
          duration: ROLL_DURATION,
          repeat: Infinity,
          ease: 'linear',
        },
      })
    }
    run()
    return () => {
      cancelled = true
    }
  }, [active, controls])

  return (
    <div className="flex h-full flex-col">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-muted md:mb-5 md:text-sm">
        1—4기 발자취
      </p>
      <div
        className="relative flex-1 overflow-hidden"
        style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={controls}
          className="flex flex-col gap-10 md:gap-12"
        >
          {[...cohorts, ...cohorts].map((c, i) => (
            <CohortBlock key={`${c.label}-${i}`} cohort={c} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
