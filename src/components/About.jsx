import { allPortfolios } from "../AllPortfolioDetails/AllPortfolios";

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
            I'm <span style={{ color: "tomato" }}>Felix Kolo Tsowa</span>, a{" "}
            <span style={{ color: "tomato" }}>Frontend Developer</span> with
            over 4 years of experience crafting exceptional digital solutions
            that drive business growth and user engagement.
          </p>

          <br />

          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-lg dark:text-white text-black"
          >
            <span style={{ color: "tomato", fontWeight: "bold" }}>
              What I Deliver:
            </span>{" "}
            I specialize in building scalable, high-performance applications
            that transform ideas into profitable digital products. My expertise
            spans across{" "}
            <span style={{ color: "teal" }}>E-commerce platforms</span>,{" "}
            <span style={{ color: "teal" }}>FinTech solutions</span>,{" "}
            <span style={{ color: "teal" }}>Real Estate platforms</span>,{" "}
            <span style={{ color: "teal" }}>Educational systems</span>,{" "}
            <span style={{ color: "teal" }}>Mobile applications</span>,{" "}
            <span style={{ color: "teal" }}>Web applications</span>,{" "}
            <span style={{ color: "teal" }}>Desktop applications</span>,{" "}
            <span style={{ color: "teal" }}>Backend services</span>,{" "}
            <span style={{ color: "teal" }}>API development</span>,{" "}
            <span style={{ color: "teal" }}>Database management</span>,{" "}
            <span style={{ color: "teal" }}>Testing and debugging</span>,{" "}
            <span style={{ color: "teal" }}>Performance optimization</span>,{" "}
            <span style={{ color: "teal" }}>Responsive design</span>,{" "}
            <span style={{ color: "teal" }}>Scalable architecture</span>,{" "}
            <span style={{ color: "teal" }}>Enterprise SaaS applications</span>.
          </p>

          <br />

          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-lg dark:text-white text-black"
          >
            <span style={{ color: "tomato", fontWeight: "bold" }}>
              Technical Excellence:
            </span>{" "}
            I leverage cutting-edge technologies including{" "}
            <span style={{ color: "teal" }}>React.js</span>,{" "}
            <span style={{ color: "teal" }}>Next.js</span>,{" "}
            <span style={{ color: "teal" }}>React Native</span>,{" "}
            <span style={{ color: "teal" }}>Node.js</span>, and{" "}
            <span style={{ color: "teal" }}>Streamlit</span> to create seamless
            user experiences and rapid data-driven apps. I also build backend
            APIs and services using the{" "}
            <span style={{ color: "teal" }}>MERN</span> stack (MongoDB,
            Express.js, React, Node.js) and related technologies (REST, GraphQL,
            PostgreSQL). My development process focuses on{" "}
            <span style={{ color: "teal" }}>performance optimization</span>,{" "}
            <span style={{ color: "teal" }}>responsive design</span>, and{" "}
            <span style={{ color: "teal" }}>scalable architecture</span> that
            grows with your business.
          </p>

          <br />

          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-lg dark:text-white text-black"
          >
            <span style={{ color: "tomato", fontWeight: "bold" }}>
              Proven Track Record:
            </span>{" "}
            I've successfully delivered{" "}
            <span style={{ color: "teal" }}>
              {allPortfolios?.length}+ projects
            </span>{" "}
            for clients ranging from{" "}
            <span style={{ color: "teal" }}>startups</span> to{" "}
            <span style={{ color: "teal" }}>enterprise companies</span> across{" "}
            <span style={{ color: "teal" }}>7 countries</span>. My work has
            helped businesses increase user engagement, streamline operations,
            and achieve measurable ROI improvements.
          </p>

          <br />

          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-lg dark:text-white text-black"
          >
            <span style={{ color: "tomato", fontWeight: "bold" }}>
              Why Choose Me:
            </span>{" "}
            I combine <span style={{ color: "teal" }}>technical expertise</span>{" "}
            with <span style={{ color: "teal" }}>business acumen</span> to
            deliver solutions that not only look great but also drive results.
            I'm committed to{" "}
            <span style={{ color: "teal" }}>transparent communication</span>,{" "}
            <span style={{ color: "teal" }}>on-time delivery</span>, and{" "}
            <span style={{ color: "teal" }}>ongoing support</span> to ensure
            your project's success.
          </p>

          <br />

          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-lg dark:text-white text-black"
          >
            <span style={{ color: "tomato", fontWeight: "bold" }}>
              Let's Build Something Amazing:
            </span>{" "}
            Whether you need a{" "}
            <span style={{ color: "teal" }}>custom web application</span>,{" "}
            <span style={{ color: "teal" }}>mobile app</span>, or{" "}
            <span style={{ color: "teal" }}>digital transformation</span> of
            your existing systems, I'm here to turn your vision into reality.
            Let's discuss how I can help your business thrive in the digital
            age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
