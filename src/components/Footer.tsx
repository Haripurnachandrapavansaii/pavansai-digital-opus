import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 mt-20">
      <div className="container mx-auto px-6">
        {/* Scroll to Top Button */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-primary hover:opacity-90 text-white rounded-full w-12 h-12 p-0 border-0 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>

        <motion.div
          className="glass-container p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo and Name */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl">
                <span className="text-gradient">Suravarapu Hari</span>
              </h3>
              <p className="text-sm text-muted-foreground">AI/ML Engineer & Full-Stack Developer</p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-lg font-medium text-muted-foreground italic mb-8">
            "If I build it, it must make real impact—not just live on a resume."
          </blockquote>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              {
                icon: Github,
                href: "https://github.com/Haripurnachandrapavansaii",
                label: "GitHub",
                color: "from-gray-500 to-gray-700"
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/hari-purna-chandra-pavan-sai-suravarapu-1b1123249/",
                label: "LinkedIn",
                color: "from-blue-600 to-blue-800"
              },
              {
                icon: Mail,
                href: "mailto:harisuravarapu8@gmail.com",
                label: "Email",
                color: "from-red-500 to-red-700"
              }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-glass-border mb-6"></div>

          {/* Footer Text */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Suravarapu Hari Purna Chandra Pavan Sai</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>using React, Framer Motion & Tailwind CSS</span>
            </div>
          </div>

          {/* Status */}
          <motion.div
            className="mt-6 flex items-center justify-center gap-2 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">Available for new opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;