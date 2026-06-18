import { useState, useEffect } from 'react';
import { FaArrowLeft, FaEnvelope, FaGithub, FaLinkedin, FaCode, FaInstagram } from 'react-icons/fa';
import { blogs, personalInfo } from '../data/personalData';
import { navigateTo } from '../utils/router';

const renderParagraphContent = (text) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, linkText, url] = match;
    const startIndex = match.index;

    if (startIndex > lastIndex) {
      parts.push(text.substring(lastIndex, startIndex));
    }

    parts.push(
      <a 
        key={startIndex} 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#3b82f6] hover:underline font-bold"
      >
        {linkText}
      </a>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

export default function BlogPage({ onContactClick, currentPath }) {
  const [time, setTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Sync SEO title and metadata dynamically
  useEffect(() => {
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : "";

    const pathParts = currentPath.split('/');
    const blogSlug = pathParts[2] || null;

    if (blogSlug) {
      const blog = blogs.find(b => b.slug === blogSlug);
      if (blog) {
        document.title = `${blog.title} | Aadi Portfolio Blog`;
        if (metaDesc) {
          metaDesc.setAttribute("content", blog.excerpt);
        }
      }
    } else {
      document.title = "Aditya Sharma Portfolio Blogs | Student Developer | Aadi";
      if (metaDesc) {
        metaDesc.setAttribute("content", "Explore personal articles on Web Development, learning journeys, projects, APIs, and SEO insights from Aditya Sharma (Aadi).");
      }
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc) metaDesc.setAttribute("content", originalDesc);
    };
  }, [currentPath]);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${weekday}, ${day} ${month} ${year}`;
  };

  // Extract slug from URL: e.g. /blog/some-slug
  const pathParts = currentPath.split('/');
  const blogSlug = pathParts[2] || null;

  const activeBlog = blogSlug ? blogs.find(b => b.slug === blogSlug) : null;

  const categories = ['All', 'Learning', 'Projects', 'Web Development', 'SEO', 'Student Journey'];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(b => b.category === selectedCategory);

  const cardColors = [
    'bg-custom-yellow border-custom-yellow',
    'bg-custom-blue border-custom-blue',
    'bg-custom-pink border-custom-pink',
    'bg-custom-green border-custom-green',
  ];

  return (
    <div className="min-h-screen bg-custom-blue text-black overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative flex flex-col justify-between">
      
      {/* Blog Page Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-custom-purple border-4 border-black rounded-full px-6 py-3 shadow-neo flex justify-between items-center">
        <div 
          onClick={() => navigateTo('/')} 
          className="text-xl md:text-2xl font-shrikhand text-black cursor-pointer hover:scale-105 transition-transform"
        >
          PORTFOLIO
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => navigateTo('/')}
            className="px-4 py-2 bg-white text-black text-xs md:text-sm rounded-full border-black border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 active:translate-y-1 transition-all cursor-pointer font-bold"
          >
            HOME
          </button>
          <button
            onClick={onContactClick}
            className="px-4 py-2 bg-custom-pink text-black text-xs md:text-sm rounded-full border-black border-2 border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 active:translate-y-1 transition-all cursor-pointer font-bold"
          >
            CONTACT
          </button>
        </div>

        {/* Date Badge */}
        <div className="hidden lg:flex items-center gap-2 bg-custom-yellow text-black px-4 py-1 rounded-full font-mono text-sm border-black border-2 border-b-4 border-r-4">
          <span>█</span>
          <span>{formatDate(time)}</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="w-full max-w-5xl mx-auto px-4 pt-32 pb-20 flex-1 flex flex-col gap-10">
        
        {/* Render Single Article View */}
        {blogSlug ? (
          activeBlog ? (
            <div className="flex flex-col gap-8">
              {/* Back to Catalog Button */}
              <button
                onClick={() => navigateTo('/blog')}
                className="self-start flex items-center gap-2 bg-white text-black font-bold px-4 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all cursor-pointer text-sm"
              >
                <FaArrowLeft /> Back to Blogs
              </button>

              {/* Full Article Card */}
              <article className="border-4 border-black shadow-neo bg-white rounded-3xl overflow-hidden">
                {/* Window Header decoration */}
                <div className="border-b-4 border-black px-4 py-3 flex justify-between items-center bg-custom-purple">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                  </div>
                  <span className="font-mono text-xs font-black uppercase tracking-widest truncate">
                    {activeBlog.slug}.txt
                  </span>
                </div>

                {/* Article content */}
                <div className="p-6 md:p-10">
                  <div className="mb-6">
                    <span className="bg-custom-yellow px-3 py-1 border-2 border-black rounded-lg font-mono font-bold text-xs uppercase">
                      {activeBlog.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-shrikhand text-black mt-3 leading-tight">
                      {activeBlog.title}
                    </h1>
                    <div className="text-sm font-mono font-bold text-gray-500 mt-4 border-b-2 border-black border-dashed pb-4">
                      📅 {activeBlog.date} | ⏱️ {activeBlog.readTime}
                    </div>
                  </div>

                  <div className="space-y-6 text-base md:text-lg font-medium text-gray-800 leading-relaxed font-sans">
                    {activeBlog.content.map((p, idx) => (
                      <p key={idx}>{renderParagraphContent(p)}</p>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ) : (
            <div className="text-center py-20 bg-white border-4 border-black rounded-3xl shadow-neo">
              <h2 className="text-3xl font-shrikhand mb-4">404 - ARTICLE NOT FOUND</h2>
              <p className="font-bold text-gray-600 mb-6">The blog post you are searching for does not exist.</p>
              <button
                onClick={() => navigateTo('/blog')}
                className="bg-custom-purple text-black font-bold px-6 py-2.5 rounded-xl border-2 border-black shadow-neo-sm hover:translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all cursor-pointer"
              >
                Back to Blogs
              </button>
            </div>
          )
        ) : (
          /* Render Blog List View */
          <div className="flex flex-col gap-8">
            {/* Page Header */}
            <div className="text-center flex flex-col items-center gap-4 bg-white border-4 border-black p-8 rounded-3xl shadow-neo">
              <h1 className="text-4xl md:text-6xl font-shrikhand text-black">
                AADI_BLOGS()
              </h1>
              <p className="max-w-2xl text-sm md:text-base font-bold text-gray-700 leading-relaxed font-mono">
                Sharing my learning journey, web development tutorials, and project case studies as an aspiring full-stack developer.
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 justify-center py-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full border-2 border-black font-bold text-xs md:text-sm cursor-pointer transition-all shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 ${
                    selectedCategory === cat 
                      ? 'bg-custom-yellow text-black' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog, idx) => (
                <article
                  key={blog.slug}
                  className="bg-white border-4 border-black rounded-3xl shadow-neo overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  {/* Card Header color accent */}
                  <div className={`h-4 border-b-4 border-black ${cardColors[idx % cardColors.length]}`} />

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-custom-yellow px-2 py-0.5 border-2 border-black rounded-md font-mono text-[10px] font-bold uppercase">
                          {blog.category}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-gray-500">
                          {blog.date}
                        </span>
                      </div>
                      
                      <h2 
                        onClick={() => navigateTo(`/blog/${blog.slug}`)}
                        className="text-xl md:text-2xl font-shrikhand text-black mb-3 cursor-pointer hover:text-purple-700 transition-colors"
                      >
                        {blog.title}
                      </h2>
                      
                      <p className="text-sm font-medium text-gray-600 leading-relaxed mb-6">
                        {blog.excerpt}
                      </p>
                    </div>

                    <button
                      onClick={() => navigateTo(`/blog/${blog.slug}`)}
                      className="bg-custom-purple text-black font-bold py-2 px-4 rounded-xl border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all text-center text-xs w-fit cursor-pointer"
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredBlogs.length === 0 && (
              <div className="text-center py-12 bg-white border-4 border-black rounded-3xl font-mono font-bold text-gray-500">
                No blogs found in this category.
              </div>
            )}
          </div>
        )}
      </main>

      {/* Shared Blog Footer */}
      <footer className="w-full bg-black text-white py-8 border-t-4 border-white text-center mt-20">
        <p className="text-sm text-gray-400 mb-4 font-mono font-bold">
          Email: adityasharma10@amityonline.com | Location: Jamshedpur, India
        </p>
        
        {/* Social Icons */}
        <div className="flex gap-4 mb-4 text-xl justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:scale-110 transition-transform text-red-500 bg-white p-2 rounded-full border border-black"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-black bg-white p-2 rounded-full border border-black"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-blue-700 bg-white p-2 rounded-full border border-black"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-orange-600 bg-white p-2 rounded-full border border-black"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://www.instagram.com/iaadi0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-pink-600 bg-white p-2 rounded-full border border-black"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm font-mono text-gray-500">
          © {new Date().getFullYear()} Aditya Sharma. Built for recruiters.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black rounded-xl font-mono text-xs font-bold shadow-[4px_4px_0_rgba(236,72,153,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(236,72,153,1)] transition-all">
          🎨 Design inspired by the beautiful portfolio of <a href="https://aditi-portfolio-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-custom-pink hover:text-custom-purple transition-colors underline font-black">Aditi</a> ✨
        </div>
      </footer>

    </div>
  );
}
