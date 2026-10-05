import "./index.css";

import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio">

      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            TT<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#experience">Experience</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Connect
          </a>

        </div>
      </nav>


      {/* =========================
          MAIN
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="hero-label">
              AI / ML · DATA SCIENCE · RESEARCH
            </p>

            <h1>
              Hi, I'm <span>Thurupu Tharun.</span>
            </h1>

            <p className="hero-description">
              B.Tech Computer Science Engineering student specializing in
              Artificial Intelligence & Machine Learning. I build intelligent
              systems that combine machine learning, data, and automation.
            </p>

            {/* =========================
                HERO BUTTONS
            ========================= */}

            <div className="hero-buttons">

              <a href="#projects" className="primary-button">
                Explore My Work →
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume/Thurupu-Tharun-Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                View Resume
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume/Thurupu-Tharun-Resume.pdf`}
                download="Thurupu-Tharun-Resume.pdf"
                className="secondary-button"
              >
                Download Resume
              </a>

            </div>

            <div className="hero-meta">

              <div>
                <strong>B.Tech CSE</strong>
                <span>AI / ML</span>
              </div>

              <div>
                <strong>9.24</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>2027</strong>
                <span>Expected Graduation</span>
              </div>

            </div>

          </div>


          {/* =========================
              HERO VISUAL
          ========================= */}

          <div className="hero-visual">

            <div className="visual-card">

              <div className="visual-grid"></div>

              <div className="visual-content">

                <div className="code-line">
                  <span>01</span> AI
                </div>

                <div className="code-line">
                  <span>02</span> ML
                </div>

                <div className="code-line">
                  <span>03</span> DATA
                </div>

                <div className="code-line">
                  <span>04</span> RESEARCH
                </div>

              </div>

              <div className="visual-circle"></div>

            </div>

          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <About />


        {/* =========================
            PROJECTS
        ========================= */}

        <Projects />


        {/* =========================
            CERTIFICATIONS
        ========================= */}

        <Certifications />


        {/* =========================
            EXPERIENCE
        ========================= */}

        <Experience />


        {/* =========================
            RESEARCH
        ========================= */}

        <Research />


        {/* =========================
            CONTACT
        ========================= */}

        <Contact />

      </main>

    </div>
  );
}

export default App;