import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Zap, Target, Eye, ShieldCheck, Gauge } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto">
        {/* 1. STRATEGIC HEADER */}
        <div className="max-w-4xl mb-20 animate-fade-in">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Longevity is the <span className="gradient-text">Ultimate Leverage.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-6">
            "I help teams design systems that grow deliberately, identifying structural blindspots before they become expensive problems."
          </p>
        </div>

        {/* 2. THE CORE GRID (SPLIT VIEW) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: The Persona */}
          <div className="lg:col-span-5 space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold">Mojeeb</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategist working at the intersection of partnerships and ecosystem growth. 
              I’ve collaborated with Web3 protocols, DAOs, and early-stage teams across 
              <span className="text-foreground font-medium"> Ethereum, Base, Solana, and Polygon</span> 
              to move beyond surface-level growth.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Structural Audit Specialist</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Incentive & Token Design</p>
              </div>
            </div>
          </div>

          {/* Right Column: Blindspot Labs Focus */}
          <div className="lg:col-span-7">
            <Card className="glass-card border-primary/20 bg-primary/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gauge size={120} />
              </div>
              <CardContent className="p-8 md:p-10">
                <Badge className="mb-4 bg-primary text-white hover:bg-primary">Current Focus</Badge>
                <h3 className="text-3xl font-bold mb-6">Blindspot Labs</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A research initiative dedicated to the <span className="text-foreground font-semibold">2026 Series</span>. 
                  We unpack why certain strategies fail at scale, translating insights into high-output frameworks for founders.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Ecosystems</p>
                    <div className="flex flex-wrap gap-1">
                      {['Base', 'Solana', 'ETH'].map(t => <span key={t} className="text-xs font-bold px-2 py-1 bg-white/5 rounded">{t}</span>)}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Domains</p>
                    <div className="flex flex-wrap gap-1">
                      {['DAOs', 'NFTs', 'DeFi'].map(t => <span key={t} className="text-xs font-bold px-2 py-1 bg-white/5 rounded">{t}</span>)}
                    </div>
                  </div>
                </div>
                <a href="https://blindspotlabs.lovable.app/" target="_blank" className="inline-block mt-8 text-primary font-bold text-sm uppercase tracking-widest hover:underline">
                  Visit The Lab →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
