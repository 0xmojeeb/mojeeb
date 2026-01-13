import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    /* ROW 1: THE PILLARS */
    {
      title: "The Subtle Act of Not Giving a Fvck About Your Community",
      description: "The basic foundations of community building are Emotional Intelligence and Communication. A counter-intuitive look at authentic engagement.",
      link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa",
      platform: "Foundation",
      layout: "md:col-span-2", // 2/3 of the first row
      isPrimary: true
    },
    {
      title: "Community Growth Hack: FEEDBACK",
      description: "You can never go wrong with feeding on community feedback. Turn raw input into a growth engine.",
      link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-6afe90b633f4",
      platform: "Growth",
      layout: "md:col-span-1", // 1/3 of the first row
    },

    /* ROW 2: THE 2026 STRATEGY TRIO (3 EQUAL COLUMNS) */
    {
      title: "CREATORS IN 2026 WILL STRUGGLE WITHOUT THIS",
      description: "An analysis of the internal system errors causing creator burnout and structural blindspots.",
      link: "https://x.com/MojeebHQ/status/2009497216109695467?s=20",
      platform: "Strategy",
      layout: "md:col-span-1", 
    },
    {
      title: "The 2026 Product Blueprint",
      description: "A strategic deep dive into the next wave of Web3 products and integrated ecosystem design.",
      link: "https://x.com/MojeebHQ/status/2009997538267435511?s=20",
      platform: "Research",
      layout: "md:col-span-1",
    },
    {
      title: "The 2026 Execution Pack",
      description: "A burnout-free weekly system for high-output founders, implementing the 'Maker vs. Manager' split.",
      link: "https://x.com/MojeebHQ/status/2010457986670448657?s=20",
      platform: "Execution",
      layout: "md:col-span-1",
    },

    /* ROW 3: REWARDS & GROWTH */
    {
      title: "Community Rewards Done Right",
      description: "Stop fvcking over your early users. Structure reward systems that honor trust and long-term participation.",
      link: "https://mojeebhq.medium.com/community-rewards-done-right-stop-fvcking-over-your-early-users-e3ac552c3f9b",
      platform: "Rewards",
      layout: "md:col-span-1",
    },
    {
      title: "9k Followers & The Mistake After",
      description: "A growth campaign deconstruction: what went right, what went wrong, and the lessons that reshaped my strategy.",
      link: "https://x.com/MojeebHQ/status/1971794428789461365",
      platform: "X (Twitter)",
      layout: "md:col-span-2",
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-white">
          <div className="max-w-2xl">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
              Intelligence Feed
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Featured <span className="gradient-text">Posts.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm uppercase tracking-widest max-w-[200px] leading-relaxed border-l border-white/10 pl-4 font-bold">
            Public thinking on systems and structural blindspots.
          </p>
        </div>

        {/* 3-COLUMN MASTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col ${post.layout}`}
            >
              <CardContent className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                      {post.platform}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className={`font-bold mb-4 text-white group-hover:text-primary transition-colors ${post.isPrimary ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {post.description}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-fit p-0 h-auto font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-white group/btn mt-auto"
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
