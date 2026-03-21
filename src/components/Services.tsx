import React from "react";
import { FaSearch, FaRocket, FaCode, FaServer } from "react-icons/fa";

const services = [
  {
    title: "SEO Optimization",
    description: "Professional-grade metadata, JSON-LD, and advanced search engine ranking strategies to make your brand stand out.",
    icon: <FaSearch className="text-4xl text-blue-500" />,
    color: "shadow-blue-500/50",
  },
  {
    title: "Website Optimization",
    description: "High-performance tuning, image optimization, and best-in-class loading speeds for a seamless user experience.",
    icon: <FaRocket className="text-4xl text-orange-500" />,
    color: "shadow-orange-500/50",
  },
  {
    title: "Frontend Development",
    description: "Modern, responsive, and stunning UI/UX designs using React, Next.js, and premium glassmorphic aesthetics.",
    icon: <FaCode className="text-4xl text-purple-500" />,
    color: "shadow-purple-500/50",
  },
  {
    title: "Backend Development",
    description: "Scalable APIs, secure database management, and robust server-side logic to power your complex applications.",
    icon: <FaServer className="text-4xl text-green-500" />,
    color: "shadow-green-500/50",
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
          <p className="py-6">These are the premium services I offer to help your business grow</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
          {services.map(({ title, description, icon, color }, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 duration-300 ${color}`}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
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
