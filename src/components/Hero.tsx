import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Twitter, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Mojeeb</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground mb-8 max-w-4xl lg:max-w-none font-semibold">
              Growth, partnerships, and ecosystem strategy across Web3.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl lg:max-w-none leading-relaxed">
              I help teams design and execute systems that scale communities, collaborations, and networks across Ethereum, Base, Solana, Polygon, and Avalanche.
            </p>
            
            <p className="text-base text-muted-foreground mb-12 max-w-3xl lg:max-w-none">
              Currently building <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium" href="https://blindspotlabs.lovable.app/">Blindspot Labs</a> — a research and strategy initiative.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="px-8 py-6 text-lg glow-effect rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)]" onClick={() => scrollToSection('contact')}>Let's Discuss Strategy</Button>
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg rounded-full" onClick={() => scrollToSection('experience')}>
                View My Work
              </Button>
            </div>
          </div>
          
          {/* UPGRADED PFP SECTION */}
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer Glow Background */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* The "Squircle" Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[48px] p-[2px] bg-gradient-to-br from-primary/50 via-primary/10 to-transparent shadow-2xl">
                <div className="w-full h-full rounded-[46px] overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm">
                  <img 
                    src="/mojeeb-avatar.png" 
                    alt="Mojeeb – Web3 Strategist" 
                    className="w-full h-full object-cover object-top scale-110 transition-transform duration-700 group-hover:scale-115" 
                  />
                </div>
                
                {/* Neon Border Glow */}
                <div className="absolute inset-0 rounded-[48px] shadow-[0_0_40px_rgba(139,92,246,0.3)] pointer-events-none border border-primary/20" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Icons - Kept as requested but styled for consistency */}
        <div className="flex justify-center gap-6 mt-8">
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-primary/20 transition-all" asChild>
            <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-primary/20 transition-all" asChild>
            <a href="https://x.com/MojeebHQ" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-primary/20 transition-all" asChild>
            <a href="https://mojeebhq.medium.com" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
