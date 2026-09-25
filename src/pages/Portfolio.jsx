import SEO from '../components/SEO';
import Intro from '../components/Intro';

const projects = [
  { title: 'Education Management Platform', icon: 'bi-mortarboard', problem: 'Connected student, teacher, attendance, fees and communication workflows in one platform.', solution: 'A modular management platform with role-based access, APIs and operational workflows.', stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'] },
  { title: 'Business Automation Portal', icon: 'bi-diagram-3', problem: 'Reduced manual operational work across business processes and system integrations.', solution: 'Workflow-driven automation with secure APIs, dashboards and integration-ready services.', stack: ['Python', 'FastAPI', 'React', 'Redis'] },
  { title: 'AI Assistant Platform', icon: 'bi-stars', problem: 'Made business knowledge and repetitive workflows accessible through natural-language interaction.', solution: 'Conversational AI with retrieval, structured tools and intelligent business workflows.', stack: ['Python', 'OpenAI', 'Gemini', 'Vector DB'] }
];

export default function Portfolio() {
  return <>
    <SEO title="Portfolio | NexGen Engineers" description="Explore software and AI solution concepts from NexGen Engineers across modern digital products and platforms." />
    <Intro eyebrow="Portfolio" title="Solutions built around real business needs." text="Explore representative solution patterns across education, automation and AI. Each engagement is shaped around the client's users, workflows and technical constraints." />
    <section className="section-space">
      <div className="container">
        <div className="row g-4">
          {projects.map(project => <div className="col-lg-4" key={project.title}>
            <article className="project-card h-100">
              <div className="project-visual"><i className={'bi ' + project.icon}></i></div>
              <div className="p-4">
                <span className="eyebrow">Solution case study</span>
                <h4 className="mt-2">{project.title}</h4>
                <div className="case-block mt-4"><small>Challenge</small><p>{project.problem}</p></div>
                <div className="case-block"><small>Approach</small><p>{project.solution}</p></div>
                <div className="d-flex flex-wrap gap-2 mt-3">{project.stack.map(tech => <span className="mini-chip" key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          </div>)}
        </div>
      </div>
    </section>
    <section className="section-space bg-light-subtle">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-8"><span className="eyebrow">Need something similar?</span><h2 className="display-6 fw-bold mt-2">We can shape the architecture around your business.</h2><p className="text-secondary mb-0">From an MVP to an enterprise platform, we can help define the right scope, delivery plan and technology choices.</p></div>
          <div className="col-lg-4 text-lg-end"><a className="btn btn-primary btn-lg px-4" href="/contact">Start a Project <i className="bi bi-arrow-up-right ms-2"></i></a></div>
        </div>
      </div>
    </section>
  </>;
}
