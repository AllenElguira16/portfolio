import { IconType } from "react-icons";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

type TSocialMediaLinks = {
  text: string;
  link: string;
  Logo: IconType;
}[];

export const links: TSocialMediaLinks = [
  {
    text: "Facebook",
    link: "https://www.facebook.com/AllenElguira16/",
    Logo: BsFacebook,
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/allenelguira16/",
    Logo: BsLinkedin,
  },
  {
    text: "GitHub",
    link: "https://github.com/AllenElguira16/",
    Logo: BsGithub,
  },
];
