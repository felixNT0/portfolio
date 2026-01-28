import { motion } from "framer-motion";

function OtherContactDetails() {
  return (
    <div className="space-y-12">
      <div className="space-y-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">
              something amazing.
            </span>
          </h2>
          <div className="h-1.5 w-20 bg-primary-500 rounded-full mt-4"></div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Whether you have a question about a project, a job opportunity, or
          just want to say hi, my inbox is always open. I'm always looking for
          new challenges and interesting collaborators.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-4 shadow-sm"
        >
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
            Call Directly
          </h4>
          <div className="space-y-2">
            <a href="tel:+2349032328670" className="block text-xl font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
              +234 903 232 8670
            </a>
            <a href="tel:+2348083015143" className="block text-xl font-bold text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
              +234 808 301 5143
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 space-y-4 shadow-sm"
        >
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">
            Send an Email
          </h4>
          <a
            href="mailto:tsowafelix0@gmail.com"
            className="block text-xl font-bold text-primary-500 hover:text-primary-600 underline underline-offset-4 decoration-2 transition-all"
          >
            tsowafelix0@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
      >
        <a
          href="/resume.pdf"
          download
          className="w-full sm:w-auto text-center text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-8 py-4 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none"
        >
          Download Resume
        </a>
        <a
          href="mailto:tsowafelix0@gmail.com"
          className="w-full sm:w-auto text-center text-slate-600 dark:text-slate-300 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-8 py-4 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
        >
          Compose Email
        </a>
      </motion.div>
    </div>
  );
}

export default OtherContactDetails;
