import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  MessageSquare, 
  Megaphone, 
  Building,
  Lightbulb,
  Network
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Users,
      title: "Community Growth & Engagement",
      description: "Building and scaling Web3 communities with proven engagement strategies",
      skills: [
        { name: "Community Management", level: 95 },
        { name: "Engagement Strategy", level: 90 },
        { name: "Growth Frameworks", level: 85 },
        { name: "Moderation Systems", level: 92 }
      ],
      highlight: "took SkylosChain engagement from 5% to 95%"
    },
    {
      icon: Handshake,
      title: "Strategic Collaboration & Partnerships",
      description: "Forging meaningful partnerships across Web3 ecosystems",
      skills: [
        { name: "Partnership Development", level: 90 },
        { name: "Collaboration Strategy", level: 88 },
        { name: "Ecosystem Outreach", level: 85 },
        { name: "Cross-chain Relations", level: 80 }
      ],
      highlight: "GX DAO, Playground, Solfiends, Racerclublabs"
    },
    {
      icon: TrendingUp,
      title: "Business Development & Strategy",
      description: "Driving growth and creating value propositions for Web3 projects",
      skills: [
        { name: "Business Strategy", level: 85 },
        { name: "Growth Planning", level: 88 },
        { name: "Market Analysis", level: 82 },
        { name: "Revenue Strategy", level: 80 }
      ],
      highlight: "8.5/10 partnership success rate"
    },
    {
      icon: MessageSquare,
      title: "Content Creation & Alpha Calls",
      description: "Multichain content creation and alpha calls with proven results",
      skills: [
        { name: "Content Strategy", level: 85 },
        { name: "Alpha Research", level: 90 },
        { name: "Social Media", level: 88 },
        { name: "Brand Messaging", level: 82 }
      ],
      highlight: "recent call hit +19,465%"
    }
  ];

  const ecosystems = [
    { name: "Ethereum", color: "bg-blue-700" },
    { name: "Base", color: "bg-blue-800" },
    { name: "Solana", color: "bg-purple-700" },
    { name: "Polygon", color: "bg-purple-800" },
    { name: "DAOs", color: "bg-green-700" },
    { name: "NFTs", color: "bg-pink-700" },
    { name: "DeFi", color: "bg-yellow-700" },
    { name: "Gaming", color: "bg-red-700" }
  ];

  const tools = [
    "Discord Management", "Telegram Communities", "Twitter Spaces", 
    "Governance Platforms", "Analytics Tools", "CRM Systems",
    "Project Management", "Documentation", "Alpha Research Tools"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized skills developed through hands-on experience in the Web3 ecosystem
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{category.highlight}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ecosystems & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ecosystems */}
          <Card className="glass-card animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Network className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Ecosystems</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {ecosystems.map((ecosystem, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className={`${ecosystem.color} text-white border-0 justify-center py-2 hover:scale-105 transition-transform`}
                  >
                    {ecosystem.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card className="glass-card animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Tools & Platforms</h3>
              </div>
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

        {/* Key Achievements */}
        <Card className="glass-card mt-8 animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Key Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="achievement-number mb-2">100+</div>
                <p className="text-muted-foreground">Ecosystem Projects</p>
              </div>
              <div className="text-center">
                <div className="achievement-number mb-2">90%</div>
                <p className="text-muted-foreground">Peak Engagement Rate</p>
              </div>
              <div className="text-center">
                <div className="achievement-number mb-2">8.5/10</div>
                <p className="text-muted-foreground">Partnership Success</p>
              </div>
              <div className="text-center">
                <div className="achievement-number mb-2">8.5k</div>
                <p className="text-muted-foreground">Taiku NFT followers in 3.5 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;