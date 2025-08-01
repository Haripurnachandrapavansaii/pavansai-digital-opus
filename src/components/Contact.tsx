import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Download, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:harisuravarapu8@gmail.com?subject=${subject}&body=${body}`);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harisuravarapu8@gmail.com",
      link: "mailto:harisuravarapu8@gmail.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Haripurnachandrapavansaii",
      link: "https://github.com/Haripurnachandrapavansaii",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/hari-purna-chandra-pavan-sai-suravarapu-1b1123249/",
      color: "from-blue-600 to-blue-800"
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
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to embark on a mission together? I'm always excited to discuss new opportunities, 
              innovative projects, and ways to create real impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-container p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send className="text-primary" />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="glass-container border-glass-border"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="glass-container border-glass-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="glass-container border-glass-border"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                      className="glass-container border-glass-border"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 text-white"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass-container p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface/80 transition-colors group"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <contact.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{contact.label}</h4>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="glass-container p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Get My Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Download my latest resume with all projects, experience, and achievements.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 text-white"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1y3_QidKMOZorYhonwVtnPXcmmnia5IMT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Availability */}
              <div className="glass-container p-8">
                <h3 className="text-xl font-bold mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">Andhra Pradesh, India (Open to relocation)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary">🎓</span>
                    <span className="text-sm text-muted-foreground">Graduating July 2025</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 text-center"
          >
            <div className="glass-container p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Create Impact Together?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for a full-stack developer, AI/ML engineer, or someone who can wear multiple hats 
                  and drive projects from ideation to deployment, I'm here to contribute to something meaningful.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 text-white"
                    asChild
                  >
                    <a href="mailto:harisuravarapu8@gmail.com">
                      <Mail className="mr-2" size={20} />
                      Start a Conversation
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass-container border-glass-border"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/hari-purna-chandra-pavan-sai-suravarapu-1b1123249/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2" size={20} />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;