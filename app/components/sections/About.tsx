'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../lib/hooks';
import { useLanguageContext } from '../../components/providers/LanguageProvider';
import { Card, Section, Container, Heading, Text } from '../../components/ui';
import { PERSONAL_INFO } from '../../lib/data';
import { MapPin, Briefcase, Target, User } from 'lucide-react';

// Personal Info Card Component
function PersonalInfoCard() {
  const { t } = useLanguageContext();
  
  const personalInfo = [
    { 
      icon: User, 
      label: t.about.info.name, 
      value: PERSONAL_INFO.name 
    },
    { 
      icon: MapPin, 
      label: t.about.info.location, 
      value: t.about.info.values.location 
    },
    { 
      icon: Briefcase, 
      label: t.about.info.status, 
      value: t.about.info.values.status 
    },
    { 
      icon: Target, 
      label: t.about.info.focus, 
      value: t.about.info.values.focus 
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {personalInfo.map((info, index) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card hover className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-accent-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <Text size="sm" color="secondary" className="font-medium mb-1">
                    {info.label}
                  </Text>
                  <Text size="base" color="primary" weight="semibold">
                    {info.value}
                  </Text>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

// Profile Image Component
function ProfileImage() {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "backOut" }}
    >
      <div className="w-80 h-80 mx-auto bg-gradient-to-br from-accent-500/20 to-secondary-500/10 rounded-2xl flex items-center justify-center border border-accent-500/20 hover-glow transition-all duration-300 shadow-xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(45deg, #00bfff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        {/* Main icon */}
        <motion.div 
          className="text-accent-500 text-6xl relative z-10"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          👨‍💻
        </motion.div>
      </div>
      
      {/* Floating badges */}
      <motion.div 
        className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center shadow-lg"
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <span className="text-white text-xl">🚀</span>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <span className="text-primary-500 text-lg">⚡</span>
      </motion.div>
    </motion.div>
  );
}

// Story Component
function Story() {
  const { t, language } = useLanguageContext();
  
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Heading level={3} size="xl" className="mb-4">
        {t.about.story.title}
      </Heading>
      
      <div className="space-y-4 text-secondary-500 leading-relaxed font-body text-lg">
        <Text size="lg" color="secondary">
          {t.about.story.paragraphs[0]}
        </Text>
        
        <Text size="lg" color="secondary">
          {t.about.story.paragraphs[1]}
          <span className="text-accent-500 font-semibold"> {t.about.story.company}</span>
          {t.about.story.paragraphs[2]}
        </Text>
        
        <Text size="lg" color="secondary">
          {t.about.story.paragraphs[3]}
        </Text>
      </div>
    </motion.div>
  );
}

// Interests Component
function Interests() {
  const { t, language } = useLanguageContext();
  
  const interests = language === 'es' ? [
    'Desarrollo de Software',
    'Arquitectura de Sistemas', 
    'Bases de Datos',
    'Algoritmos y Estructuras de Datos',
    'DevOps y CI/CD',
    'Machine Learning'
  ] : [
    'Software Development',
    'System Architecture',
    'Databases', 
    'Algorithms & Data Structures',
    'DevOps & CI/CD',
    'Machine Learning'
  ];

  return (
    <div>
      <Heading level={3} size="xl" className="mb-6">
        {t.about.interests}
      </Heading>
      
      <div className="grid grid-cols-2 gap-3">
        {interests.map((interest, index) => (
          <motion.div
            key={interest}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-accent-500/10 to-accent-500/5 border border-accent-500/20 rounded-lg p-3 text-center hover:from-accent-500/20 hover:to-accent-500/10 hover:border-accent-500/40 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Text size="sm" color="secondary" weight="medium">
              {interest}
            </Text>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Quote Component
function Quote() {
  const { t } = useLanguageContext();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Card className="border-l-4 border-accent-500 relative">
        <div className="absolute top-4 left-4 text-accent-500 text-4xl opacity-20">
          "
        </div>
        <Text size="lg" color="secondary" className="italic pl-8 leading-relaxed">
          {t.about.quote}
        </Text>
        <div className="text-right mt-4">
          <Text size="base" color="accent" weight="semibold" className="font-heading">
            - {PERSONAL_INFO.name}
          </Text>
        </div>
      </Card>
    </motion.div>
  );
}

// Tech Stack Preview Component
function TechStackPreview() {
  const techStack = [
    'Java', 'C#', 'JavaScript', 'React', 
    'Node.js', 'SQL Server', 'MongoDB', 'Git'
  ];

  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Card variant="gradient" className="max-w-4xl mx-auto">
        <Heading level={3} size="xl" className="mb-4">
          Stack Tecnológico Principal
        </Heading>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "backOut"
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)"
              }}
              className="bg-accent-500/20 text-accent-500 px-4 py-2 rounded-full text-sm border border-accent-500/30 font-medium font-heading hover:bg-accent-500/30 transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

// Background Elements Component
function BackgroundElements() {
  return (
    <>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #00bfff 1px, transparent 1px),
              linear-gradient(0deg, #00bfff 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-10 right-20 w-32 h-32 border border-accent-500/10 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-20 h-20 bg-accent-500/5 rotate-45"
        animate={{ 
          rotate: [45, 225, 45],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </>
  );
}

// Main About Component
export default function About() {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguageContext();

  return (
    <Section 
      ref={ref}
      id="about" 
      background="secondary"
      className="relative"
    >
      <BackgroundElements />
      
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
              {t.about.subtitle}
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading level={2} size="2xl" centered className="mb-6">
                {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
              </Heading>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-accent-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Profile & Info */}
            <div className="space-y-8">
              <ProfileImage />
              <PersonalInfoCard />
            </div>

            {/* Right Column - Story & Interests */}
            <div className="space-y-8">
              <Story />
              <Interests />
              <Quote />
            </div>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-20">
            <TechStackPreview />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}