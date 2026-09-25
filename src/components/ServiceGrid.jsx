import { NavLink } from 'react-router-dom';
import { services } from '../data/services';

export default function ServiceGrid() {
  return <div className="row g-4">{services.map(service => <div className="col-md-6 col-xl-4" key={service.title}><div className="service-card h-100"><div className="icon-box"><i className={'bi ' + service.icon}></i></div><h4 className="mt-4">{service.title}</h4><p className="text-secondary">{service.text}</p><NavLink className="text-decoration-none fw-semibold" to="/contact">Discuss this service →</NavLink></div></div>)}</div>;
}