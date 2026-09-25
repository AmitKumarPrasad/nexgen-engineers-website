import SEO from '../components/SEO';
import Intro from '../components/Intro';
import { services } from '../data/services';

export default function Contact() {
  return <>
    <SEO title="Contact | NexGen Engineers" description="Tell NexGen Engineers what you want to build and start a conversation about your software, cloud or AI project." />
    <Intro eyebrow="Contact" title="Tell us what you want to build." text="Share a few details and we can start with the problem, users, scope and technical direction." />
    <section className="section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <h3 className="fw-bold">Start the conversation</h3>
            <p className="text-secondary mt-3">Discuss new products, modernization, cloud migration and AI initiatives.</p>
            <div className="contact-detail-card mt-4">
              <div className="contact-detail"><i className="bi bi-envelope"></i><div><small>Email</small><strong>hello@nexgenengineers.com</strong></div></div>
              <div className="contact-detail"><i className="bi bi-geo-alt"></i><div><small>Location</small><strong>Pune, Maharashtra, India</strong></div></div>
              <div className="contact-detail"><i className="bi bi-chat-dots"></i><div><small>Response</small><strong>Tell us your goals and timeline</strong></div></div>
            </div>
            <h6 className="fw-bold mt-4">Typical projects</h6>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {services.slice(0, 6).map(service => <span className="mini-chip" key={service.title}>{service.title}</span>)}
            </div>
          </div>
          <div className="col-lg-7">
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="row g-3">
                <div className="col-md-6"><label className="form-label fw-semibold">Name</label><input className="form-control" required placeholder="Your name" /></div>
                <div className="col-md-6"><label className="form-label fw-semibold">Work email</label><input type="email" className="form-control" required placeholder="you@company.com" /></div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Service</label>
                  <select className="form-select form-control" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    {services.map(service => <option key={service.title} value={service.title}>{service.title}</option>)}
                  </select>
                </div>
                <div className="col-md-6"><label className="form-label fw-semibold">Target timeline</label><select className="form-select form-control" defaultValue=""><option value="">Select timeline</option><option>Under 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option></select></div>
                <div className="col-12"><label className="form-label fw-semibold">Project details</label><textarea className="form-control" rows="6" placeholder="Tell us about your idea, users, scope, integrations and goals"></textarea></div>
                <div className="col-12 d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                  <button className="btn btn-primary btn-lg px-4" type="submit">Send Enquiry <i className="bi bi-arrow-up-right ms-2"></i></button>
                  <a className="btn btn-outline-secondary btn-lg px-4" href="mailto:hello@nexgenengineers.com">Email Us</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>;
}
