import React from "react";
import OtherContactDetails from "./OtherContactDetails";
import SendMailForm from "./SendMailForm";

const Contact = () => {
  return (
    <div name="contact" className="contact w-full h-screen  p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <OtherContactDetails />
        <SendMailForm />
      </div>
    </div>
  );
};

export default Contact;
