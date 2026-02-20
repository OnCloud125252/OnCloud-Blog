# OnCloud Blog

**A personal blog and portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.**

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Content Authoring](#content-authoring)
- [FAQs](#faqs)
- [Installation](#installation)

## Overview

OnCloud Blog is a statically generated blog and project showcase hosted at [on-cloud.tw](https://on-cloud.tw). Content is authored in MDX and processed at build time by [Velite](https://velite.js.org/).

```bash
bun install
bun dev
```

This starts the Next.js development server with hot reload and Velite content processing.

## Features

- **MDX blog posts** with syntax highlighting (One Dark Pro theme via rehype-pretty-code), auto-linked headings, and custom components like `<Callout>`
- **Tag system** for filtering and browsing posts by topic
- **Dynamic Open Graph images** generated per-page via the `/api/og` route
- **Project showcase** with status indicators (`active`, `developing`, `done`, `paused`, `deprecated`, `outdated`)
- **Photo/video gallery**
- **Dark mode** powered by next-themes
- **Responsive design** with separate desktop and mobile navigation
- **shadcn/ui components** (Radix UI primitives) for consistent UI

## Project Structure

```
app/                  # Next.js App Router pages
├── about/            # About page
├── api/og/           # OG image generation endpoint
├── blog/             # Blog listing and individual posts
├── gallery/          # Photo/video gallery
├── project/          # Project showcase
├── tags/             # Tag-based blog filtering
└── layout.tsx        # Root layout with header/footer

components/           # React components
├── ui/               # shadcn/ui base components
├── mdx-components.tsx # Custom MDX rendering
├── site-header.tsx   # Navigation header
└── post-item.tsx     # Blog post card

content/blog/         # MDX blog posts (processed by Velite)
config/site.ts        # Site metadata, social links, project list
```

**Path aliases:** `@/*` maps to the project root, `#site/content` maps to `.velite/` (generated content).

## Content Authoring

Blog posts live in `content/blog/` as `.mdx` files. Each post requires frontmatter:

```yaml
---
title: "Your Post Title"
description: "Optional description"
date: 2024-01-15
published: true
tags: ["next.js", "typescript"]
---
```

Velite processes these during build and makes them available via `#site/content`. Posts with `published: false` are excluded from the site.

## FAQs

#### What package manager should I use?

**Bun.** It's specified in `package.json`. Do not use npm, yarn, or pnpm.

#### How do I add a new project to the showcase?

Edit `config/site.ts` and add an entry to the projects array with a `status` field.

#### How do I customize site metadata or social links?

All site-wide configuration is centralized in `config/site.ts`.

#### Where do shadcn/ui components come from?

They live in `components/ui/` following the shadcn copy-paste convention — they're local files, not library imports.

## Installation

```bash
# Clone the repository
git clone https://github.com/OnCloud125252/OnCloud-Blog.git
cd OnCloud-Blog

# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint
bun lint
```

Requires [Bun](https://bun.sh/) and [Node.js](https://nodejs.org/) 18+.
