import { ArrowUpRight, PenTool } from "lucide-react";

const posts = [
  {
    title: "Read Before It's Too Late: The 2026 Creator Systems",
    desc: "Talent isn't enough anymore. Exploring the Top 5 Creator Packs required to survive the 2026 barrier to entry.",
    link: "https://x.com/BlindspotLab/status/2009497216109695467?s=20",
    span: "md:col-span-7",
    tag: "Strategy",
    featured: true,
  },
  {
    title: "The Subtle Act of Not Giving a Fvck",
    desc: "Foundations of community building through Emotional Intelligence.",
    link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa",
    span: "md:col-span-5",
    tag: "Community",
  },
  {
    title: "The 2026 Product Blueprint",
    desc: "Strategic deep dive into the next wave of integrated ecosystem design.",
    link: "https://x.com/BlindspotLab/status/2009997538267435511?s=20",
    span: "md:col-span-4",
    tag: "Research",
  },
  {
    title: "9k Followers & The Mistake After",
    desc: "Growth campaign deconstruction: what reshaped my strategy.",
    link: "https://x.com/BlindspotLab/status/1971794428789461365",
    span: "md:col-span-4",
    tag: "Case Study",
  },
  {
    title: "Growth Hack: FEEDBACK",
    desc: "Turn raw input into a growth engine for your protocol.",
    link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-6afe90b633f4",
    span: "md:col-span-4",
    tag: "Growth",
  },
];

const tagColors: Record<string, string> = {
  Strategy: "text-[#4e24cf] bg-[#4e24cf]/10 border-[#4e24cf]/25",
  Community: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Research: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  "Case Study": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Growth: "text-rose-400 bg-rose-400/10 border-rose-400/20",
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Intelligence Feed
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              Featured <span className="text-white/20 italic">Posts.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[9px] text-white/20 font-mono uppercase tracking-widest">
            <PenTool size={10} />
            {posts.length} articles
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${post.span} group relative bg-[#080808] border rounded-[1.75rem] p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden
                ${post.featured
                  ? "border-[#4e24cf]/25 hover:border-[#4e24cf]/50 min-h-[220px]"
                  : "border-white/[0.06] hover:border-[#4e24cf]/25"
                }`}
            >
              {/* Featured glow */}
              {post.featured && (
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#4e24cf]/10 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* Top row */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <span className={`text-[8px] font-black uppercase tracking-[0.3em] border px-2.5 py-1 rounded-full ${tagColors[post.tag] ?? "text-white/30 bg-white/5 border-white/10"}`}>
                  {post.tag}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-white/15 group-hover:text-[#4e24cf] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`font-black text-white uppercase tracking-tight leading-tight mb-3 group-hover:text-[#4e24cf] transition-colors
                  ${post.featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                  {post.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">{post.desc}</p>
              </div>

              {/* Bottom read indicator */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 rounded-full bg-[#4e24cf]" />
                <span className="text-[9px] font-black text-[#4e24cf] uppercase tracking-widest">Read Article</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;