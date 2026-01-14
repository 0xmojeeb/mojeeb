import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const posts = [
    { title: "The Subtle Act of Not Giving a Fvck About Community", platform: "Medium", link: "https://mojeebhq.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa", size: "md:col-span-8" },
    { title: "2026 Product Blueprint", platform: "Research", link: "https://x.com/MojeebHQ/status/2009997538267435511", size: "md:col-span-4" },
    { title: "9k Followers & The Mistake After", platform: "X Strategy", link: "https://x.com/MojeebHQ/status/1971794428789461365", size: "md:col-span-12" }
  ];

  return (
    <section id="blog" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Intelligence Feed</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Featured <span className="text-gray-500">Posts.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {posts.map((post, i) => (
            <a key={i} href={post.link} target="_blank" className={`${post.size} bg-[#111] border border-white/10 p-10 rounded-[2.5rem] group hover:border-[#7c3aed]/50 transition-all flex flex-col justify-between min-h-[250px]`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-[#7c3aed] uppercase tracking-widest">{post.platform}</span>
                <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tighter leading-tight group-hover:text-[#7c3aed] transition-colors">{post.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
