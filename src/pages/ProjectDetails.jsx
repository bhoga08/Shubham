import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "../css/ProjectDetails.css";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="not-found">
        <h1>Project Not Found</h1>
        <Link to="/projects">Go Back</Link>
      </div>
    );
  }

  return (
    <section className="project-details">

      <div className="project-banner">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-info">

        <Link to="/projects" className="back-btn">
          <FaArrowLeft /> Back
        </Link>

        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <h3>Tech Stack</h3>

        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>

        </div>

      </div>

    </section>
  );
};

export default ProjectDetails;

