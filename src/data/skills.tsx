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
import { BsFillBootstrapFill, BsUbuntu } from "react-icons/bs";
import {
  SiChakraui,
  SiDaisyui,
  SiExpress,
  SiMui,
  SiPhp,
  SiSocketdotio,
  SiSqlite,
  SiStyledcomponents,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { IconType } from "react-icons";

type TSkills = {
  text: string;
  Logo?: IconType;
}[];

export const skills: TSkills = [
  {
    text: "HTML5",
    Logo: AiFillHtml5,
  },
  {
    text: "CSS3",
    Logo: BiLogoCss3,
  },
  {
    text: "JavaScript",
    Logo: BiLogoJavascript,
  },
  {
    text: "TypeScript",
    Logo: BiLogoTypescript,
  },
  {
    text: "NodeJS",
    Logo: BiLogoNodejs,
  },
  {
    text: "React",
    Logo: GrReactjs,
  },
  {
    text: "Material-UI",
    Logo: SiMui,
  },
  {
    text: "ChakraUI",
    Logo: SiChakraui,
  },
  {
    text: "Daisy UI",
    Logo: SiDaisyui,
  },
  {
    text: "Vue",
    Logo: BiLogoVuejs,
  },
  {
    text: "NextJS",
    Logo: TbBrandNextjs,
  },
  {
    text: "TailwindCSS",
    Logo: BiLogoTailwindCss,
  },
  {
    text: "Bootstrap 5",
    Logo: BsFillBootstrapFill,
  },
  {
    text: "Styled Components",
    Logo: SiStyledcomponents,
  },
  {
    text: "PHP",
    Logo: SiPhp,
  },
  {
    text: "MySQL",
    Logo: GrMysql,
  },
  {
    text: "PostgreSQL",
    Logo: DiPostgresql,
  },
  {
    text: "SQLite3",
    Logo: SiSqlite,
  },
  {
    text: "Git",
    Logo: BiLogoGit,
  },
  {
    text: "Redux",
    Logo: BiLogoRedux,
  },
  {
    text: "MongoDB",
    Logo: BiLogoMongodb,
  },
  {
    text: "Express.js",
    Logo: SiExpress,
  },
  {
    text: "Socket.io",
    Logo: SiSocketdotio,
  },
  {
    text: "Ubuntu",
    Logo: BsUbuntu,
  },
];
