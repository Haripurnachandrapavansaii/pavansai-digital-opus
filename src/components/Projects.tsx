import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Rocket, Brain, BarChart3, Palette, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const featuredProjects = [
    {
      title: "InnovateX",
      subtitle: "Startup-Investor Matchmaking Engine",
      description: "A smart platform acting like a virtual startup scout using NLP, clustering, and real-time analytics to recommend investor-startup matches more accurately.",
      inspiration: "Inspired by a podcast from Sudhakar Chirra (Freshbus) on startup struggles with funding and mentoring.",
      features: [
        "Real-time investor scoring engine using TF-IDF, KNN, and decision trees",
        "ML-based feedback scoring and secure pitch submission",
        "Dynamic clustering with 40% improvement in match relevance"
      ],
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Python", "NLP", "Decision Trees", "TF-IDF", "KNN"],
      liveUrl: "https://startup-invest-connect.lovable.app/",
      videoUrl: "https://drive.google.com/file/d/16yMEB-ET_ZMF9IahsdgULkkawQ1te22f/view?usp=sharing",
      icon: Rocket,
      gradient: "from-blue-500 to-purple-600",
      status: "Live"
    },
    {
      title: "CognizantCare AI",
      subtitle: "Healthcare Admission Forecaster",
      description: "A full-stack health analytics system that predicts hospital admissions and enables smarter resource planning through dynamic dashboards and machine learning.",
      features: [
        "Real-time admission prediction using historical datasets",
        "Interactive dashboards with health heatmaps and KPIs",
        "Smart CSV parser with auto-insights and exportable reports"
      ],
      tech: ["React", "TypeScript", "Tailwind", "Shadcn/UI", "TanStack Query", "Recharts"],
      liveUrl: "https://care-ai-insights-hub.lovable.app/",
      videoUrl: "https://drive.google.com/file/d/1wQjG91tZ3mKYvEw6zNLQXjStg0u0ejhm/view?usp=sharing",
      icon: Brain,
      gradient: "from-green-500 to-blue-600",
      status: "Live"
    },
    {
      title: "Lok Sabha Election 2024",
      subtitle: "Data Analysis & Visualization",
      description: "Analyzed and visualized over 5000 rows of parliamentary election data to uncover patterns in party performance, vote shares, and regional trends using Power BI and Python.",
      features: [
        "Interactive dashboards with state-wise filters and visual KPIs",
        "Margin analysis, top parties by region, and gender-based win ratios",
        "Web scraping and data preprocessing using Python"
      ],
      tech: ["Python", "Pandas", "NumPy", "Power BI"],
      githubUrl: "https://github.com/Haripurnachandrapavansaii/loksabha_Election_analysis_india_2024",
      icon: BarChart3,
      gradient: "from-orange-500 to-red-600",
      status: "Complete"
    }
  ];

  const upcomingProjects = [
    {
      title: "SOOTRA",
      subtitle: "Community-Powered Fashion Launchpad",
      description: "A digital platform where fashion designers showcase sketches, gain community votes, and turn winning designs into real-world products.",
      features: [
        "Multi-step sketch upload & community voting system",
        "Designer galleries with trending metrics",
        "Shop UI for live design launches and limited drops"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "TanStack Query", "Framer Motion", "Node.js", "MongoDB"],
      icon: Palette,
      gradient: "from-pink-500 to-purple-600",
      status: "In Development"
    },
    {
      title: "ResumeTailor.AI",
      subtitle: "Smart Resume Optimizer",
      description: "An AI-powered tool that tailors resumes to any job description, enhancing ATS scores and aligning with recruiter expectations in seconds.",
      features: [
        "Upload Resume + Job Description → Instant optimized output",
        "ATS Score Estimator and LinkedIn Integration",
        "n8n Automation for email delivery and workflow orchestration"
      ],
      tech: ["Python", "Streamlit", "OpenAI APIs", "Pandas", "n8n"],
      icon: Bot,
      gradient: "from-cyan-500 to-blue-600",
      status: "Planning"
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
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where passion met purpose. Each project tells a story of innovation, problem-solving, and real-world impact.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="glass-container p-8">
                    {/* Status Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium mb-4`}>
                      <project.icon className="mr-2" size={16} />
                      {project.status}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-semibold mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    {project.inspiration && (
                      <div className="mb-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r">
                        <p className="text-sm text-muted-foreground italic">{project.inspiration}</p>
                      </div>
                    )}
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-surface text-foreground text-xs rounded-full border border-glass-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <Button
                          className="bg-gradient-primary hover:opacity-90 text-white"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" size={16} />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          className="glass-container border-glass-border"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" size={16} />
                            GitHub
                          </a>
                        </Button>
                      )}
                      
                      {project.videoUrl && (
                        <Button
                          variant="outline"
                          className="glass-container border-glass-border"
                          asChild
                        >
                          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="mr-2" size={16} />
                            Demo Video
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="glass-container p-8 text-center"
                  >
                    <div className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center`}>
                      <project.icon className="text-white" size={64} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground">{project.subtitle}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Projects */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Current & Upcoming Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="premium-card"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center mb-4`}>
                    <project.icon className="text-white" size={32} />
                  </div>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium mb-4`}>
                    {project.status}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-primary font-semibold mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 text-sm">Planned Features:</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-surface text-foreground text-xs rounded border border-glass-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;