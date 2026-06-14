import { useState, useEffect } from 'react';
import { FaArrowLeft, FaMediumM, FaEnvelope, FaGithub, FaLinkedin, FaCode, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { blogs, personalInfo } from '../data/personalData';
import { navigateTo } from '../utils/router';
import FAQSection from './FAQSection';
import BrandIdentity from './BrandIdentity';

export default function BlogPage({ onContactClick }) {
  const [time, setTime] = useState(new Date());
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Scroll to hash target if present
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${weekday}, ${day} ${month} ${year}`;
  };

  const navItems = [
    { name: 'EXPERIENCE', id: 'experience', path: '/' },
    { name: 'PROJECTS', id: 'projects', path: '/' },
    { name: 'SKILLS', id: 'skills', path: '/' },
    { name: 'BLOGS', id: 'blogs', path: '/blog' },
    { name: 'EDUCATION', id: 'education', path: '/' },
  ];

  const handleNavClick = (item) => {
    if (item.path === '/blog') {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setMobileOpen(false);
    } else {
      navigateTo(item.path, `#${item.id}`);
    }
  };

  const cardHeaderColors = [
    'bg-custom-yellow',
    'bg-custom-blue',
    'bg-custom-pink'
  ];

  return (
    <div className="min-h-screen bg-custom-blue text-black overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative">
      
      {/* Blog Page Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-custom-purple border-4 border-black rounded-full px-4 py-3 shadow-neo flex justify-between items-center">
        <div 
          onClick={() => navigateTo('/')} 
          className="text-xl md:text-2xl font-shrikhand text-black ml-2 cursor-pointer hover:scale-105 transition-transform"
        >
          PORTFOLIO
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-1.5 lg:gap-3 font-bold text-xs lg:text-sm items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="px-2 py-1 lg:px-4 lg:py-2 bg-white text-black rounded-full border-black border-2 border-b-2 md:border-b-4 border-r-2 md:border-r-4 hover:bg-white hover:text-black hover:border-black hover:border-b-2 hover:border-r-2 active:border-b-2 active:border-r-2 active:translate-y-1 transition-all cursor-pointer font-bold"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              onContactClick();
            }}
            className="px-3 py-1 lg:px-5 lg:py-2 bg-custom-pink text-black border-2 border-black border-b-4 lg:border-b-8 border-r-4 lg:border-r-8 rounded-full hover:border-b-4 hover:border-r-4 active:translate-y-1 transition-all cursor-pointer font-bold"
          >
            CONTACT
          </button>
        </div>

        {/* Date Badge */}
        <div className="hidden lg:flex items-center gap-2 bg-custom-yellow text-black px-4 py-1 rounded-full font-mono text-sm border-black border-2 border-b-4 border-r-4">
          <span>█</span>
          <span>{formatDate(time)}</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-white text-2xl bg-black p-2 rounded-full border-2 border-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-40 bg-custom-purple border-4 border-black rounded-3xl p-4 flex flex-col gap-3 shadow-neo animate-bounce-in md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="bg-white border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left hover:bg-gray-100 transition-all cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              onContactClick();
            }}
            className="bg-custom-pink border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left transition-all cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      )}

      {/* Blog Container */}
      <main className="w-full max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center gap-16">
        
        {/* Back navigation button */}
        <button
          onClick={() => navigateTo('/')}
          className="self-start flex items-center gap-2 bg-white text-black font-bold px-5 py-2.5 rounded-full border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          <FaArrowLeft /> Back to Portfolio
        </button>

        {/* Section Title */}
        <div className="bg-custom-pink px-8 py-4 rounded-full border-4 border-black shadow-neo">
          <h1 className="text-3xl md:text-5xl font-shrikhand text-black">
            Aditya Sharma Portfolio Blogs
          </h1>
        </div>

        {/* Blog Posts list */}
        <div id="blogs" className="w-full max-w-4xl flex flex-col gap-16 mt-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              id={blog.slug}
              className="border-4 border-black shadow-neo bg-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-all"
            >
              {/* Window Header */}
              <div className={`border-b-4 border-black px-4 py-3 flex justify-between items-center ${cardHeaderColors[idx % cardHeaderColors.length]}`}>
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                </div>
                <span className="font-mono text-xs font-black uppercase tracking-widest">
                  {blog.slug}.exe
                </span>
              </div>

              {/* Content Panel */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6 gap-6">
                  <h2 className="text-3xl font-shrikhand text-purple-700 leading-tight">
                    {blog.title}
                  </h2>
                  <div className="bg-black p-3 rounded-full text-white border-2 border-black flex-shrink-0">
                    <FaMediumM className="text-3xl" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center mb-8 border-b-2 border-black border-dashed pb-4 font-mono font-bold text-sm text-gray-500">
                  <span className="bg-gray-100 border border-black px-2 py-1 rounded-md">
                    📅 {blog.date}
                  </span>
                  <span className="bg-gray-100 border border-black px-2 py-1 rounded-md">
                    ⏱️ {blog.readTime}
                  </span>
                  <div className="flex gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="bg-custom-blue text-black px-2.5 py-0.5 border border-black rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Body */}
                <div className="space-y-6 text-lg font-medium text-gray-800 leading-relaxed">
                  {blog.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Layer - Fully Visible on this Dedicated Blog Page */}
        <section className="w-full max-w-4xl border-4 border-black rounded-3xl bg-white p-8 shadow-neo mt-8">
          <h2 className="text-3xl font-shrikhand text-custom-red mb-6 border-b-4 border-black pb-4">
            About Aditya Sharma Portfolio & Identity
          </h2>
          <div className="space-y-6 text-base font-bold text-gray-700 leading-relaxed">
            <p>
              This is the official portfolio website of <span className="bg-custom-yellow px-1 border border-black text-black font-extrabold">Aditya Sharma</span>, also known as <span className="font-extrabold">Aadi, WTF Aadi, iadi0, and iadi01</span>. The platform showcases web development projects, full-stack applications, software engineering workflows, UI/UX designs, and the learning timeline of an aspiring Full Stack Software Engineer from Jamshedpur, India.
            </p>
            <p>
              By combining client-side React code with backend REST APIs, responsive layouts, and performance-tuned asset delivery, my projects (including GitAura, Weather App, TeamJams, Luxury Furniture, Boutique Showcase, and Restaurant systems) are engineered to load instantly.
            </p>
            <p>
              This dedicated content page acts as an indexing hub to verify online entity matches for search terms like: Aditya Sharma Portfolio, Adi Sharma Portfolio, Aadi Portfolio, WTF Aadi Portfolio, iadi0 Portfolio, and iadi01 Developer.
            </p>
          </div>
        </section>

        {/* Brand identity section */}
        <BrandIdentity />

        {/* FAQ section */}
        <FAQSection />

      </main>

      {/* Footer */}
      <footer id="contact" className="w-full bg-black text-white py-12 border-t-4 border-white mt-10 text-center">
        <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">
          Contact Aditya Sharma
        </h2>
        <p className="text-sm text-gray-400 mb-6 font-mono font-bold">
          Email: adityasharma10@amityonline.com | Location: Jamshedpur, India
        </p>
        
        {/* Social Badges */}
        <div className="flex gap-4 mb-8 text-2xl justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:scale-110 transition-transform text-red-500 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-black bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-blue-700 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-orange-600 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://www.instagram.com/iaadi0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-pink-600 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-lg font-shrikhand text-white mb-2">
          Made with ☕, 💻, and a curious soul
        </p>
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
