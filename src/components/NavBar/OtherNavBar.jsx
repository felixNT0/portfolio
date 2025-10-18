import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import HeroImage from "../../assets/image.jpg";
import { useAppContext } from "../../contexts/useAppContext";
import { componentLinks } from "../../routers/componentRoutes";

function OtherNavBar({ setNavBarState, navBarState }) {
  const { changeActiveTab, currentTab, toggleShowOtherSideBar } =
    useAppContext();

  return (
    <div
      id={"navbar"}
      className={`flex justify-between items-center w-[95%] h-20 px-4  text-white navbar_bg `}
    >
      <div className="flex justify-between items-center">
        <img
          src={HeroImage}
          alt="Avatar"
          className="navbar_avatar cursor-pointer object-top"
        />

        <h1
          className="text-5xl ml-2 cursor-pointer"
          onClick={toggleShowOtherSideBar}
        >
          FKT
        </h1>
      </div>

      <ul className="hidden md:flex">
        {componentLinks.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={
                link === currentTab
                  ? "nav-links px-4 cursor-pointer capitalize font-medium text-white dark:text-white scale-105 duration-200 link-underline"
                  : "nav-links px-4 cursor-pointer capitalize font-medium text-white dark:text-white hover:scale-105 hover:text-white duration-200 link-underline"
              }
            >
              <Link
                onClick={() => changeActiveTab(link)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNavBarState(!navBarState)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navBarState ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <AnimatePresence>
        {navBarState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setNavBarState(false)}
            />
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-2xl pt-24 pb-10 flex flex-col items-center gap-4"
            >
              {componentLinks.map(({ id, link }) => (
                <li
                  onClick={() => changeActiveTab(link)}
                  key={id}
                  className="px-4 cursor-pointer capitalize py-4 text-2xl w-full text-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  <Link
                    onClick={() => setNavBarState(false)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default OtherNavBar;
