import { Card } from "@/components/ui/card";
import { GraduationCap, Award, History, BookOpen, ShieldCheck, Search, Brain, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education" className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* NEW SYSTEM LABEL HEADER */}
        <div className="mb-10">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block text-left">
            Knowledge Base
          </span>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter text-left">
            Education.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Card className="md:col-span-12 glass-card border-white/5 bg-white/5 p-8 hover:border-primary/20 transition-all group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    History & Education
                  </h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    University of Ilorin • Bachelor of Arts (Ed.)
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end">
                <span className="text-white font-mono text-sm">2018 — 2023</span>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-[9px] border-primary/30 text-primary uppercase tracking-widest bg-primary/5">
                    2.77 / 5.00 CGPA
                  </Badge>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">
                    Second Class Lower
                  </span>
                </div>
              </div>
            </div>

            {/* CORE COMPETENCIES DERIVED FROM HISTORY & EDUCATION */}
            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Diplomacy</span>
                </div>
                <p className="text-[9px] text-gray-500 leading-relaxed uppercase">Strategic negotiation & cultural mediation.</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Research</span>
                </div>
                <p className="text-[9px] text-gray-500 leading-relaxed uppercase">Deep-dive archival & qualitative analysis.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Critical Thinking</span>
                </div>
                <p className="text-[9px] text-gray-500 leading-relaxed uppercase">Deconstructing complex social systems.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Communication</span>
                </div>
                <p className="text-[9px] text-gray-500 leading-relaxed uppercase">Pedagogical clarity & effective reporting.</p>
              </div>
            </div>
          </Card>

          {/* Heritage Focus Card */}
          <Card className="md:col-span-12 glass-card border-white/5 bg-white/5 p-6 border-dashed opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <History className="w-5 h-5 text-primary/60" />
                <div>
                  <p className="text-[10px] text-white uppercase tracking-[0.2em] font-black">Historical Heritage Preservation</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Integrating ancestral wisdom into modern technology frameworks</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-primary/60" />
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">
                  Curriculum Design & Educational Theory
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;