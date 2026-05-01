type Props = {
  onStart: () => void
  hidden: boolean
}

export function StartButton({ onStart, hidden }: Props) {
  if (hidden) return null
  return (
    <button
      type="button"
      onClick={onStart}
      data-no-advance
      className="group fixed right-6 top-6 z-40 inline-flex items-center gap-3 rounded-full bg-brand py-3 pl-6 pr-5 text-base font-semibold tracking-tight text-bg shadow-[0_8px_28px_-6px_rgba(31,180,132,0.55)] transition-all duration-300 hover:bg-accent hover:gap-4 hover:shadow-[0_14px_40px_-4px_rgba(52,211,153,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:right-10 md:top-10 md:py-3.5 md:pl-7 md:pr-6 md:text-lg"
      aria-label="발표 시작 — 전체 화면으로 진입"
    >
      <span>발표 시작</span>
      <span className="text-bg/90 transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </button>
  )
}
