import { FC } from "react";
import { links } from "../data/links";
import { Content } from "../components/Content";

export const Intro: FC = () => {
  return (
    <div className="hero bg-base-200 mb-8">
      <Content className="hero-content flex-col md:flex-row-reverse">
        <img
          width={432}
          height={433}
          src="profile-pc.webp"
          alt="Michael Allen Elguira"
          className="rounded-3xl shadow-2xl mb-0 md:mb-[-3rem]"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/profile-pc.webp"
          type="image/webp"
        />
        <div>
          <span className="text-lg">Hi, my name is Michael Allen Elguira</span>
          <h1 className="pb-6 text-2xl sm:text-3xl font-bold font-title">
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
                className="flex items-center gap-2 hover:underline"
              >
                <Logo className="text-lg" />
                <span className="text-lg font-bold">{text}</span>
              </a>
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
};
