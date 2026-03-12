import { Users, Brain, Handshake, Cpu, Network } from "lucide-react";

const coreSkills = [
  {
    title: "Growth Architecture",
    icon: <Users size={20} />,
    desc: "Designing incentive structures that drive participation and long-term user retention across Web3 ecosystems.",
  },
  {
    title: "Systemic Logic",
    icon: <Brain size={20} />,
    desc: "Building persona-based decision frameworks and custom logic engines for complex datasets and protocols.",
  },
  {
    title: "Strategic Partnerships",
    icon: <Handshake size={20} />,
    desc: "Structuring high-value alignment across ETH, Solana, and Base ecosystems that compounds over time.",
  },
];

const tags = ["Base", "Solana", "ETH", "DAOs", "Community", "AI Tools", "GTM", "Content"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Intelligence Layer
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              Capabilities <span className="text-white/20 italic">&amp; Focus.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {coreSkills.map((s, i) => (
            <div key={i}
              className="bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/30 rounded-[1.75rem] p-8 transition-all group">
              <div className="w-10 h-10 bg-[#4e24cf]/10 border border-[#4e24cf]/20 rounded-xl flex items-center justify-center text-[#4e24cf] mb-6 group-hover:bg-[#4e24cf]/20 group-hover:scale-110 transition-all">
                {s.icon}
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* Full-stack strategy */}
          <div className="md:col-span-8 bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/25 rounded-[1.75rem] p-8 flex items-center gap-8 group transition-all">
            <div className="bg-[#4e24cf]/10 border border-[#4e24cf]/20 p-4 rounded-2xl text-[#4e24cf] shrink-0 hidden md:flex group-hover:bg-[#4e24cf]/20 transition-colors">
              <Cpu size={28} className="group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div>
              <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.3em] mb-2">Full-Stack Strategy</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Developing execution frameworks that scale. I focus on internal logic errors and structural blindspots that prevent systems — whether food apps or blockchain protocols — from reaching longevity.
              </p>
            </div>
          </div>

          {/* Ecosystem tags */}
          <div className="md:col-span-4 bg-[#4e24cf] rounded-[1.75rem] p-8 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(78,36,207,0.3)] transition-all">
            <Network size={32} className="text-white/15 mb-4" />
            <div>
              <p className="text-white/60 font-black text-[9px] uppercase tracking-[0.3em] mb-4">Ecosystem Context</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag}
                    className="text-[9px] font-black bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full text-white uppercase tracking-widest transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;