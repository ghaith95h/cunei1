'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-md transition-colors focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-[#4e338e] text-white hover:bg-[#3b2670] disabled:bg-[#8883ae]',
    secondary: 'bg-[#f5f5f9] text-[#4e338e] hover:bg-[#e6e6f0] disabled:text-[#8883ae]',
    outline: 'border border-[#4e338e] text-[#4e338e] hover:bg-[#f5f5f9] disabled:border-[#8883ae] disabled:text-[#8883ae]',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'cursor-not-allowed' : ''}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;