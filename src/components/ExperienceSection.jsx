import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaPlane } from 'react-icons/fa';
import { experience } from '../data/personalData';

export default function ExperienceSection() {
  return (
    <div className="relative w-full py-10 overflow-hidden">
      {/* Absolute airplane animation container */}
      <div className="absolute top-1/2 left-0 w-full h-0 z-50 pointer-events-none flex items-center">
        <motion.div
          initial={{ x: '-50vw' }}
          animate={{ x: '150vw' }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
          className="flex items-center absolute -translate-y-1/2"
        >
          <div className="w-[80vw] h-6 bg-white opacity-60 blur-xl rounded-full mr-[-20px]" />
          <div className="w-[60vw] h-3 bg-white opacity-80 blur-md rounded-full mr-[-40px] absolute right-[60px]" />
          <FaPlane className="text-gray-800 text-6xl drop-shadow-neo z-10" />
        </motion.div>
      </div>

      {/* Main Experience Section */}
      <section id="journey" className="w-full px-4 max-w-7xl mx-auto bg-custom-purple border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo relative z-10 py-10 selection:bg-custom-yellow selection:text-black">
        {/* Header */}
        <div className="flex justify-center mb-10 relative z-10">
          <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo">
            <h2 className="text-3xl font-shrikhand tracking-wide">Learning Journey of Aditya Sharma</h2>
          </div>
        </div>

        {/* Experience Cards List */}
        <div className="flex flex-col gap-12 items-center relative z-10 px-4 md:px-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white border-4 border-black p-6 md:p-8 pt-28 md:pt-8 rounded-3xl border-b-8 border-r-8 hover:-translate-y-2 hover:border-b-4 hover:border-r-4 transition-all z-10 mx-auto w-full max-w-4xl shadow-neo mt-12 md:mt-6"
            >
              {/* Date/Location Badge */}
              <div className="absolute -top-8 md:-top-6 left-4 right-4 md:left-auto md:right-8 flex flex-col gap-2 font-mono font-bold text-xs md:text-sm bg-custom-yellow px-4 py-3 rounded-xl border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] z-20 transform hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-black" /> {exp.duration}
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-black" /> {exp.location}
                </div>
              </div>

              {/* Card Header Info */}
              <div className="mt-2 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-shrikhand leading-tight mb-2 uppercase tracking-wide">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-bold">
                    <span className={`px-3 py-1 border-2 border-black rounded-md ${exp.color || 'bg-custom-purple'} shadow-neo-sm`}>
                      {exp.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Terminal Panel */}
              <div className="text-base font-medium bg-gray-50 p-4 rounded-xl border-2 border-black leading-relaxed shadow-inner mt-6">
                <div className="flex gap-2 mb-3 border-b-2 border-black pb-3">
                  <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black" />
                  <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black" />
                  <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black" />
                </div>
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

