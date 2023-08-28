"use client";
import Contact from "@/components/contact";
import About from "@/components/about";
import Home from "@/components/home";
import Techs from "@/components/techs";
import Work from "@/components/work";
import { Parallax } from "react-parallax";

export default function Page() {
  return (
    <>
      <Parallax
        // contentClassName="p-5"
        renderLayer={() => (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "#FBAB7E",
              backgroundImage: `linear-gradient(0deg, #323761 0%, #84526B 70%, #29203F 100%)`,
            }}
          />
        )}
      >
        <Home />
        <About />
        <Techs />
        <Work />
        <Contact />
      </Parallax>
    </>
  );
}
