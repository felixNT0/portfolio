import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useAppContext } from "../contexts/useAppContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const { changeActiveTab, currentTab, toggleShowOtherSideBar } =
    useAppContext();

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-black nav`}
    >
      <div>
        <h1
          className="text-5xl ml-2 cursor-pointer"
          onClick={toggleShowOtherSideBar}
        >
          FKT
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={
                currentTab === link
                  ? "nav-links px-4 cursor-pointer capitalize font-medium text-black dark:text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                  : "nav-links px-4 cursor-pointer capitalize font-medium text-black dark:text-gray-500 scale-105 text-white duration-200 link-underline"
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
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen mt-20 bg-black z-10 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li
              onClick={() => changeActiveTab(link)}
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
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
};

export default NavBar;
