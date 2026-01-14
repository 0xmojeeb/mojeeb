import { GraduationCap, Landmark, ShieldCheck, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-12 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] relative overflow-hidden group">
            <Landmark size={150} className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity" />
            <div className="relative z-10">
              <GraduationCap size={32} className="text-[#7c3aed] mb-8" />
              <h3 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase">University of Ilorin</h3>
              <p className="text-xl text-[#7c3aed] font-bold mb-6 italic">B.A. (Ed) History (2018 – 2023)</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Diplomacy', 'Historical Research', 'System Auditing'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-[#111] border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-center">
             <ShieldCheck size={32} className="text-gray-600 mb-6" />
             <h4 className="text-[#7c3aed] font-bold uppercase text-xs tracking-widest mb-2">ANUNSA (UNILORIN)</h4>
             <p className="text-white font-bold text-sm mb-2 uppercase tracking-tighter">Financial Secretary</p>
             <p className="text-gray-500 text-xs leading-relaxed">
               Managed student diplomatic initiatives and administrative coordination, laying the foundation for incentive design.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
