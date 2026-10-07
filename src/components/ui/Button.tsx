import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'saffron' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  className,
  disabled,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4B942] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group relative overflow-hidden';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5 font-semibold tracking-wide',
    md: 'px-6 py-3 text-sm gap-2 font-semibold tracking-wide',
    lg: 'px-8 py-3.5 text-base gap-2.5 font-bold tracking-wider'
  };

  const variantStyles = {
    // Primary: Deep Red / Crimson background with gold text
    primary: 'bg-gradient-to-r from-[#8F1717] via-[#C9361A] to-[#8F1717] text-[#FFD166] border border-[#F4B942]/40 shadow-soft-red hover:shadow-xl hover:shadow-[#8F1717]/25 hover:border-[#FFD166] hover:from-[#C9361A] hover:to-[#8F1717]',
    
    // Secondary: Cream / transparent background with red & gold border
    secondary: 'bg-[#FFFDF8] text-[#8F1717] border-2 border-[#F4B942] hover:bg-[#FFF7E6] hover:border-[#8F1717] hover:text-[#C9361A] hover:shadow-md hover:shadow-[#F4B942]/15',
    
    // Saffron Accent
    saffron: 'bg-gradient-to-r from-[#F28C28] via-[#E85D04] to-[#C9361A] text-white border border-[#FFD166]/40 shadow-md hover:shadow-xl hover:shadow-[#E85D04]/25',
    
    // Gold Accent
    gold: 'bg-gradient-to-r from-[#FFD166] via-[#F4B942] to-[#D49B24] text-[#3B1712] border border-[#FFD166] shadow-soft-gold hover:shadow-xl hover:shadow-[#F4B942]/30',
    
    // Outline
    outline: 'bg-transparent text-[#8F1717] border-2 border-[#F4B942]/70 hover:border-[#8F1717] hover:bg-[#FFF7E6] hover:shadow-sm',
    
    // Ghost
    ghost: 'bg-transparent text-[#3B1712] hover:bg-[#F4B942]/15 hover:text-[#8F1717]'
  };

  return (
    <motion.button
      whileHover={{ y: disabled ? 0 : -2, scale: disabled ? 1 : 1.01 }}
      whileTap={{ y: 0, scale: disabled ? 1 : 0.98 }}
      type={type}
      disabled={disabled}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {iconLeft && (
        <span className="inline-flex shrink-0 group-hover:-translate-x-0.5 transition-transform duration-200">
          {iconLeft}
        </span>
      )}
      {children && <span>{children}</span>}
      {iconRight && (
        <span className="inline-flex shrink-0 group-hover:translate-x-1 transition-transform duration-200">
          {iconRight}
        </span>
      )}
    </motion.button>
  );
};

