import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialShare = () => {
  const shareUrl = "https://fkt-portfolio.vercel.app/";
  const shareText =
    "Check out this amazing portfolio by Felix Kolo Tsowa - Frontend Engineer!";

  const platforms = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      color: "hover:text-[#25D366]",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={20} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#4267B2]",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-white/10 w-full max-w-md mx-auto">
      <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
        Share Portfolio
      </h3>
      <div className="flex items-center gap-6">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-slate-400 transition-colors duration-300 transform hover:scale-110 ${platform.color}`}
            aria-label={`Share on ${platform.name}`}
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
