import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  Globe,
  Users,
  Handshake,
  Loader2
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
    collaborationType: ""
  });
  const [selectedCollabTypes, setSelectedCollabTypes] = useState<string[]>([]);
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "mojeeb.eth@gmail.com",
      action: "Send Email",
      color: "bg-blue-500",
      href: "mailto:mojeeb.eth@gmail.com"
    },
    {
      icon: MessageSquare,
      title: "Telegram",
      description: "@mojeebeth",
      action: "Message",
      color: "bg-sky-400",
      href: "https://t.me/mojeebeth"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Mojeeb's LinkedIn",
      action: "Connect",
      color: "bg-blue-600",
      href: "https://linkedin.com/in/mojeeb"
    },
    {
      icon: Twitter,
      title: "Twitter (X)",
      description: "@moj33b_",
      action: "Follow",
      color: "bg-black",
      href: "https://twitter.com/moj33b_"
    }
  ];

  const collaborationTypes = [
    { icon: Users, title: "Community Building", description: "Growing engaged Web3 communities" },
    { icon: Handshake, title: "Strategic Partnerships", description: "Cross-ecosystem collaborations" },
    { icon: Globe, title: "Business Development", description: "Growth strategies and market expansion" },
    { icon: MessageSquare, title: "Content Strategy", description: "Alpha content and brand messaging" },
    { icon: Send, title: "Marketing", description: "Web3 marketing campaigns and brand positioning" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCollabTypeClick = (type: string) => {
    setSelectedCollabTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, and Message).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          collaborationTypes: selectedCollabTypes,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          project: "",
          message: "",
          collaborationType: ""
        });
        setSelectedCollabTypes([]);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        className="bg-background/50" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com" 
                        className="bg-background/50" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project/Company</label>
                    <Input 
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="Your project or company name" 
                      className="bg-background/50" 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Collaboration Type</label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Community Building", "Partnerships", "Business Dev", "Content Strategy", "Marketing"].map((type) => (
                        <Badge 
                          key={type}
                          variant={selectedCollabTypes.includes(type) ? "default" : "outline"} 
                          className="cursor-pointer hover:bg-primary/20"
                          onClick={() => handleCollabTypeClick(type)}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project and how we can collaborate..." 
                      className="bg-background/50 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full glow-effect group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
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
                       <a key={index} href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-background/30 rounded-lg hover:bg-background/50 transition-colors cursor-pointer group">
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
                       </a>
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