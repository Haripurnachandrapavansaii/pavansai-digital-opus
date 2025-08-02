import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Rocket, Brain, BarChart3, Palette, Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedTech, setExpandedTech] = useState<Record<string, boolean>>({});

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
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovation meets real-world impact.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="premium-card group cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <project.icon className="text-white" size={32} />
                </div>
                
                <div className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium mb-3`}>
                  {project.status}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                
                {/* Key Tech */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {(expandedTech[project.title] ? project.tech : project.tech.slice(0, 4)).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-surface text-foreground text-xs rounded border border-glass-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span 
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded cursor-pointer hover:bg-muted/80 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedTech(prev => ({
                            ...prev,
                            [project.title]: !prev[project.title]
                          }));
                        }}
                      >
                        {expandedTech[project.title] ? 'Show less' : `+${project.tech.length - 4}`}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90 text-white flex-1"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1" size={14} />
                        Live
                      </a>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-container border-glass-border"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                      </a>
                    </Button>
                  )}
                  
                  {project.videoUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-container border-glass-border"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Play size={14} />
                      </a>
                    </Button>
                  )}
                </div>
                
                {/* Click to expand hint */}
                <div className="text-xs text-muted-foreground text-center mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  Click to view details
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Projects */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6">
              <span className="text-gradient">Upcoming</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="premium-card cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mb-3`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  
                  <div className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium mb-3`}>
                    {project.status}
                  </div>
                  
                  <h4 className="text-lg font-bold mb-1">{project.title}</h4>
                  <p className="text-primary font-semibold text-sm mb-2">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(expandedTech[project.title] ? project.tech : project.tech.slice(0, 3)).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-surface text-foreground text-xs rounded border border-glass-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span 
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded cursor-pointer hover:bg-muted/80 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedTech(prev => ({
                            ...prev,
                            [project.title]: !prev[project.title]
                          }));
                        }}
                      >
                        {expandedTech[project.title] ? 'Show less' : `+${project.tech.length - 3}`}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-muted-foreground text-center opacity-60">
                    Click to view details
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-container border-glass-border">
                <DialogTitle className="sr-only">{selectedProject.title} Project Details</DialogTitle>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.gradient} rounded-xl flex items-center justify-center`}>
                      <selectedProject.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                      <p className="text-primary font-semibold">{selectedProject.subtitle}</p>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${selectedProject.gradient} text-white text-sm font-medium mt-2`}>
                        {selectedProject.status}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X size={20} />
                  </Button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Inspiration */}
                  {selectedProject.inspiration && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Inspiration</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedProject.inspiration}</p>
                    </div>
                  )}

                  {/* Features */}
                  {selectedProject.features && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-surface text-foreground text-sm rounded-lg border border-glass-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-glass-border">
                    {selectedProject.liveUrl && (
                      <Button
                        className="bg-gradient-primary hover:opacity-90 text-white"
                        asChild
                      >
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" size={18} />
                          View Live Project
                        </a>
                      </Button>
                    )}
                    
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className="glass-container border-glass-border"
                        asChild
                      >
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={18} />
                          View Code
                        </a>
                      </Button>
                    )}
                    
                    {selectedProject.videoUrl && (
                      <Button
                        variant="outline"
                        className="glass-container border-glass-border"
                        asChild
                      >
                        <a href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-2" size={18} />
                          Watch Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;