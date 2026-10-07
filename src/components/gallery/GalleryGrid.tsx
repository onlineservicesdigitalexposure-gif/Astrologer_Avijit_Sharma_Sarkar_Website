import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ChevronLeft, ChevronRight, X, Sparkles, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = ['All', 'Astrology', 'Spiritual', 'Consultation', 'Events', 'Promotional'];

  // Filter items based on category
  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Visible items slice to prevent mobile lag
  const displayedItems = filteredItems.slice(0, visibleCount);

  // Lightbox Navigation Helpers
  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handleNext = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
  }, [activeItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [activeItemIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  // Keyboard Navigation: Left/Right arrows & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };

    if (activeItemIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItemIndex, handleNext, handlePrev, handleClose]);

  // Reset pagination when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(12);
  };

  return (
    <div className="space-y-10">
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-serif font-bold rounded-full border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#8F1717] text-[#FFD166] border-[#F4B942] shadow-md scale-105'
                  : 'bg-[#FFFDF8] text-[#3B1712] border-[#F4B942]/40 hover:border-[#F4B942] hover:bg-[#FFF7E6]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Responsive Masonry / Grid Container: Mobile: 2 cols, Tablet: 3 cols, Desktop: 4 cols */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        <AnimatePresence>
          {displayedItems.map((item, idx) => {
            // Aspect ratio mapping to prevent cumulative layout shift (CLS)
            const aspectClass = item.aspectRatio === 'portrait'
              ? 'aspect-3/4'
              : item.aspectRatio === 'landscape'
              ? 'aspect-4/3'
              : 'aspect-square';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  onClick={() => setActiveItemIndex(idx)}
                  className="group overflow-hidden p-0 h-full flex flex-col justify-between border-2 border-[#F4B942]/35 hover:border-[#F4B942] shadow-sm hover:shadow-soft-gold"
                >
                  <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#6E1010]`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B1712]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                    
                    {/* Hover Zoom Icon */}
                    <div className="absolute top-2.5 right-2.5 bg-[#8F1717]/90 text-[#FFD166] p-1.5 rounded-full border border-[#F4B942] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Category Tag */}
                    <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-[#F4B942]/90 text-[#3B1712] text-[9px] sm:text-[10px] font-bold font-serif px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 space-y-1.5">
                    <h3 className="font-serif font-bold text-xs sm:text-sm text-[#3B1712] group-hover:text-[#8F1717] transition-colors line-clamp-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#3B1712]/75 line-clamp-1 font-sans hidden sm:block">
                      {item.description}
                    </p>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button for Mobile & Desktop Performance */}
      {visibleCount < filteredItems.length && (
        <div className="text-center pt-4">
          <Button
            variant="gold"
            size="md"
            iconLeft={<Sparkles className="w-4 h-4 text-[#8F1717]" />}
            onClick={() => setVisibleCount(prev => prev + 12)}
          >
            Load More Sacred Images ({filteredItems.length - visibleCount} Remaining)
          </Button>
        </div>
      )}

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activeItemIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#3B1712]/90 backdrop-blur-md"
            />

            {/* Lightbox Main Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-[#FFFDF8] rounded-2xl border-2 border-[#F4B942] shadow-soft-red z-10 overflow-hidden flex flex-col max-h-[90vh]"
              role="dialog"
              aria-label={activeItem.title}
              aria-modal="true"
            >
              {/* Lightbox Top Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-r from-[#8F1717] to-[#C9361A] text-[#FFD166] border-b border-[#F4B942]/40">
                <div className="flex items-center gap-2 text-xs font-serif font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD166]" />
                  <span>{activeItem.category} • Image {activeItemIndex + 1} of {filteredItems.length}</span>
                </div>

                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full hover:bg-white/15 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Body: Image Display + Navigation Controls */}
              <div className="relative flex-1 bg-[#6E1010]/20 flex items-center justify-center p-2 sm:p-6 overflow-hidden min-h-[300px]">
                
                {/* Previous Image Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 z-20 p-2.5 rounded-full bg-[#8F1717]/85 text-[#FFD166] hover:bg-[#8F1717] border border-[#F4B942] shadow-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Lightbox Image */}
                <motion.img
                  key={activeItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[60vh] max-w-full object-contain rounded-xl border border-[#F4B942]/40 shadow-md"
                />

                {/* Next Image Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 z-20 p-2.5 rounded-full bg-[#8F1717]/85 text-[#FFD166] hover:bg-[#8F1717] border border-[#F4B942] shadow-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F4B942]"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Bottom Details */}
              <div className="p-4 sm:p-6 bg-[#FFFDF8] border-t border-[#F4B942]/30 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#8F1717]">
                    {activeItem.title}
                  </h3>
                  {activeItem.location && (
                    <span className="text-xs font-serif font-bold text-[#F28C28] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {activeItem.location}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#3B1712]/85 leading-relaxed font-sans">
                  {activeItem.description}
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
