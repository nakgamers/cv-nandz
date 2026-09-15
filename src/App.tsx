import { useEffect, useState } from 'react'
import { profile, social, about } from './data'
import { Boot } from './components/Boot'
import { TerminalWindow } from './components/TerminalWindow'
import { Section } from './components/Section'
import { Experiences } from './components/Experiences'
import { Projects } from './components/Projects'
import { Certs } from './components/Certs'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Socials } from './components/Socials'
import { Contact } from './components/Contact'
import { Achievements } from './components/Achievements'
import { Photo } from './components/Photo'

function useTyped(lines: string[], done: boolean, cps = 22) {
  const [out, setOut] = useState<string[]>([])
  useEffect(() => {
    if (!done) return
    let li = 0, ci = 0
    const cur: string[] = []
    const tick = () => {
      if (li >= lines.length) return
      const line = lines[li]
      cur[li] = line.slice(0, ci++)
      setOut([...cur])
      if (ci > line.length) { li++; ci = 0 }
      setTimeout(tick, 1000 / cps)
    }
    tick()
  }, [done, lines.join('|'), cps])
  const finished = out.length === lines.length && (out[out.length - 1] || '').length >= lines[lines.length - 1].length
  return { out, finished }
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const header = [
    `nandz@nandz.my.id ~ % whoami`,
    `${profile.name} — ${profile.title}`,
    `lokasi: ${profile.location}`,
    ``,
    `nandz@nandz.my.id ~ % cat intro.md`,
    ...about,
  ]
  const { out, finished } = useTyped(header, booted)

  return (
    <div className="app">
      <div className="scanline" aria-hidden />
      <div className="vignette" aria-hidden />
      <Boot onDone={() => setBooted(true)} />
      <main className="layout" style={{ visibility: booted ? 'visible' : 'hidden' }}>
        <TerminalWindow>
          <div className="hero">
            <div className="photo-col">
              <Photo />
              <div className="photo-side">
                <pre className="photo-ascii" aria-hidden>{`+------------------+\n|  whoami -> nandz |\n+------------------+`}</pre>
                <Achievements show={out.length >= 5} />
              </div>
            </div>
            <div className="hero-main">
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-title">{profile.title}</p>
              <p className="hero-tag">{profile.tagline}</p>
              <div className="hero-lines" aria-busy={!finished}>
                {out.map((l, i) => (
                  <div className="line" key={i}>
                    <span className={i === 0 || i === 4 ? 'prompt-line' : ''}>{l}</span>
                    {i === out.length - 1 && !finished && <span className="caret">▋</span>}
                  </div>
                ))}
              </div>
              <Socials items={social} />
            </div>
          </div>
        </TerminalWindow>

        <div className="sections">
          <Section id="experience" title="experience" icon="▚">
            <Experiences />
          </Section>
          <Section id="projects" title="projects" icon="▞">
            <Projects />
          </Section>
          <Section id="certs" title="certifications" icon="◈">
            <Certs />
          </Section>
          <Section id="education" title="education" icon="▤">
            <Education />
          </Section>
          <Section id="skills" title="skills" icon="▥">
            <Skills />
          </Section>

          <Contact />
        </div>

        <footer className="foot">
          <span>© 2026 {profile.name}</span>
          <span className="dim">built with react + vite · themed like a kernel console</span>
        </footer>
      </main>
    </div>
  )
}
