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
    location: "Remote",
    period: "Contract",
    description:
      "I was the frontend developering of a no-code AI agent orchestration platform. Distributed complex state management logic and built an intuitive drag-and-drop canvas for assembling AI teams.",
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
      "Developed fintech and investment applications using React Native and Vue.js. Focused on security, real-time data visualization, and seamless user experience for financial products.",
    products: ["Risevest", "Invest Yield", "Liqfinity"],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full py-20 bg-slate-50 dark:bg-dark-bg/50 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">
              Experience
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            My professional journey across different companies and projects.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-dark-bg bg-primary-500"></span>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
                  <span className="flex items-center gap-1">
                    <FaBriefcase className="text-primary-500" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.products && (
                <div className="flex flex-wrap gap-2">
                  {exp.products.map((prod, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
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
