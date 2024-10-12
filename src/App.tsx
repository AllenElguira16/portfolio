import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";

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
