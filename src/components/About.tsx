import React from 'react';
import { Briefcase, Code, Coffee, Award, Download, FileText, Eye } from 'lucide-react';
// import { downloadResume, RESUME_URL } from '@/lib/resume'; // Assuming these exist

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: '3+' },
  { icon: Code, label: 'Projects Completed', value: '25+' },
  { icon: Award, label: 'Technologies', value: '20+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
];

const timeline = [
  { year: '2024 — Present', title: 'Full-Stack Developer (Freelance)', desc: 'Building modern web & mobile applications for global clients using React, Node.js, and Laravel.' },
  { year: '2023', title: 'Frontend Developer', desc: 'Crafted responsive interfaces with React & Next.js. Improved page-load performance by 45%.' },
  { year: '2022', title: 'Junior Web Developer', desc: 'Started professional journey building landing pages and dashboards with JavaScript and PHP.' },
  { year: '2021', title: 'Self-Taught Beginnings', desc: 'Discovered the joy of code. Spent nights mastering HTML, CSS, and the JS ecosystem.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Story Section */}
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p className="text-lg">
              I'm <span className="font-bold text-slate-900 border-b-2 border-yellow-400">BITUNGURAMYE Seleman</span>, a passionate full-stack developer based in Rwanda. My journey into tech started with curiosity — I wanted to know how the websites I loved were built.
            </p>
            <p>
              Today, I specialize in building end-to-end digital products: from pixel-perfect frontends with **React and Next.js**, to robust backends with **Node.js and Laravel**. I believe great software is a blend of clean code and a real understanding of user needs.
            </p>
            <p>
              When I'm not coding, I'm exploring new frameworks or mentoring aspiring developers. My goal? To build products that make a real impact.
            </p>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-slate-900 text-yellow-400 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-yellow-500/10"
            >
              Let's work together →
            </a>
          </div>

          {/* Timeline Section */}
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="relative pl-8 pb-2 group">
                <div className="absolute left-0 top-2 w-3.5 h-3.5 bg-yellow-500 rounded-full border-4 border-white shadow-sm z-10 group-hover:scale-125 transition-transform" />
                <div className="absolute left-[6px] top-5 bottom-0 w-0.5 bg-slate-200 group-last:bg-transparent" />
                <div className="text-sm font-bold text-yellow-600 tracking-tighter">{t.year}</div>
                <div className="text-lg font-bold text-slate-900 mt-0.5">{t.title}</div>
                <div className="text-slate-500 text-sm mt-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-yellow-200 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)] transition-all group">
              <s.icon className="w-10 h-10 text-yellow-500 mb-4 transition-transform group-hover:scale-110" />
              <div className="text-4xl font-black text-slate-900 tracking-tight">{s.value}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Download Resume CTA - Yellow Themed */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 md:p-16 border border-yellow-500/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative grid md:grid-cols-5 gap-12 items-center">
            {/* Resume Thumbnail */}
            <div className="md:col-span-2 flex justify-center">
              <div className="group relative w-48 md:w-60">
                <div className="absolute -inset-4 bg-yellow-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden aspect-[210/297] flex flex-col transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <div className="h-2.5 bg-yellow-500" />
                  <div className="flex-1 p-5 space-y-3">
                    <div className="text-[12px] font-black text-slate-900 leading-tight">BITUNGURAMYE Seleman</div>
                    <div className="h-px bg-slate-100" />
                    <div className="text-[8px] font-bold text-yellow-600 uppercase tracking-tighter">Profile</div>
                    <div className="space-y-1">
                      <div className="h-1.5 bg-slate-100 rounded w-full" />
                      <div className="h-1.5 bg-slate-100 rounded w-5/6" />
                    </div>
                    <div className="text-[8px] font-bold text-yellow-600 uppercase tracking-tighter mt-4">Core Skills</div>
                    <div className="flex gap-1">
                       <div className="h-2 bg-yellow-100 rounded w-8" />
                       <div className="h-2 bg-yellow-100 rounded w-10" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-500 text-slate-950 text-[10px] font-black rounded-lg">PDF</div>
                </div>
              </div>
            </div>

            {/* Resume Text Content */}
            <div className="md:col-span-3 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
                <FileText className="w-4 h-4" /> Updated May 2026
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Download My <br/><span className="text-yellow-500">Full Resume</span></h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                Need a detailed look at my technical background? Grab the PDF version for a deep dive into my projects and stack.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => { /* void downloadResume(); */ }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-slate-950 rounded-2xl font-black hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all active:scale-95"
                >
                  <Download className="w-5 h-5" /> Download Now
                </button>
                <a
                  href={"#"}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
                >
                  <Eye className="w-5 h-5" /> Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;