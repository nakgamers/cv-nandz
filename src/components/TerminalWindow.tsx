import type { ReactNode } from 'react'

export function TerminalWindow({ children }: { children: ReactNode }) {
  return (
    <section className="term">
      <div className="term-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="term-title">nandz@nandz.my.id: ~/cv — 100×40</span>
      </div>
      <div className="term-body">{children}</div>
    </section>
  )
}
