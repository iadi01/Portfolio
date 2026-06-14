import { FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/personalData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-10 px-4 mx-auto max-w-7xl bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo selection:bg-custom-yellow selection:text-black">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand text-black">Projects by Aadi</h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden"
          >
            {/* Top color bar */}
            <div className={`absolute top-0 left-0 right-0 h-4 ${project.color || 'bg-custom-purple'} border-b-4 border-black`} />
            
            {/* Title & Live Link Button */}
            <div className="mt-4 flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-shrikhand">{project.title}</h3>
                <span className="bg-red-500 text-black text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse inline-block">
                  LIVE PROJECT
                </span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label={`View live demo for ${project.title}`}
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            {/* Tech tag list */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm font-medium text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights bullets list */}
            <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
              {project.highlights.map((bullet, bulletIdx) => (
                <li key={bulletIdx}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

