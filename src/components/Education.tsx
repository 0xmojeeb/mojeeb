import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, ShieldCheck, Landmark } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-16 text-left">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            Academic Foundation
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Intelligence <span className="gradient-text">& Origin.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A background in historical analysis and student diplomacy—the structural roots of my systems-thinking approach.
          </p>
        </div>

        {/* EDUCATION CARD */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-white/10 overflow-hidden relative group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Landmark size={180} className="text-primary" />
            </div>

            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* ICON BLOCK */}
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1 text-left">
                  {/* TITLE & DATE */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        University of Ilorin (UNILORIN)
                      </h3>
                      <p className="text-primary font-mono text-lg uppercase tracking-tight">
                        B.A. (Ed) History
                      </p>
                    </div>
                    <Badge variant="outline" className="w-fit h-fit border-primary/30 text-primary px-4 py-1 rounded-full font-mono">
                      2018 – 2023
                    </Badge>
                  </div>

                  {/* SKILLS TAGS */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                      <ShieldCheck size={14} className="text-primary" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Diplomacy</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                      <BookOpen size={14} className="text-primary" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Historical Research</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                      <Landmark size={14} className="text-primary" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">System Auditing</span>
                    </div>
                  </div>

                  {/* LEADERSHIP SECTION */}
                  <div className="border-t border-white/5 pt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1.5 h-6 bg-primary rounded-full" />
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                        Leadership & Structural Impact
                      </h4>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-lg border border-white/5 group-hover:border-primary/20 transition-all duration-500">
                      <p className="text-primary font-bold mb-2">Financial Secretary — ANUNSA (UNILORIN)</p>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                        Managed chapter finances and administrative coordination for the All-Nigeria United Nations Student Association. 
                        Translated student diplomatic initiatives into structured frameworks—laying the early foundations for my work in incentive alignment and ecosystem design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
