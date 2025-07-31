import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  Image, 
  Video, 
  Presentation, 
  Lightbulb, 
  BookOpen, 
  Zap, 
  FileText, 
  Globe, 
  Mic, 
  Headphones,
  Wrench
} from 'lucide-react';

const Toolkit = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toolCategories = [
    {
      category: "Research",
      icon: Search,
      tools: ["ChatGPT", "NotebookLM", "Consensus"],
      color: "from-blue-500 to-purple-600",
      description: "Deep research and information gathering"
    },
    {
      category: "Image Generation",
      icon: Image,
      tools: ["DALL·E", "Adobe Firefly"],
      color: "from-pink-500 to-red-600",
      description: "Creative visual content generation"
    },
    {
      category: "Video Generation",
      icon: Video,
      tools: ["Veo (Gemini)", "Pika Labs", "Runway Gen-3"],
      color: "from-purple-500 to-pink-600",
      description: "Dynamic video content creation"
    },
    {
      category: "Presentations",
      icon: Presentation,
      tools: ["Gamma.app", "Tome AI"],
      color: "from-green-500 to-blue-600",
      description: "Professional presentation design"
    },
    {
      category: "Brainstorming",
      icon: Lightbulb,
      tools: ["Notion AI", "ChatGPT GPTs"],
      color: "from-yellow-500 to-orange-600",
      description: "Ideation and creative thinking"
    },
    {
      category: "Learning/Study",
      icon: BookOpen,
      tools: ["Khanmigo", "Explainpaper"],
      color: "from-indigo-500 to-purple-600",
      description: "Enhanced learning experiences"
    },
    {
      category: "Automation",
      icon: Zap,
      tools: ["n8n", "Zapier + GPT Plugin"],
      color: "from-cyan-500 to-blue-600",
      description: "Workflow automation and optimization"
    },
    {
      category: "Documents/Writing",
      icon: FileText,
      tools: ["Microsoft Copilot", "Google Gemini"],
      color: "from-green-500 to-teal-600",
      description: "Enhanced document creation"
    },
    {
      category: "Web Creation",
      icon: Globe,
      tools: ["Lovable", "Bolt.so"],
      color: "from-red-500 to-pink-600",
      description: "Rapid web development"
    },
    {
      category: "Voice/Language",
      icon: Mic,
      tools: ["ElevenLabs", "HeyGen"],
      color: "from-purple-500 to-blue-600",
      description: "Voice synthesis and language processing"
    },
    {
      category: "Podcasts",
      icon: Headphones,
      tools: ["NotebookLM", "Snipd"],
      color: "from-orange-500 to-red-600",
      description: "Audio content and podcast tools"
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
              <span className="text-gradient">Everyday AI Toolkit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The AI-powered tools I use daily to enhance productivity, creativity, and problem-solving across all domains.
            </p>
          </motion.div>

          {/* Introduction Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-container p-8 mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">AI-First Approach</h3>
            </div>
            <p className="text-muted-foreground">
              I leverage AI tools not as a replacement for human creativity, but as amplifiers for innovation. 
              Each tool in my arsenal serves a specific purpose in my daily workflow, from ideation to execution.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="premium-card group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="text-white" size={32} />
                  </div>
                  
                  {/* Category */}
                  <h3 className="text-xl font-bold mb-2">{category.category}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  
                  {/* Tools */}
                  <div className="space-y-2">
                    {category.tools.map((tool, i) => (
                      <motion.div
                        key={tool}
                        className="flex items-center gap-2 p-2 rounded-lg bg-surface/50 hover:bg-surface transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                        <span className="text-sm font-medium">{tool}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Usage Philosophy */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="glass-container p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={24} />
                </div>
                <h4 className="font-bold mb-2">Efficiency</h4>
                <p className="text-sm text-muted-foreground">
                  Automate repetitive tasks and accelerate creative processes
                </p>
              </div>
              
              <div className="glass-container p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <h4 className="font-bold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Explore new possibilities and push creative boundaries
                </p>
              </div>
              
              <div className="glass-container p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="font-bold mb-2">Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Continuously expand knowledge and stay at the cutting edge
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Toolkit;