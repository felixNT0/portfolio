import React, { useEffect } from "react";
import { useAppContext } from "../../contexts/useAppContext";
import "../../styles/modal.css";

function WelcomeModal() {
  const { toggleModal } = useAppContext();

  const closeModal = () => {
    document.getElementById("showModal").style.display = "none";
    toggleModal();
  };

  useEffect(() => {
    var modal = document.getElementById("showModal");

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  return (
    <div id="showModal" class="modal">
      <div className="modal-content animate">
        <span onClick={closeModal} className="close" title="Close Modal">
          &times;
        </span>
        <div className="container ">
          <h1 className="text-center text-[#fca61f] dark:text-[#4db5ff] text-3xl font-bold welcome_text">
            Welcome to my Portfolio
          </h1>
          <p className="text-center text-gray-700 dark:text-black text-1xl font-bold mt-3">
            This is where you will see everything about my experience, works,
            skills and lot more...
          </p>
          <p
            style={{ fontSize: "10px" }}
            className="text-center text-gray-700 dark:text-black] font-bold mt-5"
          >
            Thanks for visiting my Portfolio Website
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;
