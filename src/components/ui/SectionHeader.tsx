import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';
import { LotusDivider } from './DecorativePatterns';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/animations';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className,
  titleClassName
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={cn("max-w-3xl mb-14", centered && "mx-auto text-center", className)}
    >
      {badge && (
        <div className="mb-3.5 inline-block">
          <Badge variant="gold">{badge}</Badge>
        </div>
      )}
      <h2
        className={cn(
          "text-xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#3B1712] tracking-tight leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      <LotusDivider className={centered ? "mx-auto" : "justify-start"} />
      {subtitle && (
        <p className="text-base sm:text-lg text-[#3B1712]/85 font-display italic leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

