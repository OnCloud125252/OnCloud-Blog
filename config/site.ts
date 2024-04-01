export const siteConfig = {
  name: "OnCloud Blog",
  url: "https://on-cloud.tw",
  description: "A blog created with Next.js 14, Shadcn-ui and Tailwind.css",
  author: "OnCloud",
  githubRepo: "https://github.com/OnCloud125252/OnCloud-Blog",
  links: {
    personalSite: "https://on-cloud.tw",
    email: "oncloud@lazco.dev",
    github: "https://github.com/OnCloud125252",
    // twitter: "",
    // linkedin: "",
    facebook: "https://www.facebook.com/oncloud125252",
    instagram: "https://instagram.com/oncloud125252",
    // youtube: "",
    discord: "https://discord.com/users/755269122597585018",
    gravatar: "https://gravatar.com/oncloud125252"
  },

  home: {
    title: "Hello, I'm Alex Liao",
    description:
      "I'm a full-stack web developer and system designer. I build website and manage/deploy servers."
  },
  project: {
    title: "My Project",
    description: "Some of my projects that I'm working on",
    projects: [
      {
        name: "OnCloud Blog",
        description:
          "My personal blog created with Next.js, Shadcn-ui and Tailwind.css",
        github: "https://github.com/OnCloud125252/OnCloud-Blog",
        status: "active"
      },
      {
        name: "Update Install",
        description:
          "A tool designed to simplify the process of installing or updating applications on Linux, built with golang",
        github: "https://github.com/Update-Install",
        status: "dev"
      },
      {
        name: "Update Install (Old)",
        description:
          "A tool designed to simplify the process of installing or updating applications on Linux, built with shell scripts",
        github: "https://github.com/OnCloud125252/Update-Install",
        status: "inactive"
      },
      {
        name: "NewMD",
        description:
          "A beautiful & faster version of Mingdao high school's timetable website, built with Next.js, Mantine-ui",
        link: "https://newmd.eu.org",
        github: "https://github.com/NewMD-org",
        status: "active"
      }
    ],
    getStatus: (status: string) => {
      switch (status) {
        case "active":
          return {
            color: "#12c931",
            text: "ACTIVE"
          };
        case "inactive":
          return {
            color: "#949494",
            text: "INACTIVE"
          };
        case "bug":
          return {
            color: "#ba0000",
            text: "BUG"
          };
        case "dev":
          return {
            color: "#7b20d6",
            text: "DEV"
          };
        default:
          return {
            color: "#12c931",
            text: "ACTIVE"
          };
      }
    },
    view: "list", // grid | list
    target: "_blank"
  },
  blog: {
    title: "My Blog",
    description: "A collection of tips, tricks, and tutorials",
    placeholder: "Nothing to see here yet"
  },
  about: {
    title: "About Me",
    name: "Alex Liao",
    location: "Taiwan, Taichung",
    aka: "OnCloud, 上雲",
    work: "Chief Technology Officer, Lazco Studio LTD",
    description: [
      "Greetings 👋",
      "I'm Alex, a dedicated student with a deep passion for coding, computers, and electronics. I am currently expanding my skills in system design and web development.",
      "In my role as Chief Technology Officer and full-stack developer at Lazco Studio, I oversee server management, deployment, and the creation of backend applications.",
      "I have invested considerable time honing my coding abilities and am eager to share my knowledge with others. By teaching coding, I hope to make programming more approachable and empowering for all. Please take a look at my repositories and resources that showcase my dedication to coding education."
    ],
    avatar: {
      url: "/avatar.jpg",
      fallback: "Alex Liao"
    }
  }
};

export type SiteConfig = typeof siteConfig;
