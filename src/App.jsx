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
import BrandIdentity from './components/BrandIdentity';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import BlogPage from './components/BlogPage';
import SettingsPanel from './components/SettingsPanel';
import DesktopWidgets from './components/DesktopWidgets';
import { audioSynth } from './utils/audioSynth';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const isBlogPage = currentPath.replace(/\/$/, '') === '/blog';

  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('aadi-theme') || 'classic';
  });
  const [cursorEnabled, setCursorEnabled] = useState(() => {
    return localStorage.getItem('aadi-cursor') !== 'false';
  });
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Auto-trigger Boot startup sound on first user gesture
  useEffect(() => {
    let soundPlayed = false;
    const playBootSound = () => {
      if (soundPlayed) return;
      soundPlayed = true;
      audioSynth.playStartup();
      
      // Cleanup listeners
      window.removeEventListener('click', playBootSound);
      window.removeEventListener('touchstart', playBootSound);
      window.removeEventListener('keydown', playBootSound);
    };

    window.addEventListener('click', playBootSound);
    window.addEventListener('touchstart', playBootSound);
    window.addEventListener('keydown', playBootSound);

    return () => {
      window.removeEventListener('click', playBootSound);
      window.removeEventListener('touchstart', playBootSound);
      window.removeEventListener('keydown', playBootSound);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const themes = {
      classic: {
        '--color-custom-blue': '#60a5fa',
        '--color-custom-purple': '#a78bfa',
        '--color-custom-pink': '#ff9fac',
        '--color-custom-yellow': '#fcd34d',
        '--color-custom-green': '#4ade80',
        '--color-custom-red': '#f87171'
      },
      cyber: {
        '--color-custom-blue': '#1e1b4b',
        '--color-custom-purple': '#39ff14',
        '--color-custom-pink': '#ff007f',
        '--color-custom-yellow': '#00ffff',
        '--color-custom-green': '#10b981',
        '--color-custom-red': '#ef4444'
      },
      sunset: {
        '--color-custom-blue': '#fed7aa',
        '--color-custom-purple': '#ea580c',
        '--color-custom-pink': '#f43f5e',
        '--color-custom-yellow': '#fef08a',
        '--color-custom-green': '#84cc16',
        '--color-custom-red': '#dc2626'
      },
      lavender: {
        '--color-custom-blue': '#ddd6fe',
        '--color-custom-purple': '#8b5cf6',
        '--color-custom-pink': '#fbcfe8',
        '--color-custom-yellow': '#fef08a',
        '--color-custom-green': '#a7f3d0',
        '--color-custom-red': '#fca5a5'
      },
      mint: {
        '--color-custom-blue': '#ccfbf1',
        '--color-custom-purple': '#0d9488',
        '--color-custom-pink': '#99f6e4',
        '--color-custom-yellow': '#fef08a',
        '--color-custom-green': '#6ee7b7',
        '--color-custom-red': '#fda4af'
      }
    };

    const currentColors = themes[activeTheme] || themes.classic;
    Object.keys(currentColors).forEach((key) => {
      root.style.setProperty(key, currentColors[key]);
    });
    localStorage.setItem('aadi-theme', activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!isBlogPage) {
      const hash = window.location.hash;
      if (hash) {
        const timer = setTimeout(() => {
          const id = hash.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [currentPath]);

  useEffect(() => {
    // Force scroll to top on refresh/load to ensure progress bar starts at 0%
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="min-h-screen bg-custom-blue overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative">
      {cursorEnabled && <CustomCursor />}

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

      {!isBlogPage && (
        <Navbar
          visible={showContent}
          onContactClick={() => setContactOpen(true)}
        />
      )}

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {isBlogPage ? (
        <BlogPage onContactClick={() => setContactOpen(true)} />
      ) : (
        <main className="w-full max-w-full overflow-x-hidden flex flex-col items-center gap-20 pt-32 pb-20">
          {/* SEO Accessibility Headings & Links (Invisible in UI) */}
          <h1 className="sr-only">Aditya Sharma Portfolio | WTF Aadi | Full Stack Developer | Software Engineer | iadi0</h1>
          <nav aria-label="SEO Internal Links" className="sr-only">
            <a href="#home">Home</a>
            <a href="#about">About Aditya Sharma</a>
            <a href="#projects">Aditya Sharma Portfolio Projects</a>
            <a href="#skills">Skills of Aditya Sharma</a>
            <a href="#experience">Learning Journey of Aditya Sharma</a>
            <a href="#contact">Contact Aditya Sharma</a>
          </nav>

          <HeroSection onContactClick={() => setContactOpen(true)} />
          <DesktopWidgets />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <BlogsSection />
          <BrandIdentity />
          <EducationSection />
          <AccordionSections />
          <FAQSection />
          <MarqueeBanner />
        </main>
      )}
      
      {!isBlogPage && <Footer />}
      <CookieConsent />

      {/* Floating Settings Panel Trigger Button */}
      {showContent && (
        <div className="fixed bottom-6 left-6 z-[60]">
          <button
            onClick={() => {
              audioSynth.playClick();
              setSettingsOpen(true);
            }}
            className="bg-custom-yellow text-black p-3 md:p-3.5 rounded-full border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all cursor-pointer text-xl md:text-2xl flex items-center justify-center"
            aria-label="Open settings panel"
          >
            🎨
          </button>
        </div>
      )}

      <SettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        cursorEnabled={cursorEnabled}
        setCursorEnabled={setCursorEnabled}
      />
    </div>
  );
}

export default App;
