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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1">
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
              <Button size="lg" className="px-8 py-6 text-lg glow-effect rounded-full" onClick={() => scrollToSection('contact')}>Let's Discuss Strategy</Button>
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg rounded-full" onClick={() => scrollToSection('experience')}>
                View My Work
              </Button>
            </div>
          </div>
          
          {/* THE FIXED IMAGE SIDE: No motion library required */}
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
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20" asChild>
            <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20" asChild>
            <a href="https://x.com/MojeebHQ" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20" asChild>
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
