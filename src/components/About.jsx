import { motion } from 'framer-motion';
import { aboutSectionVariants, aboutChildVariants, aboutImageVariants } from '../utils/variants';

export default function About() {
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8 text-slate-700"
      variants={aboutSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        variants={aboutChildVariants}
        className="text-3xl md:text-5xl font-extrabold mb-8 text-sky-600"
      >
        About Me
      </motion.h2>

      <motion.span
        variants={aboutChildVariants}
        className="text-sm md:text-base tracking-wide text-slate-600 text-center font-semibold mb-10 max-w-4xl leading-relaxed"
      >
        Making sense of data, markets, and business problems through structured analysis.
      </motion.span>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 max-w-6xl mx-auto">
        <motion.div
          variants={aboutImageVariants}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-md border-4 border-sky-300/50"
        >
          <img
            src={`${import.meta.env.BASE_URL}me.jpg`}
            alt="Elin Chen Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="md:w-2/3 text-base md:text-xl text-slate-700 space-y-6 leading-8 text-center md:text-left">
          <motion.p variants={aboutChildVariants}>
            I’m Elin Chen, currently studying Biomedical Technology Ventures at Imperial College London,
            with an upcoming master’s degree in Business Analytics at the National University of Singapore.
            My work sits across data analysis, business strategy, healthcare, and market research.
          </motion.p>

          <motion.p variants={aboutChildVariants}>
            I have worked on analytical projects across healthcare consulting, equity research, consumer insights,
            and biomedical data. These experiences have trained me to break down ambiguous problems, structure
            messy information, and translate findings into clear business recommendations.
          </motion.p>

          <motion.p variants={aboutChildVariants}>
            My toolkit includes Python, SQL, Excel, PowerPoint, and data visualization. I enjoy working with both
            quantitative data and qualitative evidence, especially when the goal is not just to find patterns,
            but to support better decisions.
          </motion.p>

          <motion.p variants={aboutChildVariants}>
            I am currently exploring analyst-related roles, including Data Analyst, Business Analyst,
            Strategy Analyst, and Healthcare Analytics positions. You can view my
            <a href="#experience" className="text-sky-600 hover:text-sky-700 font-semibold transition-colors mx-1">
              experience
            </a>
            ,
            <a href="#projects" className="text-sky-600 hover:text-sky-700 font-semibold mx-1 transition-colors">
              projects
            </a>
            , or
            <a href="#contact" className="text-sky-600 hover:text-sky-700 font-semibold mx-1 transition-colors">
              contact
            </a>
            me to learn more.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}