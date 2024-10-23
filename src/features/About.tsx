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
        A quick start on how I became a programmer.
        <br />
        Initially, I've started programming in my last days of high-school when
        I randomly scrolling through social media about programming (back then I
        have no idea what it is about). I've researched a lot into that
        particular subject especially in programming doing C# windows applets
        and do pranks for my classmates. I've done a bunch of things like
        systems programming in C++, Windows app in C#, hardware programming in
        Arduino C, and websites in a lot of languages such as PHP, TypeScript
        and more.
      </p>
      <p className="py-2">
        Throughout my career, I'm consistently learning new technologies to
        incorporate and enhance my skills and knowledge as a programmer.
      </p>
      <p className="py-2">
        I have been recognized as one of the most talented developers in the
        industry due to my ability to deliver high-quality products for our
        clients.
      </p>
    </Content>
  );
};
