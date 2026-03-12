import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string; // User didn't specify dates, will use generic or leave optional if needed. I'll omit period if not provided or use "Past"
  description: string;
  products?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Webloom",
    location: "Bangalore, India",
    period: "Recent",
    description:
      "Architected and delivered scalable, high-performance web applications using ReactJS, NextJS, and modern state management. Integrated complex APIs and CMS solutions (Sanity, PayloadCMS) while optimizing frontend performance by 40%.",
    products: [
      "DXB Finance",
      "AL Habtoor",
      "Aries Global",
      "DXB Start",
      "187 Studio",
      "Sobha Promotions",
      "Damac",
      "Danube",
      "Emaar",
      "Ellington",
      "Reportage",
      "Rezy",
    ],
  },
  {
    id: 2,
    role: "Frontend & Mobile Engineer",
    company: "Extension Africa",
    location: "Nigeria",
    period: "Past",
    description:
      "Spearheaded the development of cross-platform mobile apps using React Native and high-performance web interfaces with Next.js. Streamlined agricultural supply chains by building offline-first mobile solutions for agents in remote areas.",
    products: ["Extension Africa", "FarmEx Agent", "FarmEx Vendor"],
  },
  {
    id: 8, // New ID for SyncTeams
    role: "Frontend Developer",
    company: "SyncTeams Studio", // Separated Company
    location: "Chicago, US",
    period: "Contract",
    description:
      "I was the frontend developer of a no-code AI agent orchestration platform. Distributed complex state management logic and built an intuitive drag-and-drop canvas for assembling AI teams.",
    products: ["SyncTeams"],
  },
  {
    id: 3,
    role: "Full-Stack Engineer",
    company: "Starnet Tech & Ent Innovation",
    location: "Nigeria",
    period: "Past",
    description:
      "Engineered responsive e-learning platforms and interactive Telegram Mini Apps. Optimized application speed and user engagement through efficient database queries and real-time updates using React Query and Firestore.",
    products: [
      "Starnet Academy",
      "WhaleVault (Telegram Mini App)",
      "MBC Logistics",
      "Regis Crew Global",
    ],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Paperdaz",
    location: "California, US",
    period: "Past",
    description:
      "Developed and maintained enterprise-grade different digitization platforms. Implemented robust form handling, complex validation logic, and automated testing with Jest, resulting in a 30% reduction in bug reports.",
    products: ["Paperdaz", "Junologix"],
  },
  {
    id: 5,
    role: "Full-Stack Engineer",
    company: "STL",
    location: "Nigeria",
    period: "Past",
    description:
      "Collaborated in an Agile environment to build educational management systems and brand websites. Translated Figma designs into pixel-perfect, responsive React components with 100% fidelity.",
    products: ["School SQL", "Autozard", "Politics Thread", "House Acq"],
  },
  {
    id: 6,
    role: "Full-Stack Engineer",
    company: "Contract",
    location: "Remote",
    period: "Contract",
    description:
      "Delivered custom software solutions for international clients. Built scalable RESTful APIs with Node.js/Express and dynamic frontends, ensuring on-time delivery of critical business tools.",
    products: ["Billia", "Meetdeals", "Mixr360 Software", "Invoice Hub"],
  },
  {
    id: 7,
    role: "Frontend & Mobile Engineer",
    company: "Contract",
    location: "Remote",
    period: "Contract",
    description:
      "Developed fintech and investment applications using React Native and Expo. Focused on security, real-time data visualization, and seamless user experience for financial products.",
    products: ["Risevest", "Invest Yield", "Liqfinity"],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full py-24 bg-white dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
              Trajectory
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
            Architecting high-stakes digital ecosystems across global
            boundaries.
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-8 mx-auto"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 md:ml-8 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[11px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-dark-bg bg-primary-500 shadow-lg shadow-primary-500/50"></span>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 group">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-2 sm:mt-0">
                  <span className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
                    <FaBriefcase className="text-primary-500 text-sm" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
                    <FaMapMarkerAlt className="text-primary-500 text-sm" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-lg font-semibold text-slate-500 dark:text-slate-400 leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>

              {exp.products && (
                <div className="flex flex-wrap gap-3">
                  {exp.products.map((prod, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl glass border-white/20 dark:border-white/5 text-slate-600 dark:text-slate-300 hover:scale-105 transition-all cursor-default"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
