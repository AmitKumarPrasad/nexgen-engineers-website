
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const services = [
  ['bi-window-stack','Custom Software','Business-ready applications designed around your workflows and customers.'],
  ['bi-phone','Mobile Applications','Mobile-first products and responsive experiences across modern devices.'],
  ['bi-cloud-arrow-up','Cloud & DevOps','Cloud-native delivery, CI/CD, containers and reliable releases.'],
  ['bi-diagram-3','Microservices & APIs','Scalable backend platforms, secure APIs and service-oriented architecture.'],
  ['bi-stars','AI & GenAI','AI agents, RAG, automation and intelligent business capabilities.'],
  ['bi-arrow-repeat','Automation & Support','Automate repetitive work and keep applications evolving after launch.']
];

const techs = ['Java','Spring Boot','React','Python','FastAPI','PostgreSQL','MySQL','MongoDB','Redis','Kafka','RabbitMQ','Docker','Kubernetes','AWS','Azure','OpenAI','Gemini'];

function Layout({ children }) {
  const links = [['/','Home'],['/about','About'],['/services','Services'],['/technologies','Technologies'],['/portfolio','Portfolio'],['/contact','Contact']];
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top nav-shell">
      <div className="container py-2">
        <NavLink className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/">
          <span className="brand-mark">N</span>NexGen Engineers
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map(([path,label]) => <li className="nav-item" key={path}>
              <NavLink end={path === '/'} className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')} to={path}>{label}</NavLink>
            </li>)}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <NavLink className="btn btn-primary px-4" to="/contact">Start a Project</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {children}
    <footer className="footer-shell">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="d-flex align-items-center gap-2 fw-bold text-white fs-5"><span className="brand-mark">N</span>NexGen Engineers</div>
            <p className="text-white-50 mt-3 mb-0">Modern software, cloud and AI solutions for businesses ready to build, scale and transform.</p>
          </div>
          <div className="col-sm-6 col-lg-2"><h6 className="text-white">Company</h6><NavLink className="footer-link" to="/about">About</NavLink><NavLink className="footer-link" to="/portfolio">Portfolio</NavLink><NavLink className="footer-link" to="/contact">Contact</NavLink></div>
          <div className="col-sm-6 col-lg-2"><h6 className="text-white">Services</h6><NavLink className="footer-link" to="/services">Software</NavLink><NavLink className="footer-link" to="/services">Cloud & DevOps</NavLink><NavLink className="footer-link" to="/services">AI & GenAI</NavLink></div>
          <div className="col-lg-3"><h6 className="text-white">Build with us</h6><p className="text-white-50 mb-2">hello@nexgenengineers.com</p><p className="text-white-50 mb-0">Pune, Maharashtra, India</p></div>
        </div>
        <hr className="border-secondary opacity-25 my-4"/>
        <small className="text-white-50">© {new Date().getFullYear()} NexGen Engineers. All rights reserved.</small>
      </div>
    </footer>
  </>;
}

function Intro({eyebrow,title,text}) {
  return <section className="page-intro py-5"><div className="container py-4">
    <span className="eyebrow">{eyebrow}</span><h1 className="display-5 fw-bold text-white mt-3 mb-3">{title}</h1>
    <p className="lead text-white-50 col-lg-8 mb-0">{text}</p>
  </div></section>;
}

function Home() {
  return <>
    <section className="hero-section py-5">
      <div className="container py-5"><div className="row align-items-center g-5">
        <div className="col-lg-7">
          <span className="eyebrow">Software • Cloud • AI • Automation</span>
          <h1 className="display-3 fw-bold text-white mt-3">Build. Scale. <span className="gradient-text">Transform.</span></h1>
          <p className="lead text-white-50 mt-4 col-xl-10">We design and develop modern applications, enterprise software and AI-powered solutions that turn business ideas into reliable digital products.</p>
          <div className="d-flex flex-column flex-sm-row gap-3 mt-4"><NavLink className="btn btn-primary btn-lg px-4" to="/contact">Start a Project <i className="bi bi-arrow-up-right ms-2"></i></NavLink><NavLink className="btn btn-outline-light btn-lg px-4" to="/portfolio">Explore Our Work</NavLink></div>
        </div>
        <div className="col-lg-5"><div className="hero-card"><span className="text-white-50 small">NexGen Delivery</span>{['design solution','build platform','integrate ai','deploy to cloud'].map(x=><div className="terminal-line" key={x}><span>$</span>{x}</div>)}<div className="terminal-result mt-4">✓ Product ready for growth</div></div></div>
      </div></div>
    </section>
    <section className="section-space"><div className="container"><span className="eyebrow">What we do</span><h2 className="display-6 fw-bold mt-2 mb-5">Technology that solves real business problems.</h2><div className="row g-4">{services.map(([icon,title,text])=><div className="col-md-6 col-xl-4" key={title}><div className="service-card h-100"><div className="icon-box"><i className={'bi ' + icon}></i></div><h4 className="mt-4">{title}</h4><p className="text-secondary mb-0">{text}</p></div></div>)}</div></div></section>
    <section className="section-space bg-light-subtle"><div className="container"><div className="row g-5 align-items-center"><div className="col-lg-6"><span className="eyebrow">Why NexGen</span><h2 className="display-6 fw-bold mt-2">A delivery mindset, not just a coding mindset.</h2><p className="text-secondary mt-3">We combine product thinking, engineering discipline and practical cloud/AI capabilities to deliver solutions that are easier to operate and evolve.</p>{['Clear scope and milestones','Modular, maintainable code','Security-first API design','Deployment and handover support'].map(x=><div className="feature-row" key={x}><i className="bi bi-check-circle-fill me-3"></i>{x}</div>)}</div><div className="col-lg-6"><div className="process-panel">{['Discover','Design','Develop','Deploy','Improve'].map((x,i)=><div className="process-step" key={x}><span>0{i+1}</span><strong>{x}</strong><small>{['Understand goals and requirements','Shape UX and architecture','Build with quality gates','Release with confidence','Measure and enhance'][i]}</small></div>)}</div></div></div></div></section>
    <section className="section-space dark-section"><div className="container"><span className="eyebrow">Technology stack</span><h2 className="display-6 fw-bold text-white mt-2">Modern technologies, selected for the job.</h2><div className="d-flex flex-wrap gap-2 mt-4">{techs.map(t=><span className="tech-chip" key={t}>{t}</span>)}</div></div></section>
    <section className="section-space"><div className="container"><div className="cta-panel text-center p-5"><span className="eyebrow">Have an idea?</span><h2 className="display-6 fw-bold mt-2">Let’s turn it into a product.</h2><p className="text-secondary">Tell us what you want to build, your target users and your timeline.</p><NavLink className="btn btn-primary btn-lg px-4 mt-3" to="/contact">Talk to NexGen</NavLink></div></div></section>
  </>;
}

