import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "DeFi Marketing Strategies That Actually Work in 2025",
      excerpt: "Discover proven Web3 marketing tactics for DeFi protocols, including community-driven growth, tokenomics marketing, and cross-chain ecosystem expansion strategies.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "DeFi Marketing",
      featured: true,
      keywords: ["DeFi marketing", "Web3 growth", "tokenomics", "blockchain marketing"]
    },
    {
      title: "DAO Community Building: From 0 to 10K Active Members",
      excerpt: "Step-by-step guide to building thriving DAO communities with proven engagement frameworks, governance strategies, and retention tactics that scale.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "DAO Strategy",
      featured: true,
      keywords: ["DAO marketing", "community growth", "Web3 communities", "blockchain governance"]
    },
    {
      title: "NFT Project Marketing: Complete Launch Strategy Guide",
      excerpt: "Everything you need to know about marketing NFT projects, from pre-launch community building to post-mint utility and long-term value creation.",
      date: "2025-01-05",
      readTime: "15 min read",
      category: "NFT Marketing",
      featured: false,
      keywords: ["NFT marketing", "crypto art marketing", "Web3 collectibles", "blockchain art"]
    },
    {
      title: "Cross-Chain Marketing: Maximizing Multi-Ecosystem Growth",
      excerpt: "How to effectively market across Ethereum, Solana, Base, and Polygon ecosystems while maintaining brand consistency and community cohesion.",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "Cross-Chain Strategy",
      featured: false,
      keywords: ["cross-chain marketing", "multi-chain strategy", "Ethereum marketing", "Solana growth"]
    },
    {
      title: "Web3 Community Management: Advanced Engagement Tactics",
      excerpt: "Advanced techniques for managing Web3 communities, including alpha sharing strategies, gamification, and building sustainable engagement loops.",
      date: "2024-12-20",
      readTime: "9 min read",
      category: "Community Management",
      featured: false,
      keywords: ["Web3 community management", "crypto community growth", "blockchain engagement"]
    },
    {
      title: "Blockchain Partnership Strategy: Building Ecosystem Alliances",
      excerpt: "Framework for creating strategic partnerships in Web3, including collaboration models, partnership metrics, and ecosystem alignment strategies.",
      date: "2024-12-15",
      readTime: "11 min read",
      category: "Partnership Strategy",
      featured: false,
      keywords: ["blockchain partnerships", "Web3 collaborations", "ecosystem growth", "crypto alliances"]
    }
  ];

  const categories = [
    "All Posts",
    "DeFi Marketing", 
    "DAO Strategy", 
    "NFT Marketing", 
    "Cross-Chain Strategy", 
    "Community Management",
    "Partnership Strategy"
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Web3 Insights Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Latest strategies and insights for Web3 marketing, DeFi growth, DAO community building, 
            and blockchain ecosystem development from a proven strategist.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className="cursor-pointer hover:scale-105 transition-transform px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Featured Web3 Marketing Guides
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {posts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="glass-card group hover:scale-[1.02] transition-all duration-300 animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 3).map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="group-hover:text-primary transition-colors p-0">
                    Read Full Guide
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.filter(post => !post.featured).map((post, index) => (
            <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="glass-card mt-12 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Want <span className="gradient-text">Personalized Web3 Marketing Strategy?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get custom DeFi marketing strategies, DAO growth plans, and blockchain partnership frameworks 
              tailored to your project's specific ecosystem and goals.
            </p>
            <Button size="lg" className="glow-effect">
              Schedule Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Blog;