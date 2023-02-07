import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="about_component w-full h-auto  text-white about mb-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          className="pb-8"
          data-aos="slide-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <p className="text-4xl font-bold inline border-b-4 color-red border-gray-500">
            About Me
          </p>
        </div>
        {/* 
        <div style={{display:"flex",width:"100%",gap:"40px"}}>
          <div style={{width:"88%"}}> */}
        <div>
          <p
            data-aos="zoom-in"
            data-aos-delay="30"
            data-aos-duration="700"
            className="text-xl mt-5 "
          >
            Hi there, I'm{" "}
            <span style={{ color: "tomato" }}>Felix Kolo Tsowa</span> - a
            Front-End Developer. I develop beautiful and user-friendly websites.
            I like what I’m currently doing (Web Development! and App
            Development!…).
          </p>

          <br />

          <p
            data-aos="zoom-out"
            data-aos-delay="30"
            data-aos-duration="500"
            className="text-xl"
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
            moments and playing musical instruments.
          </p>
        </div>
        {/* </div> */}
        {/* <div style={{marginTop:"20px",paddingTop:"20px"}}>
              <img src="C:\Users\vishe\Downloads\vishesh1.png" width="500" height="auto" ></img>
            </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
