'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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

  const technicalSkills = [
    {
      category: 'Frontend',
      icon: '🎨',
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'HTML5', icon: '🌐', description: 'Estructura semántica y accesible' },
        { name: 'CSS3', icon: '🎨', description: 'Flexbox, Grid, Animaciones' },
        { name: 'JavaScript', icon: '⚡', description: 'ES6+, Async/Await, DOM' },
        { name: 'React', icon: '⚛️', description: 'Hooks, Context, State Management' },
        { name: 'Next.js', icon: '🚀', description: 'SSR, SSG, App Router' },
        { name: 'TypeScript', icon: '📘', description: 'Tipado estático y interfaces' },
        { name: 'Tailwind CSS', icon: '💨', description: 'Utility-first CSS framework' }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Java', icon: '☕', description: 'Spring Boot, OOP, Clean Code' },
        { name: 'C#', icon: '🔷', description: '.NET Core, Entity Framework' },
        { name: 'C++', icon: '⚡', description: 'Algoritmos, Estructuras de datos' },
        { name: 'Node.js', icon: '🟢', description: 'Express, REST APIs, Middleware' },
        { name: 'Python', icon: '🐍', description: 'Scripts, Automatización' }
      ]
    },
    {
      category: 'Bases de Datos',
      icon: '🗄️',
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'SQL Server', icon: '🔵', description: 'Consultas complejas, Procedures' },
        { name: 'MongoDB', icon: '🍃', description: 'NoSQL, Aggregations, Atlas' },
        { name: 'MySQL', icon: '🐬', description: 'Relaciones, Optimización' },
        { name: 'PostgreSQL', icon: '🐘', description: 'Advanced SQL, JSON support' }
      ]
    },
    {
      category: 'Herramientas & DevOps',
      icon: '🛠️',
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Git', icon: '📚', description: 'Control de versiones, Branching' },
        { name: 'Docker', icon: '🐳', description: 'Containerización, Compose' },
        { name: 'Linux', icon: '🐧', description: 'Terminal, Scripts, Deployment' },
        { name: 'UiPath', icon: '🤖', description: 'RPA, Process Automation' }
      ]
    }
  ];

  const softSkills = [
    {
      name: 'Resolución de Problemas',
      nameEn: 'Problem Solving',
      description: 'Capacidad analítica para identificar y resolver problemas complejos',
      descriptionEn: 'Analytical ability to identify and solve complex problems',
      icon: '🧩',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Trabajo en Equipo',
      nameEn: 'Teamwork',
      description: 'Colaboración efectiva en entornos multidisciplinarios',
      descriptionEn: 'Effective collaboration in multidisciplinary environments',
      icon: '👥',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Aprendizaje Continuo',
      nameEn: 'Continuous Learning',
      description: 'Autodidacta con pasión por nuevas tecnologías',
      descriptionEn: 'Self-taught with passion for new technologies',
      icon: '📚',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Comunicación',
      nameEn: 'Communication',
      description: 'Habilidad para explicar conceptos técnicos de manera clara',
      descriptionEn: 'Ability to explain technical concepts clearly',
      icon: '💬',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Pensamiento Crítico',
      nameEn: 'Critical Thinking',
      description: 'Análisis objetivo y toma de decisiones fundamentadas',
      descriptionEn: 'Objective analysis and informed decision making',
      icon: '🎯',
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'Adaptabilidad',
      nameEn: 'Adaptability',
      description: 'Flexibilidad para trabajar con diferentes tecnologías',
      descriptionEn: 'Flexibility to work with different technologies',
      icon: '🔄',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, #00bfff 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, #00bfff 2px, transparent 2px),
            radial-gradient(circle at 40% 40%, #cfcfcf 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-20 h-20 border border-[#00bfff]/20 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#00bfff]/10 rounded-full animate-pulse-custom"></div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block font-heading">
              {t('skills.subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
            <p className="text-[#cfcfcf] max-w-2xl mx-auto mt-6 text-lg font-body">
              {t('skills.description')}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-12 mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12 font-heading">
              Stack Tecnológico
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {technicalSkills.map((category, categoryIndex) => (
                <div 
                  key={category.category}
                  className={`bg-[#2a2a2a] rounded-xl p-8 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift animate-fade-in-up`}
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white font-heading">{category.category}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className="group bg-[#1e1e1e] rounded-lg p-4 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <div className="flex-1">
                            <h5 className="text-white font-semibold font-heading group-hover:text-[#00bfff] transition-colors duration-300">
                              {skill.name}
                            </h5>
                            <p className="text-[#cfcfcf] text-sm font-body opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                              {skill.description}
                            </p>
                          </div>
                          <div className="w-2 h-2 bg-[#00bfff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-white text-center mb-12 font-heading">
              {t('skills.softSkills')}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`group bg-gradient-to-br from-[#2a2a2a] to-[#333333] rounded-xl p-6 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift hover-glow cursor-pointer animate-fade-in-up relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00bfff] transition-colors duration-300 font-heading">
                        {skill.name}
                      </h4>
                      
                      <p className="text-[#cfcfcf] text-sm leading-relaxed font-body">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-20 text-center">
            <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#cfcfcf]/10 max-w-4xl mx-auto hover:border-[#00bfff]/20 transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, #00bfff 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  {t('skills.philosophy')}
                </h3>
                
                <p className="text-[#cfcfcf] text-lg leading-relaxed mb-6 font-body italic">
                  {t('skills.philosophyQuote')}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-[#00bfff]/20 text-[#00bfff] px-6 py-2 rounded-full text-sm border border-[#00bfff]/30 font-medium font-heading hover:bg-[#00bfff]/30 transition-colors duration-300">
                    Aprendizaje Continuo
                  </span>
                  <span className="bg-[#00bfff]/20 text-[#00bfff] px-6 py-2 rounded-full text-sm border border-[#00bfff]/30 font-medium font-heading hover:bg-[#00bfff]/30 transition-colors duration-300">
                    Mejora Constante
                  </span>
                  <span className="bg-[#00bfff]/20 text-[#00bfff] px-6 py-2 rounded-full text-sm border border-[#00bfff]/30 font-medium font-heading hover:bg-[#00bfff]/30 transition-colors duration-300">
                    Innovación
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;