export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-black text-white py-8 border-t-4 border-white mt-20 text-center selection:bg-custom-yellow selection:text-black">
      <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">
        Contact Aditya Sharma
      </h2>
      <p className="text-sm text-gray-400 mb-4 font-mono font-bold">
        Email: adityasharma10@amityonline.com | Location: Jamshedpur, India
      </p>

      {/* Footer SEO block */}
      <section className="max-w-4xl mx-auto px-6 mb-8 text-left border-t border-gray-800 pt-8 mt-8">
        <h2 className="text-xl font-shrikhand text-custom-yellow mb-4 uppercase">
          About This Portfolio
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          This is the official portfolio website of Aditya Sharma, also known as Aadi, WTF Aadi, iadi0, and iadi01. The portfolio showcases projects, web applications, software engineering work, UI/UX designs, and the learning journey of an aspiring Full Stack Developer.
        </p>
        <p className="text-xs text-gray-500 leading-relaxed font-mono">
          <strong>Keywords:</strong> Aditya Sharma Portfolio, Adi Sharma Portfolio, Aadi Portfolio, WTF Aadi Portfolio, iadi0 Portfolio, Software Engineer Portfolio, Full Stack Developer Portfolio.
        </p>
      </section>

      <p className="text-lg font-shrikhand text-white mb-2">
        Made with ☕, 💻, and a curious soul
      </p>
      <div className="text-xs text-gray-400">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}

