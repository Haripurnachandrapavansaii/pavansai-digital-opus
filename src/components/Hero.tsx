import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 z-10 text-center"
      >
        {/* Floating Avatar */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 mx-auto w-32 h-32 glass-container p-1 glow-effect"
        >
          <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">H</span>
          </div>
        </motion.div>

        {/* Animated Name */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-gradient">Suravarapu Hari</span>
            <br />
            <span className="text-foreground">Purna Chandra Pavan Sai</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-medium">
            <Typewriter
              options={{
                strings: [
                  'AI/ML Engineer',
                  'Full-Stack Developer', 
                  'Data Scientist',
                  'Innovation Catalyst',
                  'Problem Solver'
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </div>
        </motion.div>

        {/* Impact Quote */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <blockquote className="text-lg md:text-xl font-medium text-gradient italic">
            "Building for real impact, not just resumes."
          </blockquote>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'CGPA', value: '9.21/10' },
              { label: 'Projects', value: '10+' },
              { label: 'Technologies', value: '25+' },
              { label: 'Experience', value: '2+ Years' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="premium-card text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white border-0 shadow-glow"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1y3_QidKMOZorYhonwVtnPXcmmnia5IMT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <div className="flex gap-3">
              <Button
                size="lg"
                variant="outline"
                className="glass-container border-glass-border hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/Haripurnachandrapavansaii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="glass-container border-glass-border hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/hari-purna-chandra-pavan-sai-suravarapu-1b1123249/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="glass-container border-glass-border hover:bg-primary/10"
                asChild
              >
                <a href="mailto:harisuravarapu8@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;