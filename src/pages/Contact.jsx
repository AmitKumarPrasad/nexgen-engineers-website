import { useState } from 'react';
import SEO from '../components/SEO';
import Intro from '../components/Intro';
import { services } from '../data/services';

const initialForm = { name: '', email: '', service: '', timeline: '', details: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = event => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const subject = encodeURIComponent(`NexGen project enquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nTimeline: ${form.timeline || 'Not specified'}\n\nProject details:\n${form.details}`
    );
    window.location.href = `mailto:hello@nexgenengineers.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return <>
    <SEO title="Contact | NexGen Engineers" description="Tell NexGen Engineers what you want to build and start a conversation about your software, cloud or AI project." />
    <Intro eyebrow="Contact" title="Tell us what you want to build." text="Share a few details and we can start with the problem, users, scope and technical direction." />
    <section className="section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <h2 className="h3 fw-bold">Start the conversation</h2>
            <p className="text-secondary mt-3">Discuss new products, modernization, cloud migration and AI initiatives.</p>
            <div className="contact-detail-card mt-4">
              <div className="contact-detail"><i className="bi bi-envelope" aria-hidden="true"></i><div><small>Email</small><strong>hello@nexgenengineers.com</strong></div></div>
              <div className="contact-detail"><i className="bi bi-geo-alt" aria-hidden="true"></i><div><small>Location</small><strong>Pune, Maharashtra, India</strong></div></div>
              <div className="contact-detail"><i className="bi bi-chat-dots" aria-hidden="true"></i><div><small>Response</small><strong>Tell us your goals and timeline</strong></div></div>
            </div>
            <h3 className="h6 fw-bold mt-4">Typical projects</h3>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {services.slice(0, 6).map(service => <span className="mini-chip" key={service.title}>{service.title}</span>)}
            </div>
          </div>
          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-status">
              <div className="row g-3">
                <div className="col-md-6"><label className="form-label fw-semibold" htmlFor="contact-name">Name</label><input id="contact-name" name="name" value={form.name} onChange={updateField} className="form-control" required autoComplete="name" placeholder="Your name" /></div>
                <div className="col-md-6"><label className="form-label fw-semibold" htmlFor="contact-email">Work email</label><input id="contact-email" name="email" value={form.email} onChange={updateField} type="email" className="form-control" required autoComplete="email" placeholder="you@company.com" /></div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" htmlFor="contact-service">Service</label>
                  <select id="contact-service" name="service" value={form.service} onChange={updateField} className="form-select form-control" required>
                    <option value="" disabled>Select a service</option>
                    {services.map(service => <option key={service.title} value={service.title}>{service.title}</option>)}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" htmlFor="contact-timeline">Target timeline</label>
                  <select id="contact-timeline" name="timeline" value={form.timeline} onChange={updateField} className="form-select form-control">
                    <option value="">Select timeline</option><option>Under 1 month</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option>
                  </select>
                </div>
                <div className="col-12"><label className="form-label fw-semibold" htmlFor="contact-details">Project details</label><textarea id="contact-details" name="details" value={form.details} onChange={updateField} className="form-control" rows="6" required placeholder="Tell us about your idea, users, scope, integrations and goals"></textarea></div>
                <div className="col-12 d-flex flex-column flex-sm-row align-items-sm-center gap-3">
                  <button className="btn btn-primary btn-lg px-4" type="submit">Send Enquiry <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i></button>
                  <a className="btn btn-outline-secondary btn-lg px-4" href="mailto:hello@nexgenengineers.com">Email Us</a>
                </div>
                <div className="col-12" id="contact-status" aria-live="polite">
                  {submitted && <div className="alert alert-success mb-0" role="status"><i className="bi bi-check-circle me-2" aria-hidden="true"></i>Your email client is being opened with the enquiry details. If it does not open, use the Email Us button.</div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>;
}