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
          initial={{ y: 100, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: 100, opacity: 0, x: '-50%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg bg-custom-yellow border-4 border-black rounded-3xl p-6 shadow-neo z-[9999] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans select-none"
        >
          <div className="text-left">
            <h4 className="font-shrikhand text-xl mb-1 text-black">Cookies &amp; Privacy 🍪</h4>
            <p className="text-xs font-bold text-gray-800 leading-snug">
              This site uses cookies to ensure you get the best experience on Aadi Portfolio. Accept to proceed!
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto shrink-0">
            <button
              onClick={() => handleConsent('declined')}
              className="px-4 py-2 bg-white text-black font-bold border-2 border-black rounded-xl hover:translate-y-[2px] transition-transform cursor-pointer text-sm"
            >
              DECLINE
            </button>
            <button
              onClick={() => handleConsent('accepted')}
              className="px-4 py-2 bg-custom-green text-black font-bold border-2 border-black rounded-xl shadow-neo-sm hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer text-sm"
            >
              ACCEPT
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
