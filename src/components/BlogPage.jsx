import { useState, useEffect } from 'react';
import { FaArrowLeft, FaMediumM, FaEnvelope, FaGithub, FaLinkedin, FaCode, FaInstagram, FaBars, FaTimes, FaFolderOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { blogs, personalInfo, projects } from '../data/personalData';
import { navigateTo } from '../utils/router';
import FAQSection from './FAQSection';
import BrandIdentity from './BrandIdentity';

export default function BlogPage({ onContactClick }) {
  const [time, setTime] = useState(new Date());
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 1. Store original metadata to restore on unmount
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : "";
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const originalKeywords = metaKeywords ? metaKeywords.getAttribute("content") : "";
    const canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical ? canonical.getAttribute("href") : "";

    // 2. Set new SEO metadata for the blog page
    document.title = "Aditya Sharma Portfolio Blogs | WTF Aadi | Full Stack Developer | iadi0";
    
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the official blog posts of Aditya Sharma (Aadi / WTF Aadi / iadi0 / iadi01). Comprehensive articles on Full Stack Development, Software Engineering, REST APIs, Git workflows, UI/UX, and performance optimization from Jamshedpur, India.");
    }
    
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "Aditya Sharma, Aditya Sharma Portfolio, Aditya Sharma Developer, Aditya Sharma Full Stack Developer, Aditya Sharma Software Engineer, Adi Sharma, Adi Sharma Portfolio, Aadi, Aadi Portfolio, WTF Aadi, WTF Aadi Portfolio, iadi0, iadi0 Portfolio, iadi01, Full Stack Developer Portfolio, Software Engineer Portfolio, BCA Student Portfolio, Developer from India, Developer from Jamshedpur, Aditya Sharma Portfolio Website, Aditya Sharma Official Website, Aditya Sharma Personal Website, Aditya Sharma GitHub, Aditya Sharma LinkedIn, Aditya Sharma Developer Portfolio, Aditya Sharma Coding Portfolio, Aditya Sharma Resume, Aditya Sharma UI UX, Aditya Sharma JavaScript Developer, Aadi Portfolio Website, Aadi Official Website, Aadi Personal Website, Aadi Coding Portfolio, Aadi Developer Portfolio, Aadi Student Portfolio, Aadi BCA Student, Aadi Programmer, Aadi React Developer, Aadi Next.js Developer, Adi Sharma Website, Adi Sharma Portfolio Website, Adi Sharma Official Website, Adi Sharma Personal Website, Adi Sharma Developer Portfolio, Adi Sharma Student Portfolio, Adi Sharma Coding Portfolio, Adi Sharma India, Adi Sharma Jamshedpur, Adi Sharma BCA, Adi Sharma Programmer, WTF Aadi Portfolio Website, WTF Aadi Official Website, WTF Aadi Personal Website, WTF Aadi Coding Portfolio, WTF Aadi Developer Portfolio, WTF Aadi Projects Showcase, WTF Aadi Tech, WTF Aadi Developer, WTF Aadi India, WTF Aadi Jamshedpur, iadi0 Website, iadi0 GitHub, iadi0 Developer Portfolio, iadi0 Personal Website, iadi0 Full Stack Developer, iadi0 Software Engineer, iadi0 Portfolio Website, iadi0 Official Website, iadi0 Coding Portfolio, iadi0 Tech Portfolio, iadi0 Web Developer, iadi0 Student Developer, iadi0 India, iadi0 Jamshedpur, iadi0 Projects, iadi0 GitHub Portfolio, iadi01 Developer, iadi01 Portfolio, iadi01 Website, iadi01 Projects, iadi01 GitHub, iadi01 Developer Portfolio, iadi01 Personal Website, iadi01 Coding Portfolio, iadi01 Full Stack Developer, GitAura Developer, GitAura Project, Weather App Developer, Weather App Project, TeamJams Project, Trip Budget Calculator, Restaurant Website Developer, Furniture Website Developer, Boutique Website Developer, Developer Projects Showcase");
    }
    
    if (canonical) {
      canonical.setAttribute("href", "https://aadi-sharma.dev/blog");
    }

    // 3. Inject BreadcrumbList and FAQ Schema JSON-LD
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aadi-sharma.dev/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://aadi-sharma.dev/blog"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Aditya Sharma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aditya Sharma (also known as Aadi or WTF Aadi) is a BCA student, Full Stack Developer, and aspiring Software Engineer from Jamshedpur, India, building modern web applications."
          }
        },
        {
          "@type": "Question",
          "name": "Who is WTF Aadi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WTF Aadi is the personal brand and developer handle of Aditya Sharma, who creates responsive web apps and interactive projects."
          }
        },
        {
          "@type": "Question",
          "name": "What is the tech stack of iadi0?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aditya Sharma (iadi0 / iadi01) works with HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, REST APIs, and Git/GitHub."
          }
        }
      ]
    };

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "blog-breadcrumb-schema";
    breadcrumbScript.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "blog-faq-schema";
    faqScript.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // 4. Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (metaDesc) metaDesc.setAttribute("content", originalDesc);
      if (metaKeywords) metaKeywords.setAttribute("content", originalKeywords);
      if (canonical) canonical.setAttribute("href", originalCanonical);
      
      const elB = document.getElementById("blog-breadcrumb-schema");
      if (elB) elB.remove();
      
      const elF = document.getElementById("blog-faq-schema");
      if (elF) elF.remove();
    };
  }, []);

  useEffect(() => {
    // Scroll to hash target if present
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${weekday}, ${day} ${month} ${year}`;
  };

  const navItems = [
    { name: 'EXPERIENCE', id: 'experience', path: '/' },
    { name: 'PROJECTS', id: 'projects', path: '/' },
    { name: 'SKILLS', id: 'skills', path: '/' },
    { name: 'BLOGS', id: 'blogs', path: '/blog' },
    { name: 'EDUCATION', id: 'education', path: '/' },
  ];

  const handleNavClick = (item) => {
    if (item.path === '/blog') {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setMobileOpen(false);
    } else {
      navigateTo(item.path, `#${item.id}`);
    }
  };

  const cardHeaderColors = [
    'bg-custom-yellow',
    'bg-custom-blue',
    'bg-custom-pink'
  ];

  return (
    <div className="min-h-screen bg-custom-blue text-black overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative">
      
      {/* Blog Page Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-custom-purple border-4 border-black rounded-full px-4 py-3 shadow-neo flex justify-between items-center">
        <div 
          onClick={() => navigateTo('/')} 
          className="text-xl md:text-2xl font-shrikhand text-black ml-2 cursor-pointer hover:scale-105 transition-transform"
        >
          PORTFOLIO
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-1.5 lg:gap-3 font-bold text-xs lg:text-sm items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="px-2 py-1 lg:px-4 lg:py-2 bg-white text-black rounded-full border-black border-2 border-b-2 md:border-b-4 border-r-2 md:border-r-4 hover:bg-white hover:text-black hover:border-black hover:border-b-2 hover:border-r-2 active:border-b-2 active:border-r-2 active:translate-y-1 transition-all cursor-pointer font-bold"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              onContactClick();
            }}
            className="px-3 py-1 lg:px-5 lg:py-2 bg-custom-pink text-black border-2 border-black border-b-4 lg:border-b-8 border-r-4 lg:border-r-8 rounded-full hover:border-b-4 hover:border-r-4 active:translate-y-1 transition-all cursor-pointer font-bold"
          >
            CONTACT
          </button>
        </div>

        {/* Date Badge */}
        <div className="hidden lg:flex items-center gap-2 bg-custom-yellow text-black px-4 py-1 rounded-full font-mono text-sm border-black border-2 border-b-4 border-r-4">
          <span>█</span>
          <span>{formatDate(time)}</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-white text-2xl bg-black p-2 rounded-full border-2 border-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-40 bg-custom-purple border-4 border-black rounded-3xl p-4 flex flex-col gap-3 shadow-neo animate-bounce-in md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="bg-white border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left hover:bg-gray-100 transition-all cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              onContactClick();
            }}
            className="bg-custom-pink border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left transition-all cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      )}

      {/* Blog Container */}
      <main className="w-full max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center gap-16">
        
        {/* Back navigation button */}
        <button
          onClick={() => navigateTo('/')}
          className="self-start flex items-center gap-2 bg-white text-black font-bold px-5 py-2.5 rounded-full border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all cursor-pointer"
        >
          <FaArrowLeft /> Back to Portfolio
        </button>

        {/* Section Title */}
        <div className="bg-custom-pink px-8 py-4 rounded-full border-4 border-black shadow-neo">
          <h1 className="text-3xl md:text-5xl font-shrikhand text-black">
            Aditya Sharma Portfolio Blogs
          </h1>
        </div>

        {/* Blog Posts list */}
        <div id="blogs" className="w-full max-w-4xl flex flex-col gap-16 mt-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              id={blog.slug}
              className="border-4 border-black shadow-neo bg-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-all"
            >
              {/* Window Header */}
              <div className={`border-b-4 border-black px-4 py-3 flex justify-between items-center ${cardHeaderColors[idx % cardHeaderColors.length]}`}>
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                </div>
                <span className="font-mono text-xs font-black uppercase tracking-widest">
                  {blog.slug}.exe
                </span>
              </div>

              {/* Content Panel */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6 gap-6">
                  <h2 className="text-3xl font-shrikhand text-purple-700 leading-tight">
                    {blog.title}
                  </h2>
                  <div className="bg-black p-3 rounded-full text-white border-2 border-black flex-shrink-0">
                    <FaMediumM className="text-3xl" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center mb-8 border-b-2 border-black border-dashed pb-4 font-mono font-bold text-sm text-gray-500">
                  <span className="bg-gray-100 border border-black px-2 py-1 rounded-md">
                    📅 {blog.date}
                  </span>
                  <span className="bg-gray-100 border border-black px-2 py-1 rounded-md">
                    ⏱️ {blog.readTime}
                  </span>
                  <div className="flex gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="bg-custom-blue text-black px-2.5 py-0.5 border border-black rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Body */}
                <div className="space-y-6 text-lg font-medium text-gray-800 leading-relaxed">
                  {blog.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Catalog Section - Detailed specs for SEO indexing */}
        <section id="project-specs" className="w-full max-w-4xl border-4 border-black rounded-3xl bg-white p-8 shadow-neo mt-8">
          <h2 className="text-3xl font-shrikhand text-custom-purple mb-6 border-b-4 border-black pb-4 flex items-center gap-3">
            <FaFolderOpen className="text-black" /> Project Technical Specs
          </h2>
          <p className="text-base font-bold text-gray-700 mb-8 leading-relaxed">
            Detailed performance breakdown, implementation logic, and system architecture for my public applications.
          </p>
          <div className="flex flex-col gap-12 mt-8">
            {projects.map((project, idx) => (
              <div key={idx} className="border-4 border-black rounded-3xl overflow-hidden bg-gray-50 shadow-neo hover:-translate-y-1 transition-all">
                {/* Header */}
                <div className={`border-b-4 border-black px-4 py-2 flex justify-between items-center ${cardHeaderColors[idx % cardHeaderColors.length]}`}>
                  <span className="font-mono text-xs font-black uppercase tracking-wider">{project.title.toLowerCase().replace(/\s+/g, '-')}-spec.exe</span>
                  <div className="flex gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-black hover:scale-110 transition-transform">
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 font-mono text-black">
                    {project.title} — Full Description
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tag) => (
                      <span key={tag} className="bg-white border border-black px-2.5 py-0.5 text-xs font-mono font-bold rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-base font-bold text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t-2 border-black border-dashed pt-4">
                    <h4 className="font-mono font-black text-xs uppercase tracking-wider text-gray-400 mb-3">Core Features & Optimizations</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm font-bold text-gray-800">
                      {project.highlights.map((bullet, bulletIdx) => (
                        <li key={bulletIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Layer - Fully Visible on this Dedicated Blog Page */}
        <section className="w-full max-w-4xl border-4 border-black rounded-3xl bg-white p-8 shadow-neo mt-8">
          <h2 className="text-3xl font-shrikhand text-custom-red mb-6 border-b-4 border-black pb-4">
            About Aditya Sharma Portfolio & Identity
          </h2>
          <div className="space-y-6 text-base font-bold text-gray-700 leading-relaxed">
            <p>
              Welcome to my official portfolio website. I am <span className="bg-custom-yellow px-1 border border-black text-black font-extrabold">Aditya Sharma</span>, also known as <span className="font-extrabold">Aadi, WTF Aadi, iadi0, and iadi01</span>. This platform showcases my web development projects, full-stack applications, software engineering workflows, UI/UX designs, and my learning timeline as an aspiring Full Stack Software Engineer from Jamshedpur, India.
            </p>
            <p>
              By combining client-side React code with backend REST APIs, responsive layouts, and performance-tuned asset delivery, I engineer my projects (including GitAura, Weather App, TeamJams, Luxury Furniture, Boutique Showcase, and Restaurant systems) to load instantly.
            </p>
            <p>
              I created this dedicated content page as an indexing hub to verify my online entity matches for search queries like: Aditya Sharma Portfolio, Adi Sharma Portfolio, Aadi Portfolio, WTF Aadi Portfolio, iadi0 Portfolio, and iadi01 Developer.
            </p>
          </div>
        </section>

        {/* Brand identity section */}
        <BrandIdentity />

        {/* FAQ section */}
        <FAQSection />

      </main>

      {/* Footer */}
      <footer id="contact" className="w-full bg-black text-white py-12 border-t-4 border-white mt-10 text-center">
        <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">
          Contact Aditya Sharma
        </h2>
        <p className="text-sm text-gray-400 mb-6 font-mono font-bold">
          Email: adityasharma10@amityonline.com | Location: Jamshedpur, India
        </p>
        
        {/* Social Badges */}
        <div className="flex gap-4 mb-8 text-2xl justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:scale-110 transition-transform text-red-500 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-black bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-blue-700 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-orange-600 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://www.instagram.com/iaadi0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-pink-600 bg-white p-2 rounded-full border border-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-lg font-shrikhand text-white mb-2">
          Made with ☕, 💻, and a curious soul
        </p>
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
