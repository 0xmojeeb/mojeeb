import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, TrendingUp, Target, Star, ChevronRight, Activity } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Blindspot Labs",
      role: "Founder & Research Lead",
      period: "Dec 2024 – Present",
      type: "Founder",
      achievements: [
        "Founded research startup focused on identifying structural blindspots in Web3 products and narratives",
        "Author of the '2026 Series,' a research initiative focused on ecosystem longevity and founder execution systems",
        "Unpack strategy failures to translate insights into actionable frameworks for founders",
      ],
      highlight: true
    },
    {
      company: "EchelonHQ (fka Anblabs)",
      role: "Founder & Strategist",
      period: "Aug 2024 – Dec 2024",
      type: "Past",
      achievements: [
        "Led ecosystem growth initiatives across Ethereum, Base, Solana, and Polygon",
        "Built structured collaboration frameworks and developed early GTM narratives",
        "Laid the groundwork for systems thinking audits now carried forward through Blindspot Labs"
      ],
      highlight: true
    },
    // The following are moved to the "Systems History" section
    { company: "OnchainHQ", role: "Community Moderator", period: "2025", type: "Community" },
    { company: "The Crypto Family", role: "Co-Founder", period: "2023 - 2024", type: "Partnerships" },
    { company: "GX DAO", role: "Strategist", period: "2023 - 2024", type: "DAO" },
    { company: "Racerclublabs", role: "Partnerships", period: "2023 - 2024", type: "Partnerships" },
    { company: "SkylosChain", role: "Community Lead", period: "2023", type: "Community" },
    { company: "Playgr0und", role: "Community Manager", period: "2022 - 2023", type: "Community" },
    { company: "Taiku NFT", role: "Growth Strategist", period: "Jan 2023", type: "NFT", note: "3 → 9k followers in 3.5 days" },
  ];

  const ambassadorships = [
    { name: "JoinParti", achievement: "Created the viral #LFParti" },
    { name: "Credbull", achievement: "Community engagement & visibility" }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Founder: "bg-primary/20 text-primary border-primary/50",
      DAO: "bg-orange-500/20 text-orange-400 border-orange-500/50",
      Partnerships: "bg-purple-500/20 text-purple-400 border-purple-500/50",
      NFT: "bg-pink-500/20 text-pink-400 border-pink-500/50",
      Community: "bg-teal-500/20 text-teal-400 border-teal-500/50",
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/50";
  };

  return (
    <section id="experience" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-20 animate-fade-in">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            The Track Record
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Systems <span className="gradient-text">History.</span>
          </h2>
        </div>

        {/* 1. FEATURED ROLES (The Big Two) */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          {experiences.filter(e => e.highlight).map((exp, index) => (
            <Card key={index} className="glass-card border-primary/20 bg-primary/5 overflow-hidden group">
              <CardContent className="p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Activity size={120} className="text-primary" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{exp.company}</h3>
                      <Star className="w-5 h-5 text-primary fill-current" />
                    </div>
                    <p className="text-primary font-bold tracking-widest text-xs uppercase">{exp.role}</p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                    <Badge variant="outline" className={`mt-2 ${getTypeColor(exp.type)}`}>{exp.type}</Badge>
                  </div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements?.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground group/item">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 2. COMPACT SYSTEMS LOG (The rest of the history) */}
        <div className="mb-20">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8 font-bold">Evolutionary Benchmarks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.filter(e => !e.highlight).map((exp, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  <div>
                    <p className="text-sm font-bold text-white">{exp.company}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">{exp.role}</p>
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-mono text-muted-foreground">{exp.period}</p>
                   {/* @ts-ignore */}
                   {exp.note && <p className="text-[9px] text-primary italic">{exp.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. AMBASSADORSHIPS */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-wrap gap-12 justify-center lg:justify-start">
             <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 font-bold">Ambassador Protocols</p>
                <div className="flex gap-6">
                  {ambassadorships.map((amb, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-white">{amb.name}</span>
                    </div>
                  ))}
                </div>
             </div>
