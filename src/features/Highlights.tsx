import { FC } from "react";
import { Content } from "../components/Content";
import { Title } from "../components/Title";
import { highlights, TExperience } from "../data/work";
import { LuExternalLink } from "react-icons/lu";

export const Highlights = () => {
  return (
    <Content id="work">
      <div className="mb-4">
        <Title>Project Highlights</Title>
        <span>
          A selection of projects that I’ve invested significant time and effort
          into, showcasing my skills and dedication.
        </span>
      </div>
      <ul>
        <li>
          <div className="mb-2">
            {!!highlights.works && (
              <div>
                {highlights.works.map((work, key) => (
                  <div key={key}>
                    <div className="font-bold flex flex-col text-sm leading-4">
                      <span className="text-base">{work.role}</span>
                      <small>{work.date}</small>
                    </div>
                    <ul className="list-disc py-2 ml-6">
                      {work.responsibilities?.map((responsibility, key) => (
                        <li key={key}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <div>
              <Projects projects={highlights.projects} />
            </div>
          </div>
        </li>
      </ul>
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
          className="card bg-base-100 card-border w-full md:w-[calc((100%/2)-1rem)] lg:w-[calc((100%/3)-1rem)]"
        >
          <div className="card-body">
            <div className="card-title block leading-[0px]">
              <div className="font-bold leading-5 flex-1 flex justify-center w-full gap-4">
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
            <p>
              {project.description ?? (
                <span className="italic font-bold text-red-700">
                  Not available
                </span>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
