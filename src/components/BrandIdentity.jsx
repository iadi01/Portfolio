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
            <h2 className="text-3xl md:text-4xl font-shrikhand text-black mb-4 uppercase tracking-wide">
              WTF Aadi Personal Brand
            </h2>
            <p className="text-base font-bold text-gray-800 leading-relaxed mb-4">
              In the developer community, Aditya Sharma is widely referred to as <span className="bg-white px-1 border border-black">WTF Aadi</span> or <span className="bg-white px-1 border border-black">WTFAadi</span>. This personal branding is highlighted in the WTF Aadi Portfolio and WTF Aadi Website. Known as WTF Aadi Developer, WTFAadi Developer, Aadi WTF Developer, and Aadi Sharma WTF, Aditya builds highly interactive and unconventional web experiences.
            </p>
            <p className="text-base font-bold text-gray-800 leading-relaxed">
              Under the WTF Aadi Tech banner, various WTF Aadi Projects, WTFAadi Projects, and contributions are published on WTF Aadi GitHub. As a WTF Aadi Full Stack Developer and WTF Aadi Web Developer, he is actively building projects for the WTF Aadi India ecosystem, representing his creative software engineering endeavors.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">#WTFAadi</span>
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">#PersonalBrand</span>
            <span className="bg-black text-white px-3 py-1 font-mono text-xs rounded-full">#CreativeDev</span>
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
            <h2 className="text-3xl md:text-4xl font-shrikhand text-black mb-4 uppercase tracking-wide">
              iadi0 Developer Identity
            </h2>
            <p className="text-base font-bold text-gray-800 leading-relaxed mb-4">
              <span className="bg-white px-1 border border-black">iadi0</span> is the primary online username and developer identity used by Aditya Sharma across GitHub, LinkedIn, and other professional platforms. Under the names iadi0, iadi0 Portfolio, and iadi01 Developer, Aditya publishes open-source repositories, developer tools, and full stack applications.
            </p>
            <p className="text-base font-bold text-gray-800 leading-relaxed">
              Search queries for iadi0 Portfolio, iadi01 Developer, iadi0 GitHub, and iadi0 Projects resolve directly to this official portfolio. This unified identity establishes a strong digital footprint, making it easy for recruiters and developers to explore the projects, code quality, and engineering capabilities of Aditya Sharma.
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
