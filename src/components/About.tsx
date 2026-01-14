import { Target, Zap, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* PHILOSOPHY CARD */}
          <div className="md:col-span-7 bg-[#111] border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-center">
            <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">The Philosophy</span>
            <h3 className="text-3xl font-black text-white tracking-tighter mb-6 leading-tight">
              LONGEVITY AS <span className="text-gray-500">LEVERAGE.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I don't build for the hype cycle. I build for the decade. By identifying "blindspots" in current systems, I architect ecosystems that are resilient, incentivized, and designed for permanent growth.
            </p>
          </div>

          {/* FOCUS CARD */}
          <div className="md:col-span-5 bg-[#7c3aed] p-10 rounded-[2.5rem] flex flex-col justify-between text-white group">
            <Target size={40} className="opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
            <div>
              <h4 className="text-2xl font-black tracking-tighter mb-2">CURRENT FOCUS</h4>
              <p className="text-white/80 text-sm font-medium">Identifying structural vulnerabilities in Web3 governance and incentive structures.</p>
            </div>
          </div>

          {/* WORLDVIEW MINI-CARD */}
          <div className="md:col-span-4 bg-white/5 border border-white/5 p-8 rounded-[2rem] flex items-center gap-6">
            <Globe className="text-[#7c3aed]" size={32} />
            <div>
              <p className="text-white font-bold text-sm">NIGERIA BASED</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Global Strategy</p>
            </div>
          </div>

          {/* TRACTION MINI-CARD */}
          <div className="md:col-span-8 bg-black border border-white/10 p-8 rounded-[2rem] flex items-center justify-around overflow-hidden group">
            <div className="text-center">
              <p className="text-3xl font-black text-white">100+</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Consultations</p>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-black text-[#7c3aed]">2026</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Vision Target</p>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">∞</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Systemic Impact</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
