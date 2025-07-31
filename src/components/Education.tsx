import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, TrendingUp } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const yearData = [
    {
      year: "Year 1",
      title: "The Spark",
      quote: "Everything was new—college, code, and the sheer scale of learning.",
      achievements: [
        "Ventured into Python, SQL, and Data Structures from the ground up",
        "Built mini tools to automate daily routines and boost productivity",
        "Formed a peer learning circle where debugging code at 2 AM was the norm"
      ],
      skills: ["Python Basics", "SQL Fundamentals", "OOPs", "Debugging", "Team Learning", "Curiosity-Driven Exploration"],
      color: "from-blue-500 to-purple-600"
    },
    {
      year: "Year 2",
      title: "Foundation Gets Stronger",
      quote: "I stopped just writing code. I started solving problems.",
      achievements: [
        "Stepped into Machine Learning through experiments and project-based learning",
        "Applied classification & clustering algorithms to real-world datasets",
        "Joined the DSA Club as junior mentor and event coordinator"
      ],
      skills: ["Scikit-learn", "Data Preprocessing", "Leadership", "Event Planning", "Communication", "Peer Mentorship"],
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "Year 3",
      title: "Impact Meets Reality",
      quote: "Now it wasn't just theory—I was building products that talked back.",
      achievements: [
        "Launched InnovateX, an AI-powered startup incubator platform",
        "Built skill-based matchmaking between founders and investors",
        "Earned AWS Machine Learning Certificate with cloud deployment skills"
      ],
      skills: ["Machine Learning", "Recommendation Systems", "MongoDB", "Node.js", "REST APIs", "Cloud ML (AWS)"],
      color: "from-pink-500 to-red-600"
    },
    {
      year: "Year 4",
      title: "Analytics for the People",
      quote: "I wanted my work to be visible, useful, and visual.",
      achievements: [
        "Led Lok Sabha Election Data Visualization Project using Power BI + Python",
        "Cleaned over 5,000 rows and crafted 2 dashboards with drilldowns",
        "Focused on clear insights: regional patterns, voter behavior, and correlations"
      ],
      skills: ["Power BI", "Data Visualization", "Pandas", "NumPy", "Analytical Thinking", "Visual Storytelling"],
      color: "from-red-500 to-orange-600"
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
              <span className="text-gradient">Education Journey</span>
            </h2>
            <div className="glass-container p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <GraduationCap className="text-primary" size={32} />
                <div className="text-left">
                  <h3 className="font-bold text-xl">B.Tech in Artificial Intelligence</h3>
                  <p className="text-muted-foreground">SRM Institute of Science & Technology</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="text-primary" size={16} />
                  <span>July 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-primary" size={16} />
                  <span className="text-gradient font-bold">CGPA: 9.21/10</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            
            <div className="space-y-16">
              {yearData.map((year, index) => (
                <motion.div
                  key={year.year}
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto lg:text-left'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                  </div>
                  
                  <div className={`glass-container p-8 max-w-lg ${index % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'}`}>
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${year.color} text-white font-bold text-sm mb-4`}>
                      <TrendingUp className="mr-2" size={16} />
                      {year.year}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3">{year.title}</h3>
                    
                    {/* Quote */}
                    <blockquote className="text-muted-foreground italic mb-6 border-l-4 border-primary pl-4">
                      "{year.quote}"
                    </blockquote>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {year.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Skills Gained:</h4>
                      <div className="flex flex-wrap gap-2">
                        {year.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;