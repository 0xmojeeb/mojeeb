import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, TrendingUp, Target, Star } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "EchelonHQ",
      role: "Founder",
      period: "2024 – Present",
      type: "Founder",
      achievements: [
        "Building a Web3-native agency + alpha community",
        "Designing the EchelonPass NFT to gate access and drive ecosystem growth",
        "Leading collaboration strategy and community frameworks"
      ],
      highlight: true
    },
    {
      company: "Onchain HQ",
      role: "Moderator & Growth Strategist",
      period: "Current",
      type: "Growth",
      achievements: [
        "Increased audience engagement to 90% by leading conversations",
        "Strengthened brand-to-community trust through strategic moderation",
        "Developed engagement frameworks for sustained growth"
      ]
    },
    {
      company: "Skylos Chain",
      role: "Lead Moderator & Strategist",
      period: "Recent",
      type: "Strategy",
      achievements: [
        "Boosted community engagement by 85% in just 2 weeks",
        "Implemented structured moderation and communication systems",
        "Established best practices for community management"
      ]
    },
    {
      company: "GX DAO",
      role: "Collaboration Manager & Strategist",
      period: "Sep 2023 – Mar 2024",
      type: "DAO",
      achievements: [
        "Executed DAO collaboration strategies",
        "Boosted ecosystem alignment through strategic partnerships",
        "Facilitated cross-DAO collaboration initiatives"
      ]
    },
    {
      company: "Racerclublabs",
      role: "Collaboration Manager",
      period: "Jul 2023 – Oct 2023",
      type: "Partnerships",
      achievements: [
        "Drove community alignment through strategic partnerships",
        "Established collaboration frameworks",
        "Enhanced ecosystem connectivity"
      ]
    },
    {
      company: "DegenPirates",
      role: "Business Developer & KOL Manager",
      period: "Jun 2023 – Jul 2023",
      type: "Business",
      achievements: [
        "Achieved 8.5/10 success rate in partnership closure",
        "Secured valuable partnerships that raised project visibility",
        "Developed business development strategies"
      ]
    },
    {
      company: "Taiku NFT",
      role: "Business Developer & Growth Strategist",
      period: "Jan 2023",
      type: "NFT",
      achievements: [
        "Forged strategic partnerships and growth opportunities",
        "Elevated project awareness through ecosystem outreach",
        "Developed NFT project business strategies"
      ]
    },
    {
      company: "Playground",
      role: "Collaboration Manager & Community Manager",
      period: "Aug 2022 – Mar 2023",
      type: "Community",
      achievements: [
        "Managed collaborations and engagement strategies",
        "Expanded community reach through strategic partnerships",
        "Implemented community growth frameworks"
      ]
    }
  ];

  const ambassadorships = [
    { name: "JoinParti", achievement: "Created viral #LFParti campaign driving adoption" },
    { name: "Credbull", achievement: "Supported community building and Web3 awareness" }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Founder: "bg-gradient-to-r from-purple-500 to-pink-500",
      Growth: "bg-gradient-to-r from-green-500 to-emerald-500",
      Strategy: "bg-gradient-to-r from-blue-500 to-cyan-500",
      DAO: "bg-gradient-to-r from-orange-500 to-red-500",
      Partnerships: "bg-gradient-to-r from-indigo-500 to-purple-500",
      Business: "bg-gradient-to-r from-yellow-500 to-orange-500",
      NFT: "bg-gradient-to-r from-pink-500 to-purple-500",
      Community: "bg-gradient-to-r from-teal-500 to-green-500"
    };
    return colors[type as keyof typeof colors] || "bg-gradient-to-r from-gray-500 to-gray-600";
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of driving growth and building meaningful collaborations across the Web3 ecosystem
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Timeline dot */}
                <div className="absolute left-6 timeline-dot"></div>
                
                <Card className={`ml-20 glass-card hover:scale-[1.02] transition-all duration-300 ${exp.highlight ? 'ring-2 ring-primary/50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          {exp.highlight && <Star className="w-5 h-5 text-primary fill-current" />}
                        </div>
                        <h4 className="text-lg text-primary font-semibold mb-2">{exp.role}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <Badge className={`${getTypeColor(exp.type)} text-white border-0`}>
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Ambassador Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Ambassador Roles</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ambassadorships.map((amb, index) => (
              <Card key={index} className="glass-card animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold">{amb.name}</h4>
                  </div>
                  <p className="text-muted-foreground">{amb.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;