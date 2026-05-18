import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Code2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-2 bg-yellow-500 rounded-lg group-hover:rotate-12 transition-transform">
                <Code2 className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                Seleman<span className="text-yellow-500">.dev</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-sm md:text-base">
              BITUNGURAMYE Seleman — A specialized Full-Stack Developer engineering high-end digital experiences. Focused on precision, performance, and modern aesthetics.
            </p>
            
            {/* Social Icons with Updated Links */}
            <div className="flex gap-3 mt-8">
              {[
                { Icon: Github, href: "https://github.com/bitunguramyeseleman" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/seleman-bitunguramye-337ba1369/" },
                { Icon: Twitter, href: "https://x.com/Seleman200Bts" },
                { Icon: Mail, href: "mailto:btseleman@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-yellow-500 hover:text-slate-950 hover:border-yellow-500 transition-all duration-300"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((l) => (
                <li key={l}>
                  <button 
                    onClick={() => scrollTo(`#${l.toLowerCase()}`)} 
                    className="font-bold hover:text-yellow-500 transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2 italic"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> Web Development</li>
              <li className="flex items-center gap-2 italic"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> Mobile Solutions</li>
              <li className="flex items-center gap-2 italic"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> API Engineering</li>
              <li className="flex items-center gap-2 italic"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> UI/UX Architecture</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
          <p className="text-xs font-bold tracking-wide text-slate-500 flex items-center gap-2 uppercase">
            © {new Date().getFullYear()} BITUNGURAMYE Seleman. <span className="hidden md:inline">|</span> 
            Built with <Heart className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 animate-pulse" /> using React & Tailwind
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/10 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-slate-950 hover:border-yellow-500 transition-all duration-300 shadow-xl"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> 
            To Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;