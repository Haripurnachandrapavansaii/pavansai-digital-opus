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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Beyond Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passions that fuel my creativity, keep me grounded, and inspire my approach to problem-solving.
            </p>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-container p-8 mb-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Life Philosophy</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                "Balance fuels brilliance. My passions aren't distractions—they're the sources of creativity, 
                perspective, and energy that make me a better technologist and human."
              </p>
            </div>
          </motion.div>

          {/* Passions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {passions.map((passion, index) => (
              <motion.div
                key={passion.title}
                initial={{ y: 50, opacity: 0, rotateY: 15 }}
                animate={inView ? { y: 0, opacity: 1, rotateY: 0 } : { y: 50, opacity: 0, rotateY: 15 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10, rotateY: -5 }}
                className="premium-card group relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${passion.color} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${passion.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <passion.icon className="text-white" size={40} />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-center">{passion.title}</h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-center mb-4">{passion.description}</p>
                  
                  {/* Details */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="border-t border-glass-border pt-4">
                      <p className="text-sm text-muted-foreground">{passion.details}</p>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
            ))}
          </div>

          {/* Impact Statement */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left Side - Visual */}
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-80 h-80 mx-auto relative"
              >
                {/* Circular Passion Icons */}
                {passions.map((passion, index) => {
                  const angle = (index * 360) / passions.length;
                  const radius = 120;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={passion.title}
                      className={`absolute w-16 h-16 bg-gradient-to-r ${passion.color} rounded-full flex items-center justify-center`}
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                      }}
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <passion.icon className="text-white" size={24} />
                    </motion.div>
                  );
                })}
                
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={32} />
                </div>
              </motion.div>
            </div>

            {/* Right Side - Text */}
            <div className="glass-container p-8">
              <h3 className="text-2xl font-bold mb-6">How Passions Shape My Work</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Business Podcasts</strong> give me insights into real-world 
                  challenges and innovative solutions that I apply to my projects.
                </p>
                <p>
                  <strong className="text-foreground">Travel</strong> exposes me to diverse perspectives and 
                  problem-solving approaches from different cultures.
                </p>
                <p>
                  <strong className="text-foreground">Reading</strong> constantly expands my knowledge base and 
                  challenges my thinking patterns.
                </p>
                <p>
                  <strong className="text-foreground">Drumming</strong> teaches me rhythm, timing, and the 
                  importance of practice in achieving mastery.
                </p>
                <p>
                  <strong className="text-foreground">Cricket</strong> reinforces teamwork, strategy, and 
                  the value of supporting teammates toward a common goal.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Passions;