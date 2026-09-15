import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string
  title: string
  icon: string
  children: ReactNode
}) {
  return (
    <section id={id} className="card">
      <header className="card-head">
        <span className="card-icon" aria-hidden>
          {icon}
        </span>
        <h2 className="card-title">
          <span className="dim">~/</span>
          {title}
          <span className="caret">_</span>
        </h2>
      </header>
      <div className="card-body">{children}</div>
    </section>
  )
}
