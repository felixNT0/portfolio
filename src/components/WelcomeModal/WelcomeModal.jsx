import { useAppContext } from "../../contexts/useAppContext";
import { motion, AnimatePresence } from "framer-motion";

function WelcomeModal() {
  const { toggleModal, modalState } = useAppContext();

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

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
            <span
              onClick={closeModal}
              className="flex justify-end items-end cursor-pointer mr-[10px] mt-[-20px] text-[#000] text-[35px] hover:text-red-500"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="p-3 mt-[-20px]">
              <h1 className="text-center text-[#fca61f] dark:text-[#4db5ff] text-3xl font-bold">
                Welcome to my Portfolio
              </h1>
              <p className="text-center text-gray-700 dark:text-black text-1xl font-bold mt-3">
                This is where you will see everything about my experience,
                works, skills and lot more...
              </p>
              <p
                style={{ fontSize: "10px" }}
                className="text-center text-gray-700 dark:text-black] font-bold mt-5"
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
