import { About } from "./features/About";
import { Footer } from "./features/Footer";
import { Intro } from "./features/Intro";
import { Navbar } from "./features/Navbar";
import { Skills } from "./features/Skills";
import { Experience } from "./features/Experience";
import { Meta } from "./features/Meta";

function App() {
  return (
    <>
      <Meta />
      <main>
        <Navbar />
        <section className="flex flex-col gap-10 mb-10">
          <Intro />
          <About />
          <Skills />
          <Experience />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
