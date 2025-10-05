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
        "Built and led a Web3-native community hub",
        "Designed and implemented the DAETO collaboration framework (Discovery, Approach, Execution, Tracking, Optimization)"
      ],
      highlight: true
    },
    {
      company: "Onchain HQ",
      role: "Community Moderator",
      period: "Apr 2025 – Jun 2025",
      type: "Community",
      achievements: [
        "Supported community engagement and moderation across Discord and Telegram",
        "Ensured smooth community operations and effective feedback loops"
      ]
    },
    {
      company: "The Crypto Family",
      role: "Collaboration Lead & Co-Founder",
      period: "Nov 2023 – Jul 2023",
      type: "Partnerships",
      achievements: [
        "Led brand optimization efforts, enhancing visibility and positioning within the Web3 ecosystem",
        "Secured strategic collaborations and partnerships to expand ecosystem reach",
        "Drove community growth through targeted initiatives and relationship building",
        "Onboarded Luckygo during its early stage, strengthening community operations and positioning the brand as an early adopter of innovative tools"
      ]
    },
    {
      company: "GX DAO",
      role: "Collaboration Manager & Strategist",
      period: "Sep 2023 – Mar 2024",
      type: "DAO",
      achievements: [
        "Structured high-value collaborations within the Ethereum ecosystem",
        "Optimized DAO community growth, engagement, and retention"
      ]
    },
    {
      company: "Racerclublabs",
      role: "Collaboration & Partnership Manager",
      period: "Jul 2023 – Oct 2023",
      type: "Partnerships",
      achievements: [
        "Negotiated cross-ecosystem collaborations to increase brand reach",
        "Strengthened project visibility through strategic partnership alignment"
      ]
    },
    {
      company: "SkylosChain",
      role: "Community Manager & Marketer",
      period: "Jun 2023 – Jul 2023",
      type: "Strategy",
      achievements: [
        "Boosted community engagement from 5% to 95% in just two weeks",
        "Implemented scalable engagement strategies to maintain retention"
      ]
    },
    {
      company: "Playgr0und (fka Readers DAO)",
      role: "Collaboration & Community Manager",
      period: "Aug 2022 – Mar 2023",
      type: "Community",
      achievements: [
        "Built partnerships with NFT projects and DAOs to expand the ecosystem",
        "Scaled community operations efficiently through automation tools",
        "Onboarded Alphabot to Playgr0und at launch, streamlining collaboration and positioning the community as an early adopter"
      ]
    },
    {
      company: "BlueValley DAO (fka Solchasers DAO)",
      role: "Collaboration Manager",
      period: "Oct 2022 – Dec 2023",
      type: "DAO",
      achievements: [
        "Secured partnerships and collaborations to expand community reach",
        "Contributed to strategic planning and execution of the DAO's rebrand"
      ]
    },
    {
      company: "Taiku NFT",
      role: "Business Developer & Growth Strategist",
      period: "Jan 2023 – Jan 2023",
      type: "NFT",
      achievements: [
        "Expanded NFT partnerships and delivered high-quality collaborations",
        "Grew Taiku NFT's Twitter (X) from 3 to 9,000 organic followers in 3.5 days, boosting brand visibility and engagement"
      ]
    },
    {
      company: "Pups Cub",
      role: "Collaboration Manager",
      period: "Oct 2022 – Oct 2022",
      type: "Partnerships",
      achievements: [
        "Strengthened NFT collaboration outreach and improved brand positioning"
      ]
    },
    {
      company: "Solfiends",
      role: "Collaboration Manager",
      period: "Sep 2022 – Sep 2022",
      type: "Partnerships",
      achievements: [
        "Drove community onboarding and partnership strategies for early growth"
      ]
    }
  ];

  const ambassadorships = [
    { name: "JoinParti", achievement: "Created the viral #LFParti campaign that amplified onboarding and engagement" },
    { name: "Credbull", achievement: "Advocated for brand visibility through community activations and marketing synergy" }
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