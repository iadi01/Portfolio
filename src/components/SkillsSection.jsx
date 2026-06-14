import { skills } from '../data/personalData';

export default function SkillsSection() {
  const colors = [
    'bg-custom-pink',
    'bg-custom-blue',
    'bg-custom-green',
    'bg-custom-yellow',
    'bg-custom-red',
    'bg-purple-300'
  ];

  return (
    <section id="skills" className="w-full py-10 px-4 max-w-7xl mx-auto bg-custom-pink border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo font-sans">
      {/* Centered Yellow Header Badge */}
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo">
        <h2 className="text-3xl font-shrikhand">Skills of Aditya Sharma</h2>
      </div>

      {/* Skills Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.category}
            className="bg-white border-4 border-black p-5 rounded-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden"
          >
            {/* Category tag */}
            <h3 className={`font-shrikhand text-xl mb-3 ${colors[index % colors.length]} inline-block px-2 border-2 border-black rounded-md`}>
              {skill.category}
            </h3>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-100 px-3 py-1 rounded-full border-2 border-black text-sm font-bold hover:bg-custom-green transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

