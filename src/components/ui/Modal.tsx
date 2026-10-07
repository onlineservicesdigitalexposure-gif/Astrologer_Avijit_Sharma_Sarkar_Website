import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { scaleIn, fadeIn } from '@/lib/animations';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-[#3B1712]/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              "relative w-full max-w-2xl bg-[#FFFDF8] rounded-2xl border-2 border-[#F4B942] shadow-soft-red z-10 overflow-hidden my-8",
              className
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4.5 bg-gradient-to-r from-[#8F1717] to-[#C9361A] border-b border-[#F4B942]/40 text-[#FFD166]">
              <h3 id="modal-title" className="text-lg font-serif font-bold tracking-wide">{title || 'R.A. Divine Astrology'}</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto text-[#3B1712]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
