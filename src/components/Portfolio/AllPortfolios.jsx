import { useState } from "react";
import { allPortfolios } from "../../AllPortfolioDetails/AllPortfolios";

function AllPortfolios() {
  const [imageErrors, setImageErrors] = useState({});
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Group projects by company
  const groupedProjects = allPortfolios.reduce((acc, project) => {
    if (!acc[project.company]) {
      acc[project.company] = [];
    }
    acc[project.company].push(project);
    return acc;
  }, {});

  // Get all unique companies
  const companies = ["All", ...Object.keys(groupedProjects)];

  // Filter projects based on selection and search
  const filteredProjects = Object.entries(groupedProjects).reduce(
    (acc, [company, projects]) => {
      if (selectedCompany !== "All" && selectedCompany !== company) {
        return acc;
      }

      const filteredCompanyProjects = projects.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.disc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.company.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredCompanyProjects.length > 0) {
        acc[company] = filteredCompanyProjects;
      }

      return acc;
    },
    {}
  );

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const getFallbackImage = (company) => {
    const fallbackImages = {
      Webloom:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      "Extension Africa":
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "Starnet Tech":
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      Paperdaz:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      STL: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      Contract:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      Legacy:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    };
    return (
      fallbackImages[company] ||
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    );
  };

  const clearFilters = () => {
    setSelectedCompany("All");
    setSearchTerm("");
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#fca61f] dark:focus:ring-[#4db5ff] focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Company Filter */}
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {companies.map((company) => (
            <button
              key={company}
              onClick={() => setSelectedCompany(company)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCompany === company
                  ? "bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {company}
            </button>
          ))}
        </div>

        {/* Clear Filters */}
        {(selectedCompany !== "All" || searchTerm) && (
          <div className="flex justify-center">
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      {Object.keys(filteredProjects).length > 0 ? (
        <div className="space-y-12">
          {Object.entries(filteredProjects).map(([company, projects]) => (
            <div key={company} className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-[#fca61f] dark:text-[#4db5ff] border-b-2 border-[#fca61f] dark:border-[#4db5ff] pb-2">
                {company}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {projects.map(
                  ({
                    id,
                    src,
                    link,
                    name,
                    disc,
                    appLink,
                    company,
                    className,
                    webAppLink,
                  }) => (
                    <div
                      key={id}
                      data-aos="zoom-in-down"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                      className="cursor-pointer shadow-md shadow-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={imageErrors[id] ? getFallbackImage(company) : src}
                        alt={name}
                        className={`w-full h-48 object-fit object-center duration-200 hover:scale-105 ${className}`}
                        onError={() => handleImageError(id)}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-[#fca61f] dark:text-[#4db5ff] mb-2 text-center">
                          {name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {disc}
                        </p>
                        <div className="flex flex-col space-y-2">
                          {link && (
                            <button
                              className="w-full px-4 py-2 duration-200 hover:scale-105 rounded bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer dark:text-white text-black font-medium hover:bg-[#f39c12] dark:hover:from-cyan-600 dark:hover:to-blue-600 transition-colors"
                              onClick={() => window.open(link, "_blank")}
                            >
                              View Project
                            </button>
                          )}
                          {appLink && (
                            <button
                              className="w-full px-4 py-2 duration-200 hover:scale-105 rounded bg-green-600 hover:bg-green-700 cursor-pointer text-white font-medium transition-colors"
                              onClick={() => window.open(appLink, "_blank")}
                            >
                              Download App
                            </button>
                          )}
                          {webAppLink && (
                            <button
                              className="w-full px-4 py-2 duration-200 hover:scale-105 rounded bg-green-600 hover:bg-green-700 cursor-pointer text-white font-medium transition-colors"
                              onClick={() => window.open(webAppLink, "_blank")}
                            >
                              Open Web App
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            Try adjusting your search terms or company filter
          </p>
        </div>
      )}
    </div>
  );
}

export default AllPortfolios;
