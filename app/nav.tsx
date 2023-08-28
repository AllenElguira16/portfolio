"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-1 w-full flex-col md:flex-row justify-between px-3 py-4 top-0 shadow fixed z-50 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <div className="flex md:hidden">
        <GiHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-6"
        />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:gap-10 md:mx-auto top-[56px] `}
      >
        {["home", "about", "techs", "work", "contact"].map((link) => (
          <a
            className="block py-1.5 md:p-0 capitalize"
            href={`#${link}`}
            key={link}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
