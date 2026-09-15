import { projects } from '../data'

export function Projects() {
  return (
    <div className="grid-2">
      {projects.map((p) => (
        <article className="proj" key={p.name}>
          <div className="proj-head">
            <span className="proj-hash" aria-hidden>
              #
            </span>
            <h3 className="proj-name">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer noopener">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </h3>
          </div>
          <p className="proj-desc">{p.desc}</p>
          <ul className="chips">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          {p.repo && (
            <a className="proj-repo" href={p.repo} target="_blank" rel="noreferrer noopener">
              [ view source ]
            </a>
          )}
        </article>
      ))}
    </div>
  )
}
