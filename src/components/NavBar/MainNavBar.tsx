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
      className="flex justify-between items-center w-full h-20 px-8 text-slate-900 dark:text-white bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 mr-4 pr-6 border-r border-slate-200 dark:border-white/10">
        {/* <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
          <img
            src={HeroImage}
            alt="Avatar"
            className="relative navbar_avatar cursor-pointer object-top border-2 border-white dark:border-slate-800"
          />
        </div> */}
        <h1
          className="text-2xl font-bold tracking-tighter cursor-pointer hover:text-primary-500 transition-colors"
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
        <li className="ml-4 pl-6 border-l border-slate-200 dark:border-white/10">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none"
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
