import { useState } from "react";

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
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">
            Send a message
          </h3>
          <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              value={values.name}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              value={values.email}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={6}
            required
            value={values.message}
            onChange={handleChange}
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm resize-none"
          ></textarea>
        </div>

        {statusMessage && (
          <div className={`p-4 rounded-2xl text-sm font-medium ${isError ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400" : "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400"}`}>
            {statusMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-200 dark:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative">{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </div>
  );
}

export default SendMailForm;
