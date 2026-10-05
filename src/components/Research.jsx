function Research() {
  return (
    <section id="research" className="research-section">
      <div className="section-container">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <div className="section-header">
          <p className="section-number">05 — RESEARCH</p>

          <h2>
            Exploring problems through <span>research.</span>
          </h2>

          <p className="research-intro">
            My research interests focus on artificial intelligence,
            machine learning, natural language processing, explainable AI,
            automated machine learning, and intelligent systems.
          </p>
        </div>


        {/* ================================
            RESEARCH INTERESTS + WORK
        ================================= */}

        <div className="research-grid">

          {/* --------------------------------
              RESEARCH INTERESTS
          --------------------------------- */}

          <div className="research-focus-card">

            <span className="research-card-label">
              RESEARCH INTERESTS
            </span>

            <div className="research-focus-list">

              <div className="research-focus-item">
                <span>01</span>
                <strong>Artificial Intelligence</strong>
              </div>

              <div className="research-focus-item">
                <span>02</span>
                <strong>Machine Learning</strong>
              </div>

              <div className="research-focus-item">
                <span>03</span>
                <strong>Natural Language Processing</strong>
              </div>

              <div className="research-focus-item">
                <span>04</span>
                <strong>Explainable AI</strong>
              </div>

              <div className="research-focus-item">
                <span>05</span>
                <strong>Automated Machine Learning</strong>
              </div>

              <div className="research-focus-item">
                <span>06</span>
                <strong>Intelligent Systems</strong>
              </div>

              <div className="research-focus-item">
                <span>07</span>
                <strong>Data Science</strong>
              </div>

              <div className="research-focus-item">
                <span>08</span>
                <strong>AI Automation</strong>
              </div>

            </div>
          </div>


          {/* --------------------------------
              RESEARCH MANUSCRIPTS
          --------------------------------- */}

          <div className="research-work-card">

            <div className="research-work-header">
              <div>
                <span className="research-card-label">
                  RESEARCH MANUSCRIPTS
                </span>

                <p>
                  Completed research work currently not published.
                </p>
              </div>

              <span className="research-count">
                02
              </span>
            </div>


            {/* ==============================
                PAPER 01
            =============================== */}

            <article className="research-paper">

              <div className="research-paper-number">
                01
              </div>

              <div className="research-paper-content">

                <div className="research-paper-top">

                  <div>
                    <span className="research-paper-type">
                      MANUSCRIPT
                    </span>

                    <h3>
                      Meta-Learning-Based Automatic Hyperparameter
                      Configuration for TPOT in Automated Machine Learning
                    </h3>
                  </div>

                  <span className="research-status">
                    NOT YET PUBLISHED
                  </span>

                </div>

                <p>
                  This work proposes a meta-learning approach for
                  automatically configuring TPOT hyperparameters using
                  dataset-level characteristics before evolutionary
                  AutoML search begins.
                </p>

                <div className="research-tags">
                  <span>AutoML</span>
                  <span>Meta-Learning</span>
                  <span>TPOT</span>
                  <span>Hyperparameter Optimization</span>
                </div>

              </div>

            </article>


            {/* ==============================
                PAPER 02
            =============================== */}

            <article className="research-paper">

              <div className="research-paper-number">
                02
              </div>

              <div className="research-paper-content">

                <div className="research-paper-top">

                  <div>
                    <span className="research-paper-type">
                      MANUSCRIPT
                    </span>

                    <h3>
                      AI-Powered Crime Hotspot Prediction Using
                      Real-Time Social Media Data
                    </h3>
                  </div>

                  <span className="research-status">
                    NOT YET PUBLISHED
                  </span>

                </div>

                <p>
                  Research work focused on combining crime data with
                  real-time social media information to explore AI-based
                  crime hotspot prediction using machine learning,
                  natural language processing, geospatial analysis,
                  and explainable AI.
                </p>

                <div className="research-tags">
                  <span>Artificial Intelligence</span>
                  <span>NLP</span>
                  <span>Geospatial Analysis</span>
                  <span>Explainable AI</span>
                </div>

              </div>

            </article>

          </div>

        </div>


        {/* ================================
            ONGOING RESEARCH
        ================================= */}

        <div className="ongoing-research">

          <div className="ongoing-header">

            <div>
              <span className="research-card-label">
                ONGOING RESEARCH
              </span>

              <p>
                Research directions and technical explorations currently
                being developed.
              </p>
            </div>

            <span className="research-count">
              01
            </span>

          </div>


          <article className="ongoing-paper">

            <div className="ongoing-number">
              01
            </div>

            <div className="ongoing-content">

              <div className="ongoing-title-row">

                <div>
                  <span className="research-paper-type">
                    RESEARCH EXPLORATION
                  </span>

                  <h3>
                    Quantum Recommendation Systems
                  </h3>
                </div>

                <span className="research-status ongoing">
                  ONGOING
                </span>

              </div>

              <p>
                Exploring the intersection of classical machine learning
                and quantum computing for recommendation systems, with
                interest in scalability, data sparsity, and complex
                product selection.
              </p>

              <div className="research-tags">
                <span>Quantum Computing</span>
                <span>Recommendation Systems</span>
                <span>Machine Learning</span>
              </div>

            </div>

          </article>

        </div>


        {/* ================================
            RESEARCH NOTE
        ================================= */}

        <div className="research-note">

          <span>RESEARCH STATUS</span>

          <p>
            Two research manuscripts have been completed and are currently
            not published. Publication or submission details will be added
            here when available.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Research;