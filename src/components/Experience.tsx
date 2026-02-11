import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, TrendingUp, Target, Zap, Activity } from "lucide-react";

const Experience = () => {
  return (
   <section id="experience" className="py-12 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">Track Record</span>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter text-left">
            Systems <span className="text-gray-500 italic">History.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* LEADERSHIP: BLINDSPOT LABS */}
          <Card className="md:col-span-12 glass-card border-primary/20 bg-primary/5 p-8 hover:border-primary/40 transition-all">
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Blindspot Labs</h3>
                  <Star className="w-5 h-5 text-primary fill-current" />
                </div>
                <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mt-1">Founder & Systems Architect</p>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="border-primary/30 text-primary mb-2">Active Build</Badge>
                <p className="text-[10px] text-muted-foreground font-mono block">Dec 2025 – Present</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                Architecting Web3 structural analysis tools and incentive design frameworks.
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                Deploying high-fidelity engines (Trench Sniper) for cultural translation.
              </li>
            </ul>
          </Card>

          {/* GROWTH MILESTONE: TAIKU */}
          <Card className="md:col-span-6 glass-card p-8 bg-primary/5 border-primary/20 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[9px] text-primary font-bold uppercase tracking-[0.2em]">Viral Growth Architecture</span>
            </div>
            <h4 className="text-2xl font-black text-white mb-1 uppercase tracking-tighter">Taiku NFT</h4>
            <p className="text-lg font-bold text-primary mb-3">3 → 9,000+ Followers</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Engineered viral GTM alignment and community activation systems resulting in exponential growth in <span className="text-white">3.5 days.</span>
            </p>
          </Card>

          {/* RETENTION MILESTONE: SKYLOS */}
          <Card className="md:col-span-6 glass-card p-8 bg-white/5 border-white/5 relative overflow-hidden group">
             <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]">Engagement Optimization</span>
            </div>
            <h4 className="text-2xl font-black text-white mb-1 uppercase tracking-tighter">SkylosChain</h4>
            <p className="text-lg font-bold text-white mb-3 italic tracking-tighter">5% → 95% Engagement</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Implemented scalable content systems and retention loops that transformed community activity within <span className="text-white font-bold text-[10px]">14 days.</span>
            </p>
          </Card>

          {/* ECOSYSTEM NODES */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {c:"EchelonHQ", r:"Strategist", i: <Zap size={12}/>}, 
              {c:"Whate Engine", r:"Lead Architect", i: <Target size={12}/>},
              {c:"GX DAO", r:"Strategist", i: <Activity size={12}/>}, 
              {c:"Crypto Family", r:"Co-Founder", i: <Star size={12}/>}
            ].map((item, i) => (
              <div key={i} className="p-6 border border-white/5 rounded-[1.5rem] bg-[#0a0a0a] hover:bg-white/5 transition-colors group">
                <div className="mb-3 text-primary/50 group-hover:text-primary transition-colors">
                  {item.i}
                </div>
                <p className="text-white text-sm font-bold tracking-tight">{item.c}</p>
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mt-1">{item.r}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Experience;
