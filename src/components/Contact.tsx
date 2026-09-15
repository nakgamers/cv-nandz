import { profile, social } from '../data'

// Contact CTA — gaya prompt terminal
export function Contact() {
  return (
    <section id="contact" className="card">
      <header className="card-head">
        <span className="card-icon" aria-hidden>
          ✉
        </span>
        <h2 className="card-title">
          <span className="dim">~/</span>
          contact
          <span className="caret">_</span>
        </h2>
      </header>
      <div className="card-body">
        <p className="contact-line">
          <span className="dim">$</span> echo $EMAIL →{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="contact-cta">
          <a className="btn-primary" href={`mailto:${profile.email}`}>
            [ kirim email ]
          </a>
          <a className="btn-ghost" href={profile.website}>
            [ kunjungi nandz.my.id ]
          </a>
        </div>
        <ul className="socials">
          {social.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer noopener">
                <span className="dim">~/</span>
                {s.label} <span className="social-handle">@{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
