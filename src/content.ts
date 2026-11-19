/**
 * Every word on the site lives here. Copy is carried over from v2 (matiee.online)
 * and re-dressed for the esports theme; edit this file, not the components.
 */

export const site = {
  name: 'Matieee',
  fullName: 'Reymart Edra',
  title: 'Junior Software Eng.',
  email: 'reymartedra8@gmail.com',
  github: 'https://github.com/matedra',
  githubLabel: 'github.com/matedra',
  location: 'Isabela, Philippines',
  team: 'DORY PH',
}

export const nav = [
  { label: 'Profile', href: '#profile' },
  { label: 'Loadout', href: '#loadout' },
  { label: 'Matches', href: '#matches' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  tag: 'Player 01',
  lede: 'Engineer, photographer and designer from the Philippines. Cum Laude at ISU, now shipping on the web team at DORY PH.',
  /** Corner HUD readouts around the portrait. */
  hud: [
    { label: 'IGN', value: 'Matieee' },
    { label: 'Team', value: 'DORY PH' },
    { label: 'Region', value: 'PH · Isabela' },
    { label: 'Status', value: 'In match' },
  ],
}

export const profile = {
  eyebrow: 'Player profile',
  title: 'Builds for the web, mobile, and the creative side.',
  lead: "I'm Reymart Edra, a software engineer, photographer, and graphic designer. I graduated Cum Laude from Isabela State University and now work as a Junior Software Engineer on the web team at DORY PH.",
  body: [
    "On the tech side I've built an event management platform, a music streaming app, a point-of-sale system, and more. On the creative side I shoot with intention, design with purpose, and edit with Photoshop, Lightroom, Premiere Pro, After Effects, and DaVinci Resolve.",
    "What drives me is building things that matter, whether that's clean code, a compelling photograph, or a brand identity that feels right. Great work is intentional, and intention doesn't care if the medium is code or a camera.",
  ],
  stats: [
    { value: '4+', label: 'Projects shipped' },
    { value: '3', label: 'Disciplines' },
    { value: '1.74', label: 'GWA · Cum Laude' },
    { value: '∞', label: 'Learning mode' },
  ],
  roles: ['Frontend & Mobile', 'Photographer', 'Graphic Designer'],
}

/** `invert` flips logos that are drawn black so they show on the dark tiles. */
export type Tool = { name: string; logo?: string; invert?: boolean }

export const loadout = {
  eyebrow: 'Loadout',
  title: 'What I bring into every match.',
  groups: [
    {
      id: 'engineer',
      slot: 'Primary',
      title: 'Engineer',
      blurb: 'Web and mobile, front to back.',
      tools: [
        { name: 'JavaScript', logo: 'javascript' },
        { name: 'TypeScript', logo: 'typescript' },
        { name: 'React', logo: 'react' },
        { name: 'HTML5', logo: 'html5' },
        { name: 'CSS3', logo: 'css3' },
        { name: 'Tailwind CSS', logo: 'tailwindcss' },
        { name: 'Node.js', logo: 'nodejs' },
        { name: 'MySQL', logo: 'mysql' },
        { name: 'Git', logo: 'git' },
        { name: 'GitHub', logo: 'github', invert: true },
        { name: 'React Native', logo: 'react' },
        { name: 'Linux', logo: 'cachyos' },
        { name: 'Android Studio', logo: 'androidstudio' },
        { name: 'VS Code', logo: 'vscode' },
        { name: 'npm', logo: 'npm' },
        { name: 'Vite', logo: 'vite' },
        { name: 'Framer Motion', logo: 'framer' },
        { name: 'Ghidra', logo: 'ghidra' },
      ] satisfies Tool[],
    },
    {
      id: 'creative',
      slot: 'Secondary',
      title: 'Creative',
      blurb: 'Shoot, design, edit.',
      tools: [
        { name: 'Photoshop', logo: 'photoshop' },
        { name: 'After Effects', logo: 'aftereffects' },
        { name: 'Premiere Pro', logo: 'premierepro' },
        { name: 'Lightroom Classic', logo: 'lightroom-classic' },
        { name: 'DaVinci Resolve', logo: 'davinci' },
      ] satisfies Tool[],
    },
    {
      id: 'ai',
      slot: 'Utility',
      title: 'AI & tooling',
      blurb: 'Faster builds, same quality bar.',
      tools: [
        { name: 'Claude Code', logo: 'claude' },
        { name: 'OpenCode', logo: 'opencode' },
        { name: 'Ollama', logo: 'ollama', invert: true },
        { name: 'DeepSeek', logo: 'deepseek' },
        { name: 'Qwen', logo: 'qwen' },
      ] satisfies Tool[],
    },
  ],
}

export type Match = {
  id: string
  index: string
  title: string
  tagline: string
  description: string
  stack: string[]
  image: string
  imageAlt: string
  source?: { href: string; label: string }
}

export const matches = {
  eyebrow: 'Match history',
  title: "Things I've built.",
  items: [
    {
      id: 'sonara',
      index: '01',
      title: 'Sonara',
      tagline: 'YouTube-powered music streaming',
      description:
        'A music streaming app featuring queue management, autoplay, and smart search. Built with modern Android architecture and YouTube integration.',
      stack: ['Kotlin', 'Jetpack Compose', 'Media3', 'Ktor', 'Room', 'Coil', 'Hilt', 'NewPipe Extractor'],
      image: '/images/sonara.webp',
      imageAlt: 'Sonara landing page: Premium music, zero subscription, with a phone showing the Now Playing screen',
      source: { href: 'https://github.com/MatEdra/Sonara', label: 'Source on GitHub' },
    },
    {
      id: 'coa',
      index: '02',
      title: 'COA Team 5 Multi-Monitory System',
      tagline: 'Web-based internal monitoring & coordination',
      description:
        'Built during my COA internship: a monitoring system to streamline internal coordination, troubleshooting, and documentation across teams.',
      stack: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'PHP', 'MySQL'],
      image: '/images/coa.webp',
      imageAlt: 'COA Team 5 dashboard with submissions charts, an activity log and municipality quick access',
      source: { href: 'https://github.com/MatEdra/COA_Monitoring_System', label: 'Source on GitHub' },
    },
    {
      id: 'mrnhs',
      index: '03',
      title: 'MRNHS Student File Archiving',
      tagline: 'School management with ID generation',
      description:
        'A complete school management system featuring student archiving, visual ID generation, grading, and role-based access control.',
      stack: ['PHP', 'MySQL', 'JavaScript', 'PHPSpreadsheet', 'HTML/CSS'],
      image: '/images/mrnhs.webp',
      imageAlt: 'Student file archiving dashboard showing enrollment totals, quick actions and a sections table',
    },
    {
      id: 'starbox',
      index: '04',
      title: 'Starbox Cawffee ’en Tea POS PWA',
      tagline: 'PWA point-of-sale for retail',
      description:
        'A progressive web app POS handling transactions, inventory management, and sales reporting. Works offline with modern PWA capabilities.',
      stack: ['React 18', 'Vite 6', 'Tailwind CSS 3', 'Supabase'],
      image: '/images/starbox.webp',
      imageAlt: 'Starbox point-of-sale screen with a coffee menu grid and an order receipt panel',
    },
  ] satisfies Match[],
}

