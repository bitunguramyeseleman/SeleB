import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-slate-950/40 backdrop-blur-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO: Boxed Style */}
        <button 
          onClick={() => scrollTo('#home')} 
          className="relative flex items-center gap-2 group overflow-hidden px-2 py-1"
        >
          <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors rounded-lg" />
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
            Seleman<span className="text-white">.dev</span>
          </span>
        </button>

        {/* DESKTOP LINKS: Floating Dock Style */}
        <div className="hidden md:flex items-center p-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md">
          {links.map((l) => (
            <button 
              key={l.href} 
              onClick={() => scrollTo(l.href)} 
              className="px-6 py-2 rounded-full text-slate-300 hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] relative group"
            >
              <span className="relative z-10">{l.label}</span>
              {/* Capsule Hover Effect */}
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 rounded-full z-0" />
              <div className="absolute inset-0 bg-yellow-500 blur-md opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>

        {/* CTA: Magnetic Style */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollTo('#contact')} 
            className="group flex items-center gap-2 px-7 py-3 bg-yellow-500 text-slate-950 rounded-xl font-black uppercase text-xs tracking-widest hover:shadow-[0_10px_30px_rgba(234,179,8,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* MOBILE TOGGLE: Minimalist */}
        <button 
          onClick={() => setOpen(!open)} 
          className={`md:hidden p-2 rounded-xl transition-all ${open ? 'bg-yellow-500 text-slate-950' : 'bg-white/5 text-white'}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU: Full Screen Blur */}
      <div className={`
        fixed inset-0 bg-slate-950/98 backdrop-blur-3xl z-[-1] md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500
        ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        {links.map((l, i) => (
          <button 
            key={l.href} 
            onClick={() => scrollTo(l.href)} 
            style={{ transitionDelay: `${i * 50}ms` }}
            className={`text-4xl font-black tracking-tighter text-white hover:text-yellow-500 transition-all transform ${open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {l.label}
          </button>
        ))}
        
        <button 
          onClick={() => scrollTo('#contact')} 
          className={`mt-8 px-10 py-5 bg-yellow-500 text-slate-950 rounded-2xl font-black uppercase tracking-widest transition-all transform ${open ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
        >
          Hire Me Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;