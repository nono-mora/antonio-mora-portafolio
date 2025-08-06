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
          "I'm Antonio Mora, a passionate Software Engineer specializing in embedded systems, backend development, and firmware optimization.",
        description:
          "Currently pursuing my Software Engineering degree at Universidad Cenfotec, I bring practical experience in microcontrollers, full-stack development, and RPA automation. My approach combines efficient solutions with hardware debugging and real-time systems development.",
        passion:
          "I'm driven by the challenge of creating elegant solutions to complex problems, whether it's optimizing firmware for embedded devices or building scalable web applications.",
      },
      skills: {
        title: "Technical Expertise",
        categories: {
          languages: "Languages",
          embedded: "Embedded Systems",
          web: "Web Development",
          tools: "Tools & Methods",
        },
        items: {
          languages: ["C/C++", "Rust", "JavaScript", "Python", "C#", "Java"],
          embedded: [
            "Microcontrollers",
            "Firmware Development",
            "UART/I2C/SPI",
            "Real-time Systems",
            "Hardware Debugging",
          ],
          web: [
            "React.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "RESTful APIs",
          ],
          tools: [
            "Git",
            "Agile/Scrum",
            "TDD",
            "Visual Studio Code",
            "Performance Optimization",
          ],
        },
      },
      experience: {
        title: "Professional Journey",
        years: "1+",
        yearsLabel: "Years Experience",
        projects: "10+",
        projectsLabel: "Projects Completed",
        languages: "2",
        languagesLabel: "Languages Spoken",
      },
      timeline: [
        {
          year: "2024",
          title: "Technical Internship",
          company: "Greenlight Consulting",
          description:
            "Developed RPA automation solutions, reducing manual processing time by 20+ hours weekly",
        },
        {
          year: "2023",
          title: "Started Software Engineering",
          company: "Universidad Cenfotec",
          description:
            "Began my journey in Software Engineering with focus on embedded systems",
        },
        {
          year: "2022",
          title: "Customer Service",
          company: "Amazon",
          description:
            "Resolved complex technical issues while maintaining 95%+ satisfaction rate",
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
          "Soy Antonio Mora, un apasionado Ingeniero en Software especializado en sistemas embebidos, desarrollo backend y optimización de firmware.",
        description:
          "Actualmente cursando Ingeniería en Software en la Universidad Cenfotec, aporto experiencia práctica en microcontroladores, desarrollo full-stack y automatización RPA. Mi enfoque combina soluciones eficientes con debugging de hardware y desarrollo de sistemas en tiempo real.",
        passion:
          "Me motiva el desafío de crear soluciones elegantes a problemas complejos, ya sea optimizando firmware para dispositivos embebidos o construyendo aplicaciones web escalables.",
      },
      skills: {
        title: "Experiencia Técnica",
        categories: {
          languages: "Lenguajes",
          embedded: "Sistemas Embebidos",
          web: "Desarrollo Web",
          tools: "Herramientas y Métodos",
        },
        items: {
          languages: ["C/C++", "Rust", "JavaScript", "Python", "C#", "Java"],
          embedded: [
            "Microcontroladores",
            "Desarrollo de Firmware",
            "UART/I2C/SPI",
            "Sistemas en Tiempo Real",
            "Debugging de Hardware",
          ],
          web: [
            "React.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "APIs RESTful",
          ],
          tools: [
            "Git",
            "Agile/Scrum",
            "TDD",
            "Visual Studio Code",
            "Optimización de Rendimiento",
          ],
        },
      },
      experience: {
        title: "Trayectoria Profesional",
        years: "1+",
        yearsLabel: "Años de Experiencia",
        projects: "10+",
        projectsLabel: "Proyectos Completados",
        languages: "2",
        languagesLabel: "Idiomas",
      },
      timeline: [
        {
          year: "2024",
          title: "Pasantía Técnica",
          company: "Greenlight Consulting",
          description:
            "Desarrollé soluciones de automatización RPA, reduciendo tiempo de procesamiento manual en 20+ horas semanales",
        },
        {
          year: "2023",
          title: "Inicio en Ingeniería en Software",
          company: "Universidad Cenfotec",
          description:
            "Comencé mi camino en Ingeniería en Software con enfoque en sistemas embebidos",
        },
        {
          year: "2022",
          title: "Servicio al Cliente",
          company: "Amazon",
          description:
            "Resolví problemas técnicos complejos manteniendo 95%+ de satisfacción",
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
            <div className="bio-content space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <p className="text-lg font-roboto text-primary-dark leading-relaxed mb-4">
                  {currentContent.bio.intro}
                </p>
                <p className="text-base font-roboto text-primary-dark/70 leading-relaxed mb-4">
                  {currentContent.bio.description}
                </p>
                <p className="text-base font-roboto text-primary-dark/70 leading-relaxed">
                  {currentContent.bio.passion}
                </p>
              </div>

              {/* Languages Card */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="flex-1 text-center">
                    <span className="text-2xl mb-2 block">🇪🇸</span>
                    <p className="text-sm font-roboto text-primary-dark">
                      {currentContent.languages.spanish}
                    </p>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="flex-1 text-center">
                    <span className="text-2xl mb-2 block">🇺🇸</span>
                    <p className="text-sm font-roboto text-primary-dark">
                      {currentContent.languages.english}
                    </p>
                  </div>
                </div>
              </div> */}
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
