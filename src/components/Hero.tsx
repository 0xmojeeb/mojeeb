import { MapPin, ArrowRight, Twitter, Linkedin, BookOpen, Terminal, ShieldCheck, Utensils, Heart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* MAIN TEXT CARD */}
          <div className="md:col-span-8 bg-[#0a0a0a] border border-white/10 p-12 rounded-[2.5rem] flex flex-col justify-center min-h-[480px] relative overflow-hidden group">
            {/* SUBTLE BACKGROUND DECOR */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-primary group-hover:opacity-10 transition-opacity">
              <Terminal size={240} />
            </div>

            <div className="relative z-10">
              <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Strategist & Founder</span>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
                MOJEEB <br />
                <span className="text-gray-500 italic">TITILAYO.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                Founder of <span className="text-white underline decoration-[#7c3aed]/50 underline-offset-4 cursor-pointer hover:text-[#7c3aed] transition-colors" onClick={() => scrollToSection('about')}>Blindspot Labs</span>. 
                Designing growth systems and ecosystem strategy for the next on-chain cycle.
              </p>
              
              {/* ACTION ZONE */}
              <div className="flex flex-wrap items-center gap-8 mb-10">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#7c3aed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#6d28d9] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95"
                >
                  Discuss Strategy <ArrowRight size={16} />
                </button>

                <div className="flex items-center gap-6">
                  <a href="https://x.com/MojeebHQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                    <Twitter size={20} />
                  </a>
                  <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://mojeebhq.medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                    <BookOpen size={20} />
                  </a>
                </div>
              </div>

              {/* LIVE ECOSYSTEM STATUS - Expanded to all 4 active builds */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                 <a href="https://whate.online" target="_blank" className="flex items-center gap-2 group cursor-pointer">
                    <Utensils size={12} className="text-[#7c3aed] opacity-50 group-hover:opacity-100" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Whate Engine</span>
                 </a>
                 <div className="w-[1px] h-3 bg-white/10 self-center" />
                 <a href="https://trench-sniper.vercel.app" target="_blank" className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Trench Sniper</span>
                 </a>
                 <div className="w-[1px] h-3 bg-white/10 self-center" />
                 <a href="https://dearly.icu" target="_blank" className="flex items-center gap-2 group cursor-pointer">
                    <Heart size={12} className="text-pink-500/50 group-hover:text-pink-500" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Dearly</span>
                 </a>
              </div>
            </div>
          </div>

          {/* HEADSHOT CARD */}
          <div className="md:col-span-4 h-[450px] md:h-auto bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden relative group">
            <img 
              src="/mojeeb-headshot.png" 
              alt="Mojeeb Titilayo" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-left">
              <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">Founder, Blindspot Labs</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin size={10} className="text-primary" />
                </div>
                <span className="text-xs font-medium tracking-tight">Nigeria / Global</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
