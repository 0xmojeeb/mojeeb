import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
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
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Mojeeb. Building the future of Web3 collaboration. Made with Love ❤️</p>
        </div>
      </footer>
    </div>;
};
export default Index;