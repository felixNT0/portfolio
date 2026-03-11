import { motion } from "framer-motion";
import { allPortfolios } from "../../AllPortfolioDetails/AllPortfolios";
import AllPortfolios from "./AllPortfolios";

const Portfolio = () => {
  const totalProjects = allPortfolios.length;
  const companies = Array.from(
    new Set(allPortfolios.map((project) => project.company)),
  );
  const totalCompanies = companies.length + 5;

  const stats = [
    {
      label: "Projects Completed",
      value: `${totalProjects}+`,
      color: "text-primary-500",
    },
    {
      label: "Companies Served",
      value: totalCompanies,
      color: "text-accent-500",
    },
    { label: "Years Experience", value: "4+", color: "text-primary-600" },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="projects" className="w-full py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
            >
              Curated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
                Portfolio
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              A showcase of <span className="text-slate-900 dark:text-white font-bold">50+ Enterprise-Grade Solutions</span> across FinTech, E-commerce, and SaaS. Each project is architected for maximum scale, performance, and user impact.
            </motion.p>
          </div>

          {/* Statistics cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-10 rounded-[2.5rem] glass text-center group hover:scale-[1.05] transition-all duration-500 border-white/20 dark:border-white/5"
              >
                <div
                  className={`text-5xl font-black mb-3 ${stat.color} transition-transform group-hover:scale-110 duration-500`}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AllPortfolios />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
