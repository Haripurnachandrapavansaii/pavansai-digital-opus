import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Lightbulb, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const mindsetCards = [
    {
      icon: Brain,
      title: "Strategize",
      description: "Like a founder",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Build",
      description: "Like an engineer",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Lead",
      description: "Like a PM",
      color: "text-accent"
    },
    {
      icon: Lightbulb,
      title: "Learn",
      description: "Like a student",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than a degree-holder, I'm an impact-driven technologist with a hunger to solve real-world challenges.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-container p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  <Zap className="inline mr-3 text-primary" />
                  The Journey
                </h3>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey didn't begin with code—it began with curiosity. I was the kid who 
                    dismantled toys to understand how they worked. Over time, that curiosity turned 
                    into structured learning, hands-on projects, and a builder mindset.
                  </p>
                  
                  <p>
                    Now, I embody the full spectrum: <strong className="text-foreground">builder, strategist, and leader</strong>—able 
                    to take ideas from ideation to deployment with purpose.
                  </p>
                  
                  <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                    "If I build it, it must make real impact—not just live on a resume."
                  </blockquote>
                  
                  <p>
                    I thrive on challenges—adapting to any tech stack, managing teams, writing 
                    production-level code, and marketing data-driven ideas. Comfortable as a solo 
                    engineer and even stronger as a collaborative team player.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mindset Grid */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                <Target className="inline mr-3 text-primary" />
                My Mindset
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {mindsetCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    className="premium-card text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    initial={{ y: 30, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className={`mb-4 ${card.color} group-hover:scale-110 transition-transform`}>
                      <card.icon size={48} className="mx-auto" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                    <p className="text-muted-foreground">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16"
          >
            <div className="glass-container p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                I'm not here to take a job.
              </h3>
              <p className="text-xl text-gradient font-semibold relative z-10">
                I'm here to embark on a mission.
              </p>
              <p className="text-muted-foreground mt-4 relative z-10">
                Looking for an impact creator who's smart, adaptable, self-starting, and full-spectrum? <strong>That's me.</strong>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;