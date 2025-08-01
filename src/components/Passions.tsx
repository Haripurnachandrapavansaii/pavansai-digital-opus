import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Headphones, Plane, BookOpen, Music, Users, Heart } from 'lucide-react';

const Passions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const passions = [
    {
      title: "Business Podcasts",
      description: "Exploring startup journeys and business strategies through podcasts",
      icon: Headphones,
      color: "from-blue-500 to-purple-600",
      details: "Listening to founders share their stories, challenges, and victories. Learning from real-world business experiences."
    },
    {
      title: "Travel & Culture",
      description: "Learning from new cultures and environments",
      icon: Plane,
      color: "from-green-500 to-blue-600",
      details: "Exploring different perspectives, understanding diverse problem-solving approaches, and gaining global insights."
    },
    {
      title: "Reading & Growth",
      description: "Life principles, business models & innovation",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600",
      details: "Diving deep into books that challenge thinking, expand perspectives, and fuel personal and professional growth."
    },
    {
      title: "Drumming",
      description: "Staying rhythmically sharp and creative",
      icon: Music,
      color: "from-red-500 to-orange-600",
      details: "Finding rhythm and flow, expressing creativity, and maintaining mental clarity through musical expression."
    },
    {
      title: "Cricket",
      description: "Team spirit and staying active",
      icon: Users,
      color: "from-orange-500 to-red-600",
      details: "Building teamwork, strategic thinking, and maintaining physical fitness while enjoying competitive spirit."
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient">Beyond Work</span>
            </h2>
          </motion.div>

          {/* Passions Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="glass-container p-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Life Philosophy</h3>
              </div>
              <p className="text-muted-foreground text-center mb-6">
                "Balance fuels brilliance—my passions fuel creativity and perspective."
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-lg hover:bg-surface/50 transition-colors"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${passion.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <passion.icon className="text-white" size={20} />
                    </div>
                    <h4 className="text-sm font-semibold">{passion.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Passions;