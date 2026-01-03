import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  MessageSquare, 
  Building,
  Network,
  Compass
} from "lucide-react";

const Skills = () => {
  const capabilities = [
    {
      icon: Users,
      title: "Growth & Community Systems",
      description: "Designing structures that drive participation, retention, and long-term engagement beyond surface-level growth tactics."
    },
    {
      icon: MessageSquare,
      title: "Narrative, Positioning & Adoption",
      description: "Shaping narratives and positioning that align product intent with community and ecosystem behavior."
    },
    {
      icon: Building,
      title: "DAO, NFT & Ecosystem Operations",
      description: "Working within decentralized environments to align governance, incentives, and ecosystem collaboration."
    },
    {
      icon: Handshake,
      title: "Partnerships & Business Development",
      description: "Structuring partnerships that align incentives and compound ecosystem value."
    },
    {
      icon: TrendingUp,
      title: "Leadership & Strategic Thinking",
      description: "Developing frameworks and aligning teams around execution that scales."
    }
  ];

  const ecosystems = ["Ethereum", "Base", "Solana", "Polygon", "Avalanche"];
  const domains = ["DAOs", "NFTs", "DeFi", "Protocols"];

  const tools = [
    "Discord", "Telegram", "X (Twitter)", "Governance platforms", 
    "Analytics tools", "CRM systems", "Documentation & research tools"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Capabilities & Focus Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Systems and strategic capabilities developed through hands-on work across Web3 ecosystems.
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-4">
            Research and strategy work via <a href="https://mojeebhq.medium.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Blindspot Labs</a>.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <Card key={index} className="glass-card animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <capability.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ecosystem Context & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ecosystem Context */}
          <Card className="glass-card animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Ecosystem</h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {ecosystems.map((ecosystem, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="hover:bg-secondary/80 transition-colors"
                    >
                      {ecosystem}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {domains.map((domain, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="hover:bg-primary/10 transition-colors"
                    >
                      {domain}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="glass-card animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Tools</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Supporting, not defining</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="hover:bg-primary/10 transition-colors"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
