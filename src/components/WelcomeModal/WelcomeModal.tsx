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
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-black hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400"
              title="Close Modal"
            >
              &times;
            </button>
            <div className="p-3 sm:mt-[-20px]">
              <h1 className="text-center text-amber-500 dark:text-cyan-500 text-3xl max-sm:text-xl font-bold">
                Welcome to my Portfolio
              </h1>
              <p className="text-center text-gray-700 dark:text-black text-1xl font-bold mt-3">
                This is where you will see everything about my experience,
                works, skills and lot more...
              </p>
              <p
                style={{ fontSize: "10px" }}
                className="text-center text-gray-700 dark:text-black font-bold mt-5"
              >
                Thanks for visiting my Portfolio Website
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeModal;
