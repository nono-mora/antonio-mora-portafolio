'use client';

import React, { useEffect, useState, useRef } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const experiences = [
    {
      title: 'Pasante de LVPA',
      company: 'Greenlight Consulting',
      period: '2024',
      location: 'Costa Rica',
      type: 'Pasantía',
      description: 'Desarrollo de soluciones de automatización utilizando UiPath. Participación en proyectos de transformación digital para optimizar procesos empresariales.',
      achievements: [
        'Ganador de hackathón de programación con UiPath',
        'Desarrollo de bots de automatización para procesos empresariales',
        'Colaboración en proyectos de RPA (Robotic Process Automation)',
        'Aprendizaje de metodologías ágiles en entorno profesional'
      ],
      technologies: ['UiPath', 'RPA', 'Process Automation', 'Business Analysis']
    }
  ];

  const education = [
    {
      title: 'Ingeniería de Software',
      institution: 'Universidad [Nombre]',
      period: '2022 - Presente',
      status: 'En curso',
      description: 'Formación integral en desarrollo de software, algoritmos, estructuras de datos, bases de datos y metodologías de desarrollo.',
      highlights: [
        'Programación orientada a objetos',
        'Desarrollo web full stack',
        'Bases de datos relacionales y no relacionales',
        'Metodologías ágiles',
        'Arquitectura de software'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Hackathón Winner',
      issuer: 'UiPath Programming Contest',
      year: '2024',
      description: 'Primer lugar en competencia de programación utilizando UiPath para automatización de procesos.'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Self-learning & Projects',
      year: '2023-2024',
      description: 'Desarrollo autodidacta en tecnologías web modernas y frameworks de backend.'
    }
  ];

  const tabs = [
    { label: 'Experiencia', content: 'experience' },
    { label: 'Educación', content: 'education' },
    { label: 'Logros', content: 'certifications' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-20 bg-[#1e1e1e] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-[#00bfff]/10 rounded-full animate-pulse-custom"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-[#00bfff]/5 rotate-45 animate-bounce-custom"></div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Mi Trayectoria
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experiencia & <span className="gradient-text">Educación</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#2a2a2a] p-2 rounded-lg border border-[#cfcfcf]/10">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-md transition-all duration-300 font-medium ${
                    activeTab === index
                      ? 'bg-[#00bfff] text-white shadow-lg'
                      : 'text-[#cfcfcf] hover:text-white hover:bg-[#333333]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* Experience Tab */}
            {activeTab === 0 && (
              <div className="space-y-8 animate-fade-in-up">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="bg-[#2a2a2a] rounded-xl p-8 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-[#cfcfcf] mb-4">
                          <span className="text-[#00bfff] font-semibold text-lg">
                            {exp.company}
                          </span>
                          <span className="text-sm">•</span>
                          <span>{exp.location}</span>
                          <span className="text-sm">•</span>
                          <span className="bg-[#00bfff]/20 text-[#00bfff] px-3 py-1 rounded-full text-sm">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#cfcfcf] font-medium">
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-[#cfcfcf] mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">Logros destacados:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <span className="text-[#00bfff] mt-2">▶</span>
                            <span className="text-[#cfcfcf]">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-[#cfcfcf]/10">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="bg-[#00bfff]/10 text-[#00bfff] px-3 py-1 rounded-full text-sm border border-[#00bfff]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 1 && (
              <div className="space-y-8 animate-fade-in-up">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-[#2a2a2a] rounded-xl p-8 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-[#cfcfcf] mb-4">
                          <span className="text-[#00bfff] font-semibold text-lg">
                            {edu.institution}
                          </span>
                          <span className="text-sm">•</span>
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#cfcfcf] font-medium">
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-[#cfcfcf] mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-white font-semibold">Áreas de estudio:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <span className="text-[#00bfff]">✓</span>
                            <span className="text-[#cfcfcf]">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 2 && (
              <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] rounded-xl p-6 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift hover-glow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#00bfff] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl">🏆</span>
                      </div>
                      <span className="text-[#cfcfcf] text-sm font-medium">
                        {cert.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-[#00bfff] font-medium mb-4">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-[#cfcfcf] text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;