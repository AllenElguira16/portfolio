import { useState } from "react";
import { cn } from "../utils/cn";

export const Navbar = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  const toggleNavbar = () => setIsNavbarHidden(!isNavbarHidden);

  return (
    <header className="lg:max-w-screen-lg max-w-none mx-auto">
      <div className="navbar bg-base-100 px-4 py-6 flex-col sm:flex-row">
        <div className="flex justify-between flex-1 w-full px-4">
          <div className="flex-1 flex flex-col items-start leading-5">
            <div className="text-xl sm:text-2xl font-bold leading-5 font-title">
              Michael Allen Elguira
            </div>
            <small className="text-xs leading-3">
              <div>Senior Frontend Engineer</div>
              <div>@ Global Payments</div>
            </small>
          </div>
          <button
            className="btn btn-ghost btn-circle sm:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle Navbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={cn(
            "flex-none sm:inline-block w-full sm:w-auto",
            isNavbarHidden && "hidden"
          )}
        >
          <ul className="menu menu-horizontal px-1 flex-col sm:flex-row">
            <li>
              <a href="#about" className="font-bold">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="font-bold">
                Skills
              </a>
            </li>
            <li>
              <a href="#work" className="font-bold">
                Work
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
