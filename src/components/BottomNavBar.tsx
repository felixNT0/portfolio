import { motion } from "framer-motion";
import { useState } from "react";

import resumePdf from "../assets/resume.pdf";
// import { useAppContext } from "../contexts/useAppContext";
import useSocialLinks from "../hooks/useSocialLinks";

function BottomNavBar() {
  const { allSocialLinks } = useSocialLinks();

  // const { showOtherSideBar } = useAppContext();

  const [toggleModal, setToggleModal] = useState(false);

  const closeModal = () => {
    setToggleModal(false);
  };

  const openModal = () => {
    setToggleModal(true);
  };
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl py-3 px-6 left-1/2 sm:hidden bottom-6 fixed duration-300 z-[100] w-[90%] max-w-[400px]"
      >
        <ul className="flex flex-row justify-around items-center gap-4">
          {allSocialLinks.map(({ id, child, href, download }) => (
            <li
              key={id}
              className={
                "flex justify-center items-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 bg-slate-100/50 dark:bg-white/10 text-slate-700 dark:text-white border border-slate-200/50 dark:border-white/10"
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
                  className="flex justify-center items-center w-full h-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
      <div>
        {toggleModal ? (
          <div id="showConfimationModal" className="modal">
            <div className="modal-content animate">
              <span onClick={closeModal} className="close" title="Close Modal">
                &times;
              </span>
              <div className="container ">
                <h1 className="text-center text-primary-600 dark:text-accent-500 text-3xl font-bold welcome_text">
                  Did you want to Preview or Download the resume?
                </h1>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="group text-white px-6 py-3 my-5 flex justify-center align-center items-center rounded-xl bg-primary-600 dark:bg-gradient-to-r from-primary-500 to-accent-500 hover:scale-105 transition-all shadow-xl shadow-primary-500/20 cursor-pointer border border-primary-700/50 dark:border-white/10"
                >
                  Preview
                </a>
                <a
                  href={resumePdf}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="group text-white px-6 py-3 my-5 flex justify-center align-center items-center rounded-xl bg-accent-600 dark:bg-gradient-to-r from-accent-500 to-primary-500 hover:scale-105 transition-all shadow-xl shadow-accent-500/20 cursor-pointer border border-accent-700/50 dark:border-white/10"
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
}

export default BottomNavBar;
