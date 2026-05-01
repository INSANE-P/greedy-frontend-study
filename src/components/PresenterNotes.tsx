import { sectionMeta, speakerNotes } from '../data/sections'

type Props = {
  active: number
}

export function PresenterNotes({ active }: Props) {
  const id = sectionMeta[active]?.id
  const note = id ? speakerNotes[id] : ''
  const label = sectionMeta[active]?.label
  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-sm border border-line bg-card px-5 py-4 text-base shadow-[0_8px_28px_rgba(0,0,0,0.5)]">
      <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sub">
        <span className="text-brand">●</span>
        <span>presenter · {label}</span>
      </div>
      <p className="text-base leading-relaxed text-ink">{note}</p>
    </div>
  )
}