export const career = {
  eyebrow: 'Career bracket',
  title: 'The road to the main stage.',
  /** Oldest first: each stage is a round in the bracket. */
  stages: [
    {
      round: 'Qualifiers',
      when: '2022 to 2026',
      role: 'B.S. Information Technology',
      org: 'Isabela State University',
      body: 'Graduated Cum Laude. Strong foundation in software engineering, information systems, and digital design.',
      tags: ['Cum Laude', 'IT', 'Web & Mobile'],
    },
    {
      round: 'Group stage',
      when: '2024 to present',
      role: 'Independent Software Engineer',
      org: 'Self-directed projects',
      body: 'Designed, built, and shipped multiple full-stack applications across web and mobile platforms.',
      tags: ['React', 'Flutter', 'Node.js', 'Full-Stack'],
    },
    {
      round: 'Playoffs',
      when: 'Internship',
      role: 'IT/Dev Intern',
      org: 'Commission on Audit (COA)',
      body: 'Hands-on experience in IT systems coordination, internal tooling support, and cross-department technical tasks.',
      tags: ['IT Support', 'Internal Tools', 'Documentation'],
    },
    {
      round: 'Main stage',
      when: 'Aug 2026 to present',
      role: 'Junior Software Engineer',
      org: 'DORY PH · Web team',
      body: 'Building web products and UI on the DORY web team, from marketing sites to product design.',
      tags: ['Web', 'UI Design', 'Front-end'],
      live: true,
    },
  ],
}

export const trophies = {
  eyebrow: 'Trophy case',
  title: 'Beyond the code.',
  columns: [
    {
      title: 'Awards',
      items: ['Polymath Artist', 'Outstanding in Visual Arts', 'Top 5 Natatanging Techversity', 'Journalist of the Year'],
    },
    {
      title: 'Championships',
      items: ['4 consecutive University Meets', '1 Regional', '1 Journalympic'],
    },
    {
      title: 'Leadership',
      items: ['eSports President', 'Multimedia Guild Master', 'THR’s Layout Artist', 'Student Body Organization'],
    },
  ],
}

export const contact = {
  eyebrow: 'Queue up',
  title: "Let's build something great together.",
  body: "I'm currently a Junior Software Engineer at DORY PH. Got a project, a collab, or just want to connect? My inbox is open.",
  sign: "GG, thanks for stopping by.",
}
