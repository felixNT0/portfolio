import { motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useAppContext } from "../../contexts/useAppContext";
import { componentLinks } from "../../routers/componentRoutes";

const ScrollLink = Link as any;

interface MainNavBarProps {
  setNav: (nav: boolean) => void;
  nav: boolean;
}

function MainNavBar({ setNav, nav }: MainNavBarProps) {
  const { changeActiveTab, currentTab, toggleShowOtherSideBar, darkMode, toggleDarkMode } =
    useAppContext();

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-4 sm:px-8 text-slate-900 dark:text-white glass sticky top-0 z-[100] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mr-4 pr-6 border-r border-slate-200/50 dark:border-white/10">
        <h1
          className="text-2xl font-black tracking-tighter cursor-pointer bg-gradient-to-r from-primary-600 to-accent dark:from-primary-400 dark:to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          onClick={toggleShowOtherSideBar}
        >
          FKT
        </h1>
      </div>

      <ul className="hidden md:flex items-center gap-6">
        {componentLinks.map(({ id, link }) => {
          const isActive = currentTab === link;
          return (
            <li key={id} className="relative group">
              <ScrollLink
                onClick={() => changeActiveTab(link)}
                to={link}
                smooth
                spy={true}
                offset={-70}
                onSetActive={() => changeActiveTab(link)}
                duration={500}
                className={`px-3 py-2 cursor-pointer capitalize font-medium text-sm transition-all duration-300 flex items-center gap-1 ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400"
                }`}
              >
                {link}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 rounded-full"
                  />
                )}
              </ScrollLink>
            </li>
          );
        })}
        
        {/* Desktop Theme Toggle */}
        <li className="ml-4 pl-6 border-l border-slate-200/50 dark:border-white/10">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-slate-100/50 dark:bg-white/5 text-slate-600 dark:text-accent-400 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 border border-slate-200/50 dark:border-white/5"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </li>
      </ul>

      <div className="flex items-center gap-4 md:hidden">
        {/* Mobile Theme Toggle (Visible on bar) */}
         <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl bg-slate-100/50 dark:bg-white/5 text-slate-600 dark:text-accent-400 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-[110] text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile Drawer moved to MobileDrawer.tsx */}
    </div>
  );
}

export default MainNavBar;
