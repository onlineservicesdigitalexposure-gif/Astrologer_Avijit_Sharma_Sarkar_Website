import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'crimson' | 'saffron' | 'outline';
  icon?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  icon = true,
  className
}) => {
  const variantStyles = {
    gold: 'bg-[#FFF7E6] text-[#8F1717] border-[#F4B942] shadow-sm',
    crimson: 'bg-[#8F1717] text-[#FFD166] border-[#F4B942]',
    saffron: 'bg-[#F28C28] text-white border-[#FFD166]',
    outline: 'bg-transparent text-[#8F1717] border-[#F4B942]/60'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-serif font-bold uppercase tracking-wider rounded-full border transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      {icon && <Sparkles className="w-3 h-3 text-[#F4B942]" />}
      <span>{children}</span>
    </span>
  );
};
