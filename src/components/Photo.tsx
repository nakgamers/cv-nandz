import { profile } from '../data'

// Foto profil dengan ASCII-art frame + scanline, gaya kernel console.
export function Photo() {
  return (
    <div className="photo-frame">
      <span className="photo-scan" />
      <img src="/profile.jpg" alt={profile.name} />
    </div>
  )
}
