import React from 'react';
import { cn } from '@/lib/utils';

export const LotusDivider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center gap-3 my-5", className)}>
      <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-[#F4B942] to-[#F4B942]" />
      
      {/* Central Lotus Motif */}
      <svg className="w-6 h-6 text-[#F4B942]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 9 6 9 9C9 12 12 14 12 14C12 14 15 12 15 9C15 6 12 2 12 2Z" opacity="0.85" />
        <path d="M12 14C12 14 7 11 4 13C1 15 2 18 5 19C8 20 12 17 12 17C12 17 16 20 19 19C22 18 23 15 20 13C17 11 12 14 12 14Z" />
        <circle cx="12" cy="18" r="1.5" fill="#8F1717" />
      </svg>
      
      <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-[#F4B942] to-[#F4B942]" />
    </div>
  );
};

export const DiamondDivider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center gap-2 my-4", className)}>
      <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#F4B942]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#F4B942]" />
      <div className="w-2.5 h-2.5 rotate-45 bg-[#8F1717] border border-[#FFD166]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#F4B942]" />
      <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#F4B942]" />
    </div>
  );
};

export const ZodiacRingAccents: React.FC<{ className?: string }> = ({ className }) => {
  const signs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  return (
    <div className={cn("flex items-center justify-center gap-4 text-xs font-serif text-[#F4B942]/70 tracking-widest select-none overflow-hidden py-1", className)}>
      {signs.map((sign, index) => (
        <span key={index} className="hover:text-[#F4B942] hover:scale-110 transition-all cursor-default">
          {sign}
        </span>
      ))}
    </div>
  );
};
