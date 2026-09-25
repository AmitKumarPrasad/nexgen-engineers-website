import { NavLink } from 'react-router-dom';

export default function Footer() {
  return <footer className="footer-shell">
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-5"><div className="d-flex align-items-center gap-2 fw-bold text-white fs-5"><span className="brand-mark" aria-hidden="true">N</span>NexGen Engineers</div><p className="text-white-50 mt-3 mb-0">Modern software, cloud and AI solutions for businesses ready to build, scale and transform.</p></div>
        <div className="col-sm-6 col-lg-2"><h2 className="h6 text-white">Company</h2><NavLink className="footer-link" to="/about">About</NavLink><NavLink className="footer-link" to="/portfolio">Portfolio</NavLink><NavLink className="footer-link" to="/contact">Contact</NavLink></div>
        <div className="col-sm-6 col-lg-2"><h2 className="h6 text-white">Services</h2><NavLink className="footer-link" to="/services">Software</NavLink><NavLink className="footer-link" to="/services">Cloud & DevOps</NavLink><NavLink className="footer-link" to="/services">AI & GenAI</NavLink></div>
        <div className="col-lg-3"><h2 className="h6 text-white">Build with us</h2><a className="footer-link" href="mailto:hello@nexgenengineers.com">hello@nexgenengineers.com</a><p className="text-white-50 mb-0">Pune, Maharashtra, India</p></div>
      </div>
      <hr className="border-secondary opacity-25 my-4"/><div className="d-flex flex-wrap gap-3 align-items-center"><small className="text-white-50">© {new Date().getFullYear()} NexGen Engineers. All rights reserved.</small><NavLink className="footer-link mb-0" to="/privacy">Privacy</NavLink><NavLink className="footer-link mb-0" to="/terms">Terms</NavLink></div>
    </div>
  </footer>;
}