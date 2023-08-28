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
import {
  SiChakraui,
  SiDaisyui,
  SiExpress,
  SiMui,
  SiPhp,
  SiSqlite,
  SiStyledcomponents,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

export default function Techs() {
  return (
    <div className="grid place-items-center h-screen px-4" id="techs">
      <section className="flex flex-col px-3 py-4 gap-4 max-w-6xl mx-auto w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <header>
          <h1 className="text-4xl font-bold">Techs</h1>
          <span>Here are some of technologies I used on some projects:</span>
        </header>
        <div className="flex flex-wrap gap-2">
          {technologies.map(({ text, logo }, key) => (
            <div
              className="flex items-center px-1 py-0.5 md:px-3 md:py-2 rounded-sm gap-2 text-xl md:text-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100"
              key={key}
            >
              {logo}
              <span className="text-lg md:text-xl">{text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const technologies = [
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
    text: "Material-UI",
    logo: <SiMui />,
  },
  {
    text: "ChakraUI",
    logo: <SiChakraui />,
  },
  {
    text: "Daisy UI",
    logo: <SiDaisyui />,
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
    text: "EmotionCSS",
  },
  {
    text: "styled-components",
    logo: <SiStyledcomponents />,
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
