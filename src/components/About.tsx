import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Zap, Target } from "lucide-react";
const About = () => {
  const outcomes = [{
    icon: TrendingUp,
    label: "Sustained engagement growth through system redesign",
    context: "OnchainHQ"
  }, {
    icon: Users,
    label: "Cross-ecosystem collaboration experience",
    context: "200+ collaborations across multiple chains"
  }, {
    icon: Zap,
    label: "High-participation community systems",
    context: "SkylosChain"
  }, {
    icon: Target,
    label: "Repeatable partnership execution",
    context: "DegenPirates"
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
            I am currently the <span className="font-semibold text-foreground">Founder of Blindspot Labs</span>, where I lead a research initiative focused on the <span className="font-semibold text-foreground">2026 Series</span>, a framework for identifying structural blindspots in Web3 products and creator execution systems. My work moves beyond surface-level growth to focus on <span className="font-semibold text-foreground">ecosystem longevity</span> and <span className="font-semibold text-foreground">high-output strategy</span>.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            My approach is built on the belief that in 2026, <span className="font-semibold text-foreground">longevity is the ultimate leverage</span>. Whether auditing token mechanics or designing "Maker vs. Manager" workflows, my goal is to help founders see structural issues early, before they become expensive problems.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">Selected Outcomes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {outcomes.map((outcome, index) => <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 animate-slide-in-left" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <outcome.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-sm leading-relaxed mb-2">{outcome.label}</h3>
                <p className="text-xs text-muted-foreground">{outcome.context}</p>
              </CardContent>
            </Card>)}
        </div>

        <Card className="glass-card animate-fade-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Web3 Ecosystems</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I work across multiple chains and focus on how ecosystem design, culture, and incentives shape growth. My approach adapts strategy to chain-specific dynamics, community behavior, and ecosystem structure — rather than applying one-size-fits-all tactics.
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Ecosystems:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Ethereum</Badge>
                    <Badge variant="secondary">Base</Badge>
                    <Badge variant="secondary">Solana</Badge>
                    <Badge variant="secondary">Polygon</Badge>
                    <Badge variant="secondary">Avalanche</Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Domains:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">DAOs</Badge>
                    <Badge variant="secondary">NFTs</Badge>
                    <Badge variant="secondary">DeFi</Badge>
                    <Badge variant="secondary">Protocols</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Current Focus — Blindspot Labs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a target="_blank" rel="noopener noreferrer" className="gradient-text font-semibold hover:underline" href="https://blindspotlabs.lovable.app/">Blindspot Labs</a> is my current startup and primary focus. 
                  It operates as a research and strategy initiative dedicated to identifying blindspots in Web3 products, ecosystems, and narratives. 
                  The work spans system audits, ecosystem analysis, incentive design, and positioning reviews, with insights shared through writing and public thinking.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The goal is simple: help founders and operators see structural issues early, before they become expensive problems.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default About;