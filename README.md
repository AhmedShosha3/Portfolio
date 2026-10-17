# Ahmed Ibrahim Mohamed Kamel — Portfolio

Personal portfolio of a Mathematics and Computer Science graduate (Suez University, 2026): web and mobile projects, applied mathematical modeling, and robotics teaching.

**Live site:** 

## Highlights

- Project pages that state what I built myself and what belongs to a team
- Screenshot viewer with keyboard and swipe navigation
- Light and dark themes with a toggle (dark by default)
- Filterable projects and searchable certificates
- Accessible by design: skip link, focus management, semantic landmarks, reduced-motion support
- Fully static, no backend

## Built with

React 18 · Vite 5 · plain CSS (design tokens) · hash-based routing

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static files in dist/
npm run preview   # preview the production build
```

Requires Node.js 18 or newer.

## Project structure

```
src/
  data/portfolio.js   all content: links, skills, projects, experience, certificates
  components/         one file per section
  hooks/              theme, hash routing, active nav link
  styles/             tokens, base, sections, project
public/
  ProjectsScreenshots/   project images and demo video
  CV.pdf
  og-image.png           social share image
```

## Customizing

- **Content:** edit `src/data/portfolio.js`. Empty links stay hidden.
- **New project:** copy an object in `projects` and give it a new `id`; it gets a card and a page.
- **Screenshots:** place files in `public/ProjectsScreenshots/<Project>/` and list them in the project's `screenshots`. File names are case-sensitive on hosting servers.
- **Colors and fonts:** `src/styles/tokens.css`.

## Deploy

- **Netlify:** build command `npm run build`, publish directory `dist`.
- **Vercel:** import the repo; the Vite preset works as-is.
- **GitHub Pages:** publish the contents of `dist`. `base: "./"` keeps paths working in sub-folders.

## Contact

[LinkedIn](https://www.linkedin.com/in/ahmed-shosha-212192296/) · [GitHub](https://github.com/AhmedShosha3) · ahmed.shoshua@gmail.com
