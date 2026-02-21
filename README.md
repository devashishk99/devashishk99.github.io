# Devashish Kamble — Portfolio

A single-page developer portfolio built with React, TypeScript, and GSAP. Dark theme, terminal-style hero, scroll-driven animations, and sections for About, Education, Experience, Projects, Skills, Philosophy, and Contact.

---

## Tech stack

| Layer | Tech |
|-------|------|
| **Build** | [Vite](https://vitejs.dev/) 7 |
| **Framework** | [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 3 + [shadcn/ui](https://ui.shadcn.com/) (New York) |
| **Animation** | [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Inter (body), JetBrains Mono (headings / code) |

---

## Project structure

```
src/
├── App.tsx              # Root layout, composes sections
├── main.tsx             # Entry point, GSAP plugin registration
├── index.css             # Global styles, Tailwind, theme
├── components/           # Shared UI
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── SectionHeader.tsx
├── sections/             # Page sections (one per file)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── PhilosophySection.tsx
│   └── ContactSection.tsx
├── hooks/
│   └── useGlobalSnap.ts  # Scroll-snap for pinned sections
└── lib/
    └── utils.ts          # cn() for class names
public/                    # Static assets (images, 404.html)
.github/workflows/         # GitHub Actions (deploy to GitHub Pages)
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at [http://localhost:5173](http://localhost:5173) |
| `npm run build` | Type-check and build for production → `dist/` |
| `npm run preview` | Serve `dist/` locally (after build) |
| `npm run lint` | Run ESLint |

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Deploy to GitHub Pages

This repo is set up to deploy to **https://\<username\>.github.io** via GitHub Actions.

1. Create a **public** repo named **\<username\>.github.io**.
2. Push this app (with `.github/workflows/deploy.yml`) to the `main` branch.
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. After the workflow runs, the site is live at **https://\<username\>.github.io**.

Full steps and troubleshooting: **[DEPLOY.md](./DEPLOY.md)**.

---

## Fork & reuse

If you like this portfolio, feel free to **fork** or **reproduce the code** to build your own site. Swap in your content, tweak the sections and styling, and deploy to your own GitHub Pages (or elsewhere). No need to ask—just go for it.

---

## License

Private — portfolio use.
