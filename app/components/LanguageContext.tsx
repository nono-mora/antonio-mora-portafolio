'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.downloadCV': 'Descargar CV',
    
    // Hero Section
    'hero.greeting': '¡Hola! Soy',
    'hero.role1': 'Ingeniero de Software',
    'hero.role2': 'Desarrollador Full Stack',
    'hero.role3': 'Backend Developer',
    'hero.role4': 'Problem Solver',
    'hero.description': 'Estudiante de ingeniería de software apasionado por crear soluciones tecnológicas innovadoras. Especializado en desarrollo full stack con enfoque en backend, buscando oportunidades en empresas internacionales.',
    'hero.workTogether': 'Trabajemos juntos',
    'hero.viewProjects': 'Ver mis proyectos',
    'hero.programmingLanguages': 'Lenguajes de Programación',
    'hero.completedProjects': 'Proyectos Completados',
    'hero.hackathonWon': 'Hackathón Ganado',
    'hero.scroll': 'SCROLL',
    
    // About Section
    'about.subtitle': 'Conóceme mejor',
    'about.title': 'Sobre',
    'about.titleHighlight': 'Mí',
    'about.name': 'Nombre',
    'about.location': 'Ubicación',
    'about.status': 'Estado',
    'about.focus': 'Enfoque',
    'about.locationValue': 'Costa Rica',
    'about.statusValue': 'Disponible para trabajar',
    'about.focusValue': 'Full Stack / Backend',
    'about.myStory': 'Mi Historia',
    'about.storyP1': 'Soy un estudiante de ingeniería de software con una pasión genuina por resolver problemas complejos a través de la tecnología. Mi journey comenzó con curiosidad por entender cómo funcionan las cosas, y esa curiosidad me llevó a descubrir el mundo de la programación.',
    'about.storyP2': 'Mi experiencia más destacada fue ganar un hackathón de programación utilizando UiPath, lo que me abrió las puertas a una pasantía en',
    'about.storyP3': 'Greenlight Consulting',
    'about.storyP4': ', donde pude aplicar mis conocimientos en un entorno profesional real.',
    'about.storyP5': 'Actualmente, busco oportunidades como desarrollador junior en empresas internacionales, donde pueda contribuir con mi pasión por el desarrollo backend y full stack, mientras continúo aprendiendo y creciendo profesionalmente.',
    'about.interests': 'Áreas de Interés',
    'about.quote': 'El código es poesía escrita en lógica. Cada línea cuenta una historia, cada función resuelve un problema, y cada proyecto es una oportunidad de crear algo significativo.',
    
    // Experience Section
    'experience.subtitle': 'Mi Trayectoria',
    'experience.title': 'Experiencia &',
    'experience.titleHighlight': 'Educación',
    'experience.tabExperience': 'Experiencia',
    'experience.tabEducation': 'Educación',
    'experience.tabAchievements': 'Logros',
    
    // Skills Section
    'skills.subtitle': 'Mi Stack Tecnológico',
    'skills.title': 'Habilidades &',
    'skills.titleHighlight': 'Competencias',
    'skills.description': 'Un conjunto diverso de tecnologías y habilidades técnicas que me permiten crear soluciones completas desde el frontend hasta el backend.',
    'skills.softSkills': 'Habilidades Interpersonales',
    'skills.philosophy': 'Filosofía de Aprendizaje',
    'skills.philosophyQuote': '"La tecnología evoluciona constantemente, y mi compromiso es evolucionar con ella. Cada proyecto es una oportunidad de aprender algo nuevo, cada error es una lección, y cada éxito es un paso hacia la siguiente meta."',
    
    // Projects Section
    'projects.subtitle': 'Mi Trabajo',
    'projects.title': 'Proyectos &',
    'projects.titleHighlight': 'Portfolio',
    'projects.description': 'Una selección de proyectos que demuestran mis habilidades técnicas y pasión por crear soluciones innovadoras.',
    'projects.all': 'Todos',
    'projects.fullstack': 'Full Stack',
    'projects.backend': 'Backend',
    'projects.frontend': 'Frontend',
    'projects.automation': 'Automatización',
    'projects.viewDetails': 'Ver detalles',
    'projects.duration': 'Duración',
    'projects.ctaTitle': '¿Tienes un proyecto en mente?',
    'projects.ctaDescription': 'Estoy disponible para colaborar en proyectos interesantes y desafiantes. ¡Hablemos sobre tu próxima idea!',
    'projects.startConversation': 'Iniciar Conversación',
    'projects.viewOnGithub': 'Ver más en GitHub',
    
    // Contact Section
    'contact.subtitle': 'Conectemos',
    'contact.title': 'Hablemos de tu',
    'contact.titleHighlight': 'Proyecto',
    'contact.description': 'Estoy disponible para nuevas oportunidades y proyectos interesantes. ¡No dudes en contactarme!',
    'contact.howCanIHelp': '¿En qué puedo ayudarte?',
    'contact.contactInfo': 'Información de Contacto',
    'contact.sendMessage': 'Envíame un mensaje',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.company': 'Empresa (Opcional)',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.selectSubject': 'Selecciona un asunto',
    'contact.sending': 'Enviando...',
    'contact.sendButton': 'Enviar Mensaje',
    
    // Footer
    'footer.description': 'Desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. Especializado en backend development y siempre buscando nuevos desafíos.',
    'footer.navigation': 'Navegación',
    'footer.connect': 'Conectemos',
    'footer.collaborate': '¿Interesado en colaborar?',
    'footer.collaborateDesc': 'Estoy disponible para nuevas oportunidades laborales y proyectos desafiantes.',
    'footer.contactNow': 'Contactar ahora',
    'footer.viewLinkedIn': 'Ver perfil LinkedIn',
    'footer.allRights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con ❤️ en Costa Rica',
    'footer.builtWith': 'Construido con',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',
    
    // Hero Section
    'hero.greeting': 'Hello! I\'m',
    'hero.role1': 'Software Engineer',
    'hero.role2': 'Full Stack Developer',
    'hero.role3': 'Backend Developer',
    'hero.role4': 'Problem Solver',
    'hero.description': 'Software engineering student passionate about creating innovative technological solutions. Specialized in full stack development with backend focus, seeking opportunities in international companies.',
    'hero.workTogether': 'Let\'s work together',
    'hero.viewProjects': 'View my projects',
    'hero.programmingLanguages': 'Programming Languages',
    'hero.completedProjects': 'Completed Projects',
    'hero.hackathonWon': 'Hackathon Won',
    'hero.scroll': 'SCROLL',
    
    // About Section
    'about.subtitle': 'Get to know me better',
    'about.title': 'About',
    'about.titleHighlight': 'Me',
    'about.name': 'Name',
    'about.location': 'Location',
    'about.status': 'Status',
    'about.focus': 'Focus',
    'about.locationValue': 'Costa Rica',
    'about.statusValue': 'Available for work',
    'about.focusValue': 'Full Stack / Backend',
    'about.myStory': 'My Story',
    'about.storyP1': 'I am a software engineering student with a genuine passion for solving complex problems through technology. My journey began with curiosity about understanding how things work, and that curiosity led me to discover the world of programming.',
    'about.storyP2': 'My most outstanding experience was winning a programming hackathon using UiPath, which opened the doors to an internship at',
    'about.storyP3': 'Greenlight Consulting',
    'about.storyP4': ', where I was able to apply my knowledge in a real professional environment.',
    'about.storyP5': 'Currently, I am looking for opportunities as a junior developer in international companies, where I can contribute with my passion for backend and full stack development, while continuing to learn and grow professionally.',
    'about.interests': 'Areas of Interest',
    'about.quote': 'Code is poetry written in logic. Every line tells a story, every function solves a problem, and every project is an opportunity to create something meaningful.',
    
    // Experience Section
    'experience.subtitle': 'My Journey',
    'experience.title': 'Experience &',
    'experience.titleHighlight': 'Education',
    'experience.tabExperience': 'Experience',
    'experience.tabEducation': 'Education',
    'experience.tabAchievements': 'Achievements',
    
    // Skills Section
    'skills.subtitle': 'My Tech Stack',
    'skills.title': 'Skills &',
    'skills.titleHighlight': 'Competencies',
    'skills.description': 'A diverse set of technologies and technical skills that allow me to create complete solutions from frontend to backend.',
    'skills.softSkills': 'Soft Skills',
    'skills.philosophy': 'Learning Philosophy',
    'skills.philosophyQuote': '"Technology constantly evolves, and my commitment is to evolve with it. Every project is an opportunity to learn something new, every mistake is a lesson, and every success is a step towards the next goal."',
    
    // Projects Section
    'projects.subtitle': 'My Work',
    'projects.title': 'Projects &',
    'projects.titleHighlight': 'Portfolio',
    'projects.description': 'A selection of projects that demonstrate my technical skills and passion for creating innovative solutions.',
    'projects.all': 'All',
    'projects.fullstack': 'Full Stack',
    'projects.backend': 'Backend',
    'projects.frontend': 'Frontend',
    'projects.automation': 'Automation',
    'projects.viewDetails': 'View details',
    'projects.duration': 'Duration',
    'projects.ctaTitle': 'Have a project in mind?',
    'projects.ctaDescription': 'I\'m available to collaborate on interesting and challenging projects. Let\'s talk about your next idea!',
    'projects.startConversation': 'Start Conversation',
    'projects.viewOnGithub': 'View more on GitHub',
    
    // Contact Section
    'contact.subtitle': 'Let\'s Connect',
    'contact.title': 'Let\'s talk about your',
    'contact.titleHighlight': 'Project',
    'contact.description': 'I\'m available for new opportunities and interesting projects. Don\'t hesitate to contact me!',
    'contact.howCanIHelp': 'How can I help you?',
    'contact.contactInfo': 'Contact Information',
    'contact.sendMessage': 'Send me a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company (Optional)',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.selectSubject': 'Select a subject',
    'contact.sending': 'Sending...',
    'contact.sendButton': 'Send Message',
    
    // Footer
    'footer.description': 'Full stack developer passionate about creating innovative technological solutions. Specialized in backend development and always looking for new challenges.',
    'footer.navigation': 'Navigation',
    'footer.connect': 'Let\'s Connect',
    'footer.collaborate': 'Interested in collaborating?',
    'footer.collaborateDesc': 'I\'m available for new job opportunities and challenging projects.',
    'footer.contactNow': 'Contact now',
    'footer.viewLinkedIn': 'View LinkedIn profile',
    'footer.allRights': 'All rights reserved.',
    'footer.madeWith': 'Made with ❤️ in Costa Rica',
    'footer.builtWith': 'Built with',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente para evitar errores de hidratación
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') || 'es' : 'es';
    setLanguage(savedLang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = savedLang;
    }
    setIsLoaded(true);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    if (!isLoaded) {
      // Durante la carga inicial, usar español por defecto para evitar mismatch
      const keys = key.split('.');
      let value: any = translations.es;
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return value || key;
    }

    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};