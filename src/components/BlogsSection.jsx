import { FaMediumM, FaExternalLinkAlt } from 'react-icons/fa';
import { blogs } from '../data/personalData';

export default function BlogsSection() {
  const cardHeaderColors = [
    'bg-custom-yellow',
    'bg-custom-blue',
    'bg-custom-pink'
  ];

  return (
    <section id="blogs" className="py-10 px-4 max-w-7xl mx-auto w-full selection:bg-custom-yellow selection:text-black">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-purple px-8 py-3 border-4 border-black shadow-neo rounded-full">
          <h3 className="text-3xl font-shrikhand text-black">BLOGS</h3>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col h-full relative bg-white rounded-2xl overflow-hidden"
          >
            {/* Window Header */}
            <div className={`border-b-4 border-black px-3 py-2 flex justify-between items-center ${cardHeaderColors[index % cardHeaderColors.length]}`}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
              </div>
              <span className="font-mono text-[10px] font-black uppercase tracking-widest">article.exe</span>
            </div>

            {/* Window Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold leading-snug">{blog.title}</h3>
                  <FaMediumM className="text-3xl flex-shrink-0 text-black" />
                </div>
                <p className="text-sm font-medium mb-6 text-gray-700 leading-relaxed">{blog.excerpt}</p>
              </div>

              {/* Dashed separator & Footer */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t-4 border-black border-dashed">
                <span className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono">
                  {blog.date}
                </span>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black text-white px-4 py-2 font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-black hover:text-custom-yellow cursor-pointer"
                  aria-label={`Read article: ${blog.title}`}
                >
                  Read <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

