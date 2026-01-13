import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "CREATORS IN 2026 WILL STRUGGLE WITHOUT THIS",
      description: "An analysis of the internal system errors causing creator burnout and the structural blindspots for 2026 founders.",
      link: "https://x.com/MojeebHQ/status/2009497216109695467?s=20",
      platform: "Strategy",
      featured: true // Main focus
    },
    {
      title: "The 2026 Product Blueprint",
      description: "A strategic deep dive into the next wave of Web3 products, moving from fragmented growth to integrated ecosystem design.",
      link: "https://x.com/MojeebHQ/status/2009997538267435511?s=20",
      platform: "Research"
    },
    {
      title: "The 2026 Execution Pack",
      description: "A burnout-free weekly system for high-output founders, implementing the 'Maker vs. Manager' split.",
      link: "https://x.com/MojeebHQ/status/2010457986670448657?s=20",
      platform: "Strategy"
    },
    {
      title: "Audit — Token Supply & Illusion of Scarcity",
      description: "A structural analysis of token mechanics and how perceived scarcity shapes market behavior.",
      link: "https://x.com/MojeebHQ/status/2005534320434299312?s=20",
      platform: "Audit"
    },
    {
      title: "Community Rewards Done Right",
      description: "How to structure reward systems that honor early adopters and protect long-term trust.",
      link: "https://mojeebhq.medium.com/community-rewards-done-right-stop-fvcking-over-your-early-users-e3ac552c3f9b",
      platform: "Medium"
    },
    {
      title: "9k Followers & The Mistake After",
      description: "A growth campaign deconstruction: what went right, what went wrong, and the lessons that reshaped my strategy.",
      link: "https://x.com/MojeebHQ/status/1971794428789461365",
      platform: "X (Twitter)"
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
              Intelligence Feed
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Featured <span className="gradient-text">Posts.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm uppercase tracking-widest max-w-[200px] leading-relaxed border-l border-white/10 pl-4">
            Public thinking on systems and structural blindspots.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
          {blogPosts.map((post, index) => {
            // Logic to vary card sizes for the "magazine" look
            const isMainFeature = index === 0;
            const isMediumFeature = index === 1;

            return (
              <Card
                key={index}
                className={`glass-card group relative overflow-hidden transition-all duration-500 hover:border-primary/40 
                  ${isMainFeature ? 'md:col-span-4 md:row-span-2 bg-primary/5' : ''} 
                  ${isMediumFeature ? 'md:col-span-2 md:row-span-2
