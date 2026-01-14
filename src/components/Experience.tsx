import { Briefcase, TrendingUp, Star, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Founder & Research Lead",
    company: "Blindspot Labs",
    period: "Dec 2025 – Present",
    desc: "Author of the '2026 Series' focused on ecosystem longevity and structural blindspots.",
    highlight: "Web3 Research"
  },
  {
    role: "Founder & Strategist",
    company: "EchelonHQ (fka Anblabs)",
    period: "Aug 2024 – Dec 2025",
    desc: "Led growth initiatives across Ethereum, Base, and Solana for top-tier protocols.",
    highlight: "Ecosystem Growth"
  },
  {
    role: "Viral Growth Lead",
    company: "Taiku NFT",
    period: "Case Study",
    desc: "Engineered growth from 3 to 9,000 followers in 3.5 days through cross-chain alignment.",
    highlight: "95% Engagement"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Track Record</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Full Systems <span className="text-gray-500">History.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-[#111] border border-white/10 hover:border-[#7c3aed]/50 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-[#7c3aed]/10 p-3 rounded-2xl text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors">
                  {idx === 2 ? <TrendingUp size={20} /> : <Briefcase size={20} />}
                </div>
                <span className="text-[10px] font-mono text-gray-500">{exp.period}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
              <p className="text-[#7c3aed] text-[10px] font-black uppercase tracking-widest mb-4">{exp.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{exp.desc}</p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-white font-bold text-[10px] uppercase tracking-tighter">Key Output: {exp.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
