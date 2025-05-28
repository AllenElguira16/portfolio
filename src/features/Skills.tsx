import { Content } from "../components/Content";
import { Title } from "../components/Title";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <Content id="skills">
      <Title>Skills</Title>
      <div className="flex flex-wrap gap-4 py-2 justify-evenly">
        {skills.map(({ text, Logo }) => (
          <div
            key={text}
            className="card bg-base-100 card-border card-compact sm:card-normal min-w-28"
          >
            <div className="card-body items-center text-center justify-center">
              {!!Logo && <Logo className="text-3xl m-auto" />}
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </Content>
  );
};
