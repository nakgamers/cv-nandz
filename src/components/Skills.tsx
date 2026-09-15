import { skills } from '../data'

export function Skills() {
  return (
    <div className="skills">
      {skills.map((g) => (
        <div className="skill-group" key={g.group}>
          <h3 className="skill-group-name">
            <span className="dim">$</span> {g.group}
          </h3>
          <ul className="chips">
            {g.items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
