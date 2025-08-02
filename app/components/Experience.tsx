'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

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

  const experiences = language === 'es' ? [
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
  ] : [
    {
      title: 'LVPA Intern',
      company: 'Greenlight Consulting',
      period: '2024',
      location: 'Costa Rica',
      type: 'Internship',
      description: 'Development of automation solutions using UiPath. Participation in digital transformation projects to optimize business processes.',
      achievements: [
        'Winner of UiPath programming hackathon',
        'Development of automation bots for business processes',
        'Collaboration on RPA (Robotic Process Automation) projects',
        'Learning agile methodologies in professional environment'
      ],
      technologies: ['UiPath', 'RPA', 'Process Automation', 'Business Analysis']
    }
  ];

  const education = language === 'es' ? [
    {
      title: 'Ingeniería de Software',
      institution: 'Universidad Fidélitas',
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
  ] : [
    {
      title: 'Software Engineering',
      institution: 'Universidad Fidélitas',
      period: '2022 - Present',
      status: 'In progress',
      description: 'Comprehensive training in software development, algorithms, data structures, databases and development methodologies.',
      highlights: [
        'Object-oriented programming',
        'Full stack web development',
        'Relational and non-relational databases',
        'Agile methodologies',
        'Software architecture'
      ]
    }
  ];

  const certifications = language === 'es' ? [
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
  ] : [
    {
      title: 'Hackathon Winner',
      issuer: 'UiPath Programming Contest',
      year: '2024',
      description: 'First place in programming competition using UiPath for process automation.'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Self-learning & Projects',
      year: '2023-2024',
      description: 'Self-taught development in modern web technologies and backend frameworks.'
    }
  ];

  const tabs = [
    { label: t('experience.tabExperience'), content: 'experience' },
    { label: t('experience.tabEducation'), content: 'education' },
    { label: t('experience.tabAchievements'), content: 'certifications' }
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
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-[#cfcfcf]/10 rounded-lg rotate-12 animate-float"></div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block font-heading">
              {t('experience.subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              {t('experience.title')} <span className="gradient-text">{t('experience.titleHighlight')}</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#2a2a2a] p-2 rounded-lg border border-[#cfcfcf]/10 shadow-lg">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-md transition-all duration-300 font-medium font-heading ${
                    activeTab === index
                      ? 'bg-[#00bfff] text-white shadow-lg hover-glow'
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
                    className="bg-[#2a2a2a] rounded-xl p-8 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-[#cfcfcf] mb-4">
                          <span className="text-[#00bfff] font-semibold text-lg font-heading">
                            {exp.company}
                          </span>
                          <span className="text-sm">•</span>
                          <span className="font-body">{exp.location}</span>
                          <span className="text-sm">•</span>
                          <span className="bg-[#00bfff]/20 text-[#00bfff] px-3 py-1 rounded-full text-sm font-medium font-heading">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#cfcfcf] font-medium font-heading">
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-[#cfcfcf] mb-6 leading-relaxed font-body">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-white font-semibold font-heading">
                        {language === 'es' ? 'Logros destacados:' : 'Key Achievements:'}
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <span className="text-[#00bfff] mt-2">▶</span>
                            <span className="text-[#cfcfcf] font-body">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-[#cfcfcf]/10">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="bg-[#00bfff]/10 text-[#00bfff] px-3 py-1 rounded-full text-sm border border-[#00bfff]/20 font-medium font-heading hover:bg-[#00bfff]/20 transition-colors duration-300"
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
                    className="bg-[#2a2a2a] rounded-xl p-8 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                          {edu.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-[#cfcfcf] mb-4">
                          <span className="text-[#00bfff] font-semibold text-lg font-heading">
                            {edu.institution}
                          </span>
                          <span className="text-sm">•</span>
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium font-heading">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#cfcfcf] font-medium font-heading">
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-[#cfcfcf] mb-6 leading-relaxed font-body">
                      {edu.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-white font-semibold font-heading">
                        {language === 'es' ? 'Áreas de estudio:' : 'Study Areas:'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <span className="text-[#00bfff]">✓</span>
                            <span className="text-[#cfcfcf] font-body">{highlight}</span>
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
                    className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] rounded-xl p-6 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift hover-glow shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#00bfff] rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl">🏆</span>
                      </div>
                      <span className="text-[#cfcfcf] text-sm font-medium font-heading">
                        {cert.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">
                      {cert.title}
                    </h3>
                    
                    <p className="text-[#00bfff] font-medium mb-4 font-heading">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-[#cfcfcf] text-sm leading-relaxed font-body">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Timeline Visual */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] rounded-2xl p-8 border border-[#cfcfcf]/10 max-w-4xl mx-auto hover:border-[#00bfff]/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white text-center mb-6 font-heading">
                {language === 'es' ? 'Mi Journey Profesional' : 'My Professional Journey'}
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00bfff] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <span className="text-[#cfcfcf] text-sm font-body">2022 - {language === 'es' ? 'Inicio Universidad' : 'Started University'}</span>
                </div>
                <div className="hidden md:block w-16 h-1 bg-[#00bfff] rounded-full"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00bfff] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <span className="text-white text-2xl">🏆</span>
                  </div>
                  <span className="text-[#cfcfcf] text-sm font-body">2024 - {language === 'es' ? 'Hackathón Winner' : 'Hackathon Winner'}</span>
                </div>
                <div className="hidden md:block w-16 h-1 bg-[#00bfff] rounded-full"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00bfff] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                  <span className="text-[#cfcfcf] text-sm font-body">2024 - {language === 'es' ? 'Pasantía' : 'Internship'}</span>
                </div>
                <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-[#00bfff] to-[#33ccff] rounded-full"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00bfff] to-[#33ccff] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg animate-pulse-custom">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <span className="text-[#cfcfcf] text-sm font-body">{language === 'es' ? 'Próximo Objetivo' : 'Next Goal'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;