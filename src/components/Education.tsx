import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Search } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in diplomacy, leadership, and strategic research
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card animate-slide-in-left">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">University of Ilorin (UNILORIN)</h3>
                      <p className="text-lg text-muted-foreground">B.A. (Ed) History</p>
                    </div>
                    <Badge variant="outline" className="text-sm px-4 py-2 mt-2 lg:mt-0">
                      2018 – 2023
                    </Badge>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground/80 mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Diplomacy</Badge>
                      <Badge variant="secondary">Leadership</Badge>
                      <Badge variant="secondary">Research Evaluation</Badge>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-6 py-2">
                    <h4 className="text-lg font-bold mb-3">Leadership & Activities</h4>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Financial Secretary — ANUNSA, UNILORIN Chapter</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Managed chapter finances, budgeting, and administrative coordination while supporting 
                        student diplomatic initiatives and UN-focused programs.
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