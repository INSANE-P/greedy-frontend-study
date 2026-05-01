import { sectionMeta } from '../data/sections'

type Props = {
  active: number
  onJump: (idx: number) => void
}

export function SectionIndicator({ active, onJump }: Props) {
  return (
    <nav
      className="fixed right-6 top-1/2 z-30 -translate-y-1/2 md:right-10"
      aria-label="섹션 인디케이터"
    >
      <ul className="flex flex-col gap-3">
        {sectionMeta.map((s, i) => {
          const isActive = i === active
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onJump(i)}
                aria-label={`섹션 ${s.label}`}
                aria-current={isActive ? 'true' : undefined}
                className="group relative flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={
                    'block h-px transition-all duration-300 ' +
                    (isActive
                      ? 'w-6 bg-brand'
                      : 'w-3 bg-line group-hover:w-5 group-hover:bg-sub')
                  }
                />
                <span
                  className={
                    'absolute right-9 whitespace-nowrap font-mono text-xs tracking-wider transition-opacity duration-200 md:text-sm ' +
                    (isActive
                      ? 'text-brand opacity-100'
                      : 'text-sub opacity-0 group-hover:opacity-100')
                  }
                >
                  {s.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
