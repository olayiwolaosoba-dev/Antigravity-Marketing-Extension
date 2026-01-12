import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWins from './components/FeaturedWins';
import ProblemsWeSolve from './components/ProblemsWeSolve';
import ServicesByStage from './components/ServicesByStage';
import CaseStudies from './components/CaseStudies';
import IndustriesTabs from './components/IndustriesTabs';
import TeamSection from './components/TeamSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MarketingConsulting from './components/MarketingConsulting';
import PositioningMessaging from './components/PositioningMessaging';
import ContentPlus from './ContentPlus';
import MarTechStudio from './MarTechStudio';
import Pricing from './Pricing';
import { LearningCenter, Events, Guides, Reports, VideoLibrary, Playbooks } from './components/Resources';
import { motion, AnimatePresence } from 'framer-motion';

type Page = 'home' | 'marketing-consulting' | 'positioning' | 'contentplus' | 'martech-studio' | 'pricing' |
  'resources-learn' | 'resources-events' | 'resources-guides' | 'resources-reports' | 'resources-videos' | 'resources-playbooks';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'contentplus') setCurrentPage('contentplus');
      else if (hash === 'marketing-consulting') setCurrentPage('marketing-consulting');
      else if (hash === 'positioning') setCurrentPage('positioning');
      else if (hash === 'martech-studio') setCurrentPage('martech-studio');
      else if (hash === 'pricing') setCurrentPage('pricing');

      // Resources Routes
      else if (hash === 'resources/learn') setCurrentPage('resources-learn');
      else if (hash === 'resources/events') setCurrentPage('resources-events');
      else if (hash === 'resources/guides') setCurrentPage('resources-guides');
      else if (hash === 'resources/reports') setCurrentPage('resources-reports');
      else if (hash === 'resources/videos') setCurrentPage('resources-videos');
      else if (hash === 'resources/playbooks') setCurrentPage('resources-playbooks');

      else setCurrentPage('home');
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    // Map internal page IDs to URL hashes
    const hashMap: Record<string, string> = {
      'resources-learn': 'resources/learn',
      'resources-events': 'resources/events',
      'resources-guides': 'resources/guides',
      'resources-reports': 'resources/reports',
      'resources-videos': 'resources/videos',
      'resources-playbooks': 'resources/playbooks'
    };

    if (page in hashMap) {
      window.location.hash = hashMap[page];
      setCurrentPage(page as Page);
    } else {
      setCurrentPage(page as Page);
      window.location.hash = page === 'home' ? '' : page;
    }
  };

  return (
    <div className="relative selection:bg-primary selection:text-white">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-bg-dark flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-16 h-16 bg-primary rounded-full mb-4 mx-auto"
              />
              <p className="text-white font-display text-lg tracking-tight">Installing growth engine...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header onNavigate={handleNavigate} currentPage={currentPage as any} />

      <main className="overflow-x-hidden">
        {currentPage === 'home' && (
          <>
            <Hero />
            <FeaturedWins />
            <ProblemsWeSolve />
            <ServicesByStage />
            <CaseStudies />
            <IndustriesTabs />
            <TeamSection />
            <WhyChooseUs />
            <Testimonials />
            <Awards />
          </>
        )}
        {currentPage === 'marketing-consulting' && (
          <MarketingConsulting onNavigate={handleNavigate} />
        )}
        {currentPage === 'positioning' && (
          <PositioningMessaging onNavigate={handleNavigate} />
        )}
        {currentPage === 'contentplus' && (
          <ContentPlus onNavigate={handleNavigate} />
        )}
        {currentPage === 'martech-studio' && (
          <MarTechStudio onNavigate={handleNavigate} />
        )}
        {currentPage === 'pricing' && (
          <Pricing onNavigate={handleNavigate} />
        )}

        {/* Resource Routes */}
        {currentPage === 'resources-learn' && <LearningCenter />}
        {currentPage === 'resources-events' && <Events />}
        {currentPage === 'resources-guides' && <Guides />}
        {currentPage === 'resources-reports' && <Reports />}
        {currentPage === 'resources-videos' && <VideoLibrary />}
        {currentPage === 'resources-playbooks' && <Playbooks />}

        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
