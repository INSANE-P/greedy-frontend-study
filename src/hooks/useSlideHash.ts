import { useEffect } from 'react'
import { sectionMeta } from '../data/sections'

const idToIndex = (hash: string) =>
  sectionMeta.findIndex((s) => s.id === hash)

export function useSlideHash(active: number, goTo: (idx: number) => void) {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const idx = idToIndex(hash)
    if (idx >= 0) goTo(idx)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const id = sectionMeta[active]?.id
    if (!id) return
    const newHash = `#${id}`
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash)
    }
  }, [active])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return
      const idx = idToIndex(hash)
      if (idx >= 0) goTo(idx)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [goTo])
}
