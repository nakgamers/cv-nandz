import { education } from '../data'

export function Education() {
  return (
    <ul className="certs">
      {education.map((e) => (
        <li className="cert" key={e.school}>
          <span className="cert-mark" aria-hidden>
            ▤
          </span>
          <div>
            <p className="cert-name">{e.school}</p>
            <p className="cert-meta">
              {e.major} · <span className="dim">{e.period}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
