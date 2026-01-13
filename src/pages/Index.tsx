import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <About />
        <Blog />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      
      {/* STRATEGIC FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-black font-black text-[10px]">M</span>
                </div>
                <span className="text-lg font-bold tracking-tighter text-white uppercase">
                  Mojeeb<span className="text-primary">.</span>
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">
                Systems • Strategy • Research
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-left md:text-right">
                <p className="text-[9px] text-primary font-mono uppercase tracking-tighter">● System: Operational</p>
                <p className="text-[10px] text-muted-foreground uppercase font-mono">© 2026 MojeebHQ</p>
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={scrollToTop}
                className="rounded-full border-white/10 hover:border-primary hover:text-primary group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.2em] leading-relaxed max-w-sm text-left">
              Building communities that don't just grow, they evolve. Strategic analysis for the next wave of Web3.
            </p>
            <div className="flex gap-6 items-center">
               <span className="text-[9px] text-muted-foreground/60 uppercase tracking-widest font-bold">Nigeria Based</span>
               <div className="w-1 h-1 rounded-full bg-white/10" />
               <span className="text-[9px] text-muted-foreground/60 uppercase tracking-widest font-bold">Global Strategy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
