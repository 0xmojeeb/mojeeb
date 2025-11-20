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
            I'm a Web3 Growth Lead & Ecosystem Strategist with 16 years combined experience across Marketing, Sales, Community, Partnerships, and Web3 Ecosystem Development.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            I specialize in multi-chain ecosystem growth, high-velocity partnership execution, narrative-driven adoption, and community systems that scale across chains.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            My background includes <span className="font-semibold text-foreground">200+ ecosystem collaborations</span> across ETH, Base, Solana & more, an <span className="font-semibold text-foreground">8.5/10 partnership negotiation success rate</span>, explosive traction like <span className="font-semibold text-foreground">3 → 9,000 users in 3.5 days for Taiku NFT</span>, and community revival achievements such as <span className="font-semibold text-foreground">5% → 95% engagement in 2 weeks for SkylosChain</span>.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Creator of the <span className="gradient-text font-semibold">DAETO Framework</span>, a BD + growth system for Web3 teams, and Founder of <span className="gradient-text font-semibold">EchelonHQ</span>, focused on collaboration strategy, alpha research, and multi-chain growth.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            With 12 years of Web2 marketing & sales leadership, I bring execution discipline and a structured approach — combined with Web3-native storytelling, culture, and cross-community intuition.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4 font-semibold">
            I don't just grow communities — I build ecosystems.
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