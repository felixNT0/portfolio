import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/image.jpg";

const Home = () => {
  // const { toggleDarkMode } = useAppContext();

  useEffect(() => {
    let toggleSwitch = document.querySelector("input");

    toggleSwitch.addEventListener("change", (e) => {
      let body = document.querySelector("body");
      let title = document.querySelector("h4");

      if (e.target.checked) {
        body.style.backgroundColor = "#17193F";
        title.style.color = "#f8f8f8";
      } else {
        body.style.backgroundColor = "#f8f8f8";
        title.style.color = "#17193F";
      }
    });
  }, []);

  return (
    <div name="home" className={`h-auto w-full home`}>
      {/* <div className="dark_mode_button">
        <input className="input" type="checkbox" id="darkmode-toggle" />
        <label className="label" for="darkmode-toggle" />
      </div> */}
      <div className="home_welcome_texts">
        <div className="flex flex-col justify-center align-center text-center h-full">
          <h2
            data-aos="slide-right"
            className={`text-4xl sm:text-5xl font-bold text-white 
            text-center`}
          >
            Hy I'm <br />
            <br />
            <span style={{ color: "red", textAlign: "center" }}>
              Tsowa Kolo Felix
            </span>
          </h2>

          <p
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-teal-500 max-w-md text-center mt-5 px-5"
          >
            React JS and React Native | Frontend Developer | UI/UX & Graphic |
            Wordpress Designer with producting the Quality work
          </p>
          <div
            data-aos="slide-right"
            data-aos-delay="30"
            data-aos-duration="500"
            className="portfolio_btn"
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 my-5 flex justify-center align-center items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" small-screen hidden" data-aos="flip-right">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>

        <div className="big-screen" data-aos="slide-right">
          <img
            src={HeroImage}
            alt="profile"
            className="user_image rounded-3xl mx-auto w-2/3 md:w-half mb-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
