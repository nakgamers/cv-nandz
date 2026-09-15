// Boot sequence: kernel-style log lines, lalu fade out.
import { useEffect, useState } from 'react'

const LINES = [
  '[ ok ] mounting /dev/nandz ...',
  '[ ok ] starting network manager (mikrotik, cisco) ...',
  '[ ok ] loading react kernel 19.0 ...',
  '[ ok ] starting vite dev daemon ...',
  '[ ok ] nandz-os 20.26 login: nandz',
]

export function Boot({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<number>(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (shown >= LINES.length) {
      const t = setTimeout(() => setGone(true), 320)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setShown((s) => s + 1), 190)
    return () => clearTimeout(t)
  }, [shown])

  useEffect(() => {
    if (!gone) return
    onDone()
  }, [gone, onDone])

  return (
    <div className={'boot' + (gone ? ' boot-gone' : '')} aria-hidden={gone}>
      <div className="boot-inner">
        <div className="boot-brand">nandz-os 20.26</div>
        {LINES.slice(0, shown).map((l, i) => (
          <div key={i} className="boot-line">
            {l}
          </div>
        ))}
        {shown < LINES.length && <span className="caret">▋</span>}
      </div>
    </div>
  )
}
