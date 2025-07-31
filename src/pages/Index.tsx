import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Toolkit from '@/components/Toolkit';
import Passions from '@/components/Passions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="toolkit">
          <Toolkit />
        </section>
        
        <section id="passions">
          <Passions />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;