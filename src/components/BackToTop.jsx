import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import "../styles/styles.css";

function BackToTop() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <Link to={"_navbar_"} smooth duration={1000}>
      <div
        id="bottom"
        data-aos="slide-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="back_to_top bg-[#fca61f] dark:bg-[#4db5ff] duration-500"
      >
        <FaArrowUp />
      </div>
    </Link>
  );
}

export default BackToTop;
