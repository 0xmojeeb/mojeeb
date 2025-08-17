import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="animate-fade-in text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-medium">
              Available for Collaborations
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Mojeeb</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none">
              Web3 Strategist & Community Builder | Marketing & Growth for DAOs, NFT Projects, and Web3 Brands
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl lg:max-w-none leading-relaxed">
              I help brands grow loud with strategy, storytelling, and community-building—creating frameworks that spark engagement and scale growth across Ethereum, Base, Solana, and Polygon.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" className="px-8 py-6 text-lg glow-effect">
                Work With Me
              </Button>
              <Button variant="secondary" size="lg" className="px-8 py-6 text-lg">
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl glow-effect">
                <img 
                  src="/lovable-uploads/e54e241e-c953-48e6-839b-5b50acf50e70.png"
                  alt="Mojeeb – Web3 Strategist, Community Builder, and Marketing Specialist helping brands grow across Ethereum, Base, Solana, and Polygon."
                  className="w-full h-full object-cover"
                />
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
            <a href="https://x.com/moj33b_" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
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