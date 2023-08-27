import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="px-3">
      <header className="text-4xl font-bold">Contact</header>
      <div className="text-2xl">You can contact me on:</div>
      <div className="flex flex-col gap-1">
        {contacts.map(({ text, logo }, key) => (
          <div className="flex items-center py-2 gap-2 text-2xl" key={key}>
            {logo}
            <span className="text-xl">{text}</span>
          </div>
        ))}
        {/* <div>E-Mail: AllenElguira16@gmail.com</div>
        <div>Phone: +639069226039</div>
        <div>LinkedIn: https://www.linkedin.com/in/allenelguira16/</div> */}
      </div>
    </section>
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
    text: "https://www.linkedin.com/in/allenelguira16/",
    logo: <AiFillLinkedin />,
  },
  {
    text: "https://github.com/AllenElguira16",
    logo: <AiFillGithub />,
  },
  {
    text: "125 Pinatubo St., Barangka Ilaya, Mandaluyong City",
    logo: <FaLocationDot />,
  },
];
