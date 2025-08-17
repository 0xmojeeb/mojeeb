import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Zap, Target } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: TrendingUp, label: "Community Growth", value: "90%", description: "Engagement increase at Onchain HQ" },
    { icon: Users, label: "Ecosystem Projects", value: "15+", description: "Successful collaborations managed" },
    { icon: Zap, label: "Growth Rate", value: "85%", description: "Community boost in 2 weeks (Skylos)" },
    { icon: Target, label: "Success Rate", value: "8.5/10", description: "Partnership success (DegenPirates)" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Mojeeb</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Web3-native strategist passionate about building communities, forging meaningful 
            collaborations, and creating growth frameworks for projects and DAOs. Over the past years, 
            I've worked across multiple ecosystems applying a mix of business development, strategy, 
            and content creation to accelerate impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="achievement-number mb-2">{achievement.value}</div>
                <h3 className="font-semibold mb-2">{achievement.label}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card animate-fade-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Web3 Ecosystems</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I've worked across multiple blockchain ecosystems, understanding the unique dynamics 
                  of each while building bridges between communities and fostering meaningful collaborations 
                  that drive mutual growth.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Ethereum</Badge>
                  <Badge variant="secondary">Base</Badge>
                  <Badge variant="secondary">Solana</Badge>
                  <Badge variant="secondary">Polygon</Badge>
                  <Badge variant="secondary">DAOs</Badge>
                  <Badge variant="secondary">NFTs</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As the founder of <span className="gradient-text font-semibold">EchelonHQ</span>, 
                  I'm building a Web3-native agency and alpha community. The vision includes designing 
                  the EchelonPass NFT to gate access and drive ecosystem growth while leading 
                  collaboration strategy and community frameworks for the next generation of Web3 projects.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;