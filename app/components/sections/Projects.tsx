'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../lib/hooks';
import { useLanguageContext } from '../../components/providers/LanguageProvider';
import { Card, Section, Container, Heading, Text, Button, Badge } from '../../components/ui';
import { PROJECTS } from '../../lib/data';
import { 
  ExternalLink, 
  Github, 
  X, 
  Calendar,
  ChevronRight,
  
  Globe,
  Code,
  Palette,
  Bot
} from 'lucide-react';
import type { Project } from '../../lib/types';

// Category Icons
const categoryIcons = {
  fullstack: Globe,
  backend: Code,
  frontend: Palette,
  automation: Bot
};

// Status Badge Component
function StatusBadge({ status }: { status: Project['status'] }) {
  const { language } = useLanguageContext();
  
  const statusConfig = {
    completed: {
      variant: 'success' as const,
      label: language === 'es' ? 'Completado' : 'Completed'
    },
    ongoing: {
      variant: 'warning' as const,
      label: language === 'es' ? 'En desarrollo' : 'In Progress'
    },
    hackathon: {
      variant: 'accent' as const,
      label: language === 'es' ? 'Ganador Hackathón' : 'Hackathon Winner'
    }
  };

  const config = statusConfig[status];
  
  return (
    <Badge variant={config.variant} size="sm">
      {config.label}
    </Badge>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const { t } = useLanguageContext();
  const Icon = categoryIcons[project.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
    >
      <Card 
        hover 
        className="h-full overflow-hidden cursor-pointer group"
        // onClick={() => onOpenModal(project)}
      >
        {/* Project Image/Icon */}
        <div className="relative h-48 bg-gradient-to-br from-accent-500/20 to-secondary-500/10 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon size={64} className="text-accent-500/50" />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 via-transparent to-transparent" />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {project.github && (
              <motion.a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ver código en GitHub"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                onClick={(e) => e.stopPropagation()}
                className="bg-accent-500/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-accent-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Ver demo en vivo"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <StatusBadge status={project.status} />
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="accent" size="sm">
                ⭐ Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <Heading 
            level={3} 
            size="lg" 
            className="mb-3 group-hover:text-accent-500 transition-colors duration-300 line-clamp-2"
          >
            {project.title}
          </Heading>

          <Text size="sm" color="secondary" className="mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </Text>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="accent" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="default" size="sm">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-secondary-500">
              <Calendar size={14} />
              <Text size="xs" color="secondary">
                {t.projects.duration}: {project.duration}
              </Text>
            </div>
            
            <div className="flex items-center space-x-1 text-accent-500 group-hover:translate-x-1 transition-transform duration-300">
              <Text size="sm" color="accent" weight="medium">
                {t.projects.viewDetails}
              </Text>
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Project Modal Component
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="bg-primary-600 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-secondary-500/20 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <Heading level={2} size="xl" className="mb-2">
                  {project.title}
                </Heading>
                <div className="flex items-center space-x-4">
                  <StatusBadge status={project.status} />
                  <div className="flex items-center space-x-2 text-secondary-500">
                    <Calendar size={16} />
                    <Text size="sm" color="secondary">
                      {project.duration}
                    </Text>
                  </div>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="text-secondary-500 hover:text-white text-3xl transition-colors duration-300 hover:rotate-90 transform p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <Text size="lg" color="secondary" className="leading-relaxed">
                  {project.longDescription}
                </Text>
              </div>
              
              {/* Highlights */}
              <div>
                <Heading level={4} size="md" className="mb-3">
                  Características destacadas:
                </Heading>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <ChevronRight size={16} className="text-accent-500 mt-1 flex-shrink-0" />
                      <Text size="base" color="secondary">
                        {highlight}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div>
                <Heading level={4} size="md" className="mb-3">
                  Tecnologías utilizadas:
                </Heading>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="bg-accent-500/10 text-accent-500 px-3 py-1 rounded-full text-sm border border-accent-500/20 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-secondary-500/10">
                {project.github && (
                  <Button
                    variant="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Ver Código
                  </Button>
                )}
                {project.demo && (
                  <Button
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Ver Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Filter Component
interface FilterProps {
  categories: Array<{ id: string; label: string; count: number }>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

function Filter({ categories, activeFilter, onFilterChange }: FilterProps) {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border font-heading ${
            activeFilter === category.id
              ? 'bg-accent-500 text-white border-accent-500 shadow-lg hover-glow'
              : 'bg-primary-600 text-secondary-500 border-secondary-500/20 hover:border-accent-500/50 hover:text-white hover-lift'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {category.label}
          <span className="ml-2 text-sm opacity-70">({category.count})</span>
        </motion.button>
      ))}
    </motion.div>
  );
}

// CTA Section Component
function CTASection() {
  const { t } = useLanguageContext();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Card variant="gradient" className="max-w-3xl mx-auto text-center">
        <Heading level={3} size="xl" className="mb-4">
          {t.projects.cta.title}
        </Heading>
        
        <Text size="lg" color="secondary" className="mb-6">
          {t.projects.cta.description}
        </Text>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={scrollToContact}>
            {t.projects.cta.start}
          </Button>
          
          <Button
            variant="secondary"
            href="https://github.com/antoniomora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="mr-2" />
            {t.projects.cta.github}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

// Main Projects Component
export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguageContext();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return PROJECTS;
    return PROJECTS.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  // Categories with counts
  const categories = useMemo(() => [
    { id: 'all', label: t.projects.filters.all, count: PROJECTS.length },
    { id: 'fullstack', label: t.projects.filters.fullstack, count: PROJECTS.filter(p => p.category === 'fullstack').length },
    { id: 'backend', label: t.projects.filters.backend, count: PROJECTS.filter(p => p.category === 'backend').length },
    { id: 'frontend', label: t.projects.filters.frontend, count: PROJECTS.filter(p => p.category === 'frontend').length },
    { id: 'automation', label: t.projects.filters.automation, count: PROJECTS.filter(p => p.category === 'automation').length }
  ], [t]);

  return (
    <Section ref={ref} id="projects" background="primary" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border-2 border-accent-500/10 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-accent-500/5 rotate-45 animate-bounce" />
      <div className="absolute top-1/2 right-10 w-16 h-16 border border-secondary-500/10 rotate-12 animate-float" />

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
              {t.projects.subtitle}
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading level={2} size="2xl" centered className="mb-6">
                {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
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
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
                {t.projects.description}
              </Text>
            </motion.div>
          </div>

          {/* Filter */}
          <Filter 
            categories={categories}
            activeFilter={selectedCategory}
            onFilterChange={setSelectedCategory}
          />

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenModal={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <CTASection />
        </motion.div>
      </Container>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}