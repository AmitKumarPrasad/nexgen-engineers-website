import SEO from '../components/SEO';
import { NavLink } from 'react-router-dom';
import { services } from '../data/services';
import { technologies } from '../data/technologies';

const deliverySteps = [
  ['01', 'Discover', 'Align goals, users and business outcomes.'],
  ['02', 'Architect', 'Shape a scalable technical direction.'],
  ['03', 'Build', 'Ship modular software with quality gates.'],
  ['04', 'Launch', 'Deploy, monitor and continuously improve.'],
];

export default function Home() {
  return <>
    <SEO title="NexGen Engineers | Software, Cloud & AI Solutions" description="NexGen Engineers builds modern software, cloud, AI and automation solutions for growing businesses." />

    <section className="hero-section hero-premium">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-two" aria-hidden="true"></div>
      <div className="container position-relative py-5">
        <div className="row align-items-center g-5 py-lg-5">
          <div className="col-lg-7">
            <div className="hero-badge"><span className="pulse-dot"></span> Engineering software for the AI era</div>
            <span className="eyebrow d-block mt-4">Software • Cloud • AI • Automation</span>
            <h1 className="display-2 hero-title fw-bold text-white mt-3">Build what’s next.<br /><span className="gradient-text">Scale without limits.</span></h1>
            <p className="hero-copy lead text-white-50 mt-4">We engineer modern products, cloud platforms and AI-powered systems that turn ambitious ideas into dependable digital businesses.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              <NavLink className="btn btn-primary btn-lg px-4 hero-primary" to="/contact">Start a Project <i className="bi bi-arrow-up-right ms-2"></i></NavLink>
              <NavLink className="btn btn-outline-light btn-lg px-4" to="/portfolio">Explore Our Work</NavLink>
            </div>
            <div className="hero-proof mt-5">
              <span><i className="bi bi-check2-circle"></i> Product-minded engineering</span>
              <span><i className="bi bi-check2-circle"></i> Cloud-ready architecture</span>
              <span><i className="bi bi-check2-circle"></i> AI-native capabilities</span>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="visual-top"><span>NX / ENGINEERING CORE</span><span className="status-live"><i></i> LIVE</span></div>
              <div className="visual-core">
                <div className="core-ring ring-one"></div><div className="core-ring ring-two"></div>
                <div className="core-center"><span>NX</span><small>ENGINE</small></div>
                <div className="core-node node-ai"><i className="bi bi-stars"></i><span>AI</span></div>
                <div className="core-node node-cloud"><i className="bi bi-cloud"></i><span>Cloud</span></div>
                <div className="core-node node-api"><i className="bi bi-diagram-3"></i><span>APIs</span></div>
                <div className="core-node node-data"><i className="bi bi-database"></i><span>Data</span></div>
              </div>
              <div className="visual-footer"><span>BUILD</span><strong>→</strong><span>SCALE</span><strong>→</strong><span>TRANSFORM</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="proof-strip">
      <div className="container">
        <div className="row g-0">
          <div className="col-6 col-lg-3 proof-metric"><strong>AI + Cloud</strong><span>Modern digital foundations</span></div>
          <div className="col-6 col-lg-3 proof-metric"><strong>API First</strong><span>Composable integrations</span></div>
          <div className="col-6 col-lg-3 proof-metric"><strong>Automation</strong><span>Less manual operations</span></div>
          <div className="col-6 col-lg-3 proof-metric"><strong>Built to Scale</strong><span>Architecture that evolves</span></div>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <div className="section-heading-row"><div><span className="eyebrow">Capabilities</span><h2 className="display-6 fw-bold mt-2 mb-0">From idea to intelligent product.</h2></div><p className="section-intro text-secondary">One engineering partner across product development, cloud modernization, AI and automation.</p></div>
        <div className="row g-4 mt-2">{services.map((s, i) => <div className="col-md-6 col-xl-4" key={s.title}><div className="service-card service-premium h-100"><div className="service-number">0{i + 1}</div><div className="icon-box"><i className={'bi ' + s.icon}></i></div><h4 className="mt-4">{s.title}</h4><p className="text-secondary mb-0">{s.text}</p><span className="card-arrow"><i className="bi bi-arrow-up-right"></i></span></div></div>)}</div>
      </div>
    </section>

    <section className="section-space architecture-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5"><span className="eyebrow">AI engineering</span><h2 className="display-6 fw-bold mt-2">Connect intelligence to your real business systems.</h2><p className="text-secondary mt-3">We combine AI models, APIs, data, automation and cloud infrastructure into practical workflows that can move from prototype to production.</p><NavLink className="text-link mt-2" to="/technologies">Explore our technology stack <i className="bi bi-arrow-right"></i></NavLink></div>
          <div className="col-lg-7"><div className="architecture-card"><div className="arch-label">NEXGEN AI FLOW</div><div className="arch-flow"><div className="arch-box"><i className="bi bi-chat-square-text"></i><span>Users</span></div><i className="bi bi-arrow-right arch-arrow"></i><div className="arch-box accent"><i className="bi bi-stars"></i><span>AI / RAG</span></div><i className="bi bi-arrow-right arch-arrow"></i><div className="arch-box"><i className="bi bi-diagram-3"></i><span>Tools & APIs</span></div><i className="bi bi-arrow-right arch-arrow"></i><div className="arch-box"><i className="bi bi-database"></i><span>Business Data</span></div></div><div className="arch-tags"><span>OpenAI</span><span>Gemini</span><span>Vector DB</span><span>MCP</span><span>FastAPI</span></div></div></div>
        </div>
      </div>
    </section>

    <section className="section-space dark-section process-premium">
      <div className="container"><div className="row g-5"><div className="col-lg-4"><span className="eyebrow">How we work</span><h2 className="display-6 fw-bold text-white mt-2">Engineering with momentum.</h2><p className="text-white-50 mt-3">A clear delivery system keeps decisions visible, builds measurable progress and reduces surprises.</p></div><div className="col-lg-8"><div className="row g-0 process-grid">{deliverySteps.map(([number, title, text]) => <div className="col-md-6 process-card" key={number}><span>{number}</span><h4>{title}</h4><p>{text}</p></div>)}</div></div></div></div>
    </section>

    <section className="section-space">
      <div className="container"><div className="section-heading-row"><div><span className="eyebrow">Technology</span><h2 className="display-6 fw-bold mt-2 mb-0">A stack built for modern delivery.</h2></div><p className="section-intro text-secondary">Use the right tool for the problem — from backend systems and data to cloud and GenAI.</p></div><div className="tech-wall mt-4">{technologies.map(t => <span className="tech-chip tech-chip-light" key={t}>{t}</span>)}</div></div>
    </section>

    <section className="section-space cta-premium-section"><div className="container"><div className="cta-panel cta-premium text-center p-5"><span className="eyebrow">Ready when you are</span><h2 className="display-5 fw-bold mt-2">Have a bold idea? Let’s engineer it.</h2><p className="text-secondary col-lg-7 mx-auto">Tell us what you want to build, who it is for and where you want to go next.</p><NavLink className="btn btn-primary btn-lg px-4 mt-3" to="/contact">Start a Conversation <i className="bi bi-arrow-up-right ms-2"></i></NavLink></div></div></section>
  </>;
}
