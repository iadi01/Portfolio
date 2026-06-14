import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import MarqueeBanner from './components/MarqueeBanner';
import AccordionSections from './components/AccordionSections';
import EducationSection from './components/EducationSection';
import BlogsSection from './components/BlogsSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Force scroll to top on refresh/load to ensure progress bar starts at 0%
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    setScrollProgress(0);

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        setScrollProgress(scrollTop / scrollHeight);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="min-h-screen bg-custom-blue overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative">
      <CustomCursor />

      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Top progress indicator bar */}
      <div 
        className="fixed top-0 left-0 h-2 bg-custom-green z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      {/* Top background accent bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-custom-yellow z-[90]" />

      <Navbar
        visible={showContent}
        onContactClick={() => setContactOpen(true)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <main className="w-full max-w-full overflow-x-hidden flex flex-col items-center gap-20 pt-32 pb-20">
        <HeroSection onContactClick={() => setContactOpen(true)} />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogsSection />
        <EducationSection />
        <AccordionSections />
        <MarqueeBanner />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

