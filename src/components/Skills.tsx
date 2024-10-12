import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <div
      className="lg:max-w-screen-lg max-w-none mx-auto w-full px-4"
      id="skills"
    >
      <h1 className="text-4xl font-bold font-title">Skills</h1>
      <div className="flex flex-wrap gap-4 py-2 justify-evenly">
        {skills.map(({ text, Logo }) => (
          <div
            key={text}
            className="card bg-base-100 card-bordered card-compact sm:card-normal"
          >
            <div className="card-body items-center">
              <div className="size-4 sm:size-8">
                {!!Logo && <Logo className="text-lg sm:text-3xl m-auto" />}
              </div>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
