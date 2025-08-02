'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'TaskFlow - Sistema de Gestión de Proyectos',
      category: 'fullstack',
      description: 'Plataforma completa para gestión de proyectos con colaboración en tiempo real, asignación de tareas y seguimiento de progreso.',
      longDescription: 'Desarrollo de una plataforma integral de gestión de proyectos utilizando React para el frontend y Node.js con Express para el backend. Incluye autenticación JWT, websockets para colaboración en tiempo real, sistema de notificaciones y dashboard analítico con métricas de productividad.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      github: 'https://github.com/antoniomora/taskflow-system',
      demo: 'https://taskflow-demo.vercel.app',
      status: 'Completado',
      duration: '4 meses',
      highlights: [
        'Arquitectura de microservicios escalable',
        'Colaboración en tiempo real con Socket.io',
        'Dashboard con analytics avanzados',
        'Sistema de notificaciones push'
      ]
    },
    {
      id: 2,
      title: 'AutoBot RPA - Automatización Inteligente',
      category: 'automation',
      description: 'Bot de automatización robótica desarrollado con UiPath para procesos empresariales, incluyendo procesamiento de documentos y reportes.',
      longDescription: 'Desarrollo de un sistema completo de automatización robótica utilizando UiPath para automatizar procesos de facturación y contabilidad. El bot procesa facturas PDF, extrae datos mediante OCR, valida información y genera reportes automáticos.',
      image: '/api/placeholder/600/400',
      technologies: ['UiPath', 'OCR', 'PDF Processing', 'Excel Automation', 'Email Integration'],
      github: 'https://github.com/antoniomora/autobot-rpa',
      demo: null,
      status: 'Ganador Hackathón',
      duration: '2 días',
      highlights: [
        'Primer lugar en hackathón UiPath Nacional',
        'Reducción del 90% en tiempo de procesamiento',
        'Integración con sistemas ERP existentes',
        'Precisión del 99.5% en extracción de datos'
      ]
    },
    {
      id: 3,
      title: 'DevAPI - REST API Framework',
      category: 'backend',
      description: 'Framework personalizado para construcción rápida de APIs REST con autenticación, validación y documentación automática.',
      longDescription: 'Framework desarrollado en Java Spring Boot que permite la creación rápida de APIs REST con características avanzadas como autenticación JWT, validación automática, rate limiting, logging estructurado y documentación interactiva con Swagger.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Swagger'],
      github: 'https://github.com/antoniomora/devapi-framework',
      demo: 'https://devapi-docs.herokuapp.com',
      status: 'En desarrollo',
      duration: '3 meses',
      highlights: [
        'Arquitectura hexagonal implementada',
        'Rate limiting con Redis',
        'Documentación automática OpenAPI',
        'Testing automatizado con JUnit'
      ]
    },
    {
      id: 4,
      title: 'DataViz Dashboard - Analytics Frontend',
      category: 'frontend',
      description: 'Dashboard interactivo con visualizaciones de datos en tiempo real, gráficos dinámicos y exportación de reportes.',
      longDescription: 'Dashboard web desarrollado en React con Next.js que muestra analytics empresariales en tiempo real. Incluye gráficos interactivos con D3.js, filtros avanzados, comparativas históricas y sistema de alertas basado en métricas.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Next.js', 'D3.js', 'TypeScript', 'WebSocket', 'Chart.js'],
      github: 'https://github.com/antoniomora/dataviz-dashboard',
      demo: 'https://dataviz-demo.vercel.app',
      status: 'Completado',
      duration: '2 meses',
      highlights: [
        'Visualizaciones interactivas con D3.js',
        'Actualizaciones en tiempo real',
        'Exportación a múltiples formatos',
        'Responsive design optimizado'
      ]
    },
    {
      id: 5,
      title: 'InvenTrack - Sistema de Inventario',
      category: 'backend',
      description: 'Sistema completo de gestión de inventario con control de stock, alertas automáticas y reportes de ventas.',
      longDescription: 'Aplicación empresarial desarrollada en C# con .NET Core para gestión integral de inventario. Incluye control de stock en tiempo real, gestión de proveedores, predicción de demanda con ML.NET y reportes automatizados.',
      image: '/api/placeholder/600/400',
      technologies: ['C#', '.NET Core', 'SQL Server', 'Entity Framework', 'ML.NET'],
      github: 'https://github.com/antoniomora/inventracker-system',
      demo: null,
      status: 'Completado',
      duration: '3 meses',
      highlights: [
        'Predicción de demanda con ML.NET',
        'Alertas inteligentes de stock bajo',
        'Integración con códigos de barras',
        'Reportes ejecutivos automatizados'
      ]
    },
    {
      id: 6,
      title: 'DevPortfolio - Portfolio Moderno',
      category: 'fullstack',
      description: 'Sitio web personal con diseño moderno, optimizado para SEO y performance, con formulario de contacto funcional.',
      longDescription: 'Portfolio personal desarrollado con Next.js 13+ utilizando las últimas características como App Router, Server Components y optimizaciones automáticas. Incluye sistema de contacto con Nodemailer, analytics con Vercel y puntuación perfecta en Lighthouse.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js 13', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Nodemailer'],
      github: 'https://github.com/antoniomora/dev-portfolio',
      demo: 'https://antoniomora.dev',
      status: 'Completado',
      duration: '1 mes',
      highlights: [
        'Score 100/100 en Lighthouse',
        'SEO optimizado con metadata dinámica',
        'Animaciones fluidas con Framer Motion',
        'Deploy automático con Vercel'
      ]
    },
    {
      id: 7,
      title: 'CryptoTracker - Monitor de Criptomonedas',
      category: 'frontend',
      description: 'Aplicación web para monitoreo de precios de criptomonedas con alertas personalizadas y análisis técnico.',
      longDescription: 'Aplicación desarrollada en Vue.js para seguimiento de mercados de criptomonedas. Integra APIs de CoinGecko y Binance para datos en tiempo real, incluye gráficos de trading con TradingView y sistema de alertas por email.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Vuex', 'TradingView Charts', 'WebSocket', 'PWA'],
      github: 'https://github.com/antoniomora/crypto-tracker',
      demo: 'https://crypto-tracker-vue.netlify.app',
      status: 'En desarrollo',
      duration: '2 meses',
      highlights: [
        'Datos en tiempo real de múltiples exchanges',
        'Gráficos avanzados de trading',
        'Sistema de alertas por email/SMS',
        'PWA con funcionalidad offline'
      ]
    },
    {
      id: 8,
      title: 'LearnHub - Plataforma Educativa',
      category: 'fullstack',
      description: 'Plataforma de aprendizaje online con cursos interactivos, evaluaciones automáticas y seguimiento de progreso.',
      longDescription: 'Sistema de gestión de aprendizaje (LMS) desarrollado con MERN stack. Incluye creación de cursos multimedia, evaluaciones automáticas, foros de discusión, sistema de certificaciones y analytics de aprendizaje para instructores.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'AWS S3'],
      github: 'https://github.com/antoniomora/learnhub-platform',
      demo: 'https://learnhub-demo.herokuapp.com',
      status: 'En desarrollo',
      duration: '6 meses',
      highlights: [
        'Videollamadas integradas con WebRTC',
        'Sistema de certificaciones digitales',
        'Analytics de progreso estudiantil',
        'Integración con sistemas de pago'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: t('projects.all'), count: projects.length },
    { id: 'fullstack', label: t('projects.fullstack'), count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'backend', label: t('projects.backend'), count: projects.filter(p => p.category === 'backend').length },
    { id: 'frontend', label: t('projects.frontend'), count: projects.filter(p => p.category === 'frontend').length },
    { id: 'automation', label: t('projects.automation'), count: projects.filter(p => p.category === 'automation').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'En desarrollo':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Ganador Hackathón':
        return 'bg-[#00bfff]/20 text-[#00bfff] border-[#00bfff]/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fullstack':
        return '🌐';
      case 'backend':
        return '⚙️';
      case 'frontend':
        return '🎨';
      case 'automation':
        return '🤖';
      default:
        return '💻';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-[#1e1e1e] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[#00bfff]/10 rounded-full animate-pulse-custom"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#00bfff]/5 rotate-45 animate-bounce-custom"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 border border-[#cfcfcf]/10 rotate-12 animate-float"></div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block font-heading">
              {t('projects.subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
            <p className="text-[#cfcfcf] max-w-2xl mx-auto mt-6 text-lg font-body">
              {t('projects.description')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border font-heading ${
                  selectedCategory === category.id
                    ? 'bg-[#00bfff] text-white border-[#00bfff] shadow-lg hover-glow'
                    : 'bg-[#2a2a2a] text-[#cfcfcf] border-[#cfcfcf]/20 hover:border-[#00bfff]/50 hover:text-white hover-lift'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-[#2a2a2a] rounded-xl overflow-hidden border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift hover-glow cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#00bfff]/20 to-[#cfcfcf]/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/80 via-transparent to-transparent"></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300 hover:scale-110"
                        aria-label="Ver código en GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#00bfff]/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#00bfff] transition-colors duration-300 hover:scale-110"
                        aria-label="Ver demo en vivo"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00bfff] transition-colors duration-300 mb-3 font-heading">
                    {project.title}
                  </h3>

                  <p className="text-[#cfcfcf] text-sm mb-4 leading-relaxed font-body line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="bg-[#00bfff]/10 text-[#00bfff] px-2 py-1 rounded text-xs border border-[#00bfff]/20 font-medium font-body"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[#cfcfcf] text-xs px-2 py-1 font-body">
                        +{project.technologies.length - 3} más
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#cfcfcf] text-xs font-body">
                      {t('projects.duration')}: {project.duration}
                    </span>
                    <button className="text-[#00bfff] text-sm font-medium hover:text-[#33ccff] transition-colors duration-300 font-heading">
                      {t('projects.viewDetails')} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] rounded-2xl p-8 border border-[#cfcfcf]/10 max-w-3xl mx-auto hover:border-[#00bfff]/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                {t('projects.ctaTitle')}
              </h3>
              <p className="text-[#cfcfcf] mb-6 font-body">
                {t('projects.ctaDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                >
                  {t('projects.startConversation')}
                </button>
                <a
                  href="https://github.com/antoniomora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {t('projects.viewOnGithub')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#2a2a2a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#cfcfcf]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white font-heading">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-[#cfcfcf] hover:text-white text-3xl transition-colors duration-300 hover:rotate-90 transform"
                >
                  ×
                </button>
              </div>
              
              <div className="text-[#cfcfcf] font-body leading-relaxed">
                <p className="mb-4">
                  {projects.find(p => p.id === selectedProject)?.longDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 font-heading">Características destacadas:</h4>
                  <ul className="space-y-2">
                    {projects.find(p => p.id === selectedProject)?.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-[#00bfff] mt-1">▶</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {projects.find(p => p.id === selectedProject)?.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-[#00bfff]/10 text-[#00bfff] px-3 py-1 rounded-full text-sm border border-[#00bfff]/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;