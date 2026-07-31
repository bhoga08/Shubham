import { motion } from "framer-motion";

import Hero from "../components/Hero";
import About from "./About";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import FeaturedProjects from "../components/FeaturedProjects";

const Home = () => {
  return (
    <motion.main
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="hero-section">
        <Hero />
      </section>

      <section className="about-section">
        <About />
      </section>

      <section className="skills-section">
        <Skills />
      </section>

      <section className="timeline-section">
        <Timeline />
      </section>

      <section className="projects-section">
        <FeaturedProjects />
      </section>
    </motion.main>
  );
};

export default Home;