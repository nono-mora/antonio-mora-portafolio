import type { 
  PersonalInfo, 
  Experience, 
  Education, 
  SkillCategory, 
  SoftSkill, 
  Project, 
  SocialLink,
  NavigationItem 
} from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Antonio Mora',
  title: 'Software Engineer',
  location: 'Costa Rica',
  email: 'antonio.mora@email.com',
  phone: '+506 8976 1010',
  linkedin: 'https://linkedin.com/in/antoniomora',
  github: 'https://github.com/antoniomora',
  whatsapp: 'https://wa.me/50689761010'
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'greenlight-intern',
    title: 'LVPA Intern',
    company: 'Greenlight Consulting',
    period: '2024',
    location: 'Costa Rica',
    type: 'internship',
    description: 'Development of automation solutions using UiPath. Participation in digital transformation projects to optimize business processes.',
    achievements: [
      'Winner of UiPath programming hackathon',
      'Development of automation bots for business processes',
      'Collaboration on RPA (Robotic Process Automation) projects',
      'Learning agile methodologies in professional environment'
    ],
    technologies: ['UiPath', 'RPA', 'Process Automation', 'Business Analysis']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    institution: 'Universidad Fidélitas',
    period: '2022 - Present',
    status: 'ongoing',
    description: 'Comprehensive training in software development, algorithms, data structures, databases and development methodologies.',
    highlights: [
      'Object-oriented programming',
      'Full stack web development',
      'Relational and non-relational databases',
      'Agile methodologies',
      'Software architecture'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-purple-600',
    skills: [
      { name: 'HTML5', icon: '🌐', description: 'Semantic and accessible structure' },
      { name: 'CSS3', icon: '🎨', description: 'Flexbox, Grid, Animations' },
      { name: 'JavaScript', icon: '⚡', description: 'ES6+, Async/Await, DOM' },
      { name: 'React', icon: '⚛️', description: 'Hooks, Context, State Management' },
      { name: 'Next.js', icon: '🚀', description: 'SSR, SSG, App Router' },
      { name: 'TypeScript', icon: '📘', description: 'Static typing and interfaces' },
      { name: 'Tailwind CSS', icon: '💨', description: 'Utility-first CSS framework' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    color: 'from-green-500 to-teal-600',
    skills: [
      { name: 'Java', icon: '☕', description: 'Spring Boot, OOP, Clean Code' },
      { name: 'C#', icon: '🔷', description: '.NET Core, Entity Framework' },
      { name: 'C++', icon: '⚡', description: 'Algorithms, Data structures' },
      { name: 'Node.js', icon: '🟢', description: 'Express, REST APIs, Middleware' },
      { name: 'Python', icon: '🐍', description: 'Scripts, Automation' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: '🗄️',
    color: 'from-orange-500 to-red-600',
    skills: [
      { name: 'SQL Server', icon: '🔵', description: 'Complex queries, Procedures' },
      { name: 'MongoDB', icon: '🍃', description: 'NoSQL, Aggregations, Atlas' },
      { name: 'MySQL', icon: '🐬', description: 'Relations, Optimization' },
      { name: 'PostgreSQL', icon: '🐘', description: 'Advanced SQL, JSON support' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-purple-500 to-pink-600',
    skills: [
      { name: 'Git', icon: '📚', description: 'Version control, Branching' },
      { name: 'Docker', icon: '🐳', description: 'Containerization, Compose' },
      { name: 'Linux', icon: '🐧', description: 'Terminal, Scripts, Deployment' },
      { name: 'UiPath', icon: '🤖', description: 'RPA, Process Automation' }
    ]
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    id: 'problem-solving',
    name: 'Resolución de Problemas',
    nameEn: 'Problem Solving',
    description: 'Capacidad analítica para identificar y resolver problemas complejos',
    descriptionEn: 'Analytical ability to identify and solve complex problems',
    icon: '🧩',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'teamwork',
    name: 'Trabajo en Equipo',
    nameEn: 'Teamwork',
    description: 'Colaboración efectiva en entornos multidisciplinarios',
    descriptionEn: 'Effective collaboration in multidisciplinary environments',
    icon: '👥',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'continuous-learning',
    name: 'Aprendizaje Continuo',
    nameEn: 'Continuous Learning',
    description: 'Autodidacta con pasión por nuevas tecnologías',
    descriptionEn: 'Self-taught with passion for new technologies',
    icon: '📚',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'communication',
    name: 'Comunicación',
    nameEn: 'Communication',
    description: 'Habilidad para explicar conceptos técnicos de manera clara',
    descriptionEn: 'Ability to explain technical concepts clearly',
    icon: '💬',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'critical-thinking',
    name: 'Pensamiento Crítico',
    nameEn: 'Critical Thinking',
    description: 'Análisis objetivo y toma de decisiones fundamentadas',
    descriptionEn: 'Objective analysis and informed decision making',
    icon: '🎯',
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'adaptability',
    name: 'Adaptabilidad',
    nameEn: 'Adaptability',
    description: 'Flexibilidad para trabajar con diferentes tecnologías',
    descriptionEn: 'Flexibility to work with different technologies',
    icon: '🔄',
    color: 'from-teal-400 to-teal-600'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'taskflow-system',
    title: 'TaskFlow - Sistema de Gestión de Proyectos',
    category: 'fullstack',
    description: 'Plataforma completa para gestión de proyectos con colaboración en tiempo real, asignación de tareas y seguimiento de progreso.',
    longDescription: 'Desarrollo de una plataforma integral de gestión de proyectos utilizando React para el frontend y Node.js con Express para el backend. Incluye autenticación JWT, websockets para colaboración en tiempo real, sistema de notificaciones y dashboard analítico con métricas de productividad.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/antoniomora/taskflow-system',
    demo: 'https://taskflow-demo.vercel.app',
    status: 'completed',
    duration: '4 meses',
    highlights: [
      'Arquitectura de microservicios escalable',
      'Colaboración en tiempo real con Socket.io',
      'Dashboard con analytics avanzados',
      'Sistema de notificaciones push'
    ],
    featured: true
  },
  {
    id: 'autobot-rpa',
    title: 'AutoBot RPA - Automatización Inteligente',
    category: 'automation',
    description: 'Bot de automatización robótica desarrollado con UiPath para procesos empresariales, incluyendo procesamiento de documentos y reportes.',
    longDescription: 'Desarrollo de un sistema completo de automatización robótica utilizando UiPath para automatizar procesos de facturación y contabilidad. El bot procesa facturas PDF, extrae datos mediante OCR, valida información y genera reportes automáticos.',
    technologies: ['UiPath', 'OCR', 'PDF Processing', 'Excel Automation', 'Email Integration'],
    github: 'https://github.com/antoniomora/autobot-rpa',
    status: 'hackathon',
    duration: '2 días',
    highlights: [
      'Primer lugar en hackathón UiPath Nacional',
      'Reducción del 90% en tiempo de procesamiento',
      'Integración con sistemas ERP existentes',
      'Precisión del 99.5% en extracción de datos'
    ],
    featured: true
  },
  {
    id: 'devapi-framework',
    title: 'DevAPI - REST API Framework',
    category: 'backend',
    description: 'Framework personalizado para construcción rápida de APIs REST con autenticación, validación y documentación automática.',
    longDescription: 'Framework desarrollado en Java Spring Boot que permite la creación rápida de APIs REST con características avanzadas como autenticación JWT, validación automática, rate limiting, logging estructurado y documentación interactiva con Swagger.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Swagger'],
    github: 'https://github.com/antoniomora/devapi-framework',
    demo: 'https://devapi-docs.herokuapp.com',
    status: 'ongoing',
    duration: '3 meses',
    highlights: [
      'Arquitectura hexagonal implementada',
      'Rate limiting con Redis',
      'Documentación automática OpenAPI',
      'Testing automatizado con JUnit'
    ]
  },
  {
    id: 'dataviz-dashboard',
    title: 'DataViz Dashboard - Analytics Frontend',
    category: 'frontend',
    description: 'Dashboard interactivo con visualizaciones de datos en tiempo real, gráficos dinámicos y exportación de reportes.',
    longDescription: 'Dashboard web desarrollado en React con Next.js que muestra analytics empresariales en tiempo real. Incluye gráficos interactivos con D3.js, filtros avanzados, comparativas históricas y sistema de alertas basado en métricas.',
    technologies: ['React', 'Next.js', 'D3.js', 'TypeScript', 'WebSocket', 'Chart.js'],
    github: 'https://github.com/antoniomora/dataviz-dashboard',
    demo: 'https://dataviz-demo.vercel.app',
    status: 'completed',
    duration: '2 meses',
    highlights: [
      'Visualizaciones interactivas con D3.js',
      'Actualizaciones en tiempo real',
      'Exportación a múltiples formatos',
      'Responsive design optimizado'
    ]
  },
  {
    id: 'inventracker-system',
    title: 'InvenTrack - Sistema de Inventario',
    category: 'backend',
    description: 'Sistema completo de gestión de inventario con control de stock, alertas automáticas y reportes de ventas.',
    longDescription: 'Aplicación empresarial desarrollada en C# con .NET Core para gestión integral de inventario. Incluye control de stock en tiempo real, gestión de proveedores, predicción de demanda con ML.NET y reportes automatizados.',
    technologies: ['C#', '.NET Core', 'SQL Server', 'Entity Framework', 'ML.NET'],
    github: 'https://github.com/antoniomora/inventracker-system',
    status: 'completed',
    duration: '3 meses',
    highlights: [
      'Predicción de demanda con ML.NET',
      'Alertas inteligentes de stock bajo',
      'Integración con códigos de barras',
      'Reportes ejecutivos automatizados'
    ]
  },
  {
    id: 'dev-portfolio',
    title: 'DevPortfolio - Portfolio Moderno',
    category: 'fullstack',
    description: 'Sitio web personal con diseño moderno, optimizado para SEO y performance, con formulario de contacto funcional.',
    longDescription: 'Portfolio personal desarrollado con Next.js 13+ utilizando las últimas características como App Router, Server Components y optimizaciones automáticas. Incluye sistema de contacto con Nodemailer, analytics con Vercel y puntuación perfecta en Lighthouse.',
    technologies: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Nodemailer'],
    github: 'https://github.com/antoniomora/dev-portfolio',
    demo: 'https://antoniomora.dev',
    status: 'completed',
    duration: '1 mes',
    highlights: [
      'Score 100/100 en Lighthouse',
      'SEO optimizado con metadata dinámica',
      'Animaciones fluidas con Framer Motion',
      'Deploy automático con Vercel'
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    url: PERSONAL_INFO.linkedin,
    description: 'Connect with me professionally'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: '🐙',
    url: PERSONAL_INFO.github,
    description: 'Check my code and projects'
  },
  {
    id: 'email',
    name: 'Email',
    icon: '📧',
    url: `mailto:${PERSONAL_INFO.email}`,
    description: 'Send me an email'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: '📱',
    url: PERSONAL_INFO.whatsapp,
    description: 'Let\'s chat on WhatsApp'
  }
];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: '#home', label: 'Home', section: 'home' },
  { href: '#about', label: 'About', section: 'about' },
  { href: '#experience', label: 'Experience', section: 'experience' },
  { href: '#skills', label: 'Skills', section: 'skills' },
  { href: '#projects', label: 'Projects', section: 'projects' },
  { href: '#contact', label: 'Contact', section: 'contact' }
];

// Site configuration
export const SITE_CONFIG = {
  name: 'Antonio Mora - Portfolio',
  url: 'https://antoniomora.dev',
  description: 'Portfolio profesional de Antonio Mora, ingeniero de software especializado en desarrollo full stack y backend.',
  keywords: [
    'Antonio Mora',
    'Software Engineer',
    'Full Stack Developer',
    'Backend Developer',
    'Java',
    'C#',
    'JavaScript',
    'Costa Rica',
    'Portfolio'
  ]
};