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
            className="card bg-base-100 card-bordered card-compact sm:card-normal max-w-28 w-full"
          >
            <div className="card-body items-center text-center justify-center">
              <div className="size-4 sm:size-8">
                {!!Logo && <Logo className="text-lg sm:text-3xl m-auto" />}
              </div>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </Content>
  );
};
