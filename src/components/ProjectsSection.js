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
      title: "Featured Work",
      subtitle:
        "A selection of projects that showcase my expertise in full-stack development",
      categories: {
        all: "All Projects",
        web: "Web Apps",
        mobile: "Mobile",
        backend: "Backend",
        fullstack: "Full Stack",
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
          title: "E-Commerce Platform",
          shortDescription:
            "Modern online shopping experience with real-time inventory",
          fullDescription:
            "A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
          category: "fullstack",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=E-Commerce+Platform",
          technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redis"],
          challenge:
            "Create a scalable platform handling thousands of concurrent users with real-time inventory updates.",
          solution:
            "Implemented microservices architecture with Redis caching and WebSocket connections for live updates.",
          featured: true,
        },
        {
          id: 2,
          title: "Task Management System",
          shortDescription:
            "Collaborative project management tool for agile teams",
          fullDescription:
            "An intuitive task management application designed for agile teams, featuring real-time collaboration, Kanban boards, and comprehensive analytics.",
          category: "web",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Task+Management",
          technologies: [
            "Vue.js",
            "Express",
            "PostgreSQL",
            "Socket.io",
            "Docker",
          ],
          challenge:
            "Enable real-time collaboration without compromising performance.",
          solution:
            "Utilized WebSockets with optimized state management and database indexing.",
          featured: true,
        },
        {
          id: 3,
          title: "Mobile Banking App",
          shortDescription: "Secure and intuitive mobile banking solution",
          fullDescription:
            "A secure mobile banking application with biometric authentication, real-time transaction monitoring, and comprehensive financial management tools.",
          category: "mobile",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Mobile+Banking",
          technologies: [
            "React Native",
            "Node.js",
            "PostgreSQL",
            "JWT",
            "Face ID",
          ],
          challenge:
            "Ensure maximum security while maintaining user-friendly experience.",
          solution:
            "Implemented multi-layer security with biometric authentication and encrypted data transmission.",
          featured: false,
        },
        {
          id: 4,
          title: "Analytics Dashboard",
          shortDescription:
            "Real-time data visualization and business intelligence",
          fullDescription:
            "A powerful analytics dashboard providing real-time insights through interactive visualizations and customizable reports for data-driven decision making.",
          category: "web",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Analytics+Dashboard",
          technologies: ["React", "D3.js", "Python", "FastAPI", "ClickHouse"],
          challenge:
            "Process and visualize millions of data points in real-time.",
          solution:
            "Implemented efficient data aggregation pipelines with WebGL-powered visualizations.",
          featured: true,
        },
        {
          id: 5,
          title: "API Gateway Service",
          shortDescription: "Microservices orchestration and API management",
          fullDescription:
            "A robust API gateway handling authentication, rate limiting, and request routing for a microservices architecture serving millions of requests daily.",
          category: "backend",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=API+Gateway",
          technologies: ["Node.js", "Redis", "Docker", "Kubernetes", "GraphQL"],
          challenge:
            "Handle high traffic while maintaining low latency and high availability.",
          solution:
            "Designed auto-scaling infrastructure with intelligent caching and load balancing.",
          featured: false,
        },
        {
          id: 6,
          title: "Social Media Platform",
          shortDescription: "Next-generation social networking application",
          fullDescription:
            "A modern social media platform with real-time messaging, content sharing, and AI-powered content recommendations.",
          category: "fullstack",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Social+Platform",
          technologies: [
            "Next.js",
            "GraphQL",
            "PostgreSQL",
            "AWS",
            "TensorFlow.js",
          ],
          challenge:
            "Build a scalable platform with real-time features and personalized content.",
          solution:
            "Leveraged serverless architecture with ML-powered recommendation engine.",
          featured: true,
        },
      ],
    },
    es: {
      title: "Trabajo Destacado",
      subtitle:
        "Una selección de proyectos que muestran mi experiencia en desarrollo full-stack",
      categories: {
        all: "Todos",
        web: "Aplicaciones Web",
        mobile: "Móvil",
        backend: "Backend",
        fullstack: "Full Stack",
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
          title: "Plataforma E-Commerce",
          shortDescription:
            "Experiencia de compra online moderna con inventario en tiempo real",
          fullDescription:
            "Una solución de comercio electrónico integral con gestión de inventario en tiempo real, procesamiento de pagos seguro y un panel de administración intuitivo.",
          category: "fullstack",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Plataforma+E-Commerce",
          technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redis"],
          challenge:
            "Crear una plataforma escalable que maneje miles de usuarios concurrentes con actualizaciones de inventario en tiempo real.",
          solution:
            "Implementé arquitectura de microservicios con caché Redis y conexiones WebSocket para actualizaciones en vivo.",
          featured: true,
        },
        {
          id: 2,
          title: "Sistema de Gestión de Tareas",
          shortDescription:
            "Herramienta colaborativa de gestión de proyectos para equipos ágiles",
          fullDescription:
            "Una aplicación intuitiva de gestión de tareas diseñada para equipos ágiles, con colaboración en tiempo real, tableros Kanban y análisis completos.",
          category: "web",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Gestión+de+Tareas",
          technologies: [
            "Vue.js",
            "Express",
            "PostgreSQL",
            "Socket.io",
            "Docker",
          ],
          challenge:
            "Permitir colaboración en tiempo real sin comprometer el rendimiento.",
          solution:
            "Utilicé WebSockets con gestión de estado optimizada e indexación de base de datos.",
          featured: true,
        },
        {
          id: 3,
          title: "App de Banca Móvil",
          shortDescription: "Solución de banca móvil segura e intuitiva",
          fullDescription:
            "Una aplicación de banca móvil segura con autenticación biométrica, monitoreo de transacciones en tiempo real y herramientas integrales de gestión financiera.",
          category: "mobile",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Banca+Móvil",
          technologies: [
            "React Native",
            "Node.js",
            "PostgreSQL",
            "JWT",
            "Face ID",
          ],
          challenge:
            "Garantizar máxima seguridad manteniendo una experiencia amigable.",
          solution:
            "Implementé seguridad multicapa con autenticación biométrica y transmisión de datos encriptada.",
          featured: false,
        },
        {
          id: 4,
          title: "Dashboard de Analytics",
          shortDescription:
            "Visualización de datos en tiempo real e inteligencia de negocios",
          fullDescription:
            "Un potente dashboard de análisis que proporciona insights en tiempo real a través de visualizaciones interactivas y reportes personalizables.",
          category: "web",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Dashboard+Analytics",
          technologies: ["React", "D3.js", "Python", "FastAPI", "ClickHouse"],
          challenge:
            "Procesar y visualizar millones de puntos de datos en tiempo real.",
          solution:
            "Implementé pipelines eficientes de agregación de datos con visualizaciones potenciadas por WebGL.",
          featured: true,
        },
        {
          id: 5,
          title: "Servicio API Gateway",
          shortDescription: "Orquestación de microservicios y gestión de APIs",
          fullDescription:
            "Un robusto API gateway que maneja autenticación, limitación de velocidad y enrutamiento de solicitudes para una arquitectura de microservicios.",
          category: "backend",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=API+Gateway",
          technologies: ["Node.js", "Redis", "Docker", "Kubernetes", "GraphQL"],
          challenge:
            "Manejar alto tráfico manteniendo baja latencia y alta disponibilidad.",
          solution:
            "Diseñé infraestructura de auto-escalado con caché inteligente y balanceo de carga.",
          featured: false,
        },
        {
          id: 6,
          title: "Plataforma de Redes Sociales",
          shortDescription: "Aplicación de redes sociales de nueva generación",
          fullDescription:
            "Una plataforma moderna de redes sociales con mensajería en tiempo real, compartición de contenido y recomendaciones potenciadas por IA.",
          category: "fullstack",
          image:
            "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Plataforma+Social",
          technologies: [
            "Next.js",
            "GraphQL",
            "PostgreSQL",
            "AWS",
            "TensorFlow.js",
          ],
          challenge:
            "Construir una plataforma escalable con características en tiempo real y contenido personalizado.",
          solution:
            "Aproveché arquitectura serverless con motor de recomendaciones potenciado por ML.",
          featured: true,
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
                className="project-card group relative bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-gray/10 hover:border-primary-blue/30 hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-500 cursor-pointer"
                onClick={() => openProjectModal(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100  transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gray-700 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-blue text-primary-white px-3 py-1 rounded-full text-xs font-medium font-roboto shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-medium text-primary-dark mb-3 group-hover:text-primary-gray transition-colors duration-300">
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
                  <button
                    className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-primary-white font-roboto font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300"
                    disabled
                  >
                    <span className="material-icons text-lg">launch</span>
                    {currentContent.liveDemo}
                  </button>
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
