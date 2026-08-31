# Krithik Sharan S A — Portfolio

Personal portfolio website. Originally prototyped on Lovable, now a self-hosted
Vite + React app deployed on Netlify with a Supabase backend for the live
visitor counter and contact form.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** + **framer-motion**
- **react-router-dom** (client-side routing)
- **Supabase** — visitor counter + contact-message storage
- **Netlify** — hosting

## Local development

```bash
npm install
cp .env.example .env   # fill in Supabase values
npm run dev            # http://localhost:8080
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Environment variables

See `.env.example`. Set the same variables in the Netlify dashboard
(Site settings → Environment variables) for production builds.

## Content

All portfolio content lives in `src/data/*`. Update those files to change
experience, projects, certificates, education, and volunteering entries.

## Backend

- SQL schema: `supabase/migrations/`
- Edge functions: `supabase/functions/`

## Deployment

Push to the default branch; Netlify builds from `netlify.toml`.
