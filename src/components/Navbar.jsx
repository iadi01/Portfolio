import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navigateTo } from '../utils/router';

export default function Navbar({ visible, onContactClick }) {
  const [time, setTime] = useState(new Date());
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${weekday}, ${day} ${month} ${year}`;
  };

  const navItems = [
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'BLOGS', id: 'blogs' },
    { name: 'EDUCATION', id: 'education' },
  ];

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  if (!visible) return null;

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-custom-purple border-4 border-black rounded-full px-4 py-3 shadow-neo flex justify-between items-center">
        <div className="text-xl md:text-2xl font-shrikhand text-black ml-2">
          PORTFOLIO
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-1.5 lg:gap-3 font-bold text-xs lg:text-sm items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-2 py-1 lg:px-4 lg:py-2 bg-white text-black rounded-full border-black border-2 border-b-2 md:border-b-4 border-r-2 md:border-r-4 hover:bg-white hover:text-black hover:border-black hover:border-b-2 hover:border-r-2 active:border-b-2 active:border-r-2 active:translate-y-1 transition-all cursor-pointer font-bold"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              handleNavClick('contact');
              onContactClick();
            }}
            className="px-3 py-1 lg:px-5 lg:py-2 bg-custom-pink text-black border-2 border-black border-b-4 lg:border-b-8 border-r-4 lg:border-r-8 rounded-full hover:border-b-4 hover:border-r-4 active:translate-y-1 transition-all cursor-pointer font-bold"
          >
            CONTACT
          </button>
        </div>

        {/* Date Display badge - Hidden on tablets/mobile-desktop to preserve horizontal space */}
        <div className="hidden lg:flex items-center gap-2 bg-custom-yellow text-black px-4 py-1 rounded-full font-mono text-sm border-black border-2 border-b-4 border-r-4">
          <span>█</span>
          <span>{formatDate(time)}</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white text-2xl bg-black p-2 rounded-full border-2 border-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-40 bg-custom-purple border-4 border-black rounded-3xl p-4 flex flex-col gap-3 shadow-neo animate-bounce-in md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="bg-white border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left hover:bg-gray-100 transition-all cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              handleNavClick('contact');
              onContactClick();
            }}
            className="bg-custom-pink border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left transition-all cursor-pointer"
          >
            CONTACT
          </button>
          <div className="flex md:hidden items-center gap-2 bg-custom-yellow text-black px-4 py-3 rounded-xl font-mono text-sm border-black border-2 border-b-4 border-r-4 justify-center">
            <span>█</span>
            <span>{formatDate(time)}</span>
          </div>
        </div>
      )}
    </>
  );
}

