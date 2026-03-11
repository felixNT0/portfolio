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
      {/* Premium Background Orbs/Glows are contextually handled in body, 
          but adding micro-accents here for depth */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-accent-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new Roles
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase"
            >
              Hi, I'm{" "}
              <span className="text-slate-900 dark:text-white font-black bg-slate-200/50 dark:bg-white/10 px-3 py-1 rounded-lg">
                Felix Kolo Tsowa
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
                Scalable Solutions
              </span>{" "}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A{" "}
            <span className="text-slate-900 dark:text-white font-bold">
              Frontend Engineer
            </span>{" "}
            & Full-Stack Developer specializing in high-performance Web Apps and
            cross-platform Mobile solutions for FinTech and SaaS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-8"
          >
            <ScrollLink to="projects" smooth duration={500}>
              <button className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-primary-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">Explore Work</span>
                <MdOutlineKeyboardArrowRight
                  size={26}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </button>
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500}>
              <button className="glass px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 text-slate-900 dark:text-white border-slate-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-slate-800/80">
                Let's Collaborate
              </button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
