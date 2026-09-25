import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [['/','Home'],['/about','About'],['/services','Services'],['/technologies','Technologies'],['/portfolio','Portfolio'],['/contact','Contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return <nav className="navbar navbar-expand-lg navbar-dark sticky-top nav-shell" aria-label="Primary navigation">
    <div className="container py-2">
      <NavLink aria-label="NexGen Engineers home" className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">N</span>NexGen Engineers</NavLink>
      <button className="navbar-toggler" type="button" aria-controls="mainNav" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(value => !value)}><span className="navbar-toggler-icon"></span></button>
      <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="mainNav">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          {links.map(([path,label]) => <li className="nav-item" key={path}><NavLink end={path === '/'} className={({isActive}) => 'nav-link ' + (isActive ? 'active' : '')} to={path} aria-current={({isActive}) => isActive ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</NavLink></li>)}
          <li className="nav-item ms-lg-2 mt-2 mt-lg-0"><NavLink className="btn btn-primary px-4" to="/contact" onClick={() => setOpen(false)}>Start a Project</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>;
}
