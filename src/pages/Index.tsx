import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <About />
        <Education />
        <Experience />
        <Skills />
        <Blog />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Building communities that don't just grow, they evolve. LFG 🚀🔥
          </p>
          <p className="text-muted-foreground text-xs mt-2">© 2025 Mojeeb. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;