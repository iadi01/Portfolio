import { motion } from 'framer-motion';

export default function FAQSection() {
  const faqs = [
    {
      q: "Who is Aditya Sharma?",
      a: "Aditya Sharma is a BCA student and aspiring Full Stack Developer from India."
    },
    {
      q: "Who is WTF Aadi?",
      a: "WTF Aadi is the personal brand of Aditya Sharma."
    },
    {
      q: "What is iadi0?",
      a: "iadi0 is the online username used by Aditya Sharma."
    }
  ];

  return (
    <section id="faq" className="w-full py-10 px-4 max-w-7xl mx-auto bg-custom-blue border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo selection:bg-custom-yellow selection:text-black">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 max-w-full">
        <div className="bg-custom-yellow px-4 md:px-8 py-2.5 md:py-3 rounded-2xl md:rounded-full border-4 border-black w-fit shadow-neo max-w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-shrikhand text-black text-center leading-tight">Frequently Asked Questions</h2>
        </div>
      </div>

      {/* FAQ Cards List */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white border-4 border-black p-6 rounded-2xl shadow-neo"
          >
            <h3 className="text-xl font-black mb-2 text-custom-purple font-mono">
              {faq.q}
            </h3>
            <p className="text-base font-bold text-gray-800 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
