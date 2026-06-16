import { motion } from 'framer-motion';

export default function BrandIdentity() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto w-full overflow-hidden select-none selection:bg-custom-yellow selection:text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: WTF Aadi Personal Brand */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-custom-yellow border-4 border-black p-6 md:p-8 rounded-3xl shadow-neo flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-shrikhand text-black mb-4 uppercase tracking-wide">
              Aadi Developer Handle
            </h2>
            <p className="text-base font-bold text-gray-800 leading-relaxed mb-4">
              In the developer community and on my socials, I am often known as <span className="bg-white px-1 border border-black">Aadi</span>. I focus on building practical, interactive, and responsive web applications.
            </p>
            <p className="text-base font-bold text-gray-800 leading-relaxed">
              Under this nickname, I publish my side projects and contribute to open-source code on GitHub. I represent my learning journey through these digital creations, showcasing my dedication to frontend and full-stack web development.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">#Aadi</span>
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">#PersonalBrand</span>
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">#StudentDev</span>
          </div>
        </motion.div>

        {/* Card 2: iadi0 Developer Identity */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="bg-custom-green border-4 border-black p-6 md:p-8 rounded-3xl shadow-neo flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-shrikhand text-black mb-4 uppercase tracking-wide">
              iadi0 Developer Identity
            </h2>
            <p className="text-base font-bold text-gray-800 leading-relaxed mb-4">
              <span className="bg-white px-1 border border-black">iadi0</span> is my primary online username and developer identity across GitHub, LinkedIn, and other professional platforms. Under the names iadi0, iadi0 Portfolio, and iadi01 Developer, I publish my open-source repositories, developer tools, and full stack applications.
            </p>
            <p className="text-base font-bold text-gray-800 leading-relaxed">
              Search queries for my iadi0 Portfolio, iadi01 Developer, iadi0 GitHub, and iadi0 Projects resolve directly to this official portfolio. This unified identity establishes my strong digital footprint, making it easy for recruiters and developers to explore my projects, code quality, and engineering capabilities.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">@iadi0</span>
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">@iadi01</span>
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">#DeveloperIdentity</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
