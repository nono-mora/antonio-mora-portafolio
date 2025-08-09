"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TimelineSection = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [selectedItem, setSelectedItem] = useState(null);
  const sectionRef = useRef();

  const content = {
    en: {
      title: "Professional Journey",
      subtitle: "My career path and experience through the years",
      viewDetails: "View Details",
      close: "Close",
      keyAchievements: "Key Achievements",
      technologiesSkills: "Technologies & Skills",
      timeline: [
        {
          year: "2022",
          period: "Jan - May 2022",
          title: "Banking Agent",
          company: "Sykes Enterprises",
          type: "Full-time",
          description:
            "Managed bank accounts, identity verification and processing of 30+ daily transactions. Implemented security procedures and regulatory compliance in financial operations.",
          achievements: [
            "Processed 30+ financial transactions daily",
            "Maintained strict security and compliance standards",
            "Provided excellent customer service in banking operations",
            "Handled identity verification procedures",
          ],
          technologies: [
            "Banking Systems",
            "Financial Operations",
            "Compliance",
            "Customer Service",
          ],
          icon: "account_balance",
          color: "from-green-500 to-emerald-500",
        },
        {
          year: "2022",
          period: "Jun - Dec 2022",
          title: "Vendor Support Specialist",
          company: "Amazon",
          type: "Full-time",
          description:
            "Provided technical support to 30+ daily vendors on Amazon Marketplace platform. Resolved complex catalog, inventory, listing and policy compliance issues.",
          achievements: [
            "Supported 30+ vendors daily with technical issues",
            "Maintained 95%+ customer satisfaction index",
            "Resolved complex catalog and inventory problems",
            "Ensured policy compliance across vendor accounts",
          ],
          technologies: [
            "Amazon Marketplace",
            "Technical Support",
            "Customer Service",
            "Problem Solving",
          ],
          icon: "support_agent",
          color: "from-orange-500 to-amber-500",
        },
        {
          year: "2023",
          period: "Jan 2023 - Present",
          title: "Technical Internship",
          company: "Greenlight Consulting",
          type: "Internship",
          description:
            "Developed and implemented RPA process automation, reducing manual processing time. Executed QA testing, technical documentation, and automated bot deployment.",
          achievements: [
            "Implemented RPA automation solutions",
            "Generated 20+ weekly hours of operational savings",
            "Created comprehensive technical documentation",
            "Executed end-to-end QA testing procedures",
          ],
          technologies: [
            "RPA Tools",
            "Process Automation",
            "QA Testing",
            "Technical Documentation",
          ],
          icon: "engineering",
          color: "from-blue-500 to-cyan-500",
        },
      ],
    },
    es: {
      title: "Trayectoria Profesional",
      subtitle: "Mi camino profesional y experiencia a través de los años",
      viewDetails: "Ver Detalles",
      close: "Cerrar",
      keyAchievements: "Logros Clave",
      technologiesSkills: "Tecnologías y Habilidades",
      timeline: [
        {
          year: "2022",
          period: "Ene - May 2022",
          title: "Agente de Banca",
          company: "Sykes Enterprises",
          type: "Tiempo Completo",
          description:
            "Gestioné cuentas bancarias, verificación de identidad y procesamiento de 30+ transacciones diarias. Implementé procedimientos de seguridad y cumplimiento normativo en operaciones financieras.",
          achievements: [
            "Procesé 30+ transacciones financieras diarias",
            "Mantuve estrictos estándares de seguridad y cumplimiento",
            "Brindé excelente servicio al cliente en operaciones bancarias",
            "Manejé procedimientos de verificación de identidad",
          ],
          technologies: [
            "Sistemas Bancarios",
            "Operaciones Financieras",
            "Cumplimiento",
            "Servicio al Cliente",
          ],
          icon: "account_balance",
          color: "from-green-500 to-emerald-500",
        },
        {
          year: "2022",
          period: "Jun - Dic 2022",
          title: "Vendor Support Specialist",
          company: "Amazon",
          type: "Tiempo Completo",
          description:
            "Brindé soporte técnico a 30+ vendedores diarios en la plataforma Amazon Marketplace. Resolví problemas complejos de catálogo, inventario, listados y cumplimiento de políticas.",
          achievements: [
            "Asistí a 30+ vendedores diarios con problemas técnicos",
            "Mantuve índice de satisfacción del 95%+",
            "Resolví problemas complejos de catálogo e inventario",
            "Aseguré cumplimiento de políticas en cuentas de vendedores",
          ],
          technologies: [
            "Amazon Marketplace",
            "Soporte Técnico",
            "Servicio al Cliente",
            "Resolución de Problemas",
          ],
          icon: "support_agent",
          color: "from-orange-500 to-amber-500",
        },
        {
          year: "2023",
          period: "Ene 2023 - Presente",
          title: "Pasantía Técnica",
          company: "Greenlight Consulting",
          type: "Pasantía",
          description:
            "Desarrollé e implementé automatización de procesos mediante RPA, reduciendo tiempo de procesamiento manual. Ejecuté pruebas de QA, documentación técnica y despliegue automatizado de bots.",
          achievements: [
            "Implementé soluciones de automatización RPA",
            "Generé 20+ horas semanales de ahorro operativo",
            "Creé documentación técnica completa",
            "Ejecuté procedimientos de pruebas QA de extremo a extremo",
          ],
          technologies: [
            "Herramientas RPA",
            "Automatización de Procesos",
            "Pruebas QA",
            "Documentación Técnica",
          ],
          icon: "engineering",
          color: "from-blue-500 to-cyan-500",
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
        ".timeline-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-title",
            start: "top 80%",
          },
        }
      );

      // Timeline line animation
      gsap.fromTo(
        ".timeline-progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
          },
        }
      );

      // Timeline items animation
      gsap.fromTo(
        ".timeline-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
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

  const openDetails = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setSelectedItem(null);
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
        id="timeline"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-primary-white py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="timeline-title text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-poppins font-light text-primary-dark mb-4 tracking-tight">
              {currentContent.title}
            </h2>
            <p className="text-xl font-roboto font-light text-primary-dark/70 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Timeline Container */}
          <div className="timeline-container relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              {/* Timeline Line */}
              <div className="relative mb-16">
                <div className="h-1 bg-gray-200 w-full rounded-full"></div>
                <div
                  className="timeline-progress absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 via-orange-500 to-blue-500 rounded-full origin-left"
                  style={{ transformOrigin: "left center" }}
                ></div>

                {/* Timeline dots */}
                {currentContent.timeline.map((item, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary-blue rounded-full shadow-lg"
                    style={{
                      left: `${
                        (index + 1) *
                        (100 / (currentContent.timeline.length + 1))
                      }%`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-3 gap-8">
                {currentContent.timeline.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                    onClick={() => openDetails(item)}
                  >
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-roboto font-medium shadow-lg mb-4">
                      <span className="material-icons text-sm">
                        {item.icon}
                      </span>
                      {item.year}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-poppins font-medium text-primary-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-roboto text-primary-blue mb-1 font-medium">
                      {item.company}
                    </p>
                    <p className="text-xs font-roboto text-primary-dark/50 mb-4">
                      {item.period} • {item.type}
                    </p>
                    <p className="text-sm font-roboto text-primary-dark/70 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Technologies Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 2).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-roboto text-primary-dark/60 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 2 && (
                        <span className="text-xs font-roboto text-primary-dark/60 bg-gray-100 px-3 py-1 rounded-full">
                          +{item.technologies.length - 2}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button className="flex items-center gap-2 text-sm font-roboto font-medium text-primary-blue hover:text-blue-600 transition-colors">
                      <span>{currentContent.viewDetails}</span>
                      <span className="material-icons text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {currentContent.timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline line for mobile */}
                  {index < currentContent.timeline.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200"></div>
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 w-4 h-4 bg-white border-4 border-primary-blue rounded-full shadow-lg z-10"></div>

                  {/* Card */}
                  <div
                    className="timeline-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer ml-12"
                    onClick={() => openDetails(item)}
                  >
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-roboto font-medium shadow-lg mb-4">
                      <span className="material-icons text-sm">
                        {item.icon}
                      </span>
                      {item.year}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-poppins font-medium text-primary-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-roboto text-primary-blue mb-1 font-medium">
                      {item.company}
                    </p>
                    <p className="text-xs font-roboto text-primary-dark/50 mb-4">
                      {item.period} • {item.type}
                    </p>
                    <p className="text-sm font-roboto text-primary-dark/70 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Technologies Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-roboto text-primary-dark/60 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-xs font-roboto text-primary-dark/60 bg-gray-100 px-3 py-1 rounded-full">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button className="flex items-center gap-2 text-sm font-roboto font-medium text-primary-blue hover:text-blue-600 transition-colors">
                      <span>{currentContent.viewDetails}</span>
                      <span className="material-icons text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/95 backdrop-blur-md"
          onClick={closeDetails}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDetails}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              <span className="material-icons text-primary-dark">close</span>
            </button>

            {/* Modal Header */}
            <div
              className={`relative h-32 bg-gradient-to-br ${selectedItem.color} p-8`}
            >
              <div className="absolute bottom-6 left-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <span className="material-icons text-3xl">
                    {selectedItem.icon}
                  </span>
                </div>
              </div>
              <div className="absolute top-6 left-8">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-roboto font-medium">
                  {selectedItem.year}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-poppins font-medium text-primary-dark mb-2">
                  {selectedItem.title}
                </h2>
                <p className="text-lg font-roboto text-primary-blue mb-1">
                  {selectedItem.company}
                </p>
                <p className="text-sm font-roboto text-primary-dark/50">
                  {selectedItem.period} • {selectedItem.type}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-base font-roboto text-primary-dark/80 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mb-6">
                <h3 className="text-sm font-poppins font-medium text-primary-dark uppercase tracking-wide mb-4">
                  {currentContent.keyAchievements}
                </h3>
                <ul className="space-y-3">
                  {selectedItem.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-icons text-green-500 text-sm mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm font-roboto text-primary-dark/70">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-sm font-poppins font-medium text-primary-dark uppercase tracking-wide mb-4">
                  {currentContent.technologiesSkills}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary-dark text-primary-white font-roboto text-sm rounded-full"
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
    </>
  );
};

export default TimelineSection;
