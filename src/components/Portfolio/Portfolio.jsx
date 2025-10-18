import { allPortfolios } from "../../AllPortfolioDetails/AllPortfolios";
import AllPortfolios from "./AllPortfolios";

const Portfolio = () => {
  // Calculate statistics
  const totalProjects = allPortfolios.length;
  const companies = [
    ...new Set(allPortfolios.map((project) => project.company)),
  ];
  const totalCompanies = companies.length + 5;

  return (
    <div
      name="portfolio"
      className="portfolio_component w-full my-10 text-white h-auto portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:text-white text-black">
              Portfolio
            </p>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-6 my-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fca61f] dark:text-[#4db5ff]">
                {totalProjects}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fca61f] dark:text-[#4db5ff]">
                {totalCompanies}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Companies Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fca61f] dark:text-[#4db5ff]">
                4+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="700"
            className="py-6 dark:text-white text-black text-center max-w-4xl mx-auto"
          >
            With 4+ years of experience developing customer-centric products
            across E-commerce, FinTech, HealthTech, AgricTech, EdTech, and SaaS,
            I've built a diverse portfolio of successful applications. From real
            estate platforms in Dubai to agricultural solutions in Nigeria, each
            project showcases my expertise in modern JavaScript frameworks,
            responsive design, and scalable architecture. Here are some of my
            key projects organized by company and client.
          </p>
        </div>
        <AllPortfolios />
      </div>
    </div>
  );
};

export default Portfolio;
