function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <div className="contact-content">

          <div className="contact-heading">
            <p className="section-number">06 — CONTACT</p>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p className="contact-intro">
              I'm open to research opportunities, internships,
              collaborations, and interesting problems in AI,
              machine learning, and data science.
            </p>
          </div>

          <div className="contact-links">

            {/* Email */}
            <a
              href="mailto:tharunthurupu@gmail.com"
              className="contact-link"
            >
              <div>
                <span className="contact-label">EMAIL</span>
                <strong>tharunthurupu@gmail.com</strong>
              </div>

              <span className="contact-arrow">↗</span>
            </a>


            {/* GitHub */}
            <a
              href="https://github.com/Tharunreddy06"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">GITHUB</span>
                <strong>GitHub</strong>
              </div>

              <span className="contact-arrow">↗</span>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/thurupu-tharun-reddy-718472280/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">LINKEDIN</span>
                <strong>LinkedIn</strong>
              </div>

              <span className="contact-arrow">↗</span>
            </a>


            {/* Location */}
            <div className="contact-link contact-location">
              <div>
                <span className="contact-label">LOCATION</span>
                <strong>Bengaluru, India</strong>
              </div>
            </div>

          </div>

        </div>

        <div className="contact-footer">

          <span>THURUPU THARUN</span>

          <span>
            AI / ML · DATA SCIENCE · RESEARCH
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>

        </div>

      </div>
    </section>
  );
}

export default Contact;