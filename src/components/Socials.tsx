type Item = { label: string; handle: string; url: string }

export function Socials({ items }: { items: Item[] }) {
  return (
    <ul className="socials">
      {items.map((s) => (
        <li key={s.label}>
          <a href={s.url} target="_blank" rel="noreferrer noopener">
            <span className="dim">~/</span>
            {s.label} <span className="social-handle">@{s.handle}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
