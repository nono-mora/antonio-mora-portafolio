'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

interface SafeTextProps {
  tKey: string;
  fallback: string;
  className?: string;
  children?: React.ReactNode;
}

const SafeText: React.FC<SafeTextProps> = ({ tKey, fallback, className, children }) => {
  const { t, isLoaded } = useLanguage();
  
  const text = isLoaded ? t(tKey) : fallback;
  
  if (children) {
    return (
      <span className={className}>
        {React.Children.map(children, (child) => {
          if (typeof child === 'string') {
            return text;
          }
          return child;
        })}
      </span>
    );
  }
  
  return <span className={className}>{text}</span>;
};

export default SafeText;