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

          {/* All Tools in Single Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-container p-8 mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Wrench className="text-primary" size={32} />
              <h3 className="text-2xl font-bold">AI-First Approach</h3>
            </div>
            <p className="text-muted-foreground text-center mb-8">
              I leverage AI tools not as a replacement for human creativity, but as amplifiers for innovation. 
              Each tool in my arsenal serves a specific purpose in my daily workflow, from ideation to execution.
            </p>
            
            {/* Tools Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {toolCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg hover:bg-surface/50 transition-colors"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h4 className="text-sm font-semibold mb-2">{category.category}</h4>
                  <div className="space-y-1">
                    {category.tools.map((tool) => (
                      <div key={tool} className="text-xs text-muted-foreground">
                        {tool}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


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