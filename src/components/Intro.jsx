export default function Intro({ eyebrow, title, text }) {
  return <section className="page-intro py-5"><div className="container py-4"><span className="eyebrow">{eyebrow}</span><h1 className="display-5 fw-bold text-white mt-3 mb-3">{title}</h1><p className="lead text-white-50 col-lg-8 mb-0">{text}</p></div></section>;
}