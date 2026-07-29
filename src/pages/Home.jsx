import Hero from "../components/Hero";
import About from "./About";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import FeaturedProjects from "../components/FeaturedProjects";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <FeaturedProjects />
    </>
  );
};

export default Home;