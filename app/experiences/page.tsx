"use client";
import { useState } from "react";

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabs = experiences.map(({ title }) => title);
  const experience = experiences[currentIndex];

  return (
    <section className="flex flex-col gap-3 px-3">
      <header>
        <h1 className="text-4xl font-bold">Projects</h1>
        <p>
          Here are some of the Projects that I&apos;ve working on in the past 3
          years:
        </p>
      </header>
      <nav className="flex gap-1">
        {tabs.map((tab, key) => (
          <button
            className={`border px-2 py-1.5 rounded-md ${
              currentIndex === key ? "bg-white text-black" : ""
            }`}
            onClick={() => setCurrentIndex(key)}
            key={key}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="flex flex-col gap-2">
        <header className="">
          <h1 className="leading-none text-2xl font-bold">
            {experience.title}
          </h1>
          {experience.role && <span>{experience.role}</span>}
        </header>
        {experience.responsibilities && (
          <div>
            {experience.responsibilities.map((responsibility, key) => (
              <div key={key}>
                {"-"} {responsibility}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col gap-2">
          <header className="text-xl font-bold">Projects</header>
          {experience.projects.map(
            ({ title, role, description, link }, key) => (
              <div
                className="border px-3 py-2 rounded leading-normal w-full"
                key={key}
              >
                <header>
                  <h1 className="leading-none text-xl">{title}</h1>
                  {role && <span>{role}</span>}
                </header>
                <div className="leading-normal">{description}</div>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    {link}
                  </a>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

type Experience = {
  title: string;
  role?: string;
  responsibilities?: string[];
  projects: {
    title: string;
    role?: string;
    description: string;
    link?: string;
  }[];
};

const experiences: Experience[] = [
  {
    title: "Ground-Link Advertising Company",
    role: "Lead Frontend Developer (April 2023 - Present)",
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
    title: "Cafe24",
    role: "L2 Frontend Developer (March 2020 - April 2023)",
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
        description:
          "A tool for Cafe24 Developers to detect any style discrepancies on a Mall, when installing a 3rd party application on mall can change the design of a website thus by creating Style Tracker can help easily track discrepancies.\nWritten in Next.js with custom express in backend to maximize security and performance",
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
    projects: [
      {
        title: "Tres Marias Sweets",
        // role: "Fullstack Developer",
        description:
          "An online ordering system for Tres Marias Sweets\nWritten in Vue.js, and TailwindCSS in frontend and using Laravel in backend",
        link: "https://github.com/AllenElguira16/TresMariasSweets",
      },
      {
        title: "piso-print-kiosk",
        // role: "Fullstack Developer",
        description:
          "A coin based kiosk that prints when a coin is slotted to the machine\nWritten in React, and TailwindCSS in frontend and Arduino in hardware",
        link: "https://github.com/AllenElguira16/piso-print-kiosk",
      },
      {
        title: "Stronghold Insurance Management and Information System",
        // role: "Fullstack Developer",
        description:
          "A management system for Stronghold Company\nWritten in React, and TailwindCSS in frontend and NodeJS in backend",
        link: "https://github.com/AllenElguira16/SIMIS",
      },
      {
        title: "E-Learning",
        // role: "Fullstack Developer",
        description:
          "An interactive e-learning service\nWritten in React, and TailwindCSS in frontend and NodeJS in backend",
        link: "https://github.com/AllenElguira16/E-Learning",
      },
    ],
  },
  {
    title: "Others",
    projects: [
      {
        title: "Video to Ascii CLI",
        // role: "Backend Developer",
        description:
          "A CLI tool that converts any mp4 videos into ascii animation\nWritten in NodeJS in backend and utilizing worker_threads for maximize performance",
        link: "https://github.com/AllenElguira16/video-to-ascii-cli",
      },
      {
        title: "Nebula",
        // role: "Backend",
        description:
          "A framework written with newest features of PHP 8 such as attributes, destructuring, and many more",
        link: "https://github.com/AllenElguira16/Nebula",
      },
    ],
  },
];
