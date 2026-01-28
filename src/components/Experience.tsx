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
    description: "Designed and developed scalable, high-performance user interfaces using ReactJS, NextJS, Firestore, Pipedrive, Zoho, PayloadCMS. Developed RestApi Service. Contributed to improving development processes.",
    products: ["DXB Finance", "AL Habtoor", "Aries Global", "DXB Start", "187 Studio", "Sobha Promotions", "Damac", "Danube", "Emaar", "Ellington", "Reportage", "Rezy"]
  },
  {
    id: 2,
    role: "Frontend and Mobile Developer",
    company: "Extension Africa",
    location: "Nigeria",
    period: "Past",
    description: "Designed and developed scalable, high-performance user interfaces using ReactJS, NextJS, React Native Cli, Firestore, MMKV. Collaborated seamlessly with backend developers to integrate frontend components.",
    products: ["Extension Africa", "FarmEx Agent", "FarmEx Vendor"]
  },
  {
    id: 3,
    role: "Full-Stack Developer",
    company: "Starnet Tech & Ent Innovation",
    location: "Nigeria",
    period: "Past",
    description: "Designed and developed responsive UIs for e-learning platforms using ReactJS/NextJS. Optimized UX with React Query/Firestore. Developed Telegram bots and backend APIs using Node.js/Express/MongoDB.",
    products: ["Starnet Academy", "WhaleVault (Telegram Mini App)", "MBC Logistics", "Regis Crew Global"]
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Paperdaz",
    location: "California, US",
    period: "Past",
    description: "Designed and developed scalable UIs using ReactJS, Vite, and NextJs. Extensive usage of Redux and React Query. Wrote unit tests in Jest.",
    products: ["Paperdaz", "Junologix"]
  },
  {
    id: 5,
    role: "Full-Stack Developer",
    company: "STL",
    location: "Nigeria",
    period: "Past",
    description: "Designed and developed UIs using ReactJS, Vite, NextJS. Collaborated with product design team using Figma. Experienced with unit tests and Agile environment.",
    products: ["School SQL", "Autozard", "Politics Thread", "House Acq"]
  },
  {
    id: 6,
    role: "Full-Stack Developer",
    company: "Contract",
    location: "Remote",
    period: "Contract",
    description: "Built and maintained backend APIs/services using Node.js, Express, MongoDB. Integrated with frontend apps using React/Next.js. Collaborated with product teams.",
    products: ["Billia", "Meetdeals", "Mixr360 Software", "Invoice Hub"]
  },
  {
    id: 7,
    role: "Frontend Engineer and Mobile Developer",
    company: "Contract",
    location: "Remote",
    period: "Contract",
    description: "Using React Native for apps and React/Vue/Next.js for websites. Collaborated with product teams to implement new features.",
    products: ["Risevest", "Invest Yield", "Liqfinity", "Syncteams Studio"]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="w-full py-20 bg-slate-50 dark:bg-dark-bg/50 overflow-hidden">
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
