import { Users, MessageSquare, Handshake, TrendingUp, Network, Brain, Cpu, Database } from "lucide-react";

const Skills = () => {
  const coreSkills = [
    { 
      title: "Growth Architecture", 
      icon: <Users />, 
      desc: "Designing incentive structures that drive participation and long-term user retention." 
    },
    { 
      title: "Systemic Logic", 
      icon: <Brain />, 
      desc: "Building persona-based decision frameworks and custom logic for complex datasets." 
    },
    { 
      title: "Strategic Partnerships", 
      icon: <Handshake />, 
      desc: "Structuring high-value alignment across ETH, Solana, and Base ecosystems." 
    }
  ];

  return (
    <section id="skills" className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#4e24cf] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Intelligence Layer</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
            Capabilities & <span className="text-gray-500">Focus.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {coreSkills.map((skill, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem] group hover:border-[#4e24cf]/50 transition-all">
              <div className="text-[#4e24cf] mb-6 bg-[#4e24cf]/10 w-fit p-4 rounded-2xl group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{skill.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem] flex items-center gap-8 group">
            <div className="bg-[#4e24cf]/10 p-4 rounded-2xl text-[#4e24cf] hidden md:block">
              <Cpu size={32} className="group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Full-Stack Strategy</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Developing execution frameworks that scale. I focus on internal logic errors and structural blindspots that prevent systems—whether they be "food items" apps or blockchain protocols—from reaching longevity.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#4e24cf] p-10 rounded-[2.5rem] flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all">
            <Network className="text-white/20" size={40} />
            <div>
              <p className="text-white font-black text-xs uppercase tracking-widest mb-4">Ecosystem Context</p>
              <div className="flex flex-wrap gap-2">
                {['Base', 'Solana', 'ETH', 'Food Logic', 'DAOs'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold bg-white/20 px-3 py-1 rounded-full text-white backdrop-blur-sm">
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
