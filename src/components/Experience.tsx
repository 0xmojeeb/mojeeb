import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Founder & Lead Strategist",
    company: "Blindspot Labs",
    period: "2024 - Present",
    desc: "Architecting research frameworks to identify structural gaps in Web3 ecosystems.",
    current: true
  },
  {
    role: "Ecosystem Architect",
    company: "MojeebHQ Consulting",
    period: "2022 - 2024",
    desc: "Designing growth systems and incentive models for decentralized communities.",
    current: false
  },
  {
    role: "Strategic Analyst",
    company: "Web3 Research Initiative",
    period: "2021 - 2022",
    desc: "Focused on market intelligence and systemic risk mitigation for emerging protocols.",
    current: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Track Record</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">STRATEGIC <span className="text-gray-500">EVOLUTION.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border transition-all duration-500 ${exp.current ? 'bg-[#7c3aed]/5 border-[#7c3aed]/30 shadow-[0_0_30px_rgba(124,58,237,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
              <div className="flex justify-between items-start mb-10">
                <div className="p-3 bg-black rounded-xl border border-white/5">
                  <Briefcase size={18} className={exp.current ? "text-[#7c3aed]" : "text-gray-500"} />
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={12} /> {exp.period}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
              <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-wider mb-6">{exp.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
