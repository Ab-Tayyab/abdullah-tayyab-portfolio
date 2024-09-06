import React from "react";
import photo from "../../images/photo3.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import "./Home.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Home = () => {
  return (
    <div className="home-parent" id="home">
      <div className="home-parent-child1">
        <img className="img-animation" src={photo} alt="Personal Showcase"/>
      </div>
      <div>
        <div className="home-parent-child2">
          <div className="home-parent-child2-subchild">
            <h3 data-aos="fade-up" data-aos-duration="500">
              I'm Abdullah Tayyab
            </h3>
            <p data-aos="fade-up" data-aos-duration="1500">
              React Js Developer
            </p>
            <p data-aos="fade-up" data-aos-duration="3000">
              I am confident in my ability to create visually appealing and
              user-friendly interfaces. Although I have also experience with
              back-end.
            </p>
          </div>
          <div>
            <div className="home-parent-child2-subchild2">
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
        <div className="home-contact img-animation">
          <a
            className="social-link social-icone"
            href="https://wa.me/+923085630574"
            target="_black"
          >
            Say Hello!
            <PhoneInTalkIcon className="contact-icone" />
          </a>
        </div>
      </div>
      <div className="slide-container">
        <div className="slide-text">
          <p>
            Welcome! I'm Abdullah Tayyab, a creative, confident reactjs
            Developer that have an 6 month of experience in HTML, CSS,
            JavaScript, ReactJS, Redux, Npm Libraries, MUI, BootStrap, GitHub
            and also have experience in NodeJS with ExpressJS and MongoDB. I
            complete my internship which is consist of about 5 to 6 month and
            complete many projects and after that i attend bootcamp for 2 month
            and work on both fron-end and back-end and build a Mern E-commerce
            Site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
