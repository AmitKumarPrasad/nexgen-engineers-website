import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return <><SEO title="Page Not Found | NexGen Engineers" description="The requested NexGen Engineers page could not be found." />
    <section className="page-intro py-5"><div className="container py-5 text-center"><span className="eyebrow">404</span><h1 className="display-1 fw-bold text-white mt-2">Page not found.</h1><p className="lead text-white-50 mt-3">The page you requested does not exist or may have moved.</p><NavLink className="btn btn-primary btn-lg mt-3" to="/">Back to Home <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i></NavLink></div></section>
  </>;
}