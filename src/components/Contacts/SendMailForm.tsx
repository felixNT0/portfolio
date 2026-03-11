import { useState } from "react";
import { motion } from "framer-motion";

function SendMailForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!values.name || !values.email || !values.message) {
      setIsError(true);
      setStatusMessage("Please fill out all fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setIsError(false);
      setStatusMessage("");

      const response = await fetch("https://formsubmit.co/ajax/tsowafelix0@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: "New portfolio contact",
          _template: "table",
          _captcha: "false",
          _replyto: values.email
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("Thanks! Your message has been sent successfully.");
        setIsError(false);
        setValues({ name: "", email: "", message: "" });
      } else {
        setIsError(true);
        setStatusMessage(
          data.message || "Something went wrong. Please try again later."
        );
      }
    } catch (error: any) {
      setIsError(true);
      setStatusMessage(
        "Request error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto pt-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-10"
      >
        <div className="flex items-center gap-6">
          <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] whitespace-nowrap">
            Send a message
          </h3>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-primary-500/20 via-slate-100 dark:via-white/5 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={values.name}
              onChange={handleChange}
              className="w-full px-8 py-5 rounded-[1.5rem] glass bg-white/50 dark:bg-dark-bg/50 border-white/20 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm font-semibold"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              value={values.email}
              onChange={handleChange}
              className="w-full px-8 py-5 rounded-[1.5rem] glass bg-white/50 dark:bg-dark-bg/50 border-white/20 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm font-semibold"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Message</label>
          <textarea
            name="message"
            placeholder="How can I help you today?"
            rows={6}
            required
            value={values.message}
            onChange={handleChange}
            className="w-full px-8 py-5 rounded-[1.5rem] glass bg-white/50 dark:bg-dark-bg/50 border-white/20 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm resize-none font-semibold leading-relaxed"
          ></textarea>
        </div>

        {statusMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl text-sm font-black uppercase tracking-widest ${isError ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border border-red-100 dark:border-red-500/20" : "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400 border border-green-100 dark:border-green-500/20"}`}
          >
            {statusMessage}
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative px-10 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl hover:shadow-primary-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative">{isSubmitting ? "Architecting..." : "Forge Connection"}</span>
        </button>
      </form>
    </div>
  );
}

export default SendMailForm;
