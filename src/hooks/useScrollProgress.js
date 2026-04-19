import { useEffect } from 'react'

export default function useScrollProgress(containerRef) {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return

    const el = containerRef ? containerRef.current : window

    const update = () => {
      if (containerRef && containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current
        const pct = (scrollTop / (scrollHeight - clientHeight)) * 100
        bar.style.width = pct + '%'
      } else {
        const doc = document.documentElement
        const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100
        bar.style.width = pct + '%'
      }
    }

    if (el) el.addEventListener('scroll', update)
    return () => { if (el) el.removeEventListener('scroll', update) }
  }, [containerRef])
}
