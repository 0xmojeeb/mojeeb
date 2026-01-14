import { GraduationCap, Award, BookOpen, ScrollText } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-[#7c3aed] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Academic Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            INTELLECTUAL <span className="text-gray-500">ROOTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* PRIMARY DEGREE CARD - Spans 7 Columns */}
          <div className="md:col-span-7 bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <GraduationCap size={120} className="text-[#7c3aed]" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-8">
                <ScrollText size={12} /> Formal Education
              </div>
              
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">
                Bachelor of Science
              </h3>
              <p className="text-[#7c3aed] font-bold text-lg mb-6">Computer Science</p>
              
              <div className="space-y-4 max-w-md">
                <p className="text-gray-400 leading-relaxed">
                  Focused on algorithmic efficiency and distributed systems—providing the technical base for ecosystem modeling.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#7c3aed]" />
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black">
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* SPECIALIZED RESEARCH CARD - Spans 5 Columns */}
          <div className="md:col-span-5 bg-[#111] border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-[#7c3aed]/50 transition-colors duration-500">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] mb-8">
                <BookOpen size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                Independent <br />Strategic Research
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Extensive self-directed study in Game Theory, Tokenomics, and Behavioral Economics via global Web3 research initiatives.
              </p>
            </div>
            
            <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
               <div className="flex items-center gap-3">
                 <Award size={16} className="text-[#7c3aed]" />
                 <span className="text-[10px] text-white font-bold uppercase tracking-widest">Continuous Synthesis</span>
               </div>
            </div>
          </div>

          {/* CONTINUOUS LEARNING BAR - Full Width */}
          <div className="md:col-span-12 bg-white/[0.01] border border-white/5 py-6 px-10 rounded-[1.5rem] flex flex-wrap justify-between items-center gap-6">
             <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-black">
               Key Focus Areas:
             </p>
             <div className="flex flex-wrap gap-8">
                {["Game Theory", "Distributed Systems", "Economic Modeling", "Cybernetics"].map((item, i) => (
                  <span key={i} className="text-[11px] text-gray-400 font-mono uppercase tracking-tighter">
                    {item}
                  </span>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
