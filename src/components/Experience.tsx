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
    role: "Senior Full-Stack & Frontend Systems Engineer",
    company: "Webloom",
    location: "Bangalore, India (Remote)",
    period: "Recent",
    description:
      "Architected, developed, and optimized premium, enterprise-grade real estate platforms and SaaS applications utilizing Next.js, React, and advanced state-management solutions. Created reusable micro-frontends, integrated headless CMS layers (Sanity, PayloadCMS), and spearheaded core performance optimization initiatives, boosting Core Web Vitals and page speeds by 40%.",
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
    id: 9,
    role: "Frontend Engineer",
    company: "Rhenari",
    location: "US (Remote)",
    period: "Recent (2026)",
    description:
      "Engineered the customer-facing web application and interactive dashboard for Rhenari's AI-powered team workflow and roadmap monitor. Built high-fidelity real-time telemetry graphs compiling signal mapping (Slack, GitHub, Jira), and integrated robust conversational AI capabilities directly within Microsoft Teams, ensuring reliable roadmap alignment for engineering teams.",
    products: ["Rhenari"],
  },
  {
    id: 2,
    role: "Lead Frontend & Mobile Engineer",
    company: "Extension Africa",
    location: "Nigeria (Remote)",
    period: "Past",
    description:
      "Spearheaded agricultural supply-chain digitization and led a talented development team to build offline-first mobile applications in React Native and high-performance interfaces in Next.js. Engineered resilient local database syncing, robust geo-tracking, and highly accessible interfaces, enabling rural agents to transact securely across low-bandwidth environments.",
    products: ["Extension Africa", "FarmEx Agent", "FarmEx Vendor"],
  },
  {
    id: 8,
    role: "Frontend Engineer",
    company: "SyncTeams Studio",
    location: "Chicago, US (Remote)",
    period: "Contract",
    description:
      "Developed the core client-facing interfaces for this no-code AI agent orchestration platform. Designed the intuitive drag-and-drop canvas for assembling complex AI team workflows, distributed complex state-management architectures, and engineered critical performance and visual design improvements for the platform's primary landing page.",
    products: ["SyncTeams"],
  },
  {
    id: 3,
    role: "Senior Full-Stack Developer",
    company: "Starnet Tech & Ent Innovation",
    location: "Nigeria (Hybrid)",
    period: "Past",
    description:
      "Engineered interactive e-learning systems, transactional Telegram Mini Apps, and blockchain-integrated utilities. Fused modern frontend architectures (React/Vite) with highly optimized real-time databases, reducing query latencies and boosting overall user retention.",
    products: [
      "Starnet Academy",
      "WhaleVault (Telegram Mini App)",
      "MBC Logistics",
      "Regis Crew Global",
    ],
  },
  {
    id: 4,
    role: "Frontend Engineer",
    company: "Paperdaz",
    location: "California, US (Remote)",
    period: "Past",
    description:
      "Designed and maintained high-security office digitization platforms. Developed comprehensive form builders, integrated secure document signing workflows, and established strict end-to-end automated testing protocols, ensuring robust cross-browser compatibility and zero regression issues.",
    products: ["Paperdaz", "Junologix"],
  },
  {
    id: 5,
    role: "Senior Full-Stack & Systems Engineer",
    company: "STL",
    location: "Nigeria (Remote)",
    period: "Past",
    description:
      "Coordinated cross-functional teams to engineer comprehensive education management portals, real-time community boards, and real estate matching platforms. Translated high-fidelity designs into fluid, responsive interfaces while maintaining a robust full-stack API architecture.",
    products: ["School SQL", "Autozard", "Politics Thread", "House Acq"],
  },
  {
    id: 6,
    role: "Senior Software Developer",
    company: "Contract",
    location: "Remote",
    period: "Contract",
    description:
      "Delivered custom software solutions for international clients. Built scalable RESTful APIs with Node.js/Express and dynamic frontends, ensuring on-time delivery of critical business tools.",
    products: ["Billia", "Meetdeals", "Mixr360 Software", "Invoice Hub"],
  },
  {
    id: 7,
    role: "Senior Mobile & Systems Engineer",
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
      className="w-full py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
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
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
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
