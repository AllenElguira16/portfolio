import Image from "next/image";
import profileImage from "../../assets/profile.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiExpress, SiPhp, SiSqlite } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

export default function About() {
  return (
    <>
      <section className="flex justify-between px-3 gap-4">
        <Image
          src={profileImage}
          alt="Profile Image"
          className="rounded-xl"
          priority
          width={300}
          height={300}
        />
        <div>
          <h1 className="text-4xl font-bold">
            Hello~!! I&apos;m Allen, a Frontend Developer
          </h1>
          <p>
            A highly skilled Frontend Developer, with over 3 years of experience
            in the IT industry with a proven track record of success.
          </p>
          <p>
            I specialize in using React and TypeScript as my core technologies
            and have consistently demonstrated my technical expertise on various
            projects.
          </p>
          <p>
            Throughout my career, I have been recognized as one of the most
            talented developers in the industry due to my ability to
            consistently deliver high-quality and performant work.
          </p>
        </div>
      </section>
      <section className="px-3">
        <header>
          <h1 className="text-4xl font-bold">Skills</h1>
          <span>Here are some of my skills:</span>
        </header>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ text, logo }, key) => (
            <div
              className="flex items-center px-3 py-2 border rounded-sm gap-2 text-2xl"
              key={key}
            >
              {logo}
              <span className="text-xl">{text}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const skills = [
  {
    text: "HTML5",
    logo: <AiFillHtml5 />,
  },
  {
    text: "CSS3",
    logo: <BiLogoCss3 />,
  },
  {
    text: "JavaScript",
    logo: <BiLogoJavascript />,
  },
  {
    text: "TypeScript",
    logo: <BiLogoTypescript />,
  },
  {
    text: "NodeJS",
    logo: <BiLogoNodejs />,
  },
  {
    text: "React",
    logo: <GrReactjs />,
  },
  {
    text: "Vue",
    logo: <BiLogoVuejs />,
  },
  {
    text: "NextJS",
    logo: <TbBrandNextjs />,
  },
  {
    text: "TailwindCSS",
    logo: <BiLogoTailwindCss />,
  },
  {
    text: "Bootstrap 5",
    logo: <BsFillBootstrapFill />,
  },
  {
    text: "PHP",
    logo: <SiPhp />,
  },
  {
    text: "MySQL",
    logo: <GrMysql />,
  },
  {
    text: "PostgreSQL",
    logo: <DiPostgresql />,
  },
  {
    text: "SQLite3",
    logo: <SiSqlite />,
  },
  {
    text: "Git",
    logo: <BiLogoGit />,
  },
  {
    text: "Redux",
    logo: <BiLogoRedux />,
  },
  {
    text: "MongoDB",
    logo: <BiLogoMongodb />,
  },
  {
    text: "Express.js",
    logo: <SiExpress />,
  },
];
