import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Linkedin, Twitter, Network, TrendingUp, Users, FileText } from "lucide-react";

const Contact = () => {
  const workAreas = [
    {
      icon: Network,
      title: "Ecosystem & Partnership Strategy",
    },
    {
      icon: TrendingUp,
      title: "Growth Systems & Market Expansion",
    },
    {
      icon: Users,
      title: "Community & Participation Design",
    },
    {
      icon: FileText,
      title: "Positioning, Narrative & Content Strategy",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "mojeeb.eth@gmail.com",
      note: "Best for detailed context or longer discussions.",
      color: "bg-blue-500",
      href: "mailto:mojeeb.eth@gmail.com",
    },
    {
      icon: MessageSquare,
      title: "Telegram",
      description: "@mojeebhq",
      note: "Quick conversations and early alignment.",
      color: "bg-sky-400",
      href: "https://t.me/mojeebhq",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "linkedin.com/in/mojeebhq",
      note: "Professional context and background.",
      color: "bg-blue-600",
      href: "https://linkedin.com/in/mojeebhq",
    },
    {
      icon: Twitter,
      title: "X (Twitter)",
      description: "@MojeebHQ",
      note: "Public thinking and real-time ideas.",
      color: "bg-black",
      href: "https://x.com/MojeebHQ",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Work & Collaboration Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work & <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm open to conversations where thinking, structure, and long-term alignment matter.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Areas */}
          <Card className="glass-card mb-8 animate-fade-in">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">This includes work around:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background/30 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{area.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                If there's alignment, we'll figure out the shape together.
              </p>
            </CardContent>
          </Card>

          {/* Connect Section */}
          <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Connect</h3>
              <p className="text-muted-foreground mb-6">
                If you'd like to start a conversation around strategy, systems, or collaboration, you can reach me here:
              </p>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background/30 rounded-lg hover:bg-background/50 transition-colors cursor-pointer group"
                  >
                    <div
                      className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1">{method.note}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="shrink-0">
                      Start a conversation
                    </Button>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
