# Manisha Roy — Fashion Designer Portfolio

Next.js portfolio site for Manisha Roy, Mumbai fashion designer and founder of Fashormen Ladies & Baby Wear.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint

## Project Structure

```
src/
  app/                 # Routes and pages
  components/          # Reusable UI components
  data/content.ts      # Skills, gallery, timeline data
  hooks/               # Client-side hooks
public/                # Static assets (logo, brand image)
```

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services & skills |
| `/gallery` | Portfolio gallery |
| `/contact` | Contact form |
| `/skills/[id]` | Skill detail |
| `/collections/[id]` | Collection detail |

Legacy URLs (`skill-detail.html?id=0`, `collection-detail.html?id=0`) redirect to the new routes.
