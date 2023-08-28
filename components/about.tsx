import Image from "next/image";
import profileImage from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="grid place-items-center h-screen px-4" id="about">
      <section className="flex flex-col px-3 py-4 gap-4 max-w-6xl md:mx-auto w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 mx-2">
        <header className="text-4xl font-bold">About</header>
        <div className="max-h-[calc(100vh-250px)] md:max-h-none overflow-y-auto">
          <div className="flex flex-col gap-2">
            <p>
              A Fullstack Developer with over 3 years of professional
              experience, striving for clean-code yet human-readable code for
              the benefit of the team.
            </p>
            <p>
              Initially, I&apos;ve started programming in high-school when I
              randomly scrolling through social media about web development
              (about time when web development started to took shape in the
              world in 2014). Back then I would create websites using ES3 (yes
              it was before JavaScript became standardized) with JQuery and PHP
              as the norm before.
            </p>
            <p>
              Throughout my career, I&apos;m consistently learning new
              technologies to incorporate it into my skills and knowledge.
            </p>
            <p>
              I have been recognized as one of the most talented developers in
              the industry due to my ability to deliver high-quality products
              for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
