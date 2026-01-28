import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full py-12 bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-white/5">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start space-y-2"
        >
          <span className="text-2xl font-signature text-slate-900 dark:text-white">
            Felix
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Building digital experiences that matter.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-right space-y-2"
        >
          <div className="text-sm font-medium text-slate-900 dark:text-white">
            &copy; {new Date().getFullYear()} Tsowa Kolo Felix
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Handcrafted with Passion & Precision
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
