import { motion } from "framer-motion";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiMedium, SiTiktok } from "react-icons/si";
import OtherContactDetails from "./OtherContactDetails";
import SendMailForm from "./SendMailForm";

const Contact = () => {
  const socialLinks = [
    { icon: <FaTwitter size={24} />, href: "https://x.com/FelixNT001", label: "X" },
    { icon: <FaFacebook size={24} />, href: "https://web.facebook.com/profile.php?id=61566528129656", label: "Facebook" },
    { icon: <SiTiktok size={22} />, href: "https://www.tiktok.com/@felixnt001", label: "TikTok" },
    { icon: <SiMedium size={22} />, href: "https://medium.com/@felixnt0", label: "Medium" },
    { icon: <FaInstagram size={24} />, href: "https://www.instagram.com/tsowafelix/", label: "Instagram" },
    { icon: <FaDiscord size={24} />, href: "https://discord.com/users/felixnt001", label: "Discord" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div id="contact" className="w-full py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[40%] right-[-10%] w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center h-full space-y-24 relative z-10">
        <OtherContactDetails />
        
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] whitespace-nowrap">
              Ecosystem Connect
            </h3>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-primary-500/20 via-slate-100 dark:via-white/5 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="w-16 h-16 flex items-center justify-center rounded-2xl glass border-white/20 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <SendMailForm />
      </div>
    </div>
  );
};

export default Contact;
