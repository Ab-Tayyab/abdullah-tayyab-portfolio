import React from "react";
import "./ContactPopup.css";

const ContactPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-overlay ${isOpen ? "active" : ""}`}>
      <div className={`popup-content ${isOpen ? "slide-in" : "slide-out"}`}>
        <h1>Contact Me</h1>
        <p>Email: abdullahtayyab@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Location: Lahore, Pakistan</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactPopup;
