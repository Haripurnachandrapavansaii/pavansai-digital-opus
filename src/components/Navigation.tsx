import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, GraduationCap, FolderOpen, Briefcase, Wrench, Heart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'toolkit', label: 'Toolkit', icon: Wrench },
    { id: 'passions', label: 'Passions', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-heavy bg-background/80' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-display font-bold text-xl">
                <span className="text-gradient">Hari</span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden glass-container border-glass-border"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? '0%' : '100%'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-heavy border-l border-glass-border z-50 lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="glass-container border-glass-border"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full p-4 rounded-lg transition-all duration-200 flex items-center gap-3 text-left ${
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface/50'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Button
              className="w-full bg-gradient-primary hover:opacity-90 text-white"
              asChild
            >
              <a href="mailto:harisuravarapu8@gmail.com">
                <Mail className="mr-2" size={16} />
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;