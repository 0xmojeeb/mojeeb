import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, Linkedin, Twitter, Globe, Users, Handshake } from "lucide-react";
const Contact = () => {
  const contactMethods = [{
    icon: Mail,
    title: "Email",
    description: "mojeeb.eth@gmail.com",
    action: "Send Email",
    color: "bg-blue-500",
    href: "mailto:mojeeb.eth@gmail.com"
  }, {
    icon: MessageSquare,
    title: "Telegram",
    description: "@mojeebeth",
    action: "Message",
    color: "bg-sky-400",
    href: "https://t.me/mojeebeth"
  }, {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Mojeeb's LinkedIn",
    action: "Connect",
    color: "bg-blue-600",
    href: "https://www.linkedin.com/in/mojeebeth/"
  }, {
    icon: Twitter,
    title: "X (Twitter)",
    description: "0xmojeeb",
    action: "Follow",
    color: "bg-black",
    href: "https://x.com/0xMojeeb"
  }];
  const collaborationTypes = [{
    icon: Users,
    title: "Community Building",
    description: "Growing engaged Web3 communities"
  }, {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Cross-ecosystem collaborations"
  }, {
    icon: Globe,
    title: "Business Development",
    description: "Growth strategies and market expansion"
  }, {
    icon: MessageSquare,
    title: "Content Strategy",
    description: "Alpha content and brand messaging"
  }, {
    icon: Send,
    title: "Marketing",
    description: "Web3 marketing campaigns and brand positioning"
  }];
  return <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start a <span className="gradient-text">Partnership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's build together. I'm open to collaborations, growth strategy, BD opportunities, and community partnerships.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Collaboration Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {collaborationTypes.map((type, index) => <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>)}
          </div>

          {/* Contact Methods & Info */}
          <div className="max-w-2xl mx-auto space-y-6">
              <Card className="glass-card animate-slide-in-left" style={{
            animationDelay: '0.2s'
          }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                     {contactMethods.map((method, index) => <a key={index} href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-background/30 rounded-lg hover:bg-background/50 transition-colors cursor-pointer group">
                         <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                           <method.icon className="w-6 h-6" />
                         </div>
                         <div className="flex-1 min-w-0">
                           <h4 className="font-semibold">{method.title}</h4>
                           <p className="text-sm text-muted-foreground truncate">{method.description}</p>
                         </div>
                         <Button variant="ghost" size="sm" className="shrink-0">
                           {method.action}
                         </Button>
                       </a>)}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card animate-slide-in-left" style={{
            animationDelay: '0.4s'
          }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Current Focus</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm actively building <span className="gradient-text font-semibold">EchelonHQ</span> and 
                    looking for ambitious Web3 projects to collaborate with. Whether you need community growth, 
                    strategic partnerships, or business development, let's explore how we can create mutual value.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">Response Time:</span> Usually within 24 hours
                    </p>
                    <p className="text-sm mt-1">
                      <span className="font-semibold text-primary">Best For:</span> Partnership discussions, community strategy, business development
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>;
};
export default Contact;
