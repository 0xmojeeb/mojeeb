import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "CREATORS IN 2026 WILL STRUGGLE WITHOUT THIS",
      description: "An analysis of the internal system errors causing creator burnout and the structural blindspots for 2026 founders.",
      link: "https://x.com/MojeebHQ/status/2009497216109695467?s=20",
      platform: "Strategy",
      isLarge: true
    },
    {
      title: "The 2026 Product Blueprint",
      description: "A strategic deep dive into the next wave of Web3 products, moving from fragmented growth to integrated ecosystem design.",
      link: "https://x.com/MojeebHQ/status/2009997538267435511?s=20",
      platform: "Research",
      isLarge: false
    },
    {
      title: "The 2026 Execution Pack",
      description: "A burnout-free weekly system for high-output founders, implementing the 'Maker vs. Manager' split and spiritual anchors.",
      link: "https://x.com/MojeebHQ/status/2010457986670448657?s=20",
      platform: "Strategy",
      isLarge: false
    },
    {
      title: "Audit — Token Supply & Illusion of Scarcity",
      description: "A structural analysis of token mechanics and how perceived scarcity shapes market behavior.",
      link: "https://x.com/MojeebHQ/status/2005534320434299312?s=20",
      platform: "Audit",
      isLarge: false
    },
    {
      title: "Community Rewards Done Right",
      description: "How to structure reward systems that honor early adopters and protect long-term trust.",
      link: "https://mojeebhq.medium.com/community-rewards-done-right-stop-fvcking-over-your-early-users-e3ac552c3f9b",
      platform: "Medium",
      isLarge: false
    },
    {
      title: "9k Followers & The Mistake After",
      description: "A growth campaign deconstruction: what went right, what went wrong, and the lessons that reshaped my strategy.",
      link: "https://x.com/MojeebHQ/status/1971794428789461365",
      platform: "X (Twitter)",
      isLarge: false
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
              Intelligence Feed
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Featured <span className="gradient-text">Posts.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm uppercase tracking-widest max-w-[200px] leading-relaxed border-l border-white/10 pl-4">
            Public thinking on systems and structural blindspots.
          </p>
        </div>

        {/* REPAIR: Simplified Grid to prevent blank rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col h-full ${post.isLarge ? 'lg:col-span-2' : ''}`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{post.platform}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className={`font-bold mb-4 text-white group-hover:text-primary transition-colors ${post.isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {post.description}
                </p>

                <Button 
                  variant="ghost" 
                  className="w-fit p-0 h-auto font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-white group/btn"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Read Analysis <span className="text-primary group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
