import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp, FaLink, FaCheck } from "react-icons/fa";

const SocialShare = () => {
  const shareUrl = "https://fkt-portfolio.vercel.app/";
  const shareText =
    "Check out this amazing portfolio by Felix Kolo Tsowa - Software Engineer & Frontend Specialist!";

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

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
      <div className="flex items-center gap-6 relative">
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
        <button
          onClick={copyToClipboard}
          className={`text-slate-400 transition-colors duration-300 transform hover:scale-110 hover:text-primary-500 focus:outline-none flex items-center justify-center relative`}
          aria-label="Copy portfolio link"
          title="Copy Link"
        >
          {copied ? (
            <FaCheck size={18} className="text-green-500 animate-bounce" />
          ) : (
            <FaLink size={18} />
          )}
        </button>
        {copied && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-3 rounded-md shadow-lg font-bold animate-fade-in border border-white/10 whitespace-nowrap z-55">
            Link Copied!
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialShare;
