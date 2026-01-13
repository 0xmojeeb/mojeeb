import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, BookOpen, Briefcase, Award, Mail, PenTool, Circle } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: BookOpen },
    { id: "skills", label: "Skills", icon: Award },
    { id: "blog", label: "Blog", icon: PenTool },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* BRAND LOGO - LEFT */}
      <div className="fixed top-6 left-6 z-[60]">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2 p-0 hover:bg-transparent"
        >
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg group-hover:rotate-90 transition-transform duration-500">
            <span className="text-black font-black text-xs">M</span>
          </div>
          <span className="text-lg font-bold tracking-tighter text-white hidden sm:block">
            MOJEEB<span className="text-primary text-xl">.</span>
          </span>
        </Button>
      </div>

      {/* DESKTOP NAV - CENTER */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-2 py-1.5 rounded-full shadow-2xl">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 group ${
                  activeSection === item.id 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest relative z-10 flex items-center gap-2">
                  {activeSection === item.id && (
                    <Circle className="w-1.5 h-1.5 fill-primary text-primary animate-pulse" />
                  )}
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE TRIGGER - RIGHT */}
      <div className="fixed top-6 right-6 z-[60] md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-xl border-white/10 bg-black/50 backdrop-blur-md transition-all ${
            isOpen ? "rotate-90 border-primary" : ""
          }`}
        >
          {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-white" />}
        </Button>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl transition-transform duration-500 md:hidden ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-4 text-3xl font-bold transition-all ${
                activeSection === item.id ? "text-primary scale-110" : "text-white/40 hover:text-white"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <item.icon className={`w-6 h-6 ${activeSection === item.id ? "text-primary" : "text-white/20"}`} />
              <span className="uppercase tracking-tighter">{item.label}</span>
            </button>
          ))}
          
          <div className="mt-12 pt-8 border-t border-white/10 w-48 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.5em]">System Vers. 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
