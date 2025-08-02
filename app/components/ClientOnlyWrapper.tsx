'use client';

import React, { useState, useEffect } from 'react';

interface ClientOnlyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ClientOnlyWrapper: React.FC<ClientOnlyWrapperProps> = ({ 
  children, 
  fallback = <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#00bfff] border-t-transparent rounded-full animate-spin"></div>
  </div>
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ClientOnlyWrapper;