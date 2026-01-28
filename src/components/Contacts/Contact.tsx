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
    <div id="contact" className="w-full py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center h-full space-y-16">
        <OtherContactDetails />
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">
              Social Connect
            </h3>
            <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
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
