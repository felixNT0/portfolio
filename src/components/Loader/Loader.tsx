import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoIcon } from "./icons";

interface LoaderProps {
  loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
  const [isMounted, setIsMounted] = useState(loading ?? true);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (loading) {
      setIsMounted(true);
    } else {
      setIsSliding(true);
      setTimeout(() => {
        setIsSliding(false);
        setIsMounted(false);
      }, 1500);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {isMounted && !isSliding && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Smooth fade out internally if needed
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-dark-bg"
          >
            {/* Logo and Text Section */}
            <motion.div
              className="logo-container mb-8"
              initial={{ rotateY: 0 }}
              animate={{
                rotateY: [0, -180, 180, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <LogoIcon />
            </motion.div>

            <motion.div className="mt-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-extrabold tracking-widest text-slate-900 dark:text-white"
              >
                FKT
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSliding && (
          <>
            <motion.div
              className="fixed inset-y-0 left-0 z-[9999] w-1/2 bg-white dark:bg-dark-bg border-r border-slate-100 dark:border-white/5"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }} // smooth bezier
            />

            <motion.div
              className="fixed inset-y-0 right-0 z-[9999] w-1/2 bg-white dark:bg-dark-bg border-l border-slate-100 dark:border-white/5"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
