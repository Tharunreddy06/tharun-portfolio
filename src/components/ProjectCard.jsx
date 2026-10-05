function ProjectCard({ project, onView }) {
  return (
    <article className="project-card">

      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-card-content">
        <p className="project-status">{project.status}</p>

        <h3>{project.title}</h3>

        <h4>{project.subtitle}</h4>

        <p className="project-description">
          {project.shortDescription}
        </p>

        <div className="project-tech">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-card-bottom">
        <button
          type="button"
          className="project-link"
          onClick={() => onView(project)}
        >
          View Case Study <span>→</span>
        </button>
      </div>

    </article>
  );
}

export default ProjectCard;