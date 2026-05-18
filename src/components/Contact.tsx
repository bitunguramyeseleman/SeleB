import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  // ALL SOCIAL LINKS UPDATED
  const socials = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'btseleman@gmail.com', 
      href: 'mailto:btseleman@gmail.com', 
      color: 'from-yellow-600 to-amber-400' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'seleman-dev', 
      href: 'https://www.linkedin.com/in/seleman-bitunguramye-337ba1369/', 
      color: 'from-yellow-500 to-yellow-300' 
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: '@seleman', 
      href: 'https://github.com/bitunguramyeseleman', 
      color: 'from-amber-600 to-yellow-500' 
    },
    { 
      icon: Twitter, 
      label: 'Twitter / X', 
      value: '@seleman_dev', 
      href: 'https://x.com/Seleman200Bts', 
      color: 'from-yellow-400 to-amber-500' 
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in name, email, and message.');
      return;
    }

    setStatus('loading');

    try {
      // NOTE: Replace "YOUR_ACCESS_KEY_HERE" with your actual key from web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", 
          name: form.name,
          email: form.email,
          subject: form.subject || "New Portfolio Message",
          message: form.message,
          from_name: "Portfolio Contact Form"
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try emailing me directly.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-yellow-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em]">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Let's Build Your <span className="text-yellow-500">Vision</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3 italic">Direct Line</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                I'm currently based in Rwanda. Expected response: <span className="text-yellow-500 font-bold">{"<"} 24h</span>.
              </p>
              <div className="flex items-center gap-4 text-slate-200">
                <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Location</div>
                  <div className="font-semibold">Huye, Rwanda / Remote</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] hover:border-yellow-500/30 transition-all hover:-translate-y-1"
                >
                  <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${s.color} mb-3 shadow-lg shadow-yellow-900/20`}>
                    <s.icon className="w-5 h-5 text-slate-950" />
                  </div>
                  <div className="text-white font-bold text-sm tracking-tight">{s.label}</div>
                  <div className="text-slate-500 text-xs truncate mt-1">{s.value}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="btseleman@gmail.com"
                  className="w-full px-5 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all outline-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can I help you?"
                className="w-full px-5 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all resize-none outline-none"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-bold animate-pulse">
                <AlertCircle className="w-4 h-4" /> {error}
              </div>
            )}
            
            {status === 'success' && (
              <div className="flex items-center gap-3 text-yellow-500 text-sm bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-5 py-4">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="font-bold tracking-tight">Transmission received! I'll be in touch.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-500 text-slate-950 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:shadow-[0_20px_40px_rgba(234,179,8,0.3)] hover:-translate-y-1 transition-all disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : (
                <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;