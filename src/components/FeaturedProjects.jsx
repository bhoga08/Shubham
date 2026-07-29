import "../css/FeaturedProjects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="featured-projects">

      <div className="container">

        <div className="featured-header">

          <span className="section-tag">
            Featured Work
          </span>

          <h2>
            My Best <span>Projects</span>
          </h2>

          <p>
            A selection of projects showcasing my MERN stack development
            skills and problem-solving approach.
          </p>

        </div>

        <div className="featured-grid">

          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

        </div>

        <div className="view-all">

          <Link to="/projects">
            View All Projects →
          </Link>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;