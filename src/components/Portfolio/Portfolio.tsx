import { motion } from "framer-motion";
import { allPortfolios } from "../../AllPortfolioDetails/AllPortfolios";
import AllPortfolios from "./AllPortfolios";

const Portfolio = () => {
  const totalProjects = allPortfolios.length;
  const companies = Array.from(new Set(allPortfolios.map((project) => project.company)));
  const totalCompanies = companies.length + 5;

  const stats = [
    { label: "Projects Completed", value: `${totalProjects}+`, color: "text-primary-500" },
    { label: "Companies Served", value: totalCompanies, color: "text-cyan-500" },
    { label: "Years Experience", value: "4+", color: "text-indigo-500" },
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
    <div id="portfolio" className="w-full py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
            >
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">
                Portfolio
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              With 4+ years of experience across E-commerce, FinTech, and SaaS,
              I've built a diverse portfolio of successful applications. Each
              project showcases expertise in modern frameworks and scalable
              architecture.
            </motion.p>
          </div>

          {/* Statistics cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-center group hover:bg-white dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className={`text-4xl font-black mb-2 ${stat.color} transition-transform group-hover:scale-110 duration-300`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">
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
