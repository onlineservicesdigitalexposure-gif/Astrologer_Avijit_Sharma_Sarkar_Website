import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E6] text-[#3B1712] selection:bg-[#F4B942]/30 selection:text-[#8F1717] relative">
      {/* Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-[#8F1717] text-[#FFD166] px-4 py-2.5 rounded-xl font-serif font-bold text-sm border-2 border-[#F4B942] shadow-2xl transition-all"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      
      {/* Header Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" tabIndex={-1} className="flex-grow w-full overflow-x-hidden outline-none">
        {children}
      </main>

      {/* Global Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
};
