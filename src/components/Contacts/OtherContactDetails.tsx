import { motion } from "framer-motion";

function OtherContactDetails() {
  return (
    <div className="space-y-12">
      <div className="space-y-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
              Something Amazing
            </span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-6"></div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
        >
          Whether you have a vision for a groundbreaking project, a high-stakes engineering role, or simply want to exchange ideas on the future of tech, my inbox is always open. I thrive on <span className="text-slate-900 dark:text-white font-bold">Complex Challenges</span> and high-impact collaborations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-10 rounded-[2.5rem] glass border-white/20 dark:border-white/5 space-y-4 shadow-2xl group hover:scale-[1.02] transition-all"
        >
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
            Call Directly
          </h4>
          <div className="space-y-3">
            <a href="tel:+2349032328670" className="block text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
              +234 903 232 8670
            </a>
            <a href="tel:+2348083015143" className="block text-2xl font-black text-slate-900 dark:text-white hover:text-primary-500 transition-colors">
              +234 808 301 5143
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-10 rounded-[2.5rem] glass border-white/20 dark:border-white/5 space-y-4 shadow-2xl group hover:scale-[1.02] transition-all"
        >
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
            Send an Email
          </h4>
          <a
            href="mailto:tsowafelix0@gmail.com"
            className="block text-2xl font-black text-primary-500 hover:text-primary-600 underline underline-offset-8 decoration-4 transition-all"
          >
            tsowafelix0@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
      >
        <a
          href="/resume.pdf"
          download
          className="w-full sm:w-auto text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-primary-500/20"
        >
          Download Resume
        </a>
        <a
          href="mailto:tsowafelix0@gmail.com"
          className="w-full sm:w-auto text-center glass text-slate-900 dark:text-white border-white/20 dark:border-white/10 px-10 py-5 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all hover:scale-105 active:scale-95 shadow-2xl"
        >
          Compose Email
        </a>
      </motion.div>
    </div>
  );
}

export default OtherContactDetails;
