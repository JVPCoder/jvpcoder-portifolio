# João Vitor Pires, Full Stack Software Engineer

Personal portfolio. Bilingual (English / Português), built around case studies of production work: what broke, how I found it, what I decided, and what changed.

## Why it's built this way

- **Content is typed data, not markup.** Case studies, the stack and the experience timeline live in `src/content/` as TypeScript objects. The Portuguese dictionary is typed against the English one, so a missing translation is a **build error**, not a bug someone finds later.
- **No router library.** The site has two route shapes (`/:lang` and `/:lang/work/:slug`). A 30-line pure function (`src/lib/route.ts`) parses them, with tests. Navigation uses the History API through `useSyncExternalStore`.
- **No UI framework, no CSS framework.** Plain CSS with design tokens on `:root` and CSS Modules per component. Light and dark mode follow the system.
- **Diagrams are hand-written SVG components.** They're themeable, accessible (`role="img"` + label) and readable on a 360px phone.
- **Few dependencies on purpose:** React, the Geist font and Phosphor icons. Everything else is the platform.
- **Content tests guard honesty.** `tests/content.test.ts` fails if any field is empty in either language, if a "used in production" skill doesn't link to a real case study, or if typographic dashes sneak into the copy.

## Stack

Vite 8, React 19, TypeScript 7 (strict), oxlint, `node --test` (native TypeScript, no test library). Deployed on Vercel as a static SPA.

## Commands

```bash
npm install
npm run dev       # local dev server
npm test          # router + content integrity tests
npm run lint      # oxlint
npm run build     # type check + production build to dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  content/        case studies, stack, experience, UI dictionaries (en, pt)
  components/     UI components (+ .module.css) and SVG diagrams
  pages/          Home, CaseStudy, NotFound
  lib/            route parsing, router hooks, Link
tests/            node --test suites
```

## Contact

jvpcoder@gmail.com · [LinkedIn](https://www.linkedin.com/in/jvpcoder) · [GitHub](https://github.com/JVPCoder)
