import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-white text-left">
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

        {/* ROW 1: THE PILLARS (2/3 + 1/3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Card className="glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col md:col-span-2">
            <CardContent className="p-8 flex flex-col h-full text-left">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Foundation</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                The Subtle Act of Not Giving a Fvck About Your Community
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm flex-grow">
                The basic foundations of community building are Emotional Intelligence and Communication. A counter-intuitive look at authentic engagement.
              </p>
              <Button variant="ghost" className="w-fit p-0 h-auto font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-white group/btn" asChild>
                <a href="https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa" target="_blank">
                  Read Analysis <span className="text-primary group-hover/btn:translate-x-1 transition-transform inline-block ml-2">→</span>
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col">
            <CardContent className="p-8 flex flex-col h-full text-left">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Growth</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary">Community Growth Hack: FEEDBACK</h3>
              <p className="text-muted-foreground mb-8 text-sm flex-grow">You can never go wrong with feeding on community feedback.</p>
              <Button variant="ghost" className="w-fit p-0 h-auto font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent" asChild>
                <a href="https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-6afe90b633f4" target="_blank">
                  Read Analysis <span className="text-primary ml-2">→</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* ROW 2: STRATEGY TRIO (3 EQUAL COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Card className="glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col">
            <CardContent className="p-8 flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-primary uppercase mb-6">Strategy</span>
              <h3 className="text-xl font-bold mb-4 text-white">CREATORS IN 2026 WILL STRUGGLE WITHOUT THIS</h3>
              <p className="text-muted-foreground mb-8 text-sm flex-grow">Analysis of system errors causing creator burnout and structural blindspots.</p>
              <Button variant="ghost" className="w-fit p-0 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent" asChild>
                <a href="https://x.com/MojeebHQ/status/2009497216109695467?s=20" target="_blank">Read Analysis <span className="text-primary ml-2">→</span></a>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col">
            <CardContent className="p-8 flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-primary uppercase mb-6">Research</span>
              <h3 className="text-xl font-bold mb-4 text-white">The 2026 Product Blueprint</h3>
              <p className="text-muted-foreground mb-8 text-sm flex-grow">Strategic deep dive into the next wave of Web3 products and ecosystem design.</p>
              <Button variant="ghost" className="w-fit p-0 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent" asChild>
                <a href="https://x.com/MojeebHQ/status/2009997538267435511?s=20" target="_blank">Read Analysis <span className="text-primary ml-2">→</span></a>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col">
            <CardContent className="p-8 flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-primary uppercase mb-6">Execution</span>
              <h3 className="text-xl font-bold mb-4 text-white">The 2026 Execution Pack</h3>
              <p className="text-muted-foreground mb-8 text-sm flex-grow">A burnout-free weekly system for high-output founders.</p>
              <Button variant="ghost" className="w-fit p-0 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent" asChild>
                <a href="https://x.com/MojeebHQ/status/2010457986670448657?s=20" target="_blank">Read Analysis <span className="text-primary ml-2">→</span></a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* ROW 3: REWARDS (1/3 + 2/3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col">
            <CardContent className="p-8 flex flex-col h-full text-left">
              <span className="text-[10px] font-bold text-primary uppercase mb-6">Rewards</span>
              <h3 className="text-xl font-bold mb-4 text-white">Community Rewards Done Right</h3>
              <p className="text-muted-foreground mb-8 text-sm flex-grow">Stop fvcking over your early users. Honor trust.</p>
              <Button variant="ghost" className="w-fit p-0 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent" asChild>
                <a href="https://mojeebhq.medium.com/community-rewards-done-right-stop-fvcking-over-your-early-users-e3ac552c3f9b" target="_blank">Read Analysis <span className="text-primary ml-2">→</span></a>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card group hover:border-primary/50 transition-all duration-300 flex flex-col md:col-span-2 text-left">
            <CardContent className="p-8 flex flex-col h-full">
              <span className="text-[10px] font-bold text-primary uppercase mb-6">X (Twitter)</span>
              <h3 className="text-xl font-bold mb-4 text-white">9k Followers & The Mistake After</h3>
              <p className="text-muted-foreground mb-8 text-sm flex-grow">A growth campaign deconstruction: what went right and what went wrong.</p>
              <Button variant="ghost" className="w-fit p-0 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-transparent" asChild>
                <a href="https://x.com/MojeebHQ/status/1971794428789461365" target="_blank">Read Analysis <span className="text-primary ml-2">→</span></a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;
