export const PROFILE = {
  name: "Mackenzie Iguiron",
  monogram: "MI",
  title: ["Full-Stack", "Developer"],
  tagline: "Welcome to my little corner of the internet.",
  intro:
    "I'm an AI Solutions intern and full-stack developer who builds high-performance, security-minded systems — from MERN admin platforms to Flutter apps. I find the signal in the noise, then ship it.",
  email: "mackenzie.g.iguiron@gmail.com",
  linkedin: "https://www.linkedin.com/in/mackenzie-iguiron-199620329/",
  github: "https://github.com/Zenn-source",
};

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
];

export const TECH_TICKER = [
  "React", "Node.js", "Express", "MongoDB", "Flutter",
  "Python", "Linux", "Neovim", "STRIDE", "OWASP ZAP", "FCM",
];

export const LIFE_TICKER = [
  "Shipping TodaGo", "Debugging at 2AM", "Threat modeling", "Sipping coffee",
  "Reading RFCs", "Securing endpoints", "Learning Rust", "Refactoring relentlessly",
];

export const PROJECTS = [
  {
    name: "TodaGo",
    status: "Shipped",
    url: "todago.app",
    stack: ["React", "Node.js", "Express", "MongoDB", "Flutter"],
    description:
      "A ride-hailing platform for tricycle (TODA) transport — a MERN admin website paired with a Flutter mobile app. Replaces manual radio dispatching with real-time matching, cutting coordination overhead and idle-wait time.",
    href: "#",
    gradient: "from-zinc-800 to-zinc-950",
  },
  {
    name: "SentryParams",
    status: "In Progress",
    url: "sentryparams.dev",
    stack: ["Node.js", "JWT", "STRIDE"],
    description:
      "A secure parameter-handling microservice: signed config delivery, scoped secrets, and STRIDE-modeled validation.",
    href: "#",
    gradient: "from-violet-500 to-indigo-700",
  },
  {
    name: "PulseFeed",
    status: "Concept",
    url: "pulsefeed.io",
    stack: ["Python", "MongoDB", "WebSocket"],
    description:
      "A real-time data-ingestion dashboard streaming events into Mongo with FCM threshold alerts.",
    href: "#",
    gradient: "from-orange-400 to-rose-500",
  },
];

export const SERVICES = [
  { label: "Full-Stack Development", sub: "MERN — end to end", iconName: "Code2" },
  { label: "Mobile Apps", sub: "Flutter, cross-platform", iconName: "Smartphone" },
  { label: "Secure API Architecture", sub: "STRIDE · OWASP-guided", iconName: "ShieldCheck" },
  { label: "Real-Time Systems", sub: "WebSocket & FCM sync", iconName: "Zap" },
  { label: "Data Pipelines", sub: "Ingestion into MongoDB", iconName: "Database" },
  { label: "AI Integration", sub: "LLM-driven workflows", iconName: "Sparkles" },
];

export const STACK = [
  { name: "React", tag: "Core Stack", glyph: "Re" },
  { name: "Node.js", tag: "Backend", glyph: "No" },
  { name: "MongoDB", tag: "Data", glyph: "Mo" },
  { name: "Flutter", tag: "Mobile", glyph: "Fl" },
  { name: "Python", tag: "Scripting", glyph: "Py" },
  { name: "Linux", tag: "Environment", glyph: "Lx" },
];

export const REST_STACK = [
  "Express", "Neovim", "STRIDE", "OWASP ZAP", "FCM", "Git", "Postman", "Figma",
];

export const PRINCIPLES = [
  {
    n: "01", title: "Sketch ugly, decide fast.",
    body: "Rough drafts beat polished guesses. I prioritize functional flows over trend-chasing — refine once the path is proven, not before.",
  },
  {
    n: "02", title: "Documentation scales systems.",
    body: "Technical logs, secure handoff notes, and explicit decision records keep a system understandable long after the commit.",
  },
  {
    n: "03", title: "Performance by design.",
    body: "Systems should be fast, lightweight, and free of bloated client-side overhead. Speed is a feature decided early, not patched late.",
  },
  {
    n: "04", title: "Defaults are decisions.",
    body: "Empty states, fallback behaviors, and structural ordering are designed on purpose — never left to chance.",
  },
];

export const EXPERIENCE = [
  {
    role: "AI Solutions Intern", org: "Current Role", range: "2025 — Present", glyph: "AI",
    summary: "Turning fuzzy requirements into measurable, testable system flows.",
    points: [
      "Prototype and evaluate LLM-driven workflows from concept to working demo.",
      "Build internal tooling and data pipelines that keep experiments reproducible and handoffs documented.",
    ],
  },
  {
    role: "Full-Stack Developer · TodaGo", org: "Independent Project", range: "2024 — 2025", glyph: "TG",
    summary: "Architected a real-time dispatch platform across web and mobile.",
    points: [
      "Built a MERN admin platform and a Flutter mobile client for tricycle dispatching.",
      "Designed the data model and live matching logic, removing manual radio coordination from the loop.",
    ],
  },
  {
    role: "Computer Science Studies", org: "Self-directed + Coursework", range: "Ongoing", glyph: "CS",
    summary: "Building depth in secure, performance-conscious software design.",
    points: [
      "Focused on threat modeling (STRIDE), secure software design, and systems architecture.",
    ],
  },
];
