'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../lib/hooks';
import { useLanguageContext } from '../../components/providers/LanguageProvider';
import { Card, Section, Container, Heading, Text } from '../../components/ui';
import { SKILL_CATEGORIES, SOFT_SKILLS } from '../../lib/data';
import { Code, Palette, Database, Settings } from 'lucide-react';

// Skill Item Component
interface SkillItemProps {
  skill: typeof SKILL_CATEGORIES[0]['skills'][0];
  index: number;
  hoveredSkill: string | null;
  onHover: (name: string | null) => void;
}

function SkillItem({ skill, index, hoveredSkill, onHover }: SkillItemProps) {
  const isHovered = hoveredSkill === skill.name;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onHoverStart={() => onHover(skill.name)}
      onHoverEnd={() => onHover(null)}
      whileHover={{ scale: 1.02 }}
      className="group bg-primary-500 rounded-lg p-4 border border-secondary-500/10 hover:border-accent-500/30 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <motion.span 
          className="text-xl"
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {skill.icon}
        </motion.span>
        
        <div className="flex-1">
          <Heading 
            level={5} 
            size="md" 
            className="group-hover:text-accent-500 transition-colors duration-300"
          >
            {skill.name}
          </Heading>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7, 
              height: isHovered ? 'auto' : 'auto'
            }}
            transition={{ duration: 0.2 }}
          >
            <Text size="sm" color="secondary" className="mt-1">
              {skill.description}
            </Text>
          </motion.div>
        </div>
        
        <motion.div 
          className="w-2 h-2 bg-accent-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

// Skill Category Component
interface SkillCategoryProps {
  category: typeof SKILL_CATEGORIES[0];
  index: number;
  hoveredSkill: string | null;
  onHover: (name: string | null) => void;
}

function SkillCategory({ category, index, hoveredSkill, onHover }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card hover className="p-8 h-full">
        <div className="flex items-center space-x-3 mb-6">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
            <span className="text-2xl">{category.icon}</span>
          </div>
          <Heading level={4} size="lg">
            {category.title}
          </Heading>
        </div>
        
        <div className="space-y-3">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              index={skillIndex}
              hoveredSkill={hoveredSkill}
              onHover={onHover}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

// Soft Skill Component
interface SoftSkillProps {
  skill: typeof SOFT_SKILLS[0];
  index: number;
}

function SoftSkill({ skill, index }: SoftSkillProps) {
  const { language } = useLanguageContext();
  
  const name = language === 'es' ? skill.name : skill.nameEn;
  const description = language === 'es' ? skill.description : skill.descriptionEn;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card hover variant="gradient" className="p-6 h-full relative overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <div className="relative z-10 text-center">
          <motion.div 
            className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl">{skill.icon}</span>
          </motion.div>
          
          <Heading 
            level={4} 
            size="lg" 
            centered
            className="mb-3 group-hover:text-accent-500 transition-colors duration-300"
          >
            {name}
          </Heading>
          
          <Text size="sm" color="secondary" align="center">
            {description}
          </Text>
        </div>
      </Card>
    </motion.div>
  );
}

// Learning Philosophy Component
function LearningPhilosophy() {
  const { t } = useLanguageContext();
  
  const principles = [
    'Aprendizaje Continuo',
    'Mejora Constante',
    'Innovación'
  ];
  
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Card variant="gradient" className="max-w-4xl mx-auto relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, #00bfff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
        
        <div className="relative z-10">
          <motion.div 
            className="flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🚀</span>
            </div>
          </motion.div>
          
          <Heading level={3} size="xl" centered className="mb-4">
            {t.skills.philosophy.title}
          </Heading>
          
          <Text size="lg" color="secondary" align="center" className="mb-6 italic leading-relaxed">
            {t.skills.philosophy.quote}
          </Text>
          
          <div className="flex flex-wrap justify-center gap-4">
            {principles.map((principle, index) => (
              <motion.span
                key={principle}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)"
                }}
                className="bg-accent-500/20 text-accent-500 px-6 py-2 rounded-full text-sm border border-accent-500/30 font-medium font-heading hover:bg-accent-500/30 transition-colors duration-300 cursor-default"
              >
                {principle}
              </motion.span>
            ))}
          </div>
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
              radial-gradient(circle at 20% 80%, #00bfff 2px, transparent 2px),
              radial-gradient(circle at 80% 20%, #00bfff 2px, transparent 2px),
              radial-gradient(circle at 40% 40%, #cfcfcf 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-10 right-20 w-20 h-20 border border-accent-500/20 rounded-lg rotate-12"
        animate={{ 
          rotate: [12, 192, 12],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-16 h-16 bg-accent-500/10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </>
  );
}

// Main Skills Component
export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguageContext();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Section 
      ref={ref}
      id="skills" 
      background="gradient"
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
              {t.skills.subtitle}
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading level={2} size="2xl" centered className="mb-6">
                {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
              </Heading>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
                {t.skills.description}
              </Text>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Heading level={3} size="xl" centered className="mb-12">
                Stack Tecnológico
              </Heading>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {SKILL_CATEGORIES.map((category, index) => (
                <SkillCategory
                  key={category.id}
                  category={category}
                  index={index}
                  hoveredSkill={hoveredSkill}
                  onHover={setHoveredSkill}
                />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Heading level={3} size="xl" centered className="mb-12">
                {t.skills.softSkills}
              </Heading>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {SOFT_SKILLS.map((skill, index) => (
                <SoftSkill key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <LearningPhilosophy />
        </motion.div>
      </Container>
    </Section>
  );
}