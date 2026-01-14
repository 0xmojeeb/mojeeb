import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Handshake, TrendingUp, MessageSquare, Building, Network, Compass, ChevronRight } from "lucide-react";
const Skills = () => {
  return <section id="skills" className="py-24 px-6 bg-secondary/10">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="max-w-4xl mb-16 text-left">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            Intelligence Layer
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Capabilities & <span className="gradient-text">Focus.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-6">
            Systems and strategic capabilities developed through hands-on work across Web3 ecosystems. 
          </p>
          <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity" href="https://blindspotlabs.vercel.app/">
            Research via Blindspot Labs <ChevronRight size={14} />
          </a>
        </div>

        {/* CORE CAPABILITIES GRID - HARDCODED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {/* GROWTH */}
          <Card className="glass-card border-white/5 bg-white/5 hover:border-primary/30 transition-colors">
            <CardContent className="p-8 text-left h-full flex flex-col">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Growth & Community Systems</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing structures that drive participation, retention, and long-term engagement beyond surface-level growth tactics.
              </p>
            </CardContent>
          </Card>

          {/* NARRATIVE */}
          <Card className="glass-card border-white/5 bg-white/5 hover:border-primary/30 transition-colors">
            <CardContent className="p-8 text-left h-full flex flex-col">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Narrative & Positioning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shaping narratives and positioning that align product intent with community behavior and ecosystem adoption.
              </p>
            </CardContent>
          </Card>

          {/* OPERATIONS */}
          <Card className="glass-card border-white/5 bg-white/5 hover:border-primary/30 transition-colors">
            <CardContent className="p-8 text-left h-full flex flex-col">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">DAO & Ecosystem Ops</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Working within decentralized environments to align governance, incentives, and multi-chain collaboration.
              </p>
            </CardContent>
          </Card>

          {/* PARTNERSHIPS */}
          <Card className="glass-card border-white/5 bg-white/5 hover:border-primary/30 transition-colors">
            <CardContent className="p-8 text-left h-full flex flex-col">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Strategic Partnerships</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structuring partnerships that align incentives and compound value across the Ethereum, Solana, and Base ecosystems.
              </p>
            </CardContent>
          </Card>

          {/* LEADERSHIP */}
          <Card className="glass-card border-white/5 bg-white/5 hover:border-primary/30 transition-colors md:col-span-2 lg:col-span-2">
            <CardContent className="p-8 text-left h-full flex flex-col justify-center">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Leadership & Strategic Thinking</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    Developing execution frameworks that scale. I focus on internal system errors and structural blindspots that prevent founders from reaching long-term longevity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECONDARY TECH STACK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="glass-card border-white/5 p-8 text-left">
            <div className="flex items-center gap-3 mb-6">
              <Network className="w-4 h-4 text-primary" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Ecosystem Context</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Ethereum", "Base", "Solana", "Polygon", "Avalanche", "DAOs", "NFTs", "DeFi"].map(tag => <Badge key={tag} variant="secondary" className="bg-white/5 border-white/10 text-white font-mono text-[10px]">
                  {tag}
                </Badge>)}
            </div>
          </Card>

          <Card className="glass-card border-white/5 p-8 text-left">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-4 h-4 text-primary" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Tools & Infrastructure</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Discord", "Telegram", "Governance platforms", "Analytics", "CRM", "Research Tools"].map(tag => <Badge key={tag} variant="outline" className="border-primary/20 text-primary font-mono text-[10px]">
                  {tag}
                </Badge>)}
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Skills;