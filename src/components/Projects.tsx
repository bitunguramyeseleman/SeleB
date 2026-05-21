import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  FileText,
  ArrowRight,
} from 'lucide-react';

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
    description:
      'A real-time team collaboration platform with kanban boards, chat, and analytics dashboards.',
    image:
      'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762225851_a9bb0da5.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Full-Stack',
    live: 'https://example.com',
    github: 'https://github.com',
    form: 'https://forms.google.com',
  },
  {
    title: 'ShopHub — E-commerce',
    description:
      'Full-featured e-commerce store with Stripe payments, admin dashboard, and product analytics.',
    image:
      'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762227040_7ee39b4a.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    category: 'Web Apps',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'FitTrack — Fitness App',
    description:
      'Cross-platform mobile app to track workouts, nutrition, and progress with custom plans.',
    image:
      'https://d64gsuwffb70l.cloudfront.net/6a05c160b8bb77127ea56993_1778762272179_ac5edbf9.png',
    tags: ['React Native', 'Firebase', 'Expo'],
    category: 'Mobile',
    live: 'https://example.com',
    github: 'https://github.com',
  },
];

const filters: Array<
  'All' | 'Web Apps' | 'Mobile' | 'Full-Stack'
> = ['All', 'Web Apps', 'Mobile', 'Full-Stack'];

const Projects: React.FC = () => {
  const [active, setActive] =
    useState<typeof filters[number]>('All');

  const visible =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0B0B0B] py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 backdrop-blur-xl">
            Featured Projects
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Premium Digital
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              {' '}
              Experiences
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            A collection of modern applications crafted with
            performance, scalability, and exceptional user
            experience in mind.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-2xl px-6 py-3 text-sm font-bold transition-all duration-300 ${
                active === f
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_10px_40px_rgba(250,204,21,0.35)]'
                  : 'border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl hover:border-yellow-500/40 hover:bg-yellow-500/10 hover:text-yellow-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500/30"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute left-5 top-5 rounded-full border border-yellow-500/20 bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-300 backdrop-blur-md">
                  {p.category}
                </div>

                {/* Floating Buttons */}
                <div className="absolute bottom-5 right-5 flex gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-yellow-400 p-4 text-black shadow-2xl transition hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-4 text-black shadow-2xl transition hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-yellow-300">
                  {p.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-yellow-500/10 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-yellow-300 transition-all duration-300 hover:gap-4"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  {p.form && (
                    <a
                      href={p.form}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-3 text-yellow-300 transition hover:bg-yellow-500/20"
                    >
                      <FileText className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Glow Hover */}
              <div className="absolute inset-0 -z-10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;