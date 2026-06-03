# Mackenzie Iguiron — Portfolio

Personal portfolio built with React + Vite + Tailwind CSS v4.

## Stack

- **React 19** + **Vite** — component-based SPA
- **Tailwind CSS v4** — utility styling via `@tailwindcss/vite` (no config file)
- **Lucide React** — UI icons
- **Devicon + Simple Icons** — tech stack logos
- **General Sans** (Fontshare) + **JetBrains Mono** (Google Fonts)

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the dist/ build
```

## Project images

Drop screenshots into `public/images/` matching these filenames:

| File | Used in |
|------|---------|
| `todago.png` | Work section |
| `karensderya.png` | Work section |
| `mediguard.png` | Work section |
| `todago-hero.png` | Hero fan stack |
| `karensderya-hero.png` | Hero fan stack |
| `mediguard-hero.png` | Hero fan stack |

Cards fall back to gradient placeholders if files are missing.

## Content

All copy and structured data lives in `src/data/content.js`. Edit that file to update profile info, projects, experience, stack, and nav links — no component changes needed.
