import React, { useState } from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Web Apps' | 'Mobile' | 'Full-Stack';
  live: string;
  github: string;
  form?: string;
};

const projects: Project[] = [
  {
    title: 'TaskFlow — Project Manager',
    description: 'A real-time team collaboration platform with kanban boards, chat, and analytics dashboards.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762225851_a9bb0da5.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Full-Stack',
    live: 'https://example.com',
    github: 'https://github.com',
    form: 'https://forms.google.com',
  },
  {
    title: 'ShopHub — E-commerce',
    description: 'Full-featured e-commerce store with Stripe payments, admin dashboard, and product analytics.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762227040_7ee39b4a.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    category: 'Web Apps',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'FitTrack — Fitness App',
    description: 'Cross-platform mobile app to track workouts, nutrition, and progress with custom plans.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762272179_ac5edbf9.png',
    tags: ['React Native', 'Firebase', 'Expo'],
    category: 'Mobile',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'EduPortal — Learning Platform',
    description: 'Online learning platform with video courses, quizzes, certificates, and instructor dashboard.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762229461_343f74a5.png',
    tags: ['Laravel', 'React', 'MySQL', 'AWS'],
    category: 'Full-Stack',
    live: 'https://example.com',
    github: 'https://github.com',
    form: 'https://forms.google.com',
  },
  {
    title: 'WeatherNow Mobile',
    description: 'Beautiful weather app with hourly forecasts, radar maps, and location-based alerts.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762253107_0ad3ccab.jpg',
    tags: ['Flutter', 'Dart', 'OpenWeather API'],
    category: 'Mobile',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'DevBlog — Markdown CMS',
    description: 'A developer-friendly blogging platform with markdown support, SEO, and dark mode.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762213179_d14a8192.png',
    tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    category: 'Web Apps',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'FinanceAI — Budget Tracker',
    description: 'Smart personal finance app with AI-powered spending insights and savings goals.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762212113_3749100a.jpg',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'Full-Stack',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'PortfolioPro Template',
    description: 'A modern, customizable portfolio template open-sourced for developers worldwide.',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762212461_d5ce8dc5.jpg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'Web Apps',
    live: 'https://example.com',
    github: 'https://github.com',
  },
];

const filters: Array<'All' | 'Web Apps' | 'Mobile' | 'Full-Stack'> = ['All', 'Web Apps', 'Mobile', 'Full-Stack'];

const Projects: React.FC = () => {
  const [active, setActive] = useState<typeof filters[number]>('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-yellow-600 uppercase tracking-[0.2em]">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Selected Works</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of digital products I've engineered — ranging from scalable web ecosystems to native mobile experiences.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all tracking-tight ${
                active === f
                  ? 'bg-yellow-500 text-slate-950 shadow-[0_10px_20px_rgba(234,179,8,0.3)] scale-105'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-yellow-400 hover:text-yellow-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((p) => (
            <div key={p.title} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-video bg-slate-900">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8 gap-4">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-yellow-500 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all shadow-xl" title="Live demo">
                    <ExternalLink className="w-5 h-5 text-slate-950" />
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white rounded-full hover:scale-110 transition-all shadow-xl" title="GitHub">
                    <Github className="w-5 h-5 text-slate-950" />
                  </a>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-[10px] font-black text-yellow-400 uppercase tracking-widest rounded-lg border border-yellow-500/20">
                  {p.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">{p.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-tighter rounded-full border border-amber-100">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-5 border-t border-slate-50">
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-950 text-white text-xs font-black rounded-xl hover:bg-yellow-500 hover:text-slate-950 transition-all active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" /> LIVE DEMO
                  </a>
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center px-4 py-2.5 border-2 border-slate-100 text-slate-900 text-xs font-black rounded-xl hover:border-yellow-500 hover:text-yellow-600 transition-all"
                  >
                    <Github className="w-4 h-4" /> CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;