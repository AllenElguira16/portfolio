import { Content } from "../components/Content";
import { Title } from "../components/Title";
import { getYearsOfExperience } from "../utils/getYearsOfExperience";

export const About = () => {
  const year = Math.floor(getYearsOfExperience());
  const isOver = getYearsOfExperience() % 1 !== 0;

  return (
    <Content id="about">
      <Title>About</Title>
      <p className="py-2">
        A Fullstack Developer with {isOver && "over "}
        {year} years of professional experience, striving for clean-code yet
        human-readable code.
      </p>
      <p className="py-2">
        I’m a Full-stack Engineer with over five years of professional
        experience, dedicated to writing clean, maintainable, and human-readable
        code that enhances both team collaboration and project quality.
      </p>
      <p className="py-2">
        My journey into programming started in my final days of high school when
        I stumbled upon a social media post about coding. At the time, I had no
        idea what it was about, but curiosity took over. I began researching and
        experimenting, building small C# Windows applets—mostly to prank my
        classmates!
      </p>
      <p className="py-2">
        That curiosity quickly turned into passion. I explored systems
        programming with C++, Windows applications in C#, hardware programming
        with Arduino C, and web development using PHP, TypeScript, and more. I
        started building websites back in the ES3, jQuery, and PHP era—before
        JavaScript became fully standardized.
      </p>
      <p className="py-2">
        Throughout my career, I’ve been committed to continuous learning, always
        staying up-to-date with emerging technologies and best practices. I
        thrive on solving complex problems, optimizing performance, and
        developing scalable solutions that create real impact.
      </p>
      <p className="py-2">
        I’ve been recognized for my problem-solving skills and ability to
        deliver high-quality products, helping clients achieve their goals
        efficiently. But beyond just writing code, I focus on building
        meaningful solutions that make a difference.
      </p>
    </Content>
  );
};
