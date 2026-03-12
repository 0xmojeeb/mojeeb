import { GraduationCap, ShieldCheck, Search, Brain, Lightbulb, Globe, Shield, BookOpen } from "lucide-react";

const competencies = [
  { icon: <ShieldCheck size={14} />, label: "Diplomacy", desc: "Strategic negotiation & cultural mediation." },
  { icon: <Search size={14} />, label: "Research", desc: "Data-backed qualitative & quantitative analysis." },
  { icon: <Brain size={14} />, label: "Critical Thinking", desc: "Deconstructing complex social systems." },
  { icon: <Lightbulb size={14} />, label: "Entrepreneurship", desc: "Venture building & opportunity identification." },
  { icon: <Globe size={14} />, label: "Geopolitics", desc: "International systems & ecosystem dynamics." },
  { icon: <BookOpen size={14} />, label: "Psychology", desc: "Community motivation & behavioral design." },
];

const courses = [
  "Elements of Diplomacy & Strategic Studies",
  "International Political Systems",
  "History of Science & Technology",
  "Research Methods & Statistics",
  "Entrepreneurship Skills",
  "Developmental Psychology",
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              Education<span className="text-[#4e24cf]">.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* ── MAIN DEGREE CARD ── */}
          <div className="md:col-span-8 bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/25 rounded-[1.75rem] p-10 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4e24cf]/30 to-transparent" />

            <div className="flex items-center gap-5 mb-8">
              <div className="w-12 h-12 bg-[#4e24cf]/10 border border-[#4e24cf]/20 rounded-2xl flex items-center justify-center text-[#4e24cf] group-hover:bg-[#4e24cf]/20 transition-colors shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  History &amp; Education
                </h3>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-bold mt-1">
                  University of Ilorin · Bachelor of Arts (Ed.)
                </p>
                <p className="text-white/20 font-mono text-xs mt-1">2018 — 2023</p>
              </div>
            </div>

            {/* Competencies grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {competencies.map((c, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/[0.05] hover:border-[#4e24cf]/20 rounded-xl p-3.5 transition-all">
                  <div className="flex items-center gap-2 text-[#4e24cf] mb-1.5">
                    {c.icon}
                    <span className="text-[9px] font-black uppercase tracking-widest text-white">{c.label}</span>
                  </div>
                  <p className="text-[9px] text-white/25 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="md:col-span-4 flex flex-col gap-3">

            {/* Relevant Courses */}
            <div className="flex-1 bg-[#4e24cf]/8 border border-[#4e24cf]/20 hover:border-[#4e24cf]/40 rounded-[1.75rem] p-7 transition-all">
              <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.35em] mb-5">
                Relevant Courses
              </p>
              <ul className="flex flex-col gap-2.5">
                {courses.map((course, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#4e24cf] mt-1.5 shrink-0" />
                    <span className="text-[10px] text-white/50 font-medium leading-snug">{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NYSC Card */}
            <div className="bg-[#080808] border border-white/[0.06] hover:border-[#4e24cf]/25 rounded-[1.75rem] p-6 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 bg-[#4e24cf]/10 border border-[#4e24cf]/20 rounded-xl flex items-center justify-center text-[#4e24cf] group-hover:bg-[#4e24cf]/20 transition-colors">
                  <Shield size={16} />
                </div>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">2023 — 2024</span>
              </div>
              <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.3em] mb-1">National Service</p>
              <h4 className="text-sm font-black text-white uppercase tracking-tight mb-2">
                NYSC · Paramilitary
              </h4>
              <p className="text-[10px] text-white/30 leading-relaxed">
                One year national service as a paramilitary officer — building discipline, command structure, and team coordination under high-pressure conditions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;