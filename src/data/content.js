export const PROFILE = {
  name: "Mackenzie Iguiron",
  monogram: "MI",
  title: ["Full-Stack", "Developer"],
  tagline: "Welcome to my little corner of the internet.",
  intro:
    "AI Solutions Intern at Sofi AI and full-stack developer. I build real-time systems, AI-powered tools, and mobile apps — from tricycle dispatch platforms to healthcare compliance engines.",
  email: "mackenzie.g.iguiron@gmail.com",
  linkedin: "https://www.linkedin.com/in/mackenzie-iguiron-199620329/",
  github: "https://github.com/Zenn-source",
  resume:
    "https://drive.google.com/file/d/1J4X0KijfTlASI-bfqXcjT3pIznR4FJtu/view",
};

export const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

export const TECH_TICKER = [
  "React", "Node.js", "Express", "MongoDB", "Flutter",
  "Python", "FastAPI", "OpenAI API", "MySQL", "PHP",
  "Linux", "AWS", "Figma", "Git",
];

export const LIFE_TICKER = [
  "Shipping TodaGo", "Debugging at 2AM", "Threat modeling", "Sipping coffee",
  "Reading RFCs", "Securing endpoints", "Prompt engineering", "Refactoring relentlessly",
];

export const PROJECTS = [
  {
    name: "TodaGo",
    status: "In Progress",
    url: "todago.app",
    stack: ["React", "Node.js", "Express", "MongoDB", "Flutter"],
    description:
      "A tricycle-hailing platform with a MERN admin web and Flutter mobile client, featuring neural-network demand forecasting and intelligent dispatch — coordinated with BPToda Molino, Cavite for real-world integration.",
    href: "#",
    gradient: "from-emerald-500 to-teal-700",
    image: "/images/todago.png",
    heroImage: "/images/todago-hero.png",
  },
  {
    name: "Karensderya",
    status: "Shipped",
    url: "Karensderya",
    stack: ["PHP", "MySQL", "Linux"],
    description:
      "A management system built to digitize a local eatery's operations — replacing paper-based logs with digital order tracking, hardened with security testing and edge-case validation.",
    href: "#",
    gradient: "from-orange-400 to-rose-500",
    image: "/images/karensderya.png",
    heroImage: "/images/karensderya-hero.png",
  },
  {
    name: "MediGuard",
    status: "Shipped",
    url: "github.com/Zenn-source",
    stack: ["Python", "FastAPI", "OpenAI GPT-4o"],
    description:
      "An AI-powered healthcare ad compliance engine — uses GPT-4o to detect unsubstantiated medical claims, restricted imagery, and policy violations with severity-based scoring.",
    href: "#",
    gradient: "from-violet-500 to-indigo-700",
    image: "/images/mediguard.png",
    heroImage: "/images/mediguard-hero.png",
  },
];

export const SERVICES = [
  { label: "Full-Stack Development", sub: "MERN — end to end", iconName: "Code2" },
  { label: "Mobile Apps", sub: "Flutter, cross-platform", iconName: "Smartphone" },
  { label: "AI Integration", sub: "LLM-driven workflows", iconName: "Sparkles" },
  { label: "Secure API Architecture", sub: "STRIDE · OWASP-guided", iconName: "ShieldCheck" },
  { label: "Real-Time Systems", sub: "WebSocket & event-driven", iconName: "Zap" },
  { label: "Data Pipelines", sub: "Ingestion & storage", iconName: "Database" },
];

export const STACK = [
  { name: "React", tag: "Frontend", glyph: "Re", devicon: "devicon-react-original colored" },
  { name: "Node.js", tag: "Backend", glyph: "No", devicon: "devicon-nodejs-plain colored" },
  { name: "MongoDB", tag: "Database", glyph: "Mo", devicon: "devicon-mongodb-plain colored" },
  { name: "Flutter", tag: "Mobile", glyph: "Fl", devicon: "devicon-flutter-plain colored" },
  { name: "Python", tag: "AI / Scripts", glyph: "Py", devicon: "devicon-python-plain colored" },
  { name: "n8n", tag: "Automation", glyph: "n8n", img: "https://cdn.simpleicons.org/n8n/FF6D5A" },
];

export const REST_STACK = [
  "Express", "FastAPI", "Streamlit", "LangChain", "PHP", "Dart",
  "OpenAI API", "AWS", "Linux", "Git", "Figma",
  "Postman"
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
    role: "AI Solutions Intern",
    org: "Sofi AI",
    range: "Apr 2026 — Present",
    glyph: "AI",
    summary: "Building LLM-driven workflows and internal tooling at an AI startup.",
    points: [
      "Prototype and evaluate LLM-powered features from concept to working demo.",
      "Build internal data pipelines and tooling to keep experiments reproducible and handoffs documented.",
    ],
  },
  {
    role: "Project Manager · TodaGo",
    org: "Independent Project",
    range: "Aug 2025 — Present",
    glyph: "TG",
    summary: "Architecting a real-time tricycle dispatch platform across web and mobile.",
    points: [
      "Building a MERN admin platform and Flutter mobile client with neural-network demand forecasting.",
      "Coordinating with BPToda Molino, Cavite for local real-world integration and field testing.",
    ],
  },
  {
    role: "Project Manager · Karensderya",
    org: "Academic Project",
    range: "Sep 2025 — Dec 2025",
    glyph: "KS",
    summary: "Digitized operations for a local eatery, replacing paper-based logs end-to-end.",
    points: [
      "Developed a full management system with digital order tracking and server hardening.",
      "Conducted security and functional testing including test case design and edge-case validation.",
    ],
  },
  {
    role: "Technical Head",
    org: "NU Manila – NSRC Unit",
    range: "Nov 2023 — Aug 2024",
    glyph: "NU",
    summary: "Directed technical operations for campus-wide events.",
    points: [
      "Oversaw livestreams, audio-visual equipment, and presentation systems for campus events.",
      "Coordinated with team members to troubleshoot and prepare digital materials for seamless execution.",
    ],
  },
  {
    role: "IT Work Immersion",
    org: "Jentec Inc.",
    range: "Mar 2023 — May 2023",
    glyph: "JT",
    summary: "Three-month IT internship focused on document management and data integrity.",
    points: [
      "Managed and categorized 1,000+ internal documents, ensuring data integrity and easy retrieval for the IT team.",
    ],
  },
];
