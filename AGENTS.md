# AGENTS.md

## Project Overview

**OnCloud Blog** — A personal blog and portfolio site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Content is authored in MDX and processed by Velite at build time.

- **Live site:** https://on-cloud.tw
- **Repository:** https://github.com/OnCloud125252/OnCloud-Blog

## Build & Run Commands

| Command | Description |
|---------|-------------|
| `bun install` | Install dependencies |
| `bun dev` | Start development server |
| `bun run build` | Production build (includes Velite content processing) |
| `bun start` | Start production server |
| `bun lint` | Run Next.js linter |
| `bun lintfix` | Auto-fix lint issues |

**Package manager:** bun (specified in `package.json`). Do not use npm, yarn, or pnpm.

## Tech Stack

- **Framework:** Next.js 14.1.2 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Content:** MDX via [Velite](https://velite.js.org/) (content CMS at build time)
- **Linter/Formatter:** Biome (`biome.json` at root)
- **Dark mode:** next-themes

## Architecture

### Directory Structure

```
app/                  # Next.js App Router pages
├── about/            # About page
├── api/              # API routes
├── blog/             # Blog listing and post pages
├── gallery/          # Photo/video gallery (new)
├── project/          # Project showcase page
├── tags/             # Tag-based blog filtering
├── layout.tsx        # Root layout
├── page.tsx          # Home page
└── globals.css       # Global styles
components/           # React components
├── ui/               # shadcn/ui base components
├── site-header.tsx   # Site header with navigation
├── site-footer.tsx   # Site footer (dynamically imported)
├── main-nav.tsx      # Desktop navigation
├── mobile-nav.tsx    # Mobile navigation
├── post-item.tsx     # Blog post card
├── mdx-components.tsx # MDX rendering components
└── ...
config/
└── site.ts           # Site configuration (metadata, links, projects list)
content/
└── blog/             # MDX blog posts (processed by Velite)
lib/
└── utils.ts          # Utility functions
styles/               # Additional style files
public/               # Static assets
.velite/              # Generated content output (gitignored)
```

### Path Aliases (tsconfig.json)

- `@/*` → project root (e.g., `@/components/ui/button`)
- `#site/content` → `.velite/` (generated content data)

### Content System (Velite)

Blog posts live in `content/blog/**/*.mdx`. Velite processes them during build via a custom webpack plugin in `next.config.mjs`.

**Post schema fields:** `slug`, `title` (max 99 chars), `description` (optional), `date` (ISO), `update` (optional ISO), `published` (boolean), `tags` (string array), `body` (MDX).

MDX pipeline: rehype-slug → rehype-pretty-code (one-dark-pro theme) → rehype-autolink-headings.

### Site Configuration

All site metadata, social links, project listings, and page descriptions are centralized in `config/site.ts`. Modify this file to update site-wide content.

## Code Style

- **Indentation:** 2 spaces
- **Quotes:** Double quotes (JS/JSX)
- **Semicolons:** Always
- **Trailing commas:** Always
- **Line endings:** LF
- **Line width:** 80 characters
- **No `var`** — use `const`/`let`
- **No unused imports or variables** (enforced by Biome)
- **No `console.log`** (warning level)
- **Naming:** camelCase for variables/functions, PascalCase for components/classes

Biome handles both linting and formatting. Run formatting checks via the Biome CLI, not Prettier.

## Git Conventions

- **Commit format:** Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`)
- **Commit messages:** Imperative mood, under 72 characters
- **Never commit:** API keys, passwords, tokens, or `.env` files

## Key Patterns

- Components use default exports for page-level components and named exports for shared components
- `SiteFooter` is dynamically imported in the layout for performance
- The project list in `config/site.ts` uses a status system: `active`, `developing`, `done`, `paused`, `deprecated`, `outdated`
- shadcn/ui components live in `components/ui/` and follow the shadcn convention (copy-paste, not library import)

## Testing

No test framework is currently configured. Run `bun run build` to verify the project compiles correctly.
