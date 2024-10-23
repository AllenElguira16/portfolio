import { About } from "./features/About";
import { Footer } from "./features/Footer";
import { Intro } from "./features/Intro";
import { Navbar } from "./features/Navbar";
import { Skills } from "./features/Skills";
import { WorkExperience } from "./features/WorkExperience";

function App() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col gap-10 mb-10">
        <Intro />
        <About />
        <Skills />
        <WorkExperience />
      </section>
      <Footer />
    </main>
  );
}

export default App;
