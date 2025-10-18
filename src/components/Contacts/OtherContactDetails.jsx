function OtherContactDetails() {
  return (
    <>
      <div className="pb-8">
        <p
          data-aos="slide-right"
          data-aos-delay="50"
          className="text-4xl font-bold inline border-b-4 border-gray-500 dark:text-white text-black"
        >
          I'D LOVE TO HEAR FROM YOU
        </p>
        <p
          data-aos="slide-down"
          data-aos-delay="50"
          className="py-6 dark:text-white text-black"
        >
          If you are interested to hire me I am always open to new opportunities
          and interesting projects! Feel free to contact me if you have any
          other requests or questions regarding Software Development.
        </p>
      </div>

      <h1
        data-aos="slide-right"
        data-aos-delay="50"
        style={{ textAlign: "center" }}
        className="dark:text-white text-black"
      >
        REACH OUT TO ME DIRECTLY ON -{" "}
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          className="bg-[#fca61f] dark:bg-[#4db5ff]"
        >
          <a href="tel:+2349032328670" className="underline">+2349032328670</a>
          {" "}/ {" "}
          <a href="tel:+2348083015143" className="underline">+2348083015143</a>
        </span>
      </h1>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <p
          className="dark:text-white text-black"
          data-aos="zoom-in"
          data-aos-delay="40"
        >
          Prefer email? Contact me at:{" "}
          <a
            href="mailto:tsowafelix0@gmail.com"
            className="text-[#fca61f] dark:text-[#4db5ff] underline"
          >
            tsowafelix0@gmail.com
          </a>
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="text-white bg-[#fca61f] dark:bg-[#4db5ff] px-6 py-3 cursor-pointer rounded-md hover:scale-105 duration-200"
          >
            Download Resume
          </a>
          <a
            href="mailto:tsowafelix0@gmail.com"
            className="text-white bg-gray-700 px-6 py-3 rounded-md hover:scale-105 duration-200"
          >
            Email Me
          </a>
        </div>
      </div>
      <br></br>

      <h1 style={{ textAlign: "center" }}>OR</h1>
      <br></br>
    </>
  );
}

export default OtherContactDetails;
