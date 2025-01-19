import React from "react";
import photo from "../../images/photo3.png";
import "./Home.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Home = () => {
  return (
    <div className="home-container section" id="home">
      <div
        className="home-img"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <img className="img-animation" src={photo} alt="Personal Showcase" />
      </div>
      <div
        className="home-content"
        data-aos="zoom-in-left"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <div className="home-text text-styling">
          <h3>I'm Abdullah Tayyab</h3>
          <p>
            Javascript Developer || React-Js Developer || Mern Stack Developer
          </p>
          <div className="home-links links-animation">
            <a
              className="social"
              href="https://www.facebook.com/this.abdullah.8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              className="social"
              href="https://github.com/Ab-Tayyab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/in/abdullah--tayyab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              className="social"
              href="https://wa.me/+923085630574"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
          </div>
          <div className="home-contact">
            <a href="https://wa.me/+923085630574" target="_blank">
              Say Hello !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
