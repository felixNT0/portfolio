import { motion } from "framer-motion";
import { useState } from "react";

import resumePdf from "../assets/resume.pdf";
// import { useAppContext } from "../contexts/useAppContext";
import useSocialLinks from "../hooks/useSocialLinks";

function BottomNavBar() {
  const { allBottomSocialLinks } = useSocialLinks();

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
          {allBottomSocialLinks.map(({ id, child, href, download }) => (
            <li
              key={id}
              className={
                "flex justify-center items-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 bg-slate-100/50 dark:bg-white/10 text-slate-700 dark:text-white border border-slate-200/50 dark:border-white/10"
              }
            >
              {download ? (
                <div
                  className="flex justify-center items-center w-full h-full cursor-pointer text-slate-700 dark:text-white"
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
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-900/60 dark:bg-slate-950/70 z-[2000] backdrop-blur-md">
            <div className="relative glass rounded-[2.5rem] p-10 max-w-md w-full mx-6 border-white/40 dark:border-white/5 shadow-2xl overflow-hidden text-center">
              {/* Glowing accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>

              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100/50 hover:bg-slate-200/50 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-all duration-300 font-bold focus:outline-none"
                title="Close Modal"
              >
                &times;
              </button>

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-snug mb-6 mt-4">
                  Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">Access</span>
                </h2>
                
                <p className="text-base font-semibold text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs mx-auto mb-8">
                  Would you like to preview or download Felix's <span className="text-primary-600 dark:text-primary-400 font-bold capitalize">Resume</span>?
                </p>

                <div className="w-full flex flex-col gap-4 relative z-10">
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-2xl font-black transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-slate-900/10 flex items-center justify-center uppercase tracking-wider text-xs border border-transparent dark:border-white/10"
                  >
                    Preview Resume
                  </a>
                  <a
                    href={resumePdf}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 glass text-slate-900 dark:text-white rounded-2xl font-black transition-all hover:scale-[1.03] active:scale-95 shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 flex items-center justify-center uppercase tracking-wider text-xs border border-slate-200/50 dark:border-white/10"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default BottomNavBar;
