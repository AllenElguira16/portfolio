import { FC } from "react";
import { Content } from "../components/Content";
import { Title } from "../components/Title";
import { experiences, TExperience } from "../data/work";
import { LuExternalLink } from "react-icons/lu";

export const Experience = () => {
  return (
    <Content id="work">
      <div className="mb-4">
        <Title>Work Experiences</Title>
        <span>
          Here are some of the Work Experiences that I've working on in the past
          3 years:
        </span>
      </div>
      <div className="flex flex-col mx-2">
        {experiences.map((experience) => (
          <div className="flex gap-4" key={experience.shortTitle}>
            <div className="w-0.5 flex-1 shrink-0 flex flex-col items-center">
              <div className="size-3 bg-base-content rounded-full my-3"></div>
              <div className="w-full h-full flex-1 bg-base-300"></div>
            </div>
            <div className="mb-2">
              <div className="font-bold flex-col items-start leading-[0px]">
                <div className="text-xl">{experience.title}</div>
                <div className="flex flex-col text-sm leading-4">
                  <span>{experience.role}</span>
                  <small>{experience.date}</small>
                </div>
              </div>
              <p className="py-2">{experience.responsibilities}</p>
              <p className="text-lg font-bold mb-2">Projects</p>
              <Projects projects={experience.projects} />
            </div>
          </div>
        ))}
      </div>
    </Content>
  );
};

const Projects: FC<{ projects: TExperience["projects"] }> = ({ projects }) => {
  if (!projects.length) return;
  return (
    <div className="flex flex-wrap gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="card bg-base-100 card-bordered md:w-[calc((100%/2)-1rem)] lg:w-[calc((100%/3)-1rem)]"
        >
          <div className="card-body">
            <div className="card-title block leading-[0px]">
              <div className="font-bold leading-5 flex-1 flex justify-center w-full">
                <span className="flex-1 text-base">{project.title}</span>
                {project.link && (
                  <a
                    aria-label={`Go-to ${project.link}`}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-wrap break-words"
                  >
                    <LuExternalLink />
                  </a>
                )}
              </div>
              <small className="text-xs leading-3">{project.role}</small>
            </div>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
