'use client';

import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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

  const skillCategories = [
     {
    //   title: 'Frontend',
    //   icon: '🎨',
    //   skills: [
    //     { name: 'HTML5', level: 90, experience: '3+ años' },
    //     { name: 'CSS3', level: 85, experience: '3+ años' },
    //     { name: 'JavaScript', level: 88, experience: '2+ años' },
    //     { name: 'React', level: 75, experience: '1+ años' },
    //     { name: 'Next.js', level: 70, experience: '6+ meses' }
    //   ]
    // },
    // {
    //   title: 'Backend',
    //   icon: '⚙️',
    //   skills: [
    //     { name: 'Java', level: 85, experience: '2+ años' },
    //     { name: 'C#', level: 80, experience: '1+ años' },
    //     { name: 'C++', level: 75, experience: '1+ años' },
    //     { name: 'C', level: 70, experience: '1+ años' },
    //     { name: 'Node.js', level: 65, experience: '6+ meses' }
    //   ]
    // },
    // {
    //   title: 'Bases de Datos',
    //   icon: '🗄️',
    //   skills: [
    //     { name: 'SQL Server', level: 80, experience: '1+ años' },
    //     { name: 'MongoDB', level: 75, experience: '1+ años' },
    //     { name: 'MySQL', level: 78, experience: '1+ años' },
    //     { name: 'PostgreSQL', level: 70, experience: '6+ meses' }
    //   ]
    // },
    // {
    //   title: 'Herramientas & Otros',
    //   icon: '🛠️',
    //   skills: [
    //     { name: 'Git', level: 85, experience: '2+ años' },
    //     { name: 'UiPath', level: 90, experience: '1+ años' },
    //     { name: 'Docker', level: 60, experience: '3+ meses' },
    //     { name: 'Linux', level: 70, experience: '1+ años' },
    //     { name: 'Agile/Scrum', level: 75, experience: '1+ años' }
    //   ]
     }
  ];

  const softSkills = [
    {
      name: 'Resolución de Problemas',
      description: 'Capacidad analítica para identificar y resolver problemas complejos',
      icon: '🧩'
    },
    {
      name: 'Trabajo en Equipo',
      description: 'Colaboración efectiva en entornos multidisciplinarios',
      icon: '👥'
    },
    {
      name: 'Aprendizaje Continuo',
      description: 'Autodidacta con passion por nuevas tecnologías',
      icon: '📚'
    },
    {
      name: 'Comunicación',
      description: 'Habilidad para explicar conceptos técnicos de manera clara',
      icon: '💬'
    },
    {
      name: 'Pensamiento Crítico',
      description: 'Análisis objetivo y toma de decisiones fundamentadas',
      icon: '🎯'
    },
    {
      name: 'Adaptabilidad',
      description: 'Flexibilidad para trabajar con diferentes tecnologías y metodologías',
      icon: '🔄'
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

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Mi Stack Tecnológico
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Habilidades & <span className="gradient-text">Competencias</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
            <p className="text-[#cfcfcf] max-w-2xl mx-auto mt-6 text-lg">
              Un conjunto diverso de tecnologías y habilidades técnicas que me permiten 
              crear soluciones completas desde el frontend hasta el backend.
            </p>
          </div>

            {/* Technical Skills */}
            {/* 
            <div className="space-y-12 mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              Habilidades Técnicas
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`bg-[#2a2a2a] rounded-xl p-8 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
                </div>
                
                <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                  key={skill.name}
                  className="group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-[#cfcfcf] text-sm">{skill.experience}</span>
                  </div>
                  
                  <div className="w-full bg-[#1e1e1e] rounded-full h-2 overflow-hidden">
                    <div 
                    className={`h-full bg-gradient-to-r from-[#00bfff] to-[#33ccff] rounded-full transition-all duration-1000 ease-out ${
                      hoveredSkill === skill.name ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                    }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-end">
                    <span className="text-[#00bfff] text-sm font-medium">
                    {skill.level}%
                    </span>
                  </div>
                  </div>
                ))}
                </div>
              </div>
              ))}
            </div>
            </div>
            */}

          {/* Soft Skills */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              Habilidades Interpersonales
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`group bg-gradient-to-br from-[#2a2a2a] to-[#333333] rounded-xl p-6 border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift hover-glow cursor-pointer animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#00bfff]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00bfff]/30 transition-colors duration-300">
                      <span className="text-2xl">{skill.icon}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00bfff] transition-colors duration-300">
                      {skill.name}
                    </h4>
                    
                    <p className="text-[#cfcfcf] text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-20 text-center">
            <div className="bg-[#2a2a2a] rounded-2xl p-8 border border-[#cfcfcf]/10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🚀</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Filosofía de Aprendizaje
              </h3>
              
              <p className="text-[#cfcfcf] text-lg leading-relaxed mb-6">
                "La tecnología evoluciona constantemente, y mi compromiso es evolucionar con ella. 
                Cada proyecto es una oportunidad de aprender algo nuevo, cada error es una lección, 
                y cada éxito es un paso hacia la siguiente meta."
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-[#00bfff]/20 text-[#00bfff] px-4 py-2 rounded-full text-sm border border-[#00bfff]/30">
                  Aprendizaje Continuo
                </span>
                <span className="bg-[#00bfff]/20 text-[#00bfff] px-4 py-2 rounded-full text-sm border border-[#00bfff]/30">
                  Mejora Constante
                </span>
                <span className="bg-[#00bfff]/20 text-[#00bfff] px-4 py-2 rounded-full text-sm border border-[#00bfff]/30">
                  Innovación
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;