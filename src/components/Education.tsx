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
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="glass-container p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <GraduationCap className="text-primary" size={32} />
                <div className="text-center">
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

          {/* Simplified Journey */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {yearData.map((year, index) => (
              <motion.div
                key={year.year}
                className="premium-card text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Year Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${year.color} text-white font-bold text-xs mb-3`}>
                  <TrendingUp className="mr-1" size={12} />
                  {year.year}
                </div>
                
                <h3 className="text-lg font-bold mb-2">{year.title}</h3>
                <blockquote className="text-sm text-muted-foreground italic mb-3 border-l-2 border-primary pl-2">
                  "{year.quote}"
                </blockquote>
                
                {/* Key Skills */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {year.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {year.skills.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                      +{year.skills.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;