import React from 'react';

type Skill = { name: string; level: number };

const groups: { title: string; color: string; skills: Skill[] }[] = [
  {
    title: 'Programming Languages',
    color: 'from-amber-500 to-yellow-300',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Python', level: 80 },
      { name: 'PHP', level: 82 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'from-yellow-600 via-yellow-400 to-amber-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'Node.js', level: 90 },
      { name: 'Laravel', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-yellow-400 to-yellow-600',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'Figma', level: 78 },
      { name: 'MongoDB', level: 80 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Yellow Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em]">Technical Stack</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-3 tracking-tight">
            My <span className="text-yellow-500">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col">
              <h3 className="text-xl font-black text-white mb-10 text-center uppercase tracking-widest border-b border-white/10 pb-4">
                {group.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-8">
                {group.skills.map((skill, idx) => (
                  <div key={skill.name} className="group relative flex flex-col items-center">
                    {/* The Sphere Container */}
                    <div 
                      className="relative flex items-center justify-center transition-all duration-700 ease-out group-hover:scale-110"
                      style={{ 
                        width: `${60 + skill.level / 2.5}px`, 
                        height: `${60 + skill.level / 2.5}px` 
                      }}
                    >
                      {/* Inner Glass Sphere */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${group.color} opacity-20 blur-sm group-hover:opacity-40 transition-opacity`} />
                      
                      {/* Main Orb Body */}
                      <div className={`
                        relative w-full h-full rounded-full 
                        bg-gradient-to-br ${group.color} 
                        border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]
                        flex items-center justify-center overflow-hidden
                        animate-float
                      `}
                      style={{ animationDelay: `${idx * 0.5}s` }}
                      >
                        {/* 3D Highlight Reflect */}
                        <div className="absolute top-2 left-3 w-1/3 h-1/3 bg-white/30 rounded-full blur-[2px]" />
                        
                        <span className="text-slate-950 font-black text-sm z-10">
                          {skill.level}%
                        </span>

                        {/* Liquid/Wave Effect inside Orb */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-white/10 transition-all duration-1000"
                          style={{ height: `${skill.level}%` }}
                        />
                      </div>

                      {/* Outer Glow Ring */}
                      <div className={`absolute -inset-2 rounded-full border border-yellow-500/0 group-hover:border-yellow-500/40 group-hover:scale-110 transition-all duration-500`} />
                    </div>

                    {/* Skill Name */}
                    <span className="mt-4 text-slate-300 font-bold text-xs uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sphere specific animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;