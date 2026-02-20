# Content System

MDX blog posts in `content/blog/` are processed by [Velite](https://velite.js.org/) at build time. The output lands in `.velite/` and is imported via the `#site/content` path alias.

## Frontmatter Schema

| Field | Type | Required | Constraints | Default |
|-------|------|----------|-------------|---------|
| `title` | string | yes | max 99 chars | — |
| `description` | string | no | max 999 chars | — |
| `date` | ISO date | yes | — | — |
| `update` | ISO date | no | — | — |
| `published` | boolean | no | — | `true` |
| `tags` | string[] | no | — | — |

The `body` field is generated automatically from the MDX content. A computed field `slugAsParams` is derived from the file path — it strips the leading `blog/` segment (e.g., `blog/my-post` becomes `my-post`).

### New Post Template

```yaml
---
title: "Your Post Title"
description: "Optional summary"
date: 2026-01-15
published: true
tags: ["next.js", "typescript"]
---

Your MDX content here.
```

Save as `content/blog/<slug>.mdx`. The filename becomes the URL slug.

## Velite Configuration

Defined in `velite.config.ts`:

- **Content root:** `content/`
- **Output data:** `.velite/` (gitignored)
- **Output assets:** `public/static/` (naming pattern: `[name]-[hash:6].[ext]`)
- **Collection:** `posts` matching `blog/**/*.mdx`

### Webpack Integration

`next.config.mjs` contains a `VeliteWebpackPlugin` class that hooks into `compiler.hooks.beforeCompile`:

- Runs once per compilation (guarded by a static `started` flag)
- **Dev mode:** `watch: true`, `clean: false` — watches for file changes
- **Production:** `watch: false`, `clean: true` — single clean build

## MDX Rehype Pipeline

Three rehype plugins run in order during MDX processing:

1. **`rehype-slug`** — adds `id` attributes to all headings
2. **`rehype-pretty-code`** — syntax highlighting with the `one-dark-pro` theme; inline code defaults to `plain-text` language
3. **`rehype-autolink-headings`** — wraps headings in anchor tags with `class="subheading-anchor"` and `aria-label="Link to section"`

No remark plugins are configured.

## Custom MDX Components

`components/mdx-components.tsx` defines the `MDXContent` renderer. It evaluates the compiled MDX code string and injects custom component mappings:

| Component | Source | Purpose |
|-----------|--------|---------|
| `Image` | `next/image` | Optimized image rendering |
| `Callout` | `components/callout.tsx` | Highlighted note blocks |

### Callout Component

Accepts a `type` prop: `"default"` | `"warning"` | `"danger"`. Each type applies different border and background colors.

```mdx
<Callout type="warning">
  This is a warning callout.
</Callout>
```

## Content Queries

Page components import posts and filter/sort them using utilities from `lib/utils.ts`:

```ts
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";

const published = posts.filter((post) => post.published);
const sorted = sortPosts(published);
```

### Utility Functions

| Function | Purpose |
|----------|---------|
| `sortPosts(posts)` | Sort by `update` date (falls back to `date`), newest first |
| `getAllTags(posts)` | Returns `Record<string, number>` of tag name to post count |
| `sortTagsByCount(tags)` | Sort tag names by descending post count |
| `getPostsByTagSlug(posts, tag)` | Filter posts matching a slugified tag |
| `formatDate(input)` | Format date as "Month Day, Year" (en-US) |

## Adding a New Post

1. Create `content/blog/<your-slug>.mdx`
2. Add frontmatter (see template above)
3. Write MDX content — you can use `<Callout>`, `<Image>`, and standard markdown
4. Run `bun run build` to verify it compiles
5. The post appears at `/blog/<your-slug>`

Posts with `published: false` are excluded from all listing pages but still accessible by direct URL during development.
