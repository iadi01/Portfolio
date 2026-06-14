import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aadi-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status) => {
    localStorage.setItem('aadi-cookie-consent', status);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto w-auto md:w-full md:max-w-md bg-custom-yellow border-4 border-black rounded-2xl p-4 md:p-5 shadow-neo z-[9999] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans select-none"
        >
          <div className="text-left w-full">
            <h3 className="font-shrikhand text-lg md:text-xl mb-1 text-black">Cookies &amp; Privacy 🍪</h3>
            <p className="text-[10px] md:text-xs font-bold text-gray-800 leading-snug">
              This site uses cookies to ensure you get the best experience on Aadi Portfolio. Accept to proceed!
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={() => handleConsent('declined')}
              className="px-3 py-1.5 md:px-4 md:py-2 bg-white text-black font-bold border-2 border-black rounded-xl hover:translate-y-[2px] transition-transform cursor-pointer text-xs md:text-sm"
            >
              DECLINE
            </button>
            <button
              onClick={() => handleConsent('accepted')}
              className="px-3 py-1.5 md:px-4 md:py-2 bg-custom-green text-black font-bold border-2 border-black rounded-xl shadow-neo-sm hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer text-xs md:text-sm"
            >
              ACCEPT
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
