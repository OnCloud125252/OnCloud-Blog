# Components

## Export Conventions

- **Page components** (`app/**/page.tsx`, `app/**/layout.tsx`): default exports
- **Shared components** (`components/`): named exports
- **Exception:** `site-footer.tsx` uses a default export because it's dynamically imported

## Layout & Navigation

The root layout (`app/layout.tsx`) composes the page shell:

```
<Providers>
  <SiteHeader />
  <main>{children}</main>
  <SiteFooter />       ← dynamically imported (next/dynamic, ssr: false)
</Providers>
```

### Component Breakdown

| Component | File | Export | Purpose |
|-----------|------|--------|---------|
| `Providers` | `providers.tsx` | named | Wraps app in `ThemeProvider` (next-themes) + `TooltipProvider` (Radix) |
| `SiteHeader` | `site-header.tsx` | named | Top-level header, composes `MainNav` and `MobileNav` |
| `MainNav` | `main-nav.tsx` | named | Desktop horizontal navigation bar |
| `MobileNav` | `mobile-nav.tsx` | named | Mobile navigation using a sheet/drawer (Radix Dialog) |
| `SiteFooter` | `site-footer.tsx` | default | Footer content — dynamically imported to defer JS loading |
| `ModeToggle` | `mode-toggle.tsx` | named | Dark/light/system theme toggle dropdown |

### ThemeProvider Configuration

```tsx
<ThemeProvider
  attribute="class"        // toggles .dark class on <html>
  defaultTheme="system"    // follows OS preference initially
  enableSystem             // responds to OS theme changes
  disableTransitionOnChange // prevents flash during theme switch
>
```

## Blog Components

| Component | File | Purpose |
|-----------|------|---------|
| `PostItem` | `post-item.tsx` | Blog post card showing title, date, description, and tags |
| `Tag` | `tag.tsx` | Tag badge rendered as a link to `/tags/[tag]` |
| `MDXContent` | `mdx-components.tsx` | Renders compiled MDX code string with custom component mappings |
| `Callout` | `callout.tsx` | Highlighted note block for MDX content (default/warning/danger) |

## Project Components

| Component | File | Purpose |
|-----------|------|---------|
| `ProjectList` | `project-list.tsx` | Renders project cards in grid or list view |

The project list uses a status badge system defined in `config/site.ts`:

| Status | Color | Hex |
|--------|-------|-----|
| `active` | Blue | `#2f67c2` |
| `developing` | Purple | `#8222e3` |
| `done` | Green | `#1cad34` |
| `paused` | Yellow | `#a69526` |
| `deprecated` | Orange | `#a65526` |
| `outdated` | Red | `#a62626` |

Default view is `"list"` (configurable to `"grid"` in `siteConfig.project.defaultView`). Links open in new tabs (`target: "_blank"`).

## shadcn/ui Components

Local copies in `components/ui/` — these are copy-pasted from shadcn/ui, not imported from a library. Configured via `components.json` at root.

| Component | Radix Primitive |
|-----------|-----------------|
| `avatar` | `@radix-ui/react-avatar` |
| `badge` | — (styled div) |
| `button` | `@radix-ui/react-slot` |
| `card` | — (styled div) |
| `dropdown-menu` | `@radix-ui/react-dropdown-menu` |
| `pagination` | — (nav element) |
| `sheet` | `@radix-ui/react-dialog` |
| `tabs` | `@radix-ui/react-tabs` |
| `tooltip` | `@radix-ui/react-tooltip` |

## Utility Components

| Component | File | Purpose |
|-----------|------|---------|
| `Icons` | `icons.tsx` | Centralized icon exports wrapping `lucide-react` |
