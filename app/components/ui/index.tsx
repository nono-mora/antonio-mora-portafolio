import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import type { ComponentWithChildren } from '../../lib/types';

// Button Component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  href,
  target,
  rel,
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost'
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    {
      'opacity-50 cursor-not-allowed': disabled || loading,
      'pointer-events-none': disabled || loading,
    },
    className
  );

  const content = (
    <>
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}

// Card Component
interface CardProps {
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Card({ 
  variant = 'default', 
  hover = false, 
  className, 
  children 
}: CardProps) {
  const baseClasses = 'rounded-xl p-6 border transition-all duration-300';
  const variantClasses = {
    default: 'bg-primary-600 border-secondary-500/10',
    glass: 'glass',
    gradient: 'bg-gradient-to-br from-primary-600 to-primary-500'
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    {
      'hover-lift hover:border-accent-500/30': hover,
    },
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

// Container Component
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

export function Container({ 
  size = 'lg', 
  className, 
  children 
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const classes = clsx(
    'w-full mx-auto px-4 sm:px-6 lg:px-8',
    sizeClasses[size],
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

// Section Component
interface SectionProps {
  id?: string;
  className?: string;
  background?: 'primary' | 'secondary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Section Component
export const Section = forwardRef<HTMLElement, SectionProps>(({ 
  id, 
  className, 
  background = 'primary',
  padding = 'lg',
  children 
}, ref) => {
  const backgroundClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-gradient-to-br from-primary-500 to-primary-600',
    gradient: 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-500'
  };
  
  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20'
  };

  const classes = clsx(
    backgroundClasses[background],
    paddingClasses[padding],
    'relative overflow-hidden',
    className
  );

  return (
    <section ref={ref} id={id} className={classes}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

// Animated Section Component
interface AnimatedSectionProps extends SectionProps {
  threshold?: number;
  delay?: number;
}

export function AnimatedSection({ 
  threshold = 0.3, 
  delay = 0,
  children,
  ...sectionProps 
}: AnimatedSectionProps) {
  return (
    <Section {...sectionProps}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: threshold }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </Section>
  );
}

// Heading Component
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  gradient?: boolean;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Heading({ 
  level, 
  size, 
  gradient = false, 
  centered = false, 
  className, 
  children 
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl md:text-5xl',
    '3xl': 'text-5xl md:text-6xl lg:text-7xl'
  };

  // Default sizes based on heading level
  const defaultSizes = {
    1: '3xl',
    2: '2xl',
    3: 'xl',
    4: 'lg',
    5: 'md',
    6: 'sm'
  } as const;

  const finalSize = size || defaultSizes[level];

  const classes = clsx(
    'font-heading font-bold',
    sizeClasses[finalSize],
    {
      'gradient-text': gradient,
      'text-white': !gradient,
      'text-center': centered,
    },
    className
  );

  return <Tag className={classes}>{children}</Tag>;
}

// Text Component
interface TextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'inherit';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}

export function Text({ 
  size = 'base', 
  color = 'primary', 
  weight = 'normal',
  align = 'left',
  className, 
  children 
}: TextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const colorClasses = {
    primary: 'text-white',
    secondary: 'text-secondary-500',
    muted: 'text-secondary-500/70',
    accent: 'text-accent-500',
    inherit: 'text-inherit'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const classes = clsx(
    'font-body leading-relaxed',
    sizeClasses[size],
    colorClasses[color],
    weightClasses[weight],
    alignClasses[align],
    className
  );

  return <p className={classes}>{children}</p>;
}

// Badge Component
interface BadgeProps {
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Badge({ 
  variant = 'default', 
  size = 'md', 
  className, 
  children 
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-secondary-500/20 text-secondary-500 border-secondary-500/30',
    accent: 'bg-accent-500/20 text-accent-500 border-accent-500/30',
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    error: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const classes = clsx(
    'inline-flex items-center rounded-full border font-medium font-heading',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return <span className={classes}>{children}</span>;
}

// Spinner Component
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'accent' | 'white';
  className?: string;
}

export function Spinner({ 
  size = 'md', 
  color = 'accent', 
  className 
}: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'border-primary-500',
    accent: 'border-accent-500',
    white: 'border-white'
  };

  const classes = clsx(
    'animate-spin rounded-full border-2 border-transparent border-t-current',
    sizeClasses[size],
    colorClasses[color],
    className
  );

  return <div className={classes} />;
}

// Icon wrapper for consistent sizing
interface IconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

export function Icon({ size = 'md', className, children }: IconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const classes = clsx(
    'inline-block',
    sizeClasses[size],
    className
  );

  return <span className={classes}>{children}</span>;
}