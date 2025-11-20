import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, TrendingUp, Target, Star } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "EchelonHQ (fka Anblabs)",
      role: "Founder & Strategist",
      period: "Aug 2024 – Present",
      type: "Founder",
      achievements: [
        "Built a Web3-native ecosystem growth & collaboration studio",
        "Created the DAETO Framework for scalable partnerships and BD ops",
        "Led multi-chain ecosystem growth across ETH, Base, Solana, and Polygon",
        "Designed GTM and narrative for EchelonPass & SHOB"
      ],
      highlight: true
    },
    {
      company: "OnchainHQ",
      role: "Community Moderator",
      period: "Apr 2025 – Jun 2025",
      type: "Community",
      achievements: [
        "Managed community operations on Telegram & Discord",
        "Ensured smooth moderation, engagement, and feedback loops"
      ]
    },
    {
      company: "The Crypto Family",
      role: "Collaboration Lead & Co-Founder",
      period: "Nov 2023 – Nov 2024",
      type: "Partnerships",
      achievements: [
        "Secured multi-chain partnerships and narrative alignment",
        "Drove brand optimization and early adoption",
        "Onboarded Luckygo and aligned ecosystem messaging"
      ]
    },
    {
      company: "GX DAO",
      role: "Collaboration Manager & Strategist",
      period: "Sep 2023 – Mar 2024",
      type: "DAO",
      achievements: [
        "Structured DAO collaborations across Ethereum",
        "Improved retention and community activation",
        "Led narrative and DAO integration workflows"
      ]
    },
    {
      company: "Racerclublabs",
      role: "Partnerships & Collaboration Manager",
      period: "Jul 2023 – Nov 2024",
      type: "Partnerships",
      achievements: [
        "Negotiated cross-ecosystem collaborations",
        "Strengthened visibility via co-marketing strategies"
      ]
    },
    {
      company: "SkylosChain",
      role: "Community Manager & Marketer",
      period: "Jun 2023 – Jul 2023",
      type: "Community",
      achievements: [
        "Boosted community engagement 5% → 95% in 2 weeks",
        "Implemented scalable community & content systems"
      ]
    },
    {
      company: "Playgr0und (fka Readers DAO)",
      role: "Collaboration & Community Manager",
      period: "Aug 2022 – Mar 2023",
      type: "Community",
      achievements: [
        "Built partnerships with NFT projects & DAOs",
        "Integrated Alphabot to automate collab ops"
      ]
    },
    {
      company: "BlueValley DAO (SolChasers)",
      role: "Collaboration Manager",
      period: "Oct 2022 – Dec 2023",
      type: "DAO",
      achievements: [
        "Secured ecosystem collaborations to expand reach",
        "Contributed to DAO rebrand & strategic planning"
      ]
    },
    {
      company: "Taiku NFT",
      role: "BD & Growth Strategist",
      period: "Jan 2023",
      type: "NFT",
      achievements: [
        "Engineered viral growth 3 → 9,000 followers in 3.5 days",
        "Activated cross-chain partnerships & GTM alignment"
      ]
    },
    {
      company: "Pups Cub",
      role: "Collaboration Manager",
      period: "Oct 2022",
      type: "Partnerships",
      achievements: [
        "Strengthened NFT collaboration outreach and brand positioning"
      ]
    },
    {
      company: "Solfiends",
      role: "Collaboration Manager",
      period: "Sep 2022",
      type: "Partnerships",
      achievements: [
        "Expanded community reach by ~20%"
      ]
    }
  ];

  const ambassadorships = [
    { name: "JoinParti", achievement: "Created the viral #LFParti" },
    { name: "Credbull", achievement: "Community engagement & visibility" }
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