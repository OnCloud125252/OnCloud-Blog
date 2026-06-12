# Static Content Inventory

Extracted from the OnCloud Blog codebase on 2026-06-12, before the minimal
redesign. This file catalogues every piece of static copy and where it lives.
Structured data (links, projects, tags) is in `site-data.json`.

## Site Metadata (`config/site.ts`)

- **Site name:** OnCloud Blog
- **URL:** https://on-cloud.tw
- **Description:** A place where I share my thoughts, tips, tricks, and tutorials
- **Author:** OnCloud
- **Repository:** https://github.com/OnCloud125252/OnCloud-Blog

## Home Page (`app/page.tsx` + `config/site.ts` → `home`)

- **Hero title:** Hello, I'm Alex Liao
- **Hero description:** I'm a full-stack web developer and system designer. I build website and manage/deploy servers.
- **Primary CTA:** Read Articles → `/blog`
- **Secondary CTA:** View Projects → GitHub profile
- **Status line:** Currently exploring AI & Web3 (hardcoded in `app/page.tsx`)
- **Location line:** Based in Taiwan • Available for collaborations (hardcoded in `app/page.tsx`)
- **Recent posts heading:** Recent Logs (hardcoded in `app/page.tsx`)
- **Recent posts link:** See all → `/blog`
- Shows the 5 latest posts.

## Blog Page (`app/blog/page.tsx` + `config/site.ts` → `blog`)

- **Title:** My Blog
- **Description:** A collection of tips, tricks, and tutorials
- **Empty placeholder:** No posts found
- Infinite-scroll list (6 per page) with a tag sidebar grouped by category.

## Post Card (`components/post-item.tsx`)

- **Read link label:** Read Entry (hardcoded)
- Displays: date (update date preferred), up to 2 tags, title, description.

## Project Page (`app/project/page.tsx` + `config/site.ts` → `project`)

- **Title:** My Project
- **Description:** Some of my projects that I'm working on
- **View tabs:** List View / Grid View (default: list)
- 12 projects with name, technologies, description, GitHub/live links, and a
  status badge — see `site-data.json`.
- **Status labels/colors:** done #00e676, active #00e5ff, developing #d500f9,
  paused #ffea00, deprecated #ff6e40, outdated #ff1744, fallback INACTIVE #949494

## About Page (`app/about/page.tsx` + `config/site.ts` → `about`)

- **Title:** About Me
- **Meta description:** Information about me
- **Name:** Alex Liao
- **AKA:** OnCloud, 上雲
- **Location:** Taiwan, Taichung
- **Work:** Chief Technology Officer, Lazco Studio LTD
- **Avatar:** `/avatar.jpg` (fallback text: Alex Liao)
- **Bio paragraphs:**
  1. Greetings 👋
  2. I'm Alex, a dedicated student with a deep passion for coding, computers, and electronics. I am currently expanding my skills in system design and web development.
  3. In my role as Chief Technology Officer and full-stack developer at Lazco Studio, I oversee server management, deployment, and the creation of backend applications.
  4. I have invested considerable time honing my coding abilities and am eager to share my knowledge with others. By teaching coding, I hope to make programming more approachable and empowering for all. Please take a look at my repositories and resources that showcase my dedication to coding education.
- **Section headings (hardcoded):** GitHub Status / Coding Activity (All Time)
- **External stat images:**
  - https://github-readme-stats.on-cloud.eu.org/api?username=OnCloud125252&show_icons=true&theme=onedark (Overall GitHub Stats)
  - https://github-readme-stats.on-cloud.eu.org/api/top-langs/?username=OnCloud125252&langs_count=8&theme=onedark&layout=donut (Most Used Programming Languages)
  - https://github-readme-stats.vercel.app/api/wakatime?username=OnCloud&theme=onedark&layout=compact (Coding Activity)

## Tags Pages (`app/tags/page.tsx`, `app/tags/[tag]/page.tsx`)

- **Index title:** Tags
- **Index meta description:** Topic I've written about
- **Tag page meta description:** Posts on the topic of {tag}
- **Empty placeholder:** Nothing to see here yet
- **Sidebar title:** Tags; uncategorized group label: Other (#9ca3af)
- Tag categories (label, color, member tags) are in `site-data.json`
  (source: `config/tags.ts`).

## Navigation (`components/main-nav.tsx`, `components/mobile-nav.tsx`)

- **Brand:** logo icon + "OnCloud Blog"
- **Links:** Blog → `/blog`, Project → `/project`, About → `/about`
- Header also renders social icon links (email, github, facebook, instagram,
  discord, gravatar), theme toggle, and mobile sheet menu.

## Footer (`components/site-footer.tsx`)

- **Copyright:** © {year} OnCloud. Built with Next.js & Velite.
- **Repo link:** "Repository" with animated Lottie octocat → GitHub repo

## Blog Posts (`content/blog/**/*.mdx`)

MDX content is the source of truth and is not duplicated here. Files present:
apo2cdsp-intro, compile_c_plus_plus_code_cross_platform,
fix_pve_lxc_container_startup, fix_pve_network_speed,
install_latest_nginx_on_ubuntu, managing_shell_configuration_with_customrc,
setting-up-zsh-with-oh-my-zsh-on-macos, setting_up_zsh_with_oh-my-zsh,
streamlining_development_processes_with_github_actions, plus `docker/` and
`newmd/` subdirectories.

## Static Assets (`public/`)

apple-icon.png, avatar.jpg, favicon.ico, icon.png, icon1.png,
opengraph-image.png

## Pre-Redesign Design Notes

- Fonts: Bricolage Grotesque (display), Plus Jakarta Sans (sans), JetBrains Mono (mono)
- Primary color: hsl(160 84% 39%) (green), radius 0 (sharp editorial style)
- Decorative utilities: grid-pattern, noise-bg, editorial-shadow, sharp-accent,
  neon-* box shadows, glow/shimmer keyframes
- Dead CSS classes referenced but never defined: `cyber-hr`, `neon-text`,
  `--glow-primary`
