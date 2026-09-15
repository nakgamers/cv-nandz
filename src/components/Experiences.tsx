import { experiences } from '../data'

export function Experiences() {
  return (
    <div className="timeline">
      {experiences.map((e, i) => (
        <article className="exp" key={i}>
          <div className="exp-rail" aria-hidden>
            <span className="exp-node" />
          </div>
          <div className="exp-content">
            <div className="exp-top">
              <h3 className="exp-role">{e.role}</h3>
              <span className="exp-period">{e.period}</span>
            </div>
            <p className="exp-org">
              <span className="dim">at</span> {e.org}
            </p>
            <p className="exp-summary">{e.summary}</p>
            <ul className="chips">
              {e.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
