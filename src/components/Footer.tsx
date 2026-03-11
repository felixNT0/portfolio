import { motion } from "framer-motion";
import SocialShare from "./SocialShare";

function Footer() {
  return (
    <footer className="w-full py-12 bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-widest uppercase italic">
          Kolo<span className="text-primary-500">.</span>
        </h2>
        
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          Senior Software Engineer architecting high-performance digital ecosystems for global impact.
        </p>

        <div className="flex flex-col items-center space-y-2 pt-4">
          <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Felix Kolo Tsowa
          </p>
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
            Crafted with Precision & Passion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
