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
      title: "Community Growth & Strategy",
      description: "Building and scaling engaged Web3 communities",
      skills: [
        { name: "Community Management", level: 95 },
        { name: "Engagement Systems", level: 92 },
        { name: "Growth Frameworks", level: 90 },
        { name: "Retention Architecture", level: 88 },
        { name: "Onboarding Systems", level: 90 }
      ],
      highlight: "16 years combined experience"
    },
    {
      icon: Megaphone,
      title: "Marketing & Brand Positioning",
      description: "Driving adoption through strategic narratives",
      skills: [
        { name: "Growth Marketing", level: 92 },
        { name: "Brand Storytelling", level: 90 },
        { name: "Narrative Systems", level: 88 },
        { name: "Content Strategy", level: 87 },
        { name: "Campaign Execution", level: 90 }
      ],
      highlight: "12+ years Web2 marketing expertise"
    },
    {
      icon: Building,
      title: "DAO & NFT Ecosystem Operations",
      description: "Expertise in decentralized organizations and NFT growth",
      skills: [
        { name: "DAO Strategy", level: 88 },
        { name: "NFT Collaborations", level: 90 },
        { name: "Governance Alignment", level: 85 },
        { name: "Protocol Scaling", level: 87 },
        { name: "Ecosystem Partnerships", level: 92 }
      ],
      highlight: "200+ projects engaged"
    },
    {
      icon: Handshake,
      title: "Partnerships & Business Development",
      description: "High-velocity partnership execution",
      skills: [
        { name: "Deal Negotiation", level: 90 },
        { name: "BD Pipelines", level: 88 },
        { name: "Cross-Chain Outreach", level: 92 },
        { name: "Partner Activation", level: 87 },
        { name: "Co-Marketing Systems", level: 89 }
      ],
      highlight: "8.5/10 partnership success rate"
    },
    {
      icon: TrendingUp,
      title: "Leadership & Strategy",
      description: "Framework development and execution leadership",
      skills: [
        { name: "Strategic Planning", level: 90 },
        { name: "Framework Development", level: 92 },
        { name: "Team Alignment", level: 88 },
        { name: "Execution Leadership", level: 91 },
        { name: "Cross-functional Growth", level: 87 }
      ],
      highlight: "Created DAETO Framework"
    }
  ];

  const ecosystems = [
    { name: "Ethereum", color: "bg-blue-700" },
    { name: "Base", color: "bg-blue-800" },
    { name: "Solana", color: "bg-purple-700" },
    { name: "Polygon", color: "bg-purple-800" },
    { name: "Avalanche", color: "bg-red-600" },
    { name: "DAOs", color: "bg-green-700" },
    { name: "NFTs", color: "bg-pink-700" },
    { name: "DeFi", color: "bg-yellow-700" }
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
                <div className="achievement-number mb-2">200+</div>
                <p className="text-muted-foreground">Projects Engaged</p>
              </div>
              <div className="text-center">
                <div className="achievement-number mb-2">95%</div>
                <p className="text-muted-foreground">Peak Engagement Rate</p>
              </div>
              <div className="text-center">
                <div className="achievement-number mb-2">8.5/10</div>
                <p className="text-muted-foreground">Partnership Success</p>
              </div>
              <div className="text-center">
                <div className="achievement-number mb-2">8.5k</div>
                <p className="text-muted-foreground">Followers in 3.5 Days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;