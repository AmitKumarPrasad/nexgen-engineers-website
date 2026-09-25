import SEO from '../components/SEO';
import Intro from '../components/Intro';
import { technologyGroups } from '../data/technologies';

export default function Technologies() {
  return (
    <>
      <SEO
        title="Technologies | NexGen Engineers"
        description="Explore the modern frontend, backend, cloud, data, DevOps and AI technologies used by NexGen Engineers."
      />

      <Intro
        eyebrow="Technology"
        title="A modern stack for modern delivery."
        text="We choose technologies based on requirements, operability and time-to-value—from product interfaces to cloud platforms and AI-powered automation."
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-4">
            {technologyGroups.map((group) => (
              <div className="col-lg-6" key={group.category}>
                <article className="technology-group h-100">
                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div className="icon-box">
                      <i className={`bi ${group.icon}`} />
                    </div>
                    <div>
                      <span className="eyebrow">{group.category}</span>
                      <h2 className="h4 mt-1 mb-2">{group.category} technologies</h2>
                      <p className="text-secondary mb-0">{group.description}</p>
                    </div>
                  </div>

                  <div className="row g-3">
                    {group.technologies.map((technology) => (
                      <div className="col-sm-6" key={technology.name}>
                        <div className="technology-item h-100">
                          <strong>{technology.name}</strong>
                          <span>{technology.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space dark-section text-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="eyebrow">Architecture first</span>
              <h2 className="display-6 fw-bold mt-2">The right technology is the one that serves the business.</h2>
              <p className="text-white-50 mb-0">
                We combine proven engineering practices with modern cloud and AI capabilities to build solutions that are secure, maintainable and ready to evolve.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="btn btn-light btn-lg" href="/contact">Start a Project <i className="bi bi-arrow-right ms-2" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}