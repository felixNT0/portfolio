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

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  async function handleSubmit(e) {
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

      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage("Thanks! Your message has been sent.");
        setIsError(false);
        setValues({ name: "", email: "", message: "" });
        form.reset();
      } else {
        setIsError(true);
        setStatusMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className=" flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        action="https://getform.io/f/5d3543d6-d1df-4039-8d76-daef9bb0d17f"
        className=" flex flex-col w-full md:w-1/2"
      >
        <input
          data-aos="zoom-in"
          data-aos-delay="30"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          onChange={handleChange}
          className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
        />
        <input
          data-aos="slide-right"
          data-aos-delay="40"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleChange}
          className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
        />
        <textarea
          data-aos="fade-up"
          data-aos-delay="50"
          name="message"
          placeholder="Enter your message"
          rows="10"
          required
          onChange={handleChange}
          className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
        ></textarea>

        {statusMessage ? (
          <p
            className={`${
              isError ? "text-red-400" : "text-green-400"
            } text-sm mt-2`}
          >
            {statusMessage}
          </p>
        ) : null}

        <button
          data-aos="slide-down"
          data-aos-delay="60"
          type="submit"
          disabled={isSubmitting}
          className="text-white bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default SendMailForm;
