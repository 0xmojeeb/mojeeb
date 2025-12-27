import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Zap, Target } from "lucide-react";
const About = () => {
  const achievements = [{
    icon: TrendingUp,
    label: "90% MoM Engagement Increase",
    value: "90%",
    description: "OnchainHQ"
  }, {
    icon: Users,
    label: "Ecosystem Collaborations",
    value: "200+",
    description: "Delivered across multiple chains"
  }, {
    icon: Zap,
    label: "Community Engagement Peak",
    value: "95%",
    description: "SkylosChain"
  }, {
    icon: Target,
    label: "Partnership Success Rate",
    value: "8.5/10",
    description: "DegenPirates"
  }];
  return <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Mojeeb</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I work at the intersection of strategy, partnerships, and ecosystem growth.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
            Over the past few years, I've collaborated with Web3 protocols, DAOs, NFT projects, and early-stage teams to help them design systems that scale, not just grow fast, but grow deliberately. My work spans ecosystem partnerships, community-led execution, and go-to-market coordination across networks like Ethereum, Base, Solana, Polygon, and Avalanche.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            I'm especially interested in how systems break, why growth stalls, and what actually moves the needle beyond surface-level tactics. That curiosity has shaped how I approach collaboration: clear incentives, aligned stakeholders, and execution that compounds over time.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Outside of direct work, I write and think in public, sharing observations on structure, strategy, and clarity as they form. Not everything becomes a framework. Some things are simply notes from the field.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4 font-semibold">
            This site is a record of that work, that thinking, and the systems built along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 animate-slide-in-left" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="achievement-number mb-2">{achievement.value}</div>
                <h3 className="font-semibold mb-2">{achievement.label}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>)}
        </div>

        <Card className="glass-card animate-fade-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Web3 Ecosystems</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I work across multiple chains and understand the culture, speed, and growth dynamics of each.
                  I build growth systems that adapt to chain culture, community expectations, and ecosystem strategy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Ethereum</Badge>
                  <Badge variant="secondary">Base</Badge>
                  <Badge variant="secondary">Solana</Badge>
                  <Badge variant="secondary">Polygon</Badge>
                  <Badge variant="secondary">Avalanche</Badge>
                  <Badge variant="secondary">DAOs</Badge>
                  <Badge variant="secondary">NFTs</Badge>
                  <Badge variant="secondary">DeFi</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Current Focus — EchelonHQ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founder of <span className="gradient-text font-semibold">EchelonHQ</span>, 
                  a Web3-native growth and collaboration collective. Current work includes building EchelonPass NFT, 
                  designing ecosystem-aligned collaboration systems, executing multi-chain BD workflows, 
                  growing communities with strategic storytelling, creating frameworks for DAO expansion & partner alignment, 
                  and building SHOB, a culture-layer for identity & ecosystem synergy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default About;