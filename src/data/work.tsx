export type TExperience = {
  title: string;
  shortTitle: string;
  role?: string;
  date?: string;
  responsibilities?: string[];
  projects: {
    title: string;
    role?: string;
    description: string;
    link?: string;
  }[];
};

export const experiences: TExperience[] = [
  {
    title: "Global Payments",
    shortTitle: "Global Payments",
    role: "Senior Frontend Engineer",
    date: "October 2023 - present",
    responsibilities: [
      "Developed responsive and interactive web pages using different techs like React, TypeScript and others.",
      "Utilized Gitlab CI/CD and Jenkins to streamline deployment processes.",
      "Wrote tests using tools using Jest to ensure application quality and reliability.",
      "Collaborated with developers, designers, and stakeholders to ensure timely project delivery and page quality.",
    ],
    projects: [
      {
        title: "ActiveNet CUI",
        role: "Lead Frontend Developer",
        description: "N/A",
      },
      {
        title: "ActiveNet AUI",
        role: "Lead Frontend Developer",
        description: "N/A",
      },
    ],
  },
  {
    title: "Ground-Link Advertising Services",
    shortTitle: "Ground-Link",
    role: "Lead Frontend Developer",
    date: "April 2023 - October 2023",
    responsibilities: [
      "Led the frontend team and effectively communicated with developers from diverse backgrounds.",
      "Developed web pages using modern different frameworks like NextJS.",
      "Employed a BDD approach to write end-to-end testing with jest-puppeteer.",
      "Improved developer productivity by introducing weekly knowledge sharing, agile methodology, daily-standups, and gitlab-ci/cd.",
    ],
    projects: [
      {
        title: "Live Score Client",
        role: "Lead Frontend Developer",
        description:
          "A sports tracker that track live games throughout the entire world\nWritten in React.js, TailwindCSS, and WebSockets in frontend and utilizing es_modules with vite resulting in less build size",
      },
      {
        title: "Live Score Admin",
        role: "Lead Frontend Developer",
        description:
          "A dashboard management system for Live Score Client\nWritten in React.js, TailwindCSS, and WebSockets in frontend and utilizing es_modules with vite resulting in less build size",
      },
    ],
  },
  {
    title: "Cafe24 - PH Branch",
    shortTitle: "Cafe24PH",
    role: "L2 Frontend Developer",
    date: "March 2020 - April 2023",
    responsibilities: [
      "Developed responsive and interactive web pages using different techs like React, Vue, Angular, TypeScript and others.",
      "Utilized Gitlab CI/CD and Docker to streamline deployment processes.",
      "Wrote tests using tools such as Jest, Jest-Puppeteer, and Playwright to ensure application quality and reliability.",
      "Serve as the technical lead of the team, ensuring project goals are met efficiently and effectively.",
      "Successfully migrated a “2003” legacy app to a modern application, resulting in a reduction in bugs and an improvement in performance and developer experience.",
      "Collaborated with developers, designers, and stakeholders to ensure timely project delivery and page quality.",
    ],
    projects: [
      {
        title: "Solution Admin Frontend",
        role: "Lead Frontend Developer",
        description:
          "Migration of legacy code (around 2003) into modern tech stacks\nWritten in React.js, Material-UI, CSS-inJS in frontend and utilizing es_modules with vite resulting in less build size",
      },
      {
        title: "Cafe24 bot",
        role: "Frontend Developer",
        description:
          "Internal 3rd party library for Slack to Provide an easy to use create channel based on organization hierarchy.\nWritten in Vanilla JavaScript and using NodeJS new feature called es_modules resulting in less build size",
      },
      {
        title: "Style Tracker",
        role: "Lead Fullstack developer",
        description: `A tool for Cafe24 Developers to detect any style discrepancies on a Mall, when installing a 3rd party application on mall can change the design of a website thus by creating Style Tracker can help easily track discrepancies.\n
          Written in Next.js with custom express in backend to maximize security and performance`,
      },
      {
        title: "Global Help Center",
        role: "Frontend Developer",
        description:
          "A guide for users to get a grasp on how to setup their own store, sell items, manage orders and promote website.\nWritten in Zendesk (kinda like Wordpress, but for Ruby-on-Rails)",
      },
      {
        title: "Groupware API Frontend Library",
        role: "Backend Developer",
        description: `A Library for managing Cafe24's internal API\nWritten in NodeJS`,
      },
      {
        title: "Froala Solutions Library",
        role: "Lead Frontend Developer",
        description: `Created an Internal 3rd party tool for Froala Editor that has special use cases for Cafe24 and Fixing common issues regarding the library\nWritten in different types of api (React, Vue, Vanilla)`,
      },
      {
        title: "Webmetry",
        role: "Fullstack Developer",
        description: `Webmetry is a internal tool for determining page score using google's Lighthouse API.\nWritten in NodeJS in backend and Vue.js in frontend`,
      },
    ],
  },
  {
    title: "Freelance",
    shortTitle: "Freelance",
    projects: [
      {
        title: "Tres Marias Sweets",
        description:
          "An online ordering system for Tres Marias Sweets\nWritten in Vue.js, and TailwindCSS in frontend and using Laravel in backend",
        link: "https://github.com/AllenElguira16/TresMariasSweets",
      },
      {
        title: "piso-print-kiosk",
        description:
          "A coin based kiosk that prints when a coin is slotted to the machine\nWritten in React, and TailwindCSS in frontend and Arduino in hardware",
        link: "https://github.com/AllenElguira16/piso-print-kiosk",
      },
      {
        title: "Stronghold Insurance Management and Information System",
        description:
          "A management system for Stronghold Company\nWritten in React, and TailwindCSS in frontend and NodeJS in backend",
        link: "https://github.com/AllenElguira16/SIMIS",
      },
      {
        title: "E-Learning",
        description:
          "An interactive e-learning service\nWritten in React, and TailwindCSS in frontend and NodeJS in backend",
        link: "https://github.com/AllenElguira16/E-Learning",
      },
    ],
  },
  {
    title: "Others",
    shortTitle: "Others",
    projects: [
      {
        title: "Video to Ascii CLI",
        description:
          "A CLI tool that converts any mp4 videos into ascii animation\nWritten in NodeJS in backend and utilizing worker_threads for maximize performance",
        link: "https://github.com/AllenElguira16/video-to-ascii-cli",
      },
      {
        title: "Nebula",
        description:
          "A framework written with newest features of PHP 8 such as attributes, destructuring, and many more",
        link: "https://github.com/AllenElguira16/Nebula",
      },
    ],
  },
];
