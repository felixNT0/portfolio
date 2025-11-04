import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiMedium, SiTiktok } from "react-icons/si";
import OtherContactDetails from "./OtherContactDetails";
import SendMailForm from "./SendMailForm";

const Contact = () => {
  return (
    <div name="contact" className="contact w-full min-h-screen p-4 pb-24 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <OtherContactDetails />
        <div className="flex flex-wrap items-center justify-center gap-5 my-4 text-black dark:text-white">
          <a
            href="https://x.com/FelixNT001"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            aria-label="X/Twitter"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61566528129656"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@felixnt001"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <SiTiktok size={26} />
          </a>
          <a
            href="https://medium.com/@felixnt0"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            aria-label="Medium"
          >
            <SiMedium size={26} />
          </a>
          <a
            href="https://www.instagram.com/tsowafelix/"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://discord.com/users/felixnt001"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
          >
            <FaDiscord size={28} />
          </a>
        </div>
        <SendMailForm />
      </div>
    </div>
  );
};

export default Contact;
