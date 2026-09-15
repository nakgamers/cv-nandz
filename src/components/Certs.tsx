import { certifications } from '../data'

export function Certs() {
  return (
    <ul className="certs">
      {certifications.map((c) => (
        <li className="cert" key={c.name}>
          <span className="cert-mark" aria-hidden>
            ◈
          </span>
          <div>
            <p className="cert-name">{c.name}</p>
            <p className="cert-meta">
              {c.issuer} · <span className="dim">{c.year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
