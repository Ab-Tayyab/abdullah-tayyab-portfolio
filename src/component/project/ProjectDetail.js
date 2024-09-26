import React, { useState } from "react";
import "./ProjectDetail.css";

function ProjectDetail() {
  // State to control the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <i
        class="fa fa-eye"
        style={{ fontSize: "40px", textAlign: "right", color: "#97a6b4" }}
        
        onClick={openPopup}
      >click</i>

      {/* <button className="open-popup-btn" onClick={openPopup}>
        Open Popup
      </button> */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <img
              src="https://via.placeholder.com/300"
              alt="Example"
              className="popup-image"
            />
            <h2>Popup Title</h2>
            <p>
              This is a description of the popup content. You can add more
              details here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
