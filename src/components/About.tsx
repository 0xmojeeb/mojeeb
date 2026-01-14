import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ShieldCheck, Gauge } from "lucide-react";
const About = () => {
  const ecosystems = [{
    name: "ETHEREUM",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024"
  }, {
    name: "BASE",
    // Sourced directly from the official Base brand kit on GitHub
    logo: "https://raw.githubusercontent.com/base-org/brand-kit/main/logo/Basemark/Base_Network_Logo_Primary.svg"
  }, {
    name: "SOLANA",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=024"
  }, {
    name: "POLYGON",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=024"
  }, {
    name: "AVALANCHE",
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024"
  }];
  return <section id="about" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto">
        {/* 1. STRATEGIC HEADER */}
        <div className="max-w-4xl mb-20 animate-fade-in">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Longevity is the <span className="gradient-text">Ultimate Leverage.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-6 text-white">
            "I help teams design systems that grow deliberately, identifying structural blindspots before they become expensive problems."
          </p>
        </div>

        {/* 2. THE CORE GRID (SPLIT VIEW) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: The Persona */}
          <div className="lg:col-span-5 space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white">Mojeeb</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategist working at the intersection of partnerships and ecosystem growth. 
              I’ve collaborated with Web3 protocols, DAOs, and early-stage teams across 
              <span className="text-foreground font-medium text-white"> Ethereum, Base, Solana, and Polygon</span> 
              to move beyond surface-level growth.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-white">Structural Audit Specialist</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-white">Incentive & Token Design</p>
              </div>
            </div>
          </div>

          {/* Right Column: Blindspot Labs Focus */}
          <div className="lg:col-span-7">
            <Card className="glass-card border-primary/20 bg-primary/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gauge size={120} className="text-primary" />
              </div>
              <CardContent className="p-8 md:p-10">
                <Badge className="mb-4 bg-primary text-white hover:bg-primary border-none">Current Focus</Badge>
                <h3 className="text-3xl font-bold mb-6 text-white">Blindspot Labs</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A research initiative dedicated to the <span className="text-white font-semibold">2026 Series</span>. 
                  We unpack why certain strategies fail at scale, translating insights into high-output frameworks for founders.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Ecosystems</p>
                    <div className="flex flex-wrap gap-1">
                      {['Base', 'Solana', 'ETH'].map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded text-white">{t}</span>)}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Domains</p>
                    <div className="flex flex-wrap gap-1">
                      {['DAOs', 'NFTs', 'DeFi'].map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 bg-white/10 rounded text-white">{t}</span>)}
                    </div>
                  </div>
                </div>
                <a target="_blank" className="inline-block mt-8 text-primary font-bold text-sm uppercase tracking-widest hover:underline" href="https://blindspotlabs.vercel.app/">
                  Visit The Lab →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 3. ECOSYSTEM LOGO RIBBON */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-10 text-center lg:text-left font-bold">
            Systems Architecture Across
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-8">
            {ecosystems.map(eco => <div key={eco.name} className="group flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-crosshair">
                <img src={eco.logo} alt={eco.name} className="w-6 h-6 object-contain" onError={e => {
              e.currentTarget.style.display = 'none';
            }} />
                <span className="text-[11px] font-bold tracking-widest text-white group-hover:text-primary transition-colors">
                  {eco.name}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;