import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarVariants } from '../utils/variants';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <motion.nav
      variants={navbarVariants}
      animate={scrolled ? 'scrolled' : 'unscrolled'}
      initial="initial"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-white/10 backdrop-blur-xl shadow-lg border border-white/20' : 'bg-transparent'}
        py-4 px-8 flex justify-between items-center`}
    >
      <motion.div
        className={`flex items-center cursor-pointer transition-all duration-300
          ${scrolled ? 'bg-white/20 rounded-full px-4 py-2' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#home" className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-slate-500' : 'text-sky-600'}`}>
          Elin Chen
        </a>
      </motion.div>

      <motion.div
        className={`hidden md:flex space-x-2 md:space-x-4 lg:space-x-6 transition-all duration-300 relative
          ${scrolled ? 'bg-white/20 rounded-full px-4 py-2' : ''}`}
        onMouseLeave={() => setHoveredLink(null)}
      >
        <AnimatePresence>
          {hoveredLink && (
            <motion.span
              layoutId="hover-nav-pill"
              className={`absolute rounded-full ${scrolled ? 'bg-blue300' : 'bg-sky-200'}`}
              style={{
                top: 0,
                left: hoveredLink.left,
                width: hoveredLink.width,
                height: hoveredLink.height,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </AnimatePresence>

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`text-sm md:text-lg relative px-3 py-1 rounded-full
              ${activeSection === link.id
                ? scrolled ? 'text-slate-500 font-bold' : 'text-slate-500 font-bold'
                : scrolled ? 'text-slate-500 hover:text-slate-500' : 'text-slate-500 hover:text-gray-200'
              }
              transition-colors duration-200`}
            onClick={() => setActiveSection(link.id)}
            onMouseEnter={(e) => {
              const { offsetLeft, offsetWidth, offsetHeight } = e.currentTarget;
              setHoveredLink({
                id: link.id,
                left: offsetLeft,
                width: offsetWidth,
                height: offsetHeight,
              });
            }}
          >
            {link.name}
            {activeSection === link.id && (
              <motion.span
                layoutId="active-nav-pill"
                className={`absolute inset-0 rounded-full ${scrolled ? 'bg-sky-200' : 'bg-sky-200'} z-[-1]`}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#contact"
        className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold transition-all duration-300 ease-in-out
          ${scrolled
            ? 'bg-sky-200 hover:bg-sky-200 text-slate-500 shadow-md'
            : 'bg-sky-200 hover:bg-sky-200 text-slate-500 shadow-lg'
          }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;