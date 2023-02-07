import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/resume.pdf";
import { useAppContext } from "../contexts/useAppContext";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt001/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/felixnt0",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/felixnt001",
      style: "rounded-br-md",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },
  ];

  const { showOtherSideBar } = useAppContext();

  return (
    <div
      data-aos={!showOtherSideBar ? "slide-down" : "slide-up"}
      data-aos-delay="50"
      className="hidden lg:flex flex-col top-[35%] left-0 fixed"
    >
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;