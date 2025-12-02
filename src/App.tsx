import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { FallingCherryBlossoms } from "./components/FallingCherryBlossoms";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3d2730] via-[#2d2235] to-[#3d2730]">
      <FallingCherryBlossoms />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}