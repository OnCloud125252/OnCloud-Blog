export const PROJECT_STATUS_LABELS = {
  done: "DONE",
  active: "ACTIVE",
  developing: "DEVELOPING",
  paused: "PAUSED",
  deprecated: "DEPRECATED",
  outdated: "OUTDATED",
} as const;

export type ProjectStatus = keyof typeof PROJECT_STATUS_LABELS;

export interface Project {
  name: string;
  technology: string[];
  description: string;
  github?: string;
  link?: string;
  status: ProjectStatus;
}

export const siteConfig = {
  name: "OnCloud Blog",
  url: "https://on-cloud.tw",
  description: "A place where I share my thoughts, tips, tricks, and tutorials",
  author: "OnCloud",
  githubRepo: "https://github.com/OnCloud125252/OnCloud-Blog",
  // Must match the actual ImageResponse size in app/api/og/route.tsx
  ogImage: { width: 900, height: 400 },

  links: {
    email: "oncloud@lazco.dev",
    github: "https://github.com/OnCloud125252",
    facebook: "https://www.facebook.com/oncloud125252",
    instagram: "https://instagram.com/oncloud125252",
    discord: "https://discord.com/users/755269122597585018",
    gravatar: "https://gravatar.com/oncloud125252",
  },

  home: {
    title: "Hello, I'm Alex Liao",
    description:
      "I'm a platform and full-stack engineer focused on cloud infrastructure, containerized deployment, and platform reliability. I build backend systems in Go and TypeScript, and write about what I learn along the way.",
    status:
      "Building platform infrastructure at Zeabur · Based in Taiwan · Open to collaborations",
  },

  project: {
    title: "My Project",
    description: "Some of my projects that I'm working on",
    projects: [
      {
        name: "dotagents",
        technology: ["Claude Code", "Shell script"],
        description:
          "An extension toolkit for Claude Code: 26 slash commands covering git workflows, PR automation, worktree management, and Linear integration, plus 19 skills, 5 hooks, a custom status line, and a catalog-style selective installer.",
        github: "https://github.com/OnCloud125252/dotagents",
        status: "active",
      },
      {
        name: "Lazco Cloud",
        technology: ["Bun", "Elysia", "PostgreSQL", "Next.js", "Proxmox VE"],
        description:
          "A VPS rental platform running on Lazco's own ASN (AS131630). I led the architecture and development: the backend and billing engine, a type-safe Proxmox VE SDK for VM lifecycle management, and physical infrastructure across two server rooms with 99.8%+ SLA.",
        link: "https://cloud.lazco.tw",
        status: "active",
      },
      {
        name: "CustomRC",
        technology: ["Bash", "Zsh"],
        description:
          "A shell configuration framework that merges modules into a monolithic cache with mtime-based rebuilds and cached tool initialization, bringing typical startup down to ~20–50ms. Around 3,000 lines of shell, MIT licensed.",
        github: "https://github.com/OnCloud125252/CustomRC",
        status: "active",
      },
      {
        name: "NewMD",
        technology: ["Next.js", "Express.js", "MongoDB", "PWA"],
        description:
          "A beautiful & faster version of Mingdao High School's timetable website, with a primary/standby backend behind PM2. Continuously operated since 2022.",
        link: "https://newmd.eu.org",
        github: "https://github.com/NewMD-org",
        status: "active",
      },
      {
        name: "OnCloud Blog",
        technology: ["Next.js", "Shadcn-ui", "Tailwind.css", "TypeScript"],
        description: "My personal blog — the site you're looking at.",
        link: "https://on-cloud.tw",
        github: "https://github.com/OnCloud125252/OnCloud-Blog",
        status: "active",
      },
      {
        name: "LLM-JSON-Translator",
        technology: ["Bun", "TypeScript", "Redis"],
        description:
          "An HTTP service that translates dynamic data-layer content (like backend API responses) with LLMs while preserving the original nested JSON structure. Features token-aware batch splitting, schema-validated output with automatic retries, and a two-layer memory + Redis cache.",
        github: "https://github.com/OnCloud125252/LLM-JSON-Translator",
        status: "done",
      },
      {
        name: "PickTrip",
        technology: ["NestJS", "MongoDB", "Redis", "AWS"],
        description:
          "An AI travel-planning startup I co-founded that reached the top 5% of a Y Combinator batch. I built the AI planning backend, itinerary optimization with PDDL constraint planning and simulated annealing, the data pipeline, and the AWS deployment.",
        status: "done",
      },
      {
        name: "MDGSA Running Program",
        technology: ["Next.js", "Firebase"],
        description:
          "A platform for Mingdao High School's 2025 graduation association that tracks running distance and leaderboards for students and teachers in real time.",
        github: "https://github.com/Lazco-Corporation/MDGSA-Running-Program",
        status: "done",
      },
      {
        name: "Mingdao SIG 2.0 (MDSIG)",
        technology: [
          "Next.js",
          "TailwindCSS",
          "Express.js",
          "MongoDB",
          "TypeScript",
        ],
        description:
          "A campus community platform serving 1,000+ students and teachers of Mingdao High School, deployed on a two-node HA architecture that held 100% uptime for 6 months.",
        link: "https://sig.mingdao.edu.tw",
        github: "https://github.com/MingdaoSIG",
        status: "done",
      },
      {
        name: "virtfusion",
        technology: ["TypeScript", "npm"],
        description:
          "A type-safe TypeScript client for the VirtFusion API, published on npm.",
        link: "https://www.npmjs.com/package/virtfusion",
        status: "done",
      },
      {
        name: "Component Manager",
        technology: ["Golang", "Shell script"],
        description:
          "Seamlessly manage and integrate your JS/TS components with ease.",
        github: "https://github.com/Lazco-Corporation/Component-Manager",
        status: "done",
      },
      {
        name: "APO2cDSP-ParametricEQ",
        technology: ["Bun", "TypeScript"],
        description:
          "A CLI tool that parses EqualizerAPO parametric EQ filters and converts them to CamillaDSP-compatible JSON format.",
        github: "https://github.com/OnCloud125252/APO2cDSP-ParametricEQ",
        status: "done",
      },
      {
        name: "Spacedesk Viewer",
        technology: ["Electron.js", "HTML", "CSS", "JavaScript"],
        description: "A spacedesk client app that can be used offline.",
        github: "https://github.com/OnCloud125252/Spacedesk-Viewer",
        status: "done",
      },
      {
        name: "Discord Bot Template",
        technology: ["Discord.js v14", "JavaScript"],
        description:
          "A powerful starting point for creating a Discord bot that utilizes modern slash commands and offers features such as ChatGPT, music player and more.",
        github: "https://github.com/OnCloud125252/Discord-Bot-Template",
        status: "done",
      },
    ] satisfies Project[],
  },

  blog: {
    title: "My Blog",
    description: "A collection of tips, tricks, and tutorials",
    placeholder: "No posts found",
  },

  tags: {
    title: "Tags",
    description: "Topic I've written about",
  },

  about: {
    title: "About Me",
    description: "Who I am and what I work on",
    name: "Alex Liao",
    location: "Taiwan",
    aka: "OnCloud, 上雲",
    work: "Platform Engineer Intern @ Zeabur",
    education: "Electrical Engineering @ Tamkang University",
    detail: [
      "Greetings 👋",
      "I'm Alex, a platform and full-stack engineer. I work on cloud infrastructure, containerized deployment, and platform reliability. Right now that means building database backup/restore and multi-cloud server provisioning at Zeabur, a cloud PaaS, with Go and Kubernetes.",
      "Before that I was the technical director of Lazco, a cloud hosting provider running its own ASN (AS131630). I built its VPS rental platform end to end: the backend, the distributed usage metering and billing engine, and the physical infrastructure across two server rooms. I also co-founded PickTrip, an AI travel-planning startup that reached the top 5% of a Y Combinator batch.",
      "I like tracing problems from user reports down to root cause, then turning the fix into docs, rules, and automation so it doesn't happen twice. Lately that includes building AI-assisted development workflows with custom skills, rules, and hooks.",
      "I also teach: backend courses at NTU's iOS app development club, programming and security communities at Mingdao High School, and AI courses at hackathon camps. Sharing what I learn is a big part of why this blog exists.",
    ],
    experience: [
      {
        company: "Zeabur",
        role: "Platform Engineer Intern",
        period: "Apr 2026 – Jun 2026",
        summary:
          "Database backup/restore and volume clone features, multi-cloud server provisioning with cloud-init, and security response on a cloud PaaS. Go, Kubernetes, GitOps.",
      },
      {
        company: "Lazco",
        role: "Chief Technology Officer",
        period: "Nov 2022 – Mar 2026",
        summary:
          "Built Lazco Cloud, a VPS rental platform on our own ASN (AS131630): backend and billing engine, Proxmox VE virtualization, and physical infrastructure across two server rooms with 99.8%+ SLA.",
      },
      {
        company: "PickTrip",
        role: "Co-founder & CTO",
        period: "May 2024 – Aug 2025",
        summary:
          "AI travel-planning startup, top 5% of a Y Combinator batch. Built the AI planning backend, itinerary optimization algorithms, data pipeline, and AWS deployment.",
      },
      {
        company: "Mingdao SIG 2.0",
        role: "Technical Director & Full-stack Engineer",
        period: "2023 – 2025",
        summary:
          "Campus community platform serving 1,000+ students and teachers. TypeScript + Express + MongoDB backend with a two-node HA deployment that held 100% uptime for 6 months.",
      },
      {
        company: "Freelance",
        role: "Full-stack Engineer",
        period: "Jan 2022 – May 2024",
        summary:
          "Websites and systems with React, Next.js, Express, and MongoDB. Deployment and performance troubleshooting, plus a modular Discord bot template.",
      },
    ],
    avatar: {
      url: "/avatar.jpg",
      fallback: "Alex Liao",
    },
  },
};

export type SiteConfig = typeof siteConfig;
