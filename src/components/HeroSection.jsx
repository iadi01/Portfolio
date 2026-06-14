import { useState } from 'react';
import { motion } from 'framer-motion';
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
import Terminal from './Terminal';

export default function HeroSection({ onContactClick }) {
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);

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
            className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer block text-center text-black no-underline"
          >
            <FaDownload /> DOWNLOAD_RESUME
          </a>
          <button
            onClick={onContactClick}
            className="bg-custom-red text-black w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
          >
            <FaEnvelope /> CONTACT ME
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:scale-110 transition-transform text-red-500 cursor-pointer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-black cursor-pointer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-blue-700 cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-orange-600 cursor-pointer"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://www.instagram.com/iaadi0/"
            target="_blank"
            rel="noopener noreferrer"
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
            Official portfolio of Aditya Sharma (Aadi), also known as Adi Sharma, WTF Aadi, iadi0, and iadi01. I am a BCA student, aspiring Software Engineer, Full Stack Developer, and creator of modern web applications, developer tools, and digital experiences from Jamshedpur, India.
          </p>
          <p>
            This portfolio is built to showcase my skills, projects, learning journey, and identity as a web developer. It includes GitAura, Weather App, TeamJams, Trip Budget Calculator, Furniture Website, Boutique Website, and Restaurant Website.
          </p>
        </div>

        {/* About card */}
        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-2 border-b-4 border-r-4 border-black shadow-neo">
          <h2 className="text-4xl font-shrikhand mb-6">About Aditya Sharma</h2>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I am <span className="font-bold bg-white px-1 border border-black">Aditya Sharma</span>, also known as <span className="font-bold bg-white px-1 border border-black">Aadi</span> and <span className="font-bold bg-white px-1 border border-black">WTF Aadi</span>. I am a BCA student and <span className="font-bold bg-white px-1 border border-black">aspiring Full Stack Developer</span> focused on building clean, useful, and responsive web applications. This portfolio represents my official online presence and is optimized for anyone searching for <span className="font-bold bg-white px-1 border border-black">Aditya Sharma Portfolio</span>, <span className="font-bold bg-white px-1 border border-black">Adi Sharma Portfolio</span>, <span className="font-bold bg-white px-1 border border-black">Aadi Portfolio</span>, WTF Aadi, <span className="font-bold bg-white px-1 border border-black">iadi0 Portfolio</span>, and <span className="font-bold bg-white px-1 border border-black">iadi01 Developer</span>.
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I work with HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, REST APIs, UI/UX design, and Generative AI tools. My goal is to become a skilled Software Engineer and build digital products that solve real-world problems.
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I have strong technical and communication skills, and a logical approach to problem-solving. My journey in tech has made me adaptable and eager to create and collaborate.
          </p>
          {/* <p className="text-lg font-medium leading-relaxed mb-4">
            This portfolio highlights the skills, projects, learning journey, and career goals of Aditya Sharma as an aspiring <span className="font-bold bg-white px-1 border border-black">Full Stack Software Engineer</span>. The goal of WTF Aadi is to build useful, clean, and creative web experiences that turn ideas into working digital products.
          </p> */}
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

