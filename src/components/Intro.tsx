import { FC } from "react";
import profile from "../assets/profile.jpg";
import { links } from "../data/links";

export const Intro: FC = () => {
  return (
    <div className="hero bg-base-200 mb-8">
      <div className="hero-content flex-col md:flex-row-reverse lg:max-w-screen-lg max-w-none mx-auto">
        <img
          src={profile}
          className="max-w-sm rounded-3xl shadow-2xl w-full mb-0 md:mb-[-3rem]"
        />
        <div>
          <span className="text-lg">Hi, my name is Michael Allen Elguira</span>
          <h1 className="pb-6 text-2xl sm:text-4xl font-bold font-title">
            A Fullstack Developer specialized in React, Next.js, Node.js and
            TypeScript
          </h1>
          <div className="flex flex-wrap gap-4">
            {links.map(({ link, Logo, text }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Logo className="text-lg" />
                <span>{text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
