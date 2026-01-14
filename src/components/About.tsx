import { Target, Globe, ShieldCheck, Eye, Gauge } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          <div className="md:col-span-7 bg-[#111] border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-center">
            <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">The Philosophy</span>
            <h3 className="text-3xl font-black text-white tracking-tighter mb-6 leading-tight">
              LONGEVITY IS THE <br /><span className="text-gray-500 italic">ULTIMATE LEVERAGE.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#7c3aed]/30 pl-6">
              "I help teams design systems that grow deliberately, identifying structural blindspots before they become expensive problems."
            </p>
          </div>

          <div className="md:col-span-5 bg-[#7c3aed] p-10 rounded-[2.5rem] flex flex-col justify-between text-white relative overflow-hidden">
            <Gauge size={120} className="absolute -right-8 -top-8 opacity-20" />
            <div className="relative z-10">
              <h4 className="text-2xl font-black tracking-tighter mb-4">MOJEEB</h4>
              <p className="text-white/90 text-sm font-medium leading-relaxed">
                Strategist at the intersection of partnerships and ecosystem growth. Collaborated with Web3 protocols across Ethereum, Base, Solana, and Polygon.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <div className="bg-white/10 p-3 rounded-2xl"><Eye size={20} /></div>
              <div className="bg-white/10 p-3 rounded-2xl"><ShieldCheck size={20} /></div>
            </div>
          </div>

          <div className="md:col-span-12 bg-white/5 border border-white/5 p-8 rounded-[2rem] flex flex-wrap items-center justify-between gap-6">
            <span className="text-white font-bold tracking-widest uppercase text-xs">Blindspot Labs — 2026 Series Research</span>
            <div className="flex gap-6 items-center">
              {['Ethereum', 'Base', 'Solana', 'Polygon'].map(eco => (
                <span key={eco} className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">{eco}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
