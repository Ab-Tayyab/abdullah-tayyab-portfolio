import React from "react";
import "./ContactPopup.css";

const ContactPopup = ({ isOpen, onClose }) => {
  const onDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./abdullah tayyab resume.pdf";
    link.click();
  };
  const onDownloadCoverLetter = () => {
    const link = document.createElement("a");
    link.href = "./abdullah tayyab cover letter.pdf";
    link.click();
  };
  return (
    <div className={`contact-popup ${isOpen ? "active" : ""}`}>
      <div
        className={`contact-popup-content ${isOpen ? "slide-in" : "slide-out"}`}
      >
        <h1>Contact Me</h1>
        <h2>
          Email:
          <a href="mailto: abdullahtayyab894@gmail.com" target="_blank">
            abdullahtayyab894@gamil.com
          </a>
        </h2>
        <h2>
          Linked:
          <a href="https://www.linkedin.com/in/abdullah--tayyab/" target="_blank">
            https://www.linkedin.com/in/abdullah--tayyab/
          </a>
        </h2>
        <h2>
          GitHub:
          <a href="https://github.com/Ab-Tayyab" target="_blank">
            https://github.com/Ab-Tayyab
          </a>
        </h2>
        <h2>
          Whatsapp: <a href="https://wa.me/+923085630574" target="_blank">+92 308 5630574</a>
        </h2>
        <div>
          <div className="contact-btn">
            <button className="contact-resume" onClick={onDownloadResume}>
              Resume
            </button>
            <button className="contact-letter" onClick={onDownloadCoverLetter}>
              Cover Letter
            </button>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactPopup;
