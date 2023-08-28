import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="grid place-items-center h-screen px-4" id="contact">
      <section className="flex flex-col px-3 py-4 gap-4 max-w-6xl mx-auto w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <header className="text-4xl font-bold">Contact</header>
        <div className="text-2xl">You can contact me on:</div>
        <div className="flex flex-col gap-1">
          {contacts.map(({ text, logo, link }, key) => (
            <div className="flex items-center gap-2 md:text-2xl" key={key}>
              {logo}
              {link && (
                <a
                  href={link}
                  className="md:text-xl text-blue-400 hover:underline"
                  target="_blank"
                >
                  {text}
                </a>
              )}
              {!link && <span className="md:text-xl">{text}</span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const contacts = [
  {
    text: "AllenElguira16@gmail.com",
    logo: <AiOutlineMail />,
  },
  {
    text: "+639069226039",
    logo: <AiFillPhone />,
  },
  {
    text: "linkedin.com/in/allenelguira16/",
    link: "https://www.linkedin.com/in/allenelguira16/",
    logo: <AiFillLinkedin />,
  },
  {
    text: "github.com/AllenElguira16",
    link: "https://www.github.com/AllenElguira16",
    logo: <AiFillGithub />,
  },
  {
    text: "125 Pinatubo St., Barangka Ilaya, Mandaluyong City",
    logo: <FaLocationDot />,
  },
];
