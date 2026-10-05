import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        {/* Header */}
        <div className="section-header">
          <p className="section-number">02 — SELECTED PROJECTS</p>

          <h2>
            Building <span>intelligent systems</span> for real-world problems.
          </h2>

          <p className="projects-intro">
            A selection of projects spanning artificial intelligence,
            machine learning, NLP, data science, financial automation,
            entity resolution, and geospatial analytics.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="case-study-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="case-study"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="close-case-study"
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study"
            >
              ×
            </button>

            <div className="case-study-header">
              <p className="section-number">
                {selectedProject.number} — CASE STUDY
              </p>

              <h2>{selectedProject.title}</h2>

              <h3>{selectedProject.subtitle}</h3>

              <p>{selectedProject.category}</p>
            </div>

            <div className="case-study-body">

              <CaseStudyBlock
                title="Overview"
                content={selectedProject.shortDescription}
              />

              <CaseStudyBlock
                title="Problem"
                content={selectedProject.problem}
              />

              <CaseStudyBlock
                title="Objective"
                content={selectedProject.objective}
              />

              <div className="case-study-block">
                <span className="case-study-label">APPROACH</span>

                <div className="approach-list">
                  {selectedProject.approach.map((step, index) => (
                    <div className="approach-item" key={step}>
                      <span>0{index + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-study-block">
                <span className="case-study-label">TECHNOLOGIES</span>

                <div className="case-study-tech">
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="case-study-block">
                <span className="case-study-label">
                  RESULTS / PERFORMANCE
                </span>

                {Array.isArray(selectedProject.results) ? (
                  <ul className="results-list">
                    {selectedProject.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{selectedProject.results}</p>
                )}
              </div>

              <CaseStudyBlock
                title="My Contribution"
                content={selectedProject.contribution}
              />

            </div>

            <div className="case-study-footer">

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="case-study-button primary"
                >
                  GitHub →
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="case-study-button secondary"
                >
                  Live Demo →
                </a>
              )}

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

function CaseStudyBlock({ title, content }) {
  return (
    <div className="case-study-block">
      <span className="case-study-label">{title}</span>
      <p>{content}</p>
    </div>
  );
}

export default Projects;