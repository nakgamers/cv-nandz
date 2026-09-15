// CV data — Tinandar Hermawan (Nandz)
// Sumber: repo GitHub nakgamers/* + CV lama (nandz.github.io, 2022)

export const profile = {
  name: 'Tinandar Hermawan',
  nick: 'Nandz',
  title: 'Software Engineer · Founder Nandz Store',
  tagline: 'Membangun produk nyata yang dipakai orang — bukan sekadar demo.',
  location: 'Jakarta, Indonesia',
  email: 'nandz@nandz.my.id',
  website: 'https://nandz.my.id',
  photo: '/profile.jpg',
}

export const social = [
  { label: 'github', handle: 'nakgamers', url: 'https://github.com/nakgamers' },
  { label: 'linkedin', handle: 'tinandar-hermawan', url: 'https://www.linkedin.com/in/tinandar-hermawan-964667198/' },
  { label: 'instagram', handle: 'nandz.official', url: 'https://www.instagram.com/nandz.official/' },
  { label: 'facebook', handle: 'nakgamers198', url: 'https://web.facebook.com/nakgamers198' },
]

export const about = [
  'Saya seorang software engineer sekaligus founder Nandz Store — platform PPOB, top-up game, dan layanan AI API yang melayani ribuan transaksi.',
  'Fokus saya: produk yang punya nilai ekonomi nyata, arsitektur sederhana yang bisa diandalkan, dan pengalaman pengguna yang rapi di semua ukuran layar.',
  'Sehari-hari saya bekerja dengan Go, Next.js, dan CodeIgniter 4 — membangun, mendeploy, dan memelihara sendiri hingga ke produksi.',
]

export type Experience = {
  role: string
  org: string
  period: string
  summary: string
  stack: string[]
  link?: string
}

export const experiences: Experience[] = [
  {
    role: 'Founder & Software Engineer',
    org: 'Nandz Store',
    period: '2023 — Sekarang',
    summary:
      'Membangun dan menjalankan platform PPOB + top-up game + AI API sebagai produk komersial: backend Go, frontend Next.js, integrasi payment gateway, dan operasional harian.',
    stack: ['Go', 'Next.js', 'SQLite', 'Redis', 'Payment Gateway'],
    link: 'https://nandz.my.id',
  },
  {
    role: 'Backend & DevOps Engineer — Aplikasi Sekolah',
    org: 'SMK 11 Maret & Klien',
    period: '2021 — Sekarang',
    summary:
      'Membangun ekosistem aplikasi sekolah production: CBT (Computer Based Test), E-Learning, e-Vote, dan PPDB yang digunakan langsung oleh sekolah. Dari requirement sampai deploy dan maintenance.',
    stack: ['CodeIgniter 4', 'Go', 'PostgreSQL', 'Redis', 'Railway', 'Linux'],
  },
  {
    role: 'Network & System Administrator',
    org: 'Maintenance Team SMK 11 Maret',
    period: '2018 — 2020',
    summary:
      'Merancang dan memelihara infrastruktur jaringan sekolah: MikroTik, Cisco, dan server lokal.',
    stack: ['MikroTik', 'Cisco', 'Linux Server', 'Windows Server'],
  },
]

export type Project = {
  name: string
  desc: string
  stack: string[]
  url?: string
  repo?: string
}

export const projects: Project[] = [
  {
    name: 'CBT SMK 11 Maret',
    desc: 'Sistem ujian online berbasis CodeIgniter 4 — token login per siswa, manajemen soal, dan koreksi otomatis. Dipakai ujian sekolah sesungguhnya, bukan demo.',
    stack: ['CodeIgniter 4', 'PostgreSQL', 'Tailwind'],
    repo: 'https://github.com/nakgamers/cbt-smk11maret',
  },
  {
    name: 'E-Learning SMK 11 Maret',
    desc: 'Platform belajar daring sekolah dengan materi, tugas, dan penilaian. Arsitektur Go + PostgreSQL + Redis, frontend Next.js.',
    stack: ['Go', 'PostgreSQL', 'Redis', 'Next.js'],
    repo: 'https://github.com/nakgamers/elearning-smk11maret',
  },
  {
    name: 'Nandz Store',
    desc: 'Platform komersial PPOB, top-up game, dan AI API store. Dari pembayaran sampai fulfill transaksi otomatis terintegrasi provider.',
    stack: ['Go', 'Next.js', 'SQLite', 'DigiFlazz'],
    url: 'https://nandz.my.id',
  },
  {
    name: 'e-Vote Pilketos',
    desc: 'Sistem pemungutan suara elektronik untuk pemilihan ketua OSIS sekolah — cepat, transparan, dan sekali pakai per event.',
    stack: ['CodeIgniter 4', 'MySQL'],
    repo: 'https://github.com/nakgamers/evote',
  },
]

export type Cert = {
  name: string
  issuer: string
  year: string
}

export const certifications: Cert[] = [
  { name: 'MikroTik Certified — MTCNA', issuer: 'MikroTik', year: '2019' },
  { name: 'Sertifikasi Jaringan Komputer', issuer: 'SMK 11 Maret / BNSP', year: '2020' },
  { name: 'Cloud & DevOps Essentials', issuer: 'Self-directed / On-the-job', year: '2023' },
  { name: 'AI Engineering Practitioner', issuer: 'Self-directed / On-the-job', year: '2024' },
]

export const education = [
  {
    school: 'Universitas Bina Sarana Informatika',
    major: 'Teknologi Informasi',
    period: '2023 — Sekarang',
  },
  {
    school: 'SMKS 11 Maret',
    major: 'Teknik Komputer dan Jaringan',
    period: '2018 — 2021',
  },
]

export const skills = [
  { group: 'Backend', items: ['Go', 'PHP / CodeIgniter 4', 'Laravel', 'Node.js'] },
  { group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { group: 'Database', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'] },
  { group: 'DevOps', items: ['Linux', 'Docker', 'Railway', 'Cloudflare', 'GitHub Actions'] },
  { group: 'Jaringan', items: ['MikroTik', 'Cisco', 'ZeroTier', 'VPN'] },
]
