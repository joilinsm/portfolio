# Joilin S M — Personal Portfolio

Futuristic student portfolio showcasing technical and management aptitude.

## Features
- React + Vite frontend with Tailwind CSS
- Dark mode by default, glassmorphism UI and neon accents
- GSAP and Framer Motion ready for animations
- Express server for contact form at `/api/contact` (saves to `server/data/contacts.json`)
- Responsive layout and accessibility considerations

## Local Setup
1. Install dependencies

```bash
npm install
```

2. Run server and client concurrently

```bash
npm run start
```

- `npm run dev` runs Vite only
- `npm run server` runs Express server only

Open http://localhost:5173 (Vite) — the Express API runs on port 4000 by default for local testing.

## Build for Production
```bash
npm run build
# To run the built app with the included server:
npm run start:prod
```

## Accessibility & Animations
- Skip-link, focus rings and ARIA attributes added for improved keyboard and screen-reader support.
- Subtle GSAP micro-interactions and entrance animations improve clarity while maintaining accessibility.

## Contact Form
The contact form posts to `/api/contact` and the server writes submissions to `server/data/contacts.json`.

## Notes
- Replace placeholder links (LinkedIn, GitHub, email) with real profiles.
- Replace `resume.pdf` and `src/assets/profile.svg` with final assets.

---

Designed for a final-year student with a hybrid Tech + Management focus.
