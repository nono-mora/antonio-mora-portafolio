"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsSection = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef();
  const projectsRef = useRef([]);
  const filterRef = useRef([]);

  // Content translations
  const content = {
    en: {
      title: "Featured Projects",
      subtitle:
        "A selection of projects that showcase my expertise in full-stack development and software engineering",
      categories: {
        all: "All Projects",
        web: "Web Apps",
        api: "APIs",
        fullstack: "Full Stack",
        automation: "Automation",
        ml: "Machine Learning",
      },
      viewProject: "View Details",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      technologies: "Technologies",
      challenge: "Challenge",
      solution: "Solution",
      close: "Close",
      projects: [
        {
          id: 1,
          title: "Stock Trading Simulator",
          shortDescription:
            "Full-stack application for stock trading simulation with real-time data visualization",
          fullDescription:
            "Developed a comprehensive stock trading simulator with MVC architecture, featuring secure JWT authentication, role-based authorization, and interactive dashboard with real-time data visualization using Chart.js and SweetAlert2.",
          category: "fullstack",
          image: "/projects/trading-simulator.png",
          technologies: [
            ".NET MVC",
            "Bootstrap",
            "JWT",
            "SQL Server",
            "Chart.js",
            "SweetAlert2",
          ],
          challenge:
            "Create a realistic trading platform with secure authentication and real-time portfolio management for multiple users.",
          solution:
            "Implemented MVC architecture with JWT-based security, optimized SQL Server queries for efficient transaction handling, and created interactive charts for data visualization.",
          featured: false,
        },
        {
          id: 2,
          title: "RESTful Management API",
          shortDescription:
            "Complete RESTful API with CRUD operations and layered architecture",
          fullDescription:
            "Built a comprehensive RESTful API with complete CRUD operations, Entity Framework Code First for database modeling, JWT authentication with refresh tokens, and comprehensive Swagger documentation.",
          category: "api",
          image: "/projects/api.png",
          technologies: [
            ".NET Core",
            "Entity Framework",
            "JWT",
            "SQL Server",
            "Swagger",
            "Code First",
          ],
          challenge:
            "Build a scalable and secure API with proper authentication, data validation, and documentation.",
          solution:
            "Applied layered architecture with Entity Framework Code First, implemented JWT with refresh tokens, and added comprehensive error handling and Swagger documentation.",
          featured: false,
        },
        {
          id: 3,
          title: "RPA Process Automation",
          shortDescription:
            "Automated business processes reducing manual work by 20+ hours weekly",
          fullDescription:
            "Developed and implemented RPA automation solutions at Greenlight Consulting, creating automated bots for repetitive business processes. Executed comprehensive QA testing and technical documentation.",
          category: "automation",
          image: "/projects/uipath.png",
          technologies: [
            "RPA Tools",
            "Process Automation",
            "QA Testing",
            "Technical Documentation",
          ],
          challenge:
            "Automate complex business processes to reduce manual processing time and improve efficiency.",
          solution:
            "Developed automated bots that generated 20+ weekly hours of operational savings through intelligent process automation.",
          featured: false,
        },
        {
          id: 4,
          title: "Neural Network Implementation",
          shortDescription:
            "Simple neural network built from scratch to predict vehicle maintenance costs",
          fullDescription:
            "Educational implementation of a single-layer neural network using pure Python without external libraries. The network predicts vehicle maintenance costs based on age and mileage using gradient descent and manual backpropagation. Demonstrates fundamental understanding of neural network concepts including forward propagation, cost calculation, and weight optimization.",
          category: "ml",
          image: "/projects/neural-network.png",
          technologies: [
            "Python",
            "Machine Learning",
            "Neural Networks",
            "Gradient Descent",
            "Backpropagation",
            "Mathematical Optimization",
          ],
          challenge:
            "Demonstrate that simple scripts can have significant business impact while showcasing deep understanding of neural network fundamentals without relying on external libraries.",
          solution:
            "Implemented a complete neural network from scratch using pure Python, including manual gradient calculations, backpropagation algorithm, and cost optimization to achieve accurate predictions on vehicle maintenance costs.",
          featured: true,
        },
        {
          id: 5,
          title: "Task Management System",
          shortDescription:
            "Collaborative project management tool with real-time updates",
          fullDescription:
            "Built an intuitive task management application for team collaboration, featuring drag-and-drop Kanban boards, real-time updates, user authentication, and comprehensive project analytics.",
          category: "web",
          image: "/projects/task-manager.png",
          technologies: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "Socket.io",
            "JWT",
            "Chart.js",
          ],
          challenge:
            "Enable real-time collaboration for teams with intuitive task management and tracking.",
          solution:
            "Used React for interactive UI, Socket.io for real-time updates, and PostgreSQL for reliable data persistence with optimized queries.",
          featured: false,
        },
        {
          id: 6,
          title: "Portfolio Website",
          shortDescription: "Personal portfolio showcasing projects and skills",
          fullDescription:
            "Designed and developed a responsive portfolio website using modern web technologies, featuring smooth animations with GSAP, multi-language support, and contact form integration.",
          category: "web",
          image: "/projects/portfolio.png",
          technologies: ["Next.js", "React", "Tailwind CSS", "GSAP", "Node.js"],
          challenge:
            "Create an engaging, responsive portfolio that effectively showcases skills and projects.",
          solution:
            "Leveraged Next.js for performance, Tailwind for responsive design, and GSAP for smooth animations and interactions.",
          featured: false,
        },
      ],
    },
    es: {
      title: "Proyectos Destacados",
      subtitle:
        "Una selección de proyectos que muestran mi experiencia en desarrollo full-stack e ingeniería de software",
      categories: {
        all: "Todos",
        web: "Aplicaciones Web",
        api: "APIs",
        fullstack: "Full Stack",
        automation: "Automatización",
        ml: "Machine Learning",
      },
      viewProject: "Ver Detalles",
      liveDemo: "Demo en Vivo",
      sourceCode: "Código Fuente",
      technologies: "Tecnologías",
      challenge: "Desafío",
      solution: "Solución",
      close: "Cerrar",
      projects: [
        {
          id: 1,
          title: "Simulador de Trading",
          shortDescription:
            "Aplicación full-stack para simulación de trading con visualización de datos en tiempo real",
          fullDescription:
            "Desarrollé un simulador de trading completo con arquitectura MVC, autenticación segura JWT, autorización basada en roles, y dashboard interactivo con visualización de datos en tiempo real usando Chart.js y SweetAlert2.",
          category: "fullstack",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Simulador+Trading",
          technologies: [
            ".NET MVC",
            "Bootstrap",
            "JWT",
            "SQL Server",
            "Chart.js",
            "SweetAlert2",
          ],
          challenge:
            "Crear una plataforma de trading realista con autenticación segura y gestión de portafolios en tiempo real para múltiples usuarios.",
          solution:
            "Implementé arquitectura MVC con seguridad basada en JWT, optimicé consultas SQL Server para manejo eficiente de transacciones, y creé gráficos interactivos para visualización de datos.",
          featured: true,
        },
        {
          id: 2,
          title: "API RESTful de Gestión",
          shortDescription:
            "API RESTful completa con operaciones CRUD y arquitectura de capas",
          fullDescription:
            "Construí una API RESTful integral con operaciones CRUD completas, Entity Framework Code First para modelado de base de datos, autenticación JWT con refresh tokens, y documentación completa con Swagger.",
          category: "api",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=API+RESTful",
          technologies: [
            ".NET Core",
            "Entity Framework",
            "JWT",
            "SQL Server",
            "Swagger",
            "Code First",
          ],
          challenge:
            "Construir una API escalable y segura con autenticación apropiada, validación de datos y documentación.",
          solution:
            "Apliqué arquitectura de capas con Entity Framework Code First, implementé JWT con refresh tokens, y agregué manejo de errores completo y documentación con Swagger.",
          featured: false,
        },
        {
          id: 3,
          title: "Automatización de Procesos RPA",
          shortDescription:
            "Procesos de negocio automatizados reduciendo trabajo manual en 20+ horas semanales",
          fullDescription:
            "Desarrollé e implementé soluciones de automatización RPA en Greenlight Consulting, creando bots automatizados para procesos de negocio repetitivos. Ejecuté pruebas de QA completas y documentación técnica.",
          category: "automation",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Automatización+RPA",
          technologies: [
            "Herramientas RPA",
            "Automatización de Procesos",
            "Pruebas QA",
            "Documentación Técnica",
          ],
          challenge:
            "Automatizar procesos de negocio complejos para reducir tiempo de procesamiento manual y mejorar eficiencia.",
          solution:
            "Desarrollé bots automatizados que generaron 20+ horas semanales de ahorro operativo a través de automatización inteligente de procesos.",
          featured: false,
        },
        {
          id: 4,
          title: "Implementación de Red Neuronal",
          shortDescription:
            "Red neuronal simple construida desde cero para predecir costos de mantenimiento vehicular",
          fullDescription:
            "Implementación educativa de una red neuronal de una capa usando Python puro sin librerías externas. La red predice costos de mantenimiento de vehículos basado en edad y millaje usando gradient descent y backpropagation manual. Demuestra comprensión fundamental de conceptos de redes neuronales incluyendo propagación hacia adelante, cálculo de costo y optimización de pesos.",
          category: "ml",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Red+Neuronal",
          technologies: [
            "Python",
            "Machine Learning",
            "Redes Neuronales",
            "Gradient Descent",
            "Backpropagation",
            "Optimización Matemática",
          ],
          challenge:
            "Demostrar que scripts simples pueden tener impacto significativo en empresas mientras se muestra comprensión profunda de fundamentos de redes neuronales sin depender de librerías externas.",
          solution:
            "Implementé una red neuronal completa desde cero usando Python puro, incluyendo cálculos manuales de gradientes, algoritmo de backpropagation y optimización de costo para lograr predicciones precisas en costos de mantenimiento vehicular.",
          featured: true,
        },
        {
          id: 5,
          title: "Sistema de Gestión de Tareas",
          shortDescription:
            "Herramienta colaborativa de gestión de proyectos con actualizaciones en tiempo real",
          fullDescription:
            "Construí una aplicación intuitiva de gestión de tareas para colaboración en equipo, con tableros Kanban arrastrables, actualizaciones en tiempo real, autenticación de usuarios, y análisis completos de proyectos.",
          category: "web",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Gestor+Tareas",
          technologies: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "Socket.io",
            "JWT",
            "Chart.js",
          ],
          challenge:
            "Permitir colaboración en tiempo real para equipos con gestión y seguimiento intuitivo de tareas.",
          solution:
            "Usé React para UI interactiva, Socket.io para actualizaciones en tiempo real, y PostgreSQL para persistencia confiable de datos con consultas optimizadas.",
          featured: false,
        },
        {
          id: 6,
          title: "Sitio Web Portfolio",
          shortDescription:
            "Portfolio personal mostrando proyectos y habilidades",
          fullDescription:
            "Diseñé y desarrollé un sitio web portfolio responsivo usando tecnologías web modernas, con animaciones suaves usando GSAP, soporte multi-idioma, e integración de formulario de contacto.",
          category: "web",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Portfolio",
          technologies: ["Next.js", "React", "Tailwind CSS", "GSAP", "Node.js"],
          challenge:
            "Crear un portfolio atractivo y responsivo que muestre efectivamente habilidades y proyectos.",
          solution:
            "Aproveché Next.js para rendimiento, Tailwind para diseño responsivo, y GSAP para animaciones e interacciones suaves.",
          featured: false,
        },
      ],
    },
  };

  const currentContent = content[currentLang];

  // GSAP Animations
  useGSAP(
    () => {
      // Title animation
      gsap.fromTo(
        ".projects-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
          },
        }
      );

      // Filter animation
      gsap.fromTo(
        ".filter-button",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".filter-container",
            start: "top 80%",
          },
        }
      );

      // Projects animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLang(savedLang);

    const handleStorageChange = (e) => {
      if (e.key === "language") {
        setCurrentLang(e.newValue || "en");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const filteredProjects = currentContent.projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Animate filter change
    gsap.to(".project-card", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        gsap.to(".project-card", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        });
      },
    });
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        id="projects"
        className="min-h-screen bg-primary-dark py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="projects-title text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-poppins font-light text-primary-white mb-6 tracking-tight">
              {currentContent.title}
            </h2>
            <p className="text-xl font-roboto font-light text-primary-gray max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Filter */}
          <div className="filter-container flex flex-wrap justify-center gap-3 mb-16">
            {Object.entries(currentContent.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`filter-button px-6 py-3 font-roboto text-sm font-medium rounded-full transition-all duration-300 ${
                  selectedCategory === key
                    ? "bg-primary-white text-primary-dark shadow-lg shadow-primary-blue/30 transform scale-105"
                    : "bg-transparent text-primary-gray border border-primary-gray/30 hover:border-primary-gray/60 hover:text-primary-white hover:shadow-md"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectsRef.current[index] = el)}
                className="project-card group relative bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-dark/50 hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-500 cursor-pointer"
                onClick={() => openProjectModal(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/fallback.jpg"; // imagen por defecto si falla
                    }}
                    className="w-full h-full object-cover opacity-100 transition-all duration-700"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-blue text-primary-white px-3 py-1 rounded-full text-xs font-medium font-roboto shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-medium text-primary-dark mb-3 group-hover:text-primary-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-primary-dark font-roboto text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-roboto font-medium text-primary-dark bg-primary-gray/25 border border-primary-gray/20 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-roboto font-medium text-primary-dark bg-primary-white/5 border border-primary-gray/20 px-3 py-1 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/95 backdrop-blur-md"
          onClick={closeProjectModal}
        >
          <div
            className="relative bg-primary-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-primary-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-white transition-colors duration-300 shadow-lg"
            >
              <span className="material-icons text-primary-dark">close</span>
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Project Image */}
              <div className="relative h-96 bg-gradient-to-br from-primary-dark to-primary-gray">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12">
                <h2 className="text-4xl font-poppins font-light text-primary-dark mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-lg font-roboto text-primary-dark/70 mb-8 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-sm font-poppins font-medium text-primary-dark uppercase tracking-wide mb-4">
                    {currentContent.technologies}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary-dark text-primary-white font-roboto text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-poppins font-medium text-primary-dark uppercase tracking-wide mb-3">
                      {currentContent.challenge}
                    </h3>
                    <p className="font-roboto text-primary-dark/70">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-poppins font-medium text-primary-dark uppercase tracking-wide mb-3">
                      {currentContent.solution}
                    </h3>
                    <p className="font-roboto text-primary-dark/70">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* <button
                    className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-primary-white font-roboto font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300"
                    disabled
                  >
                    <span className="material-icons text-lg">launch</span>
                    {currentContent.liveDemo}
                  </button> */}
                  <button
                    className="flex items-center gap-2 px-6 py-3 border-2 border-primary-dark text-primary-dark font-roboto font-medium rounded-lg hover:bg-primary-dark hover:text-primary-white transition-all duration-300"
                    disabled
                  >
                    <span className="material-icons text-lg">code</span>
                    {currentContent.sourceCode}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
