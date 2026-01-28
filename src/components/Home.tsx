import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const ScrollLink = Link as any;

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Premium Background Orbs/Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>


      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-400 tracking-wide"
            >
              Hi, I'm <span className="text-slate-900 dark:text-white">Tsowa Kolo Felix</span>
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">
                experiences
              </span>{" "}
              that matter.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            A seasoned Frontend Engineer specialized in building exceptional digital
            products, from high-performance Web Apps to cross-platform Mobile
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <ScrollLink to="portfolio" smooth duration={500}>
              <button className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-200 dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">View Portfolio</span>
                <MdOutlineKeyboardArrowRight
                  size={24}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </button>
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500}>
              <button className="px-8 py-4 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 text-slate-900 dark:text-white">
                Let's Talk
              </button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
