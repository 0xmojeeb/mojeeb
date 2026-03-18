import { Eye, ShieldCheck, Zap, Terminal, Code2, Layout, Rocket } from "lucide-react";

const ecosystems = [
  { name: "Ethereum", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" },
  { name: "Base", logo: "/base-logo.png" },
  { name: "Solana", logo: "/solana-sol-logo.png" },
  { name: "Polygon", logo: "/polygon-matic-logo.png" },
  { name: "Avalanche", logo: "/avalanche-avax-logo.png" },
];

const capabilities = [
  { label: "Build", skills: ["AI Tools", "Smart Contracts", "Full-Stack"], icon: <Code2 size={12} /> },
  { label: "Design", skills: ["UI/UX", "System Design", "Figma"], icon: <Layout size={12} /> },
  { label: "Grow", skills: ["Community", "Content Strategy", "GTM"], icon: <Rocket size={12} /> },
];


function CapabilitiesTicker() {
  const tickerContent = capabilities.flatMap((cap) => cap.skills);
  const items = [...tickerContent, ...tickerContent]; 

  return (
    <div className="overflow-hidden py-4 border-y border-gray-200 bg-white/50">
      <div className="flex gap-16 whitespace-nowrap animate-ticker">
        {items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-3 shrink-0 text-[0.7rem] font-mono uppercase tracking-[0.1em] text-gray-400"
          >
            <span className="text-[#5B2BFF] text-[0.5rem]">◆</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#F9F6F2]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <span className="text-[#5B2BFF] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-[-0.04em] uppercase leading-none">
              How I <span className="text-gray-300 italic">Think.</span>
            </h2>
          </div>
        </div>

        {/* Ticker at the top */}
        <CapabilitiesTicker />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-6">

          {/* Philosophy Card */}
          <div className="lg:col-span-7 bg-white border border-gray-200 hover:border-[#5B2BFF]/30 rounded-[1.75rem] p-10 transition-all relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5B2BFF] via-[#5B2BFF]/50 to-transparent rounded-t-[1.75rem]" />
            <p className="text-[10px] font-black text-[#5B2BFF] uppercase tracking-[0.4em] mb-5">Core Belief</p>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-[-0.03em] mb-6 uppercase">
              Longevity is the<br />
              <span className="text-[#5B2BFF]">Ultimate Leverage.</span>
            </h3>
            <p className="text-gray-500 text-base italic border-l-2 border-[#5B2BFF]/30 pl-5 mb-8 leading-relaxed">
              "I help teams design systems that grow deliberately — identifying structural blindspots before they become expensive problems."
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Eye size={13} className="text-[#5B2BFF]" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Growth Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-[#5B2BFF]" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Incentive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={13} className="text-[#5B2BFF]" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Vibe Coder</span>
              </div>
            </div>
          </div>

          {/* Capabilities Card */}
          <div className="lg:col-span-5 bg-[#5B2BFF]/5 border border-[#5B2BFF]/20 hover:border-[#5B2BFF]/40 rounded-[1.75rem] p-8 transition-all flex flex-col gap-4">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[10px] font-black text-[#5B2BFF] uppercase tracking-[0.3em]">Multi-Disciplinary</p>
              <Terminal size={16} className="text-[#5B2BFF]/30" />
            </div>
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Core Resourcefulness</h3>

            <div className="flex flex-col gap-3">
              {capabilities.map((cap) => (
                <div key={cap.label} className="bg-white border border-gray-200 hover:border-[#5B2BFF]/30 rounded-xl p-4 transition-all">
                  <div className="flex items-center gap-2 text-[#5B2BFF] text-[9px] font-black uppercase tracking-[0.25em] mb-2">
                    {cap.icon} {cap.label}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {cap.skills.map((s) => (
                      <span key={s} className="text-[10px] text-gray-400 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystem Bar */}
          <div className="lg:col-span-12 bg-white border border-gray-200 rounded-[1.75rem] px-8 py-6 shadow-sm">
            <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] mb-5">Ecosystem Experience</p>
            <div className="flex flex-wrap justify-between items-center gap-6">
              {ecosystems.map((eco) => (
                <div key={eco.name}
                  className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
                  <img src={eco.logo} alt={eco.name} className="w-5 h-5 object-contain" />
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest group-hover:text-[#5B2BFF] transition-colors">
                    {eco.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
