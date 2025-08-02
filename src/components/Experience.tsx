import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Award, ExternalLink, Code, Brain, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({});

  const internships = [
    {
      title: "AI/ML Intern",
      company: "AICTE & AWS Academy",
      duration: "May 2023 – July 2023",
      location: "SRM Institute of Science and Technology",
      type: "Machine Learning Internship",
      description: "Hands-on machine learning projects with AWS cloud deployment and real-world datasets.",
      achievements: [
        "Completed supervised and unsupervised machine learning algorithms",
        "Trained and evaluated classification models using AWS SageMaker",
        "Deployed models on AWS Cloud with real-world datasets",
        "Gained expertise in end-to-end ML workflows"
      ],
      skills: ["AWS SageMaker", "CloudWatch", "Model Optimization", "Cloud Scalability"],
      certificateId: "99c8e23ee3765dd4b99c1c44dc883444",
      certificateUrl: "https://drive.google.com/file/d/1a09AEODlVeC8fJ7SmuJpN3ryjLRRS8PU/view?usp=drive_link",
      icon: Brain,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Development Intern",
      company: "CodSoft",
      duration: "Aug 10, 2023 – Sep 10, 2023",
      location: "Virtual",
      type: "Front-End Developer Intern",
      description: "Developed responsive web interfaces and gained real-world development workflow experience.",
      achievements: [
        "Built responsive web interfaces using HTML, CSS, and JavaScript",
        "Developed and deployed multi-page static portfolio",
        "Practiced version control using Git and GitHub",
        "Understood component-based architecture"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"],
      certificateId: "c9c5447",
      certificateUrl: "https://drive.google.com/file/d/1YAENImVm2fTz0tvMPOXSjuhpLmlBwCcV/view?usp=drive_link",
      icon: Code,
      gradient: "from-green-500 to-blue-600"
    }
  ];

  const certifications = [
    {
      title: "Python (Basic)",
      provider: "HackerRank",
      date: "18 MAR, 2023",
      certificateId: "F8F77B6A4C93",
      icon: "🐍"
    },
    {
      title: "SQL (Basic)",
      provider: "HackerRank", 
      date: "18 MAR, 2023",
      certificateId: "9912F058BE26",
      icon: "🗃️"
    },
    {
      title: "Introduction to Web Development",
      provider: "Coursera (IBM)",
      date: "15 AUG, 2023",
      certificateUrl: "https://drive.google.com/file/d/1e0ThuaCTFYhqBMInypTl6-CfiZBlQOFs/view?usp=sharing",
      icon: "🌐"
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
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Virtual internships and continuous learning.
            </p>
          </motion.div>

          {/* Virtual Internships */}
          <div className="mb-12">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-bold mb-6 flex items-center gap-2"
            >
              <Briefcase className="text-primary" size={20} />
              Internships
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="premium-card"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${internship.gradient} rounded-lg flex items-center justify-center mb-3`}>
                    <internship.icon className="text-white" size={24} />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-1">{internship.title}</h4>
                  <p className="text-primary font-semibold text-sm mb-2">{internship.company}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    {internship.duration}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{internship.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {(expandedSkills[internship.title] ? internship.skills : internship.skills.slice(0, 3)).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-surface text-foreground text-xs rounded border border-glass-border"
                        >
                          {skill}
                        </span>
                      ))}
                      {internship.skills.length > 3 && (
                        <span 
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded cursor-pointer hover:bg-muted/80 transition-colors"
                          onClick={() => setExpandedSkills(prev => ({
                            ...prev,
                            [internship.title]: !prev[internship.title]
                          }))}
                        >
                          {expandedSkills[internship.title] ? 'Show less' : `+${internship.skills.length - 3}`}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-container border-glass-border w-full"
                    asChild
                  >
                    <a href={internship.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <Award size={14} className="mr-2" />
                      Certificate
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={20} />
              Certifications
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="premium-card text-center"
                >
                  <div className="text-2xl mb-2">{cert.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{cert.title}</h4>
                  <p className="text-primary font-semibold text-xs mb-1">{cert.provider}</p>
                  <p className="text-muted-foreground text-xs mb-3">{cert.date}</p>
                  
                  {cert.certificateUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-container border-glass-border text-xs"
                      asChild
                    >
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={12} className="mr-1" />
                        View
                      </a>
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;