import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phone = '918981091491';
  const message = encodeURIComponent(
    'Hello Avijit Sharma Ssarrkar, I would like to know more about your astrology consultation services.'
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3 pointer-events-auto">
      {/* Desktop Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex items-center gap-2 bg-[#3B1712] text-[#FFF7E6] text-xs font-semibold px-3 py-2 rounded-xl shadow-xl border border-[#F4B942]/40 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span>Chat on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        className="relative group bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-[#FFD166] transition-shadow duration-300 hover:shadow-[#25D366]/40 hover:shadow-xl"
        aria-label="Direct WhatsApp Consultation with Avijit Sharma Ssarrkar"
      >
        {/* Subtle Ring Glow Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 group-hover:bg-[#25D366]/50 blur-md transition-all duration-300 -z-10"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current stroke-none text-white" />
      </motion.a>
    </div>
  );
};
