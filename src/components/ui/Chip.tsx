'use client';

import React from 'react';

interface ChipProps {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  
  const variantClasses = {
    default: 'bg-[#f5f5f9] text-[#4e4860]',
    primary: 'bg-[#4e338e] text-white',
    success: 'bg-[#e6f7e6] text-[#2e7d32]',
    warning: 'bg-[#fff8e6] text-[#ed6c02]',
    error: 'bg-[#fdeded] text-[#d32f2f]',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  const chipClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${onClick ? 'cursor-pointer' : ''}`;
  
  return (
    <span className={chipClasses} onClick={onClick}>
      {label}
    </span>
  );
};

export default Chip;