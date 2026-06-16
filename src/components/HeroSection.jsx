import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaCode, 
  FaInstagram, 
  FaDownload, 
  FaExclamationTriangle 
} from 'react-icons/fa';
import { personalInfo } from '../data/personalData';
import { audioSynth } from '../utils/audioSynth';
import Terminal from './Terminal';

export default function HeroSection({ onContactClick }) {
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [langIndex, setLangIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section id="home" className="w-full pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center selection:bg-custom-yellow selection:text-black">
      {/* Left Column — Profile Card */}
      <motion.div
        className="w-full md:w-1/3 bg-white border-2 border-b-4 border-r-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Tape decoration */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200/50 w-20 h-6 rotate-[-5deg] border border-gray-400" />

        {/* Avatar */}
        <div className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 flex items-center justify-center text-4xl overflow-hidden">
          <img 
            src="/profile.webp" 
            alt="Aditya Sharma Full Stack Developer Portfolio" 
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Name */}
        <h2 className="text-4xl font-shrikhand mb-1">AADI</h2>

        {/* Role badge */}
        <div className="bg-black text-white px-3 py-1 font-mono text-sm rounded-md mb-4 rotate-1">
          FULL_STACK_DEVELOPER()
        </div>

        {/* Info section */}
        <div className="w-full space-y-3 text-left font-bold text-sm font-mono border-t-2 border-black pt-4">
          <div>
            <span className="bg-custom-yellow px-1 border border-black mr-2">[LOCATION]</span>
            {personalInfo.location}
          </div>
          <div>
            <span className="bg-custom-green px-1 border border-black mr-2">[STATUS]</span>
            {personalInfo.status}
          </div>
          <div>
            <span className="bg-custom-blue px-1 border border-black mr-2">[MISSION]</span>
            {personalInfo.mission}
          </div>
        </div>

        {/* Action buttons */}
        <div className="w-full flex flex-col gap-3 mt-6">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Aditya_Sharma_Resume.pdf"
            onClick={() => audioSynth.playClick()}
            onMouseEnter={() => audioSynth.playHover()}
            className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer block text-center text-black no-underline"
          >
            <FaDownload /> DOWNLOAD_RESUME
          </a>
          <button
            onClick={() => {
              audioSynth.playClick();
              onContactClick();
            }}
            onMouseEnter={() => audioSynth.playHover()}
            className="bg-custom-red text-black w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
          >
            <FaEnvelope /> CONTACT ME
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => audioSynth.playClick()}
            onMouseEnter={() => audioSynth.playHover()}
            className="hover:scale-110 transition-transform text-red-500 cursor-pointer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioSynth.playClick()}
            onMouseEnter={() => audioSynth.playHover()}
            className="hover:scale-110 transition-transform text-black cursor-pointer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioSynth.playClick()}
            onMouseEnter={() => audioSynth.playHover()}
            className="hover:scale-110 transition-transform text-blue-700 cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioSynth.playClick()}
            onMouseEnter={() => audioSynth.playHover()}
            className="hover:scale-110 transition-transform text-orange-600 cursor-pointer"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://www.instagram.com/iaadi0/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioSynth.playClick()}
            onMouseEnter={() => audioSynth.playHover()}
            className="hover:scale-110 transition-transform text-pink-600 cursor-pointer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="w-full md:w-2/3 flex flex-col gap-6"
        id="about"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        {/* Intro/Hero Text Card (Visually hidden for UI layout preservation, active for SEO crawlers) */}
        <div className="sr-only">
          <p>
            Official portfolio of Aditya Sharma (Aadi), also known as Adi Sharma, iadi0, and iadi01. I am a BCA student, aspiring Full Stack Developer, and creator of modern web applications.
          </p>
          <p>
            This portfolio website features my coding projects like GitAura, Weather App, TeamJams, and Trip Budget Calculator. It represents the developer profiles and learning journey of a student web developer in India.
          </p>
        </div>

        {/* About card */}
        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-2 border-b-4 border-r-4 border-black shadow-neo">
          <h2 className="text-4xl font-shrikhand mb-4 align-baseline" aria-label="About Aditya Sharma">
            About{' '}
            <span className="inline-grid grid-cols-1 grid-rows-1 justify-items-start align-baseline">
              {/* Invisible placeholder of the same font to lock layout width and baseline */}
              <span className="col-start-1 row-start-1 invisible font-shrikhand">Aditya</span>
              <AnimatePresence mode="wait">
                {shouldReduceMotion ? (
                  <span className="col-start-1 row-start-1 font-shrikhand">Aditya</span>
                ) : (
                  <motion.span
                    key={langIndex}
                    initial={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -6, filter: 'blur(3px)' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={`col-start-1 row-start-1 ${langIndex === 0 ? 'font-shrikhand' : ''}`}
                    style={langIndex === 1 ? { fontFamily: '"Noto Sans Devanagari", sans-serif', fontWeight: 900 } : undefined}
                  >
                    {langIndex === 0 ? 'Aditya' : 'आदित्य'}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>{' '}
            Sharma
          </h2>
          
          {/* New Wording */}
          <p className="text-lg font-semibold leading-relaxed mb-6 text-gray-800">
            {personalInfo.about}
          </p>

          <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm">
            🚀 Open to Software and Full-Stack Internships
          </div>
        </div>

        {/* Terminal */}
        <Terminal />
      </motion.div>

      {/* Privacy Notice Modal */}
      {showPrivacyNotice && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[70] p-4">
          <div className="bg-white w-full max-w-sm border-4 border-black rounded-3xl p-8 shadow-neo relative animate-bounce-in text-center flex flex-col items-center">
            <div className="text-7xl text-custom-yellow mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <FaExclamationTriangle />
            </div>
            <h3 className="text-3xl font-shrikhand mb-4 uppercase">Privacy Notice</h3>
            <p className="font-bold text-lg border-2 border-black p-4 bg-gray-100 rounded-xl leading-snug">
              Removed resume due to privacy concerns!
            </p>
            <button
              onClick={() => setShowPrivacyNotice(false)}
              className="mt-8 w-full bg-custom-red text-white font-bold py-3 border-4 border-black rounded-xl shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all cursor-pointer uppercase tracking-wider"
            >
              UNDERSTAND
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

