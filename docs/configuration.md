# Configuration & Tooling

## Package Manager

**bun v1.3.5** — specified in `package.json` `packageManager` field. Do not use npm, yarn, or pnpm.

## Scripts

| Command | Script | Description |
|---------|--------|-------------|
| `bun dev` | `next dev` | Start development server |
| `bun run build` | `next build` | Production build (triggers Velite via webpack plugin) |
| `bun start` | `next start` | Start production server |
| `bun check` | `biome check` | Run Biome linting and formatting checks |
| `bun check:fix` | `biome check --fix` | Auto-fix safe lint/format issues |
| `bun check:fix-unsafe` | `biome check --fix --unsafe` | Auto-fix including unsafe transforms |

Note: there are no `lint` or `lintfix` scripts. Use `check` / `check:fix` instead.

## TypeScript

Configured in `tsconfig.json`:

| Setting | Value |
|---------|-------|
| Strict mode | `true` |
| Module | `esnext` |
| Module resolution | `bundler` |
| JSX | `preserve` (handled by Next.js) |
| Incremental | `true` |

### Path Aliases

| Alias | Resolves To | Usage |
|-------|-------------|-------|
| `@/*` | `./*` (project root) | `import { cn } from "@/lib/utils"` |
| `#site/content` | `./.velite` | `import { posts } from "#site/content"` |

## Biome

Configured in `biome.json` (schema v2.4.3). Handles both linting and formatting — Prettier is not used.

### Formatter Settings

| Setting | Value |
|---------|-------|
| Indent | 2 spaces |
| Line width | 80 characters |
| Line endings | LF |
| Quotes | Double |
| JSX quotes | Double |
| Semicolons | Always |
| Trailing commas | Always |
| Arrow parens | Always |
| Bracket spacing | true |

### Key Linter Rules

| Rule | Level | Notes |
|------|-------|-------|
| `recommended` | baseline | All recommended rules enabled |
| `noConsole` | warn | Allows `assert`, `error`, `info`, `warn` |
| `noUnusedImports` | warn | — |
| `noUnusedVariables` | warn | — |
| `useSortedClasses` | warn | Tailwind class sorting (nursery) |
| `noExplicitAny` | info | — |
| `noForEach` | warn | Prefer `for...of` |
| `useImportType` | off | — |
| `useExhaustiveDependencies` | off | — |

### A11y Rules (Disabled)

`noStaticElementInteractions`, `noSvgWithoutTitle`, `useKeyWithClickEvents` — all off.

### CSS

CSS formatter and linter are both disabled. Tailwind directives (`@tailwind`, `@apply`) are allowed via `tailwindDirectives: true`.

### Scope

Biome runs on files matching:
```
app/**, components/**, lib/**, hooks/**, *.ts, *.tsx, *.js, *.jsx, *.json, *.css
```

Excludes: `node_modules`, `.next`, `dist`, `build`, `**/generated`, `prisma/migrations`, `.worktrees`

## Next.js Configuration

Defined in `next.config.mjs`:

- **Velite integration:** Custom `VeliteWebpackPlugin` hooks into `compiler.hooks.beforeCompile` (see [Content System](./content-system.md))
- **Remote images:** `github-readme-stats.on-cloud.eu.org` allowed via `images.remotePatterns`

## Build Pipeline

What happens during `bun run build`:

1. Next.js starts webpack compilation
2. `VeliteWebpackPlugin.beforeCompile` fires → runs `velite build`
3. Velite reads `content/blog/**/*.mdx`, processes through the rehype pipeline
4. Output written to `.velite/` (typed data) and `public/static/` (assets)
5. Next.js compiles pages, importing content from `.velite/` via `#site/content`
6. Static pages generated for all routes

## OG Image Generation

`app/api/og/route.tsx` generates dynamic Open Graph images using Next.js Edge Runtime `ImageResponse`. Used automatically by the metadata system for blog posts and pages.

## Site Configuration

All site metadata is centralized in `config/site.ts`. Key sections:

| Property | Description |
|----------|-------------|
| `siteConfig.name` | "OnCloud Blog" |
| `siteConfig.url` | "https://on-cloud.tw" |
| `siteConfig.author` | "OnCloud" |
| `siteConfig.links` | Social links (email, GitHub, Facebook, Instagram, Discord, Gravatar) |
| `siteConfig.home` | Home page title and description |
| `siteConfig.blog` | Blog section metadata |
| `siteConfig.project` | Project list, status system, default view |
| `siteConfig.gallery` | Gallery section metadata |
| `siteConfig.about` | About page data (name, location, work title, bio, avatar) |

The `SiteConfig` type is exported for type-safe access throughout the app.
