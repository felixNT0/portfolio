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
    title: "Frontend Web Development",
    description:
      "Modern, responsive, and stunning UI/UX designs using React, Next.js, Vue, and premium glassmorphic aesthetics.",
    icon: <FaCode className="text-4xl text-purple-500" />,
    color: "shadow-purple-500/50",
  },
  {
    title: "Desktop Application Development",
    description:
      "Cross-platform desktop applications for macOS, Windows, and Linux using Electron.js and other modern technologies.",
    icon: <FaDesktop className="text-4xl text-blue-400" />,
    color: "shadow-blue-400/50",
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance, native-feeling mobile applications for iOS and Android using React Native/Expo.",
    icon: <FaMobileAlt className="text-4xl text-green-400" />,
    color: "shadow-green-400/50",
  },
  {
    title: "Performance & Website Optimization",
    description:
      "High-performance tuning, Core Web Vitals optimization, and best-in-class loading speeds for seamless user experiences.",
    icon: <FaRocket className="text-4xl text-orange-500" />,
    color: "shadow-orange-500/50",
  },
  {
    title: "SEO Optimization & JSON-LD",
    description:
      "Professional-grade metadata, programmatic SEO, and advanced search engine ranking strategies.",
    icon: <FaSearch className="text-4xl text-blue-600" />,
    color: "shadow-blue-600/50",
  },
  {
    title: "Web Accessibility (a11y)",
    description:
      "Ensuring applications meet WCAG standards, providing inclusive experiences for all users with screen readers and keyboard navigation.",
    icon: <FaUniversalAccess className="text-4xl text-yellow-500" />,
    color: "shadow-yellow-500/50",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="w-full min-h-screen p-4 py-32 flex flex-col justify-center items-center text-white bg-gradient-to-b from-gray-800 to-black dark:from-dark-bg dark:to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Services
          </p>
          <p className="py-6">
            These are the premium services I offer to help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {services.map(({ title, description, icon, color }, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 duration-300 ${color}`}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {title}
              </h3>
              <p className="text-sm font-light text-center text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
