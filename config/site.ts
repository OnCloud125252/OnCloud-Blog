export const siteConfig = {
  name: "OnCloud Blog",
  url: "https://on-cloud.tw",
  description: "A place where I share my thoughts, tips, tricks, and tutorials",
  author: "OnCloud",
  githubRepo: "https://github.com/OnCloud125252/OnCloud-Blog",
  personalSite: "https://on-cloud.tw",

  links: {
    email: "oncloud@lazco.dev",
    github: "https://github.com/OnCloud125252",
    // twitter: "",
    // linkedin: "",
    facebook: "https://www.facebook.com/oncloud125252",
    instagram: "https://instagram.com/oncloud125252",
    // youtube: "",
    discord: "https://discord.com/users/755269122597585018",
    gravatar: "https://gravatar.com/oncloud125252",
  },

  home: {
    title: "Hello, I'm Alex Liao",
    description:
      "I'm a full-stack web developer and system designer. I build website and manage/deploy servers.",
  },
  project: {
    title: "My Project",
    description: "Some of my projects that I'm working on",
    projects: [
      {
        name: "Component Manager",
        technology: ["Golang", "Shell script"],
        description:
          "Seamlessly manage and integrate your JS/TS components with ease.",
        github: "https://github.com/Lazco-Studio/Component-Manager",
        status: "active",
      },
      {
        name: "Spacedesk Viewer",
        technology: ["Electron.js", "HTML", "CSS", "JavaScript"],
        description: "A spacedesk client app that can be used offline.",
        github: "https://github.com/OnCloud125252/Spacedesk-Viewer",
        status: "active",
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
          "The MDSIG Sharing Platform provides students of Mingdao High School with a space for discussing various topics.",
        link: "https://sig.mingdao.edu.tw",
        github: "https://github.com/MingdaoSIG",
        status: "done",
      },
      {
        name: "NewMD",
        technology: [
          "Next.js",
          "Mantine-ui",
          "Express.js",
          "MongoDB",
          "JavaScript",
        ],
        description:
          "A beautiful & faster version of Mingdao high school's timetable website.",
        link: "https://newmd.eu.org",
        github: "https://github.com/NewMD-org",
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
      {
        name: "Frontend Practice",
        technology: ["Express.js", "HTML", "CSS", "JavaScript"],
        description:
          "A website that demonstrates popular frontend optimization techniques such as debouncing, throttling, and more.",
        link: "https://frontend-practice.on-cloud.tw",
        github: "https://github.com/OnCloud125252/Frontend-Practice",
        status: "done",
      },
      {
        name: "Update Install",
        technology: ["Golang", "Shell script"],
        description: "Easy way to install deb package for Linux distributions.",
        github: "https://github.com/Update-Install",
        status: "developing",
      },
      {
        name: "Update Install (Old)",
        technology: ["Shell script"],
        description:
          "A tool designed to simplify the process of installing or updating applications on Linux.",
        github: "https://github.com/OnCloud125252/Update-Install",
        status: "deprecated",
      },
      {
        name: "Upload Share",
        technology: ["Next.js", "Radix-ui", "Tailwind.css", "TypeScript"],
        description: "A website for uploading and sharing files.",
        github: "https://github.com/OnCloud125252/Upload-Share",
        status: "paused",
      },
      {
        name: "SpiderTrigger",
        technology: ["Docker", "Golang", "Shell script"],
        description:
          "A tool designed to automate the process of deploying your applications on your own server.",
        github: "https://github.com/OnCloud125252/SpiderTrigger",
        status: "paused",
      },
      {
        name: "KILLTWG-App",
        technology: ["Visual Basic .NET"],
        description: "A app that can be use to disable the TWG client app.",
        github: "https://github.com/OnCloud125252/KILLTWG-App",
        status: "deprecated",
      },
      {
        name: "OnCloud Blog",
        technology: ["Next.js", "Shadcn-ui", "Tailwind.css", "TypeScript"],
        description: "My personal blog.",
        link: "https://on-cloud.tw",
        github: "https://github.com/OnCloud125252/OnCloud-Blog",
        status: "developing",
      },
    ],
    getStatus: (status: string) => {
      switch (status) {
        case "done":
          return {
            color: "#1cad34",
            text: "DONE",
          };
        case "active":
          return {
            color: "#2f67c2",
            text: "ACTIVE",
          };
        case "developing":
          return {
            color: "#8222e3",
            text: "DEVELOPING",
          };
        case "paused":
          return {
            color: "#a69526",
            text: "PAUSED",
          };
        case "deprecated":
          return {
            color: "#a65526",
            text: "DEPRECATED",
          };
        case "outdated":
          return {
            color: "#a62626",
            text: "OUTDATED",
          };
        default:
          return {
            color: "#949494",
            text: "INACTIVE",
          };
      }
    },
    defaultView: "list", // grid | list
    target: "_blank",
  },
  gallery: {
    title: "My Gallery",
    description: "A collection of my favorite photos and videos",
    placeholder: "Nothing to see here yet",
  },
  blog: {
    title: "My Blog",
    description: "A collection of tips, tricks, and tutorials",
    placeholder: "No posts found",
  },
  about: {
    title: "About Me",
    description: "Information about me",
    name: "Alex Liao",
    location: "Taiwan, Taichung",
    aka: "OnCloud, 上雲",
    work: "Chief Technology Officer, Lazco Studio LTD",
    detail: [
      "Greetings 👋",
      "I'm Alex, a dedicated student with a deep passion for coding, computers, and electronics. I am currently expanding my skills in system design and web development.",
      "In my role as Chief Technology Officer and full-stack developer at Lazco Studio, I oversee server management, deployment, and the creation of backend applications.",
      "I have invested considerable time honing my coding abilities and am eager to share my knowledge with others. By teaching coding, I hope to make programming more approachable and empowering for all. Please take a look at my repositories and resources that showcase my dedication to coding education.",
    ],
    avatar: {
      url: "/avatar.jpg",
      fallback: "Alex Liao",
    },
  },
};

export type SiteConfig = typeof siteConfig;
