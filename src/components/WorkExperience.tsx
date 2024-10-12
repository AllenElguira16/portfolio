import { experiences } from "../data/work";
import { LuExternalLink } from "react-icons/lu";

export const WorkExperience = () => {
  return (
    <div
      className="lg:max-w-screen-lg max-w-none mx-auto w-full px-4"
      id="work"
    >
      <div className="mb-4">
        <h1 className="text-4xl font-bold font-title">Work Experiences</h1>
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
                <div className="text-2xl">{experience.title}</div>
                <small className="text-sm leading-3">{experience.role}</small>
              </div>
              <p className="py-2">{experience.responsibilities}</p>
              <p className="text-lg font-bold">Projects</p>
              {!!experience.projects.length && (
                <div className="flex flex-wrap gap-4">
                  {experience.projects.map((project) => (
                    <div
                      key={project.title}
                      className="card bg-base-100 card-bordered md:w-[calc((100%/2)-1rem)] lg:w-[calc((100%/3)-1rem)]"
                    >
                      <div className="card-body">
                        <div className="card-title block leading-[0px]">
                          <div className="font-bold leading-5 flex-1 flex justify-center w-full">
                            <span className="flex-1">{project.title}</span>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link text-wrap break-words"
                              >
                                <LuExternalLink />
                              </a>
                            )}
                          </div>
                          <small className="text-xs leading-3">
                            {project.role}
                          </small>
                        </div>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* <div
        role="tablist"
        className="tabs tabs-bordered py-2 overflow-auto mb-4"
      >
        {tabList.map((tab, i) => (
          <a
            key={tab}
            role="tab"
            className={cn("tab text-nowrap", currentTab === i && "tab-active")}
            onClick={handleTabChange(i)}
          >
            {tab}
          </a>
        ))}
      </div>

      <div className="bg-base-100 border-base-300 rounded-box">
        <div className="card-title flex-col items-start leading-[0px]">
          <div className="text-2xl font-bold leading-5">{experience.title}</div>
          <small className="text-sm leading-3">{experience.role}</small>
        </div>
        <p className="py-2">{experience.responsibilities}</p>
        {!!experience.projects.length && (
          <div className="flex flex-wrap gap-4">
            {experience.projects.map((project) => (
              <div
                key={project.title}
                className="card bg-base-100 border md:w-[calc((100%/2)-1rem)] lg:w-[calc((100%/3)-1rem)]"
              >
                <div className="card-body">
                  <div className="card-title block leading-[0px]">
                    <div className="font-bold leading-5 flex-1 flex justify-center w-full">
                      <span className="flex-1">{project.title}</span>
                      {project.link && (
                        <a
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
        )}
      </div> */}
    </div>
  );
};
