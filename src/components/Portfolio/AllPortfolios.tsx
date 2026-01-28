import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { allPortfolios, PortfolioItem } from "../../AllPortfolioDetails/AllPortfolios";

function AllPortfolios() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Group projects by company
  const groupedProjects = allPortfolios.reduce<Record<string, PortfolioItem[]>>((acc, project) => {
    if (!acc[project.company]) {
      acc[project.company] = [];
    }
    acc[project.company]!.push(project);
    return acc;
  }, {});

  // Get all unique companies
  const companies = ["All", ...Object.keys(groupedProjects)];

  // Filter projects based on selection and search
  const filteredProjects = (Object.entries(groupedProjects) as [string, PortfolioItem[]][]).reduce<Record<string, PortfolioItem[]>>(
    (acc, [company, projects]) => {
      if (selectedCompany !== "All" && selectedCompany !== company) {
        return acc;
      }

      const filteredCompanyProjects = projects.filter(
        (project: PortfolioItem) =>
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

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const getFallbackImage = (company: string) => {
    const fallbackImages: Record<string, string> = {
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
    <div className="space-y-12">
      {/* Search and Filter Controls */}
      <div className="space-y-8 bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by project or tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 text-sm border-0 rounded-2xl bg-white dark:bg-dark-bg text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-white/10 focus:ring-2 focus:ring-primary-500 transition-all"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-slate-400"
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

          {/* Company Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  selectedCompany === company
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                    : "bg-white dark:bg-dark-bg text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-primary-500"
                }`}
              >
                {company}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {(selectedCompany !== "All" || searchTerm) && (
          <div className="flex justify-center border-t border-slate-200 dark:border-white/10 pt-4">
            <button
              onClick={clearFilters}
              className="text-sm font-bold text-primary-500 hover:text-primary-600 underline underline-offset-4 decoration-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      {Object.keys(filteredProjects).length > 0 ? (
        <motion.div layout className="space-y-20">
          <AnimatePresence>
            {(Object.entries(filteredProjects) as [string, PortfolioItem[]][]).map(([company, projects]) => (
              <motion.div
                key={company}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-widest">
                    {company}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent"></div>
                </div>
                <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={id}
                        className="group flex flex-col h-full rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-500"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={imageErrors[id] ? getFallbackImage(company) : src}
                            alt={name}
                            loading="lazy"
                            decoding="async"
                            className={`w-full h-40 object-fit object-center transition-transform duration-700 group-hover:scale-110 ${className}`}
                            onError={() => handleImageError(id)}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 space-y-4">
                          <div className="space-y-2 flex-1">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                              {name}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                              {disc}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            {link && (
                              <button
                                className="w-full px-5 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm transition-all hover:bg-primary-600 dark:hover:bg-primary-50 hover:text-white dark:hover:text-primary-600"
                                onClick={() => window.open(link, "_blank")}
                              >
                                Explore Project
                              </button>
                            )}
                            {(appLink || webAppLink) && (
                              <button
                                className="w-full px-5 py-3 rounded-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                                onClick={() => window.open(appLink || webAppLink, "_blank")}
                              >
                                {appLink ? "Download App" : "Open Web App"}
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-24 bg-slate-50 dark:bg-white/5 rounded-3xl border border-dashed border-slate-200 dark:border-white/10">
          <div className="text-5xl mb-6">✨</div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            Try adjusting your search terms or company filter
          </p>
        </div>
      )}
    </div>
  );
}

export default AllPortfolios;
