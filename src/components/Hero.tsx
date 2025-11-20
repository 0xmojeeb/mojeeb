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
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Mojeeb</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground mb-8 max-w-4xl lg:max-w-none font-semibold">
              Web3 Growth Lead | Partnerships & Ecosystem Strategist | Community & BD Operator
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl lg:max-w-none leading-relaxed">
              Helping Web3 companies, protocols, NFT projects, and DAOs scale through
              ecosystem growth, partnerships, and community-driven execution across
              Ethereum, Base, Solana, Polygon & Avalanche.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="px-8 py-6 text-lg glow-effect" onClick={() => scrollToSection('contact')}>Let's Discuss Strategy</Button>
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg" onClick={() => scrollToSection('experience')}>
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-2xl glow-effect">
                <img src="/mojeeb-avatar.png" alt="Mojeeb – Web3 Strategist, Community Builder, and Marketing Specialist helping brands grow across Ethereum, Base, Solana, and Polygon." className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 mt-8">
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full glow-effect" asChild>
            <a href="https://www.linkedin.com/in/mojeebeth/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full glow-effect" asChild>
            <a href="https://x.com/0xMojeeb" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full glow-effect" asChild>
            <a href="https://0xmojeeb.medium.com" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>;
};
export default Hero;