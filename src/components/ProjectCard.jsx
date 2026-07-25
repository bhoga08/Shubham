import "../css/ProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">

      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="project-buttons">

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
            <FaExternalLinkAlt /> Live
          </a>

          <Link to={`/projects/${project.id}`}>
            Details →
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;