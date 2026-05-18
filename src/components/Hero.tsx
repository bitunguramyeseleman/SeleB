import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const roles = ['Full-Stack Development','Mobile App Development','Database analysis','UI/UX analysis','Game Development'];

const Hero: React.FC = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950">
      
      {/* --- ENHANCED BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main deep background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(234,179,8,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.05),transparent_50%)]" />
        
        {/* --- DYNAMIC BACKGROUND LINES (Horizontal & Vertical) --- */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-20" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal Bending Line */}
          <path
            d="M-50 600C150 550 300 200 600 300C900 400 1100 100 1500 150"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-draw-line"
          />

          {/* Vertical Bending Line 1 (Left Side) */}
          <path
            d="M200 -50C250 150 50 300 150 600C250 900 100 1100 150 1500"
            stroke="url(#verticalGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-draw-line-slow"
          />

          {/* Vertical Bending Line 2 (Right Side) */}
          <path
            d="M1200 -50C1100 200 1350 400 1250 700C1150 1000 1300 1200 1200 1500"
            stroke="url(#verticalGradient)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-draw-line-delay"
          />

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
              <stop offset="50%" stopColor="#eab308" stopOpacity="1" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#eab308 1px, transparent 1px), linear-gradient(90deg, #eab308 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full py-16">
        
        {/* LEFT CONTENT */}
        <div className="text-white space-y-6 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 backdrop-blur-md border border-yellow-500/20 text-sm">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-200 font-medium">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              BITUNGURAMYE
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Seleman
            </span>
          </h1>

          <div className="h-10 overflow-hidden">
            <p key={roleIdx} className="text-2xl md:text-3xl font-semibold text-slate-300 animate-slide-up">
              {roles[roleIdx]}
            </p>
          </div>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            I craft beautiful, performant, and scalable digital experiences. Passionate about turning complex problems into elegant solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => scrollTo('#projects')} 
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-yellow-500 text-slate-950 rounded-xl font-bold hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('#contact')} 
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              <Mail className="w-5 h-5" />
              Hire Me
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (PROFILE IMAGE) */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative group animate-in zoom-in fade-in duration-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full blur-xl opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse" />
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-500/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="mee.png" 
                alt="Seleman" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-xl border border-yellow-500/30 rounded-2xl px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-bounce-slow">
              <div className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Experience</div>
              <div className="text-2xl font-black italic">3+ Years</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-xl border border-yellow-500/30 rounded-2xl px-5 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Projects</div>
              <div className="text-2xl font-black italic">25+ Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;