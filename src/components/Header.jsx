import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLoader from './AnimatedLoader';
import { GrGithub } from 'react-icons/gr';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { headerVariants, childVariants, iconsVariant } from '../utils/variants';
import ChatWidget from './ChatWidget';

export default function Header() {
  const [showLoader, setShowLoader] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1200);

    const headerTimeout = setTimeout(() => {
      setShowHeader(true);
    }, 700);

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(headerTimeout);
    };
  }, []);

  return (
    <>
      <AnimatedLoader isVisible={showLoader} />
      <ChatWidget />
      {showHeader && (
        <motion.header
          className="flex flex-col items-center justify-center h-screen text-center px-4"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          id="home"
        >
          <motion.h1
            variants={childVariants}
            tabIndex={0}
            className="text-4xl md:text-6xl font-extrabold text-sky-600"
            role="heading"
            aria-label="Welcome to Elin's portfolio"
          >
            Hi, I’m Elin!
          </motion.h1>

          <motion.p
            variants={childVariants}
            tabIndex={0}
            className="mt-6 text-lg md:text-2xl text-slate-600"
            role="contentinfo"
            aria-label="Business analysis, data modelling, and strategy execution"
          >
            Business Analysis × Data Modelling × Strategy Execution
          </motion.p>

          <div className="flex gap-8">
            <motion.a
              variants={childVariants}
              href="#skills"
              className="mt-6 md:mt-6 inline-block border border-slate-400 bg-white/60 text-slate-700 hover:bg-white hover:border-slate-500 hover:text-slate-800 focus:ring-2 focus:ring-slate-300 shadow-md hover:shadow-lg font-semibold rounded-xl px-8 py-3 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              aria-label="View my skills"
            >
              View Skills
            </motion.a>

            <motion.a
              variants={childVariants}
              href="#experience"
              className="mt-6 md:mt-6 inline-block border border-slate-400 bg-white/60 text-slate-700 hover:bg-white hover:border-slate-500 hover:text-slate-800 focus:ring-2 focus:ring-slate-300 shadow-md hover:shadow-lg font-semibold rounded-xl px-8 py-3 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              aria-label="View my experience"
            >
              View Experience
            </motion.a>

            <motion.a
              variants={childVariants}
              href="#projects"
              className="mt-6 md:mt-6 inline-block border border-slate-400 bg-white/60 text-slate-700 hover:bg-white hover:border-slate-500 hover:text-slate-800 focus:ring-2 focus:ring-slate-300 shadow-md hover:shadow-lg font-semibold rounded-xl px-8 py-3 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              aria-label="View my projects"
            >
              View Projects
            </motion.a>
          </div>

          <motion.div
            variants={iconsVariant}
            className="mt-8 flex gap-8 justify-center"
          >
            <a
              href="https://github.com/elinchen0926"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              <GrGithub className="hover:scale-125 transition-all duration-300 text-3xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/maolinchen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              <TbBrandLinkedinFilled className="hover:scale-125 transition-all duration-300 text-3xl" />
            </a>
          </motion.div>
        </motion.header>
      )}
    </>
  );
}