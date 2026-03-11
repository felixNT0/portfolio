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
      icon: <FaMobileAlt className="text-3xl text-accent-500" />,
    },
    {
      id: 3,
      title: "Backend Services",
      description:
        "Developing robust APIs, handling database integrations, and managing server-side logic with Node.js and Express.",
      icon: <FaServer className="text-3xl text-primary-600" />,
    },
    {
      id: 4,
      title: "Full-Stack Solutions",
      description:
        "End-to-end product development, from database architecture to the final user interface deployment.",
      icon: <FaRocket className="text-3xl text-accent-600" />,
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
          className="pb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Elevating Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
              Through Code & Design
            </span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-6 mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Column: Stats & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3 space-y-8"
          >
            <div className="p-10 rounded-[2.5rem] glass relative overflow-hidden group border-white/20 dark:border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-700 to-primary-600 dark:from-primary-400 dark:to-primary-300 mb-2">
                  50+
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white mb-3">
                  Projects Delivered
                </div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                  Architecting high-impact digital products for global clients in <span className="text-primary-600 dark:text-primary-400">FinTech</span>, <span className="text-accent-600 dark:text-accent-400">SaaS</span>, and <span className="text-primary-500 dark:text-primary-300">E-commerce</span>.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl glass text-center group transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                7+ Countries
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
                Global Engineering Experience
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio & Services Grid */}
          <div className="md:w-2/3 space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 leading-[1.6] font-medium"
            >
              As a <span className="text-primary-600 dark:text-primary-400 font-bold">Solutions Architect</span> with 4+ years of specialized experience, I transform complex business challenges into sleek, high-performance software. My expertise spans across <span className="text-slate-900 dark:text-white font-bold underline decoration-primary-500 decoration-4 underline-offset-4">React, Next.js, and React Native</span>, delivering scalable solutions that drive real business value.
            </motion.p>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="p-8 rounded-[2rem] glass border-white/20 dark:border-white/5 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="mb-6 glass w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-white/50 dark:bg-slate-800/50">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="p-8 rounded-3xl glass border-white/20 dark:border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <svg
                    className="w-24 h-24 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                  <span className="text-2xl">🎵</span> Music & Creativity
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  Beyond architecting complex systems, I find balance in music. As a multi-instrumentalist playing both <span className="text-primary-600 dark:text-primary-400 font-bold">Keyboard</span> and <span className="text-accent-600 dark:text-accent-400 font-bold">Guitar</span>, I bring the same rhythm and precision to my code that I do to a melody.
                </p>
              </div>

              <div className="p-8 rounded-3xl glass border-white/20 dark:border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <svg
                    className="w-24 h-24 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                  <span className="text-2xl">💡</span> Global Impact
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  Whether debugging critical production issues in high-pressure environments or collaborating across time zones, I believe that <span className="text-primary-500 font-bold">Resilient Problem Solving</span> is the foundation of every successful project.
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
