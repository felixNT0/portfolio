const About = () => {
  return (
    <div
      name="about"
      className="about_component w-full h-auto my-10 text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          className="pb-8"
          data-aos="slide-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <p className="text-4xl font-bold inline border-b-4 dark:text-white text-black color-red border-gray-500">
            About Me
          </p>
        </div>

        <div>
          <p
            data-aos="zoom-in"
            data-aos-delay="30"
            data-aos-duration="700"
            className="text-lg mt-5 dark:text-white text-black"
          >
            Hi there, I'm{" "}
            <span style={{ color: "tomato" }}>Felix Kolo Tsowa</span> - a
            Front-End Engineer. I develop beautiful and user-friendly websites.
            I like what I’m currently doing (Web Development! and App
            Development!…).
          </p>

          <br />
          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-lg dark:text-white text-black"
          >
            3+ years experienced in Front-End Developing with hands-on
            experience in identifying web-based user interactions along with
            designing & implementing highly-responsive user interface components
            by deploying React concepts. also experienced with graphic design
            applications (e.g., Adobe Illustrator, Photoshop and Figma).
            Proficient in translating designs & wireframes into high-quality
            code, and writing application interface code via Javascript and
            React workflows. Also good at monitoring & maintaining frontend
            performance and troubleshooting & debugging the same time for better
            overall performance. As a highly skilled front-end developer with 4+
            years of experience, I am adept in creating and implementing
            user-friendly interfaces, developing and maintaining responsive
            websites, and collaborating with cross-functional teams to deliver
            high-quality digital experiences. With a keen eye for design and a
            passion for clean, efficient code, I am committed to staying
            up-to-date with the latest front-end technologies and best
            practices. Through my strong problem-solving skills and attention to
            detail, I have successfully delivered projects for clients ranging
            from small startups to large enterprises. I am excited to leverage
            my skills and experience to contribute to the success of your team.
          </p>
          <br />

          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-lg dark:text-white text-black"
          >
            Talking about my personality, I describe myself as a{" "}
            <span style={{ color: "teal" }}>result-oriented </span> person,
            great <span style={{ color: "teal" }}> team player </span> yet
            competent solo worker and an{" "}
            <span style={{ color: "teal" }}>efficient </span> individual. You
            can image me as a <span style={{ color: "teal" }}>diligent</span>{" "}
            and <span style={{ color: "teal" }}>easygoing</span> person with a
            good sense of humour.
            <br /> <br />I enjoy designing new stuff and learning new
            Technologies. If I'm not on my computer, am travelling, capturing
            moments or playing musical instruments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
