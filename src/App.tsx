import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { pageTransition } from '@/lib/animations';

// Lazy-loaded Pages for optimal bundle code-splitting
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Contact = lazy(() => import('@/pages/Contact'));

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#FFF7E6]">
    <div className="w-12 h-12 rounded-full border-4 border-[#F4B942]/30 border-t-[#8F1717] animate-spin"></div>
    <p className="font-serif text-sm font-semibold text-[#8F1717] tracking-wider uppercase">Loading Sacred Wisdom...</p>
  </div>
);

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="w-full"
  >
    {children}
  </motion.div>
);

export const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/services"
              element={
                <PageWrapper>
                  <Services />
                </PageWrapper>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageWrapper>
                  <Gallery />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            {/* Catch all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  );
};

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
};

export default App;


