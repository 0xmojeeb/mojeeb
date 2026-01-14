import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, Activity, Target, TrendingUp } from "lucide-react";
const Experience = () => {
  return <section id="experience" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="max-w-4xl mb-20 text-left">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            The Track Record
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white text-left">
            Full Systems <span className="gradient-text">History.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          
          {/* 1. BLINDSPOT LABS */}
          <Card className="glass-card border-primary/20 bg-primary/5 group">
            <CardContent className="p-8 md:p-10 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 text-left">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Blindspot Labs</h3>
                    <Star className="w-5 h-5 text-primary fill-current" />
                  </div>
                  <p className="text-primary font-bold tracking-widest text-xs uppercase">Founder & Lead Auditor </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-sm text-muted-foreground font-mono">Dec 2025 – Present</span>
                  <Badge variant="outline" className="ml-2 bg-primary/20 text-primary border-primary/50">Founder</Badge>
                </div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-left">
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> Founded research startup focused on structural blindspots in Web3.</li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" /> Author of the '2026 Series' focused on ecosystem longevity.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. ECHELON HQ */}
          <Card className="glass-card border-white/10 text-left">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">EchelonHQ (fka Anblabs)</h3>
                  <p className="text-primary text-[10px] uppercase font-bold tracking-widest">Founder & Strategist</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono">Aug 2024 – Dec 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Led ecosystem growth initiatives across Ethereum, Base, Solana, and Polygon.</p>
            </CardContent>
          </Card>

          {/* 3. THREE-COLUMN ROW: OnchainHQ, Crypto Family, GX DAO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card p-6 text-left">
              <span className="text-[10px] text-primary font-bold uppercase block mb-4">Community</span>
              <h4 className="font-bold text-white mb-1">OnchainHQ</h4>
              <p className="text-xs text-muted-foreground mb-4">Community Moderator (2025)</p>
              <p className="text-xs text-muted-foreground">Ensured smooth moderation and feedback loops on Telegram/Discord.</p>
            </Card>

            <Card className="glass-card p-6 text-left">
              <span className="text-[10px] text-primary font-bold uppercase block mb-4">Partnerships</span>
              <h4 className="font-bold text-white mb-1">The Crypto Family</h4>
              <p className="text-xs text-muted-foreground mb-4">Co-Founder (2023 - 2024)</p>
              <p className="text-xs text-muted-foreground">Secured multi-chain partnerships and drove brand optimization.</p>
            </Card>

            <Card className="glass-card p-6 text-left">
              <span className="text-[10px] text-primary font-bold uppercase block mb-4">DAO</span>
              <h4 className="font-bold text-white mb-1">GX DAO</h4>
              <p className="text-xs text-muted-foreground mb-4">Strategist (2023 - 2024)</p>
              <p className="text-xs text-muted-foreground">Structured DAO collaborations across Ethereum and led narrative integration.</p>
            </Card>
          </div>

          {/* 4. TWO-COLUMN ROW: Taiku & SkylosChain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Card className="glass-card p-8 border-primary/30 bg-primary/5 text-left">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] text-primary font-bold uppercase">Viral Growth (NFT)</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Taiku NFT</h4>
                <p className="text-sm text-white font-bold mb-4 italic">3 → 9,000 followers in 3.5 days</p>
                <p className="text-xs text-muted-foreground">Engineered viral growth and activated cross-chain GTM alignment.</p>
             </Card>

             <Card className="glass-card p-8 text-left">
                <span className="text-[10px] text-primary font-bold uppercase block mb-4">Community Systems</span>
                <h4 className="text-xl font-bold text-white mb-2">SkylosChain</h4>
                <p className="text-sm text-white font-bold mb-4">5% → 95% Engagement</p>
                <p className="text-xs text-muted-foreground">Implemented scalable community content systems in 2 weeks.</p>
             </Card>
          </div>

          {/* 5. REMAINING ROLES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[{
            c: "Racerclublabs",
            r: "Partnerships",
            p: "2023"
          }, {
            c: "Playgr0und",
            r: "Community",
            p: "2022"
          }, {
            c: "BlueValley DAO",
            r: "Collab Manager",
            p: "2022"
          }, {
            c: "Pups Cub",
            r: "NFT Collab",
            p: "2022"
          }].map((item, i) => <div key={i} className="p-4 border border-white/5 rounded-lg text-left">
                <p className="text-white text-xs font-bold mb-1">{item.c}</p>
                <p className="text-[10px] text-muted-foreground uppercase">{item.r}</p>
              </div>)}
          </div>
        </div>

        {/* AMBASSADOR ROLES */}
        <div className="mt-16 pt-12 border-t border-white/5 text-left">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-6 font-bold">Protocol Ambassadorships</p>
          <div className="flex flex-wrap gap-8">
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
    </section>;
};
export default Experience;