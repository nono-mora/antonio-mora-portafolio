import type { Language } from './types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    downloadCV: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    description: string;
    workTogether: string;
    viewProjects: string;
    stats: {
      languages: string;
      projects: string;
      hackathon: string;
    };
    scroll: string;
  };
  about: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    info: {
      name: string;
      location: string;
      status: string;
      focus: string;
      values: {
        location: string;
        status: string;
        focus: string;
      };
    };
    story: {
      title: string;
      paragraphs: string[];
      company: string;
    };
    interests: string;
    quote: string;
  };
  experience: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    tabs: {
      experience: string;
      education: string;
      achievements: string;
    };
  };
  skills: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    softSkills: string;
    philosophy: {
      title: string;
      quote: string;
    };
  };
  projects: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    filters: {
      all: string;
      fullstack: string;
      backend: string;
      frontend: string;
      automation: string;
    };
    viewDetails: string;
    duration: string;
    cta: {
      title: string;
      description: string;
      start: string;
      github: string;
    };
  };
  contact: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    howCanIHelp: string;
    contactInfo: string;
    sendMessage: string;
    form: {
      name: string;
      email: string;
      company: string;
      subject: string;
      message: string;
      subjects: {
        select: string;
        job: string;
        collaboration: string;
        mentorship: string;
        technical: string;
        other: string;
      };
      sending: string;
      send: string;
    };
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  footer: {
    description: string;
    navigation: string;
    connect: string;
    collaborate: {
      title: string;
      description: string;
      contact: string;
      linkedin: string;
    };
    rights: string;
    madeWith: string;
    builtWith: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    close: string;
    learnMore: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      downloadCV: 'Descargar CV'
    },
    hero: {
      greeting: '¡Hola! Soy',
      roles: [
        'Ingeniero de Software',
        'Desarrollador Full Stack',
        'Backend Developer',
        'Problem Solver'
      ],
      description: 'Estudiante de ingeniería de software apasionado por crear soluciones tecnológicas innovadoras. Especializado en desarrollo full stack con enfoque en backend, buscando oportunidades en empresas internacionales.',
      workTogether: 'Trabajemos juntos',
      viewProjects: 'Ver mis proyectos',
      stats: {
        languages: 'Lenguajes de Programación',
        projects: 'Proyectos Completados',
        hackathon: 'Hackathón Ganado'
      },
      scroll: 'SCROLL'
    },
    about: {
      subtitle: 'Conóceme mejor',
      title: 'Sobre',
      titleHighlight: 'Mí',
      info: {
        name: 'Nombre',
        location: 'Ubicación',
        status: 'Estado',
        focus: 'Enfoque',
        values: {
          location: 'Costa Rica',
          status: 'Disponible para trabajar',
          focus: 'Full Stack / Backend'
        }
      },
      story: {
        title: 'Mi Historia',
        paragraphs: [
          'Soy un estudiante de ingeniería de software con una pasión genuina por resolver problemas complejos a través de la tecnología. Mi journey comenzó con curiosidad por entender cómo funcionan las cosas, y esa curiosidad me llevó a descubrir el mundo de la programación.',
          'Mi experiencia más destacada fue ganar un hackathón de programación utilizando UiPath, lo que me abrió las puertas a una pasantía en',
          ', donde pude aplicar mis conocimientos en un entorno profesional real.',
          'Actualmente, busco oportunidades como desarrollador junior en empresas internacionales, donde pueda contribuir con mi pasión por el desarrollo backend y full stack, mientras continúo aprendiendo y creciendo profesionalmente.'
        ],
        company: 'Greenlight Consulting'
      },
      interests: 'Áreas de Interés',
      quote: 'El código es poesía escrita en lógica. Cada línea cuenta una historia, cada función resuelve un problema, y cada proyecto es una oportunidad de crear algo significativo.'
    },
    experience: {
      subtitle: 'Mi Trayectoria',
      title: 'Experiencia &',
      titleHighlight: 'Educación',
      tabs: {
        experience: 'Experiencia',
        education: 'Educación',
        achievements: 'Logros'
      }
    },
    skills: {
      subtitle: 'Mi Stack Tecnológico',
      title: 'Habilidades &',
      titleHighlight: 'Competencias',
      description: 'Un conjunto diverso de tecnologías y habilidades técnicas que me permiten crear soluciones completas desde el frontend hasta el backend.',
      softSkills: 'Habilidades Interpersonales',
      philosophy: {
        title: 'Filosofía de Aprendizaje',
        quote: 'La tecnología evoluciona constantemente, y mi compromiso es evolucionar con ella. Cada proyecto es una oportunidad de aprender algo nuevo, cada error es una lección, y cada éxito es un paso hacia la siguiente meta.'
      }
    },
    projects: {
      subtitle: 'Mi Trabajo',
      title: 'Proyectos &',
      titleHighlight: 'Portfolio',
      description: 'Una selección de proyectos que demuestran mis habilidades técnicas y pasión por crear soluciones innovadoras.',
      filters: {
        all: 'Todos',
        fullstack: 'Full Stack',
        backend: 'Backend',
        frontend: 'Frontend',
        automation: 'Automatización'
      },
      viewDetails: 'Ver detalles',
      duration: 'Duración',
      cta: {
        title: '¿Tienes un proyecto en mente?',
        description: 'Estoy disponible para colaborar en proyectos interesantes y desafiantes. ¡Hablemos sobre tu próxima idea!',
        start: 'Iniciar Conversación',
        github: 'Ver más en GitHub'
      }
    },
    contact: {
      subtitle: 'Conectemos',
      title: 'Hablemos de tu',
      titleHighlight: 'Proyecto',
      description: 'Estoy disponible para nuevas oportunidades y proyectos interesantes. ¡No dudes en contactarme!',
      howCanIHelp: '¿En qué puedo ayudarte?',
      contactInfo: 'Información de Contacto',
      sendMessage: 'Envíame un mensaje',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa (Opcional)',
        subject: 'Asunto',
        message: 'Mensaje',
        subjects: {
          select: 'Selecciona un asunto',
          job: 'Oportunidad Laboral',
          collaboration: 'Colaboración',
          mentorship: 'Mentoría',
          technical: 'Consulta Técnica',
          other: 'Otro'
        },
        sending: 'Enviando...',
        send: 'Enviar Mensaje'
      },
      reasons: [
        {
          title: 'Oportunidades Laborales',
          description: 'Posiciones junior en desarrollo full stack o backend'
        },
        {
          title: 'Colaboraciones',
          description: 'Proyectos interesantes donde pueda contribuir'
        },
        {
          title: 'Mentorías',
          description: 'Intercambio de conocimientos y experiencias'
        },
        {
          title: 'Consultas Técnicas',
          description: 'Preguntas sobre desarrollo y tecnología'
        }
      ]
    },
    footer: {
      description: 'Desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. Especializado en backend development y siempre buscando nuevos desafíos.',
      navigation: 'Navegación',
      connect: 'Conectemos',
      collaborate: {
        title: '¿Interesado en colaborar?',
        description: 'Estoy disponible para nuevas oportunidades laborales y proyectos desafiantes.',
        contact: 'Contactar ahora',
        linkedin: 'Ver perfil LinkedIn'
      },
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con ❤️ en Costa Rica',
      builtWith: 'Construido con'
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      close: 'Cerrar',
      learnMore: 'Saber más'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      downloadCV: 'Download CV'
    },
    hero: {
      greeting: 'Hello! I\'m',
      roles: [
        'Software Engineer',
        'Full Stack Developer',
        'Backend Developer',
        'Problem Solver'
      ],
      description: 'Software engineering student passionate about creating innovative technological solutions. Specialized in full stack development with backend focus, seeking opportunities in international companies.',
      workTogether: 'Let\'s work together',
      viewProjects: 'View my projects',
      stats: {
        languages: 'Programming Languages',
        projects: 'Completed Projects',
        hackathon: 'Hackathon Won'
      },
      scroll: 'SCROLL'
    },
    about: {
      subtitle: 'Get to know me better',
      title: 'About',
      titleHighlight: 'Me',
      info: {
        name: 'Name',
        location: 'Location',
        status: 'Status',
        focus: 'Focus',
        values: {
          location: 'Costa Rica',
          status: 'Available for work',
          focus: 'Full Stack / Backend'
        }
      },
      story: {
        title: 'My Story',
        paragraphs: [
          'I am a software engineering student with a genuine passion for solving complex problems through technology. My journey began with curiosity about understanding how things work, and that curiosity led me to discover the world of programming.',
          'My most outstanding experience was winning a programming hackathon using UiPath, which opened the doors to an internship at',
          ', where I was able to apply my knowledge in a real professional environment.',
          'Currently, I am looking for opportunities as a junior developer in international companies, where I can contribute with my passion for backend and full stack development, while continuing to learn and grow professionally.'
        ],
        company: 'Greenlight Consulting'
      },
      interests: 'Areas of Interest',
      quote: 'Code is poetry written in logic. Every line tells a story, every function solves a problem, and every project is an opportunity to create something meaningful.'
    },
    experience: {
      subtitle: 'My Journey',
      title: 'Experience &',
      titleHighlight: 'Education',
      tabs: {
        experience: 'Experience',
        education: 'Education',
        achievements: 'Achievements'
      }
    },
    skills: {
      subtitle: 'My Tech Stack',
      title: 'Skills &',
      titleHighlight: 'Competencies',
      description: 'A diverse set of technologies and technical skills that allow me to create complete solutions from frontend to backend.',
      softSkills: 'Soft Skills',
      philosophy: {
        title: 'Learning Philosophy',
        quote: 'Technology constantly evolves, and my commitment is to evolve with it. Every project is an opportunity to learn something new, every mistake is a lesson, and every success is a step towards the next goal.'
      }
    },
    projects: {
      subtitle: 'My Work',
      title: 'Projects &',
      titleHighlight: 'Portfolio',
      description: 'A selection of projects that demonstrate my technical skills and passion for creating innovative solutions.',
      filters: {
        all: 'All',
        fullstack: 'Full Stack',
        backend: 'Backend',
        frontend: 'Frontend',
        automation: 'Automation'
      },
      viewDetails: 'View details',
      duration: 'Duration',
      cta: {
        title: 'Have a project in mind?',
        description: 'I\'m available to collaborate on interesting and challenging projects. Let\'s talk about your next idea!',
        start: 'Start Conversation',
        github: 'View more on GitHub'
      }
    },
    contact: {
      subtitle: 'Let\'s Connect',
      title: 'Let\'s talk about your',
      titleHighlight: 'Project',
      description: 'I\'m available for new opportunities and interesting projects. Don\'t hesitate to contact me!',
      howCanIHelp: 'How can I help you?',
      contactInfo: 'Contact Information',
      sendMessage: 'Send me a message',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company (Optional)',
        subject: 'Subject',
        message: 'Message',
        subjects: {
          select: 'Select a subject',
          job: 'Job Opportunity',
          collaboration: 'Collaboration',
          mentorship: 'Mentorship',
          technical: 'Technical Inquiry',
          other: 'Other'
        },
        sending: 'Sending...',
        send: 'Send Message'
      },
      reasons: [
        {
          title: 'Job Opportunities',
          description: 'Junior positions in full stack or backend development'
        },
        {
          title: 'Collaborations',
          description: 'Interesting projects where I can contribute'
        },
        {
          title: 'Mentorship',
          description: 'Knowledge and experience exchange'
        },
        {
          title: 'Technical Inquiries',
          description: 'Questions about development and technology'
        }
      ]
    },
    footer: {
      description: 'Full stack developer passionate about creating innovative technological solutions. Specialized in backend development and always looking for new challenges.',
      navigation: 'Navigation',
      connect: 'Let\'s Connect',
      collaborate: {
        title: 'Interested in collaborating?',
        description: 'I\'m available for new job opportunities and challenging projects.',
        contact: 'Contact now',
        linkedin: 'View LinkedIn profile'
      },
      rights: 'All rights reserved.',
      madeWith: 'Made with ❤️ in Costa Rica',
      builtWith: 'Built with'
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      learnMore: 'Learn more'
    }
  }
};

export function useTranslations(language: Language) {
  return {
    t: translations[language],
    getTranslation: (path: string, lang: Language = language) => {
      return path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any) || path;
    }
  };
}

export default translations;