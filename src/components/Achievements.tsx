import { achievements } from '../ach'

// Badge GitHub — muncul fade-in saat parent kasih sinyal (sehabis typing hero)
export function Achievements({ show }: { show: boolean }) {
  return (
    <ul className={'ach' + (show ? ' ach-show' : '')}>
      {achievements.map((a) => (
        <li key={a.name} title={a.name}>
          <img src={a.icon} alt={a.name} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  )
}
