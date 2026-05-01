import { useCallback, useEffect, useState } from 'react'
import { useSectionNav } from './hooks/useSectionNav'
import { usePresentation } from './hooks/usePresentation'
import { SectionIndicator } from './components/SectionIndicator'
import { PresenterNotes } from './components/PresenterNotes'
import { StartButton } from './components/StartButton'
import { sectionMeta } from './data/sections'

import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Beginning } from './sections/Beginning'
import { Curriculum } from './sections/Curriculum'
import { MissionRework } from './sections/MissionRework'
import { Process } from './sections/Process'
import { Operations } from './sections/Operations'
import { People } from './sections/People'
import { Closing } from './sections/Closing'

const sections = [
  Hero,
  About,
  Beginning,
  Curriculum,
  MissionRework,
  Process,
  Operations,
  People,
  Closing,
]

export default function App() {
  const { active, goTo } = useSectionNav(sections.length)
  const [showNotes, setShowNotes] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setShowNotes(params.get('notes') === 'true')
  }, [])

  const onStart = useCallback(() => goTo(0), [goTo])
  const onAdvance = useCallback(() => {
    const root = document.getElementById('root')
    if (!root) return
    const cur = Math.round(root.scrollTop / window.innerHeight)
    goTo(cur + 1)
  }, [goTo])

  const { presenting, start } = usePresentation({ onStart, onAdvance })

  return (
    <>
      {sections.map((Section, i) => (
        <section
          key={sectionMeta[i].id}
          id={sectionMeta[i].id}
          data-active={i === active}
          className="section"
        >
          <Section active={i === active} />
        </section>
      ))}

      <SectionIndicator active={active} onJump={goTo} />
      <StartButton onStart={start} hidden={presenting} />
      {showNotes && <PresenterNotes active={active} />}
      <Watermark active={active} total={sections.length} />
    </>
  )
}

function Watermark({ active, total }: { active: number; total: number }) {
  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-30 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-sub md:left-10 md:text-sm">
      <span>greedy / fe</span>
      <span className="h-px w-6 bg-line" />
      <span className="text-ink">
        {String(active + 1).padStart(2, '0')}
        <span className="text-muted"> / {String(total).padStart(2, '0')}</span>
      </span>
    </div>
  )
}
