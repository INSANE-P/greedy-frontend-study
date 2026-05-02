import { useCallback, useEffect, useRef, useState } from 'react'
import { useSectionNav } from './hooks/useSectionNav'
import { usePresentation } from './hooks/usePresentation'
import { useSlideHash } from './hooks/useSlideHash'
import { useShortcuts } from './hooks/useShortcuts'
import { useAutoHideCursor } from './hooks/useAutoHideCursor'
import { SectionIndicator } from './components/SectionIndicator'
import { PresenterNotes } from './components/PresenterNotes'
import { StartButton } from './components/StartButton'
import { ShortcutsOverlay } from './components/ShortcutsOverlay'
import { SlideOverview } from './components/SlideOverview'
import { BlackoutOverlay } from './components/BlackoutOverlay'
import type { BlackoutKind } from './components/BlackoutOverlay'
import { PresentationTimer } from './components/PresentationTimer'
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
  const [showNotes, setShowNotes] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [showOverview, setShowOverview] = useState(false)
  const [blackout, setBlackout] = useState<BlackoutKind>('off')

  const navDisabled = showHelp || showOverview || blackout !== 'off'

  const stopRef = useRef<(() => void) | null>(null)

  const onPastEnd = useCallback(() => {
    if (document.fullscreenElement) {
      stopRef.current?.()
    }
  }, [])

  const { active, goTo } = useSectionNav(sections.length, {
    disabled: navDisabled,
    onPastEnd,
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('notes') === 'true') setShowNotes(true)
  }, [])

  useSlideHash(active, goTo)

  const onStart = useCallback(() => goTo(0), [goTo])
  const onAdvance = useCallback(() => {
    const root = document.getElementById('root')
    if (!root) return
    const cur = Math.round(root.scrollTop / window.innerHeight)
    if (cur >= sections.length - 1) {
      stopRef.current?.()
      return
    }
    goTo(cur + 1)
  }, [goTo])

  const { presenting, start, stop } = usePresentation({ onStart, onAdvance })

  useEffect(() => {
    stopRef.current = stop
  }, [stop])

  useAutoHideCursor(presenting)

  const toggleNotes = useCallback(() => setShowNotes((v) => !v), [])
  const toggleHelp = useCallback(() => {
    setShowOverview(false)
    setShowHelp((v) => !v)
  }, [])
  const toggleOverview = useCallback(() => {
    setShowHelp(false)
    setShowOverview((v) => !v)
  }, [])
  const onBlackout = useCallback((kind: 'black' | 'white') => {
    setShowHelp(false)
    setShowOverview(false)
    setBlackout((cur) => (cur === kind ? 'off' : kind))
  }, [])
  const dismissBlackout = useCallback(() => setBlackout('off'), [])

  useShortcuts({
    onToggleNotes: toggleNotes,
    onToggleOverview: toggleOverview,
    onToggleHelp: toggleHelp,
    onBlackout,
  })

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
      <PresentationTimer running={presenting} visible={showNotes} />
      {showNotes && <PresenterNotes active={active} />}
      <Watermark active={active} total={sections.length} />

      <SlideOverview
        open={showOverview}
        active={active}
        onClose={() => setShowOverview(false)}
        onSelect={goTo}
      />
      <ShortcutsOverlay open={showHelp} onClose={() => setShowHelp(false)} />
      <BlackoutOverlay kind={blackout} onDismiss={dismissBlackout} />
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
