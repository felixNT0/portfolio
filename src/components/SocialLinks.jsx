import { useState } from "react";

import resumePdf from "../assets/resume.pdf";
import cover_letter from "../assets/cover_letter.pdf";

import { useAppContext } from "../contexts/useAppContext";
import useSocialLinks from "../hooks/useSocialLinks";

const SocialLinks = () => {
  const { allSocialLinks } = useSocialLinks();

  const { showOtherSideBar } = useAppContext();

  const [toggleModal, setToggleModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const closeModal = () => {
    setToggleModal(false);
    setModalType("");
    const confirmationModal = document.getElementById("showConfirmationModal");
    if (confirmationModal) {
      confirmationModal.style.display = "none";
    }
  };

  const openModal = (ModalType) => {
    setToggleModal(true);
    setModalType(ModalType);
    const confirmationModal = document.getElementById("showConfirmationModal");
    if (confirmationModal) {
      confirmationModal.style.display = "block";
    }
  };

  return (
    <>
      <div
        data-aos={!showOtherSideBar ? "slide-down" : "slide-up"}
        data-aos-delay="50"
        className="max-md:bottom_navbar max-sm:hidden flex flex-col max-md:bottom-5 max-md:right-[50%] max-md:left-[50%] max-md:justify-center max-md:items-center max-md:flex-row lg:top-[35%]  lg:left-0 fixed "
      >
        <ul>
          {allSocialLinks.map(({ id, child, href, style, download, type }) => {
            return (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#0000004d] side_bar_style" +
                  " " +
                  style
                }
              >
                {download ? (
                  <div
                    className="flex justify-between items-center w-full text-white cursor-pointer"
                    onClick={() => openModal(type)}
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
            );
          })}
        </ul>
      </div>
      {toggleModal ? (
        <div id="showConfimationModal" className="modal">
          <div className="modal-content animate">
            <span onClick={closeModal} className="close" title="Close Modal">
              &times;
            </span>
            <div className="container ">
              <h1 className="text-center text-black text-1xl font-bold welcome_text">
                Did you want to{" "}
                <span className="text-[#fca61f] dark:text-[#4db5ff]">
                  Preview
                </span>{" "}
                or{" "}
                <span className="text-[#fca61f] dark:text-[#4db5ff]">
                  Download
                </span>{" "}
                the {modalType === "resume" ? "resume" : "cover letter"}
              </h1>

              <a
                href={modalType === "resume" ? resumePdf : cover_letter}
                target="_blank"
                rel="noreferrer"
                className="group text-white px-6 py-3 my-5 flex justify-center align-center items-center rounded-md bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Preview
              </a>
              <a
                href={modalType === "resume" ? resumePdf : cover_letter}
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
    </>
  );
};

export default SocialLinks;
