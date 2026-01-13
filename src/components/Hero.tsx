import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Twitter, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Glow - Synced with Blindspot Brand */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* TEXT SIDE: Synced with 'Longevity & Systems' */}
          <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
              Strategist & Founder
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Mojeeb</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground mb-8 max-w-xl lg:max-w-none font-semibold leading-relaxed">
              Designing growth systems and ecosystem strategy across the Web3 landscape.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl lg:max-w-none leading-relaxed">
              Focused on <span className="text-foreground font-medium">longevity as leverage</span>. 
              Currently building <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium" href="https://blindspotlabs.lovable.app/">Blindspot Labs</a> — a research initiative identifying structural gaps in the 2026 Web3 landscape.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="px-8 py-6 text-lg glow-effect rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)]" onClick={() => scrollToSection('contact')}>
                Discuss Strategy
              </Button>
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg rounded-full" onClick={() => scrollToSection('about')}>
                The Philosophy
              </Button>
            </div>
          </div>
          
          {/* IMAGE SIDE: The Offset "Blindspot" Style */}
          <div className="animate-fade-in flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-56 h-56 md:w-72 md:h-72 relative shrink-0">
              {/* Rotated background logic */}
              <div className="absolute inset-0 bg-primary rounded-2xl rotate-6 z-0 opacity-20" />
              
              <img 
                src="/mojeeb-avatar.png" 
                alt="Mojeeb - Founder" 
                className="relative z-10 w-full h-full object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" 
              />
            </div>
          </div>
        </div>

        {/* Updated Social Bar */}
        <div className="flex justify-center gap-6 mt-8">
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20 transition-all" asChild>
            <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20 transition-all" asChild>
            <a href="https://x.com/MojeebHQ" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20 transition-all" asChild>
            <a href="https://mojeebhq.medium.com" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
