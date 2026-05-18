import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useAppContext } from "../../contexts/useAppContext";

interface WelcomeModalProps {
  isModalOpen: boolean;
}

function WelcomeModal({ isModalOpen }: WelcomeModalProps) {
  const { toggleModal, modalState } = useAppContext();

  const closeModal = (event: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLButtonElement>) => {
    if (event.target === event.currentTarget || (event.currentTarget as HTMLElement).tagName === 'BUTTON') {
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

  return (
    <AnimatePresence>
      {modalState && (
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
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100/50 hover:bg-slate-200/50 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-all duration-300 font-bold focus:outline-none"
              title="Close Modal"
            >
              &times;
            </button>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-4 mt-2">
                Welcome to my <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">Space</span>
              </h2>
              
              <p className="text-base font-semibold text-slate-500 dark:text-slate-300 leading-relaxed max-w-xs mx-auto mb-6">
                Explore a curated showcase of enterprise architectures, high-performance systems, and clean code craftsmanship.
              </p>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-8">
                Felix Kolo Tsowa • Software Engineer
              </p>

              <button
                onClick={closeModal}
                className="w-full py-4 rounded-2xl font-black bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-xl shadow-slate-900/20 dark:shadow-white/5 uppercase tracking-wider text-xs"
              >
                Explore Workspace
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeModal;
