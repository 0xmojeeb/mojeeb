import { Star, ChevronRight, TrendingUp, Activity, Zap, Target } from "lucide-react";

const featured = [
  {
    company: "Blindspot Lab",
    role: "Founder & Systems Architect",
    period: "Dec 2025 – Present",
    status: "Active Build",
    bullets: [
      "Architecting Web3 structural analysis tools and incentive design frameworks.",
      "Deploying high-fidelity engines (Trench Sniper, VibeCheck) for cultural translation.",
    ],
    accent: true,
  },
];

const highlights = [
  {
    company: "Taiku NFT",
    metric: "3 → 9,000+",
    metricLabel: "Followers",
    desc: "Engineered viral GTM alignment and community activation systems resulting in exponential growth in 3.5 days.",
    icon: <TrendingUp size={16} />,
  },
  {
    company: "SkylosChain",
    metric: "5% → 95%",
    metricLabel: "Engagement",
    desc: "Implemented scalable content systems and retention loops that transformed community activity within 14 days.",
    icon: <Activity size={16} />,
  },
];

const others = [
  { company: "EchelonHQ", role: "Strategist", icon: <Zap size={11} /> },
  { company: "Whate Engine", role: "Lead Architect", icon: <Target size={11} /> },
  { company: "GX DAO", role: "Strategist", icon: <Activity size={11} /> },
  { company: "Crypto Family", role: "Co-Founder", icon: <Star size={11} /> },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              Systems <span className="text-white/20 italic">History.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* ── FEATURED ROLE ── */}
          {featured.map((f, i) => (
            <div key={i}
              className="md:col-span-12 bg-[#080808] border border-[#4e24cf]/30 hover:border-[#4e24cf]/50 rounded-[1.75rem] p-10 relative overflow-hidden transition-all">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#4e24cf] via-[#4e24cf]/40 to-transparent" />

              <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black text-white uppercase tracking-[-0.03em]">{f.company}</h3>
                  <Star size={14} className="text-[#4e24cf] fill-[#4e24cf]" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-black text-[#4e24cf] bg-[#4e24cf]/10 border border-[#4e24cf]/30 px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {f.status}
                  </span>
                  <span className="text-[10px] text-white/20 font-mono">{f.period}</span>
                </div>
              </div>

              <p className="text-[10px] font-black text-[#4e24cf] uppercase tracking-[0.3em] mb-5">{f.role}</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                    <ChevronRight size={13} className="text-[#4e24cf] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── HIGHLIGHT METRICS ── */}
          {highlights.map((h, i) => (
            <div key={i}
              className="md:col-span-6 bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/30 rounded-[1.75rem] p-8 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-9 h-9 bg-[#4e24cf]/10 border border-[#4e24cf]/20 rounded-xl flex items-center justify-center text-[#4e24cf] group-hover:bg-[#4e24cf]/20 transition-colors">
                  {h.icon}
                </div>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Case Study</span>
              </div>
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-1">{h.company}</h4>
              <p className="text-2xl font-black text-[#4e24cf] mb-1">{h.metric}</p>
              <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold mb-4">{h.metricLabel}</p>
              <p className="text-white/40 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}

          {/* ── OTHER ROLES ── */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {others.map((o, i) => (
              <div key={i}
                className="bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/25 rounded-[1.5rem] p-6 transition-all group">
                <div className="text-[#4e24cf]/40 group-hover:text-[#4e24cf] transition-colors mb-4">
                  {o.icon}
                </div>
                <p className="text-white font-black text-sm uppercase tracking-tight">{o.company}</p>
                <p className="text-[9px] text-white/25 uppercase font-bold tracking-widest mt-1">{o.role}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;