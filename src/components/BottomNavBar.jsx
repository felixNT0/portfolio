import React, { useState } from "react";
import resumePdf from "../assets/resume.pdf";
import { useAppContext } from "../contexts/useAppContext";
import useSocialLinks from "../hooks/useSocialLinks";

const BottomNavBar = () => {
  const { allBottomSocialLinks } = useSocialLinks();
  const { showOtherSideBar } = useAppContext();

  const [toggleModal, setToggleModal] = useState(false);

  const closeModal = () => {
    setToggleModal(false);
    document.getElementById("showConfimationModal").style.display = "none";
  };

  const openModal = () => {
    setToggleModal(true);
    document.getElementById("showConfimationModal").style.display = "block";
  };

  return (
    <>
      <div
        data-aos={!showOtherSideBar ? "slide-down" : "zoom-in"}
        data-aos-delay="50"
        className="bottom_navbar bottom-[0.5%] fixed duration-300"
      >
        {allBottomSocialLinks.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center icon_spacing w-[500px] duration-300 bg-gray-700 bg-[#0000004d]  side_bar_style"
            }
          >
            {download ? (
              <div
                className="flex justify-between items-center w-full text-white cursor-pointer"
                onClick={() => openModal()}
              >
                {child}
              </div>
            ) : (
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            )}
          </li>
        ))}
      </div>
      <div>
        {toggleModal ? (
          <div id="showConfimationModal" class="modal">
            <div className="modal-content animate">
              <span onClick={closeModal} className="close" title="Close Modal">
                &times;
              </span>
              <div className="container ">
                <h1 className="text-center text-[#fca61f] dark:text-[#4db5ff] text-3xl font-bold welcome_text">
                  Did you want to Preview or Download the resume?
                </h1>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="group text-white px-6 py-3 my-5 flex justify-center align-center items-center rounded-md bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Preview
                </a>
                <a
                  href={resumePdf}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="group text-white px-6 py-3 my-5 flex justify-center align-center items-center rounded-md bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BottomNavBar;
