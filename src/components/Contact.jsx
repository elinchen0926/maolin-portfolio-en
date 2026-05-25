import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { sectionVariants, headingVariants, itemVariants } from '../utils/variants';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen py-20 px-4 md:px-8 bg-slate-50 text-slate-700 flex flex-col items-center justify-center relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-sky-600 mb-10 z-10 tracking-tight"
        variants={headingVariants}
      >
        Get in Touch ✉️
      </motion.h2>

      <motion.div
        className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.08)] max-w-2xl w-full text-blue-600"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
      >
        <motion.p
          className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-[34ch] mx-auto text-center"
          variants={itemVariants}
        >
          Feel free to reach out for collaboration, internship, or analyst-related opportunities.
        </motion.p>

        <div className="space-y-5">
          <motion.div variants={itemVariants}>
            <a
              href="mailto:elinchen0926@gmail.com"
              className="group flex items-center justify-center text-slate-700 text-lg md:text-xl hover:text-sky-600 transition-colors duration-200"
            >
              <FaEnvelope className="mr-3 text-sky-600 group-hover:text-sky-600 transition-colors duration-200" size={22} />
              elinchen0926@gmail.com
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
  <a
    href="tel:+447436640298"
    className="group flex items-center justify-center text-slate-700 text-lg md:text-xl hover:text-sky-600 transition-colors duration-200"
  >
    <FaPhone className="mr-3 text-sky-600 group-hover:text-sky-600 transition-colors duration-200" size={22} />
    +44 7436 640298
  </a>
</motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="https://www.linkedin.com/in/maolinchen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center text-slate-700 text-lg md:text-xl hover:text-sky-600 transition-colors duration-200"
            >
              <FaLinkedin className="mr-3 text-sky-600 group-hover:text-sky-600 transition-colors duration-200" size={22} />
              LinkedIn Profile
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="https://github.com/elinchen0926"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center text-slate-700 text-lg md:text-xl hover:text-sky-600 transition-colors duration-200"
            >
              <FaGithub className="mr-3 text-sky-600 group-hover:text-sky-600 transition-colors duration-200" size={22} />
              GitHub Profile
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}