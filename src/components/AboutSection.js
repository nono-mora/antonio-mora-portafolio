"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [activeSkillCategory, setActiveSkillCategory] = useState("languages");
  const sectionRef = useRef();
  const timelineRef = useRef();

  const content = {
    en: {
      title: "About Me",
      subtitle: "Software Engineer & Full Stack Developer",
      bio: {
        intro:
          "I’m Antonio Mora Blotta, a Software Engineer specialized in full-stack development, with hands-on experience in RPA automation and building robust, scalable web solutions.",
        description:
          "Currently pursuing a Software Engineering degree at Universidad Cenfotec, I have practical experience with C/C++, C#, JavaScript, and Python. I apply solid software engineering principles and Agile methodologies to deliver high-quality solutions. My background includes designing and developing RESTful APIs using .NET Core, as well as building modern, responsive web interfaces with React, Node.js, and related JavaScript technologies.",
        passion:
          "I focus on identifying technical improvement opportunities and optimizing processes through automation. I'm driven by building efficient, scalable, and maintainable systems. I seek to join teams that value innovation, collaboration, and continuous learning, with the goal of growing professionally and contributing meaningful value to every project.",
      },
      skills: {
        title: "Technical Expertise",
        categories: {
          languages: "Programming Languages",
          backend: "Backend & APIs",
          frontend: "Frontend Development",
          database: "Databases",
          tools: "Tools & Methods",
        },
        items: {
          languages: [
            "C",
            "C++",
            "C#",
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "HTML5",
            "CSS3",
          ],
          backend: [
            ".NET Core",
            "Entity Framework",
            "Node.js",
            "Express.js",
            "RESTful APIs",
            "JWT",
            "Swagger",
          ],
          frontend: [
            "React.js",
            "ASP.NET MVC",
            "Bootstrap",
            "Chart.js",
            "Responsive Design",
            "SweetAlert2",
          ],
          database: [
            "SQL Server",
            "PostgreSQL",
            "MongoDB",
            "Entity Framework Code First",
          ],
          tools: [
            "Git",
            "GitHub",
            "Visual Studio",
            "VS Code",
            "Postman",
            "Agile/Scrum",
            "TDD",
          ],
        },
      },
      experience: {
        title: "Professional Journey",
        years: "2+",
        yearsLabel: "Years Experience",
        projects: "5+",
        projectsLabel: "Projects Completed",
        languages: "2",
        languagesLabel: "Languages Spoken",
      },
      timeline: [
        {
          year: "2023",
          title: "Technical Internship",
          company: "Greenlight Consulting",
          description:
            "Developed and implemented RPA process automation, reducing manual processing time. Executed QA testing, technical documentation, and automated bot deployment. Collaborated on client projects generating 20+ weekly hours of operational savings",
        },
        {
          year: "2022",
          title: "Vendor Support Specialist",
          company: "Amazon",
          description:
            "Provided technical support to 30+ daily vendors on Amazon Marketplace platform. Resolved complex catalog, inventory, listing and policy compliance issues. Maintained 95%+ satisfaction index through effective technical communication",
        },
        {
          year: "2022",
          title: "Banking Agent",
          company: "Sykes Enterprises",
          description:
            "Managed bank accounts, identity verification and processing of 30+ daily transactions. Implemented security procedures and regulatory compliance in financial operations",
        },
      ],
      education: {
        degree: "Bachelor's in Software Engineering",
        university: "Universidad Cenfotec",
        status: "In Progress",
        period: "2023 - Present",
      },
      languages: {
        spanish: "Spanish (Native)",
        english: "English (C2)",
      },
      cta: "Hire Me",
    },
    es: {
      title: "Sobre Mí",
      subtitle: "Ingeniero en Software & Desarrollador Full Stack",
      bio: {
        intro:
          "Soy Antonio Mora Blotta, Ingeniero en Software especializado en desarrollo full-stack, con experiencia práctica en automatización RPA y construcción de soluciones web robustas y escalables.",
        description:
          "Actualmente curso la carrera de Ingeniería en Software en la Universidad Cenfotec. Poseo experiencia en desarrollo con C/C++, C#, JavaScript y Python, aplicando principios de ingeniería de software y metodologías Agile para entregar soluciones de calidad. He trabajado en el diseño y desarrollo de APIs RESTful utilizando .NET Core, así como en la implementación de interfaces web modernas y responsivas con React, Node.js y otras tecnologías del ecosistema JavaScript.",
        passion:
          "Me especializo en identificar oportunidades de mejora técnica y en optimizar procesos mediante la automatización. Me motiva construir soluciones eficientes, escalables y mantenibles. Busco integrarme en equipos donde se valoren la innovación, la colaboración y el aprendizaje continuo, con el objetivo de evolucionar profesionalmente y aportar valor real a cada proyecto.",
      },
      skills: {
        title: "Experiencia Técnica",
        categories: {
          languages: "Lenguajes de Programación",
          backend: "Backend y APIs",
          frontend: "Desarrollo Frontend",
          database: "Bases de Datos",
          tools: "Herramientas y Métodos",
        },
        items: {
          languages: [
            "C",
            "C++",
            "C#",
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "HTML5",
            "CSS3",
          ],
          backend: [
            ".NET Core",
            "Entity Framework",
            "Node.js",
            "Express.js",
            "APIs RESTful",
            "JWT",
            "Swagger",
          ],
          frontend: [
            "React.js",
            "ASP.NET MVC",
            "Bootstrap",
            "Chart.js",
            "Diseño Responsivo",
            "SweetAlert2",
          ],
          database: [
            "SQL Server",
            "PostgreSQL",
            "MongoDB",
            "Entity Framework Code First",
          ],
          tools: [
            "Git",
            "GitHub",
            "Visual Studio",
            "VS Code",
            "Postman",
            "Agile/Scrum",
            "TDD",
          ],
        },
      },
      experience: {
        title: "Trayectoria Profesional",
        years: "2+",
        yearsLabel: "Años de Experiencia",
        projects: "5+",
        projectsLabel: "Proyectos Completados",
        languages: "2",
        languagesLabel: "Idiomas",
      },
      timeline: [
        {
          year: "2023",
          title: "Pasantía Técnica",
          company: "Greenlight Consulting",
          description:
            "Desarrollé e implementé automatización de procesos mediante RPA, reduciendo tiempo de procesamiento manual. Ejecuté pruebas de QA, documentación técnica y despliegue automatizado de bots. Colaboré en proyectos cliente que generaron 20+ horas semanales de ahorro operativo",
        },
        {
          year: "2022",
          title: "Vendor Support Specialist",
          company: "Amazon",
          description:
            "Brindé soporte técnico a 30+ vendedores diarios en la plataforma Amazon Marketplace. Resolví problemas complejos de catálogo, inventario, listados y cumplimiento de políticas. Mantuve 95%+ índice de satisfacción mediante comunicación técnica efectiva",
        },
        {
          year: "2022",
          title: "Agente de Banca",
          company: "Sykes Enterprises",
          description:
            "Gestioné cuentas bancarias, verificación de identidad y procesamiento de 30+ transacciones diarias. Implementé procedimientos de seguridad y cumplimiento normativo en operaciones financieras",
        },
      ],
      education: {
        degree: "Bachillerato en Ingeniería en Software",
        university: "Universidad Cenfotec",
        status: "En Curso",
        period: "2023 - Presente",
      },
      languages: {
        spanish: "Español (Nativo)",
        english: "Inglés (C2)",
      },
      cta: "Contrátame",
    },
  };

  const currentContent = content[currentLang];

  // GSAP Animations
  useGSAP(
    () => {
      // Title animation
      gsap.fromTo(
        ".about-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
          },
        }
      );

      // Bio animation
      gsap.fromTo(
        ".bio-content",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".bio-content",
            start: "top 80%",
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
          },
        }
      );

      // Timeline animation
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
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

  const handleContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen bg-gradient-to-b from-primary-white to-gray-50 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="about-title text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-poppins font-light text-primary-dark mb-4 tracking-tight">
              {currentContent.title}
            </h2>
            <p className="text-xl font-roboto font-light text-primary-dark/70">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Bio */}
            <div className="bio-content grid gap-6">
              {/* Intro */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-primary-blue/80 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <span className="material-icons text-primary-blue">
                    person
                  </span>
                  <p className="text-base font-roboto text-primary-dark leading-relaxed">
                    {currentContent.bio.intro}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-primary-blue/60 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <span className="material-icons text-primary-blue">code</span>
                  <p className="text-base font-roboto text-primary-dark/80 leading-relaxed">
                    {currentContent.bio.description}
                  </p>
                </div>
              </div>

              {/* Passion */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-primary-blue/40 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <span className="material-icons text-primary-blue">
                    insights
                  </span>
                  <p className="text-base font-roboto text-primary-dark/70 leading-relaxed">
                    {currentContent.bio.passion}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Skills */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="stats-container grid grid-cols-3 gap-4">
                <div className="stat-card bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-poppins font-light text-primary-blue mb-2">
                    {currentContent.experience.years}
                  </div>
                  <div className="text-xs font-roboto text-primary-dark/60 uppercase tracking-wide">
                    {currentContent.experience.yearsLabel}
                  </div>
                </div>
                <div className="stat-card bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-poppins font-light text-primary-blue mb-2">
                    {currentContent.experience.projects}
                  </div>
                  <div className="text-xs font-roboto text-primary-dark/60 uppercase tracking-wide">
                    {currentContent.experience.projectsLabel}
                  </div>
                </div>
                <div className="stat-card bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-poppins font-light text-primary-blue mb-2">
                    {currentContent.experience.languages}
                  </div>
                  <div className="text-xs font-roboto text-primary-dark/60 uppercase tracking-wide">
                    {currentContent.experience.languagesLabel}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="skills-container bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-poppins font-medium text-primary-dark mb-6">
                  {currentContent.skills.title}
                </h3>

                {/* Skill Categories */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.entries(currentContent.skills.categories).map(
                    ([key, label]) => (
                      <button
                        key={key}
                        onClick={() => setActiveSkillCategory(key)}
                        className={`px-4 py-2 rounded-full text-sm font-roboto transition-all duration-300 ${
                          activeSkillCategory === key
                            ? "bg-primary-dark text-primary-white"
                            : "bg-gray-100 text-primary-dark/70 hover:bg-gray-200"
                        }`}
                      >
                        {label}
                      </button>
                    )
                  )}
                </div>

                {/* Skill Items */}
                <div className="flex flex-wrap gap-2">
                  {currentContent.skills.items[activeSkillCategory].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="skill-item px-4 py-2 bg-primary-blue/10 text-primary-dark text-sm font-roboto rounded-lg border border-primary-blue/20"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
              {/* Education Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary-blue">
                      school
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-medium text-primary-dark mb-1">
                      {currentContent.education.degree}
                    </h4>
                    <p className="text-sm font-roboto text-primary-dark/70 mb-1">
                      {currentContent.education.university}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-roboto text-primary-dark/50">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        {currentContent.education.status}
                      </span>
                      <span>{currentContent.education.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          {/* <div className="timeline-container mb-20">
            <h3 className="text-2xl font-poppins font-light text-primary-dark mb-10 text-center">
              {currentContent.experience.title}
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
              {currentContent.timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="text-sm font-roboto text-primary-blue mb-2">
                        {item.year}
                      </div>
                      <h4 className="font-poppins font-medium text-primary-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm font-roboto text-primary-dark/60 mb-2">
                        {item.company}
                      </p>
                      <p className="text-sm font-roboto text-primary-dark/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow-sm"></div>
                </div>
              ))}
            </div>
          </div> */}

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={handleContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-dark text-primary-white font-poppins font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span>{currentContent.cta}</span>
              <span className="material-icons text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
