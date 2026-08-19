import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/resume.pdf";

import { ReactNode } from "react";

interface SocialLink {
  id: number;
  child: ReactNode;
  label: string;
  href: string;
  style?: string;
  type?: string;
  download?: boolean;
}

function useSocialLinks() {

  const allSocialLinks: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          <p className="max-md:hidden">LinkedIn</p>
          <FaLinkedin size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt0/",
      label: "LinkedIn",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <p className="max-md:hidden">GitHub</p>
          <FaGithub size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: "https://github.com/felixnt0",
      label: "GitHub",
    },
    {
      id: 3,
      child: (
        <>
          <p className="max-md:hidden">Email</p>
          <HiOutlineMail size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
      label: "Email",
    },
    {
      id: 4,
      child: (
        <>
          <p className="max-md:hidden">Resume</p>
          <BsFillPersonLinesFill size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: resume,
      label: "Resume",
      type: "resume",
      download: true,
    },
  ];

  const allBottomSocialLinks: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt0/",
      label: "LinkedIn",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: "https://github.com/felixnt0",
      label: "GitHub",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
      label: "Email",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} style={{ color: "#be9755" }} />
        </>
      ),
      href: resume,
      label: "Resume",
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
