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
            Building a foundation of critical thinking, research, and leadership skills
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
                      <h3 className="text-2xl font-bold mb-2">University of Ilorin</h3>
                      <p className="text-lg text-muted-foreground">Bachelor of Arts (Education) in History</p>
                    </div>
                    <Badge variant="outline" className="text-sm px-4 py-2 mt-2 lg:mt-0">
                      2018 – 2023
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Developed critical thinking, research evaluation, and analytical skills through 
                    comprehensive study of historical contexts and educational methodologies. 
                    This foundation has been instrumental in understanding complex ecosystem 
                    dynamics and building effective collaboration strategies in Web3.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                      <Users className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Diplomacy</h4>
                        <p className="text-sm text-muted-foreground">Conflict resolution & negotiation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                      <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Leadership</h4>
                        <p className="text-sm text-muted-foreground">Team management & strategy</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                      <Search className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Research</h4>
                        <p className="text-sm text-muted-foreground">Analysis & evaluation</p>
                      </div>
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