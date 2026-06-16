import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/personalData';
import { audioSynth } from '../utils/audioSynth';

export default function ContactModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const contactLinks = [
    {
      label: 'Email Me',
      href: `mailto:${personalInfo.email}`,
      icon: <FiMail className="text-xl" />,
      color: 'bg-custom-yellow',
    },
    {
      label: 'GitHub',
      href: personalInfo.github,
      icon: <FiGithub className="text-xl" />,
      color: 'bg-custom-purple',
    },
    {
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: <FiLinkedin className="text-xl" />,
      color: 'bg-custom-blue',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/iaadi0/',
      icon: <FiInstagram className="text-xl" />,
      color: 'bg-custom-pink',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;

    audioSynth.playSuccess();

    // Default mailto integration that pre-fills user's email client
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Portfolio Message from ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');

    // Reset fields & Close
    setEmail('');
    setMessage('');
    onClose();
  };

  const handleFocus = () => {
    audioSynth.playHover();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[70] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white w-full max-w-2xl border-4 border-black rounded-3xl p-6 md:p-8 shadow-neo relative flex flex-col"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close corner icon button */}
          <button
            onClick={() => {
              audioSynth.playClick();
              onClose();
            }}
            onMouseEnter={() => audioSynth.playHover()}
            className="absolute top-4 right-4 bg-custom-red text-white p-1 rounded-full border-2 border-black hover:scale-105 active:translate-y-0.5 cursor-pointer z-10"
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-3">
            <span className="text-3xl">📬</span>
            <h3 className="text-2xl md:text-3xl font-shrikhand text-black">
              CONTACT_CENTER.EXE
            </h3>
          </div>

          {/* Two-Column Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
            
            {/* Left Column: Direct Messaging Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h4 className="font-mono font-black text-xs uppercase tracking-wider text-gray-400">
                Send Direct Message
              </h4>
              
              {/* Sender Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="sender-email" className="font-mono text-xs font-black uppercase text-black">
                  [YOUR EMAIL]
                </label>
                <input
                  id="sender-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    audioSynth.playClick();
                  }}
                  onFocus={handleFocus}
                  placeholder="name@example.com"
                  required
                  className="bg-white border-2 border-black p-3 rounded-xl w-full font-mono text-sm shadow-[2px_2px_0_rgba(0,0,0,1)] focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-none transition-all outline-none"
                />
              </div>

              {/* Message Content */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message-body" className="font-mono text-xs font-black uppercase text-black">
                  [MESSAGE]
                </label>
                <textarea
                  id="message-body"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    audioSynth.playClick();
                  }}
                  onFocus={handleFocus}
                  placeholder="Hey Aadi, let's collaborate on..."
                  required
                  rows={4}
                  className="bg-white border-2 border-black p-3 rounded-xl w-full font-mono text-sm shadow-[2px_2px_0_rgba(0,0,0,1)] focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-none transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onMouseEnter={() => audioSynth.playHover()}
                className="bg-custom-green text-black font-bold py-3 px-6 rounded-xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer w-full text-center"
              >
                Send your pigeon my way 🕊️
              </button>
            </form>

            {/* Right Column: Social Media Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-mono font-black text-xs uppercase tracking-wider text-gray-400">
                Social Media Handles
              </h4>
              <p className="text-sm font-medium text-gray-600 leading-relaxed font-sans">
                I'd love to connect! Choose your favorite social handle below to review my work or drop a line.
              </p>
              
              <div className="flex flex-col gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioSynth.playClick()}
                    onMouseEnter={() => audioSynth.playHover()}
                    className={`${link.color} w-full py-2.5 rounded-xl border-2 border-black font-bold shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer text-sm`}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
