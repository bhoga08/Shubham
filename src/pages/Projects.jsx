import "../css/Projects.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects-page">

      <div className="projects-header">

        <span className="projects-badge">
          🚀 My Work
        </span>

        <h1>
          Featured <span>Projects</span>
        </h1>

        <p>
          Explore some of my recent projects built using modern web
          technologies.
        </p>

      </div>

      {/* Search & Filter */}

      <div className="projects-top">

        <input
          type="text"
          placeholder="Search Project..."
        />

        <div className="filter-buttons">

          <button className="active">
            All
          </button>

          <button>
            MERN
          </button>

          <button>
            React
          </button>

          <button>
            Java
          </button>

        </div>

      </div>

      {/* Cards */}

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
};


export default Projects;



