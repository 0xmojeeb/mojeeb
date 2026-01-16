import { MapPin, ArrowRight, Twitter, Linkedin, BookOpen, Terminal, ShieldCheck } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* MAIN TEXT CARD */}
          <div className="md:col-span-8 bg-[#111] border border-white/10 p-12 rounded-[2.5rem] flex flex-col justify-center min-h-[450px] relative overflow-hidden">
            {/* SUBTLE BACKGROUND DECOR */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Terminal size={200} />
            </div>

            <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Strategist & Founder</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
              MOJEEB <br />
              <span className="text-gray-500 italic">TITILAYO.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
              Founder of <span className="text-white underline decoration-[#7c3aed]/50 underline-offset-4 cursor-pointer hover:text-[#7c3aed] transition-colors" onClick={() => scrollToSection('about')}>Blindspot Labs</span>. 
              Designing growth systems and ecosystem strategy across the Web3 landscape.
            </p>
            
            {/* ACTION ZONE: Button + Social Nodes */}
            <div className="flex flex-wrap items-center gap-8 mb-10">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#7c3aed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#6d28d9] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Discuss Strategy <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-6">
                <a href="https://x.com/MojeebHQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://mojeebhq.medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <BookOpen size={20} />
                </a>
              </div>
            </div>

            {/* LIVE ECOSYSTEM STATUS - Direct Product Links */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
               <a href="https://trench-sniper.vercel.app" target="_blank" className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Trench Sniper: Live Engine</span>
               </a>
               <div className="w-[1px] h-3 bg-white/10 self-center" />
               <a href="https://blindspotlabs.vercel.app" target="_blank" className="flex items-center gap-2 group cursor-pointer">
                  <ShieldCheck size={12} className="text-[#7c3aed]" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">AI Auditor: In-Dev</span>
               </a>
            </div>
          </div>

          {/* HEADSHOT CARD */}
          <div className="md:col-span-4 h-[450px] md:h-auto bg-[#111] border border-white/10 rounded-[2.5rem] overflow-hidden relative group">
            <img 
              src="/mojeeb-headshot.png" 
              alt="Mojeeb Titilayo" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-left">
              <p className="text-white font-bold uppercase tracking-widest text-[10px]">Founder, Blindspot Labs</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <MapPin size={14} className="text-[#7c3aed]" /> Nigeria / Global
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
