import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ShieldCheck, Gauge } from "lucide-react";

const About = () => {
    const ecosystems = [
    { name: "ETHEREUM", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024" },
    { 
      name: "BASE", 
      // Updated to a more reliable CDN link for the Base logo
      logo: "https://raw.githubusercontent.com/base-org/brand-kit/main/logo/symbol/Base_Symbol_Blue.svg" 
    },
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
              <div className="flex items-center gap-2"><Eye className="w-4 h-4 text-primary"/><span className="text-[10px] font-bold text-white uppercase">Audit Specialist</span></div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/><span className="text-[10px] font-bold text-white uppercase">Incentive Design</span></div>
            </div>
          </Card>

          <Card className="md:col-span-4 glass-card border-primary/20 bg-primary/5 p-8 relative overflow-hidden">
            <Gauge size={80} className="absolute -right-4 -bottom-4 text-primary opacity-10" />
            <Badge className="mb-4 bg-primary text-white border-none">Current Focus</Badge>
            <h3 className="text-2xl font-bold mb-4 text-white">Blindspot Labs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">A research initiative dedicated to the 2026 Series. Unpacking strategy failure at scale.</p>
            <a href="https://blindspotlabs.lovable.app/" target="_blank" className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">Visit The Lab →</a>
          </Card>

          <div className="md:col-span-12 flex flex-wrap justify-between items-center bg-white/5 p-6 rounded-[2rem] border border-white/5 mt-2">
            {ecosystems.map((eco) => (
              <div key={eco.name} className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src={eco.logo} alt={eco.name} className="w-5 h-5 object-contain" />
                <span className="text-[10px] font-bold tracking-widest text-white">{eco.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
