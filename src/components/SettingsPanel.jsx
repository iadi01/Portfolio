import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';
import { audioSynth } from '../utils/audioSynth';

export default function SettingsPanel({
  isOpen,
  onClose,
  activeTheme,
  setActiveTheme,
  cursorEnabled,
  setCursorEnabled,
}) {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('aadi-sound') !== 'false';
  });

  const themesList = [
    { id: 'classic', name: 'Classic Blue', color: 'bg-[#60a5fa]' },
    { id: 'cyber', name: 'Cyberpunk Neon', color: 'bg-[#39ff14]' },
    { id: 'sunset', name: 'Sunset Orange', color: 'bg-[#ea580c]' },
    { id: 'lavender', name: 'Soft Lavender', color: 'bg-[#8b5cf6]' },
    { id: 'mint', name: 'Mint Teal', color: 'bg-[#0d9488]' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-[70] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
        <motion.div
          className="bg-white w-full max-w-sm border-4 border-black rounded-3xl p-6 shadow-neo relative flex flex-col"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-3">
            <h3 className="text-2xl font-shrikhand text-black flex items-center gap-2">
              🎨 OS SETTINGS
            </h3>
            <button
              onClick={onClose}
              className="bg-custom-red text-white p-1 rounded-full border-2 border-black hover:scale-105 active:translate-y-0.5 cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Settings Body */}
          <div className="flex flex-col gap-6">
            {/* Theme Selector */}
            <div>
              <h4 className="font-mono font-black text-xs uppercase tracking-wider text-gray-400 mb-3">
                Accent Themes
              </h4>
              <div className="flex flex-col gap-2">
                {themesList.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      audioSynth.playClick();
                      setActiveTheme(t.id);
                    }}
                    className={`flex items-center justify-between w-full p-2.5 rounded-xl border-2 border-black font-bold active:translate-y-0.5 transition-all text-left cursor-pointer ${
                      activeTheme === t.id ? 'bg-black text-white' : 'bg-gray-50 text-black hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 border-black ${t.color}`} />
                      <span>{t.name}</span>
                    </div>
                    {activeTheme === t.id && <FiCheck className="text-xl" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Cursor & Sound Toggle */}
            <div className="border-t-2 border-black border-dashed pt-4">
              <h4 className="font-mono font-black text-xs uppercase tracking-wider text-gray-400 mb-3">
                Desktop Enhancements
              </h4>
              <div className="flex flex-col gap-3">
                {/* Cursor Toggle */}
                <button
                  onClick={() => {
                    audioSynth.playClick();
                    const val = !cursorEnabled;
                    setCursorEnabled(val);
                    localStorage.setItem('aadi-cursor', String(val));
                  }}
                  className={`flex items-center justify-between w-full p-3 rounded-xl border-2 border-black font-bold active:translate-y-0.5 transition-all text-left cursor-pointer ${
                    cursorEnabled ? 'bg-custom-green text-black' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <span>Interactive Cursor</span>
                  <span className="font-mono text-xs bg-white border-2 border-black px-2 py-0.5 rounded-md">
                    {cursorEnabled ? 'ON' : 'OFF'}
                  </span>
                </button>

                {/* Sound Toggle */}
                <button
                  onClick={() => {
                    const val = !soundEnabled;
                    setSoundEnabled(val);
                    audioSynth.setSoundEnabled(val);
                    if (val) {
                      setTimeout(() => audioSynth.playChirp(), 50);
                    }
                  }}
                  className={`flex items-center justify-between w-full p-3 rounded-xl border-2 border-black font-bold active:translate-y-0.5 transition-all text-left cursor-pointer ${
                    soundEnabled ? 'bg-custom-yellow text-black' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <span>System Sounds</span>
                  <span className="font-mono text-xs bg-white border-2 border-black px-2 py-0.5 rounded-md">
                    {soundEnabled ? 'ON' : 'OFF'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
