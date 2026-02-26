import { useState, useEffect } from 'react';
import { 
  MoreVertical, 
  X, 
  Moon, 
  Sun, 
  Code, 
  Smartphone, 
  Camera, 
  Video, 
  Facebook, 
  Instagram, 
  Phone, 
  Mail, 
  ExternalLink,
  Send,
  MessageCircle,
  Home,
  User,
  Briefcase,
  Layers,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Services', href: '#services', icon: <Briefcase size={20} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <Layers size={20} /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare size={20} /> },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex flex-col">
            <span className="text-xl font-black gradient-text tracking-tighter leading-none">ABDULLAH</span>
            <span className="text-[10px] font-black text-slate-950 dark:text-slate-300 uppercase tracking-[0.3em] mt-1">Developer</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-black text-slate-950 dark:text-slate-100 hover:text-primary transition-colors uppercase text-sm tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-slate-950" />}
          </button>
        </div>

        {/* Mobile Toggle (3 Dot Button) */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-slate-950" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full glass hover:bg-black/10 dark:hover:bg-white/20 transition-all active:scale-90"
          >
            {isOpen ? <X size={24} className="text-slate-950 dark:text-white" /> : <MoreVertical size={24} className="text-slate-950 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-[90] md:hidden flex flex-col items-center justify-center ${darkMode ? 'bg-slate-950/98' : 'bg-white/98'} backdrop-blur-2xl`}
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 text-3xl font-black transition-colors group ${darkMode ? 'text-white hover:text-primary' : 'text-slate-950 hover:text-primary'}`}
                >
                  <span className={`p-3 rounded-2xl glass group-hover:bg-primary/20 transition-colors`}>
                    {link.icon}
                  </span>
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex gap-6"
            >
              <a href="https://wa.me/8801903195687" className="p-4 rounded-full glass hover:bg-emerald-500/20 transition-colors">
                <MessageCircle size={24} className="text-slate-950 dark:text-white" />
              </a>
              <a href="https://www.facebook.com/abdullahibnislam3482" className="p-4 rounded-full glass hover:bg-blue-600/20 transition-colors">
                <Facebook size={24} className="text-slate-950 dark:text-white" />
              </a>
              <a href="https://www.instagram.com/alamin_hossan_1.0" className="p-4 rounded-full glass hover:bg-pink-600/20 transition-colors">
                <Instagram size={24} className="text-slate-950 dark:text-white" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const headline = "Abdullah Ibn Islam";
  const subheadline = "App & Web Developer | Photo/Video Editor";
  const description = "Building innovative apps, seamless websites, and stunning visuals.";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl relative z-10">
            <img 
              src="https://picsum.photos/seed/abdullah-portrait/600/600" 
              alt="Abdullah Ibn Islam" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center mb-6"
        >
          {headline.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={child}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-950 dark:text-white"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          custom={10}
          className="flex flex-wrap justify-center mb-4"
        >
          {subheadline.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={child}
              className="text-xl md:text-3xl text-blue-700 dark:text-primary font-black uppercase tracking-tighter"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          custom={20}
          className="flex flex-wrap justify-center mb-10 max-w-2xl mx-auto"
        >
          {description.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={child}
              className="text-lg md:text-xl text-slate-950 dark:text-slate-400 font-black"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <a href="#contact" className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white inline-block">
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-black/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden glass p-2 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/abdullah-profile/900/1200" 
                alt="Abdullah Ibn Islam" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6 text-slate-950 dark:text-white">About Me</h2>
            <p className="text-lg text-slate-900 dark:text-slate-400 leading-relaxed mb-8 font-bold">
              I'm a passionate app and web developer from Bangladesh, specializing in mobile apps (Android/iOS), custom websites, and professional photo/video editing. With hands-on experience in tools like Flutter, React, Adobe Premiere, and Photoshop, I turn ideas into pixel-perfect realities. Let's collaborate!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass">
                <h3 className="font-bold text-primary">5+</h3>
                <p className="text-sm text-slate-900 dark:text-slate-500 font-bold">Years Experience</p>
              </div>
              <div className="p-4 rounded-xl glass">
                <h3 className="font-bold text-primary">50+</h3>
                <p className="text-sm text-slate-900 dark:text-slate-500 font-bold">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "App Development",
      description: "Creating high-performance mobile applications for Android and iOS using Flutter and React Native.",
      icon: <Smartphone className="text-blue-500" size={32} />
    },
    {
      title: "Web Development",
      description: "Building responsive, modern, and SEO-friendly websites using React, Next.js, and Tailwind CSS.",
      icon: <Code className="text-purple-500" size={32} />
    },
    {
      title: "Photo Editing",
      description: "Professional retouching, color grading, and manipulation to make your photos stand out.",
      icon: <Camera className="text-pink-500" size={32} />
    },
    {
      title: "Video Editing",
      description: "Cinematic editing, motion graphics, and sound design for social media, ads, and films.",
      icon: <Video className="text-red-500" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-slate-950 dark:text-white">My Services</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-900 dark:text-slate-400 text-sm leading-relaxed font-bold">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const projects = [
    { id: 1, title: "E-commerce App", category: "App Dev", img: "https://picsum.photos/seed/app1/600/400" },
    { id: 2, title: "Corporate Website", category: "Web Dev", img: "https://picsum.photos/seed/web1/600/400" },
    { id: 3, title: "Cinematic Travel Video", category: "Video Editing", img: "https://picsum.photos/seed/video1/600/400" },
    { id: 4, title: "Fashion Retouching", category: "Photo Editing", img: "https://picsum.photos/seed/photo1/600/400" },
    { id: 5, title: "Fitness Tracker App", category: "App Dev", img: "https://picsum.photos/seed/app2/600/400" },
    { id: 6, title: "Portfolio Website", category: "Web Dev", img: "https://picsum.photos/seed/web2/600/400" },
    { id: 7, title: "Music Video Edit", category: "Video Editing", img: "https://picsum.photos/seed/video2/600/400" },
    { id: 8, title: "Product Photography", category: "Photo Editing", img: "https://picsum.photos/seed/photo2/600/400" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-slate-950 dark:text-white">My Portfolio</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => setSelectedProject(project.id)}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="text-lg font-bold text-white mb-4">{project.title}</h3>
                <button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-lg self-start">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              layoutId={`project-${selectedProject}`}
              className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/20 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={projects.find(p => p.id === selectedProject)?.img} 
                    alt="Project" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <p className="text-primary font-bold uppercase tracking-widest mb-2">
                    {projects.find(p => p.id === selectedProject)?.category}
                  </p>
                  <h3 className="text-3xl font-bold mb-6">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <p className="text-slate-900 dark:text-slate-400 mb-8 leading-relaxed font-bold">
                    This project involved creating a high-end solution tailored to the client's needs. 
                    From initial concept to final deployment, every detail was crafted with precision 
                    and performance in mind.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {['React', 'Tailwind', 'Motion', 'Node.js'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="#" 
                    className="btn-primary bg-primary text-white flex items-center justify-center gap-2"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-slate-950 dark:text-white">Contact Us</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl glass border-none focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
              <button className="w-full btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-2xl font-black mb-6 text-slate-950 dark:text-white">Get in Touch</h3>
              <p className="text-slate-900 dark:text-slate-400 mb-8 font-bold">
                Have a project in mind? Let's talk about how I can help you bring your ideas to life.
              </p>
              
              <div className="space-y-6">
                <a href="tel:+8801903195687" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg glass group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-950 dark:text-slate-500 uppercase font-black tracking-widest">Phone / WhatsApp</p>
                    <p className="font-black text-slate-950 dark:text-slate-200">+8801903-195687</p>
                  </div>
                </a>
                <a href="mailto:contact@abdullah.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg glass group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-950 dark:text-slate-500 uppercase font-black tracking-widest">Email</p>
                    <p className="font-black text-slate-950 dark:text-slate-200">contact@abdullah.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/abdullahibnislam3482" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass hover:bg-blue-600/20 transition-all hover:-translate-y-1"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/alamin_hossan_1.0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass hover:bg-pink-600/20 transition-all hover:-translate-y-1"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <a 
              href="https://wa.me/8801903195687" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-emerald-600 text-white flex items-center justify-center gap-2 w-fit"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-950 dark:text-slate-500 text-sm font-black">
          © 2026 Abdullah Ibn Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
