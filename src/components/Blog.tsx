import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

const secondaryPosts = [
  {
    title: "The Longevity Leverage",
    category: "Philosophy",
    readTime: "4 min",
  },
  {
    title: "Governance Gaps in DAO Structures",
    category: "Research",
    readTime: "6 min",
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Intelligence Feed
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            STRATEGIC <span className="text-gray-500">INSIGHTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* FEATURED POST - Spans 8 Columns */}
          <div className="md:col-span-8 group relative bg-[#111] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col justify-end min-h-[450px] p-10 hover:border-[#7c3aed]/50 transition-all duration-500">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-[#7c3aed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#7c3aed] text-[10px] font-bold uppercase tracking-widest text-white">
                  Featured Analysis
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  <Clock size={12} /> 8 min read
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6 leading-tight max-w-xl">
                Identifying Structural Blindspots in the 2026 Web3 Landscape
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                An executive deep-dive into the systemic vulnerabilities of current ecosystem architectures.
              </p>
              
              <a 
                href="https://mojeebhq.medium.com" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-white font-bold text-sm group/link"
              >
                Read Full Thesis 
                <ArrowUpRight size={18} className="text-[#7c3aed] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* SECONDARY POSTS - Spans 4 Columns Stacked */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {secondaryPosts.map((post, idx) => (
              <div 
                key={idx} 
                className="flex-1 bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.04] hover:border-white/10 transition-all group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-2 bg-black rounded-lg border border-white/5">
                    <BookOpen size={16} className="text-[#7c3aed]" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {post.readTime}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#7c3aed] transition-colors">
                  {post.title}
                </h4>
                
                <div className="flex items-center gap-2">
                  <Tag size={12} className="text-gray-600" />
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
            ))}

            {/* CTA CARD */}
            <div className="bg-[#7c3aed] p-8 rounded-[2rem] flex flex-col justify-center items-center text-center group cursor-pointer">
              <p className="text-white font-black text-sm uppercase tracking-tighter mb-1">
                View All Intelligence
              </p>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
