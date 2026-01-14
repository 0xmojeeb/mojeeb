import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { ArrowUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Replaces Framer Motion's scroll bar with a standard React version
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollAmount = (window.scrollY / windowHeight) * 100;
      setScrollPercentage(scrollAmount);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-[#7c3aed]/30">
      
      {/* 2026 PROGRESS BAR (Standard CSS Version) */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#7c3aed] z-[100] shadow-[0_0_10px_#7c3aed] transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />

      <Navigation />
      
      // Find this part in your Index.tsx and replace it:

<main className="relative">
  <section id="hero">
    <Hero />
  </section>
  
  {/* Changed space-y-32 to space-y-4 and removed large pb-32 */}
  <div className="space-y-4 pb-16">
    <About />
    
    {/* This is your divider line */}
    <div className="container mx-auto px-6">
       <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
    
    <Blog />
    <Experience />
    <Education />
    <Skills />
    <Contact />
  </div>
</main>
      
      <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7c3aed] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  <span className="text-white font-black text-lg">M</span>
                </div>
                <span className="text-2xl font-black tracking-tighter text-white uppercase">
                  Mojeeb<span className="text-[#7c3aed]">HQ</span>
                </span>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">
                Systems • Strategy • Research
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-4">
               <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-[9px] text-[#7c3aed] font-mono uppercase tracking-widest">● System: Operational</p>
                    <p className="text-[10px] text-gray-500 uppercase font-mono mt-1">v.2026.01.HQ</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={scrollToTop}
                    className="rounded-xl border border-white/10 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all bg-white/5"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
               </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-3">
               <Zap size={14} className="text-[#7c3aed]" />
               <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] leading-relaxed max-w-sm text-left">
                 Architecting long-term leverage for Web3 ecosystems.
               </p>
            </div>
            
            <div className="flex gap-8 items-center">
               <div className="flex flex-col items-end">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Location</span>
                  <span className="text-[11px] text-white uppercase tracking-widest font-black">Nigeria / Global</span>
               </div>
               <div className="w-[1px] h-8 bg-white/10" />
               <div className="flex flex-col items-start">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Availability</span>
                  <span className="text-[11px] text-[#7c3aed] uppercase tracking-widest font-black">Open for Q1 '26</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
