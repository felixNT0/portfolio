import { motion } from "framer-motion";
import { allSkills } from "../AllSkillsDetails/AllSkills";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div id="skills" className="w-full py-20 bg-slate-50 dark:bg-dark-bg/50">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full h-full">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">
                Skills
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
              A comprehensive toolkit of modern technologies and frameworks I leverage
              to build high-performance digital products.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6"
          >
            {allSkills.map(({ id, src, title, style }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="group relative h-40 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-2 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>
                
                <div className="relative mb-4 transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={src} 
                    alt={title} 
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                
                <p className="relative text-center text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {title}
                </p>
                
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${style}`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
