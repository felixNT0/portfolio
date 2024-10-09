import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import cover_letter from "../assets/cover_letter.pdf";
import resumePdf from "../assets/resume.pdf";
import { useAppContext } from "../contexts/useAppContext";
import useSocialLinks from "../hooks/useSocialLinks";

const SocialLinks = () => {
  const { allSocialLinks } = useSocialLinks();

  const { showOtherSideBar } = useAppContext();

  const [toggleModal, setToggleModal] = useState(false);
  const [modalType, setModalType] = useState("");

  // const closeModal = () => {
  //   setToggleModal(false);
  //   setModalType("");
  // };

  const openModal = (ModalType) => {
    setToggleModal(true);
    setModalType(ModalType);
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
        <Modal
          isModalOpen={toggleModal}
          toggleModal={() => setToggleModal(!toggleModal)}
          modalType={modalType}
        />
      ) : null}
    </>
  );
};

export default SocialLinks;

function Modal({ isModalOpen, toggleModal, modalType }) {
  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggleModal]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
            className={`relative bg-white rounded-lg p-4 z-80 max-sm:p-1 max-sm:m-5 max-sm:py-0 md:m-4 `}
          >
            <span
              onClick={toggleModal}
              className="flex justify-end items-end cursor-pointer mr-[10px] mt-[-20px] text-[#000] text-[35px] hover:text-red-500"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="modal-content animate">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
