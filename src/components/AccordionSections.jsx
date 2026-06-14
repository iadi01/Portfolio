import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVideo, FaCompass, FaCode } from 'react-icons/fa';
import { hackathons } from '../data/personalData';

export default function AccordionSections() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto flex flex-col gap-12 w-full overflow-hidden pb-10 selection:bg-custom-yellow selection:text-black">
      
      {/* 1. HACKATHONS ACCORDION (bg-custom-red, border-l-0) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className="w-[95%] md:w-[85%] lg:w-[75%] mx-auto md:ml-0 relative bg-custom-red border-4 md:border-l-0 border-black shadow-neo"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <h2 className="text-3xl md:text-4xl font-shrikhand text-white uppercase tracking-wide">HACKATHONS</h2>
          <button
            onClick={() => toggle('hackathons')}
            className="bg-white text-black px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider cursor-pointer"
          >
            {openSection === 'hackathons' ? 'Close' : 'Open'}
          </button>
        </div>

        <AnimatePresence>
          {openSection === 'hackathons' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'linear' }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-10 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {hackathons.map((h, idx) => (
                    <div
                      key={idx}
                      className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all flex flex-col h-full relative bg-white rounded-2xl overflow-hidden"
                    >
                      {/* Window Header */}
                      <div className={`border-b-4 border-black px-3 py-2 flex justify-between items-center ${idx === 0 ? 'bg-custom-yellow' : 'bg-custom-blue'}`}>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                          <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                          <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                        </div>
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest">hackathon.exe</span>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4 gap-4">
                          <h3 className="text-xl font-bold leading-snug">{h.name}</h3>
                        </div>
                        <p className={`font-bold text-lg mb-2 ${idx === 0 ? 'text-custom-red' : 'text-custom-blue'}`}>
                          {h.result}
                        </p>
                        <p className="text-sm font-medium text-gray-700 leading-relaxed border-t-4 border-black border-dashed pt-4 mt-auto">
                          {h.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 2. CODING STATS ACCORDION (bg-custom-yellow, border-r-0, ml-auto) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className="w-[95%] md:w-[85%] lg:w-[75%] mx-auto md:ml-auto md:mr-0 relative bg-custom-yellow border-4 md:border-r-0 border-black shadow-neo mt-4"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">CODING</h2>
          <button
            onClick={() => toggle('coding')}
            className="bg-black text-custom-yellow px-6 py-2 font-bold border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider cursor-pointer"
          >
            {openSection === 'coding' ? 'Close' : 'Open'}
          </button>
        </div>

        <AnimatePresence>
          {openSection === 'coding' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'linear' }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-10 pb-10">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-center gap-6 shadow-neo rounded-3xl w-full">
                    <div className="bg-black p-6 rounded-full border-4 border-custom-blue flex-shrink-0">
                      <span className="text-6xl">🐙</span>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <h3 className="text-3xl font-shrikhand text-purple-700 mb-2">GitHub Profile</h3>
                      <p className="font-bold text-xl mb-3">
                        6+ Repositories Published
                        <span className="bg-custom-pink px-2 border-2 border-black ml-2 text-sm shadow-sm inline-block rotate-2">
                          Active
                        </span>
                      </p>
                      <p className="text-base font-medium bg-gray-100 p-3 border-2 border-black inline-block mb-3 shadow-[4px_4px_0_rgba(0,0,0,1)] w-full">
                        <span className="text-custom-blue font-bold underline decoration-custom-blue">
                          Open source projects and development workflows.
                        </span>
                      </p>
                      <a
                        href="https://github.com/iadi01"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-sm font-bold bg-custom-blue text-black p-2 border-2 border-black w-fit shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-pointer"
                      >
                        🏆 View GitHub Profile (@iadi01)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 3. BEYOND CODE ACCORDION (bg-custom-purple, border-l-0) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className="w-[95%] md:w-[85%] lg:w-[75%] mx-auto md:ml-0 relative bg-custom-purple border-4 md:border-l-0 border-black shadow-neo mt-4"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">BEYOND CODE</h2>
          <button
            onClick={() => toggle('beyond-code')}
            className="bg-white text-black px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider cursor-pointer"
          >
            {openSection === 'beyond-code' ? 'Close' : 'Open'}
          </button>
        </div>

        <AnimatePresence>
          {openSection === 'beyond-code' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'linear' }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-10 pb-10 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto relative z-10">
                  
                  {/* Card 1: Video Editing */}
                  <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all relative shadow-neo mt-4 rounded-3xl">
                    <div className="absolute -top-10 -right-6 w-32 h-32 bg-custom-yellow rounded-full border-4 border-black overflow-hidden shadow-neo z-20">
                      <img 
                        src="/editing.jpg" 
                        alt="Video Editing" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <FaVideo className="text-4xl text-custom-red" />
                        <h3 className="text-3xl font-shrikhand">Video Editing</h3>
                      </div>
                      <p className="font-bold text-xl mb-4">@ Creative Projects</p>
                      <p className="text-sm font-mono bg-custom-blue text-black font-bold inline-block px-3 py-1 border-2 border-black rounded-full mb-6 shadow-sm">
                        2023 - Present
                      </p>
                      <p className="text-base font-medium leading-relaxed bg-gray-100 p-4 rounded-2xl border-2 border-black">
                        Editing high-quality videos and content with <span className="font-bold bg-custom-yellow px-1 border border-black">smooth transitions</span> and <span className="font-bold bg-custom-pink px-1 border border-black">creative storytelling</span>.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Travel & Exploration */}
                  <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all relative shadow-neo mt-4 rounded-3xl">
                    <div className="absolute -top-10 -right-6 w-32 h-32 bg-custom-pink rounded-full border-4 border-black overflow-hidden shadow-neo z-20">
                      <img 
                        src="/travel.png" 
                        alt="Travel and Exploration" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <FaCompass className="text-4xl text-custom-blue" />
                        <h3 className="text-3xl font-shrikhand">Travel</h3>
                      </div>
                      <p className="font-bold text-xl mb-4">@ Exploration</p>
                      <p className="text-sm font-mono bg-custom-green text-black font-bold inline-block px-3 py-1 border-2 border-black rounded-full mb-6 shadow-sm">
                        Always Active
                      </p>
                      <p className="text-base font-medium leading-relaxed bg-gray-100 p-4 rounded-2xl border-2 border-black">
                        Exploring new places and cultures to expand <span className="font-bold bg-custom-green px-1 border border-black">creative limits</span> and gain <span className="font-bold bg-custom-blue px-1 border border-black">fresh perspectives</span>.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

