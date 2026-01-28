import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/resume.pdf";

import { ReactNode } from "react";
import { useAppContext } from "../contexts/useAppContext";

interface SocialLink {
  id: number;
  child: ReactNode;
  href: string;
  style?: string;
  type?: string;
  download?: boolean;
}

function useSocialLinks() {
  const { darkMode } = useAppContext();

  const allSocialLinks: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          <p className="max-md:hidden">LinkedIn</p>
          <FaLinkedin size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt0/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <p className="max-md:hidden">GitHub</p>
          <FaGithub size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: "https://github.com/felixnt0",
    },
    {
      id: 3,
      child: (
        <>
          <p className="max-md:hidden">Email</p>
          <HiOutlineMail size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <p className="max-md:hidden">Resume</p>
          <BsFillPersonLinesFill size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: resume,
      type: "resume",
      download: true,
    },
  ];

  const allBottomSocialLinks: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt0/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: "https://github.com/felixnt0",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} style={{ color: darkMode ? "#4db5ff" : "#fca61f" }} />
        </>
      ),
      href: resume,
      download: true,
    },
    //       />
    //     </>
    //   ),
    //   href: cover_letter,
    //   download: true,
    // },
  ];
  return { allSocialLinks, allBottomSocialLinks };
}

export default useSocialLinks;
