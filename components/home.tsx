import Image from "next/image";
import profileImage from "../assets/profile.png";

export default function Home() {
  return (
    <div className="grid items-end h-screen" id="home">
      <section className="flex flex-col-reverse md:flex-row gap-4">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="shrink-0 w-full max-w-[600px] max-h-[600px] mx-auto md:m-0"
          priority
          width={600}
          height={600}
        />
        <header className="flex flex-col gap-4 md:mt-10">
          <h1 className="text-xl md:text-2xl">
            Hi, my name is Michael Allen Elguira
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold">
            A Fullstack Developer specialized in React, Next.js, Node.js and
            many more
          </h1>
        </header>
        <div></div>
      </section>
    </div>
  );
}
