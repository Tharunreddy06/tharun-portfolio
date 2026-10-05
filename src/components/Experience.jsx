import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        <div className="section-header">
          <p className="section-number">04 — EXPERIENCE</p>

          <h2>
            Learning through <span>building and leading.</span>
          </h2>

          <p className="experience-intro">
            Professional experience and leadership roles that have shaped
            my technical, collaborative, and problem-solving skills.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.id}>

              <div className="experience-number">
                {item.number}
              </div>

              <div className="experience-content">

                <div className="experience-meta">
                  <span className="experience-type">
                    {item.type}
                  </span>

                  <span className="experience-period">
                    {item.period}
                  </span>
                </div>

                <h3>{item.role}</h3>

                <div className="experience-organization">
                  <span>{item.organization}</span>
                  <span>{item.location}</span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;