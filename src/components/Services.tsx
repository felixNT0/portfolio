import {
  FaCode,
  FaDesktop,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaUniversalAccess,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Systems Architecture",
    description:
      "Modern, responsive, and stunning UI/UX designs built on highly scalable, optimized architectures using React, Next.js, and TypeScript.",
    icon: <FaCode className="text-4xl text-purple-500" />,
    color: "shadow-purple-500/50",
  },
  {
    title: "Enterprise Desktop Products",
    description:
      "Robust, high-performance cross-platform desktop platforms utilizing Electron.js, custom operating system bindings, and secure local databases.",
    icon: <FaDesktop className="text-4xl text-blue-400" />,
    color: "shadow-blue-400/50",
  },
  {
    title: "Cross-Platform Mobile Engineering",
    description:
      "Native-speed iOS and Android mobile systems designed with offline-first synchronization, secure telemetry, and React Native/Expo.",
    icon: <FaMobileAlt className="text-4xl text-green-400" />,
    color: "shadow-green-400/50",
  },
  {
    title: "Core Performance Engineering",
    description:
      "Core Web Vitals fine-tuning, dynamic code-splitting, runtime CPU/memory profiles, and database request optimization for blazing speeds.",
    icon: <FaRocket className="text-4xl text-orange-500" />,
    color: "shadow-orange-500/50",
  },
  {
    title: "Programmatic SEO & JSON-LD",
    description:
      "Advanced structured JSON-LD data graphs, server-side render strategies, programmatic index generation, and top search placements.",
    icon: <FaSearch className="text-4xl text-blue-600" />,
    color: "shadow-blue-600/50",
  },
  {
    title: "Inclusive Engineering (WCAG)",
    description:
      "Developing deeply inclusive applications strictly complying with WCAG, complete screen-reader accessibility, and full keyboard control.",
    icon: <FaUniversalAccess className="text-4xl text-yellow-500" />,
    color: "shadow-yellow-500/50",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="w-full py-32 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full h-full relative z-10">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
                Services
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              Premium software engineering offerings tailored to scale your product and maximize impact.
            </p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-8 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ title, description, icon, color }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-8 rounded-[2rem] glass hover:scale-[1.05] transition-all duration-500 shadow-xl border-white/20 dark:border-white/5 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-all duration-700"></div>
                <div className="relative z-10 space-y-6 flex flex-col items-center">
                  <div className="p-4 bg-slate-100/50 dark:bg-white/5 rounded-2xl border border-slate-200/50 dark:border-white/5 hover:scale-110 transition-transform duration-500">
                    {icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    {title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
