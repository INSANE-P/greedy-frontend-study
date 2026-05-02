import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { Logo } from '../components/Logo'
import { rise, scaleIn, stagger } from '../lib/anim'

type Props = { active: boolean }

const container = stagger(0.12, 0.1)

const hosts = [
  {
    name: '진',
    handle: '2Jin1031',
    url: 'https://github.com/2Jin1031',
    avatar: 'https://github.com/2Jin1031.png',
  },
  {
    name: '수민',
    handle: 'boyekim',
    url: 'https://github.com/boyekim',
    avatar: 'https://github.com/boyekim.png',
  },
] as const

export function Closing({ active }: Props) {
  const animate = active ? 'active' : 'initial'
  return (
    <SectionShell active={active}>
      <motion.div
        variants={container}
        initial="initial"
        animate={animate}
        className="relative flex h-full w-full flex-col px-8 py-14 md:px-20 md:py-20"
      >
        <motion.p
          variants={rise}
          className="font-mono text-sm uppercase tracking-[0.18em] text-sub md:text-base"
        >
          08 — 끝
        </motion.p>

        <motion.h2
          variants={rise}
          className="my-auto text-display font-semibold leading-[0.95] tracking-tightest text-ink"
        >
          <span className="text-brand">그리디</span>
          <br />
          화이팅!
        </motion.h2>

        <motion.div variants={rise} className="mb-6 md:mb-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted md:mb-4 md:text-sm">
            행사 주최 · 기획
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            {hosts.map((p, i) => (
              <motion.a
                key={p.handle}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-no-advance
                initial={{ opacity: 0, y: -28, scale: 0.55 }}
                animate={
                  active
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: -28, scale: 0.55 }
                }
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 9,
                  delay: 0.5 + i * 0.18,
                }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 12 } }}
                className="group flex items-center gap-2.5 md:gap-3"
              >
                <img
                  src={p.avatar}
                  alt={p.name}
                  draggable={false}
                  className="block h-10 w-10 rounded-full object-cover ring-[2px] ring-bg shadow-[0_6px_18px_-4px_rgba(0,0,0,0.5)] transition-shadow duration-200 group-hover:shadow-[0_10px_24px_-4px_rgba(31,180,132,0.5)] md:h-12 md:w-12"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.visibility =
                      'hidden'
                  }}
                />
                <span className="text-base font-semibold text-ink md:text-lg">
                  {p.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={rise}
          className="flex items-end justify-between gap-4"
        >
          <motion.span
            variants={scaleIn}
            className="text-lg text-sub md:text-2xl"
          >
            감사합니다.
          </motion.span>
          <motion.div variants={scaleIn}>
            <Logo className="h-14 w-14 md:h-20 md:w-20" />
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionShell>
  )
}
