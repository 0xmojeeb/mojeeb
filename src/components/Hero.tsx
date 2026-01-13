import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Twitter, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Mojeeb</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground mb-8 font-semibold">
              Growth, partnerships, and ecosystem strategy across Web3.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Currently building <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium" href="https://blindspotlabs.lovable.app/">Blindspot Labs</a>.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="px-8 py-6 text-lg rounded-full" onClick={() => scrollToSection('contact')}>Let's Discuss Strategy</Button>
            </div>
          </div>
          
          {/* THE IMAGE: Standard Div instead of Framer Motion to prevent blank screen */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-56 h-56 md:w-72 md:h-72 relative shrink-0 transition-all duration-500 hover:scale-105">
              {/* The rotated background logic */}
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
            <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-primary/20" asChild>
            <a href="https://x.com/MojeebHQ" target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
