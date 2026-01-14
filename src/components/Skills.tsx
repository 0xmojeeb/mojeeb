import { Users, MessageSquare, Handshake, TrendingUp, Network, Compass } from "lucide-react";

const Skills = () => {
  const coreSkills = [
    { title: "Growth & Community", icon: <Users />, desc: "Designing structures that drive participation and long-term engagement." },
    { title: "Narrative & Positioning", icon: <MessageSquare />, desc: "Aligning product intent with community behavior and adoption." },
    { title: "Strategic Partnerships", icon: <Handshake />, desc: "Structuring incentive-aligned value across ETH, Solana, and Base." }
  ];

  return (
    <section id="skills" className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Intelligence Layer</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Capabilities & <span className="text-gray-500">Focus.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {coreSkills.map((skill, i) => (
            <div key={i} className="bg-[#111] border border-white/10 p-10 rounded-[2.5rem] group hover:border-[#7c3aed]/50 transition-all">
              <div className="text-[#7c3aed] mb-6 bg-[#7c3aed]/10 w-fit p-4 rounded-2xl">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{skill.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 bg-[#111] border border-white/10 p-10 rounded-[2.5rem] flex items-center gap-8">
            <div className="bg-[#7c3aed]/10 p-4 rounded-2xl text-[#7c3aed] hidden md:block"><TrendingUp size={32} /></div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Leadership & Strategic Thinking</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Developing execution frameworks that scale. I focus on internal system errors and structural blindspots that prevent founders from reaching longevity.</p>
            </div>
          </div>
          <div className="md:col-span-4 bg-[#7c3aed] p-10 rounded-[2.5rem] flex flex-col justify-between">
            <Network className="text-white/20" size={40} />
            <div>
              <p className="text-white font-black text-xs uppercase tracking-widest mb-4">Ecosystem Context</p>
              <div className="flex flex-wrap gap-2">
                {['Base', 'Solana', 'ETH', 'DAOs'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold bg-white/20 px-3 py-1 rounded-full text-white">{tag}</span>
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
