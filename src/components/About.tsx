import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ShieldCheck, Gauge, ExternalLink, Cpu, Gamepad2, Utensils, Heart } from "lucide-react";

const About = () => {
  const ecosystems = [
    { name: "ETHEREUM", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024" },
    { name: "BASE", logo: "" }, 
    { name: "SOLANA", logo: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=024" },
    { name: "POLYGON", logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=024" },
    { name: "AVALANCHE", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024" },
  ];

  return (
    <section id="about" className="py-12 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* PHILOSOPHY CARD */}
          <Card className="md:col-span-7 glass-card border-primary/20 bg-primary/5 p-8 md:p-10">
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
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Growth Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary"/>
                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Incentive Design</span>
              </div>
            </div>
          </Card>

          {/* ACTIVE BUILDS CARD - Expanded to show Whate & Dearly */}
          <Card className="md:col-span-5 glass-card border-primary/20 bg-primary/5 p-8 relative overflow-hidden flex flex-col justify-between transition-all hover:border-primary/40">
            <Gauge size={80} className="absolute -right-4 -bottom-4 text-primary opacity-5" />
            <div>
              <Badge className="mb-4 bg-primary text-white border-none">Active Systems</Badge>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Deployment Terminal</h3>
            </div>
            
            <div className="space-y-5">
              {/* WHATE */}
              <a href="https://whate.online" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                    <Utensils size={14} className="group-hover:scale-110 transition-transform" /> Whate Engine
                  </div>
                  <span className="text-[8px] text-green-500 font-bold uppercase border border-green-500/30 px-2 py-0.5 rounded-full">v.2026.02</span>
                </div>
                <div className="text-[11px] text-white/70 group-hover:text-white transition-colors border-l border-primary/20 pl-3">
                  PWA solving decision fatigue with <span className="text-primary">10k+ food items</span> and persona-based logic.
                </div>
              </a>

              {/* DEARLY */}
              <a href="https://dearly.icu" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                    <Heart size={14} className="group-hover:animate-pulse transition-transform" /> Dearly Personalizer
                  </div>
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </div>
                <div className="text-[11px] text-white/70 group-hover:text-white transition-colors border-l border-primary/20 pl-3">
                  Human-centric greeting system converting <span className="text-primary font-bold">attributes into assets</span>.
                </div>
              </a>

              
              <div className="pt-2 border-t border-white/5">
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-3">Strategy Research</p>
                <div className="flex gap-3">
                   <a href="https://labs.mojeeb.xyz/" target="_blank" className="bg-white/5 hover:bg-primary/20 p-2 rounded-lg transition-colors border border-white/10" title="AI Auditor">
                     <Cpu size={16} className="text-primary" />
                   </a>
                   <a href="https://trench-sniper.vercel.app" target="_blank" className="bg-white/5 hover:bg-primary/20 p-2 rounded-lg transition-colors border border-white/10" title="Trench Sniper">
                     <Gamepad2 size={16} className="text-primary" />
                   </a>
                </div>
              </div>
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
                    <img src={eco.logo} alt={eco.name} className="w-full h-full object-contain" onError={(e) => (e.currentTarget.style.display = 'none')}/>
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
