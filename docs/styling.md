# Styling System

Tailwind CSS utility-first approach. All theme colors use CSS custom properties so dark mode works by swapping variable values.

## Tailwind Configuration

Defined in `tailwind.config.ts`:

| Setting | Value |
|---------|-------|
| Dark mode | `class` strategy (toggles `.dark` on `<html>`) |
| Container | Centered, `2rem` padding, max `1400px` at `2xl` |
| Font | `var(--font-sans)` — Inter, loaded via `next/font/google` in `app/layout.tsx` |

### Content Paths

```
./pages/**/*.{ts,tsx}
./components/**/*.{ts,tsx}
./app/**/*.{ts,tsx}
./src/**/*.{ts,tsx}
```

## Color System

Colors are defined as CSS custom properties in `app/globals.css` and consumed in `tailwind.config.ts` via `hsl(var(--...))`:

| Token | Tailwind Class | Usage |
|-------|---------------|-------|
| `--background` | `bg-background` | Page background |
| `--foreground` | `text-foreground` | Default text |
| `--primary` | `bg-primary`, `text-primary` | Primary actions, links |
| `--primary-foreground` | `text-primary-foreground` | Text on primary bg |
| `--secondary` | `bg-secondary` | Secondary elements |
| `--muted` | `bg-muted`, `text-muted-foreground` | Subdued text, backgrounds |
| `--accent` | `bg-accent` | Hover states, highlights |
| `--destructive` | `bg-destructive` | Danger/error states |
| `--card` | `bg-card` | Card backgrounds |
| `--popover` | `bg-popover` | Dropdown/popover backgrounds |
| `--border` | `border-border` | Borders |
| `--input` | `border-input` | Form input borders |
| `--ring` | `ring-ring` | Focus rings |
| `--radius` | `rounded-lg/md/sm` | Border radius (lg, lg-2px, lg-4px) |

Dark mode defines alternate values for each token under the `.dark` class in `globals.css`.

## Dark Mode

Three layers make dark mode work:

1. **`next-themes`** — manages the theme state (`light`/`dark`/`system`), persists preference to localStorage
2. **`ThemeProvider`** (`providers.tsx`) — wraps the app with `attribute="class"` so it toggles `.dark` on `<html>`
3. **Tailwind `darkMode: ["class"]`** — enables `dark:` variant utilities that activate when `.dark` is present

The `ModeToggle` component (`mode-toggle.tsx`) renders a dropdown with light/dark/system options.

## The `cn()` Utility

Defined in `lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- **`clsx`** — conditionally joins class names (handles booleans, arrays, objects)
- **`tailwind-merge`** — deduplicates conflicting Tailwind utilities (e.g., `p-2 p-4` resolves to `p-4`)

Used throughout all components for conditional class composition:

```tsx
<div className={cn("base-class", isActive && "active-class")} />
```

## Plugins

| Plugin | Purpose |
|--------|---------|
| `tailwindcss-animate` | Animation utilities used by shadcn/ui components |
| `@tailwindcss/typography` | `prose` class for rendering MDX blog content with readable typography |

## Custom Animations

Accordion keyframes defined in `tailwind.config.ts`:

| Animation | Duration | Easing |
|-----------|----------|--------|
| `accordion-down` | 0.2s | ease-out |
| `accordion-up` | 0.2s | ease-out |

Both animate the `height` property using `--radix-accordion-content-height` for smooth expand/collapse.