function Services(){ return <><Intro eyebrow="Services" title="From idea to production-ready software." text="Flexible engineering services for startups, growing businesses and teams that need delivery capacity."/><section className="section-space"><div className="container"><div className="row g-4">{services.map(([icon,title,text])=><div className="col-md-6 col-lg-4" key={title}><div className="service-card h-100"><div className="icon-box"><i className={'bi '+icon}></i></div><h4 className="mt-4">{title}</h4><p className="text-secondary">{text}</p><NavLink className="text-decoration-none fw-semibold" to="/contact">Discuss this service →</NavLink></div></div>)}</div></div></section></>; }
function About(){ return <><Intro eyebrow="About us" title="A focused engineering partner for modern digital products." text="NexGen Engineers is built around practical software engineering, cloud adoption and AI-enabled product development."/><section className="section-space"><div className="container"><div className="row g-5"><div className="col-lg-7"><h2 className="fw-bold">We build with the long term in mind.</h2><p className="text-secondary mt-3">Understand the business objective, choose an appropriate architecture, ship in small increments and leave the customer with a solution that can grow.</p></div><div className="col-lg-5"><div className="stats-card"><div><strong>Web</strong><span>Modern responsive apps</span></div><div><strong>Cloud</strong><span>Deployable, scalable platforms</span></div><div><strong>AI</strong><span>Agents, RAG & automation</span></div></div></div></div></div></section></>; }
function Technologies(){ return <><Intro eyebrow="Technologies" title="A modern stack for modern delivery." text="We choose technologies based on requirements, operability and time-to-value."/><section className="section-space"><div className="container"><div className="d-flex flex-wrap gap-2">{techs.map(t=><span className="mini-chip" key={t}>{t}</span>)}</div></div></section></>; }
function Portfolio(){ const projects=[['Education Management Platform','Student, teacher, attendance, fees and communication workflows.'],['Business Automation Portal','Workflow automation, API integrations and operational dashboards.'],['AI Assistant Platform','Conversational AI, retrieval and intelligent business workflows.']]; return <><Intro eyebrow="Portfolio" title="Selected solution patterns." text="A preview of the kinds of platforms and products NexGen can deliver."/><section className="section-space"><div className="container"><div className="row g-4">{projects.map(([title,text])=><div className="col-lg-4" key={title}><div className="project-card h-100"><div className="project-visual"><i className="bi bi-grid-3x3-gap"></i></div><div className="p-4"><span className="eyebrow">Case study</span><h4 className="mt-2">{title}</h4><p className="text-secondary">{text}</p></div></div></div>)}</div></div></section></>; }
function Contact(){ return <><Intro eyebrow="Contact" title="Tell us what you want to build." text="Share a few details and we can start with the problem, users, scope and technical direction."/><section className="section-space"><div className="container"><div className="row g-5"><div className="col-lg-5"><h3 className="fw-bold">Start the conversation</h3><p className="text-secondary mt-3">Discuss new products, modernization, cloud migration and AI initiatives.</p><p className="text-secondary">hello@nexgenengineers.com</p><p className="text-secondary">Pune, Maharashtra, India</p></div><div className="col-lg-7"><form className="contact-form" onSubmit={e=>e.preventDefault()}><div className="row g-3"><div className="col-md-6"><label className="form-label">Name</label><input className="form-control" required placeholder="Your name"/></div><div className="col-md-6"><label className="form-label">Email</label><input type="email" className="form-control" required placeholder="you@company.com"/></div><div className="col-12"><label className="form-label">Project details</label><textarea className="form-control" rows="5" placeholder="Tell us about your idea, scope and timeline"></textarea></div><div className="col-12"><button className="btn btn-primary btn-lg px-4" type="submit">Send Enquiry</button></div></div></form></div></div></div></section></>; }

export default function App(){ return <BrowserRouter><Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/technologies" element={<Technologies/>}/><Route path="/portfolio" element={<Portfolio/>}/><Route path="/contact" element={<Contact/>}/></Routes></Layout></BrowserRouter>; }
