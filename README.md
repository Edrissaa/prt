# ReelUp — marketing site

React + Vite + TypeScript, Tailwind CSS v4, shadcn/ui-style primitives (Radix + cva).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

- Design tokens (palette, fonts, shadows, motion) live in `src/index.css`.
- Copy and image URLs live in `src/data/content.ts`. Images load through `SmartImage`, which falls back to a tinted block if a URL is unavailable — drop your own files in `public/` and update the URLs to self-host.
- Section reveals use `Reveal` (IntersectionObserver); all motion respects `prefers-reduced-motion`.
