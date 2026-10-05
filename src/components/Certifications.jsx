import certifications from "../data/certifications";

function Certifications() {
  const featuredCertifications = certifications.filter(
    (certification) => certification.featured
  );

  const additionalCertifications = certifications.filter(
    (certification) => !certification.featured
  );

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-header">
          <p className="section-number">03 — CERTIFICATIONS</p>

          <h2>
            Continuous <span>learning</span> beyond the classroom.
          </h2>

          <p className="certifications-intro">
            Certifications and academic courses that strengthen my
            foundations in artificial intelligence, machine learning,
            generative AI, and computer science.
          </p>
        </div>

        {/* =========================
            FEATURED CERTIFICATIONS
        ========================= */}

        <div className="certification-group">
          <div className="certification-group-header">
            <span>FEATURED</span>

            <p>
              Certifications most relevant to my current AI/ML focus.
            </p>
          </div>

          <div className="certifications-list">
            {featuredCertifications.map((certification) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
              />
            ))}
          </div>
        </div>

        {/* =========================
            ADDITIONAL CERTIFICATIONS
        ========================= */}

        {additionalCertifications.length > 0 && (
          <div className="certification-group additional-certifications">
            <div className="certification-group-header">
              <span>ADDITIONAL</span>

              <p>
                Additional coursework supporting my technical foundation.
              </p>
            </div>

            <div className="certifications-list">
              {additionalCertifications.map((certification) => (
                <CertificationCard
                  key={certification.id}
                  certification={certification}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}


/* =========================
   CERTIFICATION CARD
========================= */

function CertificationCard({ certification }) {
  return (
    <article className="certification-card">

      {/* Number */}
      <div className="certification-number">
        {certification.number}
      </div>

      {/* Main Information */}
      <div className="certification-main">

        <div className="certification-top">

          <span className="certification-issuer">
            {certification.issuer}
          </span>

          {certification.distinction && (
            <span className="certification-badge">
              {certification.distinction}
            </span>
          )}

        </div>

        <h3>{certification.title}</h3>

        <div className="certification-details">

          {certification.period && (
            <span>{certification.period}</span>
          )}

          {certification.duration && (
            <span>{certification.duration}</span>
          )}

          {certification.score && (
            <span>Score: {certification.score}</span>
          )}

        </div>

      </div>

      {/* Certificate Button */}
      <a
        href={`${import.meta.env.BASE_URL}${certification.certificate.replace(/^\/+/, "")}`}
        target="_blank"
        rel="noreferrer"
        className="certificate-button"
        
      >
        View Certificate <span>↗</span>
      </a>

    </article>
  );
}

export default Certifications;