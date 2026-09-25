import SEO from '../components/SEO';
import Intro from '../components/Intro';
import ServiceGrid from '../components/ServiceGrid';

export default function ServicesPage(){ return <>
    <SEO title="Services | NexGen Engineers" description="Explore NexGen Engineers services across custom software, APIs, cloud, DevOps, AI, GenAI and automation." /><Intro eyebrow="Services" title="From idea to production-ready software." text="Flexible engineering services for startups, growing businesses and teams that need delivery capacity."/><section className="section-space"><div className="container"><ServiceGrid/></div></section></>}