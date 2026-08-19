import { motion } from "framer-motion";
import { allSkills } from "../AllSkillsDetails/AllSkills";
import { 
  FaUsers, 
  FaLightbulb, 
  FaSync, 
  FaChessKnight, 
  FaHandshake, 
  FaTasks 
} from "react-icons/fa";

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
    <div id="skills" className="w-full py-24 bg-transparent relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-96 h-96 bg-accent-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full h-full relative z-10">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
                Ecosystem
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              A meticulously curated toolkit for architecting high-performance digital solutions at scale.
            </p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-8 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8"
          >
            {allSkills.map(({ id, src, title, style }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="group relative h-48 rounded-[2rem] glass border-white/20 dark:border-white/5 flex flex-col items-center justify-center p-8 transition-all duration-500 hover:scale-[1.05] cursor-default shadow-xl"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-700"></div>
                
                <div className="relative mb-6 transition-all duration-700 group-hover:scale-125 group-hover:rotate-6">
                  <img 
                    src={src} 
                    alt={`${title} - Technical Skill of Felix Kolo Tsowa`} 
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                
                <p className="relative text-center text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-primary-500 transition-colors duration-500">
                  {title}
                </p>
                
                <div className={`absolute bottom-6 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 ${style} shadow-lg shadow-primary-500/20`}></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills Section */}
          <div className="pt-24 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
                  Soft Skills
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-xl font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                Driving technical excellence through leadership, strategic thinking, and seamless collaboration.
              </p>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-8 mx-auto"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { title: "Agile & Scrum", icon: <FaSync />, desc: "Expert in iterative delivery and robust project management." },
                { title: "Tech Leadership", icon: <FaChessKnight />, desc: "Guiding teams through complex architectural decisions." },
                { title: "Problem Solving", icon: <FaLightbulb />, desc: "Approaching challenges with analytical and creative depth." },
                { title: "Team Collaboration", icon: <FaUsers />, desc: "Fostering high-performance cultures across remote teams." },
                { title: "Product Strategy", icon: <FaTasks />, desc: "Aligning technical roadmaps with core business goals." },
                { title: "Mentorship", icon: <FaHandshake />, desc: "Empowering engineers through code reviews and guidance." },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group p-8 rounded-[2rem] glass border-white/20 dark:border-white/5 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-all duration-700"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="text-3xl text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-500">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      {skill.title}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
