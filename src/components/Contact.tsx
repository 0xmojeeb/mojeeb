import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  Globe,
  Users,
  Handshake
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line for collaborations",
      action: "Send Email",
      color: "bg-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Discord",
      description: "Let's connect in Web3 communities",
      action: "Join Discord",
      color: "bg-indigo-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking",
      action: "Connect",
      color: "bg-blue-600"
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "Follow for Web3 insights",
      action: "Follow",
      color: "bg-sky-500"
    }
  ];

  const collaborationTypes = [
    { icon: Users, title: "Community Building", description: "Growing engaged Web3 communities" },
    { icon: Handshake, title: "Strategic Partnerships", description: "Cross-ecosystem collaborations" },
    { icon: Globe, title: "Business Development", description: "Growth strategies and market expansion" },
    { icon: MessageSquare, title: "Content Strategy", description: "Alpha content and brand messaging" }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? I'm always open to discussing new opportunities 
            and meaningful collaborations in the Web3 space.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Collaboration Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {collaborationTypes.map((type, index) => (
              <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-card animate-slide-in-left">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input placeholder="Your name" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project/Company</label>
                    <Input placeholder="Your project or company name" className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Collaboration Type</label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Community Building</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Partnerships</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Business Dev</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Content Strategy</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project and how we can collaborate..." 
                      className="bg-background/50 min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full glow-effect group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods & Info */}
            <div className="space-y-6">
              <Card className="glass-card animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-background/30 rounded-lg hover:bg-background/50 transition-colors cursor-pointer group">
                        <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          <method.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          {method.action}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card animate-slide-in-left" style={{animationDelay: '0.4s'}}>
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
      </div>
    </section>
  );
};

export default Contact;