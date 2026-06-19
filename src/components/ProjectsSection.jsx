import { FaExternalLinkAlt, FaGithub, FaReact, FaJs, FaNodeJs, FaChartPie, FaCodeBranch, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { projects } from '../data/personalData';
import { audioSynth } from '../utils/audioSynth';

const techIcons = {
  'React': <FaReact className="text-sky-500" aria-hidden="true" />,
  'JavaScript': <FaJs className="text-yellow-500" aria-hidden="true" />,
  'Tailwind CSS': <SiTailwindcss className="text-teal-400" aria-hidden="true" />,
  'GitHub API': <FaCodeBranch className="text-purple-500" aria-hidden="true" />,
  'Chart.js': <FaChartPie className="text-orange-500" aria-hidden="true" />,
  'Node.js': <FaNodeJs className="text-green-500" aria-hidden="true" />,
  'MongoDB': <SiMongodb className="text-green-600" aria-hidden="true" />,
  'GitHub': <FaGithub className="text-black" aria-hidden="true" />,
  'HTML5': <FaHtml5 className="text-orange-500" aria-hidden="true" />,
  'CSS3': <FaCss3Alt className="text-blue-600" aria-hidden="true" />,
};

function ProjectCard({ project }) {
  return (
    <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo neo-bounce-hover relative overflow-hidden flex flex-col justify-between h-full">
      {/* Top color bar */}
      <div className={`absolute top-0 left-0 right-0 h-4 ${project.color || 'bg-custom-purple'} border-b-4 border-black`} />
      
      <div className="mt-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-2xl font-shrikhand text-black mb-3">
          {project.title}
        </h3>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2 items-center mb-4">
          {project.tech.map((name) => (
            <div 
              key={name} 
              className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg border-2 border-black font-mono font-bold text-xs" 
              title={name}
            >
              {techIcons[name]}
              <span>{name}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm font-medium text-gray-700 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* What it solves */}
        <div className="bg-purple-50 p-3 rounded-xl border-2 border-black/15 mb-6 text-xs font-mono font-bold leading-normal">
          <span className="text-purple-700 font-extrabold uppercase tracking-wide">💡 What it solves:</span>
          <p className="text-gray-700 mt-1">{project.whatItSolves}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioSynth.playClick()}
          onMouseEnter={() => audioSynth.playHover()}
          className="flex-1 bg-custom-green text-black font-bold py-2.5 px-4 rounded-xl border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-1.5 text-center text-sm cursor-pointer"
        >
          <FaExternalLinkAlt className="text-xs" aria-hidden="true" /> Live Demo
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioSynth.playClick()}
            onMouseEnter={() => audioSynth.playHover()}
            className="bg-white text-black font-bold py-2.5 px-4 rounded-xl border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-1.5 text-sm cursor-pointer"
          >
            <FaGithub className="text-base" aria-hidden="true" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featured = projects.filter(p => p.category === 'featured');
  const uiClient = projects.filter(p => p.category === 'ui_client');

  return (
    <section id="projects" className="w-full py-12 px-4 mx-auto max-w-7xl bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo flex flex-col gap-12 selection:bg-custom-yellow selection:text-black">
      {/* Header */}
      <div className="flex justify-center">
        <div className="bg-white px-8 py-3 rounded-full border-4 border-black shadow-neo neo-sticker">
          <h2 className="text-3xl font-shrikhand text-black">PROJECTS</h2>
        </div>
      </div>

      {/* Featured Projects Group */}
      <div className="flex flex-col gap-6">
        <div className="bg-black text-white py-1 px-4 rounded-lg font-mono font-bold text-sm w-fit rotate-[-1deg]">
          📂 FEATURED_DEVELOPMENT_PROJECTS()
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>

      {/* UI / Client Projects Group */}
      <div className="flex flex-col gap-6 border-t-4 border-black border-dashed pt-8">
        <div className="bg-black text-white py-1 px-4 rounded-lg font-mono font-bold text-sm w-fit rotate-[1deg]">
          🎨 UI_&_CLIENT_STYLE_PROJECTS()
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiClient.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
