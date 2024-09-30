import React from "react";
import "./ContactPopup.css";
import dp from '../../images/photo1.png'

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
        <div className="popup-img">
        <img src={dp} alt="Profile Dp"/>
        </div>
        <h1 className="popup-name">Abdullah</h1>
        <h2>Tayyab</h2>
        <h3 className="popup-proffession">Frontend Developer</h3>
        <h4><span>Co</span>ntact</h4>
        <div>
        <i class="fa fa-envelope"/>
          <a href="mailto: abdullahtayyab894@gmail.com" target="_blank">
            abdullahtayyab894@gamil.com
          </a>
        </div>
        <div>
        <i class="fa fa-linkedin"/>
          <a
            href="https://www.linkedin.com/in/abdullah--tayyab/"
            target="_blank"
          >
            https://www.linkedin.com/in/abdullah--tayyab/
          </a>
        </div>
        <div>
        <i class="fa fa-github"/>
          <a href="https://github.com/Ab-Tayyab" target="_blank">
            https://github.com/Ab-Tayyab
          </a>
        </div>
        <div>
        <i class="fa fa-whatsapp"/>
          <a href="https://wa.me/+923085630574" target="_blank">
            +92 308 5630574
          </a>
        </div>
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
        <i class="fa fa-close" onClick={onClose} />
      </div>
    </div>
  );
};

export default ContactPopup;
