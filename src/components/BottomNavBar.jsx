import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/resume.pdf";
import { useAppContext } from "../contexts/useAppContext";

const BottomNavBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt001/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/felixnt0",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/felixnt001",
    },
    {
      id: 5,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },
  ];

  const { showOtherSideBar } = useAppContext();

  return (
    <div
      data-aos={!showOtherSideBar ? "slide-down" : "zoom-in"}
      data-aos-delay="50"
      className="bottom_navbar bottom-[1%] fixed duration-300"
    >
      {links.map(({ id, child, href, download }) => (
        <li
          key={id}
          className={
            "flex justify-between items-center icon_spacing w-[500px] duration-300 bg-gray-700"
          }
        >
          <a
            href={href}
            className=" cursor-pointer w-full flex justify-between items-center w-full text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
    </div>
  );
};

export default BottomNavBar;
