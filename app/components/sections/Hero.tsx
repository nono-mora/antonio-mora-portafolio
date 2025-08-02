'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../../components/providers/LanguageProvider';
import { Button, Section, Container, Heading, Text } from '../../components/ui';
import { PERSONAL_INFO } from '../../lib/data';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Background Pattern Component
function BackgroundPattern() {
  return (
    <>
      {/* Geometric shapes */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #00bfff 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #00bfff 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-500/20 rotate-45"
        animate={{ 
          rotate: [45, 225, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-16 w-16 h-16 bg-accent-500/10 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-secondary-500/20 rotate-12"
        animate={{ 
          rotate: [12, 192, 12],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-500 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </>
  );
}

// Dynamic Role Component
function DynamicRole() {
  const { t } = useLanguageContext();
  const [currentRole, setCurrentRole] = useState(0);
  const roles = t.hero.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="h-16 mb-8 flex items-center justify-center">
      <div className="text-xl md:text-2xl lg:text-3xl text-secondary-500 font-light font-body">
        <span className="inline-block min-w-[300px] text-center relative">
          {roles.map((role, index) => (
            <motion.span
              key={role}
              className="absolute inset-0 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: index === currentRole ? 1 : 0,
                y: index === currentRole ? 0 : 20
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {role}
            </motion.span>
          ))}
        </span>
      </div>
    </div>
  );
}

// Stats Component
function Stats() {
  const { t } = useLanguageContext();
  
  const stats = [
    {
      value: '5+',
      label: t.hero.stats.languages,
      delay: 0.2
    },
    {
      value: '10+',
      label: t.hero.stats.projects,
      delay: 0.3
    },
    {
      value: '1',
      label: t.hero.stats.hackathon,
      delay: 0.4
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-600"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={stat.label}
          className="text-center group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: stat.delay,
            ease: "backOut"
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="text-3xl font-bold text-accent-500 mb-2 font-heading"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {stat.value}
          </motion.div>
          <Text 
            size="sm" 
            color="secondary" 
            className="uppercase tracking-wider font-body"
          >
            {stat.label}
          </Text>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Scroll Indicator Component
function ScrollIndicator() {
  const { t } = useLanguageContext();
  
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center space-y-2"
      >
        <div className="w-6 h-10 border-2 border-accent-500/50 rounded-full flex justify-center shadow-lg">
          <motion.div 
            className="w-1 h-3 bg-accent-500 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <Text size="xs" color="muted" className="tracking-wider font-heading font-medium">
          {t.hero.scroll}
        </Text>
        <ChevronDown size={16} className="text-accent-500/70" />
      </motion.div>
    </motion.div>
  );
}

// Main Hero Component
export default function Hero() {
  const { t } = useLanguageContext();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section 
      id="home" 
      className="min-h-screen flex items-center justify-center"
      padding="lg"
    >
      <BackgroundPattern />
      
      <Container className="relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text 
              size="lg" 
              color="accent" 
              weight="medium" 
              className="tracking-wider font-heading"
            >
              {t.hero.greeting}
            </Text>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading 
              level={1} 
              size="3xl" 
              centered 
              className="mb-6 tracking-tight text-shadow"
            >
              <span className="gradient-text">
                Antonio
              </span>
              <br />
              <span className="text-white">
                Mora
              </span>
            </Heading>
          </motion.div>

          {/* Dynamic Role */}
          <DynamicRole />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <Text 
              size="lg" 
              color="secondary" 
              className="leading-relaxed"
            >
              {t.hero.description}
            </Text>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={scrollToContact}
              className="group"
            >
              {t.hero.workTogether}
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Button>
            
            <Button 
              variant="secondary"
              onClick={scrollToProjects}
            >
              {t.hero.viewProjects}
            </Button>
          </motion.div>

          {/* Stats */}
          <Stats />
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </Container>
    </Section>
  );
}