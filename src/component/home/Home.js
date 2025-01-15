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
      <div className="home-img">
        <img className="img-animation" src={photo} alt="Personal Showcase" />
      </div>
      <div className="home-content">
        <div className="home-text text-styling">
          <h3 data-aos="fade-left" data-aos-duration="1000">
            I'm Abdullah Tayyab
          </h3>
          <p data-aos="fade-left" data-aos-duration="1500">
            Javascript Developer || React-Js Developer || Mern Stack Developer
          </p>
          <div className="home-contact" 
            data-aos="fade-up" data-aos-duration="2000"
          >
            <a
              href="https://wa.me/+923085630574"
              target="_blank"
            >
              Say Hello !
            </a>
          </div>
        </div>
        <div>
          <div className="home-links links-animation">
            <a
              className="social"
              href="https://www.facebook.com/this.abdullah.8/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              className="social"
              href="https://github.com/Ab-Tayyab"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <GitHubIcon />
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/in/abdullah--tayyab/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <LinkedInIcon />
            </a>
            <a
              className="social"
              href="https://wa.me/+923085630574"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
