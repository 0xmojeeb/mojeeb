import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, Activity, Target } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto">
        {/* 1. STRATEGIC HEADER */}
        <div className="max-w-4xl mb-20">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            The Track Record
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Systems <span className="gradient-text">History.</span>
          </h2>
        </div>

        {/* 2. HIGH-IMPACT FEATURED ROLES */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          {/* BLINDSPOT LABS */}
          <Card className="glass-card border-primary/20 bg-primary/5 overflow-hidden group">
            <CardContent className="p-8 md:p-10 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity size={120} className="text-primary" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Blindspot Labs</h3>
                    <Star className="w-5 h-5 text-primary fill-current" />
                  </div>
                  <p className="text-primary font-bold tracking-widest text-xs uppercase text-left">Founder & Research Lead</p>
                </div>
                <div className="flex flex-col md:items-end text-left md:text-right">
                  <span className="text-sm text-muted-foreground font-mono">Dec 2024 – Present</span>
                  <Badge variant="outline" className="mt-2 bg-primary/20 text-primary border-primary/50">Founder</Badge>
                </div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <li className="flex items-start gap-3 text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> <span className="text-sm leading-relaxed">Founded research startup identifying structural blindspots in Web3 products.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> <span className="text-sm leading-relaxed">Author of the '2026 Series' focused on ecosystem longevity.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> <span className="text-sm leading-relaxed">Auditing systems, incentive alignment, and strategic positioning.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> <span className="text-sm leading-relaxed">Translating strategy failures into actionable frameworks.</span></li>
              </ul>
            </CardContent>
          </Card>

          {/* ECHELON HQ */}
          <Card className="glass-card border-white/10 bg-white/5 overflow-hidden group">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">EchelonHQ (fka Anblabs)</h3>
                  <p className="text-muted-foreground font-bold tracking-widest text-xs uppercase text-left">Founder & Strategist</p>
                </div>
                <div className="flex flex-col md:items-end text-left md:text-right">
                  <span className="text-sm text-muted-foreground font-mono">Aug 2024 – Dec 2024</span>
                  <Badge variant="outline" className="mt-2 bg-gray-500/20 text-gray-400 border-gray-500/50">Past</Badge>
                </div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <li className="flex items-start gap-3 text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> <span className="text-sm">Led growth initiatives across Ethereum, Base, Solana, and Polygon.</span></li>
                <li className="flex items-start gap-3 text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> <span className="text-sm">Built structured collaboration frameworks and early GTM narratives.</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 3. EVOLUTIONARY LOG (PAST ROLES) */}
        <div className="mb-20">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8 font-bold text-left">Systems History</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ITEM 1 */}
            <div className="flex items-center justify-between p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">OnchainHQ</p>
                  <p className="text-[10px] text-muted-foreground uppercase">Community Moderator</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">2025</span>
            </div>
            {/* ITEM 2 */}
            <div className="flex items-center justify-between p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">The Crypto Family</p>
                  <p className="text-[10px] text-muted-foreground uppercase">Co-Founder</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">2023 - 2024</span>
            </div>
            {/* ITEM 3 */}
            <div className="flex items-center justify-between p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Taiku NFT</p>
                  <p className="text-[10px] text-muted-foreground uppercase">Growth Strategist</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-muted-foreground">2023</span>
                <p className="text-[9px] text-primary italic">3 → 9k Followers</p>
              </div>
            </div>
            {/* ITEM 4 */}
            <div className="flex items-center justify-between p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">GX DAO</p>
                  <p className="text-[10px] text-muted-foreground uppercase">Strategist</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">2023</span>
            </div>
          </div>
        </div>

        {/* 4. AMBASSADORSHIPS */}
        <div className="pt-12 border-t border-white/5 text-left">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-6 font-bold">Ambassador Roles</p>
          <div className="flex flex-wrap gap-10">
            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-white">JoinParti (#LFParti)</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-white">Credbull</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
