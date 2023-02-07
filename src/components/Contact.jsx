import React, { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  function handleSubmit(e) {
    if (values.name && values.email && values.message) {
      setTimeout(() => {
        e.target.reset();
      }, 500);
    } else {
      alert("value can't be empty");
    }
  }
  return (
    <div name="contact" className="contact w-full h-screen  p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p
            data-aos="slide-right"
            data-aos-delay="50"
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            I'D LOVE TO HEAR FROM YOU
          </p>
          <p data-aos="slide-down" data-aos-delay="50" className="py-6">
            If you are interested to hire me I am always open to new
            opportunities and interesting projects! Feel free to contact me if
            you have any other requests or questions regarding web development.
          </p>
        </div>

        <h1
          data-aos="slide-right"
          data-aos-delay="50"
          style={{ textAlign: "center" }}
        >
          REACH OUT TO ME DIRECTLY ON -{" "}
          <span
            style={{
              color: "white",
              background: "teal",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            +2349032328670 0r +2348083015143
          </span>
        </h1>
        <br></br>

        <h1 style={{ textAlign: "center" }}>OR</h1>
        <br></br>

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

            <button
              data-aos="slide-down"
              data-aos-delay="60"
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
