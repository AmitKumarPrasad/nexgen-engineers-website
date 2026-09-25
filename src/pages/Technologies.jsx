import Intro from '../components/Intro';
import { technologies } from '../data/technologies';

export default function Technologies(){ return <><Intro eyebrow="Technologies" title="A modern stack for modern delivery." text="We choose technologies based on requirements, operability and time-to-value."/><section className="section-space"><div className="container"><div className="d-flex flex-wrap gap-2">{technologies.map(t=><span className="mini-chip" key={t}>{t}</span>)}</div></div></section></>}