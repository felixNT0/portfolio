import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaCode, FaMobileAlt, FaRocket, FaServer } from "react-icons/fa";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const About = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting responsive, pixel-perfect web interfaces using React, Next.js, and modern CSS frameworks like Tailwind.",
      icon: <FaCode className="text-3xl text-primary-500" />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications for iOS and Android using React Native with native performance.",
      icon: <FaMobileAlt className="text-3xl text-cyan-500" />,
    },
    {
      id: 3,
      title: "Backend Services",
      description:
        "Developing robust APIs, handling database integrations, and managing server-side logic with Node.js and Express.",
      icon: <FaServer className="text-3xl text-indigo-500" />,
    },
    {
      id: 4,
      title: "Full-Stack Solutions",
      description:
        "End-to-end product development, from database architecture to the final user interface deployment.",
      icon: <FaRocket className="text-3xl text-purple-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="about"
      className="w-full py-20 bg-slate-50 dark:bg-dark-bg/50 overflow-hidden"
    >
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full h-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">
              Me & My Services
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mt-4 mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column: Stats & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3 space-y-6"
          >
            <div className="p-8 rounded-3xl glass border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 mb-2">
                  50+
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Projects Completed
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                  Delivering high-impact digital solutions for global clients
                  across FinTech, SaaS, and E-commerce.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Global Reach
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Successfully collaborated with 10+ companies and startups across
                7 different countries.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio & Services Grid */}
          <div className="md:w-2/3 space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium"
            >
              Frontend Engineer with{" "}
              <span className="text-primary-500 font-bold">
                4+ years of experience
              </span>{" "}
              developing customer-centric products in FinTech, AgriTech,
              E-commerce, Real Estate, Logistics, EdTech, and SaaS. Skilled in
              modern JavaScript frameworks (React, Next.js, Vue.js, Svelte,
              React Native, Expo, Flutter, Tailwind), HTML, CSS, and responsive
              design. Proven track record in enhancing user experiences and
              collaborating effectively with cross-functional teams to deliver
              high-quality software solutions.
            </motion.p>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="mb-4 bg-slate-50 dark:bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Music & Fun Fact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-100 dark:border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg
                    className="w-24 h-24 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  🎵 Music Enthusiast
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                  Beyond coding, I express creativity through music. I play both
                  the{" "}
                  <span className="font-semibold text-indigo-500">
                    Keyboard
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-purple-500">Guitar</span>,
                  finding rhythm in melodies just as I find logic in code.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/5 to-cyan-500/5 border border-primary-100 dark:border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg
                    className="w-24 h-24 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  💡 Fun Fact
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                  I once debugged a critical production issue while on a hiking
                  trip with spotty internet—proving that{" "}
                  <span className="font-semibold text-primary-500">
                    problem-solving knows no boundaries!
                  </span>{" "}
                  🏔️
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-primary-500 pl-4 py-2"
            >
              "Whether you need a complex web platform, a sleek mobile app, or a
              secure backend system, I have the full-stack expertise to allow
              your business to scale."
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
