import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Linkedin, Twitter, Network, TrendingUp, Users, FileText, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="max-w-4xl mb-16 text-left">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            Strategic Access
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
            Work & <span className="gradient-text">Collaboration.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I'm open to conversations where thinking, structure, and long-term alignment matter. If there's alignment, we'll figure out the shape together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* WORK AREAS GRID */}
          <Card className="glass-card border-white/10 bg-white/5 overflow-hidden">
            <CardContent className="p-8">
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-8">Core Focus Areas</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-primary/30 transition-colors">
                  <Network className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Ecosystem & Partnership Strategy</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-primary/30 transition-colors">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Growth Systems & Market Expansion</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-primary/30 transition-colors">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Community & Participation Design</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 group hover:border-primary/30 transition-colors">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-white uppercase tracking-tight">Positioning & Narrative Strategy</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CONTACT METHODS - HARDCODED FOR STABILITY */}
          <div className="grid grid-cols-1 gap-4">
            {/* EMAIL */}
            <a href="mailto:mojeeb.eth@gmail.com" className="group">
              <Card className="glass-card hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Email</h4>
                      <p className="text-sm text-muted-foreground">mojeeb.eth@gmail.com</p>
                      <p className="text-[10px] text-muted-foreground/50 uppercase mt-1">Best for detailed context</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="hidden md:flex gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:text-primary">
                    Send Mail <ArrowRight className="w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            </a>

            {/* TELEGRAM */}
            <a href="https://t.me/mojeebhq" target="_blank" className="group">
              <Card className="glass-card hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-12 h-12 bg-sky-400/20 rounded-full flex items-center justify-center text-sky-400">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Telegram</h4>
                      <p className="text-sm text-muted-foreground">@mojeebhq</p>
                      <p className="text-[10px] text-muted-foreground/50 uppercase mt-1">Quick conversations & alignment</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="hidden md:flex gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:text-primary">
                    Open Chat <ArrowRight className="w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            </a>

            {/* TWITTER */}
            <a href="https://x.com/MojeebHQ" target="_blank" className="group">
              <Card className="glass-card hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                      <Twitter className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">X (Twitter)</h4>
                      <p className="text-sm text-muted-foreground">@MojeebHQ</p>
                      <p className="text-[10px] text-muted-foreground/50 uppercase mt-1">Real-time ideas & thinking</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="hidden md:flex gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:text-primary">
                    Follow <ArrowRight className="w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
