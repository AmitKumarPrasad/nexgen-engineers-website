import { NavLink } from 'react-router-dom';

const links = [['/','Home'],['/about','About'],['/services','Services'],['/technologies','Technologies'],['/portfolio','Portfolio'],['/contact','Contact']];

export default function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark sticky-top nav-shell">
    <div className="container py-2">
      <NavLink className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/"><span className="brand-mark">N</span>NexGen Engineers</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          {links.map(([path,label]) => <li className="nav-item" key={path}><NavLink end={path === '/'} className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')} to={path}>{label}</NavLink></li>)}
          <li className="nav-item ms-lg-2 mt-2 mt-lg-0"><NavLink className="btn btn-primary px-4" to="/contact">Start a Project</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>;
}