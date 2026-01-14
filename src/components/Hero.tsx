import { Button } from "@/components/ui/button";
import { ArrowUpRight, Linkedin, Twitter, BookOpen, MapPin, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030303] pt-32 pb-20 px-6">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7c3aed]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* 1. PRIMARY IDENTITY CARD */}
          <div className="md:col-span-8 bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-3xl flex flex-col justify-between group transition-all duration-500 hover:border-white/20 animate-in fade-in slide-in-from-bottom-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] text-[10px] uppercase tracking-widest font-bold mb-8">
                <Zap className="w-3 h-3 fill-[#7c3aed]" /> Available for Ecosystem Strategy
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] mb-6">
                MOJEEB<span className="text-[#7c3aed]">.</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-medium max-w-xl leading-relaxed">
                Designing <span className="text-white">growth systems</span> and ecosystem strategy across the Web3 landscape.
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <Button size="lg" className="bg-[#7c3aed] hover:bg-[#7c3aed]/90 text-white rounded-2xl px-8 h-14 font-bold uppercase tracking-widest text-xs group" onClick={() => scrollToSection('contact')}>
                Discuss Strategy <ArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white rounded-2xl px-8 h-14 font-bold uppercase tracking-widest text-xs hover:bg-white/10" onClick={() => scrollToSection('about')}>
                Philosophy
              </Button>
            </div>
          </div>

          {/* 2. PROFILE IMAGE CARD */}
          <div className="md:col-span-4 h-[400px] md:h-auto bg-[#111] border border-white/10 rounded-[2.5rem] overflow-hidden relative group animate-in fade-in slide-in-from-right-5 duration-700">
            <img 
              src="/mojeeb-headshot.png" 
              alt="Mojeeb" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-bold uppercase tracking-widest text-xs">Based In</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <MapPin size={14} className="text-[#7c3aed]" /> Nigeria / Global
              </div>
            </div>
          </div>

          {/* 3. CURRENT WORK CARD */}
          <div className="md:col-span-5 bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex items-center justify-between group hover:border-[#7c3aed]/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
            <div className="space-y-1">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black">Current Project</p>
              <p className="text-white text-lg font-bold">Blindspot Labs</p>
            </div>
            <a href="https://blindspotlabs.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-all">
              <ArrowUpRight size={20} />
            </a>
          </div>

          {/* 4. SOCIAL CONNECT CARD */}
          <div className="md:col-span-7 bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] flex items-center justify-between animate-in fade-in slide-in-from-bottom-10">
            <span className="text-gray-500 text-[10px] uppercase tracking-widest font-black">Digital Presence</span>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/mojeebhq" },
                { icon: <Twitter size={18} />, href: "https://x.com/MojeebHQ" },
                { icon: <BookOpen size={18} />, href: "https://mojeebhq.medium.com" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
