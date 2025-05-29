import { Content } from "../components/Content";
import { Title } from "../components/Title";

export const About = () => {
  return (
    <Content id="about">
      <Title>About</Title>
      <p className="py-2">
        I’m a frontend-focused engineer with over five years of professional
        experience, passionate about crafting seamless, performant, and visually
        engaging web experiences using modern JavaScript, TypeScript, and UI
        frameworks.
      </p>
      <p className="py-2">
        My journey into programming began in my final days of high school,
        sparked by a random social media post about coding. With no clue what it
        meant, I dove in out of curiosity quickly falling in love with the
        creative power of building things from scratch. I started with small C#
        Windows applets, mostly just to prank classmates, but that curiosity
        soon turned into a deep passion for the web.
      </p>
      <p className="py-2">
        Over the years, I’ve evolved with the web itself starting back in the
        days of ES3, jQuery, and raw PHP, and growing alongside the rise of
        component-based libraries and frameworks like React, Vue, and Solid.js.
        I specialize in building responsive UIs, optimizing frontend
        performance, and creating user-centric interfaces that feel fast, fluid,
        and intuitive.
      </p>
      <p className="py-2">
        I’m a strong advocate for writing clean, maintainable, and
        human-readable code because great frontend development is as much about
        collaboration and clarity as it is about code. I constantly explore new
        technologies and best practices to stay ahead of the curve, and I enjoy
        solving complex UI problems and turning ideas into polished, scalable
        products.
      </p>
      <p className="py-2">
        Whether I’m refining component architectures, working with design
        systems, or digging deep into rendering performance, I’m driven by one
        thing: delivering frontend experiences that truly resonate with users.
      </p>
    </Content>
  );
};
