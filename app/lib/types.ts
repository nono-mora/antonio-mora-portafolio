// Core types for the portfolio
export type Language = 'es' | 'en';

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  whatsapp: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: 'internship' | 'job' | 'freelance';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: 'ongoing' | 'completed';
  description: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
  level?: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface SoftSkill {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'automation';
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'ongoing' | 'hackathon';
  duration: string;
  highlights: string[];
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  description: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  section: string;
}

// Animation types
export interface AnimationConfig {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}

// Theme types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

// Utility types
export type ComponentWithChildren<T = {}> = T & {
  children: React.ReactNode;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type WithLanguage<T> = T & {
  language: Language;
};