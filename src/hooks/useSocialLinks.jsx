import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resume from "../assets/resume.pdf";
import cover_letter from "../assets/cover_letter.pdf";
import { SlEnvolopeLetter } from "react-icons/sl";

import { useAppContext } from "../contexts/useAppContext";

function useSocialLinks() {
  const { darkMode } = useAppContext();
  const allSocialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn{" "}
          <FaLinkedin
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt001/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub{" "}
          <FaGithub
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "https://github.com/felixnt0",
    },
    {
      id: 3,
      child: (
        <>
          Email{" "}
          <HiOutlineMail
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter{" "}
          <FaTwitter
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "https://twitter.com/felixnt001",
      style: "rounded-br-md",
    },
    {
      id: 5,
      child: (
        <>
          Resume{" "}
          <BsFillPersonLinesFill
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: resume,
      type: "resume",
      download: true,
    },
    {
      id: 6,
      child: (
        <>
          Cover Letter
          <SlEnvolopeLetter
            size={30}
            style={{
              color: darkMode ? "#4db5ff" : "#fca61f",
              marginLeft: "7px",
            }}
          />
        </>
      ),
      href: cover_letter,
      type: "cover_letter",
      download: true,
    },
  ];

  const allBottomSocialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "https://www.linkedin.com/in/felixnt001/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "https://github.com/felixnt0",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "mailto:tsowafelix0@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaTwitter
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: "https://twitter.com/felixnt001",
      style: "rounded-br-md",
    },
    {
      id: 5,
      child: (
        <>
          <BsFillPersonLinesFill
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: resume,
      download: true,
    },
    {
      id: 6,
      child: (
        <>
          <SlEnvolopeLetter
            size={30}
            style={{ color: darkMode ? "#4db5ff" : "#fca61f" }}
          />
        </>
      ),
      href: cover_letter,
      download: true,
    },
  ];
  return { allSocialLinks, allBottomSocialLinks };
}

export default useSocialLinks;
