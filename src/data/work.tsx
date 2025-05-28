export type TExperience = {
  title: string;
  shortTitle: string;
  works?: {
    role?: string;
    date?: string;
    responsibilities?: string[];
  }[];
  projects: {
    title: string;
    role?: string;
    description?: string;
    link?: string;
  }[];
};

export const highlights: TExperience = {
  title: "Highlights",
  shortTitle: "Highlights",
  projects: [
    {
      title: "Mini React",
      description:
        "A mini react compiler that uses DOM elements instead of Virtual DOM",
      link: "https://github.com/allenelguira16/mini-react",
    },
    {
      title: "Nebula",
      description:
        "A framework written with the newest features of PHP 8 such as attributes, destructuring, and many more",
      link: "https://github.com/AllenElguira16/nebula",
    },
    {
      title: "Retro player",
      description: "A simple web application to play videos in ascii format",
      link: "https://github.com/allenelguira16/retro-player",
    },
    {
      title: "Image to ascii CLI",
      description: "A CLI application for displaying image to ascii in console",
      link: "https://github.com/allenelguira16/image-to-ascii",
    },
  ],
};

export const experiences: TExperience[] = [
  {
    title: "Global Payments",
    shortTitle: "Global Payments",
    works: [
      {
        role: "Senior Frontend Engineer",
        date: "October 2023 - present",
        responsibilities: [
          "Developed responsive and interactive web applications using React, TypeScript, and other modern technologies, improving user experience and performance.",
          "Designed and optimized CI/CD pipelines using GitLab CI/CD and Jenkins, reducing deployment time and minimizing manual errors.",
          "Wrote and maintained unit and integration tests with Jest, enhancing application reliability and reducing bugs before production.",
          "Collaborated closely with cross-functional teams, including developers, designers, and stakeholders, to ensure timely delivery of high-quality, scalable solutions.",
        ],
      },
    ],
    projects: [
      {
        title: "ActiveNet CUI",
        role: "Senior Frontend Engineer",
      },
      {
        title: "ActiveNet AUI",
        role: "Senior Frontend Engineer",
      },
    ],
  },
  {
    title: "Ground-Link Advertising Services",
    shortTitle: "Ground-Link",
    works: [
      {
        role: "Lead Frontend Developer",
        date: "Jun 2023 - October 2023",
        responsibilities: [
          "Led the frontend team and communicated effectively with developers from diverse backgrounds to ensure smooth collaboration.",
          "Developed scalable and high-performance web applications using React frameworks like Next.js.",
          "Implemented a Behavior-Driven Development (BDD) approach for end-to-end testing with Jest and Puppeteer, improving test coverage and reliability.",
          "Enhanced developer productivity by introducing weekly knowledge-sharing sessions, agile methodologies, daily stand-ups, and GitLab CI/CD automation.",
          "Spearheaded the adoption of a self-hosted GitLab instance, improving code collaboration and security.",
          "Managed development and production servers using BitVise and Cloudflare, optimizing security and deployment efficiency.",
        ],
      },
      {
        role: "Senior Frontend Developer",
        date: "April 2023 - Jun 2023",
        responsibilities: [
          "Led the frontend team, ensuring clear communication and smooth collaboration among developers from diverse backgrounds.",
          "Developed scalable and high-performance web applications, optimizing load times and responsiveness.",
          "Designed and implemented efficient developer workflows using Git and GitLab, improving version control and collaboration.",
          "Led the migration of source code from SVN to Git via GitLab, streamlining version control processes.",
          "Conducted thorough code reviews to uphold coding standards and maintain high-quality, maintainable code.",
        ],
      },
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
    works: [
      {
        role: "L2 Frontend Developer",
        date: "March 2020 - April 2023",
        responsibilities: [
          "Developed responsive and interactive web applications using React, Vue, TypeScript, and other modern technologies.",
          "Implemented GitLab CI/CD and Docker to automate and streamline deployment processes.",
          "Wrote and maintained tests using Jest, Jest-Puppeteer, and Playwright, improving application reliability and quality.",
          "Served as the technical lead, guiding the team to meet project goals efficiently and effectively.",
          "Led the successful migration of a 2003 legacy application to a modern stack, reducing bugs, enhancing performance, and improving the developer experience.",
          "Worked closely with developers, designers, and stakeholders to ensure high-quality project delivery on schedule.",
        ],
      },
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
    works: [
      {
        responsibilities: [
          "Design and developed full-stack websites according to client's needs",
        ],
      },
    ],
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
];
