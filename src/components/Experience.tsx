import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, TrendingUp, Target } from "lucide-react";

const Experience = () => {
  return (
   <section id="experience" className="py-12 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">Track Record</span>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter text-left">Full Systems History.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Card className="md:col-span-12 glass-card border-primary/20 bg-primary/5 p-8">
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div>
                <div className="flex items-center gap-3"><h3 className="text-2xl font-bold text-white uppercase">Blindspot Labs</h3><Star className="w-5 h-5 text-primary fill-current" /></div>
                <p className="text-primary font-bold text-xs tracking-widest">Founder & Research Lead</p>
              </div>
              <span className="text-sm text-muted-foreground font-mono">Dec 2025 – Present</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> Founded research startup for Web3 structural analysis.</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> Author of the '2026 Series' focused on longevity.</li>
            </ul>
          </Card>

          <Card className="md:col-span-6 glass-card p-8 bg-primary/5 border-primary/20">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] text-primary font-bold uppercase">Viral Growth</span>
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">Taiku NFT</h4>
            <p className="text-lg font-bold text-white mb-2 italic">3 → 9k followers in 3.5 days</p>
            <p className="text-xs text-muted-foreground">Engineered viral GTM alignment and community activation.</p>
          </Card>

          <Card className="md:col-span-6 glass-card p-8">
            <h4 className="text-xl font-bold text-white mb-1">SkylosChain</h4>
            <p className="text-lg font-bold text-white mb-2">5% → 95% Engagement</p>
            <p className="text-xs text-muted-foreground">Implemented scalable content systems in 2 weeks.</p>
          </Card>

          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {c:"EchelonHQ", r:"Strategist"}, {c:"OnchainHQ", r:"Moderator"},
              {c:"GX DAO", r:"Strategist"}, {c:"Crypto Family", r:"Co-Founder"}
            ].map((item, i) => (
              <div key={i} className="p-4 border border-white/5 rounded-xl bg-white/5">
                <p className="text-white text-xs font-bold">{item.c}</p>
                <p className="text-[9px] text-primary uppercase font-bold">{item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
