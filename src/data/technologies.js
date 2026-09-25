export const technologyGroups = [
  {
    category: 'Frontend',
    icon: 'bi-window-stack',
    description: 'Responsive product interfaces built for usability, performance and maintainability.',
    technologies: [
      { name: 'React', detail: 'Component-driven web applications' },
      { name: 'Bootstrap', detail: 'Responsive UI and design system foundations' },
      { name: 'JavaScript', detail: 'Modern browser application development' }
    ]
  },
  {
    category: 'Backend',
    icon: 'bi-diagram-3',
    description: 'Reliable APIs and business services designed for scale and clean architecture.',
    technologies: [
      { name: 'Java', detail: 'Enterprise application development' },
      { name: 'Spring Boot', detail: 'Production-ready APIs and microservices' },
      { name: 'Python', detail: 'Automation and intelligent backend services' },
      { name: 'FastAPI', detail: 'High-performance Python APIs' }
    ]
  },
  {
    category: 'Data & Messaging',
    icon: 'bi-database',
    description: 'Persistent storage, caching and event-driven communication for connected systems.',
    technologies: [
      { name: 'PostgreSQL', detail: 'Relational data and transactional workloads' },
      { name: 'MySQL', detail: 'Business applications and structured data' },
      { name: 'MongoDB', detail: 'Flexible document-oriented workloads' },
      { name: 'Redis', detail: 'Caching and fast application state' },
      { name: 'Kafka', detail: 'Event streaming and asynchronous processing' },
      { name: 'RabbitMQ', detail: 'Reliable message-based integration' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: 'bi-cloud-arrow-up',
    description: 'Containerized delivery and cloud infrastructure for repeatable, reliable releases.',
    technologies: [
      { name: 'AWS', detail: 'Cloud-native application infrastructure' },
      { name: 'Azure', detail: 'Enterprise cloud platforms and services' },
      { name: 'Docker', detail: 'Portable application containers' },
      { name: 'Kubernetes', detail: 'Container orchestration and scaling' },
      { name: 'Jenkins', detail: 'Continuous integration and delivery' },
      { name: 'GitHub / GitLab', detail: 'Source control and engineering workflows' }
    ]
  },
  {
    category: 'AI & GenAI',
    icon: 'bi-stars',
    description: 'AI capabilities that connect models, knowledge and business workflows.',
    technologies: [
      { name: 'OpenAI', detail: 'Generative AI and agent-powered experiences' },
      { name: 'Gemini', detail: 'Multimodal generative AI applications' },
      { name: 'RAG', detail: 'Grounded answers from business knowledge' },
      { name: 'AI Agents', detail: 'Goal-driven automation and tool orchestration' }
    ]
  }
];

export const technologies = technologyGroups.flatMap(group =>
  group.technologies.map(technology => technology.name)
);