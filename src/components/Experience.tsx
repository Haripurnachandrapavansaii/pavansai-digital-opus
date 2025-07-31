import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Award, ExternalLink, Code, Brain, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient">Experience & Growth</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world experience through virtual internships and continuous learning through certifications.
            </p>
          </motion.div>

          {/* Virtual Internships */}
          <div className="mb-20">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <Briefcase className="text-primary" />
              Virtual Internships
            </motion.h3>

            <div className="space-y-8">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.title}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="glass-container p-8 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${internship.gradient} opacity-10 rounded-bl-full`}></div>
                  
                  <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                    {/* Company Info */}
                    <div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${internship.gradient} rounded-xl flex items-center justify-center mb-4`}>
                        <internship.icon className="text-white" size={32} />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{internship.title}</h4>
                      <p className="text-primary font-semibold mb-2">{internship.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar size={16} />
                        {internship.duration}
                      </div>
                      <p className="text-sm text-muted-foreground">{internship.location}</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {internship.type}
                      </span>
                    </div>

                    {/* Description & Achievements */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-4">{internship.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="text-primary" size={16} />
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {internship.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3">Skills Developed:</h5>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-surface text-foreground text-xs rounded-full border border-glass-border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Certificate */}
                      <div className="flex items-center justify-between bg-primary/5 rounded-lg p-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Award className="text-primary" size={16} />
                            <span className="font-semibold text-sm">Certificate Earned</span>
                          </div>
                          {internship.certificateId && (
                            <p className="text-xs text-muted-foreground">ID: {internship.certificateId}</p>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="glass-container border-glass-border"
                          asChild
                        >
                          <a href={internship.certificateUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            View
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" />
              Certifications & Training
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="premium-card text-center"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="font-bold mb-2">{cert.title}</h4>
                  <p className="text-primary font-semibold text-sm mb-2">{cert.provider}</p>
                  <p className="text-muted-foreground text-sm mb-3">{cert.date}</p>
                  
                  {cert.certificateId && (
                    <p className="text-xs text-muted-foreground mb-3">
                      ID: {cert.certificateId}
                    </p>
                  )}
                  
                  {cert.certificateUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-container border-glass-border"
                      asChild
                    >
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
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