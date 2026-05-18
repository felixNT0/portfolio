import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import cover_letter from "../assets/cover_letter.pdf";
import resumePdf from "../assets/resume.pdf";
// import { useAppContext } from "../contexts/useAppContext";
import useSocialLinks from "../hooks/useSocialLinks";

const SocialLinks = () => {
  const { allSocialLinks } = useSocialLinks();

  // const { showOtherSideBar } = useAppContext();

  const [toggleModal, setToggleModal] = useState(false);
  const [modalType, setModalType] = useState("");

  // const closeModal = () => {
  //   setToggleModal(false);
  //   setModalType("");
  // };

  const openModal = (ModalType: string) => {
    setToggleModal(true);
    setModalType(ModalType);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-md:bottom_navbar max-sm:hidden flex flex-col max-md:bottom-5 max-md:right-[50%] max-md:left-[50%] max-md:justify-center max-md:items-center max-md:flex-row lg:top-[35%]  lg:left-0 fixed "
      >
        <ul>
          {allSocialLinks.map(({ id, child, href, style, download, type, label }) => {
            return (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-r-xl duration-300 glass border-l-0" +
                  " " +
                  style
                }
                title={label}
              >
                {download ? (
                  <div
                    className="flex justify-between items-center w-full text-slate-900 dark:text-white cursor-pointer"
                    onClick={() => type && openModal(type)}
                    aria-label={`Open ${label} modal`}
                  >
                    {child}
                  </div>
                ) : (
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-slate-900 dark:text-white"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${label} profile`}
                  >
                    {child}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
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

interface ModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  modalType: string;
}

function Modal({ isModalOpen, toggleModal, modalType }: ModalProps) {
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
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
    const handleKeyPress = (event: KeyboardEvent) => {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/60 dark:bg-slate-950/70 z-[2000] backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative glass rounded-[2.5rem] p-10 max-w-md w-full mx-6 border-white/40 dark:border-white/5 shadow-2xl overflow-hidden text-center"
          >
            {/* Glowing accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>

            <button
              onClick={toggleModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100/50 hover:bg-slate-200/50 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-all duration-300 font-bold focus:outline-none"
              title="Close Modal"
            >
              &times;
            </button>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-snug mb-6 mt-4">
                Document <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">Access</span>
              </h2>
              
              <p className="text-base font-semibold text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs mx-auto mb-8">
                Would you like to preview or download Felix's <span className="text-primary-600 dark:text-primary-400 font-bold capitalize">{modalType === "resume" ? "Resume" : "Cover Letter"}</span>?
              </p>

              <div className="w-full flex flex-col gap-4 relative z-10">
                <a
                  href={modalType === "resume" ? resumePdf : cover_letter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-2xl font-black transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-slate-900/10 flex items-center justify-center uppercase tracking-wider text-xs border border-transparent dark:border-white/10"
                >
                  Preview Document
                </a>
                <a
                  href={modalType === "resume" ? resumePdf : cover_letter}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 glass text-slate-900 dark:text-white rounded-2xl font-black transition-all hover:scale-[1.03] active:scale-95 shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 flex items-center justify-center uppercase tracking-wider text-xs border border-slate-200/50 dark:border-white/10"
                >
                  Download Copy
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
