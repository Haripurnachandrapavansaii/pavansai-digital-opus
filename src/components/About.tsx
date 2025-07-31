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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Impact-driven technologist with a hunger to solve real-world challenges.
            </p>
          </motion.div>

          {/* Condensed Story */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="glass-container p-6 max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-4">
                From curiosity-driven kid dismantling toys to <strong className="text-foreground">builder, strategist, and leader</strong>—
                I take ideas from ideation to deployment with purpose.
              </p>
              <blockquote className="text-xl text-gradient font-medium">
                "If I build it, it must make real impact—not just live on a resume."
              </blockquote>
            </div>
          </motion.div>

          {/* Mindset Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
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
                  <div className={`mb-3 ${card.color} group-hover:scale-110 transition-transform`}>
                    <card.icon size={32} className="mx-auto" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{card.title}</h4>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;