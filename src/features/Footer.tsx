import { links } from "../data/links";

export const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#about">
          About
        </a>
        <a className="link link-hover" href="#skills">
          Skills
        </a>
        <a className="link link-hover" href="#work">
          Work
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {links.map(({ text, link, Logo }) => (
            <a
              key={link}
              href={link}
              aria-label={text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo className="text-3xl" />
            </a>
          ))}
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} Michael Allen Elguira.</p>
        <p>All rights reserved</p>
      </aside>
    </footer>
  );
};
