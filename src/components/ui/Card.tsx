import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  ornamentalCorner?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  ornamentalCorner = true,
  glass = false,
  onClick
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -3, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      onClick={onClick}
      className={cn(
        'relative rounded-2xl border transition-all duration-300 p-7 group',
        glass
          ? 'glass-card shadow-soft-gold'
          : 'bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF7E6] border-[#F4B942]/35 shadow-premium-card',
        hoverEffect && 'hover:border-[#F4B942] hover:shadow-soft-gold hover:shadow-lg',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {ornamentalCorner && (
        <>
          {/* Top-left ornamental corner mark */}
          <span className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F4B942]/60 group-hover:border-[#FFD166] rounded-tl-sm transition-colors pointer-events-none" />
          {/* Top-right ornamental corner mark */}
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F4B942]/60 group-hover:border-[#FFD166] rounded-tr-sm transition-colors pointer-events-none" />
          {/* Bottom-left ornamental corner mark */}
          <span className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F4B942]/60 group-hover:border-[#FFD166] rounded-bl-sm transition-colors pointer-events-none" />
          {/* Bottom-right ornamental corner mark */}
          <span className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F4B942]/60 group-hover:border-[#FFD166] rounded-br-sm transition-colors pointer-events-none" />
        </>
      )}
      {children}
    </motion.div>
  );
};

