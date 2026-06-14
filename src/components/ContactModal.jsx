import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/personalData';

export default function ContactModal({ isOpen, onClose }) {
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
          className="bg-white w-full max-w-sm border-4 border-black rounded-3xl p-8 shadow-neo relative text-center flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-3xl font-shrikhand mb-2">Let's Talk!</h2>
          <p className="text-gray-600 font-bold text-sm mb-6">
            I'd love to hear from you. Pick your favorite way to reach out!
          </p>

          {/* Contact links */}
          <div className="w-full flex flex-col gap-3 mb-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:shadow-none hover:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="bg-custom-red text-white font-bold py-3 w-full border-4 border-black rounded-xl shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <FiX className="text-xl" />
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
