import SEO from '../components/SEO';

export default function Privacy() {
  return <>
    <SEO title="Privacy Policy | NexGen Engineers" description="Privacy Policy for NexGen Engineers and information submitted through the website." />
    <section className="page-intro py-5"><div className="container py-4"><span className="eyebrow">Legal</span><h1 className="display-5 fw-bold text-white mt-2">Privacy Policy</h1><p className="lead text-white-50 mt-3 mb-0">How NexGen Engineers handles information submitted through this website.</p></div></section>
    <section className="section-space"><div className="container"><div className="legal-content">
      <p><strong>Effective date:</strong> September 25, 2026</p>
      <h2>Information we receive</h2><p>When you contact NexGen Engineers through this website, you may provide information such as your name, email address, selected service, project timeline and project details.</p>
      <h2>How we use information</h2><p>We use submitted information to respond to enquiries, understand project requirements and communicate about requested services. We do not sell submitted contact information.</p>
      <h2>Analytics</h2><p>If analytics is enabled for this website, we may collect aggregated usage information such as pages viewed, approximate navigation activity and browser or device information. Analytics is controlled through a production environment setting and is not initialized during local development.</p>
      <h2>Information sharing</h2><p>We may share information only when reasonably necessary to provide requested services, comply with applicable law, or protect our rights and systems.</p>
      <h2>Data retention</h2><p>We retain enquiry information only for as long as reasonably necessary for the purpose for which it was submitted and for legitimate business or legal requirements.</p>
      <h2>Contact</h2><p>For privacy questions, contact <a href="mailto:hello@nexgenengineers.com">hello@nexgenengineers.com</a>.</p>
    </div></div></section>
  </>;
}
