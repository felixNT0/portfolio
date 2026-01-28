import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/styles.css";

const ScrollLink = Link as any;

function BackToTop({ isVisible = false }: { isVisible?: boolean }) {
  // function topFunction() {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-6 z-50"
        >
          <ScrollLink to={"top-anchor"} smooth duration={1000}>
            <div
              className="back_to_top bg-[#fca61f] dark:bg-[#4db5ff] duration-500 !static !m-0"
              style={{ display: "block" }} // Ensure it's visible since we handle visibility with Framer Motion
            >
              <FaArrowUp />
            </div>
          </ScrollLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
