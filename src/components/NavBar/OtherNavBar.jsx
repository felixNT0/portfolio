import React from "react";
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
      className={`flex justify-between items-center w-full h-20 px-4 text-white navbar_bg `}
    >
      <div className="flex justify-between items-center">
        <img
          src={HeroImage}
          alt="Avatar"
          className="navbar_avatar cursor-pointer"
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

      {navBarState && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen mt-20 bg-black z-10 text-gray-500 ">
          {componentLinks.map(({ id, link }) => (
            <li
              onClick={() => changeActiveTab(link)}
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNavBarState(!navBarState)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OtherNavBar;
