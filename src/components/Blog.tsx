import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How I Grew an NFT Project to 9k Followers in 3.5 Days, And The Mistake That Haunted Me After",
      description: "A growth campaign deconstruction: what went right, what went wrong, and the lessons that reshaped my strategy.",
      link: "https://x.com/0xMojeeb/status/1971794428789461365",
      platform: "X (Twitter)"
    },
    {
      title: "5 Myths About Community Growth",
      description: "Dispelling the most common myths that hold back Web3 communities, and what actually drives engagement.",
      link: "https://x.com/0xMojeeb/status/1974082528211304463",
      platform: "X (Twitter)"
    },
    {
      title: "Community Rewards Done Right: Stop Fvcking Over Your Early Users",
      description: "How to structure reward systems that honor early adopters and protect long-term trust.",
      link: "https://0xmojeeb.medium.com/community-rewards-done-right-stop-fvcking-over-your-early-users-e3ac552c3f9b",
      platform: "Medium"
    },
    {
      title: "The Subtle Act of Not Giving a Fvck About Your Community: Community Building",
      description: "Why caring too much can destroy your project, the counterintuitive art of leading with clarity, not chaos.",
      link: "https://0xmojeeb.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa",
      platform: "Medium"
    },
    {
      title: "The Subtle Act of Not Giving a Fvck About Your Community: Community Feedback",
      description: "How to handle feedback like a pro, filtering noise, maintaining vision, and building with purpose.",
      link: "https://0xmojeeb.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-6afe90b633f4",
      platform: "Medium"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Posts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights on community building, Web3 growth, and the realities of scaling decentralized projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="glass-card group hover:scale-[1.02] hover:border-primary/50 transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="text-xs text-primary font-semibold">{post.platform}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-1">
                  {post.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
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
