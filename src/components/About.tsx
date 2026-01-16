import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ShieldCheck, Gauge, Terminal, ExternalLink } from "lucide-react";

const About = () => {
  const ecosystems = [
    { name: "ETHEREUM", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024" },
    { name: "BASE", logo: "https://raw.githubusercontent.com/base-org/brand-kit/main/logo/symbol/Base_Symbol_Blue.svg" },
    { name: "SOLANA", logo: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=024" },
    { name: "POLYGON", logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=024" },
    { name: "AVALANCHE", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024" },
  ];

  return (
    <section id="about" className="py-12 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          <Card className="md:col-span-8 glass-card border-primary/20 bg-primary/5 p-8 md:p-10">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Longevity is the <span className="gradient-text">Ultimate Leverage.</span>
            </h2>
            <p className="text-lg text-white italic border-l-2 border-primary/30 pl-6 mb-8">
              "I help teams design systems that grow deliberately, identifying structural blindspots before they become expensive problems."
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary"/>
                <span className="text-[10px] font-bold text-white uppercase">Growth Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary"/>
                <span className="text-[10px] font-bold text-white uppercase">Incentive Design</span>
              </div>
            </div>
          </Card>

          <Card className="md:col-span-4 glass-card border-primary/20 bg-primary/5 p-8 relative overflow-hidden flex flex-col justify-between">
            <Gauge size={80} className="absolute -right-4 -bottom-4 text-primary opacity-10" />
            <div>
              <Badge className="mb-4 bg-primary text-white border-none">Active Builds</Badge>
              <h3 className="text-2xl font-bold mb-4 text-white">Blindspot Labs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                A venture studio deploying high-fidelity tools for the next on-chain cycle. 
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="https://blindspotlabs.vercel.app/" target="_blank" className="group block">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase">
                    <Terminal size={14} /> Web3 AI Auditor 
                  </div>
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </div>
                <div className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">
                  LLM-driven smart contract vulnerability detection & risk scoring.
                </div>
              </a>

              <a href="https://trench-sniper.vercel.app" target="_blank" className="group block">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase">
                    <ShieldCheck size={14} /> Trench Sniper: Intelligence Engine
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[7px] text-green-500 font-bold uppercase">Live</span>
                  </div>
                </div>
                <div className="text-[9px] text-white/40 group-hover:text-white/60 transition-colors">
                  Behavioral alpha simulator for rapid on-chain pattern recognition.
                </div>
              </a>

              <hr className="border-white/5 my-2" />
              
              <a href="https://blindspotlabs.vercel.app/" target="_blank" className="text-white/80 font-bold text-[10px] uppercase tracking-widest hover:text-primary transition-all inline-flex items-center gap-2">
                VISIT THE LAB <span className="text-primary">→</span>
              </a>
            </div>
          </Card>

          <div className="md:col-span-12 flex flex-wrap justify-between items-center bg-white/5 p-6 rounded-[2rem] border border-white/5 mt-2">
            {ecosystems.map((eco) => (
              <div key={eco.name} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
                <div className="w-5 h-5 flex items-center justify-center">
                  {eco.name === "BASE" ? (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0052FF"/>
                      <path d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96244 15.0376 6.5 12 6.5C8.96244 6.5 6.5 8.96244 6.5 12C6.5 15.0376 8.96244 17.5 12 17.5Z" fill="white"/>
                    </svg>
                  ) : (
                    <img src={eco.logo} alt={eco.name} className="w-full h-full object-contain" />
                  )}
                </div>
                <span className="text-[9px] font-bold tracking-widest text-white uppercase group-hover:text-primary transition-colors">
                  {eco.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
