'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../lib/hooks';
import { useLanguageContext } from '../../components/providers/LanguageProvider';
import { Card, Section, Container, Heading, Text, Badge } from '../../components/ui';
import { EXPERIENCES, EDUCATION } from '../../lib/data';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar,
  ExternalLink,
  ChevronRight 
} from 'lucide-react';

// Tab Button Component
interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function TabButton({ isActive, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-md transition-all duration-300 font-medium font-heading ${
        isActive
          ? 'bg-accent-500 text-white shadow-lg hover-glow'
          : 'text-secondary-500 hover:text-white hover:bg-primary-600'
      }`}
    >
      {children}
    </button>
  );
}

// Experience Item Component
function ExperienceItem({ experience, index }: { experience: typeof EXPERIENCES[0], index: number }) {
  const { language } = useLanguageContext();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card hover className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div className="flex-1">
            <Heading level={3} size="lg" className="mb-2">
              {experience.title}
            </Heading>
            
            <div className="flex flex-wrap items-center gap-4 text-secondary-500 mb-4">
              <div className="flex items-center space-x-2">
                <Briefcase size={16} className="text-accent-500" />
                <Text size="lg" color="accent" weight="semibold">
                  {experience.company}
                </Text>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-secondary-500" />
                <Text size="base" color="secondary">
                  {experience.location}
                </Text>
              </div>
              
              <Badge 
                variant={experience.type === 'internship' ? 'accent' : 'default'}
                size="sm"
              >
                {experience.type === 'internship' 
                  ? (language === 'es' ? 'Pasantía' : 'Internship')
                  : experience.type
                }
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-secondary-500">
            <Calendar size={16} />
            <Text size="base" color="secondary" weight="medium">
              {experience.period}
            </Text>
          </div>
        </div>

        <Text size="base" color="secondary" className="mb-6 leading-relaxed">
          {experience.description}
        </Text>

        <div className="space-y-4">
          <Heading level={4} size="md" className="text-white">
            {language === 'es' ? 'Logros destacados:' : 'Key Achievements:'}
          </Heading>
          
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start space-x-3">
                <ChevronRight size={16} className="text-accent-500 mt-1 flex-shrink-0" />
                <Text size="base" color="secondary">
                  {achievement}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-6 border-t border-secondary-500/10">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-accent-500/10 text-accent-500 px-3 py-1 rounded-full text-sm border border-accent-500/20 font-medium font-heading hover:bg-accent-500/20 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Education Item Component
function EducationItem({ education, index }: { education: typeof EDUCATION[0], index: number }) {
  const { language } = useLanguageContext();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card hover className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div className="flex-1">
            <Heading level={3} size="lg" className="mb-2">
              {education.title}
            </Heading>
            
            <div className="flex flex-wrap items-center gap-4 text-secondary-500 mb-4">
              <div className="flex items-center space-x-2">
                <GraduationCap size={16} className="text-accent-500" />
                <Text size="lg" color="accent" weight="semibold">
                  {education.institution}
                </Text>
              </div>
              
              <Badge 
                variant={education.status === 'ongoing' ? 'success' : 'accent'}
                size="sm"
              >
                {education.status === 'ongoing' 
                  ? (language === 'es' ? 'En curso' : 'In progress')
                  : (language === 'es' ? 'Completado' : 'Completed')
                }
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-secondary-500">
            <Calendar size={16} />
            <Text size="base" color="secondary" weight="medium">
              {education.period}
            </Text>
          </div>
        </div>

        <Text size="base" color="secondary" className="mb-6 leading-relaxed">
          {education.description}
        </Text>

        <div className="space-y-4">
          <Heading level={4} size="md" className="text-white">
            {language === 'es' ? 'Áreas de estudio:' : 'Study Areas:'}
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {education.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                <Text size="base" color="secondary">
                  {highlight}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Achievements Component
function Achievements() {
  const { language } = useLanguageContext();
  
  const achievements = [
    {
      title: language === 'es' ? 'Ganador de Hackathón' : 'Hackathon Winner',
      issuer: 'UiPath Programming Contest',
      year: '2024',
      description: language === 'es' 
        ? 'Primer lugar en competencia de programación utilizando UiPath para automatización de procesos.'
        : 'First place in programming competition using UiPath for process automation.',
      icon: '🏆'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Self-learning & Projects',
      year: '2023-2024',
      description: language === 'es'
        ? 'Desarrollo autodidacta en tecnologías web modernas y frameworks de backend.'
        : 'Self-taught development in modern web technologies and backend frameworks.',
      icon: '🎯'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card variant="gradient" hover className="p-6 h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">{achievement.icon}</span>
              </div>
              <Badge variant="default" size="sm">
                {achievement.year}
              </Badge>
            </div>
            
            <Heading level={3} size="lg" className="mb-2">
              {achievement.title}
            </Heading>
            
            <Text size="base" color="accent" weight="medium" className="mb-4">
              {achievement.issuer}
            </Text>
            
            <Text size="sm" color="secondary" className="leading-relaxed">
              {achievement.description}
            </Text>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

// Timeline Component
function Timeline() {
  const { language } = useLanguageContext();
  
  const timelineItems = [
    {
      year: '2022',
      title: language === 'es' ? 'Inicio Universidad' : 'Started University',
      icon: '🎓'
    },
    {
      year: '2024',
      title: language === 'es' ? 'Hackathón Winner' : 'Hackathon Winner',
      icon: '🏆'
    },
    {
      year: '2024',
      title: language === 'es' ? 'Pasantía' : 'Internship',
      icon: '💼'
    },
    {
      year: language === 'es' ? 'Futuro' : 'Future',
      title: language === 'es' ? 'Próximo Objetivo' : 'Next Goal',
      icon: '🚀',
      isNext: true
    }
  ];

  return (
    <motion.div 
      className="mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Card variant="gradient" className="max-w-4xl mx-auto">
        <Heading level={3} size="xl" centered className="mb-6">
          {language === 'es' ? 'Mi Journey Profesional' : 'My Professional Journey'}
        </Heading>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {timelineItems.map((item, index) => (
            <React.Fragment key={item.year}>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "backOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg ${
                  item.isNext 
                    ? 'bg-gradient-to-r from-accent-500 to-accent-700 animate-pulse' 
                    : 'bg-accent-500'
                }`}>
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
                <Text size="xs" color="secondary" className="font-medium">
                  {item.year}
                </Text>
                <Text size="xs" color="secondary">
                  {item.title}
                </Text>
              </motion.div>
              
              {index < timelineItems.length - 1 && (
                <motion.div 
                  className={`hidden md:block h-1 rounded-full ${
                    index === timelineItems.length - 2 
                      ? 'w-16 bg-gradient-to-r from-accent-500 to-accent-700' 
                      : 'w-16 bg-accent-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

// Main Experience Component
export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguageContext();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: t.experience.tabs.experience, content: 'experience' },
    { label: t.experience.tabs.education, content: 'education' },
    { label: t.experience.tabs.achievements, content: 'achievements' }
  ];

  return (
    <Section ref={ref} id="experience" background="primary" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-accent-500/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-accent-500/5 rotate-45 animate-bounce" />
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-secondary-500/10 rounded-lg rotate-12 animate-float" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span 
              className="text-accent-500 text-sm font-semibold tracking-widest uppercase mb-4 block font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              {t.experience.subtitle}
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading level={2} size="2xl" centered className="mb-6">
                {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
              </Heading>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-accent-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Tab Navigation */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-primary-600 p-2 rounded-lg border border-secondary-500/10 shadow-lg">
              {tabs.map((tab, index) => (
                <TabButton
                  key={tab.label}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </TabButton>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {EXPERIENCES.map((exp, index) => (
                    <ExperienceItem key={exp.id} experience={exp} index={index} />
                  ))}
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {EDUCATION.map((edu, index) => (
                    <EducationItem key={edu.id} education={edu} index={index} />
                  ))}
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="achievements"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Achievements />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Timeline */}
          <Timeline />
        </motion.div>
      </Container>
    </Section>
  );
}