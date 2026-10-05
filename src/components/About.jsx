function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-header">
          <p className="section-number">01 — ABOUT</p>

          <h2>
            Turning data into <span>intelligent systems.</span>
          </h2>
        </div>

        {/* About Introduction */}
        <div className="about-intro-grid">

          {/* Profile Image */}
          <div className="about-image-wrapper">
            <img
              src="/images/profile.jpg"
              alt="Thurupu Tharun"
              className="about-profile-image"
            />

            <div className="about-image-caption">
              <span>THURUPU THARUN</span>
              <span>CSE · AI/ML</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="about-intro">
            <p className="about-lead">
              I'm <strong>Thurupu Tharun</strong>, a Computer Science
              Engineering student specializing in Artificial Intelligence
              and Machine Learning at Alliance University, Bengaluru.
            </p>

            <p>
              My interests lie at the intersection of machine learning,
              data science, automation, and intelligent systems. I enjoy
              building systems that transform complex data into useful
              insights and practical solutions.
            </p>

            <p>
              Alongside development, I'm interested in research-oriented
              problems involving AI, NLP, explainable AI, automated
              machine learning, and intelligent decision-making systems.
            </p>
          </div>

        </div>

        {/* Academic + Research */}
        <div className="about-grid">

          {/* Academic Profile */}
          <div className="academic-card">
            <span className="about-card-label">
              ACADEMIC PROFILE
            </span>

            <div className="academic-main">
              <h3>B.Tech Computer Science Engineering</h3>
              <p>Artificial Intelligence & Machine Learning</p>
            </div>

            <div className="academic-details">
              <div>
                <span>UNIVERSITY</span>
                <strong>Alliance University</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Bengaluru, India</strong>
              </div>

              <div>
                <span>CGPA</span>
                <strong>9.24 / 10</strong>
              </div>

              <div>
                <span>EXPECTED GRADUATION</span>
                <strong>2027</strong>
              </div>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="about-highlights">
            <span className="about-card-label">
              ACADEMIC HIGHLIGHTS
            </span>

            <div className="highlight-list">

              <div className="highlight-item">
                <strong>100%</strong>
                <span>10th Grade</span>
              </div>

              <div className="highlight-item">
                <strong>97.1%</strong>
                <span>Intermediate</span>
              </div>

              <div className="highlight-item">
                <strong>9.24</strong>
                <span>B.Tech CGPA</span>
              </div>

              <div className="highlight-item">
                <strong>AI/ML</strong>
                <span>Specialization</span>
              </div>

            </div>
          </div>

        </div>

        {/* Research Interests */}
        <div className="research-interests">

          <span className="about-card-label">
            RESEARCH INTERESTS
          </span>

          <div className="research-tags">

            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Automated Machine Learning</span>
            <span>Data Science</span>
            <span>Natural Language Processing</span>
            <span>Explainable AI</span>
            <span>Intelligent Systems</span>
            <span>AI Automation</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;