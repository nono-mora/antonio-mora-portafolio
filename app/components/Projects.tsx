'use client';

import React, { useEffect, useState, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
      title: 'Sistema de Gestión E-commerce',
      category: 'fullstack',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, sistema de pagos y panel administrativo.',
      longDescription: 'Desarrollo de una plataforma de e-commerce completa utilizando React para el frontend y Node.js con Express para el backend. Incluye sistema de autenticación, gestión de productos, carrito de compras, integración con pasarelas de pago y panel administrativo con dashboard de analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      github: 'https://github.com/antoniomora/ecommerce-system',
      demo: 'https://ecommerce-demo.com',
      status: 'Completado',
      duration: '3 meses',
      highlights: [
        'Arquitectura escalable con microservicios',
        'Sistema de autenticación JWT',
        'Panel administrativo con analytics en tiempo real',
        'Integración con múltiples pasarelas de pago'
      ]
    },
    {
      id: 2,
      title: 'Bot de Automatización RPA',
      category: 'automation',
      description: 'Bot inteligente desarrollado con UiPath para automatizar procesos empresariales repetitivos.',
      longDescription: 'Desarrollo de un bot de automatización robótica de procesos (RPA) utilizando UiPath para automatizar tareas repetitivas en el área financiera. El bot procesa facturas, extrae datos y los ingresa automáticamente en el sistema ERP.',
      image: '/api/placeholder/600/400',
      technologies: ['UiPath', 'OCR', 'Excel Automation', 'Email Integration'],
      github: 'https://github.com/antoniomora/rpa-bot',
      demo: null,
      status: 'Ganador Hackathón',
      duration: '48 horas',
      highlights: [
        'Reducción del 85% en tiempo de procesamiento',
        'Integración con OCR para lectura de documentos',
        'Sistema de notificaciones automáticas',
        'Primer lugar en competencia UiPath'
      ]
    },
    {
      id: 3,
      title: 'API REST de Gestión de Tareas',
      category: 'backend',
      description: 'API robusta desarrollada en Java Spring Boot para gestión de proyectos y tareas con autenticación JWT.',
      longDescription: 'API REST completa desarrollada con Java Spring Boot que permite la gestión de proyectos, tareas y equipos de trabajo. Incluye sistema de autenticación y autorización, asignación de roles, notificaciones y reportes.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
      github: 'https://github.com/antoniomora/task-management-api',
      demo: 'https://api-docs-demo.com',
      status: 'En desarrollo',
      duration: '2 meses',
      highlights: [
        'Arquitectura RESTful con mejores prácticas',
        'Documentación completa con Swagger',
        'Sistema de roles y permisos granular',
        'Contenedorización con Docker'
      ]
    },
    {
      id: 4,
      title: 'Dashboard Analytics React',
      category: 'frontend',
      description: 'Dashboard interactivo con gráficos y métricas en tiempo real para visualización de datos empresariales.',
      longDescription: 'Dashboard web desarrollado en React con Next.js que muestra métricas y analytics empresariales en tiempo real. Incluye gráficos interactivos, filtros avanzados y exportación de reportes.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Next.js', 'Chart.js', 'Tailwind CSS', 'WebSocket'],
      github: 'https://github.com/antoniomora/analytics-dashboard',
      demo: 'https://dashboard-demo.com',
      status: 'Completado',
      duration: '1 mes',
      highlights: [
        'Gráficos interactivos con Chart.js',
        'Actualizaciones en tiempo real con WebSocket',
        'Diseño responsive y accesible',
        'Optimización de rendimiento'
      ]
    },
    {
      id: 5,
      title: 'Sistema de Inventario C#',
      category: 'backend',
      description: 'Aplicación de escritorio para gestión de inventario desarrollada en C# con base de datos SQL Server.',
      longDescription: 'Sistema completo de gestión de inventario desarrollado en C# con Windows Forms y SQL Server. Permite el control de stock, gestión de proveedores, reportes de ventas y alertas de stock bajo.',
      image: '/api/placeholder/600/400',
      technologies: ['C#', 'Windows Forms', 'SQL Server', 'Entity Framework'],
      github: 'https://github.com/antoniomora/inventory-system',
      demo: null,
      status: 'Completado',
      duration: '2 meses',
      highlights: [
        'Interfaz intuitiva y fácil de usar',
        'Reportes automatizados con Crystal Reports',
        'Sistema de alertas por email',
        'Backup automático de datos'
      ]
    },
    {
      id: 6,
      title: 'Portfolio Web Personal',
      category: 'fullstack',
      description: 'Sitio web personal responsive desarrollado con Next.js, optimizado para SEO y rendimiento.',
      longDescription: 'Desarrollo de portfolio personal utilizando Next.js con diseño moderno y responsive. Incluye formulario de contacto, galería de proyectos, blog personal y optimizaciones avanzadas de SEO.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'NodeMailer', 'Vercel'],
      github: 'https://github.com/antoniomora/portfolio',
      demo: 'https://antoniomora.dev',
      status: 'Completado',
      duration: '3 semanas',
      highlights: [
        'Score Perfect en Lighthouse (100/100)',
        'Optimización avanzada de SEO',
        'Animaciones fluidas y modernas',
        'Formulario de contacto funcional'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'automation', label: 'Automatización', count: projects.filter(p => p.category === 'automation').length }
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

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-[#1e1e1e] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[#00bfff]/10 rounded-full animate-pulse-custom"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#00bfff]/5 rotate-45 animate-bounce-custom"></div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Mi Trabajo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proyectos & <span className="gradient-text">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
            <p className="text-[#cfcfcf] max-w-2xl mx-auto mt-6 text-lg">
              Una selección de proyectos que demuestran mis habilidades técnicas 
              y pasión por crear soluciones innovadoras.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
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
                      {project.category === 'fullstack' && '🌐'}
                      {project.category === 'backend' && '⚙️'}
                      {project.category === 'frontend' && '🎨'}
                      {project.category === 'automation' && '🤖'}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <span className="text-lg">📁</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#00bfff]/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#00bfff] transition-colors duration-300"
                      >
                        <span className="text-lg">🔗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00bfff] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-[#cfcfcf] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="bg-[#00bfff]/10 text-[#00bfff] px-2 py-1 rounded text-xs border border-[#00bfff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[#cfcfcf] text-xs px-2 py-1">
                        +{project.technologies.length - 3} más
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#cfcfcf] text-xs">
                      Duración: {project.duration}
                    </span>
                    <button className="text-[#00bfff] text-sm font-medium hover:text-[#33ccff] transition-colors duration-300">
                      Ver detalles →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] rounded-2xl p-8 border border-[#cfcfcf]/10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-[#cfcfcf] mb-6">
                Estoy disponible para colaborar en proyectos interesantes y desafiantes. 
                ¡Hablemos sobre tu próxima idea!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#00bfff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0099cc] transition-colors duration-300 hover-lift"
                >
                  Iniciar Conversación
                </button>
                <a
                  href="https://github.com/antoniomora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#00bfff] text-[#00bfff] px-8 py-3 rounded-lg font-semibold hover:bg-[#00bfff] hover:text-white transition-all duration-300 hover-lift"
                >
                  Ver más en GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal (placeholder for future implementation) */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#2a2a2a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-[#cfcfcf] hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-[#cfcfcf]">
                Detalles completos del proyecto próximamente...
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;