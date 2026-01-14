import { Shield, Cpu, Zap, BarChart3, Globe, Search } from "lucide-react";

const skillGroups = [
  {
    category: "Ecosystem Strategy",
    icon: <Globe className="text-[#7c3aed]" size={20} />,
    skills: ["Tokenomics Design", "Governance Systems", "Incentive Modeling"],
    color: "bg-[#7c3aed]/10"
  },
  {
    category: "Technical Architecture",
    icon: <Cpu className="text-[#7c3aed]" size={20} />,
    skills: ["Smart Contract Logic", "System Optimization", "Web3 Infrastructure"],
    color: "bg-white/5"
  },
  {
    category: "Strategic Research",
    icon: <Search className="text-[#7c3aed]" size={20} />,
    skills: ["Blindspot Analysis", "Market Intelligence", "Longevity Leverage"],
    color: "bg-white/5"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            SYSTEMIC <span className="text-gray-500">MASTERY.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx}
              className={`${group.color} border border-white/10 p-8 rounded-[2rem] hover:border-[#7c3aed]/50 transition-all duration-500 group`}
            >
              <div className="mb-8 p-3 w-fit rounded-2xl bg-black border border-white/5 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                    <div className="w-1 h-1 rounded-full bg-[#7c3aed]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 2026 SPECIALIZATION CARD (Full Width) */}
          <div className="md:col-span-3 bg-gradient-to-r from-[#111] to-[#050505] border border-white/10 p-10 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md text-center md:text-left">
              <h4 className="text-white font-bold text-lg mb-2">Specialized in Blindspot Identification</h4>
              <p className="text-gray-500 text-sm">Identifying structural vulnerabilities in emerging Web3 ecosystems before they become systemic failures.</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest">Risk Mitigation</div>
               <div className="px-6 py-3 rounded-xl bg-[#7c3aed]/20 border border-[#7c3aed]/30 text-[#7c3aed] text-[10px] font-black uppercase tracking-widest">Growth Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
